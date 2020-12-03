---
slug: stack-2020
title: STACK 2020 Developers Conference
author: Evan Tay
author_url: https://github.com/DigiPie
author_title: Final year Computer Science major at NUS
author_image_url: https://avatars2.githubusercontent.com/u/13582874
tags: [conference, cloud, microservices, GovTechSTACK]
---

[STACK 2020 Developers Conference](https://www.stack.gov.sg/) is GovTech’s flagship conference and the largest government-led developers event in Singapore that connects government, industry and the tech community.

In this post, you will find my key takeaways for some of the sessions I attended during the conference. I chose to attend these sessions based on my interests in Cloud and Microservices.

<!--truncate-->

**Day 1:**

- **[Opening note](#opening-note)** by Dr. Vivian Balakrishnan: Minister-in-charge of Smart Nation Programme Office and Chan Cheow Hoe: Government Chief Digital Technology Officer
- **[Rethink, Reinvent, Rebuild](#rethink-reinvent-rebuild)** by Jeff Barr: Vice President & Chief Evangelist at Amazon Web Services
- **[Seeding the Cloud: Engineering Solutions for Cloud Adoption](#seeding-the-cloud-engineering-solutions-for-cloud-adoption)** by Hunter Nield: Distinguished Engineer at GovTech
- **[Six Principles for Refactoring a Monolith to Microservices](#six-principles-for-refactoring-a-monolith-to-microservices)** by Chris Richardson: Architect at Eventuate, Inc

**Day 2:**

- **[You Won’t BELIEVE This HACK to Improve Your Technical Communication!](#you-wont-believe-this-hack-to-improve-your-technical-communication)** by Nikhil Choudhary: Software Engineer at Open Government Products
- **[DevOps: Cloud and Back Again](#devops-cloud-and-back-again)** by Mitchell Hashimoto: Co-Founder and CTO at HashiCorp

## Opening note

**Speaker(s)**

- [Dr. Vivian Balakrishnan](http://vivian.balakrishnan.sg/): Minister-in-charge of Smart Nation Programme Office
- [Chan Cheow Hoe](https://www.linkedin.com/in/cheow-hoe-chan-92646215/): Government Chief Digital Technology Officer

**Key takeaways**

The government believes openness is the way to building a smart nation.

On that note, they believe in:

- Adopting the best solutions there are, including those from the industry, instead of doing everything in-house
  - [Government Commercial Cloud](https://www.developer.tech.gov.sg/technologies/infrastructure-and-hosting/government-commercial-cloud): AWS, Azure, GCP
- Collaborating with industry developers via open-source
  - [Singapore Government Developer Portal](https://www.developer.tech.gov.sg/): Collaboration platform for government and industry developers
- Providing transparency to citizens and industry professionals
  - [TraceTogether](https://www.tracetogether.gov.sg/): Transparent and open collaboration with the industry

## Rethink, Reinvent, Rebuild

**Speaker(s)**

- [Jeff Barr](https://www.linkedin.com/in/jeffbarr/): Vice President & Chief Evangelist at Amazon Web Services

**Key takeaways**

- **Rethink** - Take a good look at where we are
  - Everything has changed due to COVID-19, Quarantine, WFH
  - No firm ground and constants are now variables
  - People are more receptive to change and invention right now
  - Good time for innovation and progress
- **Reinvent** - Solve challenges in a new way
  - Dream big dreams, address these challenges, change the world
  - Share what you learn to reinforce what you learned
    - Content creation / video streaming possibilities
- **Rebuild** - Put what you have learned to work
  - Take what you learn, do something awesome, and remember to share it!

## Seeding the Cloud: Engineering Solutions for Cloud Adoption

**Speaker(s)**

- [Hunter Nield](https://www.linkedin.com/in/hunter/?originalSubdomain=sg): Distinguished Engineer at GovTech

**Key takeaways**

Hunter shared about how GovTech uses Infrastructure-as-Code (IaC) and Policy-as-Code (PaC) to accelerate cloud operations. Read [#devops-cloud-and-back-again](#devops-cloud-and-back-again) by Hashicorp CTO Mitchell for more information.

- **Establishing a Landing Zone**
  - A repeatable configuration across multiple Cloud Service Providers (CSP)
  - The foundation of any cloud environment at scale
  - Serves as a consistent platform for governance, onboarding, networking and security
- **Accelerating deployment with Infrastructure-as-Code (IaC)**
  - Code and configuration to provision cloud resources and Landing Zones
  - Develop common templates for consistency and familiarity
  - Get feedback on pain points faced by "customers" while using said templates
- **Consistent audit and reporting with Policy-as-Code (PaC)**
  - Code and configuration to test and validate cloud infrastructure deployed by IaC
  - Reduce need for manual audits and speed up auditing process

## Six Principles for Refactoring a Monolith to Microservices

**Speaker(s)**

- [Chris Richardson](https://eventuate.io/about.html): Architect at Eventuate, Inc

**Key takeaways**

:::note Quote

"A Microservice application is structured as a set of loosely coupled services that can be independently deployed." - Chris Richardson

:::

Chris shared 6 principles to follow when moving from a Monolith to a Microservice architecture.

Here are 5 of them :wink: :

- Adopt Microservice architecture for the right reasons
  - Monolith architecture is not necessary bad (an anti-pattern), it has its valid use-cases
  - Adopt Microservice architecture because it allows you to deliver software rapidly, frequently and sustainability, with small, autonomous teams working on the different microservices
- Migrate to Microservice architecture incrementally rather than via Big Bang rewrite
  - **Strangler Application**: Incrementally migrate functionality from existing Monolith application to new Strangler Microservice application
    - Extract existing code modules and database tables out into microservices
    - Implement new features as microservices
- Consider Return-on-Investment when deciding which modules to convert into microservices
    - Consider benefit of decoupling said module
    - Consider cost of decoupling
      - How difficult it is to do so
      - How many inbound dependencies it has
        - If module A is depended upon by module B, consider extracting module B first
- Define the service boundaries correctly
  - Avoid **Runtime Coupling**
    - Reduced availability due to reliance of a given microservice on another for serving a given request
      - For example, microservice A receives an API request which it can only respond to when its own API request to microservice B is answered first
    - Make microservices as self-contained as possible
      - Able to respond to a request without making follow-up requests to other microservices
  - Avoid **Design-Time Coupling**
    - Similar to [Open-Closed Principle](https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle)
    - Avoid having to modify other microservices when modifying a given microservice
    - Must be able to modify or exend a given microservice independently as much as possible
      - Have small and stable API which hides as much implementation complexity as possible
      - Hide what you can, not only code but also database schemas, so you can change them without affecting other microservices
- Measuring success
  - Improved metrics: Reduced lead time, deployment frequency, failure rate, etc.
  - Improvements in other '-ilities': Availability, Reliability and Scalability 

## You Won’t BELIEVE This HACK to Improve Your Technical Communication!

**Speaker(s)**

- [Nikhil Choudhary](https://www.linkedin.com/in/nikhil-c-513647148/): Software Engineer at Open Government Products

**Key takeaways**

When introducing non-technical folks to coding, keep in mind that the most important objective is to convey understanding of core programming concepts.

On that note, here are some tips Nikhil shared:

- Forgo coding best practices if doing so make it easier for the audience to understand
  - Reduce surface area to increase accessibility, even if it is not good coding practice
    - Collapse all HTML, JS and CSS into a single file so students can view everything in one place
    - Collapse all functions into one for the same reason as the previous line
    - Combine program lines if it makes things clearer
- Use real-world examples to explain technical concepts
  - For example, use a restaurant scenario to explain `async`
- Enable students in sharing their joy/achievement
  - Make deploying their application easy
    - Can use [Netlify Drop](https://app.netlify.com/drop): Simply drag and drop your HTML, JS, CSS files and Netlify Drop will do the rest for deployments
- Practise empathy consciously throughout teaching process to identify ways you can make learning easier for your students

## DevOps: Cloud and Back Again

**Speaker(s)**

- [Mitchell Hashimoto](https://www.linkedin.com/in/mitchellh/): Co-Founder and CTO at HashiCorp

**Key takeaways**

Mitchell shared more about the [Cloud Operating Model](https://www.hashicorp.com/cloud-operating-model) during this session.

:::note [Cite](https://www.hashicorp.com/cloud-operating-model)

"The Cloud Operating Model is a new approach for IT operations that organizations need to use to be successful with cloud adoption and thrive in an era of multi-cloud architecture." - Hashicorp

:::

|           | Static                                                                         | Dynamic                                                                                                     |
|-----------|--------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| Run       | Dedicated infrastructure to run app on                                         | Scheduled automatically across a fleet (e.g. AWS Auto-Scaling Group, Hashicorp Nomad)                       |
| Connect   | Host-based, static IP-addressing                                               | Service-based, dynamic IP addresses due to dynamic provisioning                                             |
| Secure    | High-trust environment which is IP-address-based, with clear network perimeter | Low-trust environment with no clear perimeter given multi-tenancy and nature of the Cloud                   |
| Provision | Dedicated resources - Physical servers, routers and switches                   | Capacity on-demand, provision VMs, Containers and other managed services, or simply use Serverless services |

- Infrastructure operations on the Cloud must follow the Dynamic Cloud Operating Model fully
  - Pointless if you provision infrastructure in minutes using Infrastructure-as-Code (IaC), but still manually handle connectivity and security review using tickets
  - Have to adopt dynamic cloud operating tools for all 4 layers
- Why use IaC for provisioning
  - Split Execution from Definition
  - Execution can be automated and carried out via API, UI or automatically through Continuous-Integration (CI) tools
- How can teams use IaC
  - Operations team still necessary, focus on creating and improving blueprints and handling edge-cases when doing so
  - Development team creates infrastructure in a self-service manner, using the blueprints created by the Operations team
separating buzz words from crucial tech

Read up on Hashicorp's white paper on [Cloud Operating Model](https://www.hashicorp.com/cloud-operating-model) for more information.