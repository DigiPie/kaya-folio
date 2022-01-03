---
title: Reliable, Scalable, and Maintainable Applications
---

Published on July 31, 2021  
Updated on January 3, 2022  
Edited by [Vanessa Tay](https://www.linkedin.com/in/vanessa-tay-5973021ab/)

The opening chapter of Kleppman’s [_Designing Data-Intensive Applications_](https://dataintensive.net/) book: _Reliable, Scalable, and Maintainable Applications_, addresses key concerns you should consider when designing distributed and data-intensive systems, in an insightful way. I believe anyone working on a distributed system will benefit from reading it. However, as not all of us may have the time (or will) to pour over the book, I’ve decided to share a quick summary of the key points Kleppman raises, as well as to offer some of my personal inputs with references to other literature and experts.

## Reliability, Scalability, and Maintainability

![Designing Data-Intensive Applications](/img/docs/ddia.png)

Reliability, Scalability, and Maintainability, the three characteristics that Kleppman opens with, are terms you might come across often. If you're not familiar with them, you may wonder: what are they and why are they important?

## Reliability

When building an application, we want it to work correctly, even when things go wrong.

> "Anything that can go wrong will go wrong." - [Murphy's law](https://en.wikipedia.org/wiki/Murphy%27s_law)

The adage above can be applied to just about anything in life and applications are no exception. If we want our applications to be resilient during adverse conditions, we will have to design them with the expectation that things will go wrong. We can't blindly hope they won't.

> "Hope is not a strategy." - Traditional SRE saying, found in [Google's Site Reliability Engineering book](https://sre.google/sre-book/introduction/)

### Working correctly

When we declare an application system as working correctly, we typically mean that it is able to:

1. Perform the expected functionality,
1. With good enough performance under the expected load,
1. And can tolerate unintended user behaviour or mistakes,
1. And also prevent unauthorized access and abuse.

### Fault-tolerance

- **Reliability**: A reliable system continues to work correctly, even when things go wrong.
- **Fault**: A fault is typically defined as an individual component of the system deviating from its spec, when it performs in an unexpected way.
- **Failure**: The entire system failing as a whole, and being unable to deliver the required service to its users.
- **Fault-tolerant/Resilient**: If a system anticipates and prevents faults from causing failures, it is fault-tolerant.

:::note

As it is impossible to design a zero-fault system, we should focus on preventing faults from causing failures instead. We do so by implementing fault-tolerance mechanisms.

:::

### Human (un)reliability

When we design a fault-tolerant system, we will naturally consider how we can build it to tolerate hardware and software errors. We introduce hardware redundancy, such that if a hard disk fails, there's a backup which will take its place. We also write fault-tolerant code, such that a software fault would not cause the server to fail.

These errors aren't the only ones we should consider. We should also consider how we can prevent human errors. After all, we humans design, create and operate these systems.

> "Even when they have the best intentions, humans are known to be unreliable." - Found on Page 9 of the book

We humans write the code, and decide what hardware to run our code on. We are responsible for all bugs and mistakes within our systems. Given that, it is important we ask ourselves often:

> "How do we make our systems reliable, in spite of unreliable humans?" - Found on Page 9 of the book

To achieve that, we will need to design the system such that it:

- **Minimizes opportunities for introducing errors**: We should design abstractions, APIs and administrator interfaces which make it easy to do the right thing, and hard to do the wrong thing.
- **Mitigates impact of failures by allowing quick and easy recovery**: We should provide a fast and easy way for developers to roll back a failure-inducing deployment, and for operators to undo accidental changes in the administrator interface.
- **Reduces delay in diagnosing errors through detailed monitoring**: We should set up clear and detailed monitoring which could provide early warning signals, and also insights into what went wrong so we can better triage errors.

## Scalability

As the load on our system increases, we want it to continue working correctly. To achieve that, we will have to design it such that it is scalable. Scalability describes a system's ability to deliver its expected functionality in spite of increased load. Given that there are many different types of load a system can have, it is meaningless to discuss whether the system is scalable or not. It is more productive to talk about whether it is scalable in a specific manner:

> "If the system grows in a particular way, what are our options for coping with the growth?" - Found on Page 11 of the book

Before we can describe scalability, we will first need to define load. We can do so numerically by using load parameters.

### Load parameter

A load parameter is a metric you can use to describe a particular load for a given system. Examples include requests per second for a web application, and the ratio of cache hits to misses. The load parameters you should focus on depends on the architecture of your system and your user requirements.

> "An architecture that scales well for a particular application is built around assumptions of which operations will be common and which will be rare - the load parameters." - Page 18 of the book

### Performance

After defining the load parameters of your system, you can now describe how increases in load affect the system:

- When a load parameter increases, how is the system performance affected if you keep the system resources constant?
- When a load parameter increases, how much do you need to increase the resources by to keep the system performance constant?

To answer these questions, you would need to define performance metrics. Examples of such metrics include the throughput of a network protocol, and the response time of a web service.

### Response time

Response time is a common and important performance metrics for online, distributed systems. There are many different definitions for it out there. In the context of online systems, it is typically defined as the time between a client sending a request to the system and receiving a response from it.

When you consider a system's response time, it is important to consider it not as a single value, the average (mean), but as a distribution of values, the percentiles. That's because the response time for requests varies a lot, and there are many outliers which are much slower. There are many reasons why this is so, here are some:

- **Different types of requests have different processing time**: An online system handles many different types of requests which take varying amounts of time to process.
- **Caching reduces response time for common requests**: Common requests are often cached for high-traffic systems, and responded to much faster than those which are not.

Given these reasons, the distribution of response time is asymmetric and significant outliers are common. This makes the mean much less representative of the response time than the median, also known as the 50th percentile.

The median also provides information about the distribution which the mean does not - if the median response time is 80ms, you can infer that half of the requests have a response time faster than 80ms, and also that the other half would be slower than that. You can't infer the same from an average response time, as it is not a middle value like the median.

You can check out the article [Michael Kopp: Why Averages Suck and Percentiles are Great](https://www.dynatrace.com/news/blog/why-averages-suck-and-percentiles-are-great/) for more information on why the average response time is an inadequate performance metric.

### Tail latencies

You should also consider how slow the outliers are, by looking at higher percentiles such as the 95th and 99th percentile. These are the thresholds at which 95% or 99% of the requests are faster than that particular threshold. They're also commonly called tail latencies. It is important you consider these, because the users with the slowest response time are often those who have used the system most extensively.

Amazon uses the 99.9th percentile for internal service response time requirements. They do so even though only 0.1% of requests are slower, because the customers with these requests are often the most valuable customers. They experience longer response time because they have more data. They have more data because they made many more purchases than typical customers, thus making them more valuable.

### Scaling to cope with increased load

> "An architecture that is appropriate for one level of load is unlikely to cope with 10 times that load." - Found on Page 17 of the book

If you want to maintain good system performance, when the load parameters increase, you would need to increase the resources. There are two ways of doing so:

- **Vertical scaling**: Scaling up by adding more power - adding more CPU or RAM to your virtual machine instance.
- **Horizontal scaling**: Scaling out by adding more machines - adding more instances to your instance group.

There are tradeoffs between both approaches. A system running on a single, powerful machine is much simpler to develop and maintain than one on multiple machines. However, as you scale up a machine, it gets increasingly costly to do so, and scaling out becomes inevitable. You would need to find the right balance between both approaches if you want to achieve the most cost-effective and efficient outcome.

## Maintainability

When building a system, we want to build it such that it is as easy to maintain as possible.

> "It is well known that the majority of the cost of software is not in its initial development, but in its ongoing maintenance - fixing bugs, investigating failures, modifying it for new use cases, and adding new features." - Found on Page 18 of the book

We should design systems which are easy to operate, understand and evolve. To achieve that, we should follow these three principles when designing a system:

- **Operability**: We should make it easy for operators to keep the system running smoothly.
- **Simplicity**: We should make it easy for engineers to understand the system by reducing as much system complexity as possible.
- **Evolvability**: We should make it easy for engineers to change the system in future, adapting it for unanticipated use cases to match requirement changes.

### Operability

A system with good operability makes routine maintenance tasks easy, allowing the operations team to focus on higher-value contributions. We can achieve that by designing a system with:

- **Good telemetry**: Set up informative and usable monitoring and logging of the system's runtime behaviour and health.
- **Good documentation**: Document in an easy-to-understand manner such that operators are clear on what they can do and what is the outcome - e.g. "If I do X, Y will happen".
- **Good default behaviour**: Supply default values and settings for operational/internal tools, but allow operators to override defaults when needed for edge cases.

### Simplicity

As a system grows larger, so does its complexity. This makes the system harder to understand by those working on it, which is problematic in many ways, such as:

- **Lower productivity**: Engineers will take longer to complete tasks because they will have to spend more time understanding what they are working on
- **Higher risk of introducing bugs**: Engineers are more likely to overlook hidden assumptions and unintended side effects which will cause faults.

Moseley and Marks define two types of complexity in their paper [Out of the Tar Pit](http://curtclifton.net/papers/MoseleyMarks06a.pdf):

- **Essential Complexity**: inherent in the essence of the problem
- **Accidental Complexity**: anything else which the development team would not have to deal with ideally (e.g. complexity arising from suboptimal language and infrastructure)

While it is inevitable that a system becomes more complex as it grows, we can mitigate it by reducing accidental complexity. We can do so by keeping simplicity in mind when working on the system. One of the best and most common approaches to doing so is by implementing abstractions, which can hide a ton of implementation detail behind a simple-to-understand facade.

### Evolvability

It is likely your system's requirements will change due to reasons such as:

- An unanticipated use case emerging
- Business priorities changing
- User requesting new features

The ease at which you evolve your system to meet the new requirements depends heavily on its simplicity. The easier it is to understand your system, the easier it would be to modify it.

## Resources

- [Martin Kleppmann: Designing Data-Intensive Applications](https://dataintensive.net/)
- [Michael Kopp: Why Averages Suck and Percentiles are Great](https://www.dynatrace.com/news/blog/why-averages-suck-and-percentiles-are-great/)
- [Ben Moseley and Peter Marks: Out of the Tar Pit](http://curtclifton.net/papers/MoseleyMarks06a.pdf)
