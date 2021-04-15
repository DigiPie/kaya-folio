---
title: Distributed Systems (MIT 6.824)
---

_This document is a work-in-progress_

Created on April 15, 2021

In this document, you will find my key takeaways from the [MIT 6.824: Distributed Systems](https://pdos.csail.mit.edu/6.824/index.html) course taught by [Prof. Frans Kaashoek](https://people.csail.mit.edu/kaashoek/). It contains learning points from my own self-directed learning on the Internet too.

## Distributed Systems

- **What**: multiple computers working together
- **Why**: better capacity, fault-tolerance and proximity
- **Challenges**:
  - Many concurrent parts with complex interactions
  - Must be fault-tolerant, able to withstand partial failure
  - Difficult to achieve peak performance
- **Course scope**: infrastructure for applications, with focus on storage and communication challenges

### Main goals

- **Fault-tolerance**:
  - **Availability**: app able to withstand failure of certain components
  - **Recoverability**: app able to recover after failure
- **Data consistency**: strong versus loose consistency, strong consistency requires performance trade-off and vice-versa
- **Performance**:
  - **Throughput**
  - **Latency**

You have to manage trade-offs between these three desirable goals.

## Resources

- [MIT 6.824: Distributed Systems](https://pdos.csail.mit.edu/6.824/index.html)
