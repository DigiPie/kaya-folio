---
title: Stack Conference 2020
---

STACK is GovTech’s flagship conference and the largest government-led developers event in Singapore that connects government, industry and the tech community.

- **Date**: 02/12/20 - 03/12/20
- **Website**: [Stack Conference 2020](https://www.stack.gov.sg/)  

## In-conversation with Dr. Vivian Balakrishnan

**Speaker(s)**

- [Dr. Vivian Balakrishnan](http://vivian.balakrishnan.sg/): Minister-in-charge of Smart Nation Programme Office
- [Chan Cheow Hoe](https://www.linkedin.com/in/cheow-hoe-chan-92646215/): Government Chief Digital Technology Officer

**Key takeaways**

Government to be **open** to:

- Adopting the best solutions there are, including those from the industry, instead of doing everything in-house
  - [Government Commercial Cloud](https://www.developer.tech.gov.sg/technologies/infrastructure-and-hosting/government-commercial-cloud): AWS, Azure, GCP
- Collaborating with industry developers via open-source
  - [Singapore Government Developer Portal](https://www.developer.tech.gov.sg/): Collaboration platform for government and industry developers
- Providing transparency to citizens and industry professionals
  - [TraceTogether](https://www.tracetogether.gov.sg/): Transparent and open collaboration with the industry
    - Open-source source code
    - Industry professionals were invited to take apart the TraceTogether token hardware

:::note Quote

"Openness is the way to building a smart nation" - Dr. Vivian Balakrishnan

:::

## Rethink, Reinvent, Rebuild

**Speaker(s)**

- [Jeff Barr](https://www.linkedin.com/in/jeffbarr/): Vice President & Chief Evangelist at Amazon Web Services

**Key takeaways**

- **Rethink** - Take a good look at where we are
  - Everything has changed due to COVID-19, Quarantine, WFH
  - No firm ground and constants are now variables
  - **People are more receptive to change and invention right now**
  - **Good time for innovation and progress**
- **Reinvent** - Solve challenges in a new way
  - Dream big dreams, address these challenges, change the world
  - Share what you learn to reinforce what you learned
    - Content creation / video streaming possibilities
- **Rebuild** - Put what you have learned to work
  - Take what you learn, do something awesome, and remember to share it!

## Seeding the Cloud: Engineering Solutions for Cloud Adoption

**Speaker(s)**

- [Hunter Nield](https://www.linkedin.com/in/hunter/?originalSubdomain=sg): Distinguished Engineer, GovTech

**Key takeaways**

- **Establishing a Landing Zone**
  - The foundation of any cloud environment at scale
  - A repeatable configuration for platform and tenant account baselines across multiple Cloud Service Providers (CSP)
  - Serves as a consistent platform for governance, onboarding, networking and security
- **Accelerating deployment with Infrastructure-as-Code (IaC)**
  - Code and configuration to provision cloud resources (and Landing Zones)
  - Develop common templates and images for consistency and familiarity
  - Get feedback on pain points faced by "customers" while using said templates
- **Consistent audit and reporting with Policy-as-Code (PaC)**
  - Code and configuration to test and validate cloud infrastructure deployed by IaC
  - Reduce need for manual audits and speed up auditing process
- **Grassroots open and collaborative mindset**
  - Internal code community for shared templates, code libraries and best practices for closed-source environments

## Six Principles for Refactoring a Monolith to Microservices

**Speaker(s)**

- [Chris Richardson](https://eventuate.io/about.html): Architect, Eventuate, Inc

**Key takeaways**

:::note Info

"A Microservice application is structured as a set of loosely coupled services that can be independently deployed." - Chris Richardson

:::

- Adopt Microservice architecture for the right reasons
  - Monolith architecture is not an anti-pattern, has valid use-cases
  - Adopt Microservice architecture because it allows you to deliver software rapidly, frequently and sustainability, with small, autonomous teams working on the different services
- Migrate to Microservice architecture incrementally rather than via Big Bang rewrite
  - **Strangler Application**: Incrementally migrate functionality from existing Monolith application to new Strangler Microservice application
  - Extract existing code modules and database tables out into microservices
  - Implement new features as microservices
- Define the service boundaries correctly
  - Define your domain at the start, it is okay and expected for it to evolve over the course of development
  - Avoid **Runtime Coupling**
    - Reduced availability due to reliance of a given microservice on another for serving a given request (e.g. microservice A receives an API request which it can only respond to when its own API request to microservice B is answered first)
    - Make microservices as self-contained as possible
      - Able to respond to a request without waiting for responses from other microservices
  - Avoid **Design-Time Coupling**
    - Similar to Open-Closed Principle
    - Avoid having to change other microservices when modifying a given microservice
      - Have small and stable API which hides implementation complexity as much as possible
      - Avoid using shared libraries which could change
      - Hide what you can, including not only code but also database schemas, so you can change them without affecting other microservices
- Consider Return-on-Investment when extracting modules into microservices
    - Consider benefit of decoupling said module
    - Consider cost of decoupling, specifically the number of inbound dependencies a module has
- Measuring success
  - Improved metrics: Reduced lead time, deployment frequency, failure rate, etc.
  - Improvements in other '-ilities': Availability, Reliability and Scalability 