---
title: Terraform Basics (WIP)
---

Created on March 23, 2021

_This document is a work-in-progress_

In this document you will find a quick review on getting started with [Terraform](https://www.terraform.io/), an open-source infrastucture as code software tool.

## Prerequisites

1. Install Terraform: Follow this [official installation guide](https://learn.hashicorp.com/tutorials/terraform/install-cli).

## Setup Provider securely

Never ever put your `access_key` and `secret_key` into a `tf` file like this:

```tf
provider "aws" {
  region = "ap-southeast-1"
  access_key = "my-access-key"
  secret_key = "my-secret-key"
}
```

:::note Quote by Hashicorp

Hard-coded credentials are not recommended in any Terraform configuration and risks secret leakage should this file ever be committed to a public version control system.

:::

Follow the instructions below instead.

### AWS Provider

If you are using the AWS platform, follow these instructions:

1. Install [AWS CLI](https://aws.amazon.com/cli/).
1. Create an [IAM](https://aws.amazon.com/iam/) user with Programmatic Access, and sufficient Permission Policies.
1. Store the user account's Access Key ID and Secret Access Key in a safe place (you can use [KeePass Password Safe](https://keepass.info/) for free).
1. Set your AWS CLI credentials:

   ```zsh
   aws configure
   ```

1. Create a `main.tf` file.
1. Type the following code (change region accordingly):

   ```tf
   provider "aws" {
     region = "ap-southeast-1"
   }
   ```

### GCP Provider

//TODO

## Resources

- [AWS: Configuration and credential file settings](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)
- [Terraform Registry: Google Provider Configuration Reference](https://registry.terraform.io/providers/hashicorp/google/latest/docs/guides/provider_reference)
- [Terraform Registry: AWS Provider](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)
