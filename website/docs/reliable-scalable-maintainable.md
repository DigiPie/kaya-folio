---
title: Reliable, Scalable, and Maintainable Applications
---

Published on July 31, 2021  
Updated on August 8, 2021

This document is my summary of the book _[Martin Kleppmann: Designing Data-Intensive Applications](https://dataintensive.net/)_'s first chapter: _Reliable, Scalable, and Maintainable Applications_. It covers key concerns you should consider when designing distributed and data-intensive systems. It also contains my annotations which reference relevant concepts I've learned from other articles, books or engineers.

## Reliability, Scalability, and Maintainability

![Designing Data-Intensive Applications](/img/docs/ddia.png)

Reliability, Scalability, and Maintainability are terms you might read or hear about often if you are a software engineer working on a distributed, cloud or data-intensive application. So what are they and why are they important?

## Reliability

When building an application, we want it to work correctly, even when things go wrong.

> "Anything that can go wrong will go wrong." - Murphy's law

The adage above applies to just about anything in life. It is why phrases such as, "hope for the best, but prepare for the worst" are so popular. Applications are no exception to this nature of life. If we want the applications we design to be reliable in the face of adversity, we will have to design them with the expectation that things will go wrong. In other words, we have to design with the worst scenarios in mind.

> "Hope is not a strategy." - Traditional SRE saying, found in [Google's Site Reliability Engineering book](https://sre.google/sre-book/introduction/)

### Working correctly

When we say an _application is working correctly_, we typically mean that it is able to:

1. Perform the expected functionality,
1. With good enough performance under the expected load,
1. And can tolerate unintended user behaviour or mistakes,
1. And also prevent unauthorized access and abuse.

### Fault-tolerance

- **Reliability**: A reliable application continues to work correctly, even when things go wrong.
- **Fault**: Things that can go wrong are often called faults. In the context of applications, a fault is typically defined as an individual component of the system deviating from its spec, when it performs in an unexpected way.
- **Failure**: The entire system failing to provide the required service to its users.
- **Fault-tolerant/Resilient**: If an application anticipates and can prevent faults from causing failures, it is fault-tolerant.

:::note

As it is impossible to design a zero-fault system, we should focus on preventing faults from causing failures instead, by implementing fault-tolerance mechanisms.

:::

### Causing faults deliberately

Conterintuitively, for fault-tolerant systems, it is ideal to trigger faults deliberately and regularly. Doing this will allow us to measure how well these systems tolerate faults consistently, and improve their fault-tolerance mechanisms. For example, you could randomly shut down a virtual machine from your instance group on the cloud every now and then, to test your application's ability to tolerate machine failure.

> "Many critical bugs are actually due to poor error handling." - [Simple Testing Can Prevent Most Critical Failures: An Analysis of Production Failures in Distributed Data-Intensive Systems](https://www.usenix.org/system/files/conference/osdi14/osdi14-paper-yuan.pdf)

[Chaos engineering](https://en.wikipedia.org/wiki/Chaos_engineering) embodies this approach. It is a discipline which was started at Netflix, as a means to improve their system's reliability. You can check out how its applied in production by reading the [Netflix Simian Army](https://netflixtechblog.com/tagged/chaos-monkey) blog posts.

### Hardware versus software faults

Hardware faults such as hard disk crashes tend to be random, independent events. One machine failure does not imply that another machine's failure is imminent most of the time. On the other hand, software faults are highly correlated, because the same software version is typically deployed to all or numerous servers. A bug in the deployed software could cause multiple servers to fail when receiving a particular user input. As such, software faults often cause many more system failures than hardware ones.

### Human errors

When we set out to design a fault-tolerant system, thoughts about how we can build it to tolerate hardware and software errors naturally come to mind. We want to introduce hardware redundancy, such that if a hard disk fails, there's a backup which will take its place. We also want to write fault-tolerant code, such that a software bug would not cause the server to crash.

These errors aren't the only ones we should consider when designing a resilient system. We must also consider how we can prevent human errors. After all, we humans design, create and operate these systems.

> "Even when they have the best intentions, humans are known to be unreliable." - Page 9 of the book

We are the ones who decide what hardware to run our code on, and the ones who write the code which introduces bugs into the system. Given that, it is important we have to ask ourselves frequently:

> "How do we make our systems reliable, in spite of unreliable humans?" - Page 9 of the book

To achieve that, we will need to design the system such that it minimizes:

- **Opportunities for introducing errors**: We should design abstractions, APIs and administrator interfaces which make it easy to do the right thing, and hard to do the wrong thing.
- **Impact of failures by allowing quick and easy recovery**: We should provide a fast and easy way for developers to roll back a failure-inducing deployment, and for operators to undo accidental changes in the administrator interface.
- **Delay in diagnosing errors through detailed monitoring**: We should setup clear and detailed monitoring which could provide early warning signals, and also invaluable insights into what went wrong and how we can resolve the faults.

## Scalability

Scalability describes a system's ability to deliver its expected functionality in spite of increased load. Given that there are many different types of load a system will have, we will have to consider questions such as:

> "If the system grows in a particular way, what are our options for coping with the growth?" - Page 11 of the book

To correctly describe scalability, we will need to accurately define load parameter first.

### Load parameter

A load parameter is a metric you can use to describe a particular load for a given system. Examples include requests per second for a web application, and the ratio of cache hits to misses. The load parameters you should focus on depends on the architecture of your system.

### Performance

After defining the load parameters of your system, you can now describe how increases in load affect the system:

- When a load parameter increases, how is the system performance affected if you keep the system resources constant?
- When a load parameter increases, how much do you need to increase the resources by to keep the system performance constant?

To answer these questions, you would need to define performance metrics. Examples of such metrics include the throughput of a network protocol, and the response time of a web service.

### Response time

Response time is a common and important performance metrics for online, distributed systems. There are many different definitions for it out there. In the context of online systems, it is typically defined as the time between a client sending a request to the system and receiving a response from it.

When you consider a system's response time, it is important to consider it not as a single value, the average (mean), but as a distribution of values, the percentiles. That's because the response time for requests varies a lot, and there are many outliers which are much slower. There are many reasons why this is so, here are some:

- **Different types of requests have different processing time**: An online system handles many different types of requests which take varying amount of time to process.
- **Caching reduces response time for common requests**: Common requests are often cached for high-traffic systems, and responded to much faster than those which are not.

Given these reasons, the distribution of response time is asymmetric and significant outliers are common. This makes the mean much less representative of the response time than the median, otherwise known as the 50th percentile.

The median also provides information about the distribution which the mean does not - if the median response time is 80ms, you can infer that half of the requests have a response time faster than 80ms, and also that the other half would be slower than that. You can't infer the same from an average response time, as it is not a middle value like the median.

You can check out the article [Michael Kopp: Why Averages Suck and Percentiles are Great](https://www.dynatrace.com/news/blog/why-averages-suck-and-percentiles-are-great/) for more information on why the average response time is an inadequate performance metric.

### Tail latencies

You should also consider how slow the outliers are, by looking at higher percentiles such as the 95th and 99th percentile. These are the thresholds at which 95% or 99% of the requests are faster than that particular threshold. They are also commonly called tail latencies. It is important you consider these, because the users with the slowest response time are often those who have used the system the most extensively.

Amazon uses the 99.9th percentile for internal service response time requirements. They do so even though only 0.1% of requests are slower, because the customers with these requests are often the most valuable customers. They experience longer response time because they have much more data on their accounts than most users, which the system needs to process before it can respond. Oftentimes, this is because they have made many more purchases, which is why they are the most valuable customers.

### Scaling to cope with increased load

> "An architecture that is appropriate for one level of load is unlikely to cope with 10 times that load." - Page 17 of the book

If you want to maintain good system performance, when the load parameters increase, you would need to increase the resources. There are two ways of doing so:

- **Vertical scaling**: Scaling up by adding more power - adding more CPU or RAM to your virtual machine instance.
- **Horizontal scaling**: Scaling out by adding more machines - adding more instances to your instance group.

There are tradeoffs between both approaches. A system running on a single, powerful machine is much simpler to develop and maintain than one on multiple machines. However, as you scale up a machine, it gets increasingly costly to do so, and scaling out becomes inevitable. You would need to find the right balance between both approaches if you want to achieve the most cost-effective and efficient outcome.

While a system running on a single machine is much simpler to develop and maintain than one on multiple machines, high-end powerful machines are very costly.

> "An architecture that scales well for a particualr application is built around assumptions of which operations will be common and which will be rare - the load parameters." - Page 18 of the book

## Maintainability

:::important

This document is a work-in-progress and is about 2/3rd done.

:::

## Resources

- [Martin Kleppmann: Designing Data-Intensive Applications](https://dataintensive.net/)
- [Michael Kopp: Why Averages Suck and Percentiles are Great](https://www.dynatrace.com/news/blog/why-averages-suck-and-percentiles-are-great/)
