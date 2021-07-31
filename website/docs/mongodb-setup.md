---
title: MongoDB Setup
---

Published on December 23, 2020

_This document was migrated from [DigiDocs](https://digipie.github.io/digidocs/mongodb/local-setup/)_

The purpose of this guide is to quickly set up a local copy of MongoDB **on Windows** for local development purposes. Authentication will not be enabled or covered in this tutorial.

## Installation and config

1. Install [MongoDB Community Edition](https://docs.mongodb.com/manual/administration/install-community/), the standard configuration is fine.
2. Take note of where your installation's `bin` folder is at, it should be at `C:\Program Files\MongoDB\Server\4.2\bin` by default.
3. Add it to your environment variables. See guide [here](https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/).
4. Open your terminal - if you already have it opened, exit and re-open it to reload the enviroment variables.
5. Enter `mongo` to access MongoDB.

## Create a new collection

6. Next, create a new collection, use the `use` command:

```bash
# To display the database you are using
db

# To switch databases use `use <database>`
# To create a new database, switch to a non-existing database
use dev

# Template
use <database>
```

:::tip

Read <https://docs.mongodb.com/manual/mongo/> for more information.

:::

## Create a new user

7. Next, create a user with `readWrite` and `dbAdmin` roles, using the `db.createUser()` command:

```bash
# Switch to the database you want to add the user to
use dev

# Create the user with `readWrite` and `dbAdmin` rights
db.createUser(
  {
    user: "devadmin",
    pwd: passwordPrompt(),
    roles: [ "readWrite", "dbAdmin" ]
  }
)

# Template
db.createUser(
  {
    user: <username>,
    pwd: <password>,
    roles: [ "readWrite", "dbAdmin" ]
  }
)
```

:::tip

Read <https://docs.mongodb.com/manual/reference/method/db.createUser/> for more information.

:::

## connection-string format

The connection-string is used to access the MongoDB instance from your applications (i.e. MongooseJS). The format of your connection-string is as follows:

```bash
mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[database][?options]]
# Parts in [ and ] are optional

# Example, without authentication
mongodb://localhost:27017/dev

# Example, with authentication
mongodb://devadmin:<password>@localhost:27017/dev
# Replace the <password> with your actual password
```

:::caution

If the username or password includes the at sign @, colon :, slash /, or the percent sign % character, use percent encoding. See <https://docs.mongodb.com/manual/reference/connection-string/#examples> for more information.

:::

### Authentication

Given that we are not enabling authentication, you can use either of the above connection-string URI formats.

:::tip

Read <https://docs.mongodb.com/manual/tutorial/enable-authentication/> for more information.

:::

### Verify connection-string

To verify your connection-string, simply use `mongo <mongoURI>`:

```bash
# Example, without authentication
mongo mongodb://localhost:27017/dev

# Example, with authentication
mongo mongodb://devadmin:<password>@localhost:27017/dev
```

## Resources

- [Original copy of this document at DigiDocs](https://digipie.github.io/digidocs/mongodb/local-setup/)
- [MongoDB's official guide to Install MongoDB Community Edition](https://docs.mongodb.com/manual/administration/install-community/)
- [Architect Ryan's guide to Add to the PATH on Windows 10](https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/)
- [MongoDB's official guide to the mongo shell](https://docs.mongodb.com/manual/mongo/)
- [MongoDB's official guide to db.createUser()](https://docs.mongodb.com/manual/reference/method/db.createUser/)
- [MongoDB's official guide to Connection String URI Format](https://docs.mongodb.com/manual/reference/connection-string/)
- [MongoDB's official guide to Enable Access Control](https://docs.mongodb.com/manual/tutorial/enable-authentication/)
