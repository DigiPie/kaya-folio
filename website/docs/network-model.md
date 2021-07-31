---
title: Network Model (CS4226)
---

Published on November 30, 2020

In this document, you will find my summary for the Network Performance Model and Queueing Model content covered under [CS4226: Internet Architecture](https://nusmods.com/modules/CS4226/internet-architecture) course taught by [Dr. Richard Ma](https://www.comp.nus.edu.sg/~tbma/). I compiled this document with the help of notes written by my good friend Matthew over [here](https://crazoter.github.io/My-Docs/docs/markdown/CS4226_summary).

## Performance metrics

| Metric                           | Definition                                                                                                                 |
| :------------------------------- | :------------------------------------------------------------------------------------------------------------------------- |
| Link Rate / Bandwidth            | Theoretical maximum capacity; indirectly related to speed                                                                  |
| Throughput / Effective bandwidth | Actual data transfer rate between source and destination; directly related to speed; with **end-to-end delay** factored in |

## End-to-end delay

For a given packet being sent over a link, end-to-end delay is made up of:

- Transmission delay: dependent on packet size $L\ (bits)$ and link rate $R\ (bits/s)$: $d_{T} = \frac{L}{R}$
- Propagation delay: dependent on distance and propagation speed
- Processing delay: dependent on $L$
- **Queueing delay**: dependent on queue size and $d_{T}$

## Queueing delay

### Little's Law

:::note [Wikipedia cite](https://en.wikipedia.org/wiki/Little%27s_law)

The long-term average number $L$ of customers in a stationary system is equal to the long-term average effective arrival rate $\lambda$ multiplied by the average time $W$ that a customer spends in the system.

:::

In the context of Internet Architecture:

$L = \lambda W$

- $L$: Average number of packets in the system
  - $L = \lim_{t \to \infty} \frac{1}{t} \int^{t}_{0} L(s) ds$
- $\lambda$: Average packet arrival rate for the system
  - $\lambda = \lim_{t \to \infty} \frac{N(t)}{t}$ where $N(t)$ is the number of packets which arrived up to time $t$
- $W$: Average sojourn time
  - $W = \lim_{n \to \infty} \frac{1}{n} \sum^{n}_{i = 1} W_{i}$ where n is the number of packets and $W_{i}$ is the waiting/sojourn time for the $i$th packet

### Modelling arrival time

Given:

- $t_{i}$: Arrival time of $i$th packet
- $T_{i}$: Inter-arrival time where $T_{i} \triangleq t_{i + 1} - t_{i}$

Model $T_{i}$s using independent and identically distributed **(i.i.d.)** random variable $T$ which is exponentially distributed, with $\lambda \geq 0$ condition. Exponential distribution was chosen because of its memoryless property.

Properties:

- $P(T > t) = e^{-\lambda t}$
- $P(T \leq t) = 1-e^{-\lambda t}$
- $E[T] = \frac{1}{\lambda}$
- Memoryless property: $P\{T > s + t\ |\ T > s \} = P\{T > t\}$

### Merging Poisson processes

$T_{i}$s are **i.i.d.** random variables distributed as $T$ with rate $\lambda$. This arrival pattern is called a **Poisson process**, in which starting time does not matter (memoryless property). Therefore, two Poisson proccesses can be merged to create a new Poisson process:

- $\lambda = \lambda_{1} + \lambda_{2}$
- $T = min\{T_{1}, T_{2}\}$
- $P(T > t) = P(T_{1} > t \wedge T_{2} > t) = e^{-\lambda_{1} t} e^{-\lambda_{2} t} = e^{-(\lambda_{1} + \lambda_{2}) t}$
- $E[T] = \frac{1}{\lambda_1 + \lambda_2}$

## M/M/1 queueing model

- Single server with a queue of infinite length
- Exponential i.i.d. service time with rate $\mu$

### Definitions

- **Utilization**: $\rho = \frac{\lambda}{\mu}$
  - Percentage of time whereby the server is busy (1 item in server)
    - Alternatively, mean number of packets in the server
  - Derived from $E[L] = \lambda E[W_{s}]$ where average service time = $E[W_{s}] = \frac{1}{\mu}$
  - For server to be stable, $\rho = \frac{\lambda}{\mu} < 1 \Rightarrow \lambda < \mu$
- **$\pi_{i}$**: Percentage of time or probability that there are exactly $i$ packets in the system
  - $\pi_{i} = P\{L = i\} = \rho^{i}(1 - \rho)$
  - Follows a Geometric distribution

### M/M/1 Formulas

- $E[L] = E[\text{packets in queue + server}] = \frac{\rho}{1 - \rho} = \frac{\lambda}{\mu - \lambda}$
- $E[\text{packets in queue}] = E[L] - \rho = \frac{\rho^{2}}{1-\rho}$
- $E[W] = \frac{1}{\mu - \lambda}$
  - Derived from $L = \lambda W \Rightarrow 1 = (\mu - \lambda) \times E[W] \Rightarrow E[W] = \frac{1}{\mu - \lambda}$
- $\mu = \lambda + \frac{1}{E[W]}$
- $\lambda = \mu - \frac{1}{E[W]}$
- $E[W_q] = E[W] - E[W_{s}] = \frac{1}{\mu - \lambda} - \frac{1}{\mu}$
  - Derived from $E[W] = E[W_{q}] + E[W_{s}] \Rightarrow E[W_{q}] = E[W] - E[W_{s}]$

### Burke's Theorem

:::note [Wikipedia cite](https://en.wikipedia.org/wiki/Burke%27s_theorem)

Burke's theorem asserts that for a M/M/1 queue in the steady state with arrivals, a Poisson process with rate parameter $\lambda$:

1. The departure process is a Poisson process with rate parameter $\lambda$.
1. At time $t$ the number of packets in the queue is independent of the departure process prior to time $t$.

:::

### Tandem queues

Given $i$ consecutive servers with queues in tandem:

- $\rho_{i} = \frac{\lambda}{\mu_{i}}$

Given 2 consecutive servers, $s_{1}$ and $s_{2}$:

- $P\{L_{1} = j, L_{2} = k\} = P\{L_{1} = j\} \times P\{L_{2} = k\} = \rho^{j}_{1} (1 - \rho_{1}) \times \rho^{k}_{2} (1 - \rho_{2})$

### Jackson network

Jackson networks have multiple sources and feedback loops. By [Burke's Theorem](#burkes-theorem), merging and splitting of Poisson still apply to these networks.

To do so:

1. Determine the utilization $\rho_{i}$ for each server $i$
1. Create product form solutions as in [#tandem-queues](#tandem-queues)

## Resources

- [Matt's Docs: CS4226 Cheatsheet](https://crazoter.github.io/My-Docs/docs/markdown/CS4226_summary)
