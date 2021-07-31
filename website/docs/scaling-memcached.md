---
title: Scaling Memcached
---

Published on April 14, 2021

Article review for [Melodies Sim's Medium Article: Lessons Learnt from Scaling Memcached in Production](https://levelup.gitconnected.com/lessons-learnt-from-scaling-memcached-in-production-86778ab616c7)

## Context

Memcached is a(n):

- In-memory cache typically used for look-aside caching
  - Look-aside versus look-through caching: see slides 14 and 15 of [Princeton COS 316 Intro to Caching](https://www.cs.princeton.edu/courses/archive/fall19/cos316/lectures/08-caching.pdf)
  - Look-aside caching: client requests item from backing store (database) on cache miss; simpler implementation, more flexible, slower on misses
  - Look-through caching: cache requests item from backing store on cache miss; harder implementation, less flexible, better consistency
- Simple implementation without built-in high availability features
- Used by planet-scale companies such as Facebook and Twitter

The article discusses strategies for building caches with high availability and strong data consistency.

## Key takeaways

- [Trade-off between ACID (C stands for consistency) properties and availability](https://sites.cs.ucsb.edu/~agrawal/fall2009/dynamo.pdf)
- Memcached can be used as Authoritative Storage via Remote Marker mechanism
  - Mechanism used to minimize probability of reading stale data in DB replicas
  - When the client writes to the master DB, there is a replication delay between it and its replicas
  - The client will write a marker to Memcached after writing to the master DB
  - Marker will have a short TTL - duration depending on DB replication delay
  - If marker exists, read from the master DB; otherwise read from DB replica
- **Writes are not idempotent nor commutative; deletes are.**
  - If we write to DB then write to cache naively, race conditions will arise when there are concurrent writes as writes are non-commutative
    - Leads to infinitely stale data given writes and no eventual data consistency
  - To avoid this issue, use delete instead: after writing to DB, do cache invalidation by deleting the data item from the cache
    - Multiple deletes sent to the cache would not matter as you can only delete something once; ordering of delete doesn't matter too
    - Client will fetch the data item from the database on cache miss and update the most recent value to Memcached instead
  - There is still a small risk of stale data, if a delete occurs between a cache read and set (see Melodies's article for illustration)
    - Facebook deals with it using a check-and-set approach via a lease mechanism
    - On cache miss, client receives a lease token for the requested key
    - On cache set, client verifies the lease token before setting the key
    - If Memcached receive a delete request for the key, the lease is invalidated

## References

- [Melodies Sim's Medium Article: Lessons Learnt from Scaling Memcached in Production](https://levelup.gitconnected.com/lessons-learnt-from-scaling-memcached-in-production-86778ab616c7) - good introduction to Memcached in Production, has more references
- [Scaling Memcache at Facebook](https://research.fb.com/wp-content/uploads/2016/11/scaling-memcache-at-facebook.pdf) - the paper the article was based upon
- [Princeton COS 316 Intro to Caching](https://www.cs.princeton.edu/courses/archive/fall19/cos316/lectures/08-caching.pdf)
- [Dynamo: Amazon’s Highly Available Key-value Store](https://sites.cs.ucsb.edu/~agrawal/fall2009/dynamo.pdf)
