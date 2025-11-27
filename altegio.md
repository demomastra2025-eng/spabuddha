[![Altegio](https://alteg.io/assets/altegio/2019-template/img/logo.svg)](https://developer.alteg.io/api#top)

- Integration cases with Altegio
- General description of data exchange with Altegio
- Core Concepts of the Altegio API
- Users
  - getGetting a list of user roles
  - getGetting a list of user roles in the context of a company user
  - getGetting permission values and user role
  - putUpdating permission values and user role
  - postCopy a User to Companies
  - postRemoving a User from Companies
- Schedules of Appointments and Events
  - getSearch a Schedule by Event
  - postCreate a Schedule
  - patchUpdate a Schedule
  - delDelete a Schedule
  - postCreate a Schedule Series
  - patchUpdate a schedule series
  - delDelete a schedule series
  - getGet a List of Scheduled Appointments and Events
  - postCreate a Client Schedule
  - patchUpdate a Client Schedule
  - delDelete a Client Schedule
- Marketplace
  - postRedirect URL after user registration with the partner service
  - postApplication Installation for a Location
  - postNotify Altegio of Successful Payment
  - postNotify Altegio of Available SMS Sender Names
  - postChargeback Notice
  - postWebhook from Altegio About Application Events
  - getApplication Status Data for Any Location
  - postApplication Uninstall
  - getData About Locations Connected to the Application
- Sending SMS Through Operators
  - postSending SMS
- Authorization
  - postAuthorize User
  - postAuthorize Online Booking User
- Online Booking
  - getGet booking form settings
- Online appointment
  - getGet internationalization options
  - postSend SMS verification code for phone number
  - postCheck Booking Options
  - postCreate a Session Appointment
  - putMove Appointment to Session
  - getGet an appointment for a session
  - postCreate an Appointment in a Group Event
  - getGet a list of dates available for booking
  - getGet a List of Services Available for Booking
  - getGet a list of the nearest available sessions
  - getGet a list of employees available for booking
  - getGet a List of Sessions Available for Booking
- User Appointments
  - postLog in with phone number and code
  - delDelete User Appointment
- Online Booking Users
  - postAuthorize Online Booking User
  - getSend SMS verification code for phone number to change data
  - putOnline Booking User Password Update
  - putUpdating User Data in Online Booking
  - getRetrieving Online Booking User Data
- Companies
  - getGet a list of companies
  - postCreate a company
  - getGet company
  - putChange Company
  - delDelete company
- Service category
  - postCreate a service category
  - getGet service category
  - putChange service category
  - delDelete service category
  - getGet a list of chain service categories
  - getGet a list of service categories
  - getDeprecated. Get a list of service categories
- Services
  - postCreate a service
  - getGet a list of services / specific service
  - patchChange service
  - getDeprecated. Get a list of services / specific service
  - putDeprecated. Change Service
  - delDelete a service
  - postLinking an Employee to a Provided Service
  - putUpdating Employee Service Link Settings
  - delDeleting an Employee Service Link
- User
  - getGet a list of rights
  - postCreate and Send an Invitation
- Clients
  - postGet a list of clients
  - getDeprecated. Get a list of clients
  - postAdding a Client
  - postBulk adding clients
  - getSample Request to Get a List of Client Files
  - delDelete request example
  - postSearch by customer history
  - getList of a comments for a client
  - postAdd a comment for a client
  - delDelete a comment for a client
  - getGet a client
  - putEdit client
  - delDelete client
- Appointments
  - getGet list of appointments
  - postCreate a New Appointment
  - getGet a List of Partner Appointments
  - getGet an Appointment
  - putEdit Appointment
  - delDelete Appointment
- Visits
  - getGet a visit
  - getGet Visit Details
  - putEdit Visit
  - getCheck PDF for the visit
- Group events
  - postCreate a group event
  - getReading a Group Event
  - putGroup event update
  - delDeleting a Group Event
  - getGroup events search filters
  - getFinding dates range for group events
  - getFinding dates for group events
  - getGroup Event Search
  - getSearch for group services
  - getGetting Duplication Strategies for Group Events
  - postCreate a Duplicate Group Event Template
  - postGroup Event Duplicate Template Update
  - postGroup Event Duplicate Request
- Dates in the Appointment Calendar
  - getGet a list of dates for Appointment Calendar
- Comments
  - getGet comments
  - postLeave a Comment
- Company users
  - getDeprecated. Get company users
  - getGet company users
  - delRemove the user from the company
- Checkout
  - getGet company cash registers
- Inventories
  - getGet company inventories
- SMS mailing
  - postSend SMS to the list of clients
  - postSend SMS campaigns to customers matching the filters
- Email newsletter
  - postSend Email newsletter according to the list of clients
  - postSend email campaigns for clients matching the filters
- Financial Transactions
  - getGet transactions
  - getGet Transactions by Visit or Appointment ID
  - postCreate a Financial Transaction
  - getReceiving a financial transaction
  - putFinancial Transaction Update
  - delDeleting a transaction
- Loyalty Cards
  - getGet a list of card types available at the location
  - getGet a List of Customer Cards by Phone Number
  - getGet a List of Customer Cards by ID
  - getGet User Loyalty Cards
  - postIssue a Loyalty Card
  - delRemove a Loyalty Card
  - postManual withdraw/deposit to loyalty card in chain
  - getGet a List of Card Types Available at the Chain
  - postManual withdraw/deposit to loyalty card in company
  - getGet a List of Card Types Available for Issuance to the Client
- Application of loyalty in a visit
  - postApply a Discount Promotion in a Visit
  - postCancel the Application of the Discount Promotion in the Visit
  - postApply Deduction from the Loyalty Card in the Visit
  - postCancel Withdrawal from the Loyalty Card During the Visit
  - postApply Referral Program During a Visit
  - getGet loyalty transactions by visit
- Webhook event notifications
  - getGet event notification settings
  - postChange Event Notification Settings
- Reference books
  - getGet business types by group
- Categories
  - getGet company categories
  - postCreate a client company category
  - postCreate a Category
  - putUpdate Category
  - delDelete company category
  - getGet Customer Categories Searchable by Name
- Product Categories
  - getList request example
  - getExample of a request to get the composition of a category
  - getGet a list of product categories
  - getGet a list of product categories by ID
  - getExample of a request to get categories
  - postCreate a Product Category
  - putEdit a Product Category
  - delDelete a Product Category
- Bill of Materials and Consumables
  - getRetrieve a list of bill of materials and consumables
  - getGet the Bill of Materials for an Employee’s Service
  - getRetrieve a list of bill of materials and consumables
  - delUnlink Appointment-Service Association
  - delUnlink Appointment-Service Association
  - putUpdate Consumables for the Appointment-Service Association
- Product Transactions
  - getSearch for product transactions
  - postCreate Transaction
  - getReceiving a transaction
  - putTransaction update
  - delDeleting a transaction
- Inventory Operations
  - postCreate an inventory operation
- Inventory Operations Documents
  - postCreate document
  - getGet document
  - putUpdate Document
  - delDelete document
  - getGet document financial transactions
  - getGet Product Transactions of a Document
- Client personal accounts
  - postCreation of a client personal account topup operation
  - getGet a List of Client Personal Accounts by Location and Client
  - getGetting a list of personal accounts by chain and a set of filters
  - getGetting a list of personal accounts by chain and customer phone number
- Country
  - getGet a list of countries
- Location Chains
  - getObtaining chains available to the user
- Z-Report
  - getGet Z-Report data
- Additional Fields
  - getGetting a collection of location fields
  - postAdding an Additional Field
  - putUpdate an Additional Field
  - delRemove an Additional Field from a Location
- Sending SMS through operators
  - postGetting Message Statuses
- Rules for the processing of personal data
  - getObtaining information about the rules for processing personal data of the company
- Data Validation
  - getPhone number format check
- Fiscalization of checks
  - postExample of a request for fiscalization of a document
  - getList request example
  - postExample of a request in case of successful fiscalization or in case of an error
- Loyalty
  - getGet a list of loyalty notification templates
  - postCreate a Chain Promotion
  - getGet a Chain Promotion
  - putEdit Chain Promotion
  - delDelete Chain Promotion
  - getGet a List of Chain Loyalty Transactions
  - getGift Card/Membership Code Generation
  - getGet a List of Available Membership Types
  - getGet a List of Membership Types by ID
  - getGet a List of Available Gift Card Types
  - getGet a List of Gift Card Types by ID
  - getGet a List of Promotions Active in the Location
  - getGet customer statistics
  - getGet revenue statistics
  - getGet employee return
- User records
  - getGet User Appointments
- Employees
  - postQuick create an employee
  - postDeprecated. Add new employee
  - getGet a List of Employees / Specific Employee
  - getDeprecated. Get a list of employees / specific employee
  - putChange Employee
  - delDelete employee
- Chain Clients
  - getGet a chain client by phone number.
- Resources
  - getGetting Resources at a Location
- Work Schedule
  - getGet an employee's schedule
  - putChange an employee's work schedule
- Sessions for the Appointment Calendar
  - getGet a list of sessions for the Appointment Calendar
- POS Transactions
  - getGet transactions
  - postPrint receipt
- Sales Operation
  - getReceipt of a Sales Transaction
- Sale operation
  - delDelete a Cashier Payment Transaction
  - delDelete a Loyalty Payment Transaction
  - postPayment at the Cash Desk and Loyalty (Various Methods)
- Integration with chain telephony
  - postTelephony events
  - getGet Location's Call List
- Memberships
  - postFreeze membership
  - postUnfreeze Membership
  - postChange Membership Duration
  - postChange the Number of Times a Membership Has Been Used
  - getGet a List of Memberships by Filter
  - getGet Client Memberships
  - getGet User Memberships
- Gift Cards
  - getGet client gift cards
  - getGet user gift cards
- Cities
  - getGet a list of cities
- Images
  - postImage upload
  - delDeleting images
- Subscriptions
  - getRetrieve company subscription information
- Reviews and tips
  - getGet feedback form status
  - postSubmitting a feedback form
- Tips
  - getGet a list of location employees with their tip settings
  - getEnable Tips for the Specialist
  - postDisable Tips for the Specialist
- Payroll
  - getSearch payroll calculations of an employee
  - getGet payroll calculation details of an employee
  - getObtaining payroll schemes count for an employee
  - getReceipt of mutual settlements of an employee
  - getReceipt of mutual settlements of an employee grouped by date
  - getGetting payroll for a period for an employee
  - getGetting payroll for a period for an employee grouped by date
  - getGet Mutual Settlements for a Specific Employee
  - getObtaining own payroll schemes for a specific employee
  - getGet Payroll for a Specific Employee for a Given Period
- Notifications
  - getGet notification settings in a location
  - getGet User Notification Settings
  - postChange User Push Notification Settings
- Products
  - postCreate product
  - getGet Products
  - putEdit Products
  - delDelete Items
- Online Booking Settings
  - getGetting Online Booking Settings
  - patchUpdate Online Booking Settings
- Appointment Calendar settings
  - getRetrieving Appointment Calendar Settings
  - patchUpdate Appointment Calendar settings
- Booking Widget Settings
  - getGet a list of booking widgets
  - postCreate a Booking Widget
  - getGet a Booking Widget
  - delDelete Booking Widget
  - patchChange Booking Widget
- Positions
  - getGet a list of company positions
  - postQuick create a position
- Analytics
  - getGet key company metrics
  - getGet data on revenue by day
  - getGet Data on the Number of Appointments by Day
  - getGet occupancy data by day
  - getGet the Structure of Appointments by Source
  - getGet the Structure of Appointments by Visit Status

[API docs by Redocly](https://redocly.com/redoc/)

# Altegio REST API (2.0.0)

Download OpenAPI specification: [Download](blob:https://developer.alteg.io/5dc36870-c895-4575-8c4a-41cdc668b740)

This is an official document describing the interaction with the Altegio online booking service. API allows third-party developers to perform most operations with the Altegio platform. When designing methods, we tried to adhere to the [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) architecture.

- All interaction with protocol are transpire by TLS encryption (from 1.2 version)
- Limits are `200` requests per minute or `5` requests per second per IP address
- URL API: `https://api.alteg.io/api/v1`

**If you encounter difficulties when working with the API, please carefully review the documentation,**
**including the required headers, parameters, and the structure of the request body in the JSON example.**

If you're having trouble resolving the issue on your own, feel free to contact us at [api@alteg.io](mailto:api@alteg.io). Please include the request URL, headers, request body, and the response you received in your message.

## [section/Integration-cases-with-Altegio](https://developer.alteg.io/api\#section/Integration-cases-with-Altegio) Integration cases with Altegio

- Data exchange with automation and accounting software
- **Integration of Online Booking into third-party websites and mobile applications.** Allows embedding of Online Booking forms into external platforms, such as company catalogs, branded apps, and other partner services.

## [section/General-description-of-data-exchange-with-Altegio](https://developer.alteg.io/api\#section/General-description-of-data-exchange-with-Altegio) General description of data exchange with Altegio

The Altegio integration API includes two groups of methods:

- Methods that require both user authorization and partner authorization
- Methods that require partner authorization only (no user authorization)

### API Request Authorization

Accessing both the first and second groups of methods requires _partner authorization_. I.e. passing the partner's unique hash key.
API requests are authorized in accordance with [RFC 6749 "Resource Owner Password Credentials Grant"](https://tools.ietf.org/html/rfc6749#section-4.3).
When making API requests the HTTP authorization header must include the access key in the following format:

```
Authorization: Bearer <partner token>
```

To obtain this key, you need to register in the [marketplace](https://app.alteg.io/appstore/developers/1) – it will be located in the 'Developer account' "Account settings" under "Account details" tab.

To get the user API key, use the **auth** method, or, if you are creating an integration application, use the key located in an application's settings under the "API Access" section. The key itself must also be sent in the request header (after the partner key, separated by a comma):

```
Authorization: Bearer <partner token>, User <user token>
```

Whether user authorization is required to work with specific entities is indicated in the data format descriptions and sample queries.

### Date and time

All dates in the API are represented as strings in ISO 8601 format.

```
"2025-09-21T23:00:00.000+03:00"
```

Service durations and other time-related values are provided in **seconds**. For example, a 15-minute service should be represented as:

```
{ "length": 900 }
```

## [section/Core-Concepts-of-the-Altegio-API](https://developer.alteg.io/api\#section/Core-Concepts-of-the-Altegio-API) Core Concepts of the Altegio API

The API allows you to work with the main entities of the platform:

- **Company**
Represents a business entity within the system.

- **User**
Users can manage one or more companies, depending on their assigned access rights.
Not all users have access to all settings. To modify specific settings, a user API key with the appropriate privileges is required.

- **Service category**
All services offered by a company are organized into service categories.

- **Service**
Appointments are typically made for specific services provided by employees within a company.
Each service includes parameters such as a price range and duration.

- **Employee**
Appointments are usually booked with a specific employee or resource (e.g., yoga room or massage table).

- **Work Schedule**
Each employee has a work schedule - time intervals during which
the employee works with clients.

- **Time Slots**
Available time intervals during which an appointment can be scheduled with an employee.

- **Appointment**
The time interval at which a particular employee provides
services to a specific client. The employee is busy during an appointment.

- **Client**
The person who schedules or receives services from the company.


### Altegio API Data Model

There are four main structures used for working with data in the Altegio API:

- **Entity**
An individual item with unique properties and parameters, such as those listed above.
Entities can be retrieved, modified, or deleted.

- **Entity Collection**
A group of entities, such as a list of companies or a list of services offered by companies.
Entities can be added to or removed from a collection.

- **Communication entity**
Defines relationships between entities—for example,
the link between an employee and a service,
indicating that the employee provides that specific service.
Communication entities can also have their own properties,
such as an individual service price set for a particular employee.

- **Collection of Communication Entities**
A set of relationships between entities,
such as a list of services offered by an employee along with their associated properties.
You can add or manage relationships within the collection.


## [tag/Users](https://developer.alteg.io/api\#tag/Users) Users

User management, in particular working with roles and permissions.

## [tag/Users/operation/api.location.users.roles.list](https://developer.alteg.io/api\#tag/Users/operation/api.location.users.roles.list) Getting a list of user roles

Returns a list of user roles along with permissions for each role.

##### Authorizations:

_BearerPartnerUser_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |

##### query Parameters

|     |     |
| --- | --- |
| include | Array of strings<br>Items Value:"user\_permissions"<br>Requested set of an included models. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

### Responses

**200**

OK

**401**

Unauthorized

**403**

Forbidden

**404**

Not Found

get/company/{company\_id}/users/roles

https://api.alteg.io/api/v1/company/{company\_id}/users/roles

### Response samples

- 200
- 401
- 403
- 404

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"slug": "staff_member",\
\
"title": "Staff Member",\
\
"description": "Provides services",\
\
"weight": 1,\
\
"user_permissions": [{"slug": "timetable_access",\
\
"title": "Appointment calendar",\
\
"hint": "",\
\
"is_recommended": true,\
\
"is_editable": true,\
\
"default_value": true,\
\
"entity_name": null,\
\
"children": [{"slug": "timetable_position_id",\
\
"title": "View the schedule and post records",\
\
"hint": "",\
\
"is_recommended": true,\
\
"is_editable": true,\
\
"default_value": null,\
\
"entity_name": "position",\
\
"children": null,\
\
"options": [{"title": "All positions",\
\
"value": 0,\
\
"is_disabled": false\
\
},\
\
{"title": "Administrator",\
\
"value": 1234,\
\
"is_disabled": false\
\
}\
\
],\
\
"type": {"slug": "allowed_id",\
\
"all_access_value": 0,\
\
"no_access_value": 0\
\
}\
\
}\
\
],\
\
"options": null,\
\
"type": {"slug": "has_group_access",\
\
"all_access_value": true,\
\
"no_access_value": false\
\
}\
\
}\
\
]\
\
}\
\
],

"meta": { }

}`

## [tag/Users/operation/api.location.users.roles.list.user](https://developer.alteg.io/api\#tag/Users/operation/api.location.users.roles.list.user) Getting a list of user roles in the context of a company user

Returns a list of user roles along with permissions for each role. Allows to get the editable status for each permission of a company user (`is_editable` field). This status depends on the current user's permissions.

##### Authorizations:

_BearerPartnerUser_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |
| user\_id<br>required | number<br>Example: 123<br>ID of a user. |

##### query Parameters

|     |     |
| --- | --- |
| include | Array of strings<br>Items Value:"user\_permissions"<br>Requested set of an included models. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

### Responses

**200**

OK

**401**

Unauthorized

**403**

Forbidden

**404**

Not Found

get/company/{company\_id}/users/{user\_id}/roles

https://api.alteg.io/api/v1/company/{company\_id}/users/{user\_id}/roles

### Response samples

- 200
- 401
- 403
- 404

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"slug": "staff_member",\
\
"title": "Staff Member",\
\
"description": "Provides services",\
\
"weight": 1,\
\
"user_permissions": [{"slug": "timetable_access",\
\
"title": "Appointment calendar",\
\
"hint": "",\
\
"is_recommended": true,\
\
"is_editable": true,\
\
"default_value": true,\
\
"entity_name": null,\
\
"children": [{"slug": "timetable_position_id",\
\
"title": "View the schedule and post records",\
\
"hint": "",\
\
"is_recommended": true,\
\
"is_editable": true,\
\
"default_value": null,\
\
"entity_name": "position",\
\
"children": null,\
\
"options": [{"title": "All positions",\
\
"value": 0,\
\
"is_disabled": false\
\
},\
\
{"title": "Administrator",\
\
"value": 1234,\
\
"is_disabled": false\
\
}\
\
],\
\
"type": {"slug": "allowed_id",\
\
"all_access_value": 0,\
\
"no_access_value": 0\
\
}\
\
}\
\
],\
\
"options": null,\
\
"type": {"slug": "has_group_access",\
\
"all_access_value": true,\
\
"no_access_value": false\
\
}\
\
}\
\
]\
\
}\
\
],

"meta": { }

}`

## [tag/Users/operation/api.location.users.permissions.user](https://developer.alteg.io/api\#tag/Users/operation/api.location.users.permissions.user) Getting permission values and user role

Return user role and list of permissions values.

##### Authorizations:

_BearerPartnerUser_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |
| user\_id<br>required | number<br>Example: 123<br>User id. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

### Responses

**200**

OK

**401**

Unauthorized

**403**

Forbidden

**404**

Not Found

get/company/{company\_id}/users/{user\_id}/permissions

https://api.alteg.io/api/v1/company/{company\_id}/users/{user\_id}/permissions

### Response samples

- 200
- 401
- 403
- 404

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"is_editable": true,

"staff_id": 12345,

"user_role": "owner",

"user_permissions": [{"slug": "timetable_access",\
\
"value": true\
\
},\
\
{"slug": "timetable_position_id",\
\
"value": 0\
\
},\
\
{"slug": "auth_list_allowed_ip",\
\
"value": ""\
\
}\
\
]

},

"meta": { }

}`

## [tag/Users/operation/api.location.users.permissions.user.save](https://developer.alteg.io/api\#tag/Users/operation/api.location.users.permissions.user.save) Updating permission values and user role

Updates the role and permissions of the user, as well as the employee who is attached to this user.

##### Authorizations:

_BearerPartnerUser_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |
| user\_id<br>required | number<br>Example: 123<br>User id. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

##### Request Body schema: application/json

|     |     |
| --- | --- |
| user\_role | string<br>Enum:"worker""administrator""accountant""manager""owner"<br>Name of role |
| user\_permissions | Array of items<br>List of user permissions values |
| staff\_id | number<br>staff member ID attached to user |

### Responses

**200**

OK

**401**

Unauthorized

**403**

Forbidden

**404**

Not Found

**422**

Unprocessable Entity

put/company/{company\_id}/users/{user\_id}/permissions

https://api.alteg.io/api/v1/company/{company\_id}/users/{user\_id}/permissions

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"user_role": "worker",

"user_permissions": [{"slug": "timetable_access",\
\
"value": true\
\
}\
\
],

"staff_id": 0

}`

### Response samples

- 200
- 401
- 403
- 404
- 422

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"is_editable": true,

"staff_id": 12345,

"user_role": "owner",

"user_permissions": [{"slug": "timetable_access",\
\
"value": true\
\
},\
\
{"slug": "timetable_position_id",\
\
"value": 0\
\
},\
\
{"slug": "auth_list_allowed_ip",\
\
"value": ""\
\
}\
\
]

},

"meta": { }

}`

## [tag/Users/operation/api.location.users.permissions.user.copy_to_companies](https://developer.alteg.io/api\#tag/Users/operation/api.location.users.permissions.user.copy_to_companies) Copy a User to Companies

Copies an active user and their permissions to multiple companies at once. If the user does not yet exist in a company, they will be added as an active user. If the user has already been invited to the company, only their permissions will be updated — however, they will still need to accept the invitation.

##### Authorizations:

_BearerPartnerUser_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |
| user\_id<br>required | number<br>Example: 123<br>User id. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

##### Request Body schema: application/json

|     |     |
| --- | --- |
| user\_company\_links<br>required | Array of objects non-empty  unique <br>List of locations to copy the user to |

### Responses

**200**

OK

**401**

Unauthorized

**403**

Forbidden

**404**

Not Found

**422**

Unprocessable Entity

post/company/{company\_id}/users/{user\_id}/copy\_to\_companies

https://api.alteg.io/api/v1/company/{company\_id}/users/{user\_id}/copy\_to\_companies

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"user_company_links": [{"company_id": 123,\
\
"user_permissions": [{"slug": "timetable_access",\
\
"value": true\
\
}\
\
]\
\
}\
\
]

}`

### Response samples

- 200
- 401
- 403
- 404
- 422

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": null,

"meta": { }

}`

## [tag/Users/operation/api.location.users.permissions.user.remove_from_companies](https://developer.alteg.io/api\#tag/Users/operation/api.location.users.permissions.user.remove_from_companies) Removing a User from Companies

Removes an active user from multiple companies at once.

##### Authorizations:

_BearerPartnerUser_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |
| user\_id<br>required | number<br>Example: 123<br>User id. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

##### Request Body schema: application/json

|     |     |
| --- | --- |
| user\_company\_links<br>required | Array of objects non-empty  unique <br>List of locations to remove the user from |

### Responses

**200**

OK

**401**

Unauthorized

**403**

Forbidden

**404**

Not Found

**422**

Unprocessable Entity

post/company/{company\_id}/users/{user\_id}/remove\_from\_companies

https://api.alteg.io/api/v1/company/{company\_id}/users/{user\_id}/remove\_from\_companies

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"user_company_links": [{"company_id": 123\
\
}\
\
]

}`

### Response samples

- 200
- 401
- 403
- 404
- 422

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": null,

"meta": { }

}`

## [tag/Schedules-of-Appointments-and-Events](https://developer.alteg.io/api\#tag/Schedules-of-Appointments-and-Events) Schedules of Appointments and Events

This feature allows you to easily manage schedules for appointments (currently not supported) and events.

You can create multiple schedule series for different days of the week and customize each one to suit your needs. For each series, you can define specific staff, time slots, labels, resource instances, and more.

## [tag/Schedules-of-Appointments-and-Events/operation/api.location.timetable_event_schedules.search_by_event](https://developer.alteg.io/api\#tag/Schedules-of-Appointments-and-Events/operation/api.location.timetable_event_schedules.search_by_event) Search a Schedule by Event

Search for a schedule based on the appointment or event linked to it, or based on the associated appointment or event.

##### Authorizations:

_BearerPartnerUser_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |
| entity\_type<br>required | string<br>Enum:"record""activity"<br>Example: activity<br>Type of an entity schedule is searched by:<br>`record` \- individual appointment, currently not supported;<br>`activity` \- group event. |
| entity\_id<br>required | number<br>Example: 123<br>ID of an entity schedule is searched by. |

##### query Parameters

|     |     |
| --- | --- |
| include | Array of strings<br>Items Enum:"days""days.events\_master""days.events\_labels""days.events\_resource\_instances"<br>Requested set of an included models. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

### Responses

**200**

OK

**401**

Unauthorized

**403**

Forbidden

**404**

Not Found

get/company/{company\_id}/schedules/search/{entity\_type}/{entity\_id}

https://api.alteg.io/api/v1/company/{company\_id}/schedules/search/{entity\_type}/{entity\_id}

### Response samples

- 200
- 401
- 403
- 404

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 123,

"created_at": "2022-01-01 12:12:12",

"updated_at": "2022-01-01 12:12:12",

"deleted_at": null,

"original_entity_type": "activity",

"original_entity_id": 123,

"date_start": "2022-01-01",

"date_end": "2022-02-01",

"days": [{"id": 123,\
\
"created_at": "2022-01-01 12:12:12",\
\
"updated_at": "2022-01-01 12:12:12",\
\
"deleted_at": null,\
\
"timetable_event_schedule_id": 123,\
\
"day_of_week": "mon",\
\
"events_time": "14:00:00",\
\
"events_duration": 3600,\
\
"events_master": {"id": 123,\
\
"name": "John Johnson",\
\
"company_id": 123,\
\
"specialization": "Master",\
\
"avatar": "https://app.alteg.io/images/no-master-sm.png",\
\
"avatar_big": "https://app.alteg.io/images/no-master.png",\
\
"position": {"id": 123,\
\
"title": "Staff"\
\
}\
\
},\
\
"events_labels": [{"id": 123,\
\
"title": "Label",\
\
"color": "#ff0000"\
\
}\
\
],\
\
"events_resource_instances": [{"id": 123,\
\
"title": "Resource #1",\
\
"resource_id": 123\
\
}\
\
]\
\
}\
\
]

},

"meta": { }

}`

## [tag/Schedules-of-Appointments-and-Events/operation/api.location.timetable_event_schedules.create](https://developer.alteg.io/api\#tag/Schedules-of-Appointments-and-Events/operation/api.location.timetable_event_schedules.create) Create a Schedule

Creates a schedule for appointments or events based on the original associated entity.

##### Authorizations:

_BearerPartnerUser_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |

##### query Parameters

|     |     |
| --- | --- |
| include | Array of strings<br>Items Value:"days"<br>Requested set of an included models. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

##### Request Body schema: application/json

|     |     |
| --- | --- |
| original\_entity\_type<br>required | string<br>Enum:"record""activity"<br>Type of entity the schedule will be based on:<br>`record` \- individual appointment, currently not supported;<br>`activity` \- group event. |
| original\_entity\_id<br>required | number<br>ID of entity the schedule will be based on. |
| date\_end<br>required | string <date> <br>Date of the schedule end. |
| days<br>required | Array of objects \[ 1 .. 7 \] items <br>Each object represents schedule series settings for a specific day of the week. A minimum of 1 and a maximum of 7 schedule series can be defined (one for each day of the week). |

### Responses

**201**

Created

**401**

Unauthorized

**403**

Forbidden

**404**

Not Found

**422**

Unprocessable Entity

post/company/{company\_id}/schedules

https://api.alteg.io/api/v1/company/{company\_id}/schedules

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"original_entity_type": "activity",

"original_entity_id": 123,

"date_end": "2022-02-01",

"days": [{"day_of_week": "mon",\
\
"events_master_id": 123,\
\
"events_time": "14:00:00",\
\
"events_duration": 3600,\
\
"events_capacity": 4,\
\
"labels_ids": [123\
\
],\
\
"resource_instances_ids": [123\
\
]\
\
}\
\
]

}`

### Response samples

- 201
- 401
- 403
- 404
- 422

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 123,

"created_at": "2022-01-01 12:12:12",

"updated_at": "2022-01-01 12:12:12",

"deleted_at": null,

"original_entity_type": "activity",

"original_entity_id": 123,

"date_start": "2022-01-01",

"date_end": "2022-02-01",

"days": [{"id": 123,\
\
"created_at": "2022-01-01 12:12:12",\
\
"updated_at": "2022-01-01 12:12:12",\
\
"deleted_at": null,\
\
"timetable_event_schedule_id": 123,\
\
"day_of_week": "mon",\
\
"events_time": "14:00:00",\
\
"events_duration": 3600,\
\
"events_master": {"id": 123,\
\
"name": "John Johnson",\
\
"company_id": 123,\
\
"specialization": "Master",\
\
"avatar": "https://app.alteg.io/images/no-master-sm.png",\
\
"avatar_big": "https://app.alteg.io/images/no-master.png",\
\
"position": {"id": 123,\
\
"title": "Staff"\
\
}\
\
},\
\
"events_labels": [{"id": 123,\
\
"title": "Label",\
\
"color": "#ff0000"\
\
}\
\
],\
\
"events_resource_instances": [{"id": 123,\
\
"title": "Resource #1",\
\
"resource_id": 123\
\
}\
\
]\
\
}\
\
]

},

"meta": { }

}`

## [tag/Schedules-of-Appointments-and-Events/operation/api.location.timetable_event_schedules.update](https://developer.alteg.io/api\#tag/Schedules-of-Appointments-and-Events/operation/api.location.timetable_event_schedules.update) Update a Schedule

Updates the settings of a schedule containing appointments or events.

##### Authorizations:

_BearerPartnerUser_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |
| schedule\_id<br>required | number<br>Example: 123<br>ID of a schedule. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

##### Request Body schema: application/json

|     |     |
| --- | --- |
| date\_end | string <date> <br>Date of the schedule end. |

### Responses

**200**

OK

**401**

Unauthorized

**403**

Forbidden

**404**

Not Found

**422**

Unprocessable Entity

patch/company/{company\_id}/schedules/{schedule\_id}

https://api.alteg.io/api/v1/company/{company\_id}/schedules/{schedule\_id}

### Request samples

- Payload

Content type

application/json

Copy

`{"date_end": "2022-02-01"

}`

### Response samples

- 200
- 401
- 403
- 404
- 422

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 123,

"created_at": "2022-01-01 12:12:12",

"updated_at": "2022-01-01 12:12:12",

"deleted_at": null,

"original_entity_type": "activity",

"original_entity_id": 123,

"date_start": "2022-01-01",

"date_end": "2022-02-01",

"days": [{"id": 123,\
\
"created_at": "2022-01-01 12:12:12",\
\
"updated_at": "2022-01-01 12:12:12",\
\
"deleted_at": null,\
\
"timetable_event_schedule_id": 123,\
\
"day_of_week": "mon",\
\
"events_time": "14:00:00",\
\
"events_duration": 3600,\
\
"events_master": {"id": 123,\
\
"name": "John Johnson",\
\
"company_id": 123,\
\
"specialization": "Master",\
\
"avatar": "https://app.alteg.io/images/no-master-sm.png",\
\
"avatar_big": "https://app.alteg.io/images/no-master.png",\
\
"position": {"id": 123,\
\
"title": "Staff"\
\
}\
\
},\
\
"events_labels": [{"id": 123,\
\
"title": "Label",\
\
"color": "#ff0000"\
\
}\
\
],\
\
"events_resource_instances": [{"id": 123,\
\
"title": "Resource #1",\
\
"resource_id": 123\
\
}\
\
]\
\
}\
\
]

},

"meta": { }

}`

## [tag/Schedules-of-Appointments-and-Events/operation/api.location.timetable_event_schedules.delete](https://developer.alteg.io/api\#tag/Schedules-of-Appointments-and-Events/operation/api.location.timetable_event_schedules.delete) Delete a Schedule

Completely deletes a schedule along with all its series and the linked appointments or events.

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |
| schedule\_id<br>required | number<br>Example: 123<br>ID of a schedule. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

### Responses

**204**

No Content

**401**

Unauthorized

**403**

Forbidden

**404**

Not Found

delete/company/{company\_id}/schedules/{schedule\_id}

https://api.alteg.io/api/v1/company/{company\_id}/schedules/{schedule\_id}

### Response samples

- 204
- 401
- 403
- 404

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": null,

"meta": { }

}`

## [tag/Schedules-of-Appointments-and-Events/operation/api.location.timetable_event_schedules.days.create](https://developer.alteg.io/api\#tag/Schedules-of-Appointments-and-Events/operation/api.location.timetable_event_schedules.days.create) Create a Schedule Series

Adds a new series to an existing schedule of appointments or events.

##### Authorizations:

_BearerPartnerUser_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |
| schedule\_id<br>required | number<br>Example: 123<br>ID of a schedule. |

##### query Parameters

|     |     |
| --- | --- |
| include | Array of strings<br>Items Enum:"events\_master""events\_labels""events\_resource\_instances""events"<br>Requested set of an included models. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

##### Request Body schema: application/json

|     |     |
| --- | --- |
| day\_of\_week<br>required | string<br>Enum:"mon""tue""wed""thu""fri""sat""sun"<br>The day of the week for the schedule series. |
| events\_master\_id<br>required | number<br>The ID of the staff member assigned to the events in the schedule series. |
| events\_time<br>required | string<br>Start time of the events in the schedule series, formatted as HH:MM:SS. |
| events\_duration<br>required | number<br>Duration of each event in the schedule series, in seconds. |
| events\_capacity<br>required | number<br>The capacity of activities in the schedule series. For appointments, this should be set to 1. |
| labels\_ids | Array of numbers<br>An array of label IDs associated with the events in the schedule series. |
| resource\_instances\_ids | Array of numbers<br>An array of resource instance IDs used in the events of the schedule series. |

### Responses

**201**

Created

**401**

Unauthorized

**403**

Forbidden

**404**

Not Found

**422**

Unprocessable Entity

post/company/{company\_id}/schedules/{schedule\_id}/days

https://api.alteg.io/api/v1/company/{company\_id}/schedules/{schedule\_id}/days

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"day_of_week": "mon",

"events_master_id": 123,

"events_time": "14:00:00",

"events_duration": 3600,

"events_capacity": 4,

"labels_ids": [123\
\
],

"resource_instances_ids": [123\
\
]

}`

### Response samples

- 201
- 401
- 403
- 404
- 422

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 123,

"created_at": "2022-01-01 12:12:12",

"updated_at": "2022-01-01 12:12:12",

"deleted_at": null,

"timetable_event_schedule_id": 123,

"day_of_week": "mon",

"events_time": "14:00:00",

"events_duration": 3600,

"events_master": {"id": 123,

"name": "John Johnson",

"company_id": 123,

"specialization": "Master",

"avatar": "https://app.alteg.io/images/no-master-sm.png",

"avatar_big": "https://app.alteg.io/images/no-master.png",

"position": {"id": 123,

"title": "Staff"

}

},

"events_labels": [{"id": 123,\
\
"title": "Label",\
\
"color": "#ff0000"\
\
}\
\
],

"events_resource_instances": [{"id": 123,\
\
"title": "Resource #1",\
\
"resource_id": 123\
\
}\
\
],

"events": [{"id": 123,\
\
"created_at": "2022-01-01 12:12:12",\
\
"updated_at": "2022-01-01 12:12:12",\
\
"deleted_at": null,\
\
"event_status": "stable",\
\
"event_datetime": "2022-01-24 14:00:00",\
\
"event_entity_type": "activity",\
\
"event_entity_id": 123,\
\
"is_entity_master_changed": false,\
\
"is_entity_datetime_changed": false,\
\
"is_entity_duration_changed": false,\
\
"is_entity_labels_changed": false,\
\
"is_entity_resource_instances_changed": false\
\
}\
\
]

},

"meta": { }

}`

## [tag/Schedules-of-Appointments-and-Events/operation/api.location.timetable_event_schedules.days.update](https://developer.alteg.io/api\#tag/Schedules-of-Appointments-and-Events/operation/api.location.timetable_event_schedules.days.update) Update a schedule series

Updates the settings of a schedule series for appointments or events.

##### Authorizations:

_BearerPartnerUser_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |
| schedule\_id<br>required | number<br>Example: 123<br>ID of a schedule. |
| day\_id<br>required | number<br>Example: 123<br>ID of a schedule series. |

##### query Parameters

|     |     |
| --- | --- |
| include | Array of strings<br>Items Enum:"events\_master""events\_labels""events\_resource\_instances""events"<br>Requested set of an included models. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

##### Request Body schema: application/json

|     |     |
| --- | --- |
| force<br>required | boolean<br>Flag for force override of manual changes in scheduled appointments/events. |
| events\_master\_id | number<br>The ID of the staff member assigned to the events in the schedule series. |
| events\_time | string<br>Start time of the events in the schedule series, formatted as HH:MM:SS. |
| events\_duration | number<br>Duration of each event in the schedule series, in seconds. |
| events\_capacity | number<br>The capacity of activities in the schedule series. For appointments, this should be set to 1. |
| labels\_ids | Array of numbers<br>An array of label IDs associated with the events in the schedule series. |
| resource\_instances\_ids | Array of numbers<br>An array of resource instance IDs used in the events of the schedule series. |

### Responses

**200**

OK

**401**

Unauthorized

**403**

Forbidden

**404**

Not Found

**422**

Unprocessable Entity

patch/company/{company\_id}/schedules/{schedule\_id}/days/{day\_id}

https://api.alteg.io/api/v1/company/{company\_id}/schedules/{schedule\_id}/days/{day\_id}

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"force": false,

"events_master_id": 123,

"events_time": "14:00:00",

"events_duration": 3600,

"events_capacity": 4,

"labels_ids": [123\
\
],

"resource_instances_ids": [123\
\
]

}`

### Response samples

- 200
- 401
- 403
- 404
- 422

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 123,

"created_at": "2022-01-01 12:12:12",

"updated_at": "2022-01-01 12:12:12",

"deleted_at": null,

"timetable_event_schedule_id": 123,

"day_of_week": "mon",

"events_time": "14:00:00",

"events_duration": 3600,

"events_master": {"id": 123,

"name": "John Johnson",

"company_id": 123,

"specialization": "Master",

"avatar": "https://app.alteg.io/images/no-master-sm.png",

"avatar_big": "https://app.alteg.io/images/no-master.png",

"position": {"id": 123,

"title": "Staff"

}

},

"events_labels": [{"id": 123,\
\
"title": "Label",\
\
"color": "#ff0000"\
\
}\
\
],

"events_resource_instances": [{"id": 123,\
\
"title": "Resource #1",\
\
"resource_id": 123\
\
}\
\
],

"events": [{"id": 123,\
\
"created_at": "2022-01-01 12:12:12",\
\
"updated_at": "2022-01-01 12:12:12",\
\
"deleted_at": null,\
\
"event_status": "stable",\
\
"event_datetime": "2022-01-24 14:00:00",\
\
"event_entity_type": "activity",\
\
"event_entity_id": 123,\
\
"is_entity_master_changed": false,\
\
"is_entity_datetime_changed": false,\
\
"is_entity_duration_changed": false,\
\
"is_entity_labels_changed": false,\
\
"is_entity_resource_instances_changed": false\
\
}\
\
]

},

"meta": { }

}`

## [tag/Schedules-of-Appointments-and-Events/operation/api.location.timetable_event_schedules.days.delete](https://developer.alteg.io/api\#tag/Schedules-of-Appointments-and-Events/operation/api.location.timetable_event_schedules.days.delete) Delete a schedule series

Deletes a schedule series and all appointments or events linked to it.

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |
| schedule\_id<br>required | number<br>Example: 123<br>ID of a schedule. |
| day\_id<br>required | number<br>Example: 123<br>ID of a schedule series. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

### Responses

**204**

No Content

**401**

Unauthorized

**403**

Forbidden

**404**

Not Found

delete/company/{company\_id}/schedules/{schedule\_id}/days/{day\_id}

https://api.alteg.io/api/v1/company/{company\_id}/schedules/{schedule\_id}/days/{day\_id}

### Response samples

- 204
- 401
- 403
- 404

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": null,

"meta": { }

}`

## [tag/Schedules-of-Appointments-and-Events/operation/api.location.timetable_event_schedules.days.events.list](https://developer.alteg.io/api\#tag/Schedules-of-Appointments-and-Events/operation/api.location.timetable_event_schedules.days.events.list) Get a List of Scheduled Appointments and Events

Prints a list of events of scheduled records/activities.

##### Authorizations:

_BearerPartnerUser_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |
| schedule\_id<br>required | number<br>Example: 123<br>ID of a schedule. |
| day\_id<br>required | number<br>Example: 123<br>ID of a schedule series. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

### Responses

**200**

OK

**401**

Unauthorized

**403**

Forbidden

**404**

Not Found

get/company/{company\_id}/schedules/{schedule\_id}/days/{day\_id}/events

https://api.alteg.io/api/v1/company/{company\_id}/schedules/{schedule\_id}/days/{day\_id}/events

### Response samples

- 200
- 401
- 403
- 404

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 123,\
\
"created_at": "2022-01-01 12:12:12",\
\
"updated_at": "2022-01-01 12:12:12",\
\
"deleted_at": null,\
\
"event_status": "stable",\
\
"event_datetime": "2022-01-24 14:00:00",\
\
"event_entity_type": "activity",\
\
"event_entity_id": 123,\
\
"is_entity_master_changed": false,\
\
"is_entity_datetime_changed": false,\
\
"is_entity_duration_changed": false,\
\
"is_entity_labels_changed": false,\
\
"is_entity_resource_instances_changed": false,\
\
"entity_master": {"id": 123,\
\
"name": "John Johnson",\
\
"company_id": 123,\
\
"specialization": "Master",\
\
"avatar": "https://app.alteg.io/images/no-master-sm.png",\
\
"avatar_big": "https://app.alteg.io/images/no-master.png",\
\
"position": {"id": 123,\
\
"title": "Staff"\
\
}\
\
},\
\
"entity_datetime": "2022-01-24 14:00:00",\
\
"entity_duration": 3600,\
\
"entity_labels": [{"id": 123,\
\
"title": "Label",\
\
"color": "#ff0000"\
\
}\
\
],\
\
"entity_resource_instances": [{"id": 123,\
\
"title": "Resource #1",\
\
"resource_id": 123\
\
}\
\
]\
\
}\
\
],

"meta": {"count": 10

}

}`

## [tag/Schedules-of-Appointments-and-Events/operation/api.location.timetable_event_schedules.client_schedules.create](https://developer.alteg.io/api\#tag/Schedules-of-Appointments-and-Events/operation/api.location.timetable_event_schedules.client_schedules.create) Create a Client Schedule

Creates a client schedule with a series of appointments for events, based on an existing schedule..

##### Authorizations:

_BearerPartnerUser_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |
| schedule\_id<br>required | number<br>Example: 123<br>ID of a schedule. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

##### Request Body schema: application/json

|     |     |
| --- | --- |
| client\_id<br>required | number<br>ID of client for creating a client schedule. |
| comer\_id | number<br>ID of client\`s comer for creating a client schedule. |
| schedule\_days\_ids<br>required | Array of numbers \[ 1 .. 7 \] items <br>IDs of schedule series, min of 1 series, max of 7 series. |

### Responses

**201**

Created

**401**

Unauthorized

**403**

Forbidden

**404**

Not Found

**422**

Unprocessable Entity

post/company/{company\_id}/schedules/{schedule\_id}/client\_schedules

https://api.alteg.io/api/v1/company/{company\_id}/schedules/{schedule\_id}/client\_schedules

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"client_id": 123,

"comer_id": 123,

"schedule_days_ids": [123\
\
]

}`

### Response samples

- 201
- 401
- 403
- 404
- 422

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 123,

"loyalty_abonement_id": null,

"final_day": "2022-01-01 12:12:12",

"days": [{"id": 123,\
\
"created_at": "2022-01-01 12:12:12",\
\
"updated_at": "2022-01-01 12:12:12",\
\
"deleted_at": null,\
\
"timetable_event_schedule_id": 123,\
\
"day_of_week": "mon",\
\
"events_time": "14:00:00",\
\
"events_duration": 3600,\
\
"events_master": {"id": 123,\
\
"name": "John Johnson",\
\
"company_id": 123,\
\
"specialization": "Master",\
\
"avatar": "https://app.alteg.io/images/no-master-sm.png",\
\
"avatar_big": "https://app.alteg.io/images/no-master.png",\
\
"position": {"id": 123,\
\
"title": "Staff"\
\
}\
\
},\
\
"events_labels": [{"id": 123,\
\
"title": "Label",\
\
"color": "#ff0000"\
\
}\
\
],\
\
"events_resource_instances": [{"id": 123,\
\
"title": "Resource #1",\
\
"resource_id": 123\
\
}\
\
]\
\
}\
\
]

},

"meta": { }

}`

## [tag/Schedules-of-Appointments-and-Events/operation/api.location.timetable_event_schedules.client_schedules.update](https://developer.alteg.io/api\#tag/Schedules-of-Appointments-and-Events/operation/api.location.timetable_event_schedules.client_schedules.update) Update a Client Schedule

Updates the client schedule by attaching or detaching a schedule series, which results in appointments for future events being created or removed.

##### Authorizations:

_BearerPartnerUser_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |
| schedule\_id<br>required | number<br>Example: 123<br>ID of a schedule. |
| client\_schedule\_id<br>required | number<br>Example: 123<br>ID of a client schedule. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

##### Request Body schema: application/json

|     |     |
| --- | --- |
| schedule\_days\_ids<br>required | Array of numbers \[ 1 .. 7 \] items <br>IDs of schedule series, min of 1 series, max of 7 series. |

### Responses

**200**

OK

**401**

Unauthorized

**403**

Forbidden

**404**

Not Found

**422**

Unprocessable Entity

patch/company/{company\_id}/schedules/{schedule\_id}/client\_schedules/{client\_schedule\_id}

https://api.alteg.io/api/v1/company/{company\_id}/schedules/{schedule\_id}/client\_schedules/{client\_schedule\_id}

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"schedule_days_ids": [123\
\
]

}`

### Response samples

- 200
- 401
- 403
- 404
- 422

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 123,

"loyalty_abonement_id": null,

"final_day": "2022-01-01 12:12:12",

"days": [{"id": 123,\
\
"created_at": "2022-01-01 12:12:12",\
\
"updated_at": "2022-01-01 12:12:12",\
\
"deleted_at": null,\
\
"timetable_event_schedule_id": 123,\
\
"day_of_week": "mon",\
\
"events_time": "14:00:00",\
\
"events_duration": 3600,\
\
"events_master": {"id": 123,\
\
"name": "John Johnson",\
\
"company_id": 123,\
\
"specialization": "Master",\
\
"avatar": "https://app.alteg.io/images/no-master-sm.png",\
\
"avatar_big": "https://app.alteg.io/images/no-master.png",\
\
"position": {"id": 123,\
\
"title": "Staff"\
\
}\
\
},\
\
"events_labels": [{"id": 123,\
\
"title": "Label",\
\
"color": "#ff0000"\
\
}\
\
],\
\
"events_resource_instances": [{"id": 123,\
\
"title": "Resource #1",\
\
"resource_id": 123\
\
}\
\
]\
\
}\
\
]

},

"meta": { }

}`

## [tag/Schedules-of-Appointments-and-Events/operation/api.location.timetable_event_schedules.client_schedules.delete](https://developer.alteg.io/api\#tag/Schedules-of-Appointments-and-Events/operation/api.location.timetable_event_schedules.client_schedules.delete) Delete a Client Schedule

Deletes a client schedule, including all associated future appointments for scheduled events.

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |
| schedule\_id<br>required | number<br>Example: 123<br>ID of a schedule. |
| client\_schedule\_id<br>required | number<br>Example: 123<br>ID of a client schedule. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

### Responses

**204**

No Content

**401**

Unauthorized

**403**

Forbidden

**404**

Not Found

delete/company/{company\_id}/schedules/{schedule\_id}/client\_schedules/{client\_schedule\_id}

https://api.alteg.io/api/v1/company/{company\_id}/schedules/{schedule\_id}/client\_schedules/{client\_schedule\_id}

### Response samples

- 204
- 401
- 403
- 404

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": null,

"meta": { }

}`

## [tag/Marketplace](https://developer.alteg.io/api\#tag/Marketplace) Marketplace

Setting up notifications via the wizard in the notification showcase involves several steps:

- **Partner integration requirements**. The partner company must provide all necessary information for technical integration, including: Domain name, URL for user registration, URL for receiving event callbacks.
- **User authorization and registration**. The Altegio user confirms acceptance of the integration terms, after which they are redirected to the partner’s registration page. A salon\_id GET parameter is added to the URL to indicate the branch initiating the registration.
- **Returning to Altegio**. After successful registration, the partner must redirect the user back to Altegio using the designated [return route](https://developer.alteg.io/#operation/marketplace.notifications.callback_with_settings).
- **Service activation confirmation**. Once the service has been successfully paid for, the partner must notify Altegio by sending a ping to the [appropriate endpoint](https://developer.alteg.io/#operation/marketplace.notifications.callback_with_payment).

## [tag/Marketplace/operation/marketplace.notifications.callback_with_settings_and_redirect](https://developer.alteg.io/api\#tag/Marketplace/operation/marketplace.notifications.callback_with_settings_and_redirect) Redirect URL after user registration with the partner service

After completing registration, the user must be redirected to this URL in the browser, along with any required data needed by the partner service.

##### Authorizations:

_bearer_

##### Request Body schema: application/json

|     |     |
| --- | --- |
| salon\_id<br>required | number<br>Location ID. |
| application\_id<br>required | number<br>Application ID. |
| api\_key | number<br>API-key for messaging module. |
| webhook\_urls | Array of strings<br>Webhooks array |

### Responses

**301**

Accepted, redirect

**401**

Unauthorized

**403**

Forbidden

**422**

Invalid parameters given

post/marketplace/partner/callback/redirect

https://app.alteg.io/marketplace/partner/callback/redirect

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"salon_id": 123,

"application_id": 123,

"api_key": "2f181e2a-5c22-4ae7-9d9b-07104f312c28",

"webhook_urls": ["https://example.com/webhook"\
\
]

}`

### Response samples

- 401
- 403
- 422

Content type

application/json

Copy
Expand all  Collapse all

`{"success": false,

"data": null,

"meta": {"message": "Authentication needed."

}

}`

## [tag/Marketplace/operation/marketplace.notifications.callback_with_settings](https://developer.alteg.io/api\#tag/Marketplace/operation/marketplace.notifications.callback_with_settings) Application Installation for a Location

The integration settings of the partner service must be sent to this address. Once received, the application will be configured and installed for the corresponding location.

##### Authorizations:

_bearer_

##### Request Body schema: application/json

|     |     |
| --- | --- |
| salon\_id<br>required | number<br>Location ID. |
| application\_id<br>required | number<br>Application ID. |
| api\_key | number<br>API-key for messaging module. |
| webhook\_urls | Array of strings<br>Webhooks array |

### Responses

**201**

All parameters installed

**401**

Unauthorized

**403**

Forbidden

**422**

Invalid parameters given

post/marketplace/partner/callback

https://app.alteg.io/marketplace/partner/callback

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"salon_id": 123,

"application_id": 123,

"api_key": "2f181e2a-5c22-4ae7-9d9b-07104f312c28",

"webhook_urls": ["https://example.com/webhook"\
\
]

}`

### Response samples

- 401
- 403
- 422

Content type

application/json

Copy
Expand all  Collapse all

`{"success": false,

"data": null,

"meta": {"message": "Authentication needed."

}

}`

## [tag/Marketplace/operation/marketplace.notifications.callback_with_payment](https://developer.alteg.io/api\#tag/Marketplace/operation/marketplace.notifications.callback_with_payment) Notify Altegio of Successful Payment

A webhook notification must be sent to this address to inform Altegio of a successful payment made on the partner service’s side.

##### Authorizations:

_bearer_

##### Request Body schema: application/json

|     |     |
| --- | --- |
| salon\_id<br>required | number<br>Location ID. |
| application\_id<br>required | number<br>Application ID. |
| currency\_iso<br>required | string<br>Currency ISO (e.g.: USD, EUR, BYN) |
| payment\_sum<br>required | number<br>Payment amount. |
| payment\_date<br>required | string<br>Date and time of payment. |
| period\_from<br>required | string<br>Date from which the paid period begins (inclusive). |
| period\_to<br>required | string<br>Date from which the paid period ends (inclusive). |

### Responses

**200**

Webhook ok

**401**

Unauthorized

**403**

Forbidden

**422**

Wrong parameters given

post/marketplace/partner/payment

https://app.alteg.io/marketplace/partner/payment

### Request samples

- Payload

Content type

application/json

Copy

`{"salon_id": 123,

"application_id": 123,

"currency_iso": "EUR",

"payment_sum": 990.99,

"payment_date": "2022-01-01 10:10:00",

"period_from": "2022-01-01 10:10:00",

"period_to": "2022-02-01 10:10:00"

}`

### Response samples

- 200
- 401
- 403
- 422

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 123

}

}`

## [tag/Marketplace/operation/marketplace.notifications.set_short_names](https://developer.alteg.io/api\#tag/Marketplace/operation/marketplace.notifications.set_short_names) Notify Altegio of Available SMS Sender Names

This endpoint is used to send the list of SMS sender names available to the user. The user will be able to choose from any of the provided sender names.

##### Authorizations:

_bearer_

##### Request Body schema: application/json

|     |     |
| --- | --- |
| salon\_id<br>required | number<br>Location ID. |
| application\_id<br>required | number<br>Application ID |
| short\_names<br>required | Array of strings<br>Array of SMS names |

### Responses

**201**

OK

**401**

Unauthorized

**403**

Forbidden

**422**

Invalid params given

post/marketplace/partner/short\_names

https://app.alteg.io/marketplace/partner/short\_names

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"salon_id": 123,

"application_id": 123,

"short_names": ["Altegio",\
\
"AL"\
\
]

}`

### Response samples

- 401
- 403
- 422

Content type

application/json

Copy
Expand all  Collapse all

`{"success": false,

"data": null,

"meta": {"message": "Authentication needed."

}

}`

## [tag/Marketplace/operation/marketplace.partner.callback_with_payment.refund](https://developer.alteg.io/api\#tag/Marketplace/operation/marketplace.partner.callback_with_payment.refund) Chargeback Notice

Chargeback Notice

##### Authorizations:

_bearer_

##### path Parameters

|     |     |
| --- | --- |
| payment\_id<br>required | number<br>Example: 123<br>Payment ID. |

### Responses

**200**

Refund confirmed

**401**

Unauthorized

**403**

Forbidden

**422**

Invalid parameters given

post/marketplace/partner/payment/refund/{payment\_id}

https://app.alteg.io/marketplace/partner/payment/refund/{payment\_id}

### Response samples

- 401
- 403
- 422

Content type

application/json

Copy
Expand all  Collapse all

`{"success": false,

"data": null,

"meta": {"message": "Authentication needed."

}

}`

## [tag/Marketplace/operation/marketplace.webhook](https://developer.alteg.io/api\#tag/Marketplace/operation/marketplace.webhook) Webhook from Altegio About Application Events

Note: This is not a callable endpoint.

This section describes how Altegio sends webhook notifications when specific events occur in the application-to-location lifecycle. The following event types are currently supported:

- uninstall — Sent when the application is disabled on the Altegio side.
- freeze — Sent when the integration is frozen due to service expiration.

You can configure the webhook URL for receiving these events in your Altegio Developer Account.

##### Request Body schema: application/json

|     |     |
| --- | --- |
| salon\_id<br>required | number<br>Location ID. |
| application\_id<br>required | number<br>Application ID. |
| event<br>required | string<br>Enum:"uninstall""freeze"<br>Event Slug. |
| partner\_token<br>required | string<br>Bearer token of the developer's location (to verify the origin of the webhook) |

### Responses

**200**

From the side of the partner, a response code of successful processing (200-299) is expected.

post/marketplace\_webhook

https://api.alteg.io/marketplace\_webhook

### Request samples

- Payload

Content type

application/json

Copy

`{"salon_id": 123,

"application_id": 123,

"event": "uninstall",

"partner_token": "yasdfkjah2328aj"

}`

## [tag/Marketplace/operation/marketplace.partner.integration_status](https://developer.alteg.io/api\#tag/Marketplace/operation/marketplace.partner.integration_status) Application Status Data for Any Location

This endpoint is used to retrieve information about the application's installation status in a specific location.

##### Authorizations:

_bearer_

##### path Parameters

|     |     |
| --- | --- |
| salon\_id<br>required | number<br>Location ID |
| application\_id<br>required | number<br>Application ID |

### Responses

**200**

Info about application location link

**401**

No partner token given.

**403**

No application access

**404**

Application isn't installed

get/marketplace/salon/{salon\_id}/application/{application\_id}

https://app.alteg.io/marketplace/salon/{salon\_id}/application/{application\_id}

### Response samples

- 200
- 401
- 403
- 404

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"logs": [{"changed_at": "2022-06-27 12:20:02",\
\
"status_from": "uninstalled",\
\
"status_to": "pending",\
\
"source": "marketplace"\
\
},\
\
{"changed_at": "2022-06-27 12:22:02",\
\
"status_from": "pending",\
\
"status_to": "active",\
\
"source": "partner_api"\
\
}\
\
],

"payments": [{"id": 1523,\
\
"payment_sum": 1523.12,\
\
"payment_date": "2022-06-27 12:22:02",\
\
"is_refunded": false,\
\
"period_from": "2022-06-27 00:00:00",\
\
"period_to": "2022-07-27 00:00:00"\
\
}\
\
],

"connection_status": {"status": "active",

"created_at": "2022-06-27 12:20:02"

}

}

}`

## [tag/Marketplace/operation/marketplace.partner.uninstall](https://developer.alteg.io/api\#tag/Marketplace/operation/marketplace.partner.uninstall) Application Uninstall

This endpoint is used by the partner service to uninstall the application from a specific location.

##### Authorizations:

_bearer_

##### path Parameters

|     |     |
| --- | --- |
| salon\_id<br>required | number<br>Location ID |
| application\_id<br>required | number<br>Application ID |

### Responses

**200**

successfully uninstalled

**401**

No partner token given.

**403**

No application access

**404**

Application isn't installed

post/marketplace/salon/{salon\_id}/application/{application\_id}/uninstall

https://app.alteg.io/marketplace/salon/{salon\_id}/application/{application\_id}/uninstall

### Response samples

- 200
- 401
- 403
- 404

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": null,

"meta": { }

}`

## [tag/Marketplace/operation/marketplace.partner.application_salon_list](https://developer.alteg.io/api\#tag/Marketplace/operation/marketplace.partner.application_salon_list) Data About Locations Connected to the Application

This endpoint retrieves a list of locations that have connected a specific application, along with detailed information about each.

##### Authorizations:

_bearer_

##### path Parameters

|     |     |
| --- | --- |
| application\_id<br>required | number<br>Application ID |

##### query Parameters

|     |     |
| --- | --- |
| page<br>required | number<br>Page number |
| count<br>required | number <= 1000 <br>Number of elements per page |

### Responses

**200**

Salons Array

**401**

No partner token given

**403**

No access to application.

get/marketplace/application/{application\_id}/salons

https://app.alteg.io/marketplace/application/{application\_id}/salons

### Response samples

- 200
- 401
- 403

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": "1050",\
\
"title": "La Visage",\
\
"short_descr": "Beauty saloon",\
\
"logo": "https://app.alteg.io/images/no-master.png",\
\
"active": "1",\
\
"phone": "+1-315-555-0175",\
\
"country_id": 7,\
\
"schedule": "",\
\
"country": "United States",\
\
"city_id": 181,\
\
"city": "New York",\
\
"timezone_name": "America/New_York",\
\
"address": "New York, 787 Jackson Drive",\
\
"coordinate_lat": "40.730610",\
\
"coordinate_lon": "-73.935242",\
\
"phone_confirmation": true,\
\
"active_staff_count": 2,\
\
"next_slot": "2023-03-23T10:10:00+0300",\
\
"app_ios": "",\
\
"app_android": "",\
\
"currency_short_title": "R",\
\
"group_priority": 900\
\
},\
\
{"id": "1051",\
\
"title": "La Visage 2",\
\
"short_descr": "Beauty saloon",\
\
"logo": "https://app.alteg.io/images/no-master.png",\
\
"active": "1",\
\
"phone": "+1-315-555-0175",\
\
"country_id": 7,\
\
"country": "United States",\
\
"city_id": 181,\
\
"city": "New York",\
\
"timezone_name": "America/New_York",\
\
"address": "New York, 787 Jackson Drive",\
\
"coordinate_lat": "40.730610",\
\
"coordinate_lon": "-73.935242",\
\
"phone_confirmation": false,\
\
"active_staff_count": 3,\
\
"next_slot": "2023-03-23T10:10:00+0300",\
\
"app_ios": "",\
\
"app_android": "",\
\
"currency_short_title": "R",\
\
"group_priority": 901\
\
}\
\
],

"meta": { }

}`

## [tag/Sending-SMS-Through-Operators](https://developer.alteg.io/api\#tag/Sending-SMS-Through-Operators) Sending SMS Through Operators

To enable SMS sending, the operator must provide the API endpoint (url\_operator) to which Altegio will send the relevant requests.
API requests are authorized using the RFC 6749 Resource Owner Password Credentials Grant method. Each request must include an Authorization HTTP header containing an access token in the following format:
Authorization: Bearer
The authorization key (partner\_token) must be configured in the company’s notification module settings.

## [tag/Sending-SMS-Through-Operators/operation/Sending SMS](https://developer.alteg.io/api\#tag/Sending-SMS-Through-Operators/operation/Sending%20SMS) Sending SMS

### Send SMS

If an error occurs while sending an SMS, the response will include the appropriate HTTP status code. In some cases, a descriptive error message will also be included in the response body.
All API methods may return the following error codes: \|

##### Authorizations:

_bearer_

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token |

##### Request Body schema: \*/\*  optional

|     |     |
| --- | --- |
| destination\_params<br>required | object<br>an object containing the send ID and phone number parameters |
| from<br>required | string<br>Sender name |
| text<br>required | string<br>departure text |
| type<br>required | string<br>sending type (sms, viber) |
| dispatch\_type<br>required | string<br>mailing type (service - service, adds - advertising) |
| delivery\_callback\_url<br>required | string<br>url to which message statuses are sent |

### Responses

**200**

OK

**400**

Bad Request

**401**

Unauthorized

**404**

Not Found

post/

https://api.alteg.io/api/v1/

### Response samples

- 200
- 400
- 401
- 404

Content type

application/json

Copy
Expand all  Collapse all

`[{"id": "232674",\
\
"ext_id": "609aff0fca92466d6a1747dd83f05943a8c9600d"\
\
},\
\
{"id": "232674",\
\
"error_code": 32,\
\
"error_message": "explicit error message"\
\
}\
\
]`

## [tag/Authorization](https://developer.alteg.io/api\#tag/Authorization) Authorization

## [tag/Authorization/operation/Authorize user](https://developer.alteg.io/api\#tag/Authorization/operation/Authorize%20user) Authorize User

When a user changes their password, their API key is regenerated. As a result, reauthorization is required using the new API key.

| Attribute | Type | Description |
| --- | --- | --- |
| login | string | The user's phone number in the format 380000000000, or their email address. |
| password | string | User password |

##### Authorizations:

_bearer_

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| login<br>required | string<br>Phone number or Email |
| password<br>required | string<br>Password |

### Responses

**201**

Created

post/auth

https://api.alteg.io/api/v1/auth

### Request samples

- Payload

Content type

application/json

Copy

`{"login": "testuser@alteg.io",

"password": "testpass"

}`

### Response samples

- 201

Content type

application/json

Copy

`{"id": 123456,

"user_token": "wec23fh8cDfFV4432fc352456",

"name": "James Smith",

"phone": "+1-315-555-0175",

"login": "j.smith",

"email": "j.smith@example.com",

"avatar": "https://assets.alteg.io/general/0/01/123456789098765_12345678909876.png",

"is_approved": true

}`

## [tag/Authorization/operation/Authorize Online Booking User](https://developer.alteg.io/api\#tag/Authorization/operation/Authorize%20Online%20Booking%20User) Authorize Online Booking User

When a user of an online account changes their password, their API key will change and a new authorization will be required

| Attribute | Type | Description |
| --- | --- | --- |
| login | string | The visitor's phone number in the format 380000000000, or their email address. |
| password | string | Visitor password |

##### Authorizations:

_bearer_

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| login<br>required | string<br>Phone number or Email |
| password<br>required | string<br>Password |

### Responses

**201**

Created

post/booking/auth

https://api.alteg.io/api/v1/booking/auth

### Request samples

- Payload

Content type

application/json

Copy

`{"login": "testuser@alteg.io",

"password": "testpass"

}`

### Response samples

- 201

Content type

application/json

Copy

`{"id": 123456,

"user_token": "wec23fh8cDfFV4432fc352456",

"name": "James Smith",

"phone": "+1-315-555-0175",

"login": "j.smith",

"email": "j.smith@example.com",

"avatar": "https://assets.alteg.io/general/0/01/123456789098765_12345678909876.png"

}`

## [tag/Online-Booking](https://developer.alteg.io/api\#tag/Online-Booking) Online Booking

## [tag/Online-Booking/operation/Get booking form settings](https://developer.alteg.io/api\#tag/Online-Booking/operation/Get%20booking%20form%20settings) Get booking form settings

Each Altegio client can create an unlimited number of Online Booking forms with different designs and booking scenarios.

Typically, the ID of a booking form is embedded in the subdomain. For example: [https://b123.alteg.io](https://b123.alteg.io/), where 123 is the booking form ID. This ID can be used to retrieve all necessary parameters for implementing Online Booking and to determine whether the booking applies to a specific company or a company chain.

For chain widgets, you will also need to call the \[GET\] /locations method with the company\_id filter to retrieve the list of locations available for booking.

The object containing the Online Booking form settings includes the following fields:

| Field | Type | Description |
| --- | --- | --- |
| steps | Array of objects | Booking form steps with custom settings |
| style | object | Booking form design settings |
| group\_id | number | Company chain ID (0 - if the booking form is for a non-chain company) |
| company\_id | number | Company ID (always returned, used to get additional settings) |
| phone\_confirmation | boolean | Do I need to confirm the phone by SMS (if groupid = 0 (not a group form), otherwise look in the settings of each company separately) |
| language | string | Booking form language (code from langs array) |
| langs | array of object | List of widget languages |
| comment\_required | boolean | Whether the field with a comment within booking is required |
| google\_analytics\_id | string | Google Analytics ID |
| facebook\_pixel\_id | string | Facebook Pixel ID |
| sms\_enabled | boolean | Is sending SMS available? |
| comment\_input\_name | string (optional) | Title for the field with a comment to the booking (if not set, the default value is used) |
| booking\_notify\_text | string (optional) | The text of the notification that is displayed (if set) at the step of entering contact data |
| is\_show\_privacy\_policy | boolean | Whether it is necessary to display the text of the agreement on the personal data processing policy to the user |
| specialization\_display\_mode | number | Display the specialization or position of the staff member. 0 - Specialization, 1 - Position |

The steps array consists of objects that have the following fields:

| Field | Type | Description | For what steps is specified |
| --- | --- | --- | --- |
| step | string | Step city/company/service/specialist/datetime/contact/confirm |  |
| title | string | Name of the step to display in the interface | For everyone |
| number | number | What number should this step be displayed on (starting from 1) | For everyone |
| default | string or number | The default value for this step, if set | For all but datetime |
| hidden | boolean | Hide this step when booking or not | For everyone |
| date\_hidden | boolean | Hide this step when booking or not | For datetime |
| time\_hidden | boolean | Hide this step when booking or not | For datetime |
| date\_default | string | The default value for this step, if set | For datetime |
| time\_default | number | The default value for this step, if set | For datetime |

The style object has the following fields:

| Field | Type | Description |
| --- | --- | --- |
| show header | boolean | Show header and menu or not |
| logo | string | Path to logo image |
| header\_background | string | Path to subtitle background image |
| menu\_background | string | Path to menu background image |
| primaryPalette | string | The main color of the form (all colors from the list: red, pink, purple, deep-purple, indigo, blue, light-blue, cyan, teal, green, light-green, lime, yellow, amber, orange, deep-orange, brown , grey, blue-grey, white, black) |
| accentPalette | string | Form secondary color (subtitle semi-transparent cover) |
| warnPalette | string | Booking form buttons color |
| backgroundPalette | string | Booking form background color |

##### Authorizations:

_bearer_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | number<br>Example: 1<br>booking form id |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token |

### Responses

**200**

OK

get/bookform/{id}

https://api.alteg.io/api/v1/bookform/{id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"steps": [{"step": "master",\
\
"title": "Choose a specialist",\
\
"num": 2,\
\
"hidden": "0",\
\
"default": -1\
\
},\
\
{"step": "service",\
\
"title": "Choose a service",\
\
"num": 1,\
\
"hidden": "1",\
\
"default": "196"\
\
},\
\
{"step": "datetime",\
\
"title": "Select session date and time",\
\
"num": 3,\
\
"hidden": false,\
\
"date_hidden": "0",\
\
"time_hidden": "0",\
\
"date_default": "2025-09-21T23:00:00.000+03:00",\
\
"time_default": "27900"\
\
},\
\
{"step": "contact",\
\
"title": "Business Example",\
\
"num": 3,\
\
"hidden": false,\
\
"default": 0\
\
},\
\
{"step": "comfirm",\
\
"title": "Business Example",\
\
"num": 4,\
\
"hidden": false,\
\
"default": 0\
\
}\
\
],

"style": {"show_header": true,

"logo": "https://app.alteg.io/uploads/logo.png",

"header_background": "https://app.alteg.io/uploads/header.png",

"menu_background": "https://app.alteg.io/uploads/menu.png",

"main_color": "666",

"secondary_color": "999",

"buttons_color": "FFF"

},

"group_id": 1,

"company_id": 1,

"phone_confirmation": false,

"lang": "en-US",

"langs": [{"id": 2,\
\
"code": "en-US",\
\
"title": "English"\
\
},\
\
{"id": 4,\
\
"code": "lv-LV",\
\
"title": "Latviešu valoda"\
\
},\
\
{"id": 5,\
\
"code": "et-EE",\
\
"title": "Eesti keel"\
\
},\
\
{"id": 6,\
\
"code": "lt-LT",\
\
"title": "Lietuva"\
\
},\
\
{"id": 7,\
\
"code": "uk-UK",\
\
"title": "Ukrainian"\
\
},\
\
{"id": 8,\
\
"code": "fr-FR",\
\
"title": "Français"\
\
},\
\
{"id": 9,\
\
"code": "it-IT",\
\
"title": "Italiano"\
\
},\
\
{"id": 10,\
\
"code": "es-ES",\
\
"title": "Español"\
\
},\
\
{"id": 13,\
\
"code": "ka-KA",\
\
"title": "ქართული"\
\
},\
\
{"id": 14,\
\
"code": "hy-AM",\
\
"title": "Հայերեն"\
\
},\
\
{"id": 15,\
\
"code": "kk-KK",\
\
"title": "Kazakh tili"\
\
},\
\
{"id": 16,\
\
"code": "hr-HR",\
\
"title": "Hrvatski jezik"\
\
},\
\
{"id": 17,\
\
"code": "cs-CS",\
\
"title": "český jazyk"\
\
},\
\
{"id": 18,\
\
"code": "ro-RO",\
\
"title": "Limba Română"\
\
},\
\
{"id": 19,\
\
"code": "cn-CN",\
\
"title": "中文"\
\
},\
\
{"id": 20,\
\
"code": "ar-AR",\
\
"title": "العَرَبِيَّة"\
\
},\
\
{"id": 21,\
\
"code": "bg-BG",\
\
"title": "Bulgarian"\
\
},\
\
{"id": 22,\
\
"code": "he-IL",\
\
"title": "עברית"\
\
},\
\
{"id": 23,\
\
"code": "hu-HU",\
\
"title": "Magyar nyelv"\
\
},\
\
{"id": 24,\
\
"code": "Lt-sr-SP",\
\
"title": "Srpski jezik"\
\
},\
\
{"id": 25,\
\
"code": "sk-SK",\
\
"title": "Slovenský jazyk"\
\
},\
\
{"id": 26,\
\
"code": "mn-MN",\
\
"title": "Mongol hal"\
\
},\
\
{"id": 27,\
\
"code": "az-AZ",\
\
"title": "Azərbaycan dili"\
\
},\
\
{"id": 28,\
\
"code": "pl-PL",\
\
"title": "Polszczyzna"\
\
},\
\
{"id": 30,\
\
"code": "sl-SL",\
\
"title": "Slòvēnskī"\
\
}\
\
],

"comment_required": false,

"metrika_counter_id": "50217133",

"google_analytics_id": "UA-125358345-1",

"facebook_pixel_id": "2218788388343154",

"app_metrika_id": "46ab3b93-1bc6-457d-82f0-c1b51f39b01e",

"sms_enabled": true

},

"meta": [ ]

}`

## [tag/Online-appointment](https://developer.alteg.io/api\#tag/Online-appointment) Online appointment

## [tag/Online-appointment/operation/Get internationalization options](https://developer.alteg.io/api\#tag/Online-appointment/operation/Get%20internationalization%20options) Get internationalization options

Translation is available in one of the languages:

- Latvian - 'lv-LV'
- English - 'en-US'
- Estonian - 'ee-EE'
- Lithuanian - 'lt-LT'
- German - 'de-DE'
- Ukrainian - 'uk-UK'

##### Authorizations:

_bearer_

##### path Parameters

|     |     |
| --- | --- |
| langCode<br>required | string<br>Example: en-US<br>Language code. One of the set 'lv-LV', 'en-US', 'ee-EE', 'lt-LT', 'de-DE', 'uk-UK' |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token |

### Responses

**200**

OK

get/i18n/{langCode}

https://api.alteg.io/api/v1/i18n/{langCode}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"404": {"not-found": "It seems that this page does not exist.",

"not-found-record": "Such an appointment does not exist.",

"go-home": "To main"

},

"action": {"send": "send"

},

"tips": {"terms": {"prefix": "By clicking \"Submit\", you accept",

"of-use": "Terms of Use",

"personal-policy": "Privacy Policy"

},

"review-sent": "Review sent",

"your-mark": "your mark",

"leave-a-review": "Leave a review",

"leave-a-tip-to-a-specialist": "Leave a tip for a specialist",

"credited": "Tip credited",

"visit-amount": "Visit amount",

"will-be-written-off": "Will be written off",

"at-time": "v",

"rate-specialist-to-sent-feedback": "Rate a specialist to send feedback",

"title": "Tips",

"tips-required": "Please select a tip amount",

"review-or-tips-required": "It seems that there is nothing to send to a specialist yet",

"enter-sum": "Enter amount",

"custom-sum": "Own amount",

"cancel-tips": "Cancel tip",

"bad-sum": "Tipping must be indicated by the amount"

},

"payment-status": {"payment-error": "Payment error. Try again",

"payment-redirect": "You should be directed to the payment system.",

"payment-config-error": "Error in setting up the payment system",

"contact-us-for-questions": "Contact us if you have any questions.",

"contacts": "Contacts",

"order-registered": "Application completed",

"order-paid": "Order has been paid",

"retry": "Repeat",

"order-created-successfully": "The order has been successfully created. Our representative will contact you to clarify the details.",

"order-is-being-processed": "Operation is being processed",

"get-payment-data": "Receiving payment data",

"transaction-number": "Transaction number",

"payment-transaction-info-1": "If you received a check, then the purchase was successfully completed. Check the email address you provided when purchasing.",

"payment-transaction-info-2": "    If the receipt did not arrive, please try again or contact us using the contacts below.",

"order-number-info": "Provide this number at the time of your visit to redeem your certificate or pass."

},

"user-data-form": {"loyalty-phone-tip": "Provide this number at the time of your visit to redeem your certificate or pass.",

"name-required": "Name required",

"email-required": "Email required",

"loyalty-email": "E-mail for receipt and purchase",

"agreement-link": "with the terms of the agreement",

"data-processing-link": "data processing",

"terms-prefix": "By clicking on the button you agree",

"proceed": "Checkout",

"pay": "Pay",

"phone-code": "The code",

"phone": "Telephone",

"invalid-phone": "Invalid number"

},

"and": "and",

"terms-of-agreement": "Terms of agreement",

"data-processing": "Data processing",

"license-agreement": "License agreement",

"personal-data": "Your data",

"buy-for": "Buy for",

"group_booking": {"personal_booking": "Individual services",

"group_booking": "Group events",

"choose_group_event": "Choose an event",

"group_events_available": "Registration available for group events",

"places": "Places",

"group_events_is_not_available": "There are no group events for the selected day",

"group_events_is_not_available_filial": "Group events are not configured in this location yet",

"repeat": "Sign up again",

"duration": "Duration",

"no_space": "No places",

"not_found": "There are no events for the selected filters. Try changing your filter options"

},

"geo": {"geo_timeout_error": "Unable to determine your location. You may be out of GPS coverage",

"geo_timeout_error_android": "Unable to determine your location. You may be out of GPS coverage. If you have geolocation disabled, you need to enable it and restart the application.",

"geo_access_error": "No access to your location. The application cannot show locations near you. If you have geolocation disabled, you need to enable it and restart the application."

},

"tooltips": {"change_filial": "Now you will always start recording from this branch. You can change the location through the menu item",

"change_filial_back_button": "You can also use the back button to change location"

},

"prepaid": {"required": "prepayment required",

"allowed": "prepayment is optional",

"prepaid_sum": "To pay online:",

"postpaid_sum": "Payment on the spot:"

},

"back": "Back",

"backCity": "Cities",

"backFilials": "Locations",

"backRecordType": "Record Type",

"filials": "Locations",

"my_profile": "Cabinet",

"about_us": "About Us",

"record": {"show_details": "View details",

"is_canceled": "Recording canceled",

"is_canceled_success": "Recording canceled successfully",

"record": "Recording",

"place": "Place",

"master": "Employee",

"service": "Service",

"services": "Services",

"date": "date",

"past": "Passed",

"through": "Across",

"time": "Time",

"clients_count": "Number of seats:",

"book_visit": "Make a visit",

"add_service": "+ Add service",

"add_master": "+ Add wizard",

"add_datetime": "+ Add date and time",

"cancel_record": "Cancel appointment",

"cancel_record_warning": "Once canceled, the recording will not be recoverable.",

"confirm_cancel_record": "Are you sure you want to cancel the recording?",

"error_cancel_record": "You cannot unsubscribe",

"error_cancel_record_new1": "It is not possible to cancel an appointment online. Please contact the administrator.",

"error_cancel_record_new2_1": "Unable to cancel online booking",

"error_cancel_record_new2_2": "before visiting. Please contact the administrator.",

"add_to_google_calendar": "Add to google calendar",

"booking_success": "You have successfully signed up!",

"create_new_record": "Sign up more",

"future_records": "Upcoming sessions",

"past_records": "Past",

"change_record_time": "Transfer appointment",

"error_change_record_time": "Unable to reschedule online. Please contact the administrator.",

"error_change_record_time2_1": "Unable to reschedule online appointment",

"error_change_record_time2_2": "before visiting. Please contact the administrator.",

"selected_services": "Selected services",

"calculate_services": "Services available...",

"change_record_fail": "Error transferring recording, please try another time",

"continue_booking": "Continue recording",

"go_to_registration": "Go to Altegio website",

"repeat": "Repeat recording",

"is_deleted": "Your appointment has been deleted."

},

"at": "v",

"on": "on the",

"h": "h.",

"m": "min.",

"from": "from",

"dist_m": "m",

"dist_km": "km",

"yesterday": "yesterday",

"today": "today",

"tomorrow": "tomorrow",

"Close": "close",

"Yes": "Yes",

"No": "Not",

"refresh": "Refresh",

"online_record_disabled": "Online registration is disabled. <br> We apologize for the inconvenience caused.",

"online_record_disabled_long_text": "Online registration is temporarily unavailable. You can still manage your online records in your account, transfer them and delete them.",

"address": {"about": "About company",

"address": "The address",

"phone": "Telephone",

"phones": "Phones",

"schedule": "Working hours",

"site": "Site",

"date_and_time": "date and time",

"photos": "Photos",

"details": "More about the location"

},

"common": {"information": "information",

"reviews": "reviews",

"contacts": "contacts"

},

"notification": {"your_city": "What is your city <%- city_name %>?",

"yes_my_city": "Yes, this is my city",

"no_my_city": "No, choose a city",

"read_all": "Read",

"delete_all": "Delete",

"deleted_record": "Deleting an appointment",

"record": "Recording",

"news": "news",

"review": "Feedback about the master",

"notify": "Notification",

"sent": "Sent"

},

"header": {"loyalty_cards": "Loyalty Cards",

"widget_settings": "Widget settings",

"settings": "Settings",

"select_town": "Choose city",

"select_company": "Choose location",

"select_date": "Date picker",

"select_master": "Employee selection",

"select_time": "Timing",

"select_service": "Service selection",

"input_personal": "Entering contact details",

"online_record": "Online appointment",

"selection_of": "Choice",

"contacts_form": "Registration",

"record_created": "Post created!",

"login": "entrance",

"profile": "Personal Area",

"my_records": "My notes",

"record_create_disabled": "Online registration is temporarily unavailable.",

"master-info": "About employee",

"notification": "Notifications",

"my_notifications": "My notifications",

"none_notifications": "No notifications",

"cart": "Proof of payment",

"change_record": "Record transfer",

"you_booking": "Your order",

"you_data": "Your data",

"record": "Recording",

"actions": "Actions",

"cancel-record": "Cancel recording",

"booking_again": "Sign up again",

"choose_time": "Pick a time",

"choose_staff": "Choose a specialist",

"about_service": "About the service",

"records": "Entries",

"confirmation": "Confirmation"

},

"loyalty": {"empty-list": "There is nothing here yet",

"points": {"nominative": "score",

"genitive": "points",

"plural-genitive": "points"

},

"no_cards": "You don't have any cards.",

"no_certificate": "You do not have any certificate.",

"no_subscription": "You don't have any subscription.",

"discount": "discount",

"cashback": "cashback",

"paid_amount": "Paid",

"sold_amount": "Sales",

"visit_count": "Visits",

"balance": "Accumulated (cashback)",

"certificate": {"services-includes": "What's included",

"no-restrictions": "No limits",

"restrictions-only-services": "All services except goods",

"any-goods": "Any goods",

"without-goods": "Items not included",

"without-services": "Services not included",

"validity": "Validity",

"validity-without-restrictions": "No expiration date",

"validity-till": "Before",

"validity-after-purchase": "since purchase",

"use-type": "Usage",

"use-type-multiple": "many times",

"use-type-single": "once",

"where-to-use": "Where to use?",

"where-to-use-show-more": "Show more",

"where-to-use-all-group": "All over the chain",

"allow-to-freeze": "Freezing option",

"title": "Certificate",

"one-off-use": "Disposable",

"multi-use": "reusable",

"denomination": "Denomination",

"balance": "Remainder"

},

"subscription": {"validity-without-restrictions": "no limit on the number of days",

"title": "Subscription"

},

"subscriptions": {"all-services": "(all services)",

"from": "from",

"valid_until": "Valid until",

"valid_unlimited": "Validity is not limited",

"unused": "Subscription has not yet been used",

"online_sale_button_text": "Buy a certificate or subscription"

},

"programs": {"item_type_id": {"any_services_any_goods": "To all services and goods",

"any_service_no_goods": "For any service",

"no_services_any_goods": "For any goods",

"custom_services_no_goods": "For some services",

"custom_services_any_goods": "For some services and any goods",

"no_services_custom_goods": "For some products",

"any_services_custom_goods": "For all services and some products",

"custom_services_custom_goods": "For some services and products",

"no_services_no_goods": "Not for services; not for goods"

},

"determined_action_settings": "Determined by promotion settings"

}

},

"save": "Save",

"proceed": "Continue",

"profile": {"name": {"saved": "Username changed to",

"not_known": "Name unknown"

},

"noFutureRecords": "You have no upcoming sessions",

"noPastRecords": "You have no past sessions",

"phone": {"confirm": "Verify phone"

},

"email": {"info": "A confirmation email has been sent to you at"

},

"password": {"info": "Password must contain at least eight characters",

"badPassword": "Wrong password specified",

"current": "Current Password",

"new": "New password",

"invalidTooShort": "",

"invalidNoDigit": "",

"invalidNoCapital": "",

"invalidNoSymbol": ""

},

"error": "An error occurred while saving data",

"saved": "Changes to your personal data are saved",

"contactsDetails": "Contact details",

"your_records": "Your appointments at the location."

},

"registration": {"registration": "registration",

"form": {"name": "Your name",

"company_title": "Company name",

"i_know_promo": "I know promo code",

"confirm_oferta_1": "I accept the terms",

"confirm_oferta_2": "contract-offers",

"submit": "Register",

"promo": "promo code",

"unknownError": "A system error has occurred, please try again later"

}

},

"menu": {"account": "Personal data",

"change_filial": "Change Location",

"change_city": "Change city",

"online_record": "Online booking",

"about": "About company",

"change_lang": "Change the language",

"hide_menu": "Hide menu",

"login": "To come in",

"myRecords": "My notes",

"on-line": "Online appointment",

"logout": "Log off",

"my": "Personal Area",

"favorite": "Favorites",

"change_password": "password change",

"header": "Menu",

"profile": "Profile",

"loyalty": "My cards",

"loyalty_subscriptions": "Subscriptions",

"loyalty_certificates": "Certificates"

},

"footer": {"worked_on": "Works for",

"worked_on_company_name": "Altegio"

},

"city": {"town_abbreviation": "G.",

"service_count": "Number of locations:",

"select_filial": "Location selection",

"not_found_cities": "No cities found for your request",

"search_cities": "Find cities",

"affiliate": {"1": "location",

"2": "location",

"3": "locations"

}

},

"company": {"list": "List",

"on_map": "On the map",

"no_companies_text_1": "You do not have any active company. To set up companies, go to",

"lk": "Personal account Altegio",

"no_companies_text_2": "After setting, press the button",

"no_companies": "No companies",

"near_session": "The closest available recording session is:",

"active_master": "Active professionals:",

"at_o_clock": "v",

"find_companies": "Find locations",

"not_found_companies": "No locations found for your search",

"look_at_the_map": "View on the map"

},

"steps": {"date_and_time": "date and time",

"staff": {"nominative": "Employee",

"genitive": "employee"

},

"service": "Service",

"time": "Time"

},

"master": {"master": "Specialist",

"skip_select_master": "Skip employee selection",

"skip_select": "Skip selection",

"near_session": "Upcoming sessions",

"nearest_time": "Next time to sign up",

"no_record": "There are no free sessions for the selected day",

"no_record_new": "There is no free time for this date. Choose another date or another specialist",

"no_master": "The employee was fired or no longer works at this location",

"any_master": "Irrelevant",

"record_is_available": "You can sign up",

"reviews": {"nominative": "review",

"genitive": "recall",

"plural-genitive": "reviews"

},

"prepaid": {"forbidden": "No prepayment required",

"allowed": "Prepayment possible",

"required": "Prepayment required"

}

},

"cart": {"title": "Services selected for payment",

"confirm": "Confirm Appointment",

"go-to-pay": "Proceed to checkout",

"confirmed": "Appointment Paid",

"pay-success": "Payment was successful!"

},

"reviews": {"cancelAddReview": "Cancel",

"later": "Rate later",

"addReview": "Leave feedback",

"yourReviewMark": "your mark",

"reviewFieldLabelText": "your feedback",

"reviewTitle": "Please rate the quality of the application",

"reviewMessage": "Write suggestions for improvements",

"reviewRequestStoreTitle": "Would you like to rate the store?",

"reviewButton": "Estimate",

"thanksForReview": "Thanks for the feedback"

},

"date": {"day_of": "Day off",

"no_record": "Working, no record",

"have_record": "Working, there is a record",

"by_month_num": {"1": "January",

"2": "February",

"3": "March",

"4": "April",

"5": "May",

"6": "June",

"7": "July",

"10": "October",

"11": "November",

"12": "December",

"08": "August",

"09": "September"

},

"by_month_short": {"Jan": "January",

"Feb": "February",

"March": "Martha",

"Mar": "Martha",

"Apr": "April",

"May": "May",

"Jun": "June",

"Jul": "July",

"Aug": "august",

"Sep": "September",

"Oct": "October",

"Nov": "November",

"Dec": "December"

}

},

"time": {"hourCased": {"nominative": "hour",

"genitive": "hours",

"plural-genitive": "hours"

},

"weekCased": {"nominative": "a week",

"genitive": "weeks",

"plural-genitive": "weeks"

},

"monthCased": {"nominative": "month",

"genitive": "months",

"plural-genitive": "months"

},

"yearCased": {"nominative": "year",

"genitive": "of the year",

"plural-genitive": "years"

},

"dayCased": {"nominative": "day",

"genitive": "days",

"plural-genitive": "days"

},

"minuteCased": {"nominative": "minute",

"genitive": "minutes",

"accusative": "minute",

"plural-genitive": "minutes"

},

"secondCased": {"nominative": "second",

"genitive": "seconds",

"accusative": "give me a sec",

"plural-genitive": "seconds"

},

"at_o_clock": "v",

"noTimes": "There are no free sessions for the selected day",

"the_part_of_day": {"morning": "Morning",

"day": "Day",

"evening": "Evening"

},

"by_week_day": {"Mon": "Mon",

"Tue": "Tue",

"Wed": "Wed",

"Thu": "Thu",

"Fri": "Fri",

"Sat": "Sat",

"Sun": "Sun"

},

"by_full_week_day": {"Monday": "Monday",

"Tuesday": "Tuesday",

"Wednesday": "Wednesday",

"Thursday": "Thursday",

"Friday": "Friday",

"Saturday": "Saturday",

"Sunday": "Sunday"

}

},

"service": {"selected": "Selected",

"selected_service_count": "Selected services:",

"noServicesAndEvents": "No promotions or services found for your search",

"noMoreServices": "There are no services that can be booked together with the selected services",

"noMoreService": "There are no services that can be booked together with the selected service",

"search": "Search...",

"sale": "Stock",

"services": "Services",

"add": "Add a service",

"add_short": "Add",

"currency_short": "R.",

"services_pref": {"1": "service",

"2": "services",

"3": "services"

},

"order_on": "Order for",

"price": "price",

"price_not_available": "Price not specified",

"price_from": "from",

"price_to": "before",

"unavailable_service": "no longer available for online registration. Would you like to choose another?",

"unavailable_services": "are no longer available for online booking. Would you like to choose others?"

},

"confirm": {"confirm": "Sign up",

"show_order_details": "View order details",

"order_details": "Order Details",

"smsNotify": "Reminder",

"dontSend": "Do not send",

"order_on": "Service order",

"service_sale": "Promotion Services",

"license_text": "Duis placerat lectus et justo mollis, nec sodales orci congue. Vestibulum semper non urna ac suscipit. Vestibulum tempor, ligula id laoreet hendrerit, massa augue iaculis magna, sit amet dapibus tortor ligula non nibh.",

"accept": "By clicking the \"Register\" button, you agree to",

"i_accept": "I accept",

"i_agree": "I agree",

"accept_inline": "By clicking the \"Register\" button, you agree",

"accept_personal_data_inline": "processing of personal data",

"and_accept": "and accept",

"terms_of_agreement": "terms of the user agreement",

"terms_of_agreement_inline": "user agreement terms",

"how_my_personal_data_will_be_processed": "how my personal data will be processed",

"first_name": "Name",

"phone": "Telephone",

"will_be_used_to_confirm": "Will be used for confirmation",

"comment": "A comment",

"email": "Email",

"recording": "Sign up",

"code_and_phone_num": "Code and phone number",

"phone_confirm_short": "Confirm number",

"phone_already_exists": "The specified number is already in use.",

"phone_confirm": "Verify phone number",

"phone_confirm_button": "Confirm",

"defaultError": "System error:",

"you_want_to_book": "Do you want to enroll",

"your_master": "your specialist",

"waiting_for_you_at_the_address": "We are waiting for you at",

"untilVisit": {"postfix": "before the visit",

"prefix": "Per"

},

"orderErrorsActions": {"changeService": "Select other services",

"changeTime": "Choose another time",

"changeRecord": "Edit Appointment",

"deleteRecord": "Delete Appointment"

},

"orderErrors": {"unknown": "incorrect recording parameters",

"server": "something went wrong, please try again later",

"code_400": "invalid email",

"code_404": "incorrect recording parameters",

"code_422": "incorrect recording parameters",

"code_437": "time overlap with another visit",

"code_433": "it is not possible to make an appointment at the selected time",

"code_436": "no employees available for appointment",

"code_438": "Unable to sign up for selected services",

"code_501": "Unknown error",

"bigLetter": {"unknown": "Incorrect recording parameters",

"server": "Something went wrong, please try again later",

"code_400": "Incorrect email",

"code_404": "Incorrect recording parameters",

"code_422": "Incorrect recording parameters",

"code_437": "Time overlap with another visit",

"code_433": "Unable to book at the selected time",

"code_436": "No employees available for recording",

"code_438": "Unable to sign up for selected services",

"code_501": "Unknown error"

}

},

"errors": {"name": {"required": "Enter your name"

},

"company": {"required": "Enter company name"

},

"phone": {"required": "Enter phone",

"incorrect": "Wrong number"

},

"email": {"required": "Enter email",

"invalid": "Incorrect email format"

},

"agreement": {"required": "You must accept the user agreement"

},

"agreement_privacy_and_terms_of_use": {"required": "To continue, you must accept the user agreement, as well as agree to the processing of personal data"

},

"comment_default": {"required": "Enter a comment"

},

"comment": {"required": "Fill in the field"

},

"code": {"incorrect": "Invalid code from SMS"

}

}

},

"login": {"login": "entrance",

"sms_auth": "SMS authorization",

"input_code_confirm": "Enter the code received by SMS to the number",

"input_phone_num": "Enter your phone number, we will send an SMS to it with an access code to your personal account",

"input_login_and_password": "If you already have a username and password, enter them below",

"code_confirm": "confirmation code",

"come_in": "To come in",

"sms_not_send_with_colon": "If the SMS did not arrive, you can request a second code via:",

"sms_not_send": "If the SMS did not arrive, you can request a second code via",

"sms_not_send_next_try": "If the SMS did not arrive, you can",

"request_new_sms_code": "Request code again",

"change_phone_num": "Change phone number",

"get_code": "to get the code",

"or": "or",

"authorized_as": "You are logged in as",

"come_in_with_login_and_pass": "Log in with username and password",

"phone_or_email": "Phone or email",

"pass": "Password",

"come_in_with_sms_authorise": "Log in via SMS authorization",

"errors": {"incorrect_login_password": "There is no user with this username or password",

"undefined_error": "A system error has occurred, please try logging in later"

}

},

"Jan": "January",

"Feb": "February",

"March": "Martha",

"Mar": "Martha",

"Apr": "April",

"May": "May",

"Jun": "June",

"Jul": "July",

"Aug": "august",

"Sep": "September",

"Oct": "October",

"Nov": "november",

"Dec": "December",

"activity": {"places_left": "Remaining places",

"filters": {"select": "Select filters",

"reset": "Reset",

"apply": "Apply"

}

},

"button": {"select": "Select",

"select_time": "Choose time",

"all_right": "That's right",

"get_sms": "Receive SMS",

"back": "Return",

"add_more": "Add more",

"remove-from-record": "Remove from order",

"continue": "Continue",

"confirm": "Confirm",

"canceling": "Cancel",

"more_reviews": "More reviews"

},

"landscape": "It will be more convenient if you turn the device vertically"

}`

## [tag/Online-appointment/operation/Send SMS verification code for phone number](https://developer.alteg.io/api\#tag/Online-appointment/operation/Send%20SMS%20verification%20code%20for%20phone%20number) Send SMS verification code for phone number

- Request body
  - phone (required, string, '79991234567') - phone to which the code will be sent
  - fullname (option, sring, `James`) \- Client name

##### Authorizations:

_bearer_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 4564<br>location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| phone | string<br>Customer phone number |
| fulname | string<br>Client name |

### Responses

**201**

Created

post/book\_code/{company\_id}

https://api.alteg.io/api/v1/book\_code/{company\_id}

### Request samples

- Payload

Content type

application/json

Copy

`{"phone": "+1-315-555-0175",

"fulname": "James Smith"

}`

### Response samples

- 201

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"meta": {"message": "Created"

}

}`

## [tag/Online-appointment/operation/Check Booking Options](https://developer.alteg.io/api\#tag/Online-appointment/operation/Check%20Booking%20Options) Check Booking Options

After generating the appointment parameters, you can validate them to ensure the appointment can be successfully created.

The JSON object containing the Online Booking parameters includes the following fields:

| Field | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appointments | Array of objects | YES | Booking options (services, specialists...) |

The appointments array consists of objects that have the following fields:

| Field | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | number | Yes | Booking ID for post-save feedback (see response to request). |
| services | array of numbers | NO | Array of IDs of the services the client wants to sign up for |
| staff\_id | number | YES | ID of the specialist the client wants to book with (0 if Any specialist is selected) |
| datetime | datetime | YES | Session date and time in ISO8601 format (passed for each session in the book\_times resource) |

In response to the parameter check request, an empty response with the code 201 will be returned if the booking parameters are in order and bookings can be created:

If the response is JSON with an HTTP code other than 201, then the booking parameters are out of order, and bookings cannot be created.

The server may return the following errors during appointment creation:

1. Selected time slot is already taken.
Returned with HTTP status code 422 and error code 433.

2. No staff members available for booking.
Occurs if a default staff member was selected but none are available. Returned with HTTP status code 422 and error code 436.

3. Booking time conflict within the same request.
One of the selected booking times overlaps with another booking created in the same request. Returned with HTTP status code 422 and error code 437, including the conflicting booking’s id in the appointments array.

4. Service not available for booking
The selected service is no longer available (e.g. removed by the location). Returned with HTTP status code 422 and error code 438.


##### Authorizations:

_bearer_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| appointments<br>required | Array of objects<br>appointment options (services, specialists...) |

### Responses

**201**

Created

**422**

Unprocessable Entity

post/book\_check/{company\_id}

https://api.alteg.io/api/v1/book\_check/{company\_id}

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"appointments": [{"id": 1,\
\
"services": [331\
\
],\
\
"staff_id": 6544,\
\
"datetime": "2025-09-21T23:00:00.000+03:00"\
\
},\
\
{"id": 2,\
\
"services": [99055\
\
],\
\
"staff_id": 6544,\
\
"datetime": "2025-09-21T23:00:00.000+03:00"\
\
}\
\
]

}`

### Response samples

- 201
- 422

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"meta": {"message": "Created"

}

}`

## [tag/Online-appointment/operation/Create a Session Appointment](https://developer.alteg.io/api\#tag/Online-appointment/operation/Create%20a%20Session%20Appointment) Create a Session Appointment

To create a session entry, provide a JSON object containing the online booking parameters. The object includes the following fields:

| Field | Type | Mandatory | Description |
| --- | --- | --- | --- |
| phone | string | YES | Client's phone number (eg 79161502239) |
| full name | string | YES | Client name |
| email | string | NO | Postal address of the client |
| appointments | Array of objects | YES | Booking options (services, specialists...) |
| code | string | NO | Phone number confirmation code sent via SMS (only needed if you need to confirm the number) |
| notify\_by\_sms | number | NO | Number of hours in advance to send an SMS reminder for the appointment (set to 0 to disable reminders). |
| notify\_by\_email | number | NO | Number of hours in advance to send an email reminder for the appointment (set to 0 to disable the reminder). |
| comment | string | NO | Appointment Comment |
| api\_id | string | NO | External Appointment ID |

The appointments array consists of objects that have the following fields:

| Field | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | number | Yes | Booking ID for post-save feedback (see response to request). |
| services | array of numbers | NO | Array of IDs of the services the client wants to sign up for |
| staff\_id | number | YES | ID of the specialist the client wants to book with (0 if any specialist is selected) |
| datetime | datetime | YES | Session date and time in ISO8601 format (passed for each session in the book\_times resource) |
| custom\_fields | key-value object | NO | Additional field values that are returned with the appointment |

Additional fields in the appointments array

When additional appointment fields are created (see the "Additional Fields" section), you can pass custom values for them during appointment creation. These fields are unique to each location.
Once the additional fields are set up, their values can be included in the optional custom\_fields parameter. This should be passed as a key–value object, where each key corresponds to the code of the additional field. Example:

- location created an additional appointment field with code="my\_custom\_field" type="number", and a second field code="some\_another\_field" type="list"
- When creating an appointment, another attribute was passed in the appointments array element: ""
appointments: \[{\
...\
}, {\
...\
custom\_fields: {\
"my\_custom\_field": 123,\
"some\_another\_field": \["first value", "second value"\]\
}\
}\]"
- When this appointment is received by the GET method later, the same value of additional fields will be returned in the response

In response to the request to create an appointment, an array of objects will come (the number of objects is equal to the number of objects in the appointments array) with the following fields:

| Field | Type | Description |
| --- | --- | --- |
| id | number | The appointment ID as passed in the original appointments array |
| record\_id | number | The unique identifier of the appointment created in the system |
| record\_hash | string | A temporary ID used for deleting the appointment immediately after creation |

Errors to be handled:

1. Incorrect SMS verification code.
Returned with HTTP status 422 and error code 432. The SMS verification code entered by the user is invalid.

2. Selected time slot is already taken.
Returned with HTTP status 422 and error code 433. The selected appointment time is unavailable. The response includes the id of the conflicting appointment from the appointments array.

3. User is blacklisted.
Returned with HTTP status 403 and error code 434. The user with the specified phone number is blacklisted and cannot book an appointment.

4. Invalid phone number format.
Returned with HTTP status 422 and error code 431. The user's phone number is not in a valid format.

5. Missing client name.
Returned with HTTP status 422 and error code 435. The client's name was not provided.

6. No available staff members.
Returned with HTTP status 422 and error code 436. No staff members are available at the selected time (commonly occurs when using a default staff member setting).

7. Overlapping appointments in request.
Returned with HTTP status 422 and error code 437. One of the selected times overlaps with another appointment in the same request. The response includes the id of the conflicting appointment from the appointments array.


##### Authorizations:

_bearer_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| phone<br>required | string<br>Customer phone |
| fullname<br>required | string<br>Client name |
| email | string<br>Postal address of the client |
| code | number<br>SMS confirmation code for verifying the phone number. This field is required if the location has phone\_confirmation = true |
| comment | string<br>Commentary on the post |
| type | string<br>Appointment source |
| notify\_by\_sms | number<br>Specifies how many hours before the visit an SMS reminder should be sent to the client. Set to 0 if no reminder is needed. |
| notify\_by\_email | number<br>Specifies how many hours before the visit an email reminder should be sent to the client. Set to 0 if no reminder is needed. |
| api\_id | number<br>Appointment ID from external system |
| appointments | Array of objects<br>Appointment options (session, services, specialist) |

### Responses

**201**

Created

post/book\_record/{company\_id}

https://api.alteg.io/api/v1/book\_record/{company\_id}

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"phone": "+1-315-555-0175",

"fullname": "James Smith",

"email": "j.smith@example.com",

"code": "38829",

"comment": "test appointment!",

"type": "mobile",

"notify_by_sms": 6,

"notify_by_email": 24,

"api_id": "777",

"appointments": [{"id": 1,\
\
"services": [331\
\
],\
\
"staff_id": 6544,\
\
"datetime": "2025-09-21T23:00:00.000+03:00",\
\
"custom_fields": {"my_custom_field": 123,\
\
"some_another_field": ["first value",\
\
"next value"\
\
]\
\
}\
\
},\
\
{"id": 2,\
\
"services": [99055\
\
],\
\
"staff_id": 6544,\
\
"datetime": "2025-09-21T23:00:00.000+03:00",\
\
"custom_fields": {"my_custom_field": 456,\
\
"some_another_field": ["next value",\
\
"last value"\
\
]\
\
}\
\
}\
\
]

}`

### Response samples

- 201

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 1,\
\
"record_id": 2820023,\
\
"record_hash": "567df655304da9b98487769426d4e76e"\
\
},\
\
{"id": 2,\
\
"record_id": 2820024,\
\
"record_hash": "34a45ddabdd446d5d33bdd27fbf855b2"\
\
}\
\
],

"meta": [ ]

}`

## [tag/Online-appointment/operation/Move Appointment to Session](https://developer.alteg.io/api\#tag/Online-appointment/operation/Move%20Appointment%20to%20Session) Move Appointment to Session

##### Authorizations:

_bearer_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| record\_id<br>required | number<br>ID of the appointment to be migrated |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| datetime | string <date-time> <br>Date and time to which we want to move the appointment |
| comment | string<br>Appointment Comment |

### Responses

**200**

OK

put/book\_record/{company\_id}/{record\_id}

https://api.alteg.io/api/v1/book\_record/{company\_id}/{record\_id}

### Request samples

- Payload

Content type

application/json

Copy

`{"datetime": "2025-09-21T23:00:00.000+03:00",

"comment": "DODO!"

}`

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 30358,

"services": [{"id": 2838,\
\
"title": "Foot massage",\
\
"cost": 0,\
\
"discount": 0\
\
}\
\
],

"company": {"id": 4564,

"title": "Business Example",

"country_id": "0",

"country": "United States",

"city_id": "0",

"city": "New York",

"phone": "+1-315-555-0175",

"timezone": "0",

"address": "New York, 787 Jackson Drive",

"coordinate_lat": "40.730610",

"coordinate_lon": "-73.935242"

},

"staff": {"id": 924,

"name": "Alice",

"spec": "about eu",

"show_rating": "1",

"rating": "5",

"votes_count": "1",

"avatar": "https://app.alteg.io/images/no-master.png",

"comments_count": "0"

},

"date": "2025-09-21T23:00:00.000+03:00",

"create_date": "2025-09-21T23:00:00.000+03:00",

"comment": "",

"deleted": true,

"length": 3600,

"notify_by_sms": 0,

"notify_by_email": 0,

"master_requested": false,

"online": true,

"api_id": "0"

}

}`

## [tag/Online-appointment/operation/Get an appointment for a session](https://developer.alteg.io/api\#tag/Online-appointment/operation/Get%20an%20appointment%20for%20a%20session) Get an appointment for a session

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| record\_id<br>required | number<br>Example: 22123<br>Post ID (enough to view the post if the user is logged in) |
| record\_hash<br>required | string<br>Example: 'dawd4fs09rhf0s9fafef0'<br>HASH appointments (required to view the appointment if the user is not authorized) |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/book\_record/{company\_id}/{record\_id}/{record\_hash}

https://api.alteg.io/api/v1/book\_record/{company\_id}/{record\_id}/{record\_hash}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"id": 13132699,

"services": [{"id": 389043,\
\
"title": "Correction of extended nails",\
\
"cost": 2300,\
\
"price_min": 2300,\
\
"price_max": 2300,\
\
"discount": 0,\
\
"amount": 1,\
\
"seance_length": 1800\
\
}\
\
],

"company": {"id": 4564,

"title": "Nail studio",

"country_id": 1,

"country": "United States",

"city_id": 2,

"city": "New York",

"phone": "+1-315-555-0175",

"phones": [ ],

"timezone": 12,

"address": "New York, 787 Jackson Drive",

"coordinate_lat": "40.730610",

"coordinate_lon": "-73.935242",

"allow_delete_record": true,

"allow_change_record": true,

"site": "www.example.com",

"currency_short_title": "USD",

"allow_change_record_delay_step": 0,

"allow_delete_record_delay_step": 0

},

"staff": {"id": 55436,

"name": "Natalia",

"specialization": "Specialist in manicure and pedicure",

"position": {"id": 446,

"title": "Manicurist"

},

"show_rating": 1,

"rating": 4.84,

"votes_count": 0,

"avatar": "http://example.com/image.png",

"comments_count": 37

},

"clients_count": 1,

"date": "2025-09-21T23:00:00.000+03:00",

"datetime": "2017-10-24T17:30:00+0000",

"create_date": "2017-10-20T21:40:24+0000",

"comment": "",

"deleted": true,

"attendance": 0,

"length": 1800,

"notify_by_sms": 0,

"notify_by_email": 0,

"master_requested": false,

"online": true,

"api_id": "",

"last_change_date": "2017-10-24T23:54:02+0000",

"prepaid": false,

"prepaid_confirmed": false,

"activity_id": 0

}`

## [tag/Online-appointment/operation/Create an Appointment in a Group Event](https://developer.alteg.io/api\#tag/Online-appointment/operation/Create%20an%20Appointment%20in%20a%20Group%20Event) Create an Appointment in a Group Event

##### Authorizations:

_bearer_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| activity\_id<br>required | number<br>Group Event ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |

##### Request Body schema: \*/\*  required

|     |     |
| --- | --- |
| fullname<br>required | string<br>Client name |
| phone<br>required | string<br>Customer phone (for example 79161502239) |
| email | string<br>Postal address of the client |
| code | number<br>SMS confirmation code for verifying the phone number. This field is required if the location has phone\_confirmation = true |
| comment | string<br>Appointment Comment |
| notify\_by\_sms | integer <int32> <br>Specifies how many hours in advance an SMS reminder should be sent before the appointment. Set to 0 to disable SMS reminders. |
| notify\_by\_email | integer <int32> <br>Specifies how many hours in advance an email reminder should be sent before the appointment. Set to 0 to disable email reminders |
| type | string<br>Appointment source |
| api\_id | number<br>Appointment ID from external system |
| clients\_count | number<br>number of seats |

### Responses

**200**

OK

post/activity/{company\_id}/{activity\_id}/book

https://api.alteg.io/api/v1/activity/{company\_id}/{activity\_id}/book

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 28417878,

"hash": "9e6a54a1a9b118b65cc39ab6f3c3b5b4"

},

"meta": [ ]

}`

## [tag/Online-appointment/operation/Get a list of dates available for booking](https://developer.alteg.io/api\#tag/Online-appointment/operation/Get%20a%20list%20of%20dates%20available%20for%20booking) Get a list of dates available for booking

The dates available for booking object has the following fields:

| Field | Type | Description |
| --- | --- | --- |
| working\_days | array of working days grouped by month | Working days of a staff member/organization |
| working\_dates | array of dates | An array of dates when the staff member/organization works |
| booking\_days | array of days when there are free sessions | Array of days that are available for booking for the specified services |
| booking\_dates | array of dates | An array of dates when there are free sessions for the service to the selected staff member/organization |

working days and booking\_days have the same format:
month:\[array of days in this month\]

For example, this booking\_days:
"9": \[\
"4",\
"5"\]
"10": \[\
"14",\
"25"\]
Means that on September 4 and 5, and on October 14 and 25 there are free sessions for booking

The following filters are available:

- service\_ids: Array of service IDs. If you need dates when you can book the specified services
- staff\_id: staff member ID. If you need dates when you can book the specified specialist
- date: Date within a month, if you need dates for a specific month

##### Authorizations:

_bearer_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### query Parameters

|     |     |
| --- | --- |
| service\_ids\[\] | string<br>Service ID.<br>Filter by the list of service identifiers |
| staff\_id | number<br>Example: staff\_id=0<br>staff member ID. Filter by staff member ID<br>Default: 0 |
| date | string<br>Example: date=2015-09-01<br>date in iso8601 format.<br>Filter by month of booking. |
| date\_from | string<br>Example: date\_from=2015-09-01<br>date in iso8601 format.<br>Start of dates to search.<br>Must be used together with the "date\_to" param and overrides the "date" param. |
| date\_to | string<br>Example: date\_to=2015-09-30<br>date in iso8601 format.<br>End of dates to search.<br>Must be used together with the "date\_from" param and overrides the "date" param. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token |

### Responses

**200**

OK

get/book\_dates/{company\_id}

https://api.alteg.io/api/v1/book\_dates/{company\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"booking_days": {"9": ["4",\
\
"5",\
\
"8",\
\
"9",\
\
"12",\
\
"13",\
\
"16",\
\
"17",\
\
"20",\
\
"21",\
\
"24",\
\
"25",\
\
"28",\
\
"29",\
\
"30"\
\
],

"10": ["1",\
\
"4",\
\
"5",\
\
"8",\
\
"9",\
\
"12",\
\
"13",\
\
"16",\
\
"17",\
\
"20",\
\
"21",\
\
"24",\
\
"25"\
\
]

},

"booking_dates": ["2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00"\
\
],

"working_days": {"9": ["4",\
\
"5",\
\
"8",\
\
"9",\
\
"12",\
\
"13",\
\
"16",\
\
"17",\
\
"20",\
\
"21",\
\
"24",\
\
"25",\
\
"28",\
\
"29",\
\
"30"\
\
],

"10": ["1",\
\
"4",\
\
"5",\
\
"8",\
\
"9",\
\
"12",\
\
"13",\
\
"16",\
\
"17",\
\
"20",\
\
"21",\
\
"24",\
\
"25"\
\
]

},

"working_dates": ["2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00"\
\
]

},

"meta": [ ]

}`

## [tag/Online-appointment/operation/Get a List of Services Available for Booking](https://developer.alteg.io/api\#tag/Online-appointment/operation/Get%20a%20List%20of%20Services%20Available%20for%20Booking) Get a List of Services Available for Booking

The object of services available for booking has the following fields:

| Field | Type | Description |
| --- | --- | --- |
| categories | array of objects | Array of service categories (you can't book a category) |
| services | array of objects | Services available for booking by category |

An object from the categories array, has the following fields:

| Field | Type | Description |
| --- | --- | --- |
| id | number | Category ID |
| title | string | Category name |
| sex | number | Category belonging to gender (1 - male, 2 - female, 0 - not specified) |
| weight | number | Category weight. Categories are sorted by weight, heavier ones first |
| api\_id | string | External Category ID |

An object from the services array, has the following fields:

| Field | Type | Description |
| --- | --- | --- |
| id | number | Service ID |
| title | string | Service name |
| category\_id | number | Identifier of the category to which the service belongs |
| weight | number | Category weight. Services are sorted by weight, heavier ones first |
| price\_min | number | The minimum cost of the service |
| price\_max | number | Maximum cost of the service |
| discount | number | Service discount |
| comment | string | Comment on the service |
| active | number | Is the service active |
| prepaid | string | Online payment status |
| sex | number | Gender for which the service is provided |
| session\_length | number | Service duration in seconds (only if filter by staff member is set) |
| image | string | Image services |

If you need to get the services provided by a specific specialist, then you need to use the filter by specialist.
The following filters are available:

- staff\_id: staff member ID. If you need services that only the selected staff member provides
- datetime: date (in iso8601 format). Specifies the desired appointment date. Use this parameter to retrieve services that can be booked with the selected specialist on that specific date.
- service\_ids: An array of service IDs. If a specialist is already selected and the time and service(s) are part of an existing appointment, this parameter should be used to select an additional service.

##### Authorizations:

_bearer_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 4564<br>location ID |

##### query Parameters

|     |     |
| --- | --- |
| staff\_id | number<br>Example: staff\_id=0<br>staff member ID. Filter by staff member ID<br>Default: 0 |
| datetime | number<br>Example: datetime=\`\`<br>date (in iso8601 format). Filter by service booking date (for example '2005-09-09T18:30')<br>Default: '' |
| service\_ids\[\] | Array of numbers<br>Service ID.<br>Filter by the list of identifiers of already selected (within one appointment) services. It makes sense if a filter by specialist and date is set. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token |

### Responses

**200**

OK

get/book\_services/{company\_id}

https://api.alteg.io/api/v1/book\_services/{company\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"events": [ ],

"services": [{"id": 1896208,\
\
"title": "hair wash",\
\
"category_id": 1895571,\
\
"price_min": 0,\
\
"price_max": 0,\
\
"discount": 0,\
\
"comment": "",\
\
"weight": 0,\
\
"active": 0,\
\
"sex": 0,\
\
"image": "",\
\
"prepaid": "forbidden",\
\
"seance_length": 3600\
\
},\
\
{"id": 1896303,\
\
"title": "Coloring",\
\
"category_id": 1895574,\
\
"price_min": 0,\
\
"price_max": 0,\
\
"discount": 0,\
\
"comment": "",\
\
"weight": 0,\
\
"active": 0,\
\
"sex": 0,\
\
"image": "",\
\
"prepaid": "forbidden",\
\
"seance_length": 3600\
\
}\
\
],

"category": [{"id": 1895571,\
\
"title": "Hair care",\
\
"sex": 0,\
\
"api_id": 0,\
\
"weight": 60\
\
},\
\
{"id": 1895574,\
\
"title": "Hair coloring",\
\
"sex": 0,\
\
"api_id": 0,\
\
"weight": 7\
\
}\
\
]

},

"meta": [ ]

}`

## [tag/Online-appointment/operation/Get a list of the nearest available sessions](https://developer.alteg.io/api\#tag/Online-appointment/operation/Get%20a%20list%20of%20the%20nearest%20available%20sessions) Get a list of the nearest available sessions

The staff member's nearest sessions object has the following fields:

| Field | Type | Description |
| --- | --- | --- |
| session\_date | string | Next date with available sessions |
| sessions | array | List of available sessions |

The following filters are available:

- service\_ids: Array of service IDs. If you need sessions, when can you book these services
- datetime: date (in iso8601 format) for which you want to get the next sessions

##### Authorizations:

_bearer_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| staff\_id<br>required | number<br>staff member ID |

##### query Parameters

|     |     |
| --- | --- |
| service\_ids\[\] | Array of numbers<br>Service ID.<br>Filter by the list of service identifiers |
| datetime | number<br>date in iso8601 format.<br>Filter by date |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |

### Responses

**200**

OK

get/book\_staff\_seances/{company\_id}/{staff\_id}/

https://api.alteg.io/api/v1/book\_staff\_seances/{company\_id}/{staff\_id}/

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"seance_date": "2025-09-21T23:00:00.000+03:00",

"seances": [{"time": "10:00",\
\
"seance_length": 3600,\
\
"datetime": "2025-09-21T23:00:00.000+03:00"\
\
},\
\
{"time": "10:15",\
\
"seance_length": 3600,\
\
"datetime": "2025-09-21T23:00:00.000+03:00"\
\
},\
\
{"time": "10:30",\
\
"seance_length": 3600,\
\
"datetime": "2025-09-21T23:00:00.000+03:00"\
\
},\
\
{"time": "10:45",\
\
"seance_length": 3600,\
\
"datetime": "2025-09-21T23:00:00.000+03:00"\
\
},\
\
{"time": "11:00",\
\
"seance_length": 3600,\
\
"datetime": "2025-09-21T23:00:00.000+03:00"\
\
}\
\
]

},

"meta": [ ]

}`

## [tag/Online-appointment/operation/Get a list of employees available for booking](https://developer.alteg.io/api\#tag/Online-appointment/operation/Get%20a%20list%20of%20employees%20available%20for%20booking) Get a list of employees available for booking

Each object from the array of staff members available for booking has the following fields:

| Field | Type | Description |
| --- | --- | --- |
| id | number | staff member ID |
| name | string | staff member name |
| specialization | string | staff member specialization |
| position | object | staff member position |
| bookable | boolean | Does the staff member have sessions available for booking |
| weight | number | staff member weight. When withdrawing, staff members are sorted by weight, heavier first |
| show\_rating | number | Whether to show staff member's rating (1 - show, 0 - don't show) |
| rating | number | staff member rating |
| votes\_count | number | Number of votes rated staff member |
| comments\_count | number | Number of comments to a staff member |
| avatar | string | Path to staff member avatar file |
| information | string | Additional information about the staff member (HTML format) |
| session\_date | string | Date of the next day that there are available sessions (only for bookable = true) |

The following filters are available:

- service\_ids: Array of service IDs. If you need staff members who provide only the selected service
- datetime: date (in iso8601 format). If you need staff members who have sessions for the specified service at the specified time

##### Authorizations:

_bearer_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 4564<br>location ID |

##### query Parameters

|     |     |
| --- | --- |
| service\_ids\[\] | Array of numbers<br>Service ID.<br>Filter by the list of service identifiers |
| datetime | number<br>date in iso8601 format.<br>Filter by service booking date (for example '2005-09-09T18:30') |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token |

### Responses

**200**

OK

get/book\_staff/{company\_id}

https://api.alteg.io/api/v1/book\_staff/{company\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": "16",\
\
"name": "James",\
\
"bookable": true,\
\
"specialization": "Paramedic",\
\
"position": {"id": 1,\
\
"title": "Administrator"\
\
},\
\
"show_rating": "1",\
\
"rating": "3",\
\
"votes_count": "1",\
\
"avatar": "https://app.alteg.io/images/no-master.png",\
\
"comments_count": "0",\
\
"weight": "11",\
\
"information": "<span></span>",\
\
"seance_date": "2025-09-21T23:00:00.000+03:00",\
\
"seances": [ ]\
\
},\
\
{"id": "32",\
\
"name": "Peter",\
\
"bookable": false,\
\
"specialization": "Therapist",\
\
"position": [ ],\
\
"show_rating": "1",\
\
"rating": "4",\
\
"votes_count": "1",\
\
"avatar": "https://app.alteg.io/images/no-master.png",\
\
"comments_count": "0",\
\
"weight": "8",\
\
"information": "<span></span>"\
\
}\
\
],

"meta": [ ]

}`

## [tag/Online-appointment/operation/Get a List of Sessions Available for Booking](https://developer.alteg.io/api\#tag/Online-appointment/operation/Get%20a%20List%20of%20Sessions%20Available%20for%20Booking) Get a List of Sessions Available for Booking

The sessions available for booking object has the following fields:

| Field | Type | Description |
| --- | --- | --- |
| time | string | Session time (17:30 for example) |
| session\_length | number | Session duration in seconds |
| datetime | datetime | Date and time of the session in ISO8601 format (must be passed when creating the appointment) |

The following filters are available:

- service\_ids: Array of service IDs. If you need sessions, when can you book these services

##### Authorizations:

_bearer_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| date<br>required | string<br>date in iso8601 format.<br>Filter by booking date (eg '2015-09-30') |
| staff\_id<br>required | number<br>Example: 0<br>staff member ID. Filter by staff member ID<br>Default: 0 |

##### query Parameters

|     |     |
| --- | --- |
| service\_ids\[\] | string<br>Service ID.<br>Filter by the list of service identifiers |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token |

### Responses

**200**

OK

get/book\_times/{company\_id}/{staff\_id}/{date}

https://api.alteg.io/api/v1/book\_times/{company\_id}/{staff\_id}/{date}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"time": "12:00",\
\
"seance_length": 3600,\
\
"datetime": "2025-09-21T23:00:00.000+03:00"\
\
},\
\
{"time": "13:00",\
\
"seance_length": 3600,\
\
"datetime": "2025-09-21T23:00:00.000+03:00"\
\
},\
\
{"time": "14:00",\
\
"seance_length": 3600,\
\
"datetime": "2025-09-21T23:00:00.000+03:00"\
\
},\
\
{"time": "15:00",\
\
"seance_length": 3600,\
\
"datetime": "2025-09-21T23:00:00.000+03:00"\
\
},\
\
{"time": "16:00",\
\
"seance_length": 3600,\
\
"datetime": "2025-09-21T23:00:00.000+03:00"\
\
}\
\
],

"meta": [ ]

}`

## [tag/User-Appointments](https://developer.alteg.io/api\#tag/User-Appointments) User Appointments

## [tag/User-Appointments/operation/Log in with phone number and code](https://developer.alteg.io/api\#tag/User-Appointments/operation/Log%20in%20with%20phone%20number%20and%20code) Log in with phone number and code

To access both online and offline (e.g., phone-made) appointments, the user must log in by verifying their phone number. This is done by requesting a confirmation code to be sent via SMS using the "SMS phone number verification code" endpoint.

##### Authorizations:

_bearer_

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| login<br>required | string<br>Phone number or Email |
| password<br>required | string<br>Password |

### Responses

**201**

Created

post/user/auth

https://api.alteg.io/api/v1/user/auth

### Request samples

- Payload

Content type

application/json

Copy

`{"login": "testuser@alteg.io",

"password": "testpass"

}`

### Response samples

- 201

Content type

application/json

Copy

`{"user_token": "wec23fh8cDfFV4432fc352456"

}`

## [tag/User-Appointments/operation/Delete User Appointment](https://developer.alteg.io/api\#tag/User-Appointments/operation/Delete%20User%20Appointment) Delete User Appointment

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| record\_id<br>required | number<br>Example: 22123<br>Appointment ID (enough to delete the appointment if the user is authorized) |
| record\_hash<br>required | string<br>Example: 'dawd4fs09rhf0s9fafef0'<br>HASH appointments (required to delete the record if the user is not authorized) |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

delete/user/records/{record\_id}/{record\_hash}

https://api.alteg.io/api/v1/user/records/{record\_id}/{record\_hash}

## [tag/Online-Booking-Users](https://developer.alteg.io/api\#tag/Online-Booking-Users) Online Booking Users

## [tag/Online-Booking-Users/operation/Authorize Online Booking User](https://developer.alteg.io/api\#tag/Online-Booking-Users/operation/Authorize%20Online%20Booking%20User) Authorize Online Booking User

When a user of an online account changes their password, their API key will change and a new authorization will be required

| Attribute | Type | Description |
| --- | --- | --- |
| login | string | The visitor's phone number in the format 380000000000, or their email address. |
| password | string | Visitor password |

##### Authorizations:

_bearer_

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| login<br>required | string<br>Phone number or Email |
| password<br>required | string<br>Password |

### Responses

**201**

Created

post/booking/auth

https://api.alteg.io/api/v1/booking/auth

### Request samples

- Payload

Content type

application/json

Copy

`{"login": "testuser@alteg.io",

"password": "testpass"

}`

### Response samples

- 201

Content type

application/json

Copy

`{"id": 123456,

"user_token": "wec23fh8cDfFV4432fc352456",

"name": "James Smith",

"phone": "+1-315-555-0175",

"login": "j.smith",

"email": "j.smith@example.com",

"avatar": "https://assets.alteg.io/general/0/01/123456789098765_12345678909876.png"

}`

## [tag/Online-Booking-Users/operation/Send SMS verification code for phone number to change data](https://developer.alteg.io/api\#tag/Online-Booking-Users/operation/Send%20SMS%20verification%20code%20for%20phone%20number%20to%20change%20data) Send SMS verification code for phone number to change data

The request must contain one of two parameters: company\_id or group\_id

##### Authorizations:

(_bearer__user_)

##### query Parameters

|     |     |
| --- | --- |
| company\_id<br>required | integer<br>location ID |
| group\_id<br>required | integer<br>Chain ID |
| phone<br>required | string<br>Phone number |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**202**

Accepted

get/booking/user/phone\_confirmation

https://api.alteg.io/api/v1/booking/user/phone\_confirmation

### Response samples

- 202

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"meta": {"message": "Accepted"

}

}`

## [tag/Online-Booking-Users/operation/Online Booking User Password Update](https://developer.alteg.io/api\#tag/Online-Booking-Users/operation/Online%20Booking%20User%20Password%20Update) Online Booking User Password Update

Updating the password of an online booking user.

The response comes with a new user token.

##### Authorizations:

(_bearer__user_)

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| old\_password | string<br>Current Password |
| new\_password | string<br>New password |

### Responses

**200**

OK

put/booking/user/password

https://api.alteg.io/api/v1/booking/user/password

### Request samples

- Payload

Content type

application/json

Copy

`{"old_password": "qwerty123",

"new_password": "example!"

}`

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"user_token": "4de9d8cc108c0"

},

"meta": [ ]

}`

## [tag/Online-Booking-Users/operation/Online Recording User Update](https://developer.alteg.io/api\#tag/Online-Booking-Users/operation/Online%20Recording%20User%20Update) Updating User Data in Online Booking

Updating a specialist’s data in online booking.

When updating a phone number, the confirmation\_code field must be included in the request. This code should be obtained using the [SMS confirmation code of the phone number to change\\
data](https://developer.alteg.io/api#operation/Send%20SMS%20code%20confirmation%20number%20phone%20for%20change%20data)

##### Authorizations:

(_bearer__user_)

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| name | string<br>Name |
| email | string<br>mail |
| phone | string<br>Phone number |
| confirmation\_code | string<br>SMS confirmation code (when changing phone number) |

### Responses

**202**

Accepted

put/booking/user

https://api.alteg.io/api/v1/booking/user

### Request samples

- Payload

Content type

application/json

Copy

`{"name": "James Smith",

"email": "j.smith@example.com",

"phone": "+1-315-555-0175",

"confirmation_code": "1234"

}`

### Response samples

- 202

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"meta": {"message": "Accepted"

}

}`

## [tag/Online-Booking-Users/operation/Retrieving Online Booking User Data](https://developer.alteg.io/api\#tag/Online-Booking-Users/operation/Retrieving%20Online%20Booking%20User%20Data) Retrieving Online Booking User Data

Retrieve online booking user data.

##### Authorizations:

(_bearer__user_)

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/booking/user/data

https://api.alteg.io/api/v1/booking/user/data

### Response samples

- 200

Content type

application/json

Copy

`{"0": "152afb01134237bc844d7e",

"id": 32132133,

"user_token": "152afb01134237bc844d7e",

"name": "James",

"phone": "+1-315-555-0175",

"login": "j.smith",

"email": "j.smith@example.com",

"avatar": "https://api.alteg.io/images/avatar.png"

}`

## [tag/Companies](https://developer.alteg.io/api\#tag/Companies) Companies

## [tag/Companies/operation/Get a list of companies](https://developer.alteg.io/api\#tag/Companies/operation/Get%20a%20list%20of%20companies) Get a list of companies

Get a list of locations with data

##### Authorizations:

_bearer_

##### query Parameters

|     |     |
| --- | --- |
| id | number<br>Example: id=4564<br>Filter by location ID |
| group\_id | number<br>Example: group\_id=83<br>Filter by location chain ID _Default: 83_ |
| my | number<br>Example: my=1<br>For authorized user only. If you need locations that the user has rights to manage |
| active | number<br>Example: active=1<br>If you need to get only locations with an active license and an available appointment |
| moderated | number<br>Example: moderated=1<br>If you need to get only moderated locations, whose content is checked for publication |
| forBooking | number<br>Example: forBooking=1<br>Include date and time of the next free session in the location (ISO8601) |
| show\_groups | number<br>Example: show\_groups=1<br>Include in the location object a list of chains that this location belongs to |
| city\_id | number<br>Example: city\_id=2<br>Filter by city ID ( [cities getting method](https://developer.alteg.io/api#cities)) |
| showBookforms | number<br>Example: showBookforms=1<br>Include in the location object a list of location online booking forms |
| min\_id | number<br>Example: min\_id=1000<br>Filter by minimum location ID |
| show\_deleted | number<br>Example: show\_deleted=1<br>Include deleted locations |
| hide\_record\_type\_single | number<br>Example: hide\_record\_type\_single=1<br>Hide locations with individual appointment |
| hide\_record\_type\_activity | number<br>Example: hide\_record\_type\_activity=1<br>Hide locations with group appointment |
| hide\_record\_type\_mixed | number<br>Example: hide\_record\_type\_mixed=1<br>Hide locations with mixed appointment |
| business\_group\_id | number<br>Example: business\_group\_id=1<br>Filter by business group ID |
| business\_type\_id | number<br>Example: business\_type\_id=1<br>Filter by business type ID |
| include | Array of strings<br>Items Enum:"staff""positions""accounts""storages""expenses"<br>Example: include=staff&include=positions<br>Include additional data in the location object |
| count | number<br>Number of locations per page |
| page | number<br>Page number |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Must be `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Must be `application/json` |
| Authorization<br>required | string<br>Bearer partner\_token |

### Responses

**200**

OK

**401**

Unauthorized

get/companies

https://api.alteg.io/api/v1/companies

### Response samples

- 200
- 401

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": "1050",\
\
"title": "La Visage",\
\
"short_descr": "Beauty saloon",\
\
"logo": "https://app.alteg.io/images/no-master.png",\
\
"active": "1",\
\
"phone": "+1-315-555-0175",\
\
"country_id": 7,\
\
"schedule": "",\
\
"country": "United States",\
\
"city_id": 181,\
\
"city": "New York",\
\
"timezone_name": "America/New_York",\
\
"address": "New York, 787 Jackson Drive",\
\
"coordinate_lat": "40.730610",\
\
"coordinate_lon": "-73.935242",\
\
"phone_confirmation": true,\
\
"active_staff_count": 2,\
\
"next_slot": "2023-03-23T10:10:00+0300",\
\
"app_ios": "",\
\
"app_android": "",\
\
"currency_short_title": "R",\
\
"group_priority": 900\
\
},\
\
{"id": "1051",\
\
"title": "La Visage 2",\
\
"short_descr": "Beauty saloon",\
\
"logo": "https://app.alteg.io/images/no-master.png",\
\
"active": "1",\
\
"phone": "+1-315-555-0175",\
\
"country_id": 7,\
\
"country": "United States",\
\
"city_id": 181,\
\
"city": "New York",\
\
"timezone_name": "America/New_York",\
\
"address": "New York, 787 Jackson Drive",\
\
"coordinate_lat": "40.730610",\
\
"coordinate_lon": "-73.935242",\
\
"phone_confirmation": false,\
\
"active_staff_count": 3,\
\
"next_slot": "2023-03-23T10:10:00+0300",\
\
"app_ios": "",\
\
"app_android": "",\
\
"currency_short_title": "R",\
\
"group_priority": 901\
\
}\
\
],

"meta": { }

}`

## [tag/Companies/operation/Create a company](https://developer.alteg.io/api\#tag/Companies/operation/Create%20a%20company) Create a company

Create new location

##### Authorizations:

(_bearer__user_)

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Must be `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Must be `application/json` |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| title | string<br>location name |
| country\_id | number<br>ID of the country in which the location is located ( [method to get a list of countries](https://developer.alteg.io/api#countries)) |
| city\_id | number<br>Identifier of the city in which the location is located ( [method to get a list of cities](https://developer.alteg.io/api#cities)) |
| address | string<br>location address |
| site | string<br>location website |
| coordinate\_lat | number <float> <br>Latitude |
| coordinate\_lot | number <float> <br>Longitude |
| business\_type\_id | number<br>Business type |
| short\_descr | string<br>location category |

### Responses

**201**

Created

**401**

Unauthorized

**404**

Not Found

post/companies

https://api.alteg.io/api/v1/companies

### Request samples

- Payload

Content type

application/json

Copy

`{"title": "James Smith LLC",

"country_id": 1,

"city_id": 2,

"address": "New York, 787 Jackson Drive",

"site": "james-smith-company.com",

"coordinate_lat": "40.730610",

"coordinate_lot": "-73.935242",

"business_type_id": 1,

"short_descr": "Beauty studio"

}`

### Response samples

- 201
- 401
- 404

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": "1050",

"title": "James Smith LLC",

"short_descr": "Beauty studio",

"logo": "https://app.alteg.io/images/no-master.png",

"active": "1",

"phone": "+1-315-555-0175",

"country_id": 7,

"schedule": "",

"country": "United States",

"city_id": 181,

"city": "New York",

"timezone_name": "America/New_York",

"address": "New York, 787 Jackson Drive",

"coordinate_lat": "40.730610",

"coordinate_lon": "-73.935242",

"phone_confirmation": true,

"active_staff_count": 2,

"app_ios": "",

"app_android": "",

"currency_short_title": "R"

},

"meta": { }

}`

## [tag/Companies/operation/Get company](https://developer.alteg.io/api\#tag/Companies/operation/Get%20company) Get company

Getting information about the location.

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | number<br>Example: 37532<br>The ID of the location to get information about. |

##### query Parameters

|     |     |
| --- | --- |
| my | number<br>Example: my=1<br>For authorized user only. If you need additional data for the location that the user has rights to manage |
| forBooking | number<br>Example: forBooking=1<br>Date and time of the next free session in the location (ISO8601). |
| show\_groups | number<br>Example: show\_groups=1<br>Include in the location object a list of chains that this location belongs to |
| showBookforms | number<br>Example: showBookforms=1<br>Show location online booking forms (widgets) |
| bookform\_id | number<br>Example: bookform\_id=19203<br>Show url of online booking form with specified ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Must be `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Must be `application/json` |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

**401**

Unauthorized

**404**

Not Found

get/company/{id}/

https://api.alteg.io/api/v1/company/{id}/

### Response samples

- 200
- 401
- 404

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 37532,

"title": "James Smith LLC",

"country_id": 7,

"country": "United States",

"city_id": 181,

"city": "New York",

"timezone_name": "America/New_York",

"address": "New York, 787 Jackson Drive",

"zip": 11435,

"coordinate_lat": "40.730610",

"coordinate_lon": "-73.935242",

"short_descr": "Beauty studio",

"social": {"facebook": "",

"instagram": "instagram.com/james_smith_company/",

"telegram": "",

"whatsapp": "",

"viber": ""

},

"site": "james-smith-company.com",

"business_type_id": 1,

"description": "The <strong>James Smith</strong> location",

"phone_confirmation": true,

"active_staff_count": 2,

"next_slot": "2023-03-23T10:10:00+0300",

"group_priority": 900,

"push_notification_phone_confirm": 1,

"main_group_id": 9206,

"main_group": {"id": 9206,

"title": "James Smith LLC main location chain"

},

"groups": {"9206": {"id": 9206,

"title": "James Smith LLC main location chain"

},

"9207": {"id": 9207,

"title": "James Smith LLC extra location chain"

}

},

"bookforms": [{"id": 19203,\
\
"title": "James Smith LLC location appointment form",\
\
"is_default": 0,\
\
"url": "https://n19203.alteg.io/"\
\
}\
\
],

"online_sales_form_url": "https://o1.alteg.io",

"access": { }

},

"meta": { }

}`

## [tag/Companies/operation/Change Company](https://developer.alteg.io/api\#tag/Companies/operation/Change%20Company) Change Company

Change location data

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | number<br>Example: 37532<br>location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Must be `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Must be `application/json` |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| title | string<br>location name |
| country\_id | number<br>Country ID (has higher priority then country) |
| country | string<br>Country |
| city\_id | number<br>City ID (has higher priority then city) |
| city | string<br>City |
| address | string<br>location address |
| zip | string<br>Zip code |
| phones | Array of strings<br>location phone numbers |
| social | object<br>location social media |
| site | string<br>location website |
| coordinate\_lat | number <float> <br>Latitude |
| coordinate\_lon | number <float> <br>Longitude |
| description | string <html> <br>Description |
| business\_type\_id | number <int32> <br>Business type |
| short\_descr | string<br>Business category |

### Responses

**200**

OK

**401**

Unauthorized

**404**

Not Found

put/company/{id}/

https://api.alteg.io/api/v1/company/{id}/

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"title": "James Smith LLC",

"country": "United States",

"city": "New York",

"address": "New York, 787 Jackson Drive",

"zip": 11435,

"phones": ["12125357710",\
\
"12125357711"\
\
],

"social": {"instagram": "instagram.com/james_smith_company/"

},

"site": "james-smith-company.com",

"coordinate_lat": "40.730610",

"coordinate_lon": "-73.935242",

"description": "The <strong>James Smith</strong> location",

"business_type_id": 1,

"short_descr": "Beauty studio"

}`

### Response samples

- 200
- 401
- 404

Content type

application/json

Copy
Expand all  Collapse all

`{"id": 37532,

"title": "James Smith LLC",

"country_id": 7,

"country": "United States",

"city_id": 181,

"city": "New York",

"timezone_name": "Europe/Moscow",

"address": "New York, 787 Jackson Drive",

"zip": 11435,

"coordinate_lat": "40.730610",

"coordinate_lon": "-73.935242",

"short_descr": "Beauty studio",

"social": {"facebook": "",

"instagram": "instagram.com/james_smith_company/",

"telegram": "",

"whatsapp": "",

"viber": ""

},

"site": "james-smith-company.com",

"business_type_id": 1,

"description": "The <strong>James Smith</strong> location",

"phone_confirmation": true,

"group_priority": 900,

"push_notification_phone_confirm": 1,

"access": { }

}`

## [tag/Companies/operation/Delete company](https://developer.alteg.io/api\#tag/Companies/operation/Delete%20company) Delete company

Delete a location.

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | number<br>Example: 37532<br>location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Must be `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Must be `application/json` |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**202**

Accepted

**401**

Unauthorized

**404**

Not Found

delete/company/{id}/

https://api.alteg.io/api/v1/company/{id}/

### Response samples

- 401
- 404

Content type

application/json

Copy
Expand all  Collapse all

`{"errors": {"code": 401,

"message": "Authentication needed"

},

"meta": {"message": "Authentication needed."

}

}`

## [tag/Service-category](https://developer.alteg.io/api\#tag/Service-category) Service category

## [tag/Service-category/operation/Create a service category](https://developer.alteg.io/api\#tag/Service-category/operation/Create%20a%20service%20category) Create a service category

##### Authorizations:

(_bearer__user_)

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| title | string<br>Service category name |
| api\_id | string<br>External Category ID |
| weight | number<br>Category weight (used to sort categories when displayed) |
| staff | Array of numbers<br>List of IDs of staff members providing services from the category |

### Responses

**201**

Created

post/service\_categories/{company\_id}

https://api.alteg.io/api/v1/service\_categories/{company\_id}

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"title": "Haircut very feminine",

"api_id": "adw322",

"weight": 111,

"staff": [5006,\
\
8901\
\
]

}`

### Response samples

- 201

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 3,

"title": "Haircut very feminine",

"api_id": "adw322",

"weight": 111,

"staff": [5006,\
\
8901\
\
]

},

"meta": [ ]

}`

## [tag/Service-category/operation/Get service category](https://developer.alteg.io/api\#tag/Service-category/operation/Get%20service%20category) Get service category

##### Authorizations:

_bearer_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| id<br>required | number<br>Service Category ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token |

### Responses

**200**

OK

get/service\_category/{company\_id}/{id}

https://api.alteg.io/api/v1/service\_category/{company\_id}/{id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 3,

"salon_service_id": 15,

"title": "Haircuts for women",

"weight": 12,

"staff": [5006,\
\
8901\
\
]

},

"meta": [ ]

}`

## [tag/Service-category/operation/Change service category](https://developer.alteg.io/api\#tag/Service-category/operation/Change%20service%20category) Change service category

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| id<br>required | number<br>Service Category ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| title | string<br>Service category name |
| api\_id | string<br>External Category ID |
| weight | number<br>Category weight (used to sort categories when displayed) |
| staff | Array of numbers<br>List of IDs of staff members providing services from the category |

### Responses

**200**

OK

put/service\_category/{company\_id}/{id}

https://api.alteg.io/api/v1/service\_category/{company\_id}/{id}

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"title": "Haircut very feminine",

"api_id": "adw322",

"weight": 111,

"staff": [5006,\
\
8901\
\
]

}`

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 3,

"salon_service_id": 15,

"title": "Haircuts for women",

"weight": 15,

"staff": [5006,\
\
8901\
\
]

},

"meta": [ ]

}`

## [tag/Service-category/operation/Delete service category](https://developer.alteg.io/api\#tag/Service-category/operation/Delete%20service%20category) Delete service category

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| id<br>required | number<br>Service Category ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Conetnt-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**204**

No Content

delete/service\_category/{company\_id}/{id}

https://api.alteg.io/api/v1/service\_category/{company\_id}/{id}

## [tag/Service-category/paths/~1chain~1{chain_id}~1service_categories/get](https://developer.alteg.io/api\#tag/Service-category/paths/~1chain~1{chain_id}~1service_categories/get) Get a list of chain service categories

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| chain\_id<br>required | integer<br>Chain ID |

##### query Parameters

|     |     |
| --- | --- |
| include | string<br>Value:"services"<br>Include additional resources in response |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/chain/{chain\_id}/service\_categories

https://api.alteg.io/api/v1/chain/{chain\_id}/service\_categories

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`[{"id": 41,\
\
"title": "Service category",\
\
"services": [{"id": 52,\
\
"title": "Service 1"\
\
},\
\
{"id": 45,\
\
"title": "Service 2"\
\
}\
\
]\
\
}\
\
]`

## [tag/Service-category/operation/Get a list of service categories](https://developer.alteg.io/api\#tag/Service-category/operation/Get%20a%20list%20of%20service%20categories) Get a list of service categories

- Options
  - company\_id (required, number) - company ID
  - id (optional, number) - service category ID (to work with a specific category)
  - staff\_id (optional, number) - staff member ID (to get categories associated with a staff member)

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| id<br>required | number<br>Service Category ID |

##### query Parameters

|     |     |
| --- | --- |
| staff\_id | number<br>staff member ID (to get categories associated with a staff member) |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

**403**

Forbidden

**404**

Not Found

get/company/{company\_id}/service\_categories/{id}

https://api.alteg.io/api/v1/company/{company\_id}/service\_categories/{id}

### Response samples

- 200
- 403
- 404

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 345,\
\
"salon_service_id": 353,\
\
"title": "Haircuts for men",\
\
"api_id": "adw322",\
\
"weight": 10,\
\
"staff": [5006,\
\
8901,\
\
26514,\
\
26516,\
\
26519,\
\
26520\
\
]\
\
},\
\
{"id": 3456,\
\
"salon_service_id": 3252,\
\
"title": "Haircuts for women",\
\
"api_id": "adw323",\
\
"weight": 9,\
\
"staff": [5006,\
\
8901\
\
]\
\
}\
\
],

"meta": {"total_count": 2

}

}`

## [tag/Service-category/operation/Deprecated. Get a list of service categories](https://developer.alteg.io/api\#tag/Service-category/operation/Deprecated.%20Get%20a%20list%20of%20service%20categories) Deprecated. Get a list of service categories  Deprecated

Get a list of service categories

##### Authorizations:

_bearer_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| id<br>required | number<br>Service category identifier |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token |

### Responses

**200**

OK

get/service\_categories/{company\_id}/{id}

https://api.alteg.io/api/v1/service\_categories/{company\_id}/{id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 345,\
\
"title": "Haircuts for men",\
\
"api_id": "adw322",\
\
"weight": 10,\
\
"staff": [5006,\
\
8901,\
\
26514,\
\
26516,\
\
26519,\
\
26520\
\
]\
\
},\
\
{"id": 3456,\
\
"title": "Haircuts for women",\
\
"api_id": "adw323",\
\
"weight": 9,\
\
"staff": [5006,\
\
8901\
\
]\
\
}\
\
],

"meta": [ ]

}`

## [tag/Services](https://developer.alteg.io/api\#tag/Services) Services

## [tag/Services/operation/Create a service](https://developer.alteg.io/api\#tag/Services/operation/Create%20a%20service) Create a service

Method to create a service

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorizarion<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| title | string<br>Service name |
| category\_id | number<br>Service Category ID |
| price\_min | number <float> <br>The minimum cost of the service |
| price\_max | number <float> <br>Maximum cost of the service |
| duration | number <float> <br>Service duration, default is 3600 seconds |
| discount | number <float> <br>Service discount |
| comment | string<br>Comment on the service |
| weight | number<br>Service weight (used to sort services when displayed) |
| active | number<br>Is the service available for online booking? 1 - available, 0 not available. |
| api\_id | string<br>External Service ID |
| staff | Array of objects<br>staff members who provide the service, along with the duration of the service for each staff member |

### Responses

**201**

Created

post/services/{company\_id}

https://api.alteg.io/api/v1/services/{company\_id}

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"title": "Men's haircut",

"category_id": 83167,

"price_min": 1300,

"price_max": 1300,

"duration": 3600,

"discount": 0,

"comment": "",

"weight": 6,

"active": 1,

"api_id": "00000000042",

"staff": [{"id": 5905,\
\
"seance_length": 2700\
\
},\
\
{"id": 5907,\
\
"seance_length": 3600\
\
},\
\
{"id": 8973,\
\
"seance_length": 3600\
\
},\
\
{"id": 13616,\
\
"seance_length": 3600\
\
},\
\
{"id": 16681,\
\
"seance_length": 3600\
\
},\
\
{"id": 1796,\
\
"seance_length": 3600\
\
},\
\
{"id": 34006,\
\
"seance_length": 3600\
\
}\
\
]

}`

### Response samples

- 201

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 83169,

"title": "Men's haircut",

"category_id": 83167,

"price_min": 1300,

"price_max": 1300,

"duration": 3600,

"discount": 0,

"comment": "",

"weight": 6,

"active": 1,

"api_id": "00000000042",

"staff": [{"id": 5905,\
\
"seance_length": 2700\
\
},\
\
{"id": 5907,\
\
"seance_length": 3600\
\
},\
\
{"id": 8973,\
\
"seance_length": 3600\
\
},\
\
{"id": 13616,\
\
"seance_length": 3600\
\
},\
\
{"id": 16681,\
\
"seance_length": 3600\
\
},\
\
{"id": 1796,\
\
"seance_length": 3600\
\
},\
\
{"id": 34006,\
\
"seance_length": 3600\
\
}\
\
]

},

"meta": [ ]

}`

## [tag/Services/operation/Get a list of services / specific service](https://developer.alteg.io/api\#tag/Services/operation/Get%20a%20list%20of%20services%20/%20specific%20service) Get a list of services / specific service

- Parameter
  - company\_id (required, number, `1`) \- company ID
  - service\_id (optional, number, `1`) \- service ID

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| service\_id<br>required | number<br>Service ID, if you need to work with a specific service. |

##### query Parameters

|     |     |
| --- | --- |
| staff\_id | number<br>staff member ID, if you want to filter by staff member |
| category\_id | number<br>Category ID, if you want to filter by category |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

**403**

Forbidden

**404**

Not Found

get/company/{company\_id}/services/{service\_id}

https://api.alteg.io/api/v1/company/{company\_id}/services/{service\_id}

### Response samples

- 200
- 403
- 404

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": "79067",\
\
"title": "shaving head",\
\
"category_id": "4",\
\
"price_min": "1000.00",\
\
"price_max": "1000.00",\
\
"discount": "0",\
\
"comment": "",\
\
"weight": "2",\
\
"active": "1",\
\
"api_id": "",\
\
"staff": [ ]\
\
},\
\
{"id": "83169",\
\
"title": "Men's haircut",\
\
"category_id": "83167",\
\
"price_min": "1300.00",\
\
"price_max": "1300.00",\
\
"discount": "0",\
\
"comment": "",\
\
"weight": "6",\
\
"active": "1",\
\
"api_id": "00000000042",\
\
"staff": [{"id": "5905",\
\
"seance_length": "2700"\
\
},\
\
{"id": "5907",\
\
"seance_length": "3600"\
\
},\
\
{"id": "8973",\
\
"seance_length": "3600"\
\
},\
\
{"id": "13616",\
\
"seance_length": "3600"\
\
},\
\
{"id": "16681",\
\
"seance_length": "3600"\
\
},\
\
{"id": "17969",\
\
"seance_length": "3600"\
\
},\
\
{"id": "34006",\
\
"seance_length": "3600"\
\
}\
\
],\
\
"image_group": {"id": 72234,\
\
"entity": "settings_service",\
\
"entity_id": 389927,\
\
"images": {"basic": {"id": "186791",\
\
"path": "https://app.alteg.io/path/to/image/tagret-image.jpeg",\
\
"width": "372",\
\
"height": "280",\
\
"type": "jpeg",\
\
"image_group_id": 72234,\
\
"version": "basic"\
\
}\
\
}\
\
}\
\
}\
\
],

"meta": {"total_count": 2

}

}`

## [tag/Services/operation/Change service](https://developer.alteg.io/api\#tag/Services/operation/Change%20service) Change service

Method to change the service

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| service\_id<br>required | number<br>Service ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| title<br>required | string<br>Service name |
| booking\_title<br>required | string<br>Service name for appointment |
| category\_id<br>required | number<br>ID service category |
| price\_min<br>required | number <float> <br>Minimum cost of the service |
| price\_max<br>required | number <float> <br>Maximum cost of the service |
| duration<br>required | number<br>Service duration, default value is 3600 |
| discount | number <float> <br>Service discount |
| comment | string<br>Comment on the service |
| is\_multi<br>required | boolean<br>false - Appointment, true - Event |
| tax\_variant<br>required | number<br>Bill ID |
| vat\_id<br>required | number<br>VAT ID |
| is\_need\_limit\_date<br>required | boolean<br>The service is available for a limited time |
| seance\_search\_start<br>required | number<br>Start of period is the appointment available, in seconds |
| seance\_search\_finish<br>required | number<br>End of period is the appointment available, in seconds |
| step<br>required | number<br>Display interval of slots, in seconds |
| seance\_search\_step<br>required | number<br>Search interval of slots, in seconds |
| weight | number<br>Service weight (used to sort services when displayed) |
| active | number<br>1 - available for online recording, 0 - not available |
| api\_id | string<br>External Service ID |
| staff | Array of objects<br>List of staff members providing the service and session duration |

### Responses

**200**

OK

patch/services/{company\_id}/services/{service\_id}

https://api.alteg.io/api/v1/services/{company\_id}/services/{service\_id}

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"title": "Men's haircut",

"booking_title": "Men's haircut",

"category_id": 83167,

"price_min": 1300,

"price_max": 1300,

"duration": 3600,

"discount": 0,

"tax_variant": 1,

"vat_id": 3,

"is_multi": false,

"is_need_limit_date": true,

"date_from": "2022-09-19",

"date_to": "2022-09-30",

"seance_search_start": 36000,

"seance_search_finish": 84600,

"step": 300,

"seance_search_step": 900,

"comment": "",

"weight": 6,

"active": 1,

"api_id": "00000000042",

"staff": [{"id": 5905,\
\
"seance_length": 2700\
\
},\
\
{"id": 5907,\
\
"seance_length": 3600\
\
},\
\
{"id": 8973,\
\
"seance_length": 3600\
\
},\
\
{"id": 13616,\
\
"seance_length": 3600\
\
},\
\
{"id": 16681,\
\
"seance_length": 3600\
\
},\
\
{"id": 1796,\
\
"seance_length": 3600\
\
},\
\
{"id": 34006,\
\
"seance_length": 3600\
\
}\
\
]

}`

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"booking_title": "Men's haircut",

"tax_variant": 0,

"vat_id": 2,

"print_title": "Men's haircut",

"service_type": 1,

"api_service_id": 0,

"repeat_visit_days_step": "null",

"seance_search_start": 1800,

"seance_search_finish": 84600,

"seance_search_step": 900,

"step": 300,

"is_need_limit_date": "true",

"date_from": "2022-09-19",

"date_to": "2022-09-30",

"schedule_template_type": 2,

"online_invoicing_status": 0,

"is_abonement_autopayment_enabled": 0,

"autopayment_before_visit_time": 0,

"abonement_restriction_value": 0,

"is_chain": "false",

"is_price_managed_only_in_chain": "false",

"is_comment_managed_only_in_chain": "false",

"price_prepaid_amount": 0,

"price_prepaid_percent": 100,

"id": 10832934,

"salon_service_id": 12192004,

"title": "Men's haircut",

"category_id": 10832928,

"price_min": 250,

"price_max": 1200,

"discount": 0,

"comment": "",

"weight": 0,

"active": 1,

"api_id": "0",

"prepaid": "forbidden",

"is_multi": "false",

"capacity": 0,

"image_group": [ ],

"staff": [{"id": 5905,\
\
"seance_length": 2700,\
\
"technological_card_id": 0\
\
},\
\
{"id": 5907,\
\
"seance_length": 3600,\
\
"technological_card_id": 0\
\
}\
\
],

"dates": ["2022-09-19",\
\
"2022-09-20",\
\
"2022-09-21",\
\
"2022-09-22",\
\
"2022-09-23",\
\
"2022-09-24",\
\
"2022-09-25",\
\
"2022-09-26",\
\
"2022-09-27",\
\
"2022-09-28",\
\
"2022-09-29",\
\
"2022-09-30"\
\
],

"duration": 3600,

"resources": [ ],

"is_online": true

},

"meta": [ ]

}`

## [tag/Services/operation/Deprecated. Get a list of services / specific service](https://developer.alteg.io/api\#tag/Services/operation/Deprecated.%20Get%20a%20list%20of%20services%20/%20specific%20service) Deprecated. Get a list of services / specific service  Deprecated

##### Authorizations:

_bearer_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| service\_id<br>required | number<br>Service ID, if you need to work with a specific service. |

##### query Parameters

|     |     |
| --- | --- |
| staff\_id | number<br>staff member ID, if you want to filter by staff member |
| category\_id | number<br>Category ID, if you want to filter by category |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token |

### Responses

**200**

OK

get/services/{company\_id}/{service\_id}

https://api.alteg.io/api/v1/services/{company\_id}/{service\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": "79067",\
\
"title": "shaving head",\
\
"category_id": "4",\
\
"price_min": "1000.00",\
\
"price_max": "1000.00",\
\
"duration": "3600",\
\
"discount": "0",\
\
"comment": "",\
\
"weight": "2",\
\
"active": "1",\
\
"api_id": "",\
\
"staff": [ ]\
\
},\
\
{"id": "83169",\
\
"title": "Men's haircut",\
\
"category_id": "83167",\
\
"price_min": "1300.00",\
\
"price_max": "1300.00",\
\
"duration": "3600",\
\
"discount": "0",\
\
"comment": "",\
\
"weight": "6",\
\
"active": "1",\
\
"api_id": "00000000042",\
\
"staff": [{"id": "5905",\
\
"seance_length": "2700"\
\
},\
\
{"id": "5907",\
\
"seance_length": "3600"\
\
},\
\
{"id": "8973",\
\
"seance_length": "3600"\
\
},\
\
{"id": "13616",\
\
"seance_length": "3600"\
\
},\
\
{"id": "16681",\
\
"seance_length": "3600"\
\
},\
\
{"id": "17969",\
\
"seance_length": "3600"\
\
},\
\
{"id": "34006",\
\
"seance_length": "3600"\
\
}\
\
],\
\
"image_group": {"id": 72234,\
\
"entity": "settings_service",\
\
"entity_id": 389927,\
\
"images": {"basic": {"id": "186791",\
\
"path": "https://app.alteg.io/path/to/image/tagret-image.jpeg",\
\
"width": "372",\
\
"height": "280",\
\
"type": "jpeg",\
\
"image_group_id": 72234,\
\
"version": "basic"\
\
}\
\
}\
\
}\
\
}\
\
],

"meta": [ ]

}`

## [tag/Services/operation/Deprecated. Change Service](https://developer.alteg.io/api\#tag/Services/operation/Deprecated.%20Change%20Service) Deprecated. Change Service  Deprecated

Deprecated. Method to change the service

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| service\_id<br>required | number<br>Service ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| title | string<br>Service name |
| category\_id | number<br>Service Category ID |
| price\_min | number <float> <br>The minimum cost of the service |
| price\_max | number <float> <br>Maximum cost of the service |
| duration | number <float> <br>Service duration, default is 3600 seconds |
| discount | number <float> <br>Service discount |
| comment | string<br>Comment on the service |
| weight | number<br>Service weight (used to sort services when displayed) |
| active | number<br>Is the service available for online booking? 1 - available, 0 not available. |
| api\_id | string<br>External Service ID |
| staff | Array of objects<br>staff members who provide the service, along with the duration of the service for each staff member |

### Responses

**201**

Created

put/services/{company\_id}/{service\_id}

https://api.alteg.io/api/v1/services/{company\_id}/{service\_id}

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"title": "Men's haircut",

"category_id": 83167,

"price_min": 1300,

"price_max": 1300,

"duration": 3600,

"discount": 0,

"comment": "",

"weight": 6,

"active": 1,

"api_id": "00000000042",

"staff": [{"id": 5905,\
\
"seance_length": 2700\
\
},\
\
{"id": 5907,\
\
"seance_length": 3600\
\
},\
\
{"id": 8973,\
\
"seance_length": 3600\
\
},\
\
{"id": 13616,\
\
"seance_length": 3600\
\
},\
\
{"id": 16681,\
\
"seance_length": 3600\
\
},\
\
{"id": 1796,\
\
"seance_length": 3600\
\
},\
\
{"id": 34006,\
\
"seance_length": 3600\
\
}\
\
]

}`

### Response samples

- 201

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 83169,

"title": "Men's haircut",

"category_id": 83167,

"price_min": 1300,

"price_max": 1300,

"duration": 3600,

"discount": 0,

"comment": "",

"weight": 6,

"active": 1,

"api_id": "00000000042",

"staff": [{"id": 5905,\
\
"seance_length": 2700\
\
},\
\
{"id": 5907,\
\
"seance_length": 3600\
\
},\
\
{"id": 8973,\
\
"seance_length": 3600\
\
},\
\
{"id": 13616,\
\
"seance_length": 3600\
\
},\
\
{"id": 16681,\
\
"seance_length": 3600\
\
},\
\
{"id": 1796,\
\
"seance_length": 3600\
\
},\
\
{"id": 34006,\
\
"seance_length": 3600\
\
}\
\
]

},

"meta": [ ]

}`

## [tag/Services/operation/Delete a service](https://developer.alteg.io/api\#tag/Services/operation/Delete%20a%20service) Delete a service

Method to remove a service

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| service\_id<br>required | number<br>Service ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**204**

No Content

delete/services/{company\_id}/{service\_id}

https://api.alteg.io/api/v1/services/{company\_id}/{service\_id}

## [tag/Services/operation/api.location.services.staff.create](https://developer.alteg.io/api\#tag/Services/operation/api.location.services.staff.create) Linking an Employee to a Provided Service

Creates an employee service link with provided duration and bill of materials.

##### Authorizations:

_BearerPartnerUser_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |
| service\_id<br>required | number<br>Example: 123<br>ID of service. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

##### Request Body schema: application/json

|     |     |
| --- | --- |
| master\_id<br>required | number<br>ID of a staff member who provides the service. |
| seance\_length<br>required | number<br>Duration of service provision by the specified employee in seconds,<br>minimum 300 seconds (5 minutes), maximum 86100 seconds (23 hours 55 minutes). |
| technological\_card\_id<br>required | number or null<br>ID of bill of materials used while providing the service. |

### Responses

**201**

Created

**401**

Unauthorized

**403**

Forbidden

**404**

Not Found

**422**

Unprocessable Entity

post/company/{company\_id}/services/{service\_id}/staff

https://api.alteg.io/api/v1/company/{company\_id}/services/{service\_id}/staff

### Request samples

- Payload

Content type

application/json

Copy

`{"master_id": 123,

"seance_length": 3600,

"technological_card_id": 123

}`

### Response samples

- 201
- 401
- 403
- 404
- 422

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"service_id": 123,

"master_id": 123,

"length": 3600,

"technological_card_id": 123

},

"meta": { }

}`

## [tag/Services/operation/api.location.services.staff.update](https://developer.alteg.io/api\#tag/Services/operation/api.location.services.staff.update) Updating Employee Service Link Settings

Updates an employee service link with provided duration and bill of materials.

##### Authorizations:

_BearerPartnerUser_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |
| service\_id<br>required | number<br>Example: 123<br>ID of service. |
| master\_id<br>required | number<br>Example: 123<br>ID of staff. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

##### Request Body schema: application/json

|     |     |
| --- | --- |
| seance\_length<br>required | number<br>Duration of service provision by the specified employee in seconds,<br>minimum 300 seconds (5 minutes), maximum 86100 seconds (23 hours 55 minutes). |
| technological\_card\_id<br>required | number or null<br>ID of bill of materials used while providing the service. |

### Responses

**200**

OK

**401**

Unauthorized

**403**

Forbidden

**404**

Not Found

**422**

Unprocessable Entity

put/company/{company\_id}/services/{service\_id}/staff/{master\_id}

https://api.alteg.io/api/v1/company/{company\_id}/services/{service\_id}/staff/{master\_id}

### Request samples

- Payload

Content type

application/json

Copy

`{"seance_length": 3600,

"technological_card_id": 123

}`

### Response samples

- 200
- 401
- 403
- 404
- 422

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"service_id": 123,

"master_id": 123,

"length": 3600,

"technological_card_id": 123

},

"meta": { }

}`

## [tag/Services/operation/api.location.services.staff.delete](https://developer.alteg.io/api\#tag/Services/operation/api.location.services.staff.delete) Deleting an Employee Service Link

Deletes an employee service link.

##### Authorizations:

_BearerPartnerUser_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |
| service\_id<br>required | number<br>Example: 123<br>ID of service. |
| master\_id<br>required | number<br>Example: 123<br>ID of staff. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

### Responses

**204**

No Content

**401**

Unauthorized

**403**

Forbidden

**404**

Not Found

delete/company/{company\_id}/services/{service\_id}/staff/{master\_id}

https://api.alteg.io/api/v1/company/{company\_id}/services/{service\_id}/staff/{master\_id}

### Response samples

- 204
- 401
- 403
- 404

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": null,

"meta": { }

}`

## [tag/User](https://developer.alteg.io/api\#tag/User) User

## [tag/User/operation/Get a list of rights](https://developer.alteg.io/api\#tag/User/operation/Get%20a%20list%20of%20rights) Get a list of rights

- Parameter
  - company\_id (required, number, `1`) \- company ID

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/user/permissions/{company\_id}

https://api.alteg.io/api/v1/user/permissions/{company\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"timetable": {"timetable_access": true,

"master_id": 1000238,

"position_id": 0,

"last_days_count": 1000,

"schedule_edit_access": true,

"timetable_phones_access": true,

"timetable_transferring_record_access": true,

"timetable_statistics_access": true

},

"record_form": {"record_form_access": true,

"record_form_client_access": true,

"records_autocomplete_access": true,

"create_records_access": true,

"edit_records_access": true,

"edit_records_attendance_access": true,

"records_services_cost_access": true,

"records_services_discount_access": true,

"record_edit_full_paid_access": true,

"delete_records_access": true,

"delete_customer_came_records_access": true,

"delete_paid_records_access": true,

"records_goods_access": true,

"records_goods_create_transaction_access": true,

"records_goods_create_last_days_count": -1,

"records_goods_edit_transaction_access": true,

"records_goods_edit_last_days_count": -1,

"records_goods_cost_access": true,

"records_goods_discount_access": true,

"records_finances_access": true,

"records_finances_last_days_count": -1,

"records_finances_pay_from_deposits_access": true,

"records_group_id_access": true,

"records_group_id": 134178

},

"finances": {"finances_access": true,

"finances_accounts_ids": [ ],

"finances_transactions_access": true,

"finances_last_days_count": -1,

"finances_create_transactions_access": true,

"finances_create_last_days_count": -1,

"finances_edit_transactions_access": true,

"finances_edit_last_days_count": -1,

"finances_delete_transactions_access": true,

"finances_transactions_excel_access": true,

"finances_expenses_ids": [ ],

"finances_accounts_access": true,

"finances_accounts_banalce_access": true,

"finances_suppliers_read_access": true,

"finances_suppliers_create_access": true,

"finances_suppliers_update_access": true,

"finances_suppliers_delete_access": true,

"finances_suppliers_excel_access": true,

"finances_expenses_read_access": true,

"expenses_read_access": true,

"finances_expenses_create_access": true,

"expenses_create_access": true,

"finances_expenses_update_access": true,

"expenses_update_access": true,

"finances_expenses_delete_access": true,

"expenses_delete_access": true,

"finances_kkm_transactions_access": true,

"kkm_transactions_accounts_access": true,

"finances_kkm_settings_read_access": true,

"kkm_settings_reed_access": true,

"finances_kkm_settings_update_access": true,

"kkm_settings_update_access": true,

"finances_settings_invoicing_read_access": true,

"settings_invoicing_read_access": true,

"finances_settings_invoicing_update_access": true,

"settings_invoicing_update_access": true,

"finances_options_read_access": true,

"options_read_access": true,

"finances_options_update_access": true,

"options_update_access": true,

"finances_salary_schemes_access": true,

"finances_salary_calc_access": true,

"finances_salary_not_limitation_today_access": true,

"finances_payroll_calculation_create_access": true,

"finances_payroll_calculation_create_not_limitation_today_access": true,

"finances_salary_access_master_checkbox": true,

"finances_salary_access_master_id": 1000237,

"get_salary_access_master_id": 1000237,

"finances_salary_master_not_limitation_today_access": true,

"finances_payroll_calculation_create_by_master_access": true,

"calculation_create_by_master_not_limitation_today_access": true,

"finances_period_report_access": true,

"finances_period_report_excel_access": true,

"finances_year_report_access": true,

"finances_year_report_excel_access": true,

"finances_print_check_access": true,

"finances_z_report_access": true,

"finances_z_report_no_limit_today_access": true,

"finances_z_report_excel_access": true

},

"clients": {"clients_access": true,

"client_phones_access": true,

"clients_phones_email_access": true,

"clients_card_phone_access": true,

"clients_delete_access": true,

"clients_excel_access": true,

"excel_access": true,

"client_comments_list_access": true,

"client_comments_add_access": true,

"client_comments_own_edit_access": true,

"client_comments_other_edit_access": true,

"client_files_list_access": true,

"client_files_upload_access": true,

"client_files_delete_access": true,

"clients_visit_master_id": 0,

"get_visit_master_id": 0

},

"dashboard": {"dashboard_access": true,

"dash_access": true,

"dash_phones_access": true,

"dash_records_access": true,

"dash_records_last_days_count": -1,

"dash_records_excel_access": true,

"dash_records_phones_access": true,

"dash_message_access": true,

"dash_message_excel_access": true,

"dash_message_phones_access": true,

"dash_reviews_access": true,

"dash_reviews_delete_access": true,

"dashboard_calls_access": true,

"dashboard_calls_excel_access": true,

"dashboard_calls_phones_access": true

},

"notification": {"notification": true,

"web_push": true,

"web_phone_push": true,

"notification_sms_ending_license": true,

"notification_sms_low_balance": true,

"notification_email_ending_license": true

},

"loyalty": {"loyalty_access": true,

"has_loyalty_access": true,

"loyalty_cards_manual_transactions_access": true,

"has_loyalty_cards_manual_transactions_access": true,

"loyalty_certificate_and_abonement_manual_transactions_access": true

},

"storages": {"storages_access": true,

"storages_ids": [ ],

"storages_transactions_access": true,

"storages_last_days_count": -1,

"storages_move_goods_access": true,

"storages_create_transactions_access": true,

"storages_create_last_days_count": -1,

"storages_create_transactions_buy_access": true,

"storages_create_transactions_sale_access": true,

"storages_edit_transactions_access": true,

"storages_edit_last_days_count": -1,

"storages_edit_transactions_buy_access": true,

"storages_edit_transactions_sale_access": true,

"storages_delete_transactions_access": true,

"storages_transactions_excel_access": true,

"storages_transactions_types": [ ],

"storages_inventory_access": true,

"storages_inventory_create_edit_access": true,

"storages_inventory_delete_access": true,

"storages_inventory_excel_access": true,

"storages_remnants_report_access": true,

"storages_remnants_report_excel_access": true,

"storages_sales_report_access": true,

"storages_sales_report_excel_access": true,

"storages_consumable_report_access": true,

"storages_consumable_report_excel_access": true,

"storages_write_off_report_access": true,

"storages_write_off_report_excel_access": true,

"storages_turnover_report_access": true,

"storages_turnover_report_excel_access": true,

"storages_goods_crud_access": true,

"storages_goods_create_access": true,

"storages_goods_update_access": true,

"storages_goods_title_edit_access": true,

"storages_goods_category_edit_access": true,

"storages_goods_selling_price_edit_access": true,

"storages_goods_cost_price_edit_access": true,

"storages_goods_units_edit_access": true,

"storages_goods_critical_balance_edit_access": true,

"storages_goods_masses_edit_access": true,

"storages_goods_comment_edit_access": true,

"storages_goods_archive_access": true,

"storages_goods_delete_access": true

},

"settings": {"settings_access": true,

"settings_basis_access": true,

"settings_information_access": true,

"users_access": true,

"delete_users_access": true,

"create_users_access": true,

"edit_users_access": true,

"limited_users_access": false,

"settings_services_access": true,

"settings_services_create_access": true,

"services_edit": true,

"settings_services_edit_title_access": true,

"settings_services_relation_category_access": true,

"settings_services_edit_price_access": true,

"settings_services_edit_image_access": true,

"settings_services_edit_online_seance_date_time_access": true,

"settings_services_edit_online_pay_access": true,

"settings_services_edit_services_related_resource_access": true,

"settings_positions_read": true,

"settings_positions_create": true,

"settings_positions_delete": true,

"edit_master_service_and_duration": true,

"tech_card_edit": true,

"services_delete": true,

"settings_master_access": true,

"master_create": true,

"master_edit": true,

"master_delete": true,

"settings_master_dismiss_access": true,

"schedule_edit": true,

"settings_notifications_access": true,

"settings_email_notifications_access": true,

"settings_template_notifications_access": true,

"webhook_read_access": true

},

"other": {"stat_access": true,

"billing_access": true,

"send_sms": true,

"auth_enable_check_ip": false,

"auth_list_allowed_ip": [ ]

}

},

"meta": [ ]

}`

## [tag/User/operation/api.user.invite.create](https://developer.alteg.io/api\#tag/User/operation/api.user.invite.create) Create and Send an Invitation

An invitation to manage a location is sent via email or phone as a link. By following the link and completing registration, the user gains access to manage the location according to the permissions assigned.
Permission assignment is performed in a separate request after the invitation is sent.

##### Authorizations:

_BearerPartnerUser_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

##### Request Body schema: application/json

|     |     |
| --- | --- |
| invites<br>required | Array of objects<br>Array of invites |

### Responses

**202**

Accepted

**401**

Unauthorized

**403**

Forbidden

**404**

Not Found

**422**

Unprocessable Entity

post/user/invite/{salon\_id}

https://api.alteg.io/api/v1/user/invite/{salon\_id}

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"invites": [{"name": "Olga",\
\
"search": "mail@gmail.com",\
\
"position": "Administrator",\
\
"user_role": "administrator",\
\
"user_permissions": [{"slug": "timetable_access",\
\
"value": true\
\
}\
\
],\
\
"staff_id": 12\
\
}\
\
]

}`

### Response samples

- 202
- 401
- 403
- 404
- 422

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"meta": {"message": "Saved"

}

}`

## [tag/Clients](https://developer.alteg.io/api\#tag/Clients) Clients

## [tag/Clients/operation/Get a list of clients](https://developer.alteg.io/api\#tag/Clients/operation/Get%20a%20list%20of%20clients) Get a list of clients

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| page | number<br>Page number |
| page\_size | number<br>The number of output lines per page. Maximum 200. (Default 25) |
| fields | Array of strings<br>Fields to be returned in the response |
| order\_by | string<br>Enum:"id""name""phone""email""discount""first\_visit\_date""last\_visit\_date""sold\_amount""visit\_count"<br>What field to sort by |
| order\_by\_direction | string<br>Enum:"ASC""DESC"<br>How to sort (ascending / descending) |
| operation | string<br>Enum:"AND""OR"<br>Type of transaction |
| filters | Array of objects<br>Filters for searching by customers |

### Responses

**200**

OK

**400**

Bad Request

**402**

Payment Required

**404**

When a location is specified not as an integer

post/company/{company\_id}/clients/search

https://api.alteg.io/api/v1/company/{company\_id}/clients/search

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"page": 1,

"page_size": 3,

"fields": ["id",\
\
"name"\
\
],

"order_by": "name",

"order_by_direction": "desc",

"operation": "AND",

"filters": [{"type": "id",\
\
"state": {"value": [1,\
\
2,\
\
3\
\
]\
\
}\
\
},\
\
{"type": "sold_amount",\
\
"state": {"from": 0,\
\
"to": 100.77\
\
}\
\
},\
\
{"type": "quick_search",\
\
"state": {"value": "James Smith"\
\
}\
\
},\
\
{"type": "importance",\
\
"state": {"value": [0,\
\
1,\
\
2,\
\
3\
\
]\
\
}\
\
},\
\
{"type": "has_mobile_app",\
\
"state": {"value": true\
\
}\
\
},\
\
{"type": "category",\
\
"state": {"value": [1,\
\
7\
\
]\
\
}\
\
},\
\
{"type": "has_passteam_card",\
\
"state": {"value": true\
\
}\
\
},\
\
{"type": "passteam_card_ids",\
\
"state": {"value": ["111122223333aaaabbbbcccc"\
\
]\
\
}\
\
},\
\
{"type": "birthday",\
\
"state": {"from": "1990-01-01 00:00:00",\
\
"to": "2000-01-01 23:59:59"\
\
}\
\
},\
\
{"type": "gender",\
\
"state": {"value": [0,\
\
1,\
\
2\
\
]\
\
}\
\
},\
\
{"type": "record",\
\
"state": {"staff": {"value": [1,\
\
2\
\
]\
\
},\
\
"service": {"value": [2,\
\
3\
\
]\
\
},\
\
"service_category": {"value": [4,\
\
5\
\
]\
\
},\
\
"status": {"value": [1\
\
]\
\
},\
\
"created": {"from": "2025-01-01 00:00:00",\
\
"to": "2025-01-01 23:59:59"\
\
},\
\
"records_count": {"from": 1,\
\
"to": 99999\
\
},\
\
"sold_amount": {"from": 1.001,\
\
"to": 99999.09\
\
}\
\
}\
\
},\
\
{"type": "client",\
\
"state": {"id": {"value": [1,\
\
2,\
\
3\
\
]\
\
},\
\
"birthday": {"from": "1990-01-01 00:00:00",\
\
"to": "2000-01-01 23:59:59"\
\
}\
\
}\
\
},\
\
{"type": "sale",\
\
"state": {"abonement_balance": {"from": 2,\
\
"to": 3\
\
}\
\
}\
\
}\
\
]

}`

### Response samples

- 200
- 400
- 402
- 404

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"name": "James Smith",\
\
"id": 2\
\
},\
\
{"name": "Sidorov",\
\
"id": 3\
\
},\
\
{"name": "James Smith",\
\
"id": 1\
\
}\
\
],

"meta": {"total_count": 908

}

}`

## [tag/Clients/operation/Deprecated. Get a list of clients](https://developer.alteg.io/api\#tag/Clients/operation/Deprecated.%20Get%20a%20list%20of%20clients) Deprecated. Get a list of clients  Deprecated

- Parameter
  - company\_id (required, number, `1`) \- company ID
  - page (number, `1`) \- Page number
  - count (number, `20`) \- Number of clients per page

#### Client filtering

- fullname:Joh (optional, string) - Name (part of name) to filter clients
- phone:7916 (optional, string) - Phone (part of the number) for filtering clients
- email:test@ (optional, string) - Email (part) for client filtering
- card:5663rt (optional, string) - Card (part) for filtering customers by loyalty card number
- paid\_min:100 (optional, number) - Minimum paid to the cashier, to filter customers by the amount of payments
- paid\_max:0 (optional, number) - Maximum paid to the cashier, to filter customers by the amount of payments
- paid\_max:0 (optional, number) - Maximum paid to the cashier, to filter customers by the amount of payments
- id:66 (optional, number) - ID of one client for filtering clients
- id\[\]: 66 (optional, array) - IDs of multiple clients to filter
- changed\_after: '2000-01-01T00:00:00' (optional, string) - Filtering clients changed/created since a specific date and time
- changed\_before: '2020-12-31T23:59:59' (optional, string) - Filtering clients changed/created before a specific date and time

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### query Parameters

|     |     |
| --- | --- |
| fullname | string<br>Example: fullname=Joh<br>Name (part of the name) for client filtering |
| phone | string<br>Example: phone=7916<br>Phone (part of the number) for customer filtering |
| email | string<br>Example: email=test@<br>Email (part) for customer filtering |
| paid\_min | number<br>Example: paid\_min=1<br>Minimum paid to the cashier, to filter customers by the amount of payments |
| paid\_max | number<br>Example: paid\_max=1<br>Maximum paid to the cashier, to filter customers by the amount of payments |
| page | number<br>Example: page=1<br>Page number |
| count | number<br>Example: count=20<br>Number of customers per page |
| id | number<br>Example: id=66<br>ID of one or more clients to filter clients |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/clients/{company\_id}

https://api.alteg.io/api/v1/clients/{company\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 66,\
\
"name": "James",\
\
"surname": "Smith",\
\
"patronymic": "Martel",\
\
"phone": 79112345678,\
\
"email": "asdfgh@g.com",\
\
"categories": [{"id": 3,\
\
"title": "Black list",\
\
"color": "#0f0f0f"\
\
},\
\
{"id": 4,\
\
"title": "VIP",\
\
"color": "#e8d313"\
\
}\
\
],\
\
"sex_id": 0,\
\
"sex": "unknown",\
\
"discount": 10,\
\
"importance_id": 3,\
\
"importance": "Gold",\
\
"card": "123456789",\
\
"birth_date": "2025-09-21T23:00:00.000+03:00",\
\
"comment": "test",\
\
"sms_check": 1,\
\
"sms_not": 0,\
\
"spent": 71842,\
\
"balance": 0,\
\
"visits": 34,\
\
"last_change_date": "2020-02-01T12:00:00+0400",\
\
"custom_fields": [ ]\
\
},\
\
{"id": 16,\
\
"name": "James",\
\
"surname": "Smith",\
\
"patronymic": "Martel",\
\
"phone": 79112345679,\
\
"email": "",\
\
"categories": [ ],\
\
"sex_id": 0,\
\
"sex": "unknown",\
\
"discount": 0,\
\
"importance_id": 0,\
\
"importance": "No importance class",\
\
"card": "",\
\
"birth_date": 0,\
\
"comment": "",\
\
"sms_check": 0,\
\
"sms_not": 0,\
\
"spent": 0,\
\
"balance": 0,\
\
"visits": 3,\
\
"last_change_date": "2020-04-01T12:00:00+0400",\
\
"custom_fields": [ ]\
\
}\
\
],

"meta": {"page": 1,

"total_count": 8

}

}`

## [tag/Clients/operation/Adding a Client](https://developer.alteg.io/api\#tag/Clients/operation/Adding%20a%20Client) Adding a Client

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: \*/\*  optional

|     |     |
| --- | --- |
| name<br>required | string<br>Client name |
| surname | string<br>Client surname |
| patronymic | string<br>Client middle name |
| phone<br>required | string<br>Customer phone |
| email | string<br>Client Email |
| sex\_id | number<br>Gender of the client (1 - male, 2 - female, 0 - unknown) |
| importance\_id | number<br>Client priority level (0 - none, 1 - bronze, 2 - silver, 3 - gold) |
| discount | number<br>Customer Discount |
| card | string<br>Client card number |
| birth\_date | string<br>Date of birth of the client in the format yyyy-mm-dd |
| comment | string<br>A comment |
| spent | number<br>How much money spent in the location at the time of adding |
| balance | number<br>Client balance |
| sms\_check | number<br>1 - Happy Birthday by SMS, 0 - do not congratulate |
| sms\_not | number<br>1 - Exclude the client from SMS mailings, 0 - do not exclude |
| categories | object<br>Array of customer category IDs |
| custom\_fields | object<br>Array of additional client fields as "api-key": "value" pairs |

### Responses

**201**

Created

post/clients/{company\_id}

https://api.alteg.io/api/v1/clients/{company\_id}

### Response samples

- 201

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 1121412,

"name": "James",

"surname": "Smith",

"patronymic": "Martel",

"phone": 79211234567,

"email": "j.smith@example.com",

"categories": [ ],

"sex": "Male",

"sex_id": 1,

"discount": 15,

"importance_id": 1,

"importance": "Bronze",

"card": "555888666",

"birth_date": 952041600,

"comment": "throws show-off",

"sms_check": 0,

"sms_not": 0,

"spent": 1000,

"balance": -1200,

"visits": 0,

"last_change_date": "2020-05-01T12:00:00+0400",

"custom_fields": {"key-1": "value-1"

}

},

"meta": [ ]

}`

## [tag/Clients/operation/Bulk adding clients](https://developer.alteg.io/api\#tag/Clients/operation/Bulk%20adding%20clients) Bulk adding clients

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: \*/\*  optional

|     |     |
| --- | --- |
| name<br>required | string<br>Client name |
| surname | string<br>Client surname |
| patronymic | string<br>Client middle name |
| phone<br>required | string<br>Customer phone |
| email | string<br>Client Email |
| sex\_id | number<br>Gender of the client (1 - male, 2 - female, 0 - unknown) |
| importance\_id | number<br>Client priority level (0 - none, 1 - bronze, 2 - silver, 3 - gold) |
| discount | number<br>Customer Discount |
| card | string<br>Client card number |
| birth\_date | string<br>Date of birth of the client in the format yyyy-mm-dd |
| comment | string<br>A comment |
| spent | number<br>How much money spent in the location at the time of adding |
| balance | number<br>Client balance |
| sms\_check | number<br>1 - Happy Birthday by SMS, 0 - do not congratulate |
| sms\_not | number<br>1 - Exclude the client from SMS mailings, 0 - do not exclude |
| categories | object<br>Array of customer category IDs |

### Responses

**200**

OK

post/clients/{company\_id}/bulk

https://api.alteg.io/api/v1/clients/{company\_id}/bulk

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"created": [{"id": 19153889,\
\
"name": "James",\
\
"surname": "Smith",\
\
"patronymic": "Martel",\
\
"phone": 79213237567,\
\
"email": "j.smith@example.com",\
\
"card": "555888666",\
\
"birth_date": 952041600,\
\
"comment": "throws show-off",\
\
"discount": 15,\
\
"visits": 0,\
\
"sex_id": 1,\
\
"sex": "Male",\
\
"sms_check": 0,\
\
"sms_bot": 0,\
\
"spent": 1000,\
\
"paid": 0,\
\
"balance": -1200,\
\
"importance_id": 1,\
\
"importance": "Bronze",\
\
"categories": [{"id": 101,\
\
"title": "Loyal",\
\
"color": "#bfd4f2"\
\
},\
\
{"id": 102,\
\
"title": "Constant",\
\
"color": "#009800"\
\
}\
\
],\
\
"last_change_date": "2020-09-08T13:33:39+0400",\
\
"custom_fields": [ ]\
\
}\
\
],

"errors": [{"phone": 79213237567,\
\
"name": "James Smith",\
\
"error": "The client with the specified phone number already exists in the database"\
\
},\
\
{"phone": 721828834101,\
\
"error": "Client name not specified"\
\
},\
\
{"phone": 123,\
\
"name": "James Smith",\
\
"error": "Phone must contain 9 to 15 digits"\
\
},\
\
{"name": "Theodore Hicks",\
\
"error": "Customer phone number cannot be empty"\
\
}\
\
]

},

"meta": [ ]

}`

## [tag/Clients/operation/Sample Request to Get a List of Client Files](https://developer.alteg.io/api\#tag/Clients/operation/Sample%20Request%20to%20Get%20a%20List%20of%20Client%20Files) Sample Request to Get a List of Client Files

A list of uploaded client files can be retrieved by providing both the location ID and the client ID in the request.
The client ID can be obtained from the client collection.

The response returns an array of [client files](https://developer.alteg.io/api#client-file).

Each client file has the following structure:

\| Field \| Type \| Description \|
\| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\| \-\-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \|
\| id \| number \| File ID \|
\| client\_id \| number \| Client ID \|
\| name \| string \| Filename with extension \|
\| description \| string \| File description \|
\| extension \| string \| File name extension \|
\| mime \| string \| MIME file type \|
\| link \| string \| File download link \|
\| date\_create \| string \| File upload date in ISO8601 format \|
\| size \| string \| Formatted file size string \|
\| username \| string \| The name of the user who uploaded the file \|
\| user\_avatar \| string \| Avatar of the user who uploaded the file \|
\| can\_edit \| boolean \| Is there a right to change and delete the file? true - there is a right, false - there is no right \|

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| client\_id<br>required | number<br>Client ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/company/{company\_id}/clients/files/{client\_id}

https://api.alteg.io/api/v1/company/{company\_id}/clients/files/{client\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 123,\
\
"client_id": 123456,\
\
"name": "test.txt",\
\
"description": "",\
\
"date_create": "2020-01-01T12:00:00+0400",\
\
"extension": "txt",\
\
"mime": "text/plain",\
\
"link": "/client_files/download/456/123/",\
\
"user_name": "Viktor Sitnikov",\
\
"user_avatar": "/images/no-master.png",\
\
"size": "9 B",\
\
"can_edit": false\
\
},\
\
{"id": 789,\
\
"client_id": 123456,\
\
"name": "photo.jpg",\
\
"description": "",\
\
"date_create": "2020-01-30T12:30:00+0400",\
\
"extension": "jpg",\
\
"mime": "image/jpeg",\
\
"link": "/client_files/download/456/789/",\
\
"user_name": "Viktor Sitnikov",\
\
"user_avatar": "/images/no-master.png",\
\
"size": "96.65 KB",\
\
"can_edit": true\
\
}\
\
],

"meta": {"count": 2

}

}`

## [tag/Clients/operation/Delete request example](https://developer.alteg.io/api\#tag/Clients/operation/Delete%20request%20example) Delete request example

##### Authorizations:

_bearer_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| client\_id<br>required | number<br>Client ID |
| file\_id<br>required | number<br>File ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |

### Responses

**202**

Accepted

delete/company/{company\_id}/clients/files/{client\_id}/{file\_id}

https://api.alteg.io/api/v1/company/{company\_id}/clients/files/{client\_id}/{file\_id}

### Response samples

- 202

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"meta": {"message": "Accepted"

}

}`

## [tag/Clients/operation/api.location.clients.visits.search](https://developer.alteg.io/api\#tag/Clients/operation/api.location.clients.visits.search) Search by customer history

Displays the client’s visit history.This method returns the client’s appointment and product purchase history, grouped by visit. Data is filtered based on visit status and paid status.
The client is identified using either the client\_id or client\_phone parameter. All other parameters are optional.
Results are sorted by visit date and paginated in batches of 25 items. If multiple visits share the same date as the last item on the page, they will be included on the current page to ensure complete grouping.
To retrieve the next page, use the from and to values provided in the meta field of the current response.

##### Authorizations:

_BearerPartnerUser_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

##### Request Body schema: application/json

|     |     |
| --- | --- |
| client\_id<br>required | number or null<br>Client ID. |
| client\_phone<br>required | string or null<br>Customer phone number. |
| from<br>required | string or null <date> <br>Period start date. |
| to<br>required | string or null <date> <br>Period end date. |
| payment\_statuses<br>required | Array of strings<br>Items Enum:"not\_paid""paid\_not\_full""paid\_full""paid\_over"<br>Visit payment status:<br>`not_paid` \- the visit is not paid, no payments were made for the visit;<br>`paid_not_full` \- the visit is partially paid;<br>`paid_full` \- the visit is paid in full, there is no overpayment;<br>`paid_over` \- there is an overpayment for the visit.<br>If the filter by payment status is not required, then an empty array `[]` must be passed. |
| attendance<br>required | number or null<br>Enum:-1012<br>Visit status:<br>`-1`: \- the client did not come;<br>`0`: \- waiting for the client;<br>`1`: \- the client has arrived;<br>`2`: \- the client has confirmed the appointment. |

### Responses

**200**

OK

**401**

Unauthorized

**404**

Not Found

**422**

Unprocessable Entity

post/company/{company\_id}/clients/visits/search

https://api.alteg.io/api/v1/company/{company\_id}/clients/visits/search

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"client_id": 123,

"client_phone": "79998887766",

"from": "2022-01-31",

"to": "2022-02-01",

"payment_statuses": ["not_paid"\
\
],

"attendance": -1

}`

### Response samples

- 200
- 401
- 404
- 422

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"goods_transactions": [{"id": 123,\
\
"comment": "Comment to the sale of goods",\
\
"date": "2021-01-31 12:34:56",\
\
"visit_id": 0,\
\
"record_id": 0,\
\
"goods": [{"id": 123,\
\
"title": "My product",\
\
"amount": -1,\
\
"unit": "PCS.",\
\
"cost_per_unit": 1000,\
\
"first_cost": -1000,\
\
"discount_percent": 0,\
\
"cost_to_pay": 1000,\
\
"paid_sum": 1000,\
\
"payment_status": "paid_full"\
\
}\
\
],\
\
"staff": {"id": 123,\
\
"name": "James Smith",\
\
"company_id": 123,\
\
"specialization": "Master",\
\
"avatar": "https://app.alteg.io/images/no-master-sm.png",\
\
"avatar_big": "https://app.alteg.io/images/no-master.png",\
\
"position": {"id": 123,\
\
"title": "staff member"\
\
}\
\
},\
\
"company": {"id": 123,\
\
"title": "My branch office."\
\
}\
\
}\
\
],

"records": [{"id": 123,\
\
"comment": "Comment to post",\
\
"date": "2021-01-31 12:34:56",\
\
"visit_id": 123,\
\
"attendance": 1,\
\
"services": [{"id": 123,\
\
"title": "My service",\
\
"first_cost": 1000,\
\
"discount_percent": 0,\
\
"cost_to_pay": 1000,\
\
"paid_sum": 1000,\
\
"payment_status": "paid_full",\
\
"consumables": [{"title": "My consumable",\
\
"amount": 1,\
\
"cost_per_unit": 1000,\
\
"unit": "PCS."\
\
}\
\
]\
\
}\
\
],\
\
"staff": {"id": 123,\
\
"name": "James Smith",\
\
"company_id": 123,\
\
"specialization": "Master",\
\
"avatar": "https://app.alteg.io/images/no-master-sm.png",\
\
"avatar_big": "https://app.alteg.io/images/no-master.png",\
\
"position": {"id": 123,\
\
"title": "staff member"\
\
}\
\
},\
\
"company": {"id": 123,\
\
"title": "My branch office."\
\
},\
\
"tips": {"has_tips": false,\
\
"sum": null\
\
},\
\
"comer": {"id": 123,\
\
"title": "James Smith",\
\
"slug": "person"\
\
}\
\
}\
\
]

},

"meta": {"dateCursor": {"previous": {"to": "2022-01-31",

"from": "2022-01-20",

"count": 7

},

"current": {"to": "2022-01-19",

"from": "2022-01-15",

"count": 25

},

"next": {"to": "2022-01-14",

"from": "2022-01-05",

"count": 25

}

}

}

}`

## [tag/Clients/operation/api.location.clients.comments.list](https://developer.alteg.io/api\#tag/Clients/operation/api.location.clients.comments.list) List of a comments for a client

Returns a list of a comments for a client and a files in a client details uploads history.

##### Authorizations:

_BearerPartnerUser_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |
| client\_id<br>required | number<br>Example: 123<br>ID of a location client. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

### Responses

**200**

OK

**401**

Unauthorized

**403**

Forbidden

**404**

Not Found

get/clients/{company\_id}/clients/{client\_id}/comments

https://api.alteg.io/api/v1/clients/{company\_id}/clients/{client\_id}/comments

### Response samples

- 200
- 401
- 403
- 404

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 123,\
\
"create_date": "2023-01-01 12:12:12",\
\
"update_date": "2023-01-01 12:12:12",\
\
"type": "default",\
\
"text": "Comment for a client",\
\
"files": [ ],\
\
"user": {"id": 123,\
\
"name": "John Johnson",\
\
"avatar": "https://api.alteg.io/images/avatar.png"\
\
}\
\
}\
\
],

"meta": {"count": 10

}

}`

## [tag/Clients/operation/api.location.clients.comments.create](https://developer.alteg.io/api\#tag/Clients/operation/api.location.clients.comments.create) Add a comment for a client

Creates a new text comment for a client.

##### Authorizations:

_BearerPartnerUser_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |
| client\_id<br>required | number<br>Example: 123<br>ID of a location client. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

##### Request Body schema: application/json

|     |     |
| --- | --- |
| text<br>required | string<br>Text of a comment for a client. |

### Responses

**201**

Created

**401**

Unauthorized

**403**

Forbidden

**404**

Not Found

**422**

Unprocessable Entity

post/clients/{company\_id}/clients/{client\_id}/comments

https://api.alteg.io/api/v1/clients/{company\_id}/clients/{client\_id}/comments

### Request samples

- Payload

Content type

application/json

Copy

`{"text": "Comment for a client"

}`

### Response samples

- 201
- 401
- 403
- 404
- 422

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 123,

"create_date": "2023-01-01 12:12:12",

"update_date": "2023-01-01 12:12:12",

"type": "default",

"text": "Comment for a client",

"files": [ ],

"user": {"id": 123,

"name": "John Johnson",

"avatar": "https://api.alteg.io/images/avatar.png"

}

},

"meta": { }

}`

## [tag/Clients/operation/api.location.clients.comments.delete](https://developer.alteg.io/api\#tag/Clients/operation/api.location.clients.comments.delete) Delete a comment for a client

Deletes a comment for a client; does not delete files uploaded that triggered creation of a comment.

##### Authorizations:

_BearerPartnerUser_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |
| client\_id<br>required | number<br>Example: 123<br>ID of a location client. |
| comment\_id<br>required | number<br>Example: 123<br>ID of a comment for client. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

### Responses

**204**

No Content

**401**

Unauthorized

**403**

Forbidden

**404**

Not Found

delete/clients/{company\_id}/clients/{client\_id}/comments/{comment\_id}

https://api.alteg.io/api/v1/clients/{company\_id}/clients/{client\_id}/comments/{comment\_id}

### Response samples

- 204
- 401
- 403
- 404

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": null,

"meta": { }

}`

## [tag/Clients/operation/Get a client](https://developer.alteg.io/api\#tag/Clients/operation/Get%20a%20client) Get a client

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| id<br>required | number<br>Client ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/client/{company\_id}/{id}

https://api.alteg.io/api/v1/client/{company\_id}/{id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 16,

"name": "James",

"surname": "Smith",

"patronymic": "Martel",

"phone": 79112345679,

"email": "",

"categories": [ ],

"sex": "unknown",

"discount": 0,

"importance": "No importance class",

"card": "",

"birth_date": 0,

"comment": "",

"sms_check": 0,

"sms_not": 0,

"spent": 0,

"balance": 0,

"visits": 3,

"last_change_date": "2020-03-01T12:00:00+0400",

"custom_fields": [ ]

},

"meta": [ ]

}`

## [tag/Clients/operation/Edit client](https://developer.alteg.io/api\#tag/Clients/operation/Edit%20client) Edit client

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| id<br>required | number<br>Client ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: \*/\*  optional

|     |     |
| --- | --- |
| name<br>required | string<br>Client name |
| surname | string<br>Client surname |
| patronymic | string<br>Client middle name |
| phone<br>required | string<br>Customer phone |
| email | string<br>Client Email |
| sex\_id | number<br>Gender of the client (1 - male, 2 - female, 0 - unknown) |
| importance\_id | number<br>Client priority level (0 - none, 1 - bronze, 2 - silver, 3 - gold) |
| discount | number<br>Customer Discount |
| card | string<br>Client card number |
| birth\_date | string<br>Date of birth of the client in the format yyyy-mm-dd |
| comment | string<br>A comment |
| spent | number<br>How much money spent in the location at the time of adding |
| balance | number<br>Client balance |
| sms\_check | number<br>1 - Happy Birthday by SMS, 0 - do not congratulate |
| sms\_not | number<br>1 - Exclude the client from SMS mailings, 0 - do not exclude |
| labels | object<br>Array of customer category IDs |
| custom\_fields | object<br>Array of additional client fields as "api-key": "value" pairs |

### Responses

**200**

OK

put/client/{company\_id}/{id}

https://api.alteg.io/api/v1/client/{company\_id}/{id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 1121412,

"name": "James",

"surname": "Smith",

"patronymic": "Martel",

"phone": 79211234567,

"email": "j.smith@example.com",

"categories": [ ],

"sex": "Male",

"sex_id": 1,

"discount": 15,

"importance_id": 1,

"importance": "Bronze",

"card": "555888666",

"birth_date": 952041600,

"comment": "throws show-off",

"sms_check": 0,

"sms_not": 0,

"spent": 1000,

"balance": -1200,

"visits": 0,

"last_change_date": "2020-06-01T12:00:00+0400",

"custom_fields": {"key-1": "value-1"

}

},

"meta": [ ]

}`

## [tag/Clients/operation/Delete client](https://developer.alteg.io/api\#tag/Clients/operation/Delete%20client) Delete client

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| id<br>required | number<br>Client ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**204**

No Content

delete/client/{company\_id}/{id}

https://api.alteg.io/api/v1/client/{company\_id}/{id}

## [tag/Appointments](https://developer.alteg.io/api\#tag/Appointments) Appointments

## [tag/Appointments/operation/Get list of appointments](https://developer.alteg.io/api\#tag/Appointments/operation/Get%20list%20of%20appointments) Get list of appointments

#### Filtering Appointments

- staff\_id: staff member ID.

Use this to retrieve appointments for a specific staff member

- client\_id: Client ID

Use this to retrieve appointments for a specific client

- created\_user\_id: User ID

User who created the appointment

Use this to filter appointments created by a specific user

- start\_date: Session start date (inclusive)

Returns appointments with a session starting on or after this date

- end\_date: Session end date (inclusive)

Returns appointments with a session ending on or before this date

- c\_start\_date: Appointment creation date from

Returns appointments created on or after this date

- c\_end\_date: Appointment creation date until

Returns appointments created on or before this date

- changed\_after: Modified or created after this datetime

Returns appointments created or modified after the specified date and time

- changed\_before: Modified or created before this datetime

Returns appointments created or modified before the specified date and time

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### query Parameters

|     |     |
| --- | --- |
| page | number<br>Example: page=1<br>Page number |
| count | number<br>Example: count=50<br>Number of appointments per page |
| staff\_id | number<br>Example: staff\_id=7572<br>staff member ID, if you only need appointments for a specific staff member |
| client\_id | number<br>Example: client\_id=572<br>Client ID. If you need appointments for a specific client |
| created\_user\_id | number<br>Example: created\_user\_id=7572<br>The ID of the user who created the appointment. If you need appointments created by a specific user |
| start\_date | string<br>Example: start\_date=2025-01-21<br>Session date starting at (filter by session date). If you need appointments for a session starting from a specific date |
| end\_date | string<br>Example: end\_date=2025-01-21<br>Session date to. If you need appointments for a session before a specific date |
| c\_start\_date | string<br>Example: c\_start\_date=2025-01-21<br>Appointment creation date starting from(filter by appointment creation date). If you need appointments created since a specific date |
| c\_end\_date | string<br>Example: c\_end\_date=2025-01-21<br>Appointment creation date by (filter by appointment creation date). |
| changed\_after | string<br>Example: changed\_after=2025-01-21T23:00:00<br>The date the appointment was modified/created. If you need appointments created/modified starting from a specific date and time |
| changed\_before | string<br>Example: changed\_before=2025-01-21T23:00:00<br>The date the appointment was modified/created. If you need appointments created/modified before a specific date and time |
| include\_consumables | number<br>Example: include\_consumables=0<br>Flag for including a list of consumables by appointments in the response |
| include\_finance\_transactions | number<br>Example: include\_finance\_transactions=0<br>Flag to include in the response financial transactions by appointments |
| with\_deleted | boolean<br>Include deleted appointments in output (with\_deleted=1 will return deleted appointments as well) |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/records/{company\_id}

https://api.alteg.io/api/v1/records/{company\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 2,\
\
"company_id": 4564,\
\
"staff_id": 9,\
\
"services": [{"id": 1,\
\
"title": "Hair extension",\
\
"cost": 100,\
\
"manual_cost": 100,\
\
"cost_per_unit": 100,\
\
"discount": 0,\
\
"first_cost": 100,\
\
"amount": 1\
\
}\
\
],\
\
"goods_transactions": [ ],\
\
"staff": {"id": 9,\
\
"name": "Oksana",\
\
"specialization": "hair extension",\
\
"position": {"id": 1,\
\
"title": "Administrator"\
\
},\
\
"avatar": "http://app.alteg.io/images/no-master-sm.png",\
\
"avatar_big": "http://app.alteg.io/images/no-master.png",\
\
"rating": 0,\
\
"votes_count": 0\
\
},\
\
"date": "2019-01-16 16:00:00",\
\
"datetime": "2019-01-16T16:00:00+09:00",\
\
"create_date": "2019-01-16T20:35:11+0900",\
\
"comment": "do not write down",\
\
"online": false,\
\
"visit_attendance": 0,\
\
"attendance": 0,\
\
"confirmed": 1,\
\
"seance_length": 3600,\
\
"length": 3600,\
\
"sms_before": 0,\
\
"sms_now": 0,\
\
"sms_now_text": "",\
\
"email_now": 0,\
\
"notified": 0,\
\
"master_request": 0,\
\
"api_id": "",\
\
"from_url": "",\
\
"review_requested": 0,\
\
"visit_id": "8262996",\
\
"created_user_id": 1073232,\
\
"deleted": false,\
\
"paid_full": 0,\
\
"prepaid": false,\
\
"prepaid_confirmed": false,\
\
"last_change_date": "2019-01-16T20:35:15+0900",\
\
"custom_color": "",\
\
"custom_font_color": "",\
\
"record_labels": [ ],\
\
"activity_id": 0,\
\
"custom_fields": [ ],\
\
"documents": [{"id": 8172893,\
\
"type_id": 7,\
\
"storage_id": 0,\
\
"user_id": 746310,\
\
"company_id": 4564,\
\
"number": 4163,\
\
"comment": "",\
\
"date_created": "2019-01-16 16:00:00",\
\
"category_id": 0,\
\
"visit_id": 3,\
\
"record_id": 2,\
\
"type_title": "Visit"\
\
}\
\
],\
\
"sms_remain_hours": 5,\
\
"email_remain_hours": 1,\
\
"bookform_id": 0,\
\
"record_from": "",\
\
"is_mobile": 0,\
\
"is_sale_bill_printed": false,\
\
"consumables": [ ],\
\
"finance_transactions": [ ]\
\
},\
\
{"id": 9,\
\
"company_id": 4564,\
\
"staff_id": 49,\
\
"services": [ ],\
\
"goods_transactions": [ ],\
\
"staff": {"id": 49,\
\
"name": "Sergei",\
\
"specialization": "stylist",\
\
"position": {"id": 1,\
\
"title": "Administrator"\
\
},\
\
"avatar": "http://app.alteg.io/images/no-master-sm.png",\
\
"avatar_big": "http://app.alteg.io/images/no-master.png",\
\
"rating": 0,\
\
"votes_count": 0\
\
},\
\
"date": "2019-01-16 16:00:00",\
\
"datetime": "2019-01-16T16:00:00+09:00",\
\
"create_date": "2019-01-16T20:35:11+0900",\
\
"comment": "",\
\
"online": true,\
\
"visit_attendance": 1,\
\
"attendance": 1,\
\
"confirmed": 1,\
\
"seance_length": 10800,\
\
"length": 10800,\
\
"sms_before": 0,\
\
"sms_now": 0,\
\
"sms_now_text": "",\
\
"email_now": 0,\
\
"notified": 0,\
\
"master_request": 1,\
\
"api_id": "",\
\
"from_url": "",\
\
"review_requested": 0,\
\
"visit_id": "8262996",\
\
"created_user_id": 1073232,\
\
"deleted": false,\
\
"paid_full": 0,\
\
"prepaid": false,\
\
"prepaid_confirmed": false,\
\
"last_change_date": "2017-01-09T20:45:30+0900",\
\
"custom_color": "f44336",\
\
"custom_font_color": "#ffffff",\
\
"record_labels": [{"id": "67345",\
\
"title": "The staff member is not important",\
\
"color": "#009800",\
\
"icon": "unlock",\
\
"font_color": "#ffffff"\
\
},\
\
{"id": "104474",\
\
"title": "important category",\
\
"color": "#3b2c54",\
\
"icon": "odnoklassniki",\
\
"font_color": "#ffffff"\
\
}\
\
],\
\
"activity_id": 0,\
\
"custom_fields": [ ],\
\
"documents": [{"id": 8172893,\
\
"type_id": 7,\
\
"storage_id": 0,\
\
"user_id": 746310,\
\
"company_id": 4564,\
\
"number": 4163,\
\
"comment": "",\
\
"date_created": "2019-01-16 16:00:00",\
\
"category_id": 0,\
\
"visit_id": 3,\
\
"record_id": 2,\
\
"type_title": "Visit"\
\
}\
\
],\
\
"sms_remain_hours": 5,\
\
"email_remain_hours": 1,\
\
"bookform_id": 0,\
\
"record_from": "",\
\
"is_mobile": 0,\
\
"is_sale_bill_printed": false,\
\
"consumables": [ ],\
\
"finance_transactions": [ ]\
\
}\
\
],

"meta": {"page": 1,

"total_count": 10

}

}`

## [tag/Appointments/operation/Create a New Appointment](https://developer.alteg.io/api\#tag/Appointments/operation/Create%20a%20New%20Appointment) Create a New Appointment

When creating an appointment for a group event, the event\_id parameter becomes mandatory. In this case, the following parameters become optional:

- staff\_id
- services
- datetime
- session\_length

Additional fields
You can pass custom values using additional fields created specifically for your location (see the "Additional Fields" section for setup details).
Once created, these fields can be included in the custom\_fields object when creating an appointment. Each key in this object must match the code of the corresponding additional field. Example:

- If your location has the following additional fields: my\_custom\_field with type="number" some\_another\_field with type="list"

- You can pass their values during appointment creation as follows: custom\_fields:


{
"my\_custom\_field": 123, "some\_another\_field": \["first value", "second value"\]
}

- When this appointment is later retrieved using the GET method, the same custom field values will be returned in the response.

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 24699<br>location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| staff\_id | number<br>staff member ID |
| services | Array of objects<br>Service parameters (id, cost, discount) |
| client | object<br>Client parameters (phone, name, email) |
| save\_if\_busy | boolean<br>Whether to keep the appointment if the time is busy or non-working, or give an error |
| datetime | string <date-time> <br>Date and time of appointment |
| seance\_length | number<br>Appointment duration in seconds |
| send\_sms | boolean<br>Whether to send SMS with the details of the appointment to the client |
| comment | string<br>Appointment Comment |
| sms\_remain\_hours | number<br>Specifies how many hours before the visit an SMS reminder should be sent to the client. Set to 0 if no reminder is needed. |
| email\_remain\_hours | number<br>Specifies how many hours before the visit an email reminder should be sent to the client. Set to 0 if no reminder is needed. |
| attendance | number<br>Appointment status (2 - User confirmed the appointment, 1 - User came, services provided, 0 - user waiting, -1 - user did not show) |
| api\_id | string<br>External system ID |
| custom\_color | string<br>Appointment color |
| record\_labels | Array of strings<br>Array of post category IDs |
| custom\_fields | object<br>Additional appointment fields |

### Responses

**201**

Created

post/records/{company\_id}

https://api.alteg.io/api/v1/records/{company\_id}

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"staff_id": 8886,

"services": [{"id": 331,\
\
"first_cost": 9000,\
\
"discount": 50,\
\
"cost": 4500\
\
},\
\
{"id": 333,\
\
"first_cost": 2000,\
\
"discount": 10,\
\
"cost": 1800\
\
}\
\
],

"client": {"phone": "+1-315-555-0175",

"name": "James Smith",

"email": "j.smith@example.com"

},

"save_if_busy": false,

"datetime": "2025-09-21T23:00:00.000+03:00",

"seance_length": 3600,

"send_sms": true,

"comment": "test appointment!",

"sms_remain_hours": 6,

"email_remain_hours": 24,

"attendance": 1,

"api_id": "777",

"custom_color": "f44336",

"record_labels": ["67345",\
\
"104474"\
\
],

"custom_fields": {"my_custom_field": 123,

"some_another_field": ["first value",\
\
"second value"\
\
]

}

}`

### Response samples

- 201

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 2,\
\
"company_id": 4564,\
\
"staff_id": 9,\
\
"services": [{"id": 1,\
\
"title": "Hair extension",\
\
"cost": 100,\
\
"manual_cost": 100,\
\
"cost_per_unit": 100,\
\
"discount": 0,\
\
"first_cost": 100,\
\
"amount": 1\
\
}\
\
],\
\
"goods_transactions": [ ],\
\
"staff": {"id": 9,\
\
"name": "Oksana",\
\
"specialization": "hair extension",\
\
"position": {"id": 1,\
\
"title": "Administrator"\
\
},\
\
"avatar": "http://app.alteg.io/images/no-master-sm.png",\
\
"avatar_big": "http://app.alteg.io/images/no-master.png",\
\
"rating": 0,\
\
"votes_count": 0\
\
},\
\
"date": "2025-01-21 02:45:00",\
\
"datetime": "2025-01-21T02:45:00-03:00",\
\
"create_date": "2025-07-02T05:47:36-0300",\
\
"comment": "do not write down",\
\
"online": false,\
\
"visit_attendance": 0,\
\
"attendance": 0,\
\
"confirmed": 1,\
\
"seance_length": 3600,\
\
"length": 3600,\
\
"sms_before": 0,\
\
"sms_now": 0,\
\
"sms_now_text": "",\
\
"email_now": 0,\
\
"notified": 0,\
\
"master_request": 0,\
\
"api_id": "",\
\
"from_url": "",\
\
"review_requested": 0,\
\
"visit_id": "8262996",\
\
"created_user_id": 1073232,\
\
"deleted": false,\
\
"paid_full": 0,\
\
"prepaid": false,\
\
"prepaid_confirmed": false,\
\
"last_change_date": "2019-01-16T20:35:15+0900",\
\
"custom_color": "",\
\
"custom_font_color": "",\
\
"record_labels": [ ],\
\
"activity_id": 0,\
\
"custom_fields": [ ],\
\
"documents": [{"id": 8172893,\
\
"type_id": 7,\
\
"storage_id": 0,\
\
"user_id": 746310,\
\
"company_id": 4564,\
\
"number": 4163,\
\
"comment": "",\
\
"date_created": "2025-09-21T23:00:00.000+03:00",\
\
"category_id": 0,\
\
"visit_id": 3,\
\
"record_id": 2,\
\
"type_title": "Visit"\
\
}\
\
],\
\
"consumables": [ ],\
\
"finance_transactions": [ ]\
\
},\
\
{"id": 9,\
\
"company_id": 4564,\
\
"staff_id": 49,\
\
"services": [ ],\
\
"goods_transactions": [ ],\
\
"staff": {"id": 49,\
\
"name": "Sergei",\
\
"specialization": "stylist",\
\
"position": {"id": 1,\
\
"title": "Administrator"\
\
},\
\
"avatar": "http://app.alteg.io/images/no-master-sm.png",\
\
"avatar_big": "http://app.alteg.io/images/no-master.png",\
\
"rating": 0,\
\
"votes_count": 0\
\
},\
\
"date": "2025-01-21 02:45:00",\
\
"datetime": "2025-01-21T02:45:00-03:00",\
\
"create_date": "2025-07-02T05:47:36-0300",\
\
"comment": "",\
\
"online": true,\
\
"visit_attendance": 1,\
\
"attendance": 1,\
\
"confirmed": 1,\
\
"seance_length": 10800,\
\
"length": 10800,\
\
"sms_before": 0,\
\
"sms_now": 0,\
\
"sms_now_text": "",\
\
"email_now": 0,\
\
"notified": 0,\
\
"master_request": 1,\
\
"api_id": "",\
\
"from_url": "",\
\
"review_requested": 0,\
\
"visit_id": "8262996",\
\
"created_user_id": 1073232,\
\
"deleted": false,\
\
"paid_full": 0,\
\
"prepaid": false,\
\
"prepaid_confirmed": false,\
\
"last_change_date": "2017-01-09T20:45:30+0900",\
\
"custom_color": "f44336",\
\
"custom_font_color": "#ffffff",\
\
"record_labels": [{"id": "67345",\
\
"title": "The staff member is not important",\
\
"color": "#009800",\
\
"icon": "unlock",\
\
"font_color": "#ffffff"\
\
},\
\
{"id": "104474",\
\
"title": "important category",\
\
"color": "#3b2c54",\
\
"icon": "odnoklassniki",\
\
"font_color": "#ffffff"\
\
}\
\
],\
\
"activity_id": 0,\
\
"custom_fields": [ ],\
\
"documents": [{"id": 8172893,\
\
"type_id": 7,\
\
"storage_id": 0,\
\
"user_id": 746310,\
\
"company_id": 4564,\
\
"number": 4163,\
\
"comment": "",\
\
"date_created": "2025-09-21T23:00:00.000+03:00",\
\
"category_id": 0,\
\
"visit_id": 3,\
\
"record_id": 2,\
\
"type_title": "Visit"\
\
}\
\
],\
\
"consumables": [ ],\
\
"finance_transactions": [ ]\
\
}\
\
],

"meta": {"page": 1,

"total_count": 10

}

}`

## [tag/Appointments/operation/Get a List of Partner Appointments](https://developer.alteg.io/api\#tag/Appointments/operation/Get%20a%20List%20of%20Partner%20Appointments) Get a List of Partner Appointments

#### Filtering appointments

- salon\_id: Location ID

Use this to filter appointments for a specific location

- start\_date: Visit date from

Filters appointments with a visit date starting from the specified date (inclusive)

- end\_date: Visit date until

Filters appointments with a visit date up to the specified date (inclusive)

- created\_start\_date: Appointment creation date from

Filters appointments created on or after this date

- created\_end\_date: Appointment creation date until

Returns appointments created on or before this date

- user\_id: User ID

Filters appointments created by a specific user

##### Authorizations:

(_bearer__user_)

##### query Parameters

|     |     |
| --- | --- |
| page | number<br>Example: page=1<br>Page number |
| editable\_length | number<br>Example: editable\_length=50<br>Number of appointments per page, maximum 100 |
| salon\_id | number<br>Example: salon\_id=1<br>Location ID |
| start\_date | string<br>Example: start\_date='17.01.2025'<br>Filter by visit date from |
| end\_date | string<br>Example: end\_date='17.01.2025'<br>Filter by visit date by |
| created\_start\_date | string<br>Example: created\_start\_date='17.01.2025'<br>Filter by appointment creation date from |
| created\_end\_date | string<br>Example: created\_end\_date='17.01.2025'<br>Filter by appointment creation date by |
| user\_id | number<br>Example: user\_id=1<br>User ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/records/partner/

https://api.alteg.io/api/v1/records/partner/

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 1,\
\
"date": "2025-09-21T23:00:00.000+03:00",\
\
"datetime": "2025-11-17T00:00:00+0400",\
\
"create_date": "2025-11-17T16:08:08+0400",\
\
"comment": "",\
\
"deleted": false,\
\
"attendance": 0,\
\
"length": 3600,\
\
"notify_by_sms": 1,\
\
"notify_by_email": 12,\
\
"master_requested": true,\
\
"online": false,\
\
"api_id": "42",\
\
"last_change_date": "2025-11-18T16:58:59+0400",\
\
"prepaid": 0,\
\
"prepaid_confirmed": 0,\
\
"activity_id": 0,\
\
"services": [{"id": 1,\
\
"title": "beard trim",\
\
"cost": 100,\
\
"price_min": 500,\
\
"price_max": 1500,\
\
"discount": 0,\
\
"amount": 1\
\
}\
\
],\
\
"company": {"id": 1,\
\
"title": "Business Example",\
\
"public_title": "Business Example",\
\
"business_group_id": 1,\
\
"business_type_id": 1,\
\
"country_id": 1,\
\
"city_id": 1,\
\
"timezone": 3,\
\
"timezone_name": "America/New_York",\
\
"address": "New York, 787 Jackson Drive",\
\
"coordinate_lat": "40.730610",\
\
"coordinate_lon": "-73.935242",\
\
"logo": "http://app.alteg.io/images/icon.png",\
\
"zip": 0,\
\
"phone": "",\
\
"phones": [ ],\
\
"site": "www.example.com",\
\
"allow_delete_record": true,\
\
"allow_change_record": true,\
\
"country": "United States",\
\
"city": "New York"\
\
},\
\
"staff": {"id": 1,\
\
"name": "James Smith",\
\
"company_id": 1,\
\
"specialization": "Barber",\
\
"position": [ ],\
\
"rating": 0,\
\
"show_rating": 1,\
\
"comments_count": 0,\
\
"votes_count": 0,\
\
"average_score": 0,\
\
"avatar": "http://app.alteg.io/images/no-master-sm.png",\
\
"prepaid": "forbidden"\
\
},\
\
"client": {"id": 1,\
\
"name": "James Smith",\
\
"phone": "+1-315-555-0175",\
\
"phone_code": "7",\
\
"email": "j.smith@example.com"\
\
},\
\
"custom_fields": {"dop-telephone": "+1-315-555-0175"\
\
}\
\
}\
\
],

"meta": {"count": 1

}

}`

## [tag/Appointments/operation/Get an Appointment](https://developer.alteg.io/api\#tag/Appointments/operation/Get%20an%20Appointment) Get an Appointment

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| record\_id<br>required | number<br>Appointment ID |

##### query Parameters

|     |     |
| --- | --- |
| include\_consumables | number<br>Example: include\_consumables=0 |
| include\_finance\_transactions | number<br>Example: include\_finance\_transactions=0 |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/record/{company\_id}/{record\_id}

https://api.alteg.io/api/v1/record/{company\_id}/{record\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 2,

"company_id": 4564,

"staff_id": 9,

"services": [{"id": 1,\
\
"title": "Hair extension",\
\
"cost": 100,\
\
"manual_cost": 100,\
\
"cost_per_unit": 100,\
\
"discount": 0,\
\
"first_cost": 100,\
\
"amount": 1\
\
}\
\
],

"goods_transactions": [ ],

"staff": {"id": 9,

"name": "Oksana",

"specialization": "hair extension",

"position": {"id": 1,

"title": "Administrator"

},

"avatar": "http://app.alteg.io/images/no-master-sm.png",

"avatar_big": "http://app.alteg.io/images/no-master.png",

"rating": 0,

"votes_count": 0

},

"client": {"id": 18936825,

"name": "lx",

"phone": 70001234567,

"card": "",

"email": "client@example.com",

"success_visits_count": 37,

"fail_visits_count": 3

},

"clients_count": 1,

"date": "2025-09-21T23:00:00.000+03:00",

"datetime": "2025-09-21T23:00:00.000+03:00",

"create_date": "2019-01-17T19:41:44+0900",

"comment": "do not write down",

"visit_attendance": 0,

"attendance": 0,

"confirmed": 1,

"seance_length": 3600,

"length": 3600,

"sms_before": 0,

"sms_now": 0,

"sms_now_text": "",

"email_now": 0,

"notified": 0,

"master_request": 0,

"api_id": "",

"from_url": "",

"review_requested": 0,

"visit_id": "8263004",

"created_user_id": 1073232,

"deleted": false,

"paid_full": 0,

"prepaid": false,

"prepaid_confirmed": false,

"last_change_date": "2019-01-17T19:44:14+0900",

"custom_color": "f44336",

"custom_font_color": "#ffffff",

"record_labels": [{"id": "67345",\
\
"title": "The staff member is not important",\
\
"color": "#009800",\
\
"icon": "unlock",\
\
"font_color": "#ffffff"\
\
},\
\
{"id": "104474",\
\
"title": "interesting category",\
\
"color": "#3b2c54",\
\
"icon": "odnoklassniki",\
\
"font_color": "#ffffff"\
\
}\
\
],

"activity_id": 0,

"custom_fields": [ ],

"documents": [{"id": 8172893,\
\
"type_id": 7,\
\
"storage_id": 0,\
\
"user_id": 1073232,\
\
"company_id": 4564,\
\
"number": 4163,\
\
"comment": "",\
\
"date_created": "2025-09-21T23:00:00.000+03:00",\
\
"category_id": 0,\
\
"visit_id": 3,\
\
"record_id": 2,\
\
"type_title": "Visit"\
\
}\
\
],

"sms_remain_hours": 5,

"email_remain_hours": 1,

"bookform_id": 0,

"record_from": "",

"is_mobile": 0,

"is_sale_bill_printed": false,

"consumables": [{"id": 2173068,\
\
"document_id": 8174153,\
\
"type_id": 2,\
\
"company_id": 4564,\
\
"good_id": 4853087,\
\
"amount": -1,\
\
"cost_per_unit": 0.03,\
\
"discount": 0,\
\
"cost": 0.03,\
\
"unit_id": 216761,\
\
"operation_unit_type": 2,\
\
"storage_id": 91548,\
\
"supplier_id": 0,\
\
"client_id": 0,\
\
"master_id": 0,\
\
"create_date": "2025-09-21T23:00:00.000+03:00",\
\
"comment": "",\
\
"service_id": 1,\
\
"user_id": 1073232,\
\
"deleted": false,\
\
"pkg_amount": 0\
\
}\
\
],

"finance_transactions": [{"id": 6024243,\
\
"document_id": 8174152,\
\
"date": "2025-09-21T23:00:00.000+03:00",\
\
"type_id": 5,\
\
"expense_id": 5,\
\
"account_id": 90459,\
\
"amount": 100,\
\
"client_id": 18936825,\
\
"master_id": 0,\
\
"supplier_id": 0,\
\
"comment": "",\
\
"item_id": 1,\
\
"target_type_id": 1,\
\
"record_id": 2,\
\
"goods_transaction_id": 0,\
\
"expense": {"id": 5,\
\
"title": "Provision of services"\
\
},\
\
"account": {"id": 90459,\
\
"title": "Main cash desk"\
\
},\
\
"client": {"id": 18936825,\
\
"name": "James Smith",\
\
"phone": "+1-315-555-0175"\
\
},\
\
"master": [ ],\
\
"supplier": [ ]\
\
}\
\
]

},

"meta": [ ]

}`

## [tag/Appointments/operation/Edit Appointment](https://developer.alteg.io/api\#tag/Appointments/operation/Edit%20Appointment) Edit Appointment

When an appointment is changed in a group event, the event\_id parameter becomes required, staff\_id, services, datetime, session\_length parameters become optional

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| record\_id<br>required | number<br>Appointment ID |

##### query Parameters

|     |     |
| --- | --- |
| include\_consumables | number<br>Example: include\_consumables=0 |
| include\_finance\_transactions | number<br>Example: include\_finance\_transactions=0 |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| staff\_id | number<br>staff member ID |
| services | Array of objects<br>Service parameters (id, cost, discount) |
| client | object<br>Client parameters (phone, name, email) |
| save\_if\_busy | boolean<br>Whether to keep the appointment if the time is busy or non-working, or give an error |
| datetime | string <date-time> <br>Date and time of appointment |
| seance\_length | number<br>Appointment duration in seconds |
| send\_sms | boolean<br>Whether to send SMS with the details of the appointment to the client |
| comment | string<br>Appointment Comment |
| sms\_remain\_hours | number<br>Specifies how many hours before the visit an SMS reminder should be sent to the client. Set to 0 if no reminder is needed. |
| email\_remain\_hours | number<br>Specifies how many hours before the visit an email reminder should be sent to the client. Set to 0 if no reminder is needed. |
| attendance | number<br>Appointment status (2 - User confirmed the appointment, 1 - User came, services provided, 0 - user waiting, -1 - user did not show) |
| api\_id | string<br>External system ID |
| custom\_color | string<br>Appointment color |
| record\_labels | Array of strings<br>Array of post category IDs |
| custom\_fields | object<br>Additional appointment fields |

### Responses

**201**

Created

put/record/{company\_id}/{record\_id}

https://api.alteg.io/api/v1/record/{company\_id}/{record\_id}

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"staff_id": 8886,

"services": [{"id": 331,\
\
"first_cost": 9000,\
\
"discount": 50,\
\
"cost": 4500\
\
},\
\
{"id": 333,\
\
"first_cost": 2000,\
\
"discount": 10,\
\
"cost": 1800\
\
}\
\
],

"client": {"phone": "+1-315-555-0175",

"name": "James Smith",

"email": "j.smith@example.com"

},

"save_if_busy": false,

"datetime": "2025-09-21T23:00:00.000+03:00",

"seance_length": 3600,

"send_sms": true,

"comment": "test appointment!",

"sms_remain_hours": 6,

"email_remain_hours": 24,

"attendance": 1,

"api_id": "777",

"custom_color": "f44336",

"record_labels": ["67345",\
\
"104474"\
\
],

"custom_fields": {"my_custom_field": 123,

"some_another_field": ["first value",\
\
"second value"\
\
]

}

}`

### Response samples

- 201

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 999,

"services": [{"id": 331,\
\
"first_cost": 9000,\
\
"discount": 50,\
\
"cost": 4500\
\
},\
\
{"id": 333,\
\
"first_cost": 2000,\
\
"discount": 10,\
\
"cost": 1800\
\
}\
\
],

"client": {"phone": "+1-315-555-0175",

"name": "James Smith",

"email": "j.smith@example.com"

},

"clients_count": 1,

"staff": {"id": 8886,

"name": "Jack",

"spec": "stylist"

},

"datetime": "2025-09-21T23:00:00.000+03:00",

"seance_length": 3600,

"create_date": "2025-09-21T23:00:00.000+03:00",

"comment": "test appointment!",

"visit_attendance": 1,

"confirmed": 1,

"sms_before": 6,

"sms_now": 1,

"sms_now_text": "",

"email_now": 1,

"notified": 0,

"master_request": 1,

"api_id": "",

"from_url": "",

"review_requested": 0,

"activity_id": 0,

"documents": [{"id": 8172893,\
\
"type_id": 7,\
\
"storage_id": 0,\
\
"user_id": 746310,\
\
"company_id": 4564,\
\
"number": 4163,\
\
"comment": "",\
\
"date_created": "2025-09-21T23:00:00.000+03:00",\
\
"category_id": 0,\
\
"visit_id": 3,\
\
"record_id": 2,\
\
"type_title": "Visit"\
\
}\
\
]

},

"meta": [ ]

}`

## [tag/Appointments/operation/Delete Appointment](https://developer.alteg.io/api\#tag/Appointments/operation/Delete%20Appointment) Delete Appointment

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| record\_id<br>required | number<br>Appointment ID |

##### query Parameters

|     |     |
| --- | --- |
| include\_consumables | number<br>Example: include\_consumables=0 |
| include\_finance\_transactions | number<br>Example: include\_finance\_transactions=0 |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**204**

No Content

delete/record/{company\_id}/{record\_id}

https://api.alteg.io/api/v1/record/{company\_id}/{record\_id}

## [tag/Visits](https://developer.alteg.io/api\#tag/Visits) Visits

## [tag/Visits/operation/Get a visit](https://developer.alteg.io/api\#tag/Visits/operation/Get%20a%20visit) Get a visit

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| visit\_id<br>required | number<br>Example: Visit ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/visits/{visit\_id}

https://api.alteg.io/api/v1/visits/{visit\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"attendance": 1,

"datetime": "2025-09-21T23:00:00.000+03:00",

"comment": 0,

"records": [{"id": 37955315,\
\
"company_id": 4564,\
\
"staff_id": 55436,\
\
"services": [ ],\
\
"events": [ ],\
\
"goods_transactions": [ ],\
\
"staff": {"id": 55436,\
\
"name": "Kevin Spacey",\
\
"specialization": "Specialist in manicure and pedicure",\
\
"position": {"id": 1,\
\
"title": "Administrator"\
\
},\
\
"avatar": "https://app.alteg.io/uploads/masters/sm/b/bb/bb59d4cc17d9b16_20171215174158.png",\
\
"avatar_big": "https://app.alteg.io/uploads/masters/origin/c/cf/cfb8c5cee58000b_20171215174158.png",\
\
"rating": 4.89,\
\
"votes_count": 0\
\
},\
\
"client": {"id": 4240788,\
\
"name": "dev1",\
\
"phone": 71000000001,\
\
"card": "000000415",\
\
"email": "",\
\
"success_visits_count": 58,\
\
"fail_visits_count": 9\
\
},\
\
"date": "2025-09-21T23:00:00.000+03:00",\
\
"datetime": "2025-09-21T23:00:00.000+03:00",\
\
"create_date": "2025-03-22T17:55:14+0300",\
\
"comment": "",\
\
"online": false,\
\
"visit_attendance": 1,\
\
"attendance": 1,\
\
"confirmed": 1,\
\
"seance_length": 3600,\
\
"length": 3600,\
\
"sms_before": 1,\
\
"sms_now": 1,\
\
"sms_now_text": "",\
\
"email_now": 1,\
\
"notified": 0,\
\
"master_request": 0,\
\
"api_id": "0",\
\
"from_url": "",\
\
"review_requested": 0,\
\
"visit_id": 8260852,\
\
"created_user_id": 999290,\
\
"deleted": 0,\
\
"paid_full": 0,\
\
"prepaid": 0,\
\
"prepaid_confirmed": 0,\
\
"last_change_date": "2025-03-28T17:46:48+0300",\
\
"custom_color": "",\
\
"custom_font_color": "",\
\
"record_labels": [ ],\
\
"activity_id": 0,\
\
"custom_fields": [ ],\
\
"documents": [{"id": 8172893,\
\
"type_id": 7,\
\
"storage_id": 0,\
\
"user_id": 746310,\
\
"company_id": 4564,\
\
"number": 4163,\
\
"comment": "",\
\
"date_created": "2025-09-21T23:00:00.000+03:00",\
\
"category_id": 0,\
\
"visit_id": 3,\
\
"record_id": 2,\
\
"type_title": "Visit"\
\
}\
\
]\
\
}\
\
]

},

"meta": [ ]

}`

## [tag/Visits/operation/Get Visit Details](https://developer.alteg.io/api\#tag/Visits/operation/Get%20Visit%20Details) Get Visit Details

**Block "kkm\_transaction\_details\_container"**

Flag "last\_operation\_type"

| Meaning | Description |
| --- | --- |
| 0 | Print return receipt |
| 1 | Print sales receipt |

Types of all transactions with cash register

| Meaning | Description |
| --- | --- |
| 0 | Sales operation – Active for documents of type Visit |
| 1 | Sale return operation – Active for documents of type Visit |
| 2 | Correction operation |
| 4 | Shift opening operation – Opens a new POS shift |
| 5 | Shift closing operation – Closes the current POS shift |
| 9 | Get POS status – Retrieves the current status of the POS device |
| 11 | Get POS team status – Retrieves the status of all POS devices connected to the team |
| 12 | Correction operation |
| 13 | Print X-report – Prints a non-fiscal summary report of the current shift |
| 6 | Cash deposit – Registers a cash-in transaction in the POS |
| 7 | Cash withdrawal – Registers a cash-out transaction in the POS |

Statuses of All POS Operations

| Meaning | Description |
| --- | --- |
| 0 | Connection error with POS – Unable to establish a connection with the POS device |
| 1 | Success – Operation completed successfully |
| 2 | Sent for printing – The request has been sent to the POS and is waiting for print completion |
| 3 | Runtime error – An error occurred while processing the operation on the POS device |
| 4 | Status check error – Failed to retrieve the current status of the POS |
| 5 | Waiting for POS readiness – Operation is pending until the POS device becomes ready |

Document Types

| Meaning | Description |
| --- | --- |
| 1 | Sale of products |
| 2 | Provision of services |
| 3 | Arrival of products |
| 4 | Products write-off |
| 5 | Transfer of products |
| 6 | Inventory |
| 7 | Visit |
| 8 | Consumables write-off |

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| salon\_id<br>required | number<br>Example: Location ID |
| record\_id<br>required | number<br>Example: Appointment ID |
| visit\_id<br>required | number<br>Example: Visit ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer access\_token, User user\_token |

### Responses

**200**

OK

get/visit/details/{salon\_id}/{record\_id}/{visit\_id}

https://api.alteg.io/api/v1/visit/details/{salon\_id}/{record\_id}/{visit\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"payment_transactions": [{"id": 6023813,\
\
"document_id": 8172806,\
\
"date": "2025-09-21T23:00:00.000+03:00",\
\
"type_id": 5,\
\
"expense_id": 5,\
\
"account_id": 32299,\
\
"amount": 10,\
\
"client_id": 4241492,\
\
"master_id": 0,\
\
"supplier_id": 0,\
\
"comment": "",\
\
"item_id": 1162679,\
\
"target_type_id": 1,\
\
"record_id": 13136569,\
\
"goods_transaction_id": 0,\
\
"expense": {"id": 5,\
\
"title": "Provision of services"\
\
},\
\
"account": {"id": 32299,\
\
"title": "Deposits (payment in cash)"\
\
},\
\
"client": {"id": "4241492",\
\
"name": "ModulKassaClient",\
\
"phone": "+1-315-555-0175"\
\
},\
\
"master": [ ],\
\
"supplier": [ ]\
\
}\
\
],

"loyalty_transactions": [{"id": 10614,\
\
"status_id": 1,\
\
"amount": 0.5,\
\
"type_id": 2,\
\
"program_id": 145,\
\
"card_id": 20013,\
\
"salon_group_id": 646,\
\
"item_id": 0,\
\
"item_type_id": 0,\
\
"item_record_id": 0,\
\
"goods_transaction_id": 0,\
\
"is_discount": false,\
\
"is_loyalty_withdraw": false,\
\
"type": {"id": 2,\
\
"title": "Loyalty programs"\
\
}\
\
}\
\
],

"kkm_transaction_details_container": {"last_operation_type": 0,

"transactions": [{"id": 1047,\
\
"print_date": "2025-09-21T23:00:00.000+03:00",\
\
"printed_count": 1,\
\
"sum": 13,\
\
"type": {"id": 0,\
\
"title": "Sale operation"\
\
},\
\
"status": {"id": 1,\
\
"title": "Successfully"\
\
},\
\
"document": {"id": 2045,\
\
"type": 7,\
\
"type_title": "Visit"\
\
},\
\
"cashier": {"id": 746310,\
\
"name": "Jack Smith"\
\
}\
\
}\
\
]

},

"items": [{"id": 0,\
\
"item_id": 1162679,\
\
"item_type_id": 1,\
\
"record_id": 13136569,\
\
"item_title": "Haircut at the TOP-master",\
\
"amount": 2,\
\
"first_cost": 20,\
\
"manual_cost": 10,\
\
"discount": 50,\
\
"cost": 10,\
\
"master_id": 13136569,\
\
"good_id": 0,\
\
"service_id": 1162679,\
\
"event_id": 0,\
\
"is_service": true,\
\
"is_event": false,\
\
"is_good": false\
\
}\
\
]

},

"meta": [ ]

}`

## [tag/Visits/operation/Edit Visit](https://developer.alteg.io/api\#tag/Visits/operation/Edit%20Visit) Edit Visit

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| visit\_id<br>required | number<br>Example: Visit ID |
| record\_id<br>required | number<br>Example: Appointment ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: \*/\*  required

|     |     |
| --- | --- |
| attendance<br>required | number<br>Visit status (2 - The user confirmed the appointment, 1 - The user came, the services were provided, 0 - the user is waiting, -1 - the user did not show) |
| comment<br>required | string<br>A comment |
| new\_transactions | Array of objects<br>Array of objects of new commodity transactions |
| deleted\_transaction\_ids | Array of objects<br>Array of instance IDs |
| goods\_transactions | Array of objects<br>Array of commodity transactions objects |
| services | Array of objects<br>Array of objects with services |
| fast\_payment | number<br>Quick payment 1 - cash, 2 - cashless, 129 - cash and print, 130 - cashless and print |

### Responses

**200**

OK

put/visits/{visit\_id}/{record\_id}

https://api.alteg.io/api/v1/visits/{visit\_id}/{record\_id}

## [tag/Visits/operation/Check PDF for the visit](https://developer.alteg.io/api\#tag/Visits/operation/Check%20PDF%20for%20the%20visit) Check PDF for the visit

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| visit\_id<br>required | number<br>Example: Visit ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/attendance/receipt\_print/{visit\_id}

https://api.alteg.io/api/v1/attendance/receipt\_print/{visit\_id}

### Response samples

- 200

Content type

application/pdf

Copy

```

```

## [tag/Group-events](https://developer.alteg.io/api\#tag/Group-events) Group events

## [tag/Group-events/operation/Create a group event](https://developer.alteg.io/api\#tag/Group-events/operation/Create%20a%20group%20event) Create a group event

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| date<br>required | string <date-time> <br>date and time |
| service\_id<br>required | number<br>Service ID |
| staff\_id<br>required | number<br>staff member ID |
| capacity<br>required | number<br>Capacity |
| resource\_instance\_ids | Array of numbers<br>Array of resource instance IDs |
| force<br>required | boolean<br>Ignore errors (busy master/resources, etc.) |
| length | number<br>Event duration in seconds |

### Responses

**200**

OK

post/activity/{company\_id}

https://api.alteg.io/api/v1/activity/{company\_id}

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"date": "2017-10-10 15:30",

"service_id": 1185299,

"staff_id": 26427,

"length": 3600,

"capacity": 9,

"resource_instance_ids": [3127\
\
],

"force": false

}`

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 108,

"salon_id": 4564,

"service_id": 1185299,

"staff_id": 26427,

"date": "2025-09-21T23:00:00.000+03:00",

"length": 3600,

"capacity": 9,

"records_count": 0,

"color": "",

"font_color": "",

"service": {"id": 1185299,

"title": "Group manicure",

"category_id": 754917

},

"staff": {"id": 26427,

"name": "Monica Bellucci",

"company_id": 4564

},

"resource_instances": [{"id": 3127,\
\
"title": "Manicure machine #1",\
\
"resource_id": 1364\
\
}\
\
]

},

"meta": [ ]

}`

## [tag/Group-events/operation/Reading a Group Event](https://developer.alteg.io/api\#tag/Group-events/operation/Reading%20a%20Group%20Event) Reading a Group Event

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| activity\_id<br>required | number<br>group event ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/activity/{company\_id}/{activity\_id}

https://api.alteg.io/api/v1/activity/{company\_id}/{activity\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 108,

"salon_id": 4564,

"service_id": 1185299,

"staff_id": 26427,

"date": "2025-09-21T23:00:00.000+03:00",

"length": 3600,

"capacity": 9,

"records_count": 0,

"color": "",

"font_color": "",

"service": {"id": 1185299,

"title": "Group manicure",

"category_id": 754917

},

"staff": {"id": 26427,

"name": "Monica Bellucci",

"company_id": 4564

},

"resource_instances": [{"id": 3127,\
\
"title": "Manicure machine #1",\
\
"resource_id": 1364\
\
}\
\
]

},

"meta": [ ]

}`

## [tag/Group-events/operation/Group event update](https://developer.alteg.io/api\#tag/Group-events/operation/Group%20event%20update) Group event update

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| activity\_id<br>required | number<br>Group Event ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| date<br>required | string <date-time> <br>date and time |
| service\_id<br>required | number<br>Service ID |
| staff\_id<br>required | number<br>staff member ID |
| capacity<br>required | number<br>Capacity |
| resource\_instance\_ids | Array of numbers<br>Array of resource instance IDs |
| force<br>required | boolean<br>Ignore errors (busy master/resources, etc.) |
| length | number<br>Event duration in seconds |

### Responses

**200**

OK

put/activity/{company\_id}/{activity\_id}

https://api.alteg.io/api/v1/activity/{company\_id}/{activity\_id}

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"date": "2017-10-10 15:30",

"service_id": 1185299,

"staff_id": 26427,

"length": 3600,

"capacity": 9,

"resource_instance_ids": [3127\
\
],

"force": false

}`

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 108,

"salon_id": 4564,

"service_id": 1185299,

"staff_id": 26427,

"date": "2025-09-21T23:00:00.000+03:00",

"length": 3600,

"capacity": 9,

"records_count": 0,

"color": "",

"font_color": "",

"service": {"id": 1185299,

"title": "Group manicure",

"category_id": 754917

},

"staff": {"id": 26427,

"name": "Monica Bellucci",

"company_id": 4564

},

"resource_instances": [{"id": 3127,\
\
"title": "Manicure machine #1",\
\
"resource_id": 1364\
\
}\
\
]

},

"meta": [ ]

}`

## [tag/Group-events/operation/Deleting a Group Event](https://developer.alteg.io/api\#tag/Group-events/operation/Deleting%20a%20Group%20Event) Deleting a Group Event

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| activity\_id<br>required | number<br>group event ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**202**

Accepted

delete/activity/{company\_id}/{activity\_id}

https://api.alteg.io/api/v1/activity/{company\_id}/{activity\_id}

### Response samples

- 202

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"meta": {"message": "Accepted"

}

}`

## [tag/Group-events/operation/api.location.activity.filters](https://developer.alteg.io/api\#tag/Group-events/operation/api.location.activity.filters) Group events search filters

##### Authorizations:

_BearerPartner_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |

##### query Parameters

|     |     |
| --- | --- |
| service\_ids | Array of integers<br>Example: service\_ids=123<br>Filter by services IDs. |
| staff\_ids | Array of integers<br>Example: staff\_ids=456<br>Filter by staff IDs. |
| resource\_ids | Array of integers<br>Example: resource\_ids=789<br>Filter by resources IDs. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

### Responses

**200**

OK

get/activity/{company\_id}/filters/

https://api.alteg.io/api/v1/activity/{company\_id}/filters/

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"code": "staff",\
\
"title": "Staff",\
\
"data": [{"id": 1,\
\
"title": "Staff 1",\
\
"is_disabled": true\
\
},\
\
{"id": 2,\
\
"title": "Staff 2",\
\
"is_disabled": false\
\
}\
\
]\
\
},\
\
{"code": "service",\
\
"title": "Service",\
\
"data": [{"id": 1,\
\
"title": "Service 1",\
\
"is_disabled": true\
\
},\
\
{"id": 2,\
\
"title": "Service 2",\
\
"is_disabled": false\
\
}\
\
]\
\
},\
\
{"code": "resource",\
\
"title": "Resource",\
\
"data": [{"id": 1,\
\
"title": "Resource 1",\
\
"is_disabled": true\
\
},\
\
{"id": 2,\
\
"title": "Resource 2",\
\
"is_disabled": false\
\
}\
\
]\
\
},\
\
{"code": "service_category",\
\
"title": "Service category",\
\
"data": [{"id": 1,\
\
"title": "Category 1",\
\
"is_disabled": true\
\
},\
\
{"id": 2,\
\
"title": "Category 2",\
\
"is_disabled": false\
\
}\
\
]\
\
}\
\
],

"meta": {"count": 4

}

}`

## [tag/Group-events/operation/api.location.activity.search_dates_range](https://developer.alteg.io/api\#tag/Group-events/operation/api.location.activity.search_dates_range) Finding dates range for group events

##### Authorizations:

_BearerPartner_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |

##### query Parameters

|     |     |
| --- | --- |
| service\_ids | Array of integers<br>Example: service\_ids=123<br>Filter by services IDs. |
| staff\_ids | Array of integers<br>Example: staff\_ids=456<br>Filter by staff IDs. |
| resource\_ids | Array of integers<br>Example: resource\_ids=789<br>Filter by resources IDs. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

### Responses

**200**

OK

get/activity/{company\_id}/search\_dates\_range/

https://api.alteg.io/api/v1/activity/{company\_id}/search\_dates\_range/

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"min_date": "2023-06-01",

"max_date": "2023-07-15"

},

"meta": [ ]

}`

## [tag/Group-events/operation/api.location.activity.search_dates](https://developer.alteg.io/api\#tag/Group-events/operation/api.location.activity.search_dates) Finding dates for group events

##### Authorizations:

_BearerPartner_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |

##### query Parameters

|     |     |
| --- | --- |
| from<br>required | string<br>Example: from=2023-06-01<br>Search start date (YYYY-MM-DD format). |
| till<br>required | string<br>Example: till=2023-07-15<br>Search end date (YYYY-MM-DD format). |
| service\_ids | Array of integers<br>Example: service\_ids=123<br>Filter by services IDs. |
| staff\_ids | Array of integers<br>Example: staff\_ids=456<br>Filter by staff IDs. |
| resource\_ids | Array of integers<br>Example: resource\_ids=789<br>Filter by resources IDs. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

### Responses

**200**

OK

get/activity/{company\_id}/search\_dates/

https://api.alteg.io/api/v1/activity/{company\_id}/search\_dates/

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": ["2023-06-01",\
\
"2023-06-02",\
\
"2023-06-08",\
\
"2023-07-04",\
\
"2023-07-15"\
\
],

"meta": [ ]

}`

## [tag/Group-events/operation/api.location.activity.search](https://developer.alteg.io/api\#tag/Group-events/operation/api.location.activity.search) Group Event Search

##### Authorizations:

_BearerPartner_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |

##### query Parameters

|     |     |
| --- | --- |
| from<br>required | string<br>Example: from=2023-06-01<br>Search start date (YYYY-MM-DD format). |
| till<br>required | string<br>Example: till=2023-07-15<br>Search end date (YYYY-MM-DD format). |
| service\_ids | Array of integers<br>Example: service\_ids=123<br>Filter by services IDs. |
| staff\_ids | Array of integers<br>Example: staff\_ids=456<br>Filter by staff IDs. |
| resource\_ids | Array of integers<br>Example: resource\_ids=789<br>Filter by resources IDs. |
| page | number<br>Example: page=1<br>Page number (default 1). |
| count | number<br>Example: count=25<br>Page size (default 25). |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

### Responses

**200**

OK

get/activity/{company\_id}/search/

https://api.alteg.io/api/v1/activity/{company\_id}/search/

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 3480140,\
\
"service_id": 5243360,\
\
"company_id": 68570,\
\
"staff_id": 921105,\
\
"date": "2025-09-21T23:00:00.000+03:00",\
\
"length": 3600,\
\
"capacity": 40,\
\
"records_count": 0,\
\
"color": "",\
\
"instructions": "",\
\
"stream_link": "",\
\
"font_color": "",\
\
"notified": false,\
\
"prepaid": "forbidden",\
\
"service": {"id": 5243360,\
\
"category_id": 5092305,\
\
"title": "Lecture on psychoanalysis",\
\
"price_min": 500,\
\
"price_max": 500,\
\
"comment": "Not",\
\
"image_url": "",\
\
"salon_service_id": 5792535,\
\
"prepaid": "forbidden",\
\
"category": {"id": 5092305,\
\
"category_id": 1,\
\
"title": "Psychoanalysis"\
\
}\
\
},\
\
"staff": {"id": 921105,\
\
"name": "Natalie",\
\
"company_id": 68570,\
\
"specialization": "Psychotherapist",\
\
"rating": 4.57,\
\
"show_rating": 0,\
\
"avatar": "https://app.alteg.io/images/no-master-sm.png",\
\
"avatar_big": "https://app.alteg.io/images/no-master-sm.png",\
\
"comments_count": 7,\
\
"votes_count": 0,\
\
"average_score": 4.57,\
\
"prepaid": "forbidden",\
\
"position": {"id": 123340,\
\
"title": "Psychotherapist"\
\
}\
\
},\
\
"resource_instances": [{"id": 83030,\
\
"title": "Psychotherapist's office. #one",\
\
"resource_id": 34895\
\
}\
\
],\
\
"labels": [ ]\
\
}\
\
],

"meta": {"count": 1

}

}`

## [tag/Group-events/operation/Search for group services](https://developer.alteg.io/api\#tag/Group-events/operation/Search%20for%20group%20services) Search for group services

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 4564<br>location ID |

##### query Parameters

|     |     |
| --- | --- |
| staff\_id | number<br>staff member ID to filter |
| term | string<br>Search by name or part of the service name |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| staff\_id | number<br>staff member ID to filter |
| term | string<br>Search by name or part of the service name |

### Responses

**200**

OK

get/activity/{company\_id}/services?staff\_id=1&term=test

https://api.alteg.io/api/v1/activity/{company\_id}/services?staff\_id=1&term=test

### Request samples

- Payload

Content type

application/json

Copy

`{"staff_id": 1,

"term": "test"

}`

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 1209148,\
\
"title": "Fitness test",\
\
"capacity": 5,\
\
"price_min": 2,\
\
"price_max": 3,\
\
"is_multi": true,\
\
"category": {"id": 1285356,\
\
"title": "Group services"\
\
},\
\
"staff": [{"id": 37695,\
\
"name": "Kim Kardashian",\
\
"length": 7200\
\
}\
\
],\
\
"resources": [{"id": 464,\
\
"title": "massage room",\
\
"salon_id": 4564\
\
}\
\
]\
\
}\
\
],

"meta": {"count": 1

}

}`

## [tag/Group-events/operation/Getting Duplication Strategies for Group Events](https://developer.alteg.io/api\#tag/Group-events/operation/Getting%20Duplication%20Strategies%20for%20Group%20Events) Getting Duplication Strategies for Group Events

Duplication of events occurs based on a set of parameters combined in the "duplication strategy" entity

| Field | Type | Description |
| --- | --- | --- |
| title | string | Strategy name |
| repeat\_mode\_id | integer | Repeat mode |
| days | integer\[\] | List of days of the week: 0 Sun, 6 Fri |
| interval | integer | Break in searching for dates, in units of type |
| content\_type | integer | Duplicate appointments? 1 - no, 2 - yes |

The repeat mode can take the values

| Meaning | Description | Break unit |
| --- | --- | --- |
| 1 | Daily | Day |
| 2 | Weekdays | - |
| 3 | Mon Wed Fri | - |
| 4 | Tue Thu | - |
| 5 | Every week | Week |
| 6 | Every month | Month |
| 7 | Every year | Year |

The days field is relevant only for mode 5 - week, for specifying specific days of repetition
If you specify repeat\_mode = 5, days = \[1,4\], interval = 2, then the event will be
repeat every 3rd week on mon and thurs

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 4564<br>location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/activity/{company\_id}/duplication\_strategy

https://api.alteg.io/api/v1/activity/{company\_id}/duplication\_strategy

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 2,\
\
"company_id": 4564,\
\
"title": "test pattern",\
\
"repeat_mode_id": 1,\
\
"repeat_mode": {"id": 1,\
\
"title": "Daily"\
\
},\
\
"days": [ ],\
\
"interval": 0,\
\
"content_type": 1\
\
}\
\
],

"meta": {"count": 1

}

}`

## [tag/Group-events/operation/Create a Duplicate Group Event Template](https://developer.alteg.io/api\#tag/Group-events/operation/Create%20a%20Duplicate%20Group%20Event%20Template) Create a Duplicate Group Event Template

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: \*/\*  optional

|     |     |
| --- | --- |
| title<br>required | string<br>Name |
| days | Array of objects<br>Recurrence Days for Weekly Mode |
| repeat\_mode\_id<br>required | number<br>Repeat Mode |
| interval | number<br>Break in searching for dates |
| content\_type | number<br>Duplicate appointments? 1 - no, 2 - yes |

### Responses

**200**

OK

post/activity/{company\_id}/duplication\_strategy

https://api.alteg.io/api/v1/activity/{company\_id}/duplication\_strategy

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 3,

"company_id": 4564,

"title": "Test duplication strategy",

"repeat_mode_id": 5,

"repeat_mode": {"id": 5,

"title": "Every week"

},

"days": [1,\
\
4\
\
],

"interval": 2,

"content_type": 1

},

"meta": [ ]

}`

## [tag/Group-events/operation/Group Event Duplicate Template Update](https://developer.alteg.io/api\#tag/Group-events/operation/Group%20Event%20Duplicate%20Template%20Update) Group Event Duplicate Template Update

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 4564<br>location ID |
| strategy\_id<br>required | number<br>Example: 3<br>Replication strategy ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: \*/\*  optional

|     |     |
| --- | --- |
| title<br>required | string<br>Name |
| days | Array of objects<br>Recurrence Days for Weekly Mode |
| repeat\_mode\_id<br>required | number<br>Repeat Mode |
| interval | number<br>Break in searching for dates |
| content\_type | number<br>Duplicate appointments? 1 - no, 2 - yes |

### Responses

**200**

OK

post/activity/{company\_id}/duplication\_strategy/{strategy\_id}

https://api.alteg.io/api/v1/activity/{company\_id}/duplication\_strategy/{strategy\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 3,

"company_id": 4564,

"title": "New test duplication strategy",

"repeat_mode_id": 5,

"repeat_mode": {"id": 5,

"title": "Every week"

},

"days": [2,\
\
3\
\
],

"interval": 3,

"content_type": 1

},

"meta": [ ]

}`

## [tag/Group-events/operation/Group Event Duplicate Request](https://developer.alteg.io/api\#tag/Group-events/operation/Group%20Event%20Duplicate%20Request) Group Event Duplicate Request

A request for duplication can be made in 3 ways:

- Specifying a list of dates and times to duplicate

- Specifying the id of the repetition strategy

- By specifying all repetition parameters


##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 1 |
| activity\_id<br>required | number<br>Example: 2 |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: application/json  optional

object

### Responses

**200**

OK

**409**

Conflict

post/activity/{company\_id}/{activity\_id}/duplicate/

https://api.alteg.io/api/v1/activity/{company\_id}/{activity\_id}/duplicate/

### Request samples

- Payload

Content type

application/json

Copy

`{ }`

### Response samples

- 200
- 409

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 9182,\
\
"service_id": 1209148,\
\
"salon_id": 4564,\
\
"master_id": 1000265,\
\
"date": "2025-09-21T23:00:00.000+03:00",\
\
"length": 7200,\
\
"capacity": 5,\
\
"records_count": 0,\
\
"color": "",\
\
"instructions": "",\
\
"stream_link": "",\
\
"font_color": "",\
\
"notified": false,\
\
"timestamp": "2025-09-21T23:00:00.000+03:00",\
\
"service": {"id": 1209148,\
\
"category_id": 1285356,\
\
"title": "Fitness \"test\"",\
\
"price_min": 2,\
\
"price_max": 3,\
\
"prepaid": "forbidden"\
\
},\
\
"resource_instances": [{"id": 1094,\
\
"title": "Massage room 1st floor",\
\
"resource_id": 464\
\
}\
\
],\
\
"master": {"id": 1000265,\
\
"name": "Master",\
\
"company_id": 4564,\
\
"specialization": "321",\
\
"rating": 0,\
\
"show_rating": 1,\
\
"prepaid": "allowed",\
\
"position": [ ]\
\
},\
\
"records": [ ],\
\
"labels": [ ]\
\
}\
\
],

"meta": {"count": 2

}

}`

## [tag/Dates-in-the-Appointment-Calendar](https://developer.alteg.io/api\#tag/Dates-in-the-Appointment-Calendar) Dates in the Appointment Calendar

## [tag/Dates-in-the-Appointment-Calendar/operation/Get a list of dates for Appointment Calendar](https://developer.alteg.io/api\#tag/Dates-in-the-Appointment-Calendar/operation/Get%20a%20list%20of%20dates%20for%20Appointment%20Calendar) Get a list of dates for Appointment Calendar

The Appointment Calendar dates are returned as an array of date strings, for example: \["2015-10-26", "2015-10-30"\]. To retrieve this list, you must provide a reference date. The response will return the available working dates of the specified location or staff member relative to that date

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| date<br>required | string<br>date in iso8601 format.<br>Filter by appointment date (eg '2015-09-30') |

##### query Parameters

|     |     |
| --- | --- |
| staff\_id | number<br>staff member ID. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/timetable/dates/{company\_id}/{date}

https://api.alteg.io/api/v1/timetable/dates/{company\_id}/{date}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": ["2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00",\
\
"2025-09-21T23:00:00.000+03:00"\
\
],

"meta": [ ]

}`

## [tag/Comments](https://developer.alteg.io/api\#tag/Comments) Comments

## [tag/Comments/operation/Get comments](https://developer.alteg.io/api\#tag/Comments/operation/Get%20comments) Get comments

The comment object has the following fields:

| Field | Type | Description |
| --- | --- | --- |
| id | number | Comment ID |
| salon\_id | number | location ID |
| type | number | 1 - comment to the specialist, 0 - to the salon |
| master\_id | number | Specialist ID if type = 1 |
| text | string | Comment text |
| date | string | Date when the comment was left |
| rating | number | Rating (from 1 to 5) |
| user\_id | number | Id of the user who left the comment |
| username | string | Name of the user who left the comment |
| user\_avatar | string | Avatar of the user who left the comment |
| record\_id | number | ID of the post after which the review was left (the value will be non-zero if the review was left through a link asking for a review after the visit) |

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### query Parameters

|     |     |
| --- | --- |
| start\_date | string<br>date in iso8601 format.<br>Filter by date since (for example '2015-09-30') |
| end\_date | string<br>date in iso8601 format.<br>Filter by date by (for example '2015-09-30') |
| staff\_id | number<br>staff member ID |
| rating | number<br>Rating score. Filter by reviews with a specific rating. |
| page | number<br>Page number |
| count | number<br>Number of reviews per page |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/comments/{company\_id}/

https://api.alteg.io/api/v1/comments/{company\_id}/

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": "18437",\
\
"type": "1",\
\
"master_id": "8864",\
\
"text": "Fine!",\
\
"date": "2025-09-21T23:00:00.000+03:00",\
\
"rating": "4",\
\
"user_id": "157169",\
\
"user_name": "Victor Sitnikov",\
\
"user_avatar": "/images/no-master.png",\
\
"record_id": 100001\
\
}\
\
],

"meta": [ ]

}`

## [tag/Comments/operation/Leave a Comment](https://developer.alteg.io/api\#tag/Comments/operation/Leave%20a%20Comment) Leave a Comment

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| staff\_id<br>required | number<br>staff member ID, specify when creating a review for a staff member |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| mark<br>required | number<br>Rating from 1 to 5 |
| text<br>required | string<br>Feedback text |
| name<br>required | string<br>Username to be displayed on the review page |

### Responses

**201**

Created

post/comments/{company\_id}/{staff\_id}

https://api.alteg.io/api/v1/comments/{company\_id}/{staff\_id}

### Request samples

- Payload

Content type

application/json

Copy

`{"mark": "4",

"text": "Everything is very bad!",

"name": "Victor"

}`

### Response samples

- 201

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"type": "1",

"master_id": "8864",

"id": "18437",

"text": "Everything is very bad!",

"date": "2025-09-21T23:00:00.000+03:00",

"rating": "4",

"user_id": "157169",

"user_name": "Victor",

"user_avatar": "/images/no-master.png"

},

"meta": [ ]

}`

## [tag/Company-users](https://developer.alteg.io/api\#tag/Company-users) Company users

## [tag/Company-users/operation/Deprecated. Get company users](https://developer.alteg.io/api\#tag/Company-users/operation/Deprecated.%20Get%20company%20users) Deprecated. Get company users  Deprecated

location User object

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/company\_users/{company\_id}

https://api.alteg.io/api/v1/company\_users/{company\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 224348,\
\
"firstname": "James",\
\
"login": "j.smith",\
\
"email": "j.smith@example.com",\
\
"phone": "+1-315-555-0175",\
\
"information": "Test user",\
\
"access": {"stat_access": true,\
\
"schedule_edit_access": false,\
\
"client_phones_access": false,\
\
"clients_access": false,\
\
"settings_access": false,\
\
"edit_records_access": false,\
\
"timetable_access": true,\
\
"billing_access": false,\
\
"users_access": false,\
\
"excel_access": false,\
\
"finances_access": false,\
\
"storages_access": false,\
\
"send_sms": true,\
\
"master_id": 0\
\
}\
\
},\
\
{"id": 11,\
\
"firstname": "James",\
\
"login": "j.smith",\
\
"email": "j.smith@example.com",\
\
"phone": "+1-315-555-0175",\
\
"information": "Test user",\
\
"access": {"stat_access": true,\
\
"schedule_edit_access": true,\
\
"client_phones_access": true,\
\
"clients_access": true,\
\
"settings_access": true,\
\
"edit_records_access": true,\
\
"timetable_access": true,\
\
"billing_access": true,\
\
"users_access": false,\
\
"excel_access": true,\
\
"finances_access": true,\
\
"storages_access": true,\
\
"send_sms": true,\
\
"master_id": 0\
\
}\
\
}\
\
],

"meta": [ ]

}`

## [tag/Company-users/operation/Get company users](https://developer.alteg.io/api\#tag/Company-users/operation/Get%20company%20users) Get company users

The method allows you to get users of the location.

location User object:

| Attribute | Type | Description |
| --- | --- | --- |
| id | number | User ID |
| name | string | User name |
| phone | string | User phone |
| email | string | User email |
| information | string | User information |
| is\_approved | boolean | Whether the user accepted the invitation to manage the location |
| is\_non\_deletable | boolean | Whether the user is non-deletable |

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### query Parameters

|     |     |
| --- | --- |
| filter\[is\_approved\] | number<br>Example: filter\[is\_approved\]=1<br>Whether the user accepted the invitation to manage the location. 1 - accepted, 0 - not accepted |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

**401**

Unauthorized

**403**

Forbidden

**404**

Not Found

get/company/{company\_id}/users

https://api.alteg.io/api/v1/company/{company\_id}/users

### Response samples

- 200
- 401
- 403
- 404

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 10,\
\
"name": "Bob Williams",\
\
"phone": "+1-315-555-0175",\
\
"email": "b.williams@example.com",\
\
"information": "Manager",\
\
"is_approved": false,\
\
"is_non_deletable": false\
\
},\
\
{"id": 11,\
\
"name": "Oliver Davis",\
\
"phone": "+1-315-555-0176",\
\
"email": "o.davis@example.com",\
\
"information": "Administrator",\
\
"is_approved": true,\
\
"is_non_deletable": true\
\
}\
\
],

"meta": {"count": 2

}

}`

## [tag/Company-users/operation/Remove the user from the company](https://developer.alteg.io/api\#tag/Company-users/operation/Remove%20the%20user%20from%20the%20company) Remove the user from the company

##### Authorizations:

_BearerPartnerUser_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |
| user\_id<br>required | number<br>User ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

### Responses

**204**

No Content

**401**

Unauthorized

**403**

Forbidden

**404**

Not Found

delete/company/{company\_id}/users/{user\_id}

https://api.alteg.io/api/v1/company/{company\_id}/users/{user\_id}

### Response samples

- 401
- 403
- 404

Content type

application/json

Copy
Expand all  Collapse all

`{"success": false,

"data": null,

"meta": {"message": "Authentication needed."

}

}`

## [tag/Checkout](https://developer.alteg.io/api\#tag/Checkout) Checkout

## [tag/Checkout/operation/Get company cash registers](https://developer.alteg.io/api\#tag/Checkout/operation/Get%20company%20cash%20registers) Get company cash registers

The location checkout object has the following fields:

| Field | Type | Description |
| --- | --- | --- |
| id | number | Checkout ID |
| title | string | Title |
| type | number | 1 - for non-cash payments, 0 for cash |
| comment | string | Description to the checkout |

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/accounts/{company\_id}

https://api.alteg.io/api/v1/accounts/{company\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 13881,\
\
"title": "Main cash desk",\
\
"type": 0,\
\
"comment": "Standing at the reception"\
\
},\
\
{"id": 13882,\
\
"title": "Payment account",\
\
"type": 1,\
\
"comment": "For non-cash payments"\
\
},\
\
{"id": 21961,\
\
"title": "Advances",\
\
"type": 0,\
\
"comment": ""\
\
}\
\
],

"meta": [ ]

}`

## [tag/Inventories](https://developer.alteg.io/api\#tag/Inventories) Inventories

## [tag/Inventories/operation/Get company inventories](https://developer.alteg.io/api\#tag/Inventories/operation/Get%20company%20inventories) Get company inventories

The location inventory object has the following fields:

| Field | Type | Description |
| --- | --- | --- |
| id | number | Inventory ID |
| title | string | Title |
| for\_services | number | 1 - if used for automatic write-off of consumables |
| for\_sale | number | 1 - if the default inventory for selling products |
| comment | string | Description of the inventory |

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/storages/{company\_id}

https://api.alteg.io/api/v1/storages/{company\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 1,\
\
"title": "Consumables",\
\
"for_service": 1,\
\
"for_sale": 0,\
\
"comment": "To account for consumables"\
\
},\
\
{"id": 2,\
\
"title": "Products",\
\
"for_service": 0,\
\
"for_sale": 1,\
\
"comment": "To record store sales"\
\
},\
\
{"id": 23061,\
\
"title": "Ors",\
\
"for_service": 0,\
\
"for_sale": 1,\
\
"comment": "Nz"\
\
}\
\
],

"meta": [ ]

}`

## [tag/SMS-mailing](https://developer.alteg.io/api\#tag/SMS-mailing) SMS mailing

## [tag/SMS-mailing/operation/Send SMS to the list of clients](https://developer.alteg.io/api\#tag/SMS-mailing/operation/Send%20SMS%20to%20the%20list%20of%20clients) Send SMS to the list of clients

The object for creating SMS mailing has the following fields:

| Field | Type | Description |
| --- | --- | --- |
| client\_ids | array of numbers | Array of client IDs |
| text | string | SMS text message |

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| client\_ids | Array of numbers<br>Array of client IDs |
| text | string<br>SMS text message |

### Responses

**201**

Created

post/sms/clients/by\_id/{company\_id}

https://api.alteg.io/api/v1/sms/clients/by\_id/{company\_id}

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"client_ids": [1,\
\
2,\
\
3,\
\
4,\
\
5\
\
],

"text": "Dear clients, we congratulate you on being our clients! You are very lucky!"

}`

### Response samples

- 201

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"meta": {"message": "Accepted"

}

}`

## [tag/SMS-mailing/operation/Send SMS campaigns to customers matching the filters](https://developer.alteg.io/api\#tag/SMS-mailing/operation/Send%20SMS%20campaigns%20to%20customers%20matching%20the%20filters) Send SMS campaigns to customers matching the filters

The object for creating SMS mailing has the following fields:

| Field | Type | Description |
| --- | --- | --- |
| text | string | SMS text message |

#### Client filtering

- fullname:'Joh' (optional, string) - Name (part of name) to filter clients
- phone:'7916' (optional, string) - Phone (part of the number) to filter clients
- email:'test@' (optional, string) - Email (part) for client filtering
- card:'5663rt' (optional, string) - Card (part) to filter customers by loyalty card number

Attention: If there are no filters, SMS mailing will go to the entire database!

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### query Parameters

|     |     |
| --- | --- |
| fullname | string<br>Example: fullname='Joh'<br>Name (part of the name) for client filtering |
| phone | string<br>Example: phone='7916'<br>Phone (part of the number) for customer filtering |
| email | string<br>Example: email='test@'<br>Email (part) for customer filtering |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| text | string<br>SMS text message |

### Responses

**201**

Created

post/sms/clients/by\_filter/{company\_id}

https://api.alteg.io/api/v1/sms/clients/by\_filter/{company\_id}

### Request samples

- Payload

Content type

application/json

Copy

`{"text": "Dear clients, we congratulate you on being our clients! You are very lucky!"

}`

### Response samples

- 201

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"meta": {"message": "Accepted"

}

}`

## [tag/Email-newsletter](https://developer.alteg.io/api\#tag/Email-newsletter) Email newsletter

## [tag/Email-newsletter/operation/Send Email newsletter according to the list of clients](https://developer.alteg.io/api\#tag/Email-newsletter/operation/Send%20Email%20newsletter%20according%20to%20the%20list%20of%20clients) Send Email newsletter according to the list of clients

The object for creating an Email campaign has the following fields:

| Field | Type | Description |
| --- | --- | --- |
| client\_ids | array of numbers | Array of client IDs |
| text | string | Text Email Message |
| subject | string | Email Subject |

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| client\_ids<br>required | Array of numbers<br>Array of client IDs |
| subject<br>required | string<br>Email Subject |
| text<br>required | string<br>Email text |

### Responses

**201**

Created

post/email/clients/by\_id/{company\_id}

https://api.alteg.io/api/v1/email/clients/by\_id/{company\_id}

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"client_ids": [1,\
\
2,\
\
3,\
\
4,\
\
5\
\
],

"subject": "Important!",

"text": "Dear clients, we congratulate you on being our clients! You are very lucky!"

}`

### Response samples

- 201

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"meta": {"message": "Accepted"

}

}`

## [tag/Email-newsletter/operation/Send email campaigns for clients matching the filters](https://developer.alteg.io/api\#tag/Email-newsletter/operation/Send%20email%20campaigns%20for%20clients%20matching%20the%20filters) Send email campaigns for clients matching the filters

The object for creating an Email campaign has the following fields:

| Field | Type | Description |
| --- | --- | --- |
| text | string | Text Email Message |
| subject | string | Email Subject |

#### Client filtering

- fullname:'Joh' (optional, string) - Name (part of name) to filter clients
- phone:'7916' (optional, string) - Phone (part of the number) to filter clients
- email:'test@' (optional, string) - Email (part) for client filtering
- card:'5663rt' (optional, string) - Card (part) to filter customers by loyalty card number

Attention: If there are no filters, email distribution will go to the entire database!

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### query Parameters

|     |     |
| --- | --- |
| fullname | string<br>Example: fullname='Joh'<br>Name (part of the name) for client filtering |
| phone | string<br>Example: phone='7916'<br>Phone (part of the number) for customer filtering |
| email | string<br>Example: email='test@'<br>Email (part) for customer filtering |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| subject<br>required | string<br>Email Subject |
| text<br>required | string<br>Email text |

### Responses

**201**

Created

post/email/clients/by\_filter/{company\_id}

https://api.alteg.io/api/v1/email/clients/by\_filter/{company\_id}

### Request samples

- Payload

Content type

application/json

Copy

`{"subject": "Important!",

"text": "Dear clients, we congratulate you on being our clients! You are very lucky!"

}`

### Response samples

- 201

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"meta": {"message": "Accepted"

}

}`

## [tag/Financial-Transactions](https://developer.alteg.io/api\#tag/Financial-Transactions) Financial Transactions

## [tag/Financial-Transactions/operation/Get transactions](https://developer.alteg.io/api\#tag/Financial-Transactions/operation/Get%20transactions) Get transactions

#### Transaction filtering

- page: Page number

- count: Number of customers per page

- account\_id: Checkout ID

- supplier\_id: Supplier ID

- client\_id: Client ID

- user\_id: user ID

- master\_id: staff member ID

- type: transaction type

- real\_money: Indicates whether this is a real-money (fiat) transaction

- deleted: whether the transaction was deleted

- start\_date: start date of the period

- end\_date: end date of the period

- balance\_is: 0 - any balance, 1 - positive, 2 - negative

- document\_id: document ID


##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### query Parameters

|     |     |
| --- | --- |
| page | number<br>Example: page=1<br>Page number |
| count | number<br>Example: count=50<br>Number of customers per page |
| account\_id | number<br>Example: account\_id=0<br>Checkout ID |
| supplier\_id | number<br>Example: supplier\_id=0<br>Supplier ID |
| client\_id | number<br>Example: client\_id=0<br>Client ID |
| user\_id | number<br>Example: user\_id=0<br>User ID |
| master\_id | number<br>Example: master\_id=0<br>staff member ID |
| type | number<br>Example: type=0<br>transaction type |
| real\_money | number<br>Example: real\_money=0<br>Indicates whether this is a real-money (fiat) transaction |
| deleted | number<br>Example: deleted=0<br>whether the transaction was deleted |
| start\_date | number<br>Example: start\_date=''<br>period start date |
| end\_date | number<br>Example: end\_date=''<br>period end date |
| balance\_is | number<br>Example: balance\_is=0<br>0 - any balance, 1 - positive, 2 - negative |
| document\_id | number<br>Example: document\_id=0<br>document ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/transactions/{company\_id}

https://api.alteg.io/api/v1/transactions/{company\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": "4815162342",\
\
"document_id": 22256641,\
\
"expense": {"id": "5",\
\
"title": "Provision of services"\
\
},\
\
"date": "2016-04-13T15:34:31+0400",\
\
"amount": "1000.00",\
\
"comment": "Comment",\
\
"master": {"id": "1926",\
\
"title": "Sweeney Todd"\
\
},\
\
"supplier": {"id": "1968",\
\
"title": "George"\
\
},\
\
"account": {"id": "23182",\
\
"title": "Cards"\
\
},\
\
"client": {"id": "481516",\
\
"name": "John Turk",\
\
"phone": 79876543210\
\
},\
\
"last_change_date": "2020-02-01T12:00:00+0400",\
\
"record_id": 308786662,\
\
"visit_id": 262551993,\
\
"sold_item_id": 7134634,\
\
"sold_item_type": "service"\
\
}\
\
],

"meta": [ ]

}`

## [tag/Financial-Transactions/paths/~1timetable~1transactions~1{company_id}/get](https://developer.alteg.io/api\#tag/Financial-Transactions/paths/~1timetable~1transactions~1{company_id}/get) Get Transactions by Visit or Appointment ID

#### Transaction filtering

- record\_id: record ID

- visit\_id: ID of the visit


##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### query Parameters

|     |     |
| --- | --- |
| record\_id | number<br>Example: record\_id=0<br>Appointment ID |
| visit\_id | number<br>Example: visit\_id=0<br>Visit ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/timetable/transactions/{company\_id}

https://api.alteg.io/api/v1/timetable/transactions/{company\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": "4815162342",\
\
"document_id": 22256641,\
\
"expense": {"id": "5",\
\
"title": "Provision of services"\
\
},\
\
"date": "2016-04-13T15:34:31+0400",\
\
"amount": "1000.00",\
\
"comment": "Comment",\
\
"master": {"id": "1926",\
\
"title": "Sweeney Todd"\
\
},\
\
"supplier": {"id": "1968",\
\
"title": "George"\
\
},\
\
"account": {"id": "23182",\
\
"title": "Cards"\
\
},\
\
"client": {"id": "481516",\
\
"name": "John Turk",\
\
"phone": 79876543210\
\
},\
\
"last_change_date": "2020-02-01T12:00:00+0400",\
\
"record_id": 308786662,\
\
"visit_id": 262551993,\
\
"sold_item_id": 7134634,\
\
"sold_item_type": "service"\
\
}\
\
],

"meta": [ ]

}`

## [tag/Financial-Transactions/operation/Create a Financial Transaction](https://developer.alteg.io/api\#tag/Financial-Transactions/operation/Create%20a%20Financial%20Transaction) Create a Financial Transaction

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| expense\_id | number<br>Payment item |
| amount | number <float> <br>Transaction amount |
| account\_id | number<br>Checkout ID |
| client\_id | number<br>Client ID |
| supplier\_id | number<br>Supplier ID |
| master\_id | number<br>staff member ID |
| comment | number<br>A comment |
| date | string <date-time> <br>Transaction creation date |

### Responses

**200**

OK

post/finance\_transactions/{company\_id}

https://api.alteg.io/api/v1/finance\_transactions/{company\_id}

### Request samples

- Payload

Content type

application/json

Copy

`{"expense_id": 2640,

"amount": 100,

"account_id": 39105,

"client_id": 4240788,

"supplier_id": 0,

"master_id": 0,

"comment": "Transaction comment",

"date": "2025-09-21T23:00:00.000+03:00"

}`

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 277016617,

"document_id": 0,

"date": "2025-09-21T23:00:00.000+03:00",

"type_id": 5,

"expense_id": 5,

"account_id": 774020,

"amount": 100,

"client_id": 51520012,

"master_id": 921395,

"supplier_id": 0,

"comment": "Transaction comment",

"item_id": 0,

"target_type_id": 0,

"record_id": 0,

"goods_transaction_id": 0,

"expense": {"id": 5,

"title": "Provision of services"

},

"account": {"id": 774020,

"title": "Archive cash desk",

"is_cash": true,

"is_default": false

},

"client": {"id": 51520012,

"name": "Sweeney Todd",

"phone": "+1-315-555-0175",

"email": "mail@example.com"

},

"master": {"id": 921395,

"name": "Valeria"

},

"supplier": [ ]

},

"meta": [ ]

}`

## [tag/Financial-Transactions/operation/Receiving a financial transaction](https://developer.alteg.io/api\#tag/Financial-Transactions/operation/Receiving%20a%20financial%20transaction) Receiving a financial transaction

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| transaction\_id<br>required | number<br>transaction ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/finance\_transactions/{company\_id}/{transaction\_id}

https://api.alteg.io/api/v1/finance\_transactions/{company\_id}/{transaction\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": "4815162342",\
\
"document_id": 22256641,\
\
"expense": {"id": "5",\
\
"title": "Provision of services"\
\
},\
\
"date": "2016-04-13T15:34:31+0400",\
\
"amount": "1000.00",\
\
"comment": "Comment",\
\
"master": {"id": "1926",\
\
"title": "Sweeney Todd"\
\
},\
\
"supplier": {"id": "1968",\
\
"title": "George"\
\
},\
\
"account": {"id": "23182",\
\
"title": "Cards"\
\
},\
\
"client": {"id": "481516",\
\
"name": "John Turk",\
\
"phone": 79876543210\
\
},\
\
"last_change_date": "2020-02-01T12:00:00+0400",\
\
"record_id": 308786662,\
\
"visit_id": 262551993,\
\
"sold_item_id": 7134634,\
\
"sold_item_type": "service"\
\
}\
\
],

"meta": [ ]

}`

## [tag/Financial-Transactions/operation/Financial Transaction Update](https://developer.alteg.io/api\#tag/Financial-Transactions/operation/Financial%20Transaction%20Update) Financial Transaction Update

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| transaction\_id<br>required | number<br>transaction ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: \*/\*  required

|     |     |
| --- | --- |
| expense\_id | number<br>Payment item |
| amount | number <float> <br>Transaction amount |
| account\_id | number<br>Checkout ID |
| client\_id | number<br>Client ID |
| supplier\_id | number<br>Supplier ID |
| master\_id | number<br>staff member ID |
| comment | number<br>A comment |
| date | string <date-time> <br>Transaction creation date |

### Responses

**200**

OK

put/finance\_transactions/{company\_id}/{transaction\_id}

https://api.alteg.io/api/v1/finance\_transactions/{company\_id}/{transaction\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": "4815162342",\
\
"document_id": 22256641,\
\
"expense": {"id": "5",\
\
"title": "Provision of services"\
\
},\
\
"date": "2016-04-13T15:34:31+0400",\
\
"amount": "1000.00",\
\
"comment": "Comment",\
\
"master": {"id": "1926",\
\
"title": "Sweeney Todd"\
\
},\
\
"supplier": {"id": "1968",\
\
"title": "George"\
\
},\
\
"account": {"id": "23182",\
\
"title": "Cards"\
\
},\
\
"client": {"id": "481516",\
\
"name": "John Turk",\
\
"phone": 79876543210\
\
},\
\
"last_change_date": "2020-02-01T12:00:00+0400",\
\
"record_id": 308786662,\
\
"visit_id": 262551993,\
\
"sold_item_id": 7134634,\
\
"sold_item_type": "service"\
\
}\
\
],

"meta": [ ]

}`

## [tag/Financial-Transactions/paths/~1finance_transactions~1{company_id}~1{transaction_id}/delete](https://developer.alteg.io/api\#tag/Financial-Transactions/paths/~1finance_transactions~1{company_id}~1{transaction_id}/delete) Deleting a transaction

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| transaction\_id<br>required | number<br>transaction ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**202**

Accepted

delete/finance\_transactions/{company\_id}/{transaction\_id}

https://api.alteg.io/api/v1/finance\_transactions/{company\_id}/{transaction\_id}

## [tag/Loyalty-Cards](https://developer.alteg.io/api\#tag/Loyalty-Cards) Loyalty Cards

## [tag/Loyalty-Cards/operation/Get a list of card types available at the location](https://developer.alteg.io/api\#tag/Loyalty-Cards/operation/Get%20a%20list%20of%20card%20types%20available%20at%20the%20location) Get a list of card types available at the location

Returns a list of card types that are valid for the given location.

The attributes and their descriptions match those defined in the "Collection of Card Types Available to the Client" method described above.

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 12345<br>location ID |

### Responses

**200**

OK

get/loyalty/card\_types/salon/{company\_id}

https://api.alteg.io/api/v1/loyalty/card\_types/salon/{company\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`[{"id": 10992,\
\
"title": "Cashback",\
\
"salon_group_id": 145071,\
\
"salon_group": {"id": 145071,\
\
"title": "Chain 1"\
\
}\
\
},\
\
{"id": 8230,\
\
"title": "Referral program",\
\
"salon_group_id": 145071,\
\
"salon_group": {"id": 145071,\
\
"title": "Chain 1"\
\
}\
\
}\
\
]`

## [tag/Loyalty-Cards/operation/Get a List of Customer Cards by Phone Number](https://developer.alteg.io/api\#tag/Loyalty-Cards/operation/Get%20a%20List%20of%20Customer%20Cards%20by%20Phone%20Number) Get a List of Customer Cards by Phone Number

Returns a list of customer cards with programs that are active in this location

| Attribute | Type | Description |
| --- | --- | --- |
| id | int | Loyalty card ID |
| balance | decimal | Loyalty card balance |
| paid\_amount | decimal | Amount "Paid" |
| sold\_amount | decimal | Amount "Sold" |
| visits\_count | int | Number of visits |
| number | string | Card number |
| type\_id | int | Loyalty card type identifier |
| salon\_group\_id | int | ID of the chain where the card was created |
| type | object | Object that contains the "id" and "title" fields: card type identifier and name |
| salon\_group | object | Object that contains the "id" and "title" fields: identifier of the chain where the card type was created and the name of this chain |
| programs | array | Array with information about promotions linked to a loyalty card |
| rules | array | Array with information about the rules configured in the action |

The programs array consists of objects with the following fields:

| Attribute | Type | Description |
| --- | --- | --- |
| id | int | Promotion ID |
| title | string | Action name |
| loyalty\_type\_id | int | Promotion type ID |
| item\_type\_id | int | Is cashback accrued from products |
| value\_unit\_id | int | Bonus field — Discount % or Fixed amount |
| group\_id | int | ID of the chain where the action was created |
| loyalty\_type | object | Object with information about the action |

The rules array consists of objects with the following fields:

| Attribute | Type | Description |
| --- | --- | --- |
| id | int | Rule ID |
| loyalty\_program\_id | int | Identifier of the promotion to which the rule is attached |
| loyalty\_type\_id | int | Promotion type ID |
| value | decimal | Value from which the rule will work |

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| phone<br>required | string<br>Customer phone number in the format 380000000000 |
| group\_id<br>required | number<br>Chain ID |
| company\_id<br>required | number<br>Location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/loyalty/cards/{phone}/{group\_id}/{company\_id}

https://api.alteg.io/api/v1/loyalty/cards/{phone}/{group\_id}/{company\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"id": 9210520,

"balance": 100,

"points": 0,

"paid_amount": 1000,

"sold_amount": 1000,

"visits_count": 1,

"number": 14507109210520,

"type_id": 10992,

"salon_group_id": 145071,

"type": {"id": 10992,

"title": "5+2",

"salon_group_id": 145071

},

"salon_group": {"id": 145071,

"title": "Dough chain1."

},

"programs": [{"id": 18005,\
\
"title": "5+2",\
\
"value": 0,\
\
"loyalty_type_id": 13,\
\
"item_type_id": 3,\
\
"value_unit_id": 1,\
\
"group_id": 145071,\
\
"loyalty_type": {"id": 13,\
\
"title": "Discount for a given number of accumulated services",\
\
"is_discount": true,\
\
"is_cashback": false,\
\
"is_static": false,\
\
"is_accumulative": false\
\
},\
\
"rules": [{"id": 72803,\
\
"loyalty_program_id": 18005,\
\
"loyalty_type_id": 13,\
\
"value": 20,\
\
"parameter": 0\
\
},\
\
{"id": 72804,\
\
"loyalty_program_id": 18005,\
\
"loyalty_type_id": 13,\
\
"value": 10,\
\
"parameter": 0\
\
},\
\
{"id": 72805,\
\
"loyalty_program_id": 18005,\
\
"loyalty_type_id": 13,\
\
"value": 100,\
\
"parameter": 0\
\
}\
\
]\
\
}\
\
]

}`

## [tag/Loyalty-Cards/operation/Get a List of Customer Cards by ID](https://developer.alteg.io/api\#tag/Loyalty-Cards/operation/Get%20a%20List%20of%20Customer%20Cards%20by%20ID) Get a List of Customer Cards by ID

Returns a list of customer cards with programs that are active in this location

The attributes in the response to the request completely match the "Get a list of issued cards by phone number" method described above

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| client\_id<br>required | number<br>Client ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/loyalty/client\_cards/{client\_id}

https://api.alteg.io/api/v1/loyalty/client\_cards/{client\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"id": 9210520,

"balance": 100,

"points": 0,

"paid_amount": 1000,

"sold_amount": 1000,

"visits_count": 1,

"number": 14507109210520,

"type_id": 10992,

"salon_group_id": 145071,

"type": {"id": 10992,

"title": "5+2",

"salon_group_id": 145071

},

"salon_group": {"id": 145071,

"title": "Dough chain1."

},

"programs": [{"id": 18005,\
\
"title": "5+2",\
\
"value": 0,\
\
"loyalty_type_id": 13,\
\
"item_type_id": 3,\
\
"value_unit_id": 1,\
\
"group_id": 145071,\
\
"loyalty_type": {"id": 13,\
\
"title": "Discount for a given number of accumulated services",\
\
"is_discount": true,\
\
"is_cashback": false,\
\
"is_static": false,\
\
"is_accumulative": false\
\
},\
\
"rules": [{"id": 72803,\
\
"loyalty_program_id": 18005,\
\
"loyalty_type_id": 13,\
\
"value": 20,\
\
"parameter": 0\
\
},\
\
{"id": 72804,\
\
"loyalty_program_id": 18005,\
\
"loyalty_type_id": 13,\
\
"value": 10,\
\
"parameter": 0\
\
},\
\
{"id": 72805,\
\
"loyalty_program_id": 18005,\
\
"loyalty_type_id": 13,\
\
"value": 100,\
\
"parameter": 0\
\
}\
\
]\
\
}\
\
]

}`

## [tag/Loyalty-Cards/operation/Get User Loyalty Cards](https://developer.alteg.io/api\#tag/Loyalty-Cards/operation/Get%20User%20Loyalty%20Cards) Get User Loyalty Cards

Returns a list of cards of an authorized user with programs, filtering cards by location chain / location

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| group\_id<br>required | number<br>Chain ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/user/loyalty\_cards/{group\_id}

https://api.alteg.io/api/v1/user/loyalty\_cards/{group\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"id": 9210520,

"balance": 100,

"points": 0,

"paid_amount": 1000,

"sold_amount": 1000,

"visits_count": 1,

"number": 14507109210520,

"type_id": 10992,

"salon_group_id": 145071,

"type": {"id": 10992,

"title": "5+2",

"salon_group_id": 145071

},

"salon_group": {"id": 145071,

"title": "Dough chain1."

},

"programs": [{"id": 18005,\
\
"title": "5+2",\
\
"value": 0,\
\
"loyalty_type_id": 13,\
\
"item_type_id": 3,\
\
"value_unit_id": 1,\
\
"group_id": 145071,\
\
"loyalty_type": {"id": 13,\
\
"title": "Discount for a given number of accumulated services",\
\
"is_discount": true,\
\
"is_cashback": false,\
\
"is_static": false,\
\
"is_accumulative": false\
\
},\
\
"rules": [{"id": 72803,\
\
"loyalty_program_id": 18005,\
\
"loyalty_type_id": 13,\
\
"value": 20,\
\
"parameter": 0\
\
},\
\
{"id": 72804,\
\
"loyalty_program_id": 18005,\
\
"loyalty_type_id": 13,\
\
"value": 10,\
\
"parameter": 0\
\
},\
\
{"id": 72805,\
\
"loyalty_program_id": 18005,\
\
"loyalty_type_id": 13,\
\
"value": 100,\
\
"parameter": 0\
\
}\
\
]\
\
}\
\
]

}`

## [tag/Loyalty-Cards/operation/Issue a Loyalty Card](https://developer.alteg.io/api\#tag/Loyalty-Cards/operation/Issue%20a%20Loyalty%20Card) Issue a Loyalty Card

\| Attribute \| Type \| Description \|
\|\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\|\-\-\-\-\-\-\-\-\|\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- ------------------------------\|
\| loyalty\_card\_number \| number \| Loyalty card number \|
\| loyalty\_card\_type\_id \| number \| Loyalty card type identifier \|
\| phone \| number \| Customer phone number in the format 70001234567 \|

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| loyalty\_card\_number | string<br>Loyalty card number |
| loyalty\_card\_type\_id | string<br>Loyalty card type identifier |
| phone | number<br>Customer phone number in the format 70001234567 |

### Responses

**200**

OK

post/loyalty/cards/{company\_id}

https://api.alteg.io/api/v1/loyalty/cards/{company\_id}

### Request samples

- Payload

Content type

application/json

Copy

`{"loyalty_card_number": 9090909,

"loyalty_card_type_id": "8230",

"phone": 79091552422

}`

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"id": 9250498,

"balance": 0,

"points": 0,

"paid_amount": 16300,

"sold_amount": 19320,

"visits_count": 5,

"number": "01010101",

"type_id": 8230,

"salon_group_id": 145071,

"type": {"id": 8230,

"title": "cashmesh",

"salon_group_id": 145071

},

"salon_group": {"id": 145071,

"title": "Dough chain1."

},

"programs": [{"id": 12720,\
\
"title": "cumulative cache paid",\
\
"value": 10,\
\
"loyalty_type_id": 7,\
\
"item_type_id": 0,\
\
"value_unit_id": 1,\
\
"group_id": 145071,\
\
"loyalty_type": {"id": 7,\
\
"title": "Cumulative cashback (paid)",\
\
"is_discount": false,\
\
"is_cashback": true,\
\
"is_static": false,\
\
"is_accumulative": true\
\
},\
\
"rules": [{"id": 71149,\
\
"loyalty_program_id": 12720,\
\
"loyalty_type_id": 7,\
\
"value": 10,\
\
"parameter": 100\
\
}\
\
]\
\
}\
\
]

}`

## [tag/Loyalty-Cards/operation/Remove a Loyalty Card](https://developer.alteg.io/api\#tag/Loyalty-Cards/operation/Remove%20a%20Loyalty%20Card) Remove a Loyalty Card

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Location ID |
| card\_id<br>required | number<br>loyalty card ID |

### Responses

**204**

No Content

delete/loyalty/cards/{company\_id}/{card\_id}

https://api.alteg.io/api/v1/loyalty/cards/{company\_id}/{card\_id}

## [tag/Loyalty-Cards/operation/api.chain.loyalty.cards.create_manual_transaction](https://developer.alteg.io/api\#tag/Loyalty-Cards/operation/api.chain.loyalty.cards.create_manual_transaction) Manual withdraw/deposit to loyalty card in chain

Manual withdraw/deposit to loyalty card in chain

##### Authorizations:

_BearerPartnerUser_

##### path Parameters

|     |     |
| --- | --- |
| chain\_id<br>required | number<br>Example: 123<br>ID of a chain. |
| card\_id<br>required | number<br>Loyalty card ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

##### Request Body schema: application/json

|     |     |
| --- | --- |
| amount<br>required | number<br>Withdraw/deposit amount. Positive for deposit, negative for withdraw. |
| title | string<br>Optional comment |

### Responses

**200**

OK

**403**

Forbidden

**404**

Not Found

post/chain/{chain\_id}/loyalty/cards/{card\_id}/manual\_transaction

https://api.alteg.io/api/v1/chain/{chain\_id}/loyalty/cards/{card\_id}/manual\_transaction

### Request samples

- Payload

Content type

application/json

Copy

`{"amount": 100.5,

"title": "string"

}`

### Response samples

- 200
- 403
- 404

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 0,

"balance": 0,

"points": 0,

"paid_amount": 0,

"sold_amount": 0,

"visits_count": 0,

"number": "string",

"type_id": 0,

"salon_group_id": 0,

"max_discount_percent": 0,

"max_discount_amount": 0

},

"meta": { }

}`

## [tag/Loyalty-Cards/paths/~1chain~1{chain_id}~1loyalty~1card_types/get](https://developer.alteg.io/api\#tag/Loyalty-Cards/paths/~1chain~1{chain_id}~1loyalty~1card_types/get) Get a List of Card Types Available at the Chain

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| chain\_id<br>required | integer<br>Chain ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/chain/{chain\_id}/loyalty/card\_types

https://api.alteg.io/api/v1/chain/{chain\_id}/loyalty/card\_types

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`[{"id": 123,\
\
"title": "Loyalty card type"\
\
}\
\
]`

## [tag/Loyalty-Cards/operation/api.company.loyalty.cards.create_manual_transaction](https://developer.alteg.io/api\#tag/Loyalty-Cards/operation/api.company.loyalty.cards.create_manual_transaction) Manual withdraw/deposit to loyalty card in company

Manual withdraw/deposit to loyalty card in location

##### Authorizations:

_BearerPartnerUser_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |
| card\_id<br>required | number<br>Loyalty card ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

##### Request Body schema: application/json

|     |     |
| --- | --- |
| amount<br>required | number<br>Withdraw/deposit amount. Positive for deposit, negative for withdraw. |
| title | string<br>Optional comment |

### Responses

**200**

OK

**403**

Forbidden

**404**

Not Found

post/company/{company\_id}/loyalty/cards/{card\_id}/manual\_transaction

https://api.alteg.io/api/v1/company/{company\_id}/loyalty/cards/{card\_id}/manual\_transaction

### Request samples

- Payload

Content type

application/json

Copy

`{"amount": 100.5,

"title": "string"

}`

### Response samples

- 200
- 403
- 404

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 0,

"balance": 0,

"points": 0,

"paid_amount": 0,

"sold_amount": 0,

"visits_count": 0,

"number": "string",

"type_id": 0,

"salon_group_id": 0,

"max_discount_percent": 0,

"max_discount_amount": 0

},

"meta": { }

}`

## [tag/Loyalty-Cards/operation/Get a List of Card Types Available for Issuance to the Client](https://developer.alteg.io/api\#tag/Loyalty-Cards/operation/Get%20a%20List%20of%20Card%20Types%20Available%20for%20Issuance%20to%20the%20Client) Get a List of Card Types Available for Issuance to the Client

Returns a list of card types that are available for issuance to a location client.

| Attribute | Type | Description |
| --- | --- | --- |
| id | int | Card type identifier |
| title | string | Card type name |
| salon\_group\_id | int | ID of the chain where the card type was created |
| salon\_group | object | An object that contains the "id" and "title" fields: identifier of the chain where the card type was created and the name of this chain |

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 12345<br>location ID |
| phone<br>required | number<br>Example: 70001234567<br>Customer phone number |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/loyalty/card\_types/client/{company\_id}/{phone}

https://api.alteg.io/api/v1/loyalty/card\_types/client/{company\_id}/{phone}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`[{"id": 10992,\
\
"title": "Cashback",\
\
"salon_group_id": 145071,\
\
"salon_group": {"id": 145071,\
\
"title": "Chain 1"\
\
}\
\
},\
\
{"id": 8230,\
\
"title": "Referral program",\
\
"salon_group_id": 145071,\
\
"salon_group": {"id": 145071,\
\
"title": "Chain 1"\
\
}\
\
}\
\
]`

## [tag/Application-of-loyalty-in-a-visit](https://developer.alteg.io/api\#tag/Application-of-loyalty-in-a-visit) Application of loyalty in a visit

## [tag/Application-of-loyalty-in-a-visit/operation/Apply a Discount Promotion in a Visit](https://developer.alteg.io/api\#tag/Application-of-loyalty-in-a-visit/operation/Apply%20a%20Discount%20Promotion%20in%20a%20Visit) Apply a Discount Promotion in a Visit

Applying a promotion to a visit, it only makes sense if there is a visit

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Location ID |
| card\_id<br>required | number<br>Client card ID |
| program\_id<br>required | number<br>ID of the promotion linked to the card |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| record\_id<br>required | number<br>Appointment ID |
| visit\_id<br>required | number<br>Visit ID |

### Responses

**200**

OK

post/visit/loyalty/apply\_discount\_program/{company\_id}/{card\_id}/{program\_id}

https://api.alteg.io/api/v1/visit/loyalty/apply\_discount\_program/{company\_id}/{card\_id}/{program\_id}

### Request samples

- Payload

Content type

application/json

Copy

`{"record_id": 0,

"visit_id": 0

}`

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"payment_transactions": [ ],

"loyalty_transactions": [{"id": 22985556,\
\
"status_id": 1,\
\
"amount": 20,\
\
"type_id": 1,\
\
"program_id": 20802,\
\
"card_id": 9223622,\
\
"salon_group_id": 145071,\
\
"item_id": 5048384,\
\
"item_type_id": 7,\
\
"item_record_id": 0,\
\
"goods_transaction_id": 96063258,\
\
"is_discount": true,\
\
"is_loyalty_withdraw": false,\
\
"type": {"id": 1,\
\
"title": "Promotion Discount"\
\
}\
\
}\
\
],

"kkm_transaction_details_container": {"last_operation_type": 1,

"transactions": [ ]

},

"items": [{"id": 96063258,\
\
"item_id": 5048384,\
\
"item_type_id": 7,\
\
"record_id": 0,\
\
"item_title": "test two",\
\
"amount": 1,\
\
"first_cost": 20,\
\
"manual_cost": 20,\
\
"discount": 0,\
\
"cost": 20,\
\
"master_id": 548096,\
\
"good_id": 5048384,\
\
"service_id": 0,\
\
"event_id": 0,\
\
"is_service": false,\
\
"is_event": false,\
\
"is_good": true\
\
},\
\
{"id": 0,\
\
"item_id": 2560779,\
\
"item_type_id": 1,\
\
"record_id": 140878948,\
\
"item_title": "Deep bikini",\
\
"amount": 1,\
\
"first_cost": 3000,\
\
"manual_cost": 3000,\
\
"discount": 0,\
\
"cost": 3000,\
\
"master_id": 140878948,\
\
"good_id": 0,\
\
"service_id": 2560779,\
\
"event_id": 0,\
\
"is_service": true,\
\
"is_event": false,\
\
"is_good": false\
\
}\
\
]

}`

## [tag/Application-of-loyalty-in-a-visit/operation/Cancel the Application of the Discount Promotion in the Visit](https://developer.alteg.io/api\#tag/Application-of-loyalty-in-a-visit/operation/Cancel%20the%20Application%20of%20the%20Discount%20Promotion%20in%20the%20Visit) Cancel the Application of the Discount Promotion in the Visit

Cancellation of the promotion applied to the visit.

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Location ID |
| card\_id<br>required | number<br>Client card ID |
| program\_id<br>required | number<br>ID of the promotion linked to the card |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: \*/\*  required

|     |     |
| --- | --- |
| record\_id<br>required | number<br>Appointment ID |
| visit\_id<br>required | number<br>Visit ID |

### Responses

**200**

OK

post/visit/loyalty/cancel\_discount\_program/{company\_id}/{card\_id}/{program\_id}

https://api.alteg.io/api/v1/visit/loyalty/cancel\_discount\_program/{company\_id}/{card\_id}/{program\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"payment_transactions": [ ],

"loyalty_transactions": [ ],

"kkm_transaction_details_container": {"last_operation_type": 1,

"transactions": [ ]

},

"items": [{"id": 96063258,\
\
"item_id": 5048384,\
\
"item_type_id": 7,\
\
"record_id": 0,\
\
"item_title": "test two",\
\
"amount": 1,\
\
"first_cost": 20,\
\
"manual_cost": 20,\
\
"discount": 0,\
\
"cost": 20,\
\
"master_id": 548096,\
\
"good_id": 5048384,\
\
"service_id": 0,\
\
"event_id": 0,\
\
"is_service": false,\
\
"is_event": false,\
\
"is_good": true\
\
},\
\
{"id": 0,\
\
"item_id": 2560779,\
\
"item_type_id": 1,\
\
"record_id": 140878948,\
\
"item_title": "Deep bikini",\
\
"amount": 1,\
\
"first_cost": 3000,\
\
"manual_cost": 3000,\
\
"discount": 0,\
\
"cost": 3000,\
\
"master_id": 140878948,\
\
"good_id": 0,\
\
"service_id": 2560779,\
\
"event_id": 0,\
\
"is_service": true,\
\
"is_event": false,\
\
"is_good": false\
\
}\
\
]

}`

## [tag/Application-of-loyalty-in-a-visit/operation/Apply Deduction from the Loyalty Card in the Visit](https://developer.alteg.io/api\#tag/Application-of-loyalty-in-a-visit/operation/Apply%20Deduction%20from%20the%20Loyalty%20Card%20in%20the%20Visit) Apply Deduction from the Loyalty Card in the Visit

The amount deducted will not exceed the available bonus balance. If the value is set to 0, no write-off transaction will occur

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Location ID |
| card\_id<br>required | number<br>Client card ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: \*/\*  required

|     |     |
| --- | --- |
| record\_id<br>required | number<br>Appointment ID |
| visit\_id<br>required | number<br>Visit ID |
| amount<br>required | number<br>Number of points to redeem |

### Responses

**200**

OK

post/visit/loyalty/apply\_card\_withdrawal/{company\_id}/{card\_id}

https://api.alteg.io/api/v1/visit/loyalty/apply\_card\_withdrawal/{company\_id}/{card\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"payment_transactions": [ ],

"loyalty_transactions": [{"id": 22985556,\
\
"status_id": 1,\
\
"amount": 20,\
\
"type_id": 1,\
\
"program_id": 20802,\
\
"card_id": 9223622,\
\
"salon_group_id": 145071,\
\
"item_id": 5048384,\
\
"item_type_id": 7,\
\
"item_record_id": 0,\
\
"goods_transaction_id": 96063258,\
\
"is_discount": true,\
\
"is_loyalty_withdraw": false,\
\
"type": {"id": 1,\
\
"title": "Promotion Discount"\
\
}\
\
}\
\
],

"kkm_transaction_details_container": {"last_operation_type": 1,

"transactions": [ ]

},

"items": [{"id": 96063258,\
\
"item_id": 5048384,\
\
"item_type_id": 7,\
\
"record_id": 0,\
\
"item_title": "test two",\
\
"amount": 1,\
\
"first_cost": 20,\
\
"manual_cost": 20,\
\
"discount": 0,\
\
"cost": 20,\
\
"master_id": 548096,\
\
"good_id": 5048384,\
\
"service_id": 0,\
\
"event_id": 0,\
\
"is_service": false,\
\
"is_event": false,\
\
"is_good": true\
\
},\
\
{"id": 0,\
\
"item_id": 2560779,\
\
"item_type_id": 1,\
\
"record_id": 140878948,\
\
"item_title": "Deep bikini",\
\
"amount": 1,\
\
"first_cost": 3000,\
\
"manual_cost": 3000,\
\
"discount": 0,\
\
"cost": 3000,\
\
"master_id": 140878948,\
\
"good_id": 0,\
\
"service_id": 2560779,\
\
"event_id": 0,\
\
"is_service": true,\
\
"is_event": false,\
\
"is_good": false\
\
}\
\
]

}`

## [tag/Application-of-loyalty-in-a-visit/operation/Cancel Withdrawal from the Loyalty Card During the Visit](https://developer.alteg.io/api\#tag/Application-of-loyalty-in-a-visit/operation/Cancel%20Withdrawal%20from%20the%20Loyalty%20Card%20During%20the%20Visit) Cancel Withdrawal from the Loyalty Card During the Visit

Cancellation of write-off from the loyalty card.

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Location ID |
| card\_id<br>required | number<br>Client card ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: \*/\*  required

|     |     |
| --- | --- |
| record\_id<br>required | number<br>Appointment ID |
| visit\_id<br>required | number<br>Visit ID |

### Responses

**200**

OK

post/visit/loyalty/cancel\_card\_withdrawal/{company\_id}/{card\_id}

https://api.alteg.io/api/v1/visit/loyalty/cancel\_card\_withdrawal/{company\_id}/{card\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"payment_transactions": [ ],

"loyalty_transactions": [ ],

"kkm_transaction_details_container": {"last_operation_type": 1,

"transactions": [ ]

},

"items": [{"id": 96063258,\
\
"item_id": 5048384,\
\
"item_type_id": 7,\
\
"record_id": 0,\
\
"item_title": "test two",\
\
"amount": 1,\
\
"first_cost": 20,\
\
"manual_cost": 20,\
\
"discount": 0,\
\
"cost": 20,\
\
"master_id": 548096,\
\
"good_id": 5048384,\
\
"service_id": 0,\
\
"event_id": 0,\
\
"is_service": false,\
\
"is_event": false,\
\
"is_good": true\
\
},\
\
{"id": 0,\
\
"item_id": 2560779,\
\
"item_type_id": 1,\
\
"record_id": 140878948,\
\
"item_title": "Deep bikini",\
\
"amount": 1,\
\
"first_cost": 3000,\
\
"manual_cost": 3000,\
\
"discount": 0,\
\
"cost": 3000,\
\
"master_id": 140878948,\
\
"good_id": 0,\
\
"service_id": 2560779,\
\
"event_id": 0,\
\
"is_service": true,\
\
"is_event": false,\
\
"is_good": false\
\
}\
\
]

}`

## [tag/Application-of-loyalty-in-a-visit/operation/Apply Referral Program During a Visit](https://developer.alteg.io/api\#tag/Application-of-loyalty-in-a-visit/operation/Apply%20Referral%20Program%20During%20a%20Visit) Apply Referral Program During a Visit

Applying a referral program to a visit

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Location ID |
| group\_id<br>required | number<br>ID of the chain where the referral program is configured |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: \*/\*  required

|     |     |
| --- | --- |
| record\_id<br>required | number<br>Appointment ID |
| visit\_id<br>required | number<br>Visit ID |
| referrer\_phone<br>required | number<br>Phone number of the inviter |

### Responses

**200**

OK

post/visit/loyalty/apply\_referral\_program/{company\_id}/{group\_id}

https://api.alteg.io/api/v1/visit/loyalty/apply\_referral\_program/{company\_id}/{group\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"payment_transactions": [ ],

"loyalty_transactions": [{"id": 22989715,\
\
"status_id": 1,\
\
"amount": 100,\
\
"type_id": 1,\
\
"program_id": 12705,\
\
"card_id": 0,\
\
"salon_group_id": 145071,\
\
"item_id": 5048371,\
\
"item_type_id": 7,\
\
"item_record_id": 0,\
\
"goods_transaction_id": 96082477,\
\
"is_discount": true,\
\
"is_loyalty_withdraw": false,\
\
"type": {"id": 1,\
\
"title": "Promotion discount"\
\
}\
\
}\
\
],

"kkm_transaction_details_container": {"last_operation_type": 1,

"transactions": [ ]

},

"items": [{"id": 96082477,\
\
"item_id": 5048371,\
\
"item_type_id": 7,\
\
"record_id": 0,\
\
"item_title": "test",\
\
"amount": 1,\
\
"first_cost": 1000,\
\
"manual_cost": 1000,\
\
"discount": 0,\
\
"cost": 1000,\
\
"master_id": 548042,\
\
"good_id": 5048371,\
\
"service_id": 0,\
\
"event_id": 0,\
\
"is_service": false,\
\
"is_event": false,\
\
"is_good": true\
\
}\
\
]

}`

## [tag/Application-of-loyalty-in-a-visit/operation/Get loyalty transactions by visit](https://developer.alteg.io/api\#tag/Application-of-loyalty-in-a-visit/operation/Get%20loyalty%20transactions%20by%20visit) Get loyalty transactions by visit

List of transactions for loyalty promotions for this visit

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| visit\_id<br>required | number<br>Visit ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/visit/loyalty/transactions/{visit\_id}

https://api.alteg.io/api/v1/visit/loyalty/transactions/{visit\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`[{"id": 22989715,\
\
"status_id": 1,\
\
"amount": 100,\
\
"type_id": 1,\
\
"program_id": 12705,\
\
"card_id": 0,\
\
"salon_group_id": 145071,\
\
"item_id": 5048371,\
\
"item_type_id": 7,\
\
"item_record_id": 0,\
\
"goods_transaction_id": 96082477,\
\
"is_discount": true,\
\
"is_loyalty_withdraw": false,\
\
"type": {"id": 1,\
\
"title": "Promotion discount"\
\
},\
\
"program": {"id": 12705,\
\
"title": "invited",\
\
"value": 10,\
\
"loyalty_type_id": 1,\
\
"item_type_id": 0,\
\
"value_unit_id": 1,\
\
"group_id": 145071\
\
}\
\
},\
\
{"id": 22994127,\
\
"status_id": 1,\
\
"amount": 100,\
\
"type_id": 4,\
\
"program_id": 19044,\
\
"card_id": 9234863,\
\
"salon_group_id": 145071,\
\
"item_id": 0,\
\
"item_type_id": 0,\
\
"item_record_id": 0,\
\
"goods_transaction_id": 0,\
\
"is_discount": false,\
\
"is_loyalty_withdraw": false,\
\
"type": {"id": 4,\
\
"title": "Referral program accrual"\
\
},\
\
"program": {"id": 19044,\
\
"title": "inviter 2",\
\
"value": 100,\
\
"loyalty_type_id": 6,\
\
"item_type_id": 0,\
\
"value_unit_id": 2,\
\
"group_id": 145071\
\
}\
\
}\
\
]`

## [tag/Webhook-event-notifications](https://developer.alteg.io/api\#tag/Webhook-event-notifications) Webhook event notifications

## [tag/Webhook-event-notifications/operation/Get event notification settings](https://developer.alteg.io/api\#tag/Webhook-event-notifications/operation/Get%20event%20notification%20settings) Get event notification settings

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/hooks\_settings/{company\_id}

https://api.alteg.io/api/v1/hooks\_settings/{company\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"urls": ["https://dev.tools.test.com/test/Hooks"\
\
],

"active": 0,

"salon": 1,

"service_category": 0,

"service": 1,

"good": 1,

"master": 1,

"client": 1,

"record": 1,

"goods_operations_sale": 1,

"goods_operations_receipt": 1,

"goods_operations_consumable": 1,

"goods_operations_stolen": 1,

"goods_operations_move": 1,

"finances_operation": 1

},

"meta": [ ]

}`

## [tag/Webhook-event-notifications/operation/Change Event Notification Settings](https://developer.alteg.io/api\#tag/Webhook-event-notifications/operation/Change%20Event%20Notification%20Settings) Change Event Notification Settings

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: application/json  optional

|     |     |
| --- | --- |
| urls<br>required | Array of arrays<br>List of addresses to send notifications to |
| active<br>required | number<br>1 - notifications are active, 0 - not active |
| salon | number<br>1 - send events by location entity, 0 - do not send |
| service\_category | number<br>1 - send events by service category entity, 0 - do not send |
| service | number<br>1 - send events by service entity, 0 - do not send |
| good | number<br>1 - send events by product entity, 0 - don't send |
| master | number<br>1 - send events by staff member entity, 0 - don't send |
| client | number<br>1 - send events by client entity, 0 - don't send |
| record | number<br>1 - send events by record entity, 0 - do not send |
| goods\_operations\_sale | number<br>1 - send events by the item sale entity, 0 - do not send |
| goods\_operations\_receipt | number<br>1 - send events by the entity arrival of goods, 0 - do not send |
| goods\_operations\_consumable | number<br>1 - send events by the consumable write-off entity, 0 - do not send |
| goods\_operations\_stolen | number<br>1 - send events by the item write-off entity, 0 - do not send |
| goods\_operations\_move | number<br>1 - send events by the item movement entity, 0 - no send |
| finances\_operation | number<br>1 - send events by entity financial operation, 0 - no send |
| self\_sending | number<br>1 - The webhook creator will receive events triggered by their own actions, 0 - The webhook creator will not receive events triggered by their own actions |

### Responses

**201**

Created

post/hooks\_settings/{company\_id}

https://api.alteg.io/api/v1/hooks\_settings/{company\_id}

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"urls": ["https://dev.tools.test.com/test/Hooks"\
\
],

"active": 0,

"salon": 1,

"service_category": 0,

"service": 1,

"good": 1,

"master": 1,

"client": 1,

"record": 1,

"goods_operations_sale": 1,

"goods_operations_receipt": 1,

"goods_operations_consumable": 1,

"goods_operations_stolen": 1,

"goods_operations_move": 1,

"finances_operation": 1,

"self_sending": 0

}`

### Response samples

- 201

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"urls": ["https://dev.tools.test.com/test/Hooks"\
\
],

"active": 0,

"salon": 1,

"service_category": 0,

"service": 1,

"master": 1,

"client": 1,

"record": 1,

"goods_operations_sale": 1,

"goods_operations_receipt": 1,

"goods_operations_consumable": 1,

"goods_operations_stolen": 1,

"goods_operations_move": 1,

"finances_operation": 1

},

"meta": [ ]

}`

## [tag/Reference-books](https://developer.alteg.io/api\#tag/Reference-books) Reference books

## [tag/Reference-books/operation/Get business types by group](https://developer.alteg.io/api\#tag/Reference-books/operation/Get%20business%20types%20by%20group) Get business types by group

##### Authorizations:

(_bearer__user_)

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/references/business\_groups\_with\_types

https://api.alteg.io/api/v1/references/business\_groups\_with\_types

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 10,\
\
"title": "Domestic services",\
\
"image": "https://app.alteg.io/images/business-groups/services.png",\
\
"types": [{"id": 31,\
\
"title": "Studio",\
\
"business_group_id": 10\
\
}\
\
]\
\
},\
\
{"id": 1,\
\
"title": "beauty",\
\
"image": "https://app.alteg.io/images/business-groups/beauty.png",\
\
"types": [{"id": 1,\
\
"title": "Beauty Salons",\
\
"business_group_id": 1\
\
},\
\
{"id": 25,\
\
"title": "Spa",\
\
"business_group_id": 1\
\
}\
\
]\
\
}\
\
],

"meta": {"count": 10

}

}`

## [tag/Categories](https://developer.alteg.io/api\#tag/Categories) Categories

## [tag/Categories/operation/Get categories](https://developer.alteg.io/api\#tag/Categories/operation/Get%20categories) Get company categories

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| entity<br>required | number<br>Category object (0 - general tags, 1 - customer tags, 2 - appointment tags) |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/labels/{company\_id}/{entity}

https://api.alteg.io/api/v1/labels/{company\_id}/{entity}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`[{"id": "241625",\
\
"salon_id": "68570",\
\
"title": "The staff member is important",\
\
"color": "#ff2828",\
\
"icon": "lock",\
\
"entity": "2",\
\
"deleted": "0",\
\
"not_editable": "1"\
\
},\
\
{"id": "241626",\
\
"salon_id": "68570",\
\
"title": "The staff member is not important",\
\
"color": "#009800",\
\
"icon": "unlock",\
\
"entity": "2",\
\
"deleted": "0",\
\
"not_editable": "1"\
\
}\
\
]`

## [tag/Categories/paths/~1labels~1{company_id}~1clients~1create/post](https://developer.alteg.io/api\#tag/Categories/paths/~1labels~1{company_id}~1clients~1create/post) Create a client company category

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: \*/\*  required

|     |     |
| --- | --- |
| title | string<br>name of category |
| color | string<br>Label color in #RRGGBB format |

### Responses

**200**

OK

**400**

Bad Request

**403**

Forbidden

**404**

Not Found

post/labels/{company\_id}/clients/create

https://api.alteg.io/api/v1/labels/{company\_id}/clients/create

### Response samples

- 200
- 400
- 403
- 404

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"title": "test",

"salon_id": 68570,

"color": "#00ff11",

"entity": 1,

"id": "3599560"

},

"meta": [ ]

}`

## [tag/Categories/operation/Create a Category](https://developer.alteg.io/api\#tag/Categories/operation/Create%20a%20Category) Create a Category

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### query Parameters

|     |     |
| --- | --- |
| title<br>required | string<br>name of category |
| color<br>required | string<br>Label color in #RRGGBB format |
| entity | number<br>Category object (0 - general tags, 1 - customer tags, 2 - appointment tags) |
| icon | string<br>Icon name |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

post/labels/{company\_id}

https://api.alteg.io/api/v1/labels/{company\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"title": "test",

"salon_id": 68570,

"color": "#00ff11",

"entity": 1,

"id": "3599560"

},

"meta": [ ]

}`

## [tag/Categories/operation/Update Category](https://developer.alteg.io/api\#tag/Categories/operation/Update%20Category) Update Category

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| label\_id<br>required | number<br>Tag ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| title | string<br>name of category |
| color | string<br>Label color in #RRGGBB format |
| entity | number<br>Category object (1 - category for customers, 2 - category for appointments) |
| icon | string<br>Icon name |

### Responses

**202**

Accepted

put/labels/{company\_id}/{label\_id}

https://api.alteg.io/api/v1/labels/{company\_id}/{label\_id}

### Request samples

- Payload

Content type

application/json

Copy

`{"title": "Testway2",

"color": "#aa11ff",

"entity": 2,

"icon": "Test"

}`

### Response samples

- 202

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"meta": {"message": "Accepted"

}

}`

## [tag/Categories/operation/Delete company category](https://developer.alteg.io/api\#tag/Categories/operation/Delete%20company%20category) Delete company category

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| label\_id<br>required | number<br>Tag ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

delete/labels/{company\_id}/{label\_id}

https://api.alteg.io/api/v1/labels/{company\_id}/{label\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"meta": {"message": "Accepted"

}

}`

## [tag/Categories/operation/Get client categories search by name](https://developer.alteg.io/api\#tag/Categories/operation/Get%20client%20categories%20search%20by%20name) Get Customer Categories Searchable by Name

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

**403**

Forbidden

**404**

Not Found

get/labels/{company\_id}/clients

https://api.alteg.io/api/v1/labels/{company\_id}/clients

### Response samples

- 200
- 403
- 404

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 3,\
\
"salon_id": 4564,\
\
"title": "Regular customer",\
\
"color": "#1f1038",\
\
"icon": "tag",\
\
"entity": 1,\
\
"deleted": 1,\
\
"not_editable": 0\
\
}\
\
],

"meta": {"page": 1,

"total_count": 25

}

}`

## [tag/Product-Categories](https://developer.alteg.io/api\#tag/Product-Categories) Product Categories

## [tag/Product-Categories/paths/~1goods~1search~1{company_id}?term={search_term}&count={max_count}/get](https://developer.alteg.io/api\#tag/Product-Categories/paths/~1goods~1search~1{company_id}?term={search_term}&count={max_count}/get) List request example

### List of products and product categories

You can retrieve a list of products and product categories by providing the location ID. Use the `search_term` parameter to filter:

- Product categories by name or article
- Products by name, article, or barcode

Limit the number of results using the `max_count` parameter.

If `search_term` is not provided, the response will return a list of root categories for the specified location. In this case, the `max_count` parameter is ignored. If `search_term` is provided, the system will first search among categories. If fewer than `max_count` results are found, the search will continue among products to fill the remaining count.

The result is returned as an array of [products tree elements](https://developer.alteg.io/api#good-category-tree-node).

**Product tree element** has the following structure:

\| Field \| Type \| Description \|
\| \-\-\-\-\-\-\-\-\-\-\-\-\-\| \-\-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \|
\| parent\_id \| number \| Parent element ID (0 for root elements) \|
\| item\_id \| number \| Item ID (0 if item is a category) \|
\| category\_id \| number \| Product category ID (0 if the item is a product) \|
\| title \| string \| Product name or product category \|
\| is\_chain \| boolean \| Is the element chain-bound? true - the element is connected to the chain, false - not connected \|
\| is\_category \| boolean \| Is the element a category? true - category, false - product \|
\| is\_item \| boolean \| Is the item a product? true - product, false - category \|

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### query Parameters

|     |     |
| --- | --- |
| search\_term | string<br>Search query by name, article number or barcode |
| max\_count | number<br>The number of output lines per page. Maximum 100 |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/goods/search/{company\_id}?term={search\_term}&count={max\_count}

https://api.alteg.io/api/v1/goods/search/{company\_id}?term={search\_term}&count={max\_count}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"parent_id": 0,\
\
"item_id": 0,\
\
"category_id": 123,\
\
"title": "Root category 1",\
\
"is_chain": true,\
\
"is_category": true,\
\
"is_item": false\
\
},\
\
{"parent_id": 0,\
\
"item_id": 0,\
\
"category_id": 456,\
\
"title": "Root category 2",\
\
"is_chain": true,\
\
"is_category": true,\
\
"is_item": false\
\
}\
\
],

"meta": {"count": 2

}

}`

## [tag/Product-Categories/operation/Example of a request to get the composition of a category](https://developer.alteg.io/api\#tag/Product-Categories/operation/Example%20of%20a%20request%20to%20get%20the%20composition%20of%20a%20category) Example of a request to get the composition of a category

##№ Composition of the product category

Information on a product category and its descendants can be obtained by making a request specifying the location ID and product category.
Pagination is supported, specified by the `page` and `count` parameters.

**Composition of a product category** has the following structure:

| Field | Type | Description |
| --- | --- | --- |
| parent\_id | number | Parent element ID (0 for root elements) |
| item\_id | number | Item ID (always 0) |
| category\_id | number | Product category ID |
| title | string | Product category name |
| is\_chain | boolean | Is the element chain-bound? true - the element is connected to the chain, false - not connected |
| is\_category | boolean | Is the element a category? always true |
| is\_item | boolean | Is the item a product? always false |
| children | array of objects ( [Product tree element](https://developer.alteg.io/api#good-category-tree-node)) | Child elements of a product category |
| children\_count | number | Total number of child products and categories (no recursion) |

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| category\_id<br>required | number<br>Product Category ID |

##### query Parameters

|     |     |
| --- | --- |
| page | number<br>Page number |
| count | number<br>The number of products displayed on the page. Maximum 1000 |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/goods/category\_node/{company\_id}/{category\_id}?page={page}&count={count}

https://api.alteg.io/api/v1/goods/category\_node/{company\_id}/{category\_id}?page={page}&count={count}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"parent_id": 0,

"item_id": 0,

"category_id": 123,

"title": "Root category 1",

"is_chain": false,

"is_category": true,

"is_item": false,

"children": [{"parent_id": 123,\
\
"item_id": 0,\
\
"category_id": 456,\
\
"title": "Child category",\
\
"is_chain": false,\
\
"is_category": true,\
\
"is_item": false\
\
},\
\
{"parent_id": 123,\
\
"item_id": 789,\
\
"category_id": 0,\
\
"title": "Child product",\
\
"is_chain": false,\
\
"is_category": false,\
\
"is_item": true\
\
}\
\
],

"children_count": 2

}

}`

## [tag/Product-Categories/operation/Get a list of product categories](https://developer.alteg.io/api\#tag/Product-Categories/operation/Get%20a%20list%20of%20product%20categories) Get a list of product categories  Deprecated

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| parent\_category\_id<br>required | number<br>ID of the parent product category. Default 0 - top-level categories are displayed (optional) |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/goods\_categories/{company\_id}/{parent\_category\_id}

https://api.alteg.io/api/v1/goods\_categories/{company\_id}/{parent\_category\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": "1",\
\
"title": "Category 1"\
\
},\
\
{"id": "2",\
\
"title": "Category 2"\
\
}\
\
],

"meta": [ ]

}`

## [tag/Product-Categories/paths/~1goods_categories~1multiple~1{company_id}/get](https://developer.alteg.io/api\#tag/Product-Categories/paths/~1goods_categories~1multiple~1{company_id}/get) Get a list of product categories by ID

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### query Parameters

|     |     |
| --- | --- |
| id | number<br>Product category ID (you can specify several additional parameters &ids\[\]={id} |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/goods\_categories/multiple/{company\_id}

https://api.alteg.io/api/v1/goods\_categories/multiple/{company\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": "1",\
\
"title": "Category 1"\
\
},\
\
{"id": "2",\
\
"title": "Category 2"\
\
}\
\
],

"meta": [ ]

}`

## [tag/Product-Categories/operation/Example of a request to get categories](https://developer.alteg.io/api\#tag/Product-Categories/operation/Example%20of%20a%20request%20to%20get%20categories) Example of a request to get categories

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| parent\_category\_id<br>required | number<br>ID of the parent product category |

##### query Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/company/{company\_id}/goods\_categories/{parent\_category\_id}

https://api.alteg.io/api/v1/company/{company\_id}/goods\_categories/{parent\_category\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 25214,\
\
"title": "Doughter 1",\
\
"parent_category_id": 24843\
\
},\
\
{"id": 25213,\
\
"title": "Root 1"\
\
},\
\
{"id": 25219,\
\
"title": "Root 2"\
\
}\
\
],

"meta": {"count": 94

}

}`

## [tag/Product-Categories/paths/~1goods_categories~1{company_id}/post](https://developer.alteg.io/api\#tag/Product-Categories/paths/~1goods_categories~1{company_id}/post) Create a Product Category

The method allows you to create a product category.

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| title<br>required | string<br>Product category name |
| parent\_category\_id | integer <int32> <br>Parent category ID (optional, but can be 0 or null if you don't need to specify the parent category) |
| article | string<br>vendor code |
| comment | string<br>A comment |

### Responses

**201**

Created

post/goods\_categories/{company\_id}

https://api.alteg.io/api/v1/goods\_categories/{company\_id}

### Request samples

- Payload

Content type

application/json

Copy

`{"title": "Manicure",

"parent_category_id": 123456,

"article": "123article",

"comment": "Category of products for manicure"

}`

### Response samples

- 201

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 123456,

"title": "Manicure",

"parent_category_id": 123457

},

"meta": [ ]

}`

## [tag/Product-Categories/paths/~1goods_categories~1{company_id}~1{category_id}/put](https://developer.alteg.io/api\#tag/Product-Categories/paths/~1goods_categories~1{company_id}~1{category_id}/put) Edit a Product Category

The method allows you to edit the product category

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Location ID |
| category\_id<br>required | number<br>Product category ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| title<br>required | string<br>Product category name |
| parent\_category\_id | integer <int32> <br>Parent category ID (optional, but can be 0 or null if you don't need to specify the parent category) |
| article | string<br>vendor code |
| comment | string<br>A comment |

### Responses

**200**

OK

put/goods\_categories/{company\_id}/{category\_id}

https://api.alteg.io/api/v1/goods\_categories/{company\_id}/{category\_id}

### Request samples

- Payload

Content type

application/json

Copy

`{"title": "Manicure",

"parent_category_id": 123456,

"article": "123article",

"comment": "Category of products for manicure"

}`

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 123456,

"title": "Manicure",

"parent_category_id": 123457

},

"meta": [ ]

}`

## [tag/Product-Categories/paths/~1goods_categories~1{company_id}~1{category_id}/delete](https://developer.alteg.io/api\#tag/Product-Categories/paths/~1goods_categories~1{company_id}~1{category_id}/delete) Delete a Product Category

The method allows you to delete a product category

##### Authorizations:

(_user__bearer_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Location ID |
| category\_id<br>required | number<br>Product category ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**204**

No Content

delete/goods\_categories/{company\_id}/{category\_id}

https://api.alteg.io/api/v1/goods\_categories/{company\_id}/{category\_id}

## [tag/Bill-of-Materials-and-Consumables](https://developer.alteg.io/api\#tag/Bill-of-Materials-and-Consumables) Bill of Materials and Consumables

## [tag/Bill-of-Materials-and-Consumables/operation/Retrieve a list of bill of materials and consumables](https://developer.alteg.io/api\#tag/Bill-of-Materials-and-Consumables/operation/Retrieve%20a%20list%20of%20bill%20of%20materials%20and%20consumables) Retrieve a list of bill of materials and consumables

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Location ID |

##### query Parameters

|     |     |
| --- | --- |
| search | string<br>Example: search='test'<br>parameter for searching by the name of those lists |
| page | number<br>Example: page=1<br>page number |
| count | number<br>Example: count=20<br>number of those lists per page |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/technological\_cards/{company\_id}/

https://api.alteg.io/api/v1/technological\_cards/{company\_id}/

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": "1",\
\
"title": "Tech map 1",\
\
"technological_card_items": [{"id": 3,\
\
"technological_card_id": 1,\
\
"storage_id": 4234,\
\
"good_id": 34234,\
\
"amount": 12,\
\
"unit": "l",\
\
"price": 0.0742,\
\
"title": "Consumable 3"\
\
}\
\
]\
\
},\
\
{"id": "2",\
\
"title": "Tech map 2",\
\
"technological_card_items": [{"id": 4,\
\
"technological_card_id": 2,\
\
"storage_id": 4234,\
\
"good_id": 34235,\
\
"amount": 10,\
\
"unit": "l",\
\
"price": 0.02412,\
\
"title": "Consumable 4"\
\
}\
\
]\
\
}\
\
],

"meta": [ ]

}`

## [tag/Bill-of-Materials-and-Consumables/operation/Get the Bill of Materials for an Employee’s Service](https://developer.alteg.io/api\#tag/Bill-of-Materials-and-Consumables/operation/Get%20the%20Bill%20of%20Materials%20for%20an%20Employee%E2%80%99s%20Service) Get the Bill of Materials for an Employee’s Service

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Location ID |
| staffId<br>required | number<br>staff member ID |
| serviceId<br>required | number<br>Service ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/technological\_cards/default\_for\_staff\_and\_service/{company\_id}/{staffId}/{serviceId}/

https://api.alteg.io/api/v1/technological\_cards/default\_for\_staff\_and\_service/{company\_id}/{staffId}/{serviceId}/

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": "1",

"title": "Tech map 1",

"technological_card_items": [{"id": 3,\
\
"technological_card_id": 1,\
\
"storage_id": 4234,\
\
"good_id": 34234,\
\
"amount": 12,\
\
"unit": "l",\
\
"price": 0.0742,\
\
"title": "Consumable 3"\
\
}\
\
]

},

"meta": [ ]

}`

## [tag/Bill-of-Materials-and-Consumables/operation/Retrieve a list of bill of materials and consumables](https://developer.alteg.io/api\#tag/Bill-of-Materials-and-Consumables/operation/Retrieve%20a%20list%20of%20bill%20of%20materials%20and%20consumables) Retrieve a list of bill of materials and consumables

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Location ID |
| record\_id<br>required | number<br>Appointment ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/technological\_cards/record\_consumables/{company\_id}/{record\_id}/

https://api.alteg.io/api/v1/technological\_cards/record\_consumables/{company\_id}/{record\_id}/

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"service_id": 21558,\
\
"record_id": 1233243,\
\
"technological_cards": [{"id": 36069,\
\
"title": "Tech map",\
\
"technological_card_items": [{"id": 208568,\
\
"technological_card_id": 36069,\
\
"storage_id": 91303,\
\
"good_id": 6858783,\
\
"amount": 10,\
\
"price": 1000,\
\
"good": {"id": 6858783,\
\
"title": "Product",\
\
"unit": "G"\
\
}\
\
}\
\
]\
\
}\
\
],\
\
"consumables": [{"goods_transaction_id": 2180771,\
\
"record_id": 121793129,\
\
"service_id": 695486,\
\
"storage_id": 91303,\
\
"good_id": 6858783,\
\
"price": 1000,\
\
"amount": 10,\
\
"good": {"id": 6858783,\
\
"title": "Product",\
\
"unit": "G"\
\
}\
\
}\
\
]\
\
}\
\
],

"meta": [ ]

}`

## [tag/Bill-of-Materials-and-Consumables/operation/Unlink Appointment-Service Association](https://developer.alteg.io/api\#tag/Bill-of-Materials-and-Consumables/operation/Unlink%20Appointment-Service%20Association) Unlink Appointment-Service Association

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Location ID |
| record\_id<br>required | number<br>Appointment ID |
| service\_id<br>required | number<br>Service ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: \*/\*  optional

|     |     |
| --- | --- |
| delete\_consumables | number<br>Whether to remove consumables along with deleting bill of materials. Default 0 |

### Responses

**200**

OK

delete/technological\_cards/record\_consumables/technological\_cards/{company\_id}/{record\_id}/{service\_id}

https://api.alteg.io/api/v1/technological\_cards/record\_consumables/technological\_cards/{company\_id}/{record\_id}/{service\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"service_id": 7224099,\
\
"record_id": 310013764,\
\
"technological_cards": [ ],\
\
"consumables": [ ]\
\
}\
\
],

"meta": {"count": 1

}

}`

## [tag/Bill-of-Materials-and-Consumables/operation/Unlink Appointment-Service Association](https://developer.alteg.io/api\#tag/Bill-of-Materials-and-Consumables/operation/Unlink%20Appointment-Service%20Association) Unlink Appointment-Service Association

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Location ID |
| record\_id<br>required | number<br>Appointment ID |
| service\_id<br>required | number<br>Service ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: \*/\*  optional

|     |     |
| --- | --- |
| delete\_consumables | number<br>Whether to remove consumables along with deleting bill of materials. Default 0 |

### Responses

**200**

OK

delete/technological\_cards/record\_consumables/technological\_cards/{company\_id}/{record\_id}/{service\_id}/?{delete\_consumables}

https://api.alteg.io/api/v1/technological\_cards/record\_consumables/technological\_cards/{company\_id}/{record\_id}/{service\_id}/?{delete\_consumables}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"service_id": 7224099,\
\
"record_id": 310013764,\
\
"technological_cards": [ ],\
\
"consumables": [ ]\
\
}\
\
],

"meta": {"count": 1

}

}`

## [tag/Bill-of-Materials-and-Consumables/operation/Update Consumables for the Appointment-Service Association](https://developer.alteg.io/api\#tag/Bill-of-Materials-and-Consumables/operation/Update%20Consumables%20for%20the%20Appointment-Service%20Association) Update Consumables for the Appointment-Service Association

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Location ID |
| record\_id<br>required | number<br>Appointment ID |
| service\_id<br>required | number<br>Service ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| consumables | Array of objects<br>List of consumables |

### Responses

**200**

OK

put/technological\_cards/record\_consumables/consumables/{company\_id}/{record\_id}/{service\_id}/

https://api.alteg.io/api/v1/technological\_cards/record\_consumables/consumables/{company\_id}/{record\_id}/{service\_id}/

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"consumables": [{"goods_transaction_id": 0,\
\
"record_id": 0,\
\
"service_id": 0,\
\
"storage_id": 0,\
\
"good_id": 0,\
\
"price": 0,\
\
"amount": 0\
\
}\
\
]

}`

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"service_id": 21558,\
\
"record_id": 1233243,\
\
"technological_cards": [{"id": 36069,\
\
"title": "Tech map",\
\
"technological_card_items": [{"id": 208568,\
\
"technological_card_id": 36069,\
\
"storage_id": 91303,\
\
"good_id": 6858783,\
\
"amount": 10,\
\
"price": 1000,\
\
"good": {"id": 6858783,\
\
"title": "Product",\
\
"unit": "G"\
\
}\
\
}\
\
]\
\
}\
\
],\
\
"consumables": [{"goods_transaction_id": 2180771,\
\
"record_id": 121793129,\
\
"service_id": 695486,\
\
"storage_id": 91303,\
\
"good_id": 6858783,\
\
"price": 1000,\
\
"amount": 10,\
\
"good": {"id": 6858783,\
\
"title": "Product",\
\
"unit": "G"\
\
}\
\
}\
\
]\
\
}\
\
],

"meta": [ ]

}`

## [tag/Product-Transactions](https://developer.alteg.io/api\#tag/Product-Transactions) Product Transactions

## [tag/Product-Transactions/operation/Search for product transactions](https://developer.alteg.io/api\#tag/Product-Transactions/operation/Search%20for%20product%20transactions) Search for product transactions

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### query Parameters

|     |     |
| --- | --- |
| page | number<br>Example: page=1<br>page number |
| count | number<br>Example: count=20<br>number of transactions per page |
| start\_date | string<br>Example: start\_date=''<br>period start date |
| end\_date | string<br>Example: end\_date=''<br>period end date |
| document\_id | string<br>Document ID |
| changed\_after | string<br>Filtering product transactions modified/created since a specific date and time |
| changed\_before | string<br>Filtering product transactions modified/created before a specific date and time |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/storages/transactions/{company\_id}

https://api.alteg.io/api/v1/storages/transactions/{company\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 123456789,\
\
"document_id": 22256643,\
\
"type_id": "987654321",\
\
"type": "Something",\
\
"good": {"id": "111222333",\
\
"title": "Something"\
\
},\
\
"storage": {"id": "333222111",\
\
"title": "Storage 1"\
\
},\
\
"unit": {"id": "333222111",\
\
"title": "milliliter"\
\
},\
\
"operation_unit_type": 1,\
\
"create_date": "2012-12-21T19:08:00+0400",\
\
"last_change_date": "2020-02-01T12:00:00+0400",\
\
"cost_per_unit": "1.07",\
\
"cost": "0.00",\
\
"discount": "10.00",\
\
"master": {"id": "112233445",\
\
"title": "James Smith"\
\
},\
\
"supplier": {"id": "11112222",\
\
"title": "Best Supplier Ever"\
\
},\
\
"record_id": 1,\
\
"service": {"id": "1234321",\
\
"title": "Service 4"\
\
},\
\
"clients": {"id": "4321234",\
\
"name": "George Smith",\
\
"phone": 79876543210\
\
}\
\
}\
\
],

"meta": [ ]

}`

## [tag/Product-Transactions/operation/Create Transaction](https://developer.alteg.io/api\#tag/Product-Transactions/operation/Create%20Transaction) Create Transaction

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| document\_id<br>required | number <float> <br>Document ID |
| good\_id<br>required | number<br>Item ID |
| amount<br>required | number<br>Quantity |
| cost\_per\_unit<br>required | number <float> <br>Unit cost |
| discount<br>required | number<br>Discount in % |
| cost<br>required | number <float> <br>Total transaction amount |
| operation\_unit\_type<br>required | number<br>unit type: 1 - for sale, 2 - for write-off |
| master\_id | number<br>ID of the staff member who sold the product |
| client\_id | number<br>ID of the customer who bought the product |
| supplier\_id | number<br>Vendor ID |
| comment | string<br>A comment |

### Responses

**200**

OK

post/storage\_operations/goods\_transactions/{company\_id}

https://api.alteg.io/api/v1/storage\_operations/goods\_transactions/{company\_id}

### Request samples

- Payload

Content type

application/json

Copy

`{"document_id": 22254960,

"good_id": 232674,

"amount": 1,

"cost_per_unit": 100,

"discount": 10,

"cost": 90,

"operation_unit_type": 1,

"master_id": 26781,

"client_id": 0,

"supplier_id": 0,

"comment": "Transaction comment"

}`

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 3428010,

"document_id": 22254960,

"type_id": 1,

"type": {"id": 1,

"title": "Sale of goods"

},

"company_id": 4564,

"good_id": 232674,

"amount": -1,

"cost_per_unit": 100,

"discount": 10,

"cost": 90,

"unit_id": 1,

"storage_id": 36539,

"supplier_id": 0,

"client_id": 0,

"master_id": 26781,

"create_date": "2025-09-21T23:00:00.000+03:00",

"last_change_date": "2020-02-01T12:00:00+0400",

"comment": "Transaction comment",

"deleted": false,

"good": {"id": 232674,

"title": "Edition De Luxe"

},

"storage": {"id": 36539,

"title": "Products"

},

"supplier": [ ],

"client": [ ],

"master": {"id": "26781",

"name": "Angelina Jolie"

},

"unit": {"id": 1,

"title": "Thing"

}

},

"meta": [ ]

}`

## [tag/Product-Transactions/operation/Receiving a transaction](https://developer.alteg.io/api\#tag/Product-Transactions/operation/Receiving%20a%20transaction) Receiving a transaction

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| transaction\_id<br>required | number<br>transaction ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/storage\_operations/goods\_transactions/{company\_id}/{transaction\_id}

https://api.alteg.io/api/v1/storage\_operations/goods\_transactions/{company\_id}/{transaction\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 3428010,

"document_id": 22254960,

"type_id": 1,

"type": {"id": 1,

"title": "Sale of goods"

},

"company_id": 4564,

"good_id": 232674,

"amount": -1,

"cost_per_unit": 100,

"discount": 10,

"cost": 90,

"unit_id": 1,

"storage_id": 36539,

"supplier_id": 0,

"client_id": 0,

"master_id": 26781,

"create_date": "2025-09-21T23:00:00.000+03:00",

"comment": "Transaction comment",

"deleted": false,

"good": {"id": 232674,

"title": "Edition De Luxe",

"unit": "PC.",

"value": "delete yy",

"label": "delete yy",

"article": "",

"category": "goose category",

"category_id": 303603,

"salon_id": 91372,

"good_id": 15086312,

"cost": 500,

"unit_id": 216760,

"unit_short_title": "PC",

"service_unit_id": 216760,

"service_unit_short_title": "PC",

"actual_cost": 0,

"unit_actual_cost": 0,

"unit_actual_cost_format": "0 USD",

"unit_equals": 1,

"barcode": "",

"loyalty_abonement_type_id": 0,

"loyalty_certificate_type_id": 0,

"loyalty_allow_empty_code": 1,

"actual_amounts": [ ],

"last_change_date": "2021-03-05T18:21:34+0400"

},

"storage": {"id": 36539,

"title": "Products"

},

"sale_unit": null,

"service_unit": null,

"supplier": [ ],

"client": [ ],

"master": {"id": "26781",

"name": "Angelina Jolie"

},

"unit": {"id": 1,

"title": "Thing",

"short_title": "PC."

}

},

"meta": [ ]

}`

## [tag/Product-Transactions/operation/Transaction update](https://developer.alteg.io/api\#tag/Product-Transactions/operation/Transaction%20update) Transaction update

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| transaction\_id<br>required | number<br>transaction ID |
| company\_id<br>required | number<br>location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: \*/\*  required

|     |     |
| --- | --- |
| document\_id<br>required | number <float> <br>Document ID |
| good\_id<br>required | number<br>Item ID |
| amount<br>required | number<br>Quantity |
| cost\_per\_unit<br>required | number <float> <br>Unit cost |
| discount<br>required | number<br>Discount in % |
| cost<br>required | number <float> <br>Total transaction amount |
| operation\_unit\_type<br>required | number<br>unit type: 1 - for sale, 2 - for write-off |
| master\_id | number<br>ID of the staff member who sold the product |
| client\_id | number<br>ID of the customer who bought the product |
| supplier\_id | number<br>Vendor ID |
| comment | string<br>A comment |

### Responses

**200**

OK

put/storage\_operations/goods\_transactions/{company\_id}/{transaction\_id}

https://api.alteg.io/api/v1/storage\_operations/goods\_transactions/{company\_id}/{transaction\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 3428010,

"document_id": 22254960,

"type_id": 1,

"type": {"id": 1,

"title": "Sale of goods"

},

"company_id": 4564,

"good_id": 232674,

"amount": -1,

"cost_per_unit": 100,

"discount": 10,

"cost": 90,

"unit_id": 1,

"operation_unit_type": 1,

"storage_id": 36539,

"supplier_id": 0,

"client_id": 0,

"master_id": 26781,

"create_date": "2025-09-21T23:00:00.000+03:00",

"last_change_date": "2020-02-01T12:00:00+0400",

"comment": "Updated transaction comment",

"deleted": false,

"good": {"id": 232674,

"title": "Edition De Luxe"

},

"storage": {"id": 36539,

"title": "Products"

},

"supplier": [ ],

"client": [ ],

"master": {"id": "26781",

"name": "Angelina Jolie"

},

"unit": {"id": 1,

"title": "Thing"

}

},

"meta": [ ]

}`

## [tag/Product-Transactions/operation/Deleting a transaction](https://developer.alteg.io/api\#tag/Product-Transactions/operation/Deleting%20a%20transaction) Deleting a transaction

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| transaction\_id<br>required | number<br>transaction ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**202**

Accepted

delete/storage\_operations/goods\_transactions/{company\_id}/{transaction\_id}

https://api.alteg.io/api/v1/storage\_operations/goods\_transactions/{company\_id}/{transaction\_id}

## [tag/Inventory-Operations](https://developer.alteg.io/api\#tag/Inventory-Operations) Inventory Operations

## [tag/Inventory-Operations/operation/Create an inventory operation](https://developer.alteg.io/api\#tag/Inventory-Operations/operation/Create%20an%20inventory%20operation) Create an inventory operation

An inventory operation is created by submitting a document along with multiple product transactions in a single API request. If a payment type is specified, the corresponding financial transactions will be generated automatically.

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: \*/\*  required

|     |     |
| --- | --- |
| type\_id<br>required | number<br>Document type (sale 1, receipt 3, write-off 4, transfer 5) |
| comment | string<br>A comment |
| create\_date<br>required | string <date-time> <br>Document creation date |
| master\_id | number<br>staff member ID |
| storage\_id<br>required | number<br>Inventory ID |
| goods\_transactions<br>required | Array of objects<br>An array of objects containing transaction parameters, similar to a request to create a product transaction |

### Responses

**200**

OK

post/storage\_operations/operation/{company\_id}

https://api.alteg.io/api/v1/storage\_operations/operation/{company\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"document": {"id": 22255506,

"type_id": 1,

"type": {"id": 1,

"title": "Sale of goods"

},

"storage_id": 91271,

"user_id": 999290,

"company_id": 4564,

"number": 1254,

"comment": "test document comment",

"create_date": "2025-09-21T23:00:00.000+03:00",

"storage": {"id": 91271,

"title": "Secret place"

},

"company": {"id": 4564,

"title": "Business example",

"country_id": 1,

"city_id": 2,

"timezone": 3,

"address": "New York, 787 Jackson Drive",

"coordinate_lat": "40.730610",

"coordinate_lon": "-73.935242",

"logo": "https://app.alteg.io/uploads/s_120d9410f1472a4e6bdbafefe7eeba42.png",

"zip": "",

"phones": [ ],

"site": "www.example.com"

},

"user": {"id": "999290",

"name": "User name",

"phone": "+1-315-555-0175"

}

},

"transactions": [{"id": 3428012,\
\
"document_id": 22255506,\
\
"type_id": 1,\
\
"type": {"id": 1,\
\
"title": "Sale of goods"\
\
},\
\
"company_id": 4564,\
\
"good_id": 232674,\
\
"amount": -1,\
\
"cost_per_unit": 100,\
\
"discount": 10,\
\
"cost": 90,\
\
"unit_id": 1,\
\
"storage_id": 91271,\
\
"supplier_id": 0,\
\
"client_id": 0,\
\
"master_id": 0,\
\
"create_date": "2025-09-21T23:00:00.000+03:00",\
\
"comment": "test transaction comment",\
\
"deleted": false,\
\
"good": {"id": 232674,\
\
"title": "Edition De Luxe"\
\
},\
\
"storage": {"id": 91271,\
\
"title": "Secret place"\
\
},\
\
"supplier": [ ],\
\
"client": [ ],\
\
"master": [ ],\
\
"unit": {"id": 1,\
\
"title": "Thing"\
\
}\
\
}\
\
]

},

"meta": [ ]

}`

## [tag/Inventory-Operations-Documents](https://developer.alteg.io/api\#tag/Inventory-Operations-Documents) Inventory Operations Documents

## [tag/Inventory-Operations-Documents/operation/Create Document](https://developer.alteg.io/api\#tag/Inventory-Operations-Documents/operation/Create%20Document) Create document

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| type\_id<br>required | number<br>Document type (sale 1, receipt 3, write-off 7) |
| comment | string<br>A comment |
| storage\_id<br>required | number<br>Inventory ID |
| create\_date<br>required | string <date-time> <br>Date of the inventory transaction |

### Responses

**200**

OK

post/storage\_operations/documents/{company\_id}

https://api.alteg.io/api/v1/storage\_operations/documents/{company\_id}

### Request samples

- Payload

Content type

application/json

Copy

`{"type_id": 1,

"comment": "Document comment",

"storage_id": 36539,

"create_date": "2025-09-21T23:00:00.000+03:00"

}`

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 22255503,

"type_id": 1,

"type": {"id": 1,

"title": "Sale of goods"

},

"storage_id": 36539,

"user_id": 999290,

"company_id": 4564,

"number": 1251,

"comment": "Document comment",

"create_date": "2017-04-24 20:00:00",

"storage": {"id": 36539,

"title": "Products"

},

"company": {"id": 4564,

"title": "Business example",

"country_id": 1,

"city_id": 2,

"timezone": 3,

"address": "New York, 787 Jackson Drive",

"ccoordinate_lat": "40.730610",

"coordinate_lon": "-73.935242",

"logo": "https://app.alteg.io/uploads/s_120d9410f1472a4e6bdbafefe7eeba42.png",

"zip": "",

"phones": [ ],

"site": "www.example.com"

},

"user": {"id": "999290",

"name": "User name",

"phone": "+1-315-555-0175"

}

},

"meta": [ ]

}`

## [tag/Inventory-Operations-Documents/operation/Get document](https://developer.alteg.io/api\#tag/Inventory-Operations-Documents/operation/Get%20document) Get document

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| document\_id<br>required | number<br>Document ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/storage\_operations/documents/{company\_id}/{document\_id}

https://api.alteg.io/api/v1/storage\_operations/documents/{company\_id}/{document\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 22255503,

"type_id": 1,

"type": {"id": 1,

"title": "Sale of goods"

},

"storage_id": 36539,

"user_id": 999290,

"company_id": 4564,

"number": 1251,

"comment": "Document comment",

"create_date": "2017-04-24 20:00:00",

"storage": {"id": 36539,

"title": "Products"

},

"company": {"id": 4564,

"title": "Business example",

"country_id": 1,

"city_id": 2,

"timezone": 3,

"address": "New York, 787 Jackson Drive",

"coordinate_lat": "40.730610",

"coordinate_lon": "-73.935242",

"logo": "https://app.alteg.io/uploads/s_120d9410f1472a4e6bdbafefe7eeba42.png",

"zip": "",

"phones": [ ],

"site": "www.example.com"

},

"user": {"id": "999290",

"name": "User name",

"phone": "+1-315-555-0175"

}

},

"meta": [ ]

}`

## [tag/Inventory-Operations-Documents/operation/Update Document](https://developer.alteg.io/api\#tag/Inventory-Operations-Documents/operation/Update%20Document) Update Document

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| document\_id<br>required | number<br>Document ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: \*/\*  required

|     |     |
| --- | --- |
| type\_id<br>required | number<br>Document type (sale 1, receipt 3, write-off 7) |
| comment | string<br>A comment |
| storage\_id<br>required | number<br>Inventory ID |
| create\_date<br>required | string <date-time> <br>Date of the inventory transaction |

### Responses

**200**

OK

put/storage\_operations/documents/{company\_id}/{document\_id}

https://api.alteg.io/api/v1/storage\_operations/documents/{company\_id}/{document\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 22255503,

"type_id": 1,

"type": {"id": 1,

"title": "Sale of goods"

},

"storage_id": 36539,

"user_id": 999290,

"company_id": 4564,

"number": 1251,

"comment": "Updated document comment",

"create_date": "2025-09-21T23:00:00.000+03:00",

"storage": {"id": 36539,

"title": "Products"

},

"company": {"id": 4564,

"title": "Business example",

"country_id": 1,

"city_id": 2,

"timezone": 3,

"address": "New York, 787 Jackson Drive",

"coordinate_lat": "40.730610",

"coordinate_lon": "-73.935242",

"logo": "https://app.alteg.io/uploads/s_120d9410f1472a4e6bdbafefe7eeba42.png",

"zip": "",

"phones": [ ],

"site": "www.example.com"

},

"user": {"id": "999290",

"name": "User name",

"phone": "+1-315-555-0175"

}

},

"meta": [ ]

}`

## [tag/Inventory-Operations-Documents/operation/Delete document](https://developer.alteg.io/api\#tag/Inventory-Operations-Documents/operation/Delete%20document) Delete document

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| document\_id<br>required | number<br>Document ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**202**

Accepted

delete/storage\_operations/documents/{company\_id}/{document\_id}

https://api.alteg.io/api/v1/storage\_operations/documents/{company\_id}/{document\_id}

## [tag/Inventory-Operations-Documents/operation/Get document financial transactions](https://developer.alteg.io/api\#tag/Inventory-Operations-Documents/operation/Get%20document%20financial%20transactions) Get document financial transactions

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| document\_id<br>required | number<br>Document ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/storage\_operations/documents/finance\_transactions/{document\_id}

https://api.alteg.io/api/v1/storage\_operations/documents/finance\_transactions/{document\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 9053737,\
\
"date": "2025-09-21T23:00:00.000+03:00",\
\
"type_id": 2640,\
\
"expense_id": 2640,\
\
"account_id": 35501,\
\
"amount": 434,\
\
"client_id": 4240788,\
\
"master_id": 0,\
\
"supplier_id": 0,\
\
"comment": "Transaction comment",\
\
"item_id": 0,\
\
"target_type_id": 0,\
\
"record_id": 0,\
\
"expense": {"id": 2640,\
\
"title": "Provision of corporate services"\
\
},\
\
"account": {"id": 35501,\
\
"title": "Cash register",\
\
"type_id": 0,\
\
"type": 0,\
\
"comment": "",\
\
"company_id": 4564\
\
},\
\
"client": {"id": "4240788",\
\
"name": "Client",\
\
"phone": "+1-315-555-0175"\
\
},\
\
"master": [ ],\
\
"supplier": [ ]\
\
},\
\
{"id": 9053738,\
\
"date": "2025-09-21T23:00:00.000+03:00",\
\
"type_id": 2640,\
\
"expense_id": 2640,\
\
"account_id": 35501,\
\
"amount": 434,\
\
"client_id": 4240788,\
\
"master_id": 0,\
\
"supplier_id": 0,\
\
"comment": "Transaction comment",\
\
"item_id": 0,\
\
"target_type_id": 0,\
\
"record_id": 0,\
\
"expense": {"id": 2640,\
\
"title": "Provision of corporate services"\
\
},\
\
"account": {"id": 35501,\
\
"title": "Cash register",\
\
"type_id": 0,\
\
"type": 0,\
\
"comment": "",\
\
"company_id": 4564\
\
},\
\
"client": {"id": "4240788",\
\
"name": "Client",\
\
"phone": "+1-315-555-0175"\
\
},\
\
"master": [ ],\
\
"supplier": [ ]\
\
}\
\
],

"meta": [ ]

}`

## [tag/Inventory-Operations-Documents/operation/Get Product Transactions of a Document](https://developer.alteg.io/api\#tag/Inventory-Operations-Documents/operation/Get%20Product%20Transactions%20of%20a%20Document) Get Product Transactions of a Document

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| document\_id<br>required | number<br>Document ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/storage\_operations/documents/goods\_transactions/{document\_id}

https://api.alteg.io/api/v1/storage\_operations/documents/goods\_transactions/{document\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 3728232,\
\
"document_id": 22256643,\
\
"type_id": 1,\
\
"company_id": 4564,\
\
"good_id": 587018,\
\
"amount": -10,\
\
"cost_per_unit": 100,\
\
"discount": 0,\
\
"cost": 1000,\
\
"unit_id": 88272,\
\
"operation_unit_type": 1,\
\
"storage_id": 36539,\
\
"supplier_id": 0,\
\
"record_id": 0,\
\
"client_id": 0,\
\
"master_id": 49754,\
\
"create_date": "2025-09-21T23:00:00.000+03:00",\
\
"comment": "",\
\
"service_id": 0,\
\
"user_id": 3,\
\
"deleted": false,\
\
"pkg_amount": 0\
\
},\
\
{"id": 3728233,\
\
"document_id": 22256643,\
\
"type_id": 1,\
\
"company_id": 4564,\
\
"good_id": 232674,\
\
"amount": -10,\
\
"cost_per_unit": 127.5,\
\
"discount": 0,\
\
"cost": 1275,\
\
"unit_id": 1,\
\
"operation_unit_type": 2,\
\
"storage_id": 36539,\
\
"supplier_id": 0,\
\
"record_id": 0,\
\
"client_id": 0,\
\
"master_id": 49754,\
\
"create_date": "2025-09-21T23:00:00.000+03:00",\
\
"comment": "",\
\
"service_id": 0,\
\
"user_id": 3,\
\
"deleted": false,\
\
"pkg_amount": 0\
\
}\
\
],

"meta": {"count": 2

}

}`

## [tag/Client-personal-accounts](https://developer.alteg.io/api\#tag/Client-personal-accounts) Client personal accounts

## [tag/Client-personal-accounts/operation/Creation of a client personal account topup operation](https://developer.alteg.io/api\#tag/Client-personal-accounts/operation/Creation%20of%20a%20client%20personal%20account%20topup%20operation) Creation of a client personal account topup operation

Creating a transaction with a personal account involves creating a document, a transaction with a personal account, and a financial transaction within a single API request.

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| salon\_id<br>required | number<br>Location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: \*/\*  optional

|     |     |
| --- | --- |
| client\_id<br>required | number<br>ID of the client, the owner of the client personal account |
| deposit\_id<br>required | number<br>personal account ID |
| amount<br>required | number<br>replenishment amount |
| master\_id | number<br>staff member ID |
| account\_id<br>required | number<br>Checkout ID for payment |

### Responses

**200**

OK

post/deposits\_operations/{salon\_id}

https://api.alteg.io/api/v1/deposits\_operations/{salon\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"document": {"id": 1,

"user_id": 1,

"salon_id": 1,

"type_id": 9,

"type": {"id": 9,

"title": "Account replenishment (advance payment)"

},

"comment": "",

"number": 1,

"salon": {"id": 1,

"title": "Location in New York",

"public_title": "Location in New York",

"business_group_id": 1,

"business_type_id": 1,

"country_id": 1,

"city_id": 2,

"timezone": 3,

"timezone_name": "America/New_York",

"address": "New York, 787 Jackson Drive",

"coordinate_lat": "40.730610",

"coordinate_lon": "-73.935242",

"logo": "http://app.alteg.io/images/icon.png",

"zip": "129090",

"phone": "+1-315-555-0175",

"phones": [ ],

"site": "www.example.com",

"allow_delete_record": true,

"allow_change_record": true

},

"user": {"id": 1,

"name": "James Smith",

"phone": "+1-315-555-0175"

}

},

"deposits_transactions": [{"id": 1,\
\
"salon_id": 1,\
\
"salon_group_id": 1,\
\
"document_id": 1,\
\
"deposit_id": 1,\
\
"deposit_type_id": 1,\
\
"master_id": 1,\
\
"user_id": 1,\
\
"amount": 100.5,\
\
"comment": "",\
\
"date_create": "2025-09-21T23:00:00.000+03:00",\
\
"deleted": false,\
\
"deposit": {"id": 1,\
\
"deposit_type_id": 1,\
\
"salon_group_id": 1,\
\
"initial_balance": 10000,\
\
"balance": 12239.56,\
\
"blocked": false,\
\
"date_create": "2025-09-21T23:00:00.000+03:00"\
\
},\
\
"deposit_type": {"id": 1,\
\
"salon_group_id": 1,\
\
"title": "Account type 1",\
\
"date_create": "2025-09-21T23:00:00.000+03:00",\
\
"deleted": false\
\
}\
\
}\
\
],

"payment_transactions": [{"id": 1,\
\
"document_id": 1,\
\
"date": "2025-09-21T23:00:00.000+03:00",\
\
"type_id": 10,\
\
"expense_id": 10,\
\
"account_id": 1,\
\
"amount": 100.5,\
\
"client_id": 1,\
\
"master_id": 1,\
\
"supplier_id": 0,\
\
"comment": "",\
\
"item_id": 1,\
\
"target_type_id": 0,\
\
"record_id": 0,\
\
"goods_transaction_id": 0,\
\
"type": {"id": 10,\
\
"title": "Refill"\
\
}\
\
}\
\
]

},

"meta": [ ]

}`

## [tag/Client-personal-accounts/operation/Get a List of Client Personal Accounts by Location and Client](https://developer.alteg.io/api\#tag/Client-personal-accounts/operation/Get%20a%20List%20of%20Client%20Personal%20Accounts%20by%20Location%20and%20Client) Get a List of Client Personal Accounts by Location and Client

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Location ID |
| client\_id<br>required | number<br>Client ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |

### Responses

**200**

OK

get/deposits/company/{company\_id}/client/{client\_id}

https://api.alteg.io/api/v1/deposits/company/{company\_id}/client/{client\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"deposit": {"id": 1,\
\
"salon_group_id": 1,\
\
"deposit_type_id": 1,\
\
"initial_balance": 0,\
\
"balance": 1000,\
\
"blocked": false,\
\
"date_create": "2025-09-21T23:00:00.000+03:00"\
\
},\
\
"deposit_type": {"id": 1,\
\
"salon_group_id": 1,\
\
"title": "Account type header",\
\
"date_create": "2025-09-21T23:00:00.000+03:00",\
\
"deleted": false\
\
}\
\
}\
\
],

"meta": {"count": 1

}

}`

## [tag/Client-personal-accounts/operation/Getting a list of personal accounts by chain and a set of filters](https://developer.alteg.io/api\#tag/Client-personal-accounts/operation/Getting%20a%20list%20of%20personal%20accounts%20by%20chain%20and%20a%20set%20of%20filters) Getting a list of personal accounts by chain and a set of filters

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| chain\_id<br>required | number<br>Chain ID |

##### query Parameters

|     |     |
| --- | --- |
| balance\_from | number<br>Minimum balance for filtering |
| balance\_to | number<br>Maximum balance for filtering |
| page | number<br>Page number |
| limit | number<br>Number of items per page |

##### header Parameters

|     |     |
| --- | --- |
| Accept | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |

### Responses

**200**

OK

get/deposits/chain/{chain\_id}

https://api.alteg.io/api/v1/deposits/chain/{chain\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"deposit": {"id": 1,\
\
"salon_group_id": 1,\
\
"deposit_type_id": 1,\
\
"initial_balance": 0,\
\
"balance": 1000,\
\
"blocked": false,\
\
"date_create": "2025-09-21T23:00:00.000+03:00"\
\
},\
\
"deposit_type": {"id": 1,\
\
"salon_group_id": 1,\
\
"title": "Account type header",\
\
"date_create": "2025-09-21T23:00:00.000+03:00",\
\
"deleted": false\
\
},\
\
"client": {"id": 1,\
\
"name": "Client name",\
\
"phone": 71234567890\
\
}\
\
}\
\
],

"meta": {"count": 1

}

}`

## [tag/Client-personal-accounts/operation/Getting a list of personal accounts by chain and customer phone number](https://developer.alteg.io/api\#tag/Client-personal-accounts/operation/Getting%20a%20list%20of%20personal%20accounts%20by%20chain%20and%20customer%20phone%20number) Getting a list of personal accounts by chain and customer phone number

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| chain\_id<br>required | number<br>Chain ID |
| phone<br>required | number<br>Customer phone number |

##### header Parameters

|     |     |
| --- | --- |
| Accept | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |

### Responses

**200**

OK

get/deposits/chain/{chain\_id}/phone/{phone}

https://api.alteg.io/api/v1/deposits/chain/{chain\_id}/phone/{phone}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"deposit": {"id": 1,\
\
"salon_group_id": 1,\
\
"deposit_type_id": "1,",\
\
"initial_balance": 0,\
\
"balance": 1000,\
\
"blocked": false,\
\
"date_create": "2025-09-21T23:00:00.000+03:00"\
\
},\
\
"deposit_type": {"id": 1,\
\
"salon_group_id": 1,\
\
"title": "Account type header",\
\
"date_create": "2025-09-21T23:00:00.000+03:00",\
\
"deleted": false\
\
}\
\
}\
\
],

"meta": {"count": 1

}

}`

## [tag/Country](https://developer.alteg.io/api\#tag/Country) Country

## [tag/Country/operation/Get a list of countries](https://developer.alteg.io/api\#tag/Country/operation/Get%20a%20list%20of%20countries) Get a list of countries

##### Authorizations:

_bearer_

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token |

### Responses

**200**

OK

get/countries

https://api.alteg.io/api/v1/countries

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": "1",\
\
"title": "USA",\
\
"full_title": "United States",\
\
"phone_code": "1",\
\
"phone_template": "+1 xxx xxx-xx-xx",\
\
"phone_example": "+1 760 230-63-78",\
\
"currency": "USD",\
\
"exchange": "1"\
\
},\
\
{"id": "2",\
\
"title": "Latvia",\
\
"full_title": "Latvian republic",\
\
"phone_code": "371",\
\
"phone_template": "+371 xx xxx xxx",\
\
"phone_example": "+371 21 654 987",\
\
"currency": "EUR",\
\
"exchange": "50"\
\
}\
\
],

"meta": [ ]

}`

## [tag/Location-Chains](https://developer.alteg.io/api\#tag/Location-Chains) Location Chains

## [tag/Location-Chains/operation/Obtaining chains available to the user](https://developer.alteg.io/api\#tag/Location-Chains/operation/Obtaining%20chains%20available%20to%20the%20user) Obtaining chains available to the user

The location chain object has the following fields:

| Field | Type | Description |
| --- | --- | --- |
| id | number | Location chain ID |
| title | string | Location chain name |
| locations | array | List of chain locations |
| access | object | Object with access rights for chain management |

##### Authorizations:

(_bearer__user_)

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/groups

https://api.alteg.io/api/v1/groups

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 509,\
\
"title": "Chain of salons in New York",\
\
"companies": [{"id": 38726,\
\
"title": "Location in New York"\
\
},\
\
{"id": 39287,\
\
"title": "Location in New York"\
\
}\
\
],\
\
"access": {"settings_access": "1",\
\
"clients_access": "1",\
\
"users_access": "1",\
\
"loyalty_access": "1",\
\
"loyalty_cards_manual_transactions_access": "1",\
\
"chain_services_access": "1"\
\
}\
\
},\
\
{"id": 508,\
\
"title": "Chain of salons in New York",\
\
"companies": [{"id": 38545,\
\
"title": "Location in New York"\
\
},\
\
{"id": 38704,\
\
"title": "Location in New York"\
\
}\
\
],\
\
"access": {"settings_access": "1",\
\
"clients_access": "1",\
\
"users_access": "1",\
\
"loyalty_access": "1",\
\
"loyalty_cards_manual_transactions_access": "1",\
\
"chain_services_access": "1"\
\
}\
\
}\
\
]

}`

## [tag/Z-Report](https://developer.alteg.io/api\#tag/Z-Report) Z-Report

## [tag/Z-Report/operation/Get Z-Report data](https://developer.alteg.io/api\#tag/Z-Report/operation/Get%20Z-Report%20data) Get Z-Report data

- start\_date: Report date

- master\_id: staff member ID


##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | integer<br>location ID |

##### query Parameters

|     |     |
| --- | --- |
| start\_date | string<br>Example: start\_date=''<br>period start date |
| master\_id | integer<br>Example: master\_id=0<br>staff member ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/reports/z\_report/{company\_id}

https://api.alteg.io/api/v1/reports/z\_report/{company\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"stats": {"clients": 7,

"clients_average": 123.45,

"records": 14,

"records_average": 4231.51,

"visit_records": 13,

"visit_records_average": 100500.01,

"non_visit_records": 1,

"non_visit_records_average": 200,

"targets": 14,

"targets_paid": 10255,

"goods": 4,

"goods_paid": 12452.18,

"certificates": 1,

"certificates_paid": 9876,

"abonement": 0,

"abonement_paid": 0

},

"paids": {"accounts": [{"title": "Cards",\
\
"amount": 6987\
\
},\
\
{"title": "Cash",\
\
"amount": 54321.13\
\
},\
\
{"title": "Cash register",\
\
"amount": 12531\
\
}\
\
],

"discount": [{"title": "Advance Discount",\
\
"amount": 1816.875\
\
},\
\
{"title": "Written off bonuses",\
\
"amount": 800\
\
},\
\
{"title": "Promotion discount",\
\
"amount": 123\
\
}\
\
],

"total": {"accounts": 2657.13,

"discount": 1241.875

}

},

"z_data": {"2025-09-21T23:00:00.000+03:00": [{"client_id": "11223344",\
\
"client_name": "John Smith",\
\
"client_phone": "+1-315-555-0175",\
\
"client_email": "j.smith@example.com",\
\
"masters": [{"master_id": "321123",\
\
"master_name": "Robert Brown",\
\
"service": [{"item_title": "Highlighting from 9 strands",\
\
"first_cost": 3500,\
\
"discount": 0,\
\
"result_cost": 3500,\
\
"transactions": [{"accounts_amount": 0,\
\
"loyalty_amount": 700,\
\
"payment_type": "Card: Gold Card"\
\
},\
\
{"accounts_amount": 0,\
\
"loyalty_amount": 100,\
\
"payment_type": "Card: Gold Card"\
\
},\
\
{"accounts_amount": 0,\
\
"loyalty_amount": 1,\
\
"payment_type": "Card: Bonus card"\
\
}\
\
]\
\
}\
\
],\
\
"good": [{"item_title": "Spray For Hair",\
\
"first_cost": 15,\
\
"discount": 2.25,\
\
"result_cost": 12.75,\
\
"transactions": [{"accounts_amount": 12.75,\
\
"loyalty_amount": 0,\
\
"payment_type": "Cash"\
\
}\
\
]\
\
}\
\
],\
\
"others": {"item_title": "Other operations",\
\
"first_cost": 347,\
\
"discount": 0,\
\
"result_cost": 347,\
\
"transactions": [{"accounts_amount": 23,\
\
"loyalty_amount": 0,\
\
"payment_type": "Cash"\
\
},\
\
{"accounts_amount": 324,\
\
"loyalty_amount": 0,\
\
"payment_type": "Cash"\
\
}\
\
]\
\
}\
\
}\
\
]\
\
}\
\
]

},

"currency": "USD"

},

"meta": [ ]

}`

## [tag/Additional-Fields](https://developer.alteg.io/api\#tag/Additional-Fields) Additional Fields

## [tag/Additional-Fields/operation/Getting a collection of location fields](https://developer.alteg.io/api\#tag/Additional-Fields/operation/Getting%20a%20collection%20of%20location%20fields) Getting a collection of location fields

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| field\_category<br>required | string<br>Example: record<br>Field category.<br>- For appointments - appointment<br>  <br>- For clients - client |
| company\_id<br>required | integer<br>location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/custom\_fields/{field\_category}/{company\_id}

https://api.alteg.io/api/v1/custom\_fields/{field\_category}/{company\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 1,\
\
"salon_id": 1,\
\
"custom_field": {"id": 1,\
\
"code": "my_text_field",\
\
"show_in_ui": true,\
\
"title": "test field",\
\
"user_can_edit": true,\
\
"type": {"code": "text",\
\
"title": "Text"\
\
}\
\
}\
\
}\
\
],

"meta": [ ]

}`

## [tag/Additional-Fields/operation/Adding an Additional Field](https://developer.alteg.io/api\#tag/Additional-Fields/operation/Adding%20an%20Additional%20Field) Adding an Additional Field

To add a field, the user must be part of the **Chain associated with the location** and have the appropriate access rights in the following section:

**Settings → Access → Additional Fields → Create additional fields**

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| field\_category<br>required | string<br>Example: record<br>Field category.<br>- For appointments - appointment<br>  <br>- For clients - client |
| company\_id<br>required | integer<br>location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| type<br>required | string<br>Field type |
| code<br>required | string<br>Field ID |
| title<br>required | string<br>Field name |
| user\_can\_edit<br>required | boolean<br>Can the user edit the field |
| show\_in\_ui<br>required | boolean<br>Whether to show the field in the interface |

### Responses

**200**

OK

post/custom\_fields/{field\_category}/{company\_id}

https://api.alteg.io/api/v1/custom\_fields/{field\_category}/{company\_id}

### Request samples

- Payload

Content type

application/json

Copy

`{"type": "text",

"code": "my_text_field",

"title": "test field",

"user_can_edit": true,

"show_in_ui": true

}`

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 1,

"salon_id": 1,

"custom_field": {"id": 1,

"code": "my_text_field",

"show_in_ui": true,

"title": "test field",

"user_can_edit": true,

"type": {"code": "text",

"title": "Text"

}

}

},

"meta": [ ]

}`

## [tag/Additional-Fields/operation/Update an Additional Field](https://developer.alteg.io/api\#tag/Additional-Fields/operation/Update%20an%20Additional%20Field) Update an Additional Field

To update a field, the user must be part of the **Chain associated with the location** and have the appropriate access rights in the following section

**Settings → Access → Additional Fields → Modify additional fields**

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| field\_category<br>required | string<br>Example: record<br>Field category.<br>- For appointments - appointment<br>  <br>- For clients - client |
| company\_id<br>required | integer<br>location ID |
| field\_id<br>required | integer<br>field ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| type<br>required | string<br>Field type |
| code<br>required | string<br>Field ID |
| title<br>required | string<br>Field name |
| user\_can\_edit<br>required | boolean<br>Can the user edit the field |
| show\_in\_ui<br>required | boolean<br>Whether to show the field in the interface |

### Responses

**202**

Accepted

**403**

Forbidden

**404**

Not Found

put/custom\_fields/{field\_category}/{company\_id}/{field\_id}

https://api.alteg.io/api/v1/custom\_fields/{field\_category}/{company\_id}/{field\_id}

### Request samples

- Payload

Content type

application/json

Copy

`{"type": "text",

"code": "my_text_field",

"title": "test field",

"user_can_edit": true,

"show_in_ui": true

}`

### Response samples

- 202
- 403
- 404

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": null,

"meta": {"message": "Saved"

}

}`

## [tag/Additional-Fields/operation/Remove an Additional Field from a Location](https://developer.alteg.io/api\#tag/Additional-Fields/operation/Remove%20an%20Additional%20Field%20from%20a%20Location) Remove an Additional Field from a Location

To remove a field, the user must be part of the **Chain associated with the location** and have the appropriate access rights in the following section:

**Settings → Access → Additional Fields → Remove additional fields**

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| field\_category<br>required | string<br>Example: record<br>Field category.<br>- For appointments - appointment<br>  <br>- For clients - client |
| company\_id<br>required | integer<br>location ID |
| field\_id<br>required | integer<br>field ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

**403**

Forbidden

**404**

Not Found

delete/custom\_fields/{field\_category}/{company\_id}/{field\_id}

https://api.alteg.io/api/v1/custom\_fields/{field\_category}/{company\_id}/{field\_id}

### Response samples

- 200
- 403
- 404

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": null,

"meta": {"message": "Deleted"

}

}`

## [tag/Sending-SMS-through-operators](https://developer.alteg.io/api\#tag/Sending-SMS-through-operators) Sending SMS through operators

## [tag/Sending-SMS-through-operators/operation/Getting message statuses](https://developer.alteg.io/api\#tag/Sending-SMS-through-operators/operation/Getting%20message%20statuses) Getting Message Statuses

### Get message statuses

| Number | Title |
| --- | --- |
| 1 | Delivered |
| 2 | Not delivered |
| 4 | Sent to phone |
| 8 | Transferred to the operator |
| 16 | Rejected by operator |
| 52 | Not enough funds |

In the event of an error, the corresponding HTTP status code is returned. In some cases, a descriptive error message is also included in the response.
The following error codes may be returned by all API methods:

| error code | Http status code | Title | Description |
| --- | --- | --- | --- |
| 5 | 400 | ENTITY\_VALIDATION\_ERROR | The request body did not pass validation |
| 10 | 400 | FIELD\_VALIDATION\_ERROR | Parameter not validated |
| 15 | 403 | ACCESS\_FORBIDDEN | The action is not available, the application does not have the required permissions. |
| 20 | 401 | INVALID\_PARTNER\_TOKEN | partner\_token missing or invalid |
| 30 | 404 | RESOURCE\_NOT\_FOUND | The resource at the requested path does not exist |

When sending SMS, the delivery\_callback\_url attribute is passed in the request - this is the url to which message statuses should be sent.

Use it to send message statuses. Url to which message statuses should be sent - [https://app.alteg.io/smsprovider/status/callback/{partner\_token}](https://app.alteg.io/smsprovider/status/callback/%7Bpartner_token%7D)

##### Authorizations:

_bearer_

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token |

##### Request Body schema: application/json  required

Array

|     |     |
| --- | --- |
| id | string<br>Identifier |
| status | number<br>Message status |
| payment\_sum | number<br>Full message cost |
| currency\_iso | string<br>Currency ISO |
| parts\_amount | number<br>Amount of message's parts |

### Responses

**200**

OK

**400**

Bad Request

**401**

Unauthorized

**404**

Not Found

post/delivery/status

https://api.alteg.io/api/v1/delivery/status

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`[{"id": "232674",\
\
"status": 1,\
\
"payment_sum": 0.045,\
\
"currency_iso": "EUR",\
\
"parts_amount": 2\
\
}\
\
]`

### Response samples

- 200
- 400
- 401
- 404

Content type

application/json

Copy

`{"success": true

}`

## [tag/Rules-for-the-processing-of-personal-data](https://developer.alteg.io/api\#tag/Rules-for-the-processing-of-personal-data) Rules for the processing of personal data

## [tag/Rules-for-the-processing-of-personal-data/operation/Obtaining information about the rules for processing personal data of the company](https://developer.alteg.io/api\#tag/Rules-for-the-processing-of-personal-data/operation/Obtaining%20information%20about%20the%20rules%20for%20processing%20personal%20data%20of%20the%20company) Obtaining information about the rules for processing personal data of the company

##### Authorizations:

_bearer_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token |

### Responses

**200**

OK

get/privacy\_policy/{company\_id}

https://api.alteg.io/api/v1/privacy\_policy/{company\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"agreement": {"content": "text of the agreement"

}

},

"meta": [ ]

}`

## [tag/Data-Validation](https://developer.alteg.io/api\#tag/Data-Validation) Data Validation

## [tag/Data-Validation/operation/Phone number format check](https://developer.alteg.io/api\#tag/Data-Validation/operation/Phone%20number%20format%20check) Phone number format check

The transferred phone number is checked for compliance with Altegio rules.

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| phone<br>required | string<br>Checked phone number |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/validation/validate\_phone/{phone}

https://api.alteg.io/api/v1/validation/validate\_phone/{phone}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"is_valid": true

},

"meta": [ ]

}`

## [tag/Fiscalization-of-checks](https://developer.alteg.io/api\#tag/Fiscalization-of-checks) Fiscalization of checks

## [tag/Fiscalization-of-checks/operation/Example of a request for fiscalization of a document](https://developer.alteg.io/api\#tag/Fiscalization-of-checks/operation/Example%20of%20a%20request%20for%20fiscalization%20of%20a%20document) Example of a request for fiscalization of a document

##### Authorizations:

_bearer_

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| id | string<br>Unique ID of the sales document |
| date | string <date-time> <br>Date and time the document was sent for printing (in ISO-8601 format) |
| document\_id | integer <int32> <br>Internal document identifier in the Altegio system |
| type | string<br>Enum:"sale""return"<br>Document type (list of possible values) |
| print\_receipt | boolean<br>Whether to print a paper check at the checkout during fiscalization |
| customer | object<br>Client entity |
| positions | Array of objects<br>List of positions in the check |
| payments | Array of objects<br>List of fees applied per check |
| tax | string<br>Type of taxation system (slug from the list of taxation systems) |
| cashier | object<br>The Essence of a Cashier |
| pos | object<br>Options for the connected POS terminal |
| callback\_url | string<br>Link to update fiscal status |
| custom\_text | string<br>Arbitrary text for printing on a receipt |

### Responses

**200**

OK

post/https://your-api.url

https://api.alteg.io/api/v1/https://your-api.url

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"id": "d72fece5-6825-4895-9395-0133195612a4",

"date": "2025-09-21T23:00:00.000+03:00",

"document_id": 239083104,

"type": "sale",

"print_receipt": true,

"customer": {"email": "customer@example.com",

"phone": "+1-315-555-0175"

},

"positions": [{"type": "service",\
\
"title": "Consultation",\
\
"price": 13.19,\
\
"quantity": 1,\
\
"discount_amount": 2.54,\
\
"vat": "ru_vat_10",\
\
"payment_method": "payment",\
\
"barcode": "12345"\
\
}\
\
],

"payments": [{"type": "card",\
\
"sum": 5.55\
\
},\
\
{"type": "cash",\
\
"sum": 4.55\
\
},\
\
{"type": "prepaid",\
\
"sum": 0.55\
\
}\
\
],

"tax": "ru_osn",

"cashier": {"uid": "4895-9395-0133195612a4",

"name": "John Smith",

"position": "Cashier"

},

"pos": {"enabled": true,

"slip_count": 2

},

"callback_url": "https://app.alteg.io/api/v1/integration/kkm/callback/",

"custom_text": "some custom text"

}`

### Response samples

- 200

Content type

application/json

Copy

`{"id": "d72fece5-6825-4895-9395-0133195612a4",

"status": "success",

"code": 0,

"message": "OK"

}`

## [tag/Fiscalization-of-checks/operation/List request example](https://developer.alteg.io/api\#tag/Fiscalization-of-checks/operation/List%20request%20example) List request example

A list of **tax systems** and **VAT** available for a country can be obtained by requesting the country ID for which the list is to be obtained.
The country ID can be obtained from [list of countries](https://developer.alteg.io/api#countries).

The list is an array of [tax systems](https://developer.alteg.io/api#fiscalization-tax) with a nested [VAT](https://developer.alteg.io/api#fiscalization-vat) array for each tax system.

**The taxation system** has the following structure:

| Field | Type | Description |
| --- | --- | --- |
| title | string | Name of taxation system |
| slug | string | Code name for the taxation system |
| vats | Array of objects( [Vat](https://developer.alteg.io/api#fiscalization-vat)\[\]) | List of available VAT for the taxation system |

**VAT** has the following structure:

| Field | Type | Description |
| --- | --- | --- |
| title | string | Title VAT |
| slug | string | Code name VAT |

##### Authorizations:

_bearer_

##### path Parameters

|     |     |
| --- | --- |
| countryId<br>required | number<br>Example: 1<br>Country ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token |

### Responses

**200**

OK

get/integration/kkm/references/tax\_system/{countryId}

https://api.alteg.io/api/v1/integration/kkm/references/tax\_system/{countryId}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"title": "General DOS",\
\
"slug": "ru_osn",\
\
"vats": [{"title": "0%",\
\
"slug": "ru_vat_0"\
\
},\
\
{"title": "10%",\
\
"slug": "ru_vat_10"\
\
},\
\
{"title": "20%",\
\
"slug": "ru_vat_20"\
\
},\
\
{"title": "is not a subject to a tax",\
\
"slug": "ru_vat_none"\
\
}\
\
]\
\
},\
\
{"title": "Simplified simplified tax system (Income)",\
\
"slug": "ru_usn",\
\
"vats": [{"title": "is not a subject to a tax",\
\
"slug": "ru_vat_none"\
\
}\
\
]\
\
},\
\
{"title": "Simplified simplified tax system (Income minus Expense)",\
\
"slug": "ru_usnr",\
\
"vats": [{"title": "is not a subject to a tax",\
\
"slug": "ru_vat_none"\
\
}\
\
]\
\
},\
\
{"title": "Single tax on imputed income UTII",\
\
"slug": "ru_envd",\
\
"vats": [{"title": "is not a subject to a tax",\
\
"slug": "ru_vat_none"\
\
}\
\
]\
\
},\
\
{"title": "Unified agricultural tax UST",\
\
"slug": "ru_esn",\
\
"vats": [{"title": "is not a subject to a tax",\
\
"slug": "ru_vat_none"\
\
}\
\
]\
\
},\
\
{"title": "Patent taxation system",\
\
"slug": "ru_psn",\
\
"vats": [{"title": "is not a subject to a tax",\
\
"slug": "ru_vat_none"\
\
}\
\
]\
\
}\
\
],

"meta": {"count": 6

}

}`

## [tag/Fiscalization-of-checks/operation/Example of a request in case of an error](https://developer.alteg.io/api\#tag/Fiscalization-of-checks/operation/Example%20of%20a%20request%20in%20case%20of%20an%20error) Example of a request in case of successful fiscalization or in case of an error

##### Authorizations:

_bearer_

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Conetnt-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token |

##### Request Body schema: application/json  optional

object

### Responses

**200**

OK

post/integration/kkm/callback/

https://api.alteg.io/api/v1/integration/kkm/callback/

### Request samples

- Payload

Content type

application/json

Copy

`{ }`

## [tag/Loyalty](https://developer.alteg.io/api\#tag/Loyalty) Loyalty

## [tag/Loyalty/paths/~1chain~1{chain_id}~1loyalty~1notification_message_templates~1programs/get](https://developer.alteg.io/api\#tag/Loyalty/paths/~1chain~1{chain_id}~1loyalty~1notification_message_templates~1programs/get) Get a list of loyalty notification templates

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| chain\_id<br>required | integer<br>Chain ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/chain/{chain\_id}/loyalty/notification\_message\_templates/programs

https://api.alteg.io/api/v1/chain/{chain\_id}/loyalty/notification\_message\_templates/programs

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`[{"id": 12,\
\
"type": "small",\
\
"message_type": "loyalty_discount_expiration",\
\
"body": "Your discount expires tomorrow"\
\
}\
\
]`

## [tag/Loyalty/paths/~1chain~1{chain_id}~1loyalty~1programs~1/post](https://developer.alteg.io/api\#tag/Loyalty/paths/~1chain~1{chain_id}~1loyalty~1programs~1/post) Create a Chain Promotion

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| chain\_id<br>required | integer<br>Chain ID |

##### query Parameters

|     |     |
| --- | --- |
| include | string<br>Enum:"applicable\_items""rules""companies""loyalty\_card\_types""on\_changed\_notification\_template""on\_expiration\_notification\_template"<br>Include additional resources in the answer |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| title<br>required | string<br>Share name |
| type<br>required | string<br>Enum:"discount\_static""discount\_accumulative\_visits""discount\_accumulative\_sold""discount\_accumulative\_paid""cashback\_static\_sold""cashback\_static\_paid""cashback\_accumulative\_paid""cashback\_accumulative\_sold""cashback\_accumulative\_paid\_visits""cashback\_accumulative\_sold\_visits""cashback\_sold\_visits""cashback\_paid\_visits""package\_discount"<br>Promotion type |
| service\_item\_type<br>required | string<br>Enum:"any\_allowed""not\_allowed""custom\_allowed"<br>Type of application to services |
| good\_item\_type<br>required | string<br>Enum:"any\_allowed""not\_allowed""custom\_allowed"<br>Type of application to products |
| value\_unit<br>required | string<br>Enum:"percent""amount"<br>Bonus or discount measurement unit (percentage, fixed amount) |
| usage\_limit | integer <int32> <br>Limit on the number of applications (only for cashback) |
| visit\_multiplicity | integer <int32> <br>Multiplicity of application by visits (only for cashback) |
| sold\_items\_multiplicity | integer <int32> <br>How many services you need to pay to get a discount on promotional services (only for the promotion type "Discount by condition") |
| expiration\_timeout | integer <int32> <br>Expiration date of bonuses or discounts |
| expiration\_timeout\_unit | string<br>Enum:"day""week""month""year"<br>The unit of measurement for the expiration date of bonuses or discounts |
| expiration\_notification\_timeout | integer <int32> <br>How many days before the bonus or discount expires, a notification must be sent to the client |
| params\_source\_type | string<br>Enum:"loyalty\_card""active\_companies""chain"<br>Where to get the client's history to calculate the size of the bonus or discount (for accumulation promotions or conditional discounts) |
| history\_start\_date | string <date> <br>From what date to take into account the client's history to calculate the size of the bonus or discount (for accumulative promotions or conditional discounts) |
| loyalty\_card\_type\_ids | Array of integers <int32> \[ items <int32 > \]<br>Identifiers of types of cards for which the promotion is valid |
| on\_changed\_notification\_template | object (Root Type for LoyaltyNotificationMessageTemplateRequest) <br>Body of the request to bind the loyalty notification template |
| on\_expiration\_notification\_template | object (Root Type for LoyaltyNotificationMessageTemplateRequest) <br>Body of the request to bind the loyalty notification template |
| rules<br>required | Array of objects (Root Type for LoyaltyProgramRuleRequest) <br>Rules for determining the value of the bonus or discount (only one rule is allowed for fixed promotions) |
| company\_ids<br>required | Array of integers <int32> \[ items <int32 > \]<br>Identifiers of locations where the promotion is valid |
| allowed\_service\_ids | Array of integers <int32> \[ items <int32 > \]<br>Service and service category identifiers (if application type is set for some services) |
| allowed\_good\_ids | Array of integers <int32> \[ items <int32 > \]<br>Item IDs (if application type is set for some items) |
| allowed\_good\_category\_ids | Array of integers <int32> \[ items <int32 > \]<br>Product category identifiers (if application type is set for some products) |

### Responses

**200**

OK

**422**

Validation error

post/chain/{chain\_id}/loyalty/programs/

https://api.alteg.io/api/v1/chain/{chain\_id}/loyalty/programs/

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"title": "Cumulative discount for some services and not for goods",

"type": "discount_accumulative_paid",

"service_item_type": "custom_allowed",

"good_item_type": "not_allowed",

"allowed_service_ids": [53,\
\
92\
\
],

"allowed_good_ids": { },

"allowed_good_category_ids": { },

"value_unit": "percent",

"usage_limit": 0,

"visit_multiplicity": 0,

"sold_items_multiplicity": 0,

"expiration_timeout": 6,

"expiration_timeout_unit": "month",

"expiration_notification_timeout": 7,

"params_source_type": "chain",

"history_start_date": "2025-09-21T23:00:00.000+03:00",

"loyalty_card_type_ids": [51,\
\
29\
\
],

"on_changed_notification_template": {"type": "custom",

"body": "Your discount has changed"

},

"on_expiration_notification_template": {"type": "big"

},

"rules": [{"parameter": 10,\
\
"value": 2.5,\
\
"service_id": 0\
\
},\
\
{"parameter": 30,\
\
"value": 7.5,\
\
"service_id": 0\
\
}\
\
],

"company_ids": [49\
\
]

}`

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"id": 34,

"title": "Cumulative discount for some services and not for goods",

"type": "discount_accumulative_paid",

"service_item_type": "custom_allowed",

"good_item_type": "not_allowed",

"value_unit": "percent",

"usage_limit": 0,

"visit_multiplicity": 0,

"sold_items_multiplicity": 0,

"expiration_timeout": 6,

"expiration_timeout_unit": "month",

"expiration_notification_timeout": 7,

"params_source_type": "chain",

"history_start_date": "2025-09-21T23:00:00.000+03:00",

"on_changed_notification_template_id": 55,

"on_expiration_notification_template_id": 84,

"loyalty_card_types": [{"id": 51,\
\
"title": "Card type 1"\
\
},\
\
{"id": 29,\
\
"title": "Card type 2"\
\
}\
\
],

"on_changed_notification_template": {"id": 55,

"type": "custom",

"body": "Your discount has changed",

"message_type": "loyalty_discount_changed"

},

"on_expiration_notification_template": {"id": 84,

"type": "big",

"body": "Detailed text about discount burning",

"message_type": "loyalty_discount_expiration"

},

"rules": [{"id": 94,\
\
"parameter": 10,\
\
"value": 2.5,\
\
"loyalty_program_id": 34,\
\
"loyalty_type_id": 3,\
\
"service_id": 0\
\
},\
\
{"id": 74,\
\
"parameter": 30,\
\
"value": 7.5,\
\
"loyalty_program_id": 34,\
\
"loyalty_type_id": 3,\
\
"service_id": 0\
\
}\
\
],

"companies": [{"id": 49,\
\
"title": "Location",\
\
"country": "United States",\
\
"country_id": 5,\
\
"city": "New York",\
\
"city_id": 83,\
\
"phone": "+1-315-555-0175",\
\
"timezone": "America/New_York",\
\
"address": "Location address",\
\
"coordinate_lat": "40.730610",\
\
"coordinate_lng": 18.63\
\
}\
\
],

"applicable_items": [{"id": 53,\
\
"title": "Service category 1",\
\
"is_service": true,\
\
"is_category": true\
\
},\
\
{"id": 92,\
\
"title": "Service category 2",\
\
"is_service": true,\
\
"is_category": true\
\
}\
\
]

}`

## [tag/Loyalty/paths/~1chain~1{chain_id}~1loyalty~1programs~1{loyalty_program_id}/get](https://developer.alteg.io/api\#tag/Loyalty/paths/~1chain~1{chain_id}~1loyalty~1programs~1{loyalty_program_id}/get) Get a Chain Promotion

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| chain\_id<br>required | integer<br>Chain ID |
| loyalty\_program\_id<br>required | integer<br>Promotion ID |

##### query Parameters

|     |     |
| --- | --- |
| include | string<br>Enum:"applicable\_items""rules""companies""loyalty\_card\_types""on\_changed\_notification\_template""on\_expiration\_notification\_template"<br>Include additional resources in the answer |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/chain/{chain\_id}/loyalty/programs/{loyalty\_program\_id}

https://api.alteg.io/api/v1/chain/{chain\_id}/loyalty/programs/{loyalty\_program\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"id": 34,

"title": "Cumulative discount for some services and not for goods",

"type": "discount_accumulative_paid",

"service_item_type": "custom_allowed",

"good_item_type": "not_allowed",

"value_unit": "percent",

"usage_limit": 0,

"visit_multiplicity": 0,

"sold_items_multiplicity": 0,

"expiration_timeout": 6,

"expiration_timeout_unit": "month",

"expiration_notification_timeout": 7,

"params_source_type": "chain",

"history_start_date": "2025-09-21T23:00:00.000+03:00",

"on_changed_notification_template_id": 55,

"on_expiration_notification_template_id": 84,

"loyalty_card_types": [{"id": 51,\
\
"title": "Card type 1"\
\
},\
\
{"id": 29,\
\
"title": "Card type 2"\
\
}\
\
],

"on_changed_notification_template": {"id": 55,

"type": "custom",

"body": "Your discount has changed",

"message_type": "loyalty_discount_changed"

},

"on_expiration_notification_template": {"id": 84,

"type": "big",

"body": "Detailed text about discount burning",

"message_type": "loyalty_discount_expiration"

},

"rules": [{"id": 94,\
\
"parameter": 10,\
\
"value": 2.5,\
\
"loyalty_program_id": 34,\
\
"loyalty_type_id": 3,\
\
"service_id": 0\
\
},\
\
{"id": 74,\
\
"parameter": 30,\
\
"value": 7.5,\
\
"loyalty_program_id": 34,\
\
"loyalty_type_id": 3,\
\
"service_id": 0\
\
}\
\
],

"companies": [{"id": 49,\
\
"title": "Location",\
\
"country": "United States",\
\
"country_id": 5,\
\
"city": "New York",\
\
"city_id": 83,\
\
"phone": "+1-315-555-0175",\
\
"timezone": "America/New_York",\
\
"address": "Location address",\
\
"coordinate_lat": "40.730610",\
\
"coordinate_lng": 18.63\
\
}\
\
],

"applicable_items": [{"id": 53,\
\
"title": "Service category 1",\
\
"is_service": true,\
\
"is_category": true\
\
},\
\
{"id": 92,\
\
"title": "Service category 2",\
\
"is_service": true,\
\
"is_category": true\
\
}\
\
]

}`

## [tag/Loyalty/paths/~1chain~1{chain_id}~1loyalty~1programs~1{loyalty_program_id}/put](https://developer.alteg.io/api\#tag/Loyalty/paths/~1chain~1{chain_id}~1loyalty~1programs~1{loyalty_program_id}/put) Edit Chain Promotion

##### Authorizations:

_bearer_

##### path Parameters

|     |     |
| --- | --- |
| chain\_id<br>required | integer<br>Chain ID |
| loyalty\_program\_id<br>required | integer<br>Promotion ID |

##### query Parameters

|     |     |
| --- | --- |
| include | string<br>Enum:"applicable\_items""rules""companies""loyalty\_card\_types""on\_changed\_notification\_template""on\_expiration\_notification\_template"<br>Include additional resources in the answer |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| title | string<br>Share name |
| usage\_limit | integer <int32> <br>Limit on the number of applications (only for cashback) |
| expiration\_timeout | integer <int32> <br>Expiration date of bonuses or discounts |
| expiration\_timeout\_unit | string<br>Enum:"day""week""month""year"<br>The unit of measurement for the expiration date of bonuses or discounts |
| expiration\_notification\_timeout | integer <int32> <br>How many days before the bonus or discount expires, a notification must be sent to the client |
| loyalty\_card\_type\_ids | Array of integers <int32> \[ items <int32 > \]<br>Identifiers of types of cards for which the promotion is valid |
| on\_changed\_notification\_template | object (Root Type for LoyaltyNotificationMessageTemplateRequest) <br>Body of the request to bind the loyalty notification template |
| on\_expiration\_notification\_template | object (Root Type for LoyaltyNotificationMessageTemplateRequest) <br>Body of the request to bind the loyalty notification template |
| rules | Array of objects (Root Type for LoyaltyProgramRuleRequest) <br>Rules for determining the value of the bonus or discount (only one rule is allowed for fixed promotions) |
| company\_ids | Array of integers <int32> \[ items <int32 > \]<br>Identifiers of locations where the promotion is valid |
| allowed\_service\_ids | Array of integers <int32> \[ items <int32 > \]<br>Service and service category identifiers (if application type is set for some services) |
| allowed\_good\_ids | Array of integers <int32> \[ items <int32 > \]<br>Item IDs (if application type is set for some items) |
| allowed\_good\_category\_ids | Array of integers <int32> \[ items <int32 > \]<br>Product category identifiers (if application type is set for some products) |

### Responses

**200**

OK

**422**

Validation error

put/chain/{chain\_id}/loyalty/programs/{loyalty\_program\_id}

https://api.alteg.io/api/v1/chain/{chain\_id}/loyalty/programs/{loyalty\_program\_id}

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"title": "Cumulative discount for some services and not for goods",

"allowed_service_ids": [53,\
\
92\
\
],

"allowed_good_ids": { },

"allowed_good_category_ids": { },

"usage_limit": 0,

"expiration_timeout": 6,

"expiration_timeout_unit": "month",

"expiration_notification_timeout": 7,

"loyalty_card_type_ids": [51,\
\
29\
\
],

"on_changed_notification_template": {"type": "custom",

"body": "Your discount has changed"

},

"on_expiration_notification_template": {"type": "big"

},

"rules": [{"parameter": 10,\
\
"value": 2.5,\
\
"service_id": 0\
\
},\
\
{"parameter": 30,\
\
"value": 7.5,\
\
"service_id": 0\
\
}\
\
],

"company_ids": [49\
\
]

}`

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"id": 34,

"title": "Cumulative discount for some services and not for goods",

"type": "discount_accumulative_paid",

"service_item_type": "custom_allowed",

"good_item_type": "not_allowed",

"value_unit": "percent",

"usage_limit": 0,

"visit_multiplicity": 0,

"sold_items_multiplicity": 0,

"expiration_timeout": 6,

"expiration_timeout_unit": "month",

"expiration_notification_timeout": 7,

"params_source_type": "chain",

"history_start_date": "2025-09-21T23:00:00.000+03:00",

"on_changed_notification_template_id": 55,

"on_expiration_notification_template_id": 84,

"loyalty_card_types": [{"id": 51,\
\
"title": "Card type 1"\
\
},\
\
{"id": 29,\
\
"title": "Card type 2"\
\
}\
\
],

"on_changed_notification_template": {"id": 55,

"type": "custom",

"body": "Your discount has changed",

"message_type": "loyalty_discount_changed"

},

"on_expiration_notification_template": {"id": 84,

"type": "big",

"body": "Detailed text about discount burning",

"message_type": "loyalty_discount_expiration"

},

"rules": [{"id": 94,\
\
"parameter": 10,\
\
"value": 2.5,\
\
"loyalty_program_id": 34,\
\
"loyalty_type_id": 3,\
\
"service_id": 0\
\
},\
\
{"id": 74,\
\
"parameter": 30,\
\
"value": 7.5,\
\
"loyalty_program_id": 34,\
\
"loyalty_type_id": 3,\
\
"service_id": 0\
\
}\
\
],

"companies": [{"id": 49,\
\
"title": "Location",\
\
"country": "United States",\
\
"country_id": 5,\
\
"city": "New York",\
\
"city_id": 83,\
\
"phone": "+1-315-555-0175",\
\
"timezone": "America/New_York",\
\
"address": "Location address",\
\
"coordinate_lat": "40.730610",\
\
"coordinate_lng": 18.63\
\
}\
\
],

"applicable_items": [{"id": 53,\
\
"title": "Service category 1",\
\
"is_service": true,\
\
"is_category": true\
\
},\
\
{"id": 92,\
\
"title": "Service category 2",\
\
"is_service": true,\
\
"is_category": true\
\
}\
\
]

}`

## [tag/Loyalty/paths/~1chain~1{chain_id}~1loyalty~1programs~1{loyalty_program_id}/delete](https://developer.alteg.io/api\#tag/Loyalty/paths/~1chain~1{chain_id}~1loyalty~1programs~1{loyalty_program_id}/delete) Delete Chain Promotion

##### Authorizations:

_bearer_

##### path Parameters

|     |     |
| --- | --- |
| chain\_id<br>required | integer<br>Chain ID |
| loyalty\_program\_id<br>required | integer<br>Promotion ID |

##### query Parameters

|     |     |
| --- | --- |
| include | string<br>Enum:"applicable\_items""rules""companies""loyalty\_card\_types""on\_changed\_notification\_template""on\_expiration\_notification\_template"<br>Include additional resources in the answer |

### Responses

**204**

No content

delete/chain/{chain\_id}/loyalty/programs/{loyalty\_program\_id}

https://api.alteg.io/api/v1/chain/{chain\_id}/loyalty/programs/{loyalty\_program\_id}

## [tag/Loyalty/paths/~1chain~1{chain_id}~1loyalty~1transactions/get](https://developer.alteg.io/api\#tag/Loyalty/paths/~1chain~1{chain_id}~1loyalty~1transactions/get) Get a List of Chain Loyalty Transactions

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| chain\_id<br>required | integer<br>Chain ID |

##### query Parameters

|     |     |
| --- | --- |
| created\_after<br>required | string <date> <br>Sample start date in Y-m-d format |
| created\_before<br>required | string <date> <br>Sample end date in Y-m-d format |
| types | Array of strings<br>Items Enum:"1""2""3""4""5""6""7""8""9""10""11"<br>Types of loyalty transactions included in the selection: 1 - Promotion discount, 2 - Loyalty program accrual, 3 - Loyalty card withdrawal, 4 - Referral program accrual, 5 - Manual replenishment, 6 - Manual withdrawal, 7 - Overdue points withdrawal , 8 - Withdrawal from the gift card, 9 - Use of the membership, 10 - Recalculation of the cost of the membership, 11 - Withdrawal from the personal account |
| company\_ids | Array of integers<br>Loyalty transaction affiliate IDs included in the sample |
| visit\_ids | Array of integers<br>Loyalty transaction visit IDs included in the sample |
| page | integer<br>Selection page |
| count | integer<br>Number of results per selection page |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

**422**

Validation error

get/chain/{chain\_id}/loyalty/transactions

https://api.alteg.io/api/v1/chain/{chain\_id}/loyalty/transactions

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 0,\
\
"visit_id": 0,\
\
"status_id": 0,\
\
"amount": 0.1,\
\
"type_id": 0,\
\
"card_id": 0,\
\
"program_id": 0,\
\
"certificate_id": 0,\
\
"abonement_id": 0,\
\
"salon_group_id": 0,\
\
"item_id": 0,\
\
"item_type_id": 0,\
\
"item_record_id": 0,\
\
"goods_transaction_id": 0,\
\
"services_transaction_id": 0,\
\
"is_discount": true,\
\
"is_loyalty_withdraw": true,\
\
"type": {"id": 0,\
\
"title": "string"\
\
}\
\
}\
\
],

"meta": {"count": 0

}

}`

## [tag/Loyalty/paths/~1loyalty~1generate_code~1{company_id}~1{good_Id}/get](https://developer.alteg.io/api\#tag/Loyalty/paths/~1loyalty~1generate_code~1{company_id}~1{good_Id}/get) Gift Card/Membership Code Generation

- Options
  - salonId (required, number, `1`) \- location ID
  - goodId (required, number, `1`) \- product ID (gift card/ membership)

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Location ID |
| good\_Id<br>required | number<br>Product ID (membership/gift card) |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

**403**

Forbidden

**404**

Not Found

get/loyalty/generate\_code/{company\_id}/{good\_Id}

https://api.alteg.io/api/v1/loyalty/generate\_code/{company\_id}/{good\_Id}

### Response samples

- 200
- 403
- 404

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"code": "1"

},

"meta": [ ]

}`

## [tag/Loyalty/operation/Get a List of Available Membership Types](https://developer.alteg.io/api\#tag/Loyalty/operation/Get%20a%20List%20of%20Available%20Membership%20Types) Get a List of Available Membership Types

A list of **membership types** available at a location can be obtained by requesting the location ID.
The list can be filtered by membership type name by passing the title parameter. Pagination is supported, specified by the `page` and `page_size` parameters.

The list is an array of [membership types](https://developer.alteg.io/api#loyalty-subscription-type).

**Membership type** has the following structure:

| Field | Type | Description |
| --- | --- | --- |
| id | number | Membership type identifier |
| title | string | Membership type name |
| allow\_freeze | boolean | Is it possible to freeze memberships? true - allowed, false - not allowed |
| freeze limit | number | Maximum total freezing period (days) |
| salon\_group\_id | number | Identifier of the chain in which the membership type is valid |
| period | number | Membership expiration date (0 if not set) |
| period\_unit\_id | number | Membership expiration unit (list of possible values, if not set - 0) |
| is\_allow\_empty\_code | boolean | Allow the sale of a membership without a code? true - allow, false - do not allow |
| is\_united\_balance | boolean | Total or separate membership balance: true - total, false - separate |
| united\_balance\_services\_count | number | Number of visits for total balance |

**Measurement units of subscription type validity period**

| Meaning | Description |
| --- | --- |
| 1 | Day |
| 2 | Week |
| 3 | Month |
| 4 | Year |

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### query Parameters

|     |     |
| --- | --- |
| title | string<br>Membeship type name |
| page | number<br>Page number |
| page\_size | number<br>The number of output lines per page. Maximum 100 |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Conetnt-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/company/{company\_id}/loyalty/abonement\_types/search

https://api.alteg.io/api/v1/company/{company\_id}/loyalty/abonement\_types/search

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 12233,\
\
"salon_group_id": 123,\
\
"title": "Subscription with the possibility of freezing for 14 days",\
\
"period": 0,\
\
"period_unit_id": 0,\
\
"allow_freeze": true,\
\
"freeze_limit": 14,\
\
"is_allow_empty_code": false,\
\
"is_united_balance": false,\
\
"united_balance_services_count": 0\
\
},\
\
{"id": 255789,\
\
"salon_group_id": 456,\
\
"title": "Subscription for 6 months",\
\
"period": 6,\
\
"period_unit_id": 3,\
\
"allow_freeze": false,\
\
"freeze_limit": 0,\
\
"is_allow_empty_code": false,\
\
"is_united_balance": false,\
\
"united_balance_services_count": 0\
\
}\
\
],

"meta": {"count": 2

}

}`

## [tag/Loyalty/operation/Get a List of Membership Types by ID](https://developer.alteg.io/api\#tag/Loyalty/operation/Get%20a%20List%20of%20Membership%20Types%20by%20ID) Get a List of Membership Types by ID

A list of **membership types** available at a location can be obtained by querying the location ID and membership type IDs.

The list is an array of [membership types](https://developer.alteg.io/api#loyalty-subscription-type).

### Get a list of subscription types by ID

- Parameters
  - company\_id (required, number) - company ID
  - id: 1 (optional, number) - membership type ID (you can specify several additional parameters `&ids[]={id}`

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### query Parameters

|     |     |
| --- | --- |
| ids\[\] | number<br>Membership type ID (you can specify several additional parameters &ids\[\]={id} |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/company/{company\_id}/loyalty/abonement\_types/fetch

https://api.alteg.io/api/v1/company/{company\_id}/loyalty/abonement\_types/fetch

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 12233,\
\
"salon_group_id": 123,\
\
"title": "Subscription with the possibility of freezing for 14 days",\
\
"period": 0,\
\
"period_unit_id": 0,\
\
"allow_freeze": true,\
\
"freeze_limit": 14,\
\
"is_allow_empty_code": false,\
\
"is_united_balance": false,\
\
"united_balance_services_count": 0\
\
}\
\
],

"meta": {"count": 1

}

}`

## [tag/Loyalty/operation/Get a List of Available Gift Card Types](https://developer.alteg.io/api\#tag/Loyalty/operation/Get%20a%20List%20of%20Available%20Gift%20Card%20Types) Get a List of Available Gift Card Types

A list of **gift card types** available at a location can be obtained by querying the location ID.
The list can be filtered by the name of the gift card type by passing the title parameter.
Pagination is supported, specified by the `page` and `page_size` parameters.

The list is an array of [gift card types](https://developer.alteg.io/api#loyalty-certificate-type).

**Gift card type** has the following structure:

| Field | Type | Description |
| --- | --- | --- |
| id | number | Gift card type identifier |
| title | string | Gift card type name |
| balance | number | Gift card denomination |
| is\_multi | boolean | Write-off type: true - multiple write-off, false - single write-off |
| company\_group\_id | number | ID of the chain where the gift card type is valid |
| item\_type\_id | number | Application Constraint (list of possible values) |
| expiration\_type\_id | number | Expiration limit (list of possible values) |
| expiration\_date | string | Fixed burn date in ISO8601 format (null if not set) |
| expiration\_timeout | number | Gift card validity period from the date of sale (0 if not set) |
| expiration\_timeout\_unit\_id | number | The unit of measurement of the validity period of the gift card from the moment of sale (list of possible values, if not set - 0) |
| is\_allow\_empty\_code | boolean | Allow sale of gift card without code? true - allow, false - do not allow |

**Gift Card Type Restriction**

| Meaning | Description |
| --- | --- |
| 0 | Unlimited |
| 1 | Any services without products |
| 2 | Any products without services |
| 3 | Some services without products |
| 4 | Some services and any products |

**Gift Card Type Expiration Limit**

| Meaning | Description |
| --- | --- |
| 0 | No expiration date |
| 1 | Fixed date for all instances |
| 2 | Fixed period of validity from the date of sale |

**Units of certificate type validity period**

| Meaning | Description |
| --- | --- |
| 1 | Day |
| 2 | Week |
| 3 | Month |
| 4 | Year |

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### query Parameters

|     |     |
| --- | --- |
| title | string<br>Gift card type name |
| page | number<br>Page number |
| page\_size | number<br>The number of output lines per page. Maximum 100 |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | integer<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/company/{company\_id}/loyalty/certificate\_types/search

https://api.alteg.io/api/v1/company/{company\_id}/loyalty/certificate\_types/search

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 1,\
\
"title": "Fixed burn date certificate without application restrictions",\
\
"balance": 10,\
\
"is_multi": true,\
\
"company_group_id": 12,\
\
"item_type_id": 0,\
\
"expiration_type_id": 1,\
\
"expiration_date": "2025-09-21T23:00:00.000+03:00",\
\
"expiration_timeout": 0,\
\
"expiration_timeout_unit_id": 0,\
\
"is_allow_empty_code": true\
\
},\
\
{"id": 11,\
\
"title": "Certificate valid for 6 months from the date of sale for any goods without services",\
\
"balance": 100,\
\
"is_multi": false,\
\
"company_group_id": 12,\
\
"item_type_id": 2,\
\
"expiration_type_id": 2,\
\
"expiration_timeout": 6,\
\
"expiration_timeout_unit_id": 3,\
\
"is_allow_empty_code": false\
\
}\
\
],

"meta": {"count": 2

}

}`

## [tag/Loyalty/operation/Get a List of Gift Card Types by ID](https://developer.alteg.io/api\#tag/Loyalty/operation/Get%20a%20List%20of%20Gift%20Card%20Types%20by%20ID) Get a List of Gift Card Types by ID

A list of **gift card types** available at the location can be obtained by querying the location ID and gift card type IDs.

The list is an array of [gift card types](https://developer.alteg.io/api#loyalty-certificate-type).

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/company/{company\_id}/loyalty/certificate\_types/fetch

https://api.alteg.io/api/v1/company/{company\_id}/loyalty/certificate\_types/fetch

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 1,\
\
"title": "Fixed burn date certificate without application restrictions",\
\
"balance": 10,\
\
"is_multi": true,\
\
"company_group_id": 12,\
\
"item_type_id": 0,\
\
"expiration_type_id": 1,\
\
"expiration_date": "2025-09-21T23:00:00.000+03:00",\
\
"expiration_timeout": 0,\
\
"expiration_timeout_unit_id": 0,\
\
"is_allow_empty_code": true\
\
}\
\
],

"meta": {"count": 1

}

}`

## [tag/Loyalty/paths/~1company~1{company_id}~1loyalty~1programs~1search/get](https://developer.alteg.io/api\#tag/Loyalty/paths/~1company~1{company_id}~1loyalty~1programs~1search/get) Get a List of Promotions Active in the Location

The method allows you to get a list of promotions that are active for the specified location.

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### query Parameters

|     |     |
| --- | --- |
| include | string<br>The first\_transaction\_date value adds the date of the first stock transaction to the response. |
| type | string<br>Enum:"discount\_static""discount\_accumulative\_visits""discount\_accumulative\_sold""discount\_accumulative\_paid""cashback\_static\_sold""cashback\_static\_paid""cashback\_accumulative\_paid""cashback\_accumulative\_sold""cashback\_accumulative\_paid\_visits""cashback\_accumulative\_sold\_visits""cashback\_sold\_visits""cashback\_paid\_visits""package\_discount"<br>Promotion type |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer bearer\_token, User user\_token |

### Responses

**200**

OK

get/company/{company\_id}/loyalty/programs/search

https://api.alteg.io/api/v1/company/{company\_id}/loyalty/programs/search

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 53591,\
\
"title": "100 rub discount on Altegio Implementation Consultation",\
\
"type": "discount_static",\
\
"loyalty_type_id": 1,\
\
"item_type_id": 4,\
\
"service_item_type": "custom_allowed",\
\
"good_item_type": "any_allowed",\
\
"value_unit_id": 2,\
\
"value_unit": "amount",\
\
"group_id": 502054,\
\
"usage_limit": 0,\
\
"visit_multiplicity": 1,\
\
"sold_items_multiplicity": 1,\
\
"current_package_progress": 0,\
\
"allowed_usages_amount": 0,\
\
"expiration_timeout": 0,\
\
"expiration_timeout_unit": "day",\
\
"expiration_notification_timeout": 0,\
\
"params_source_type": "loyalty_card",\
\
"on_changed_notification_template_id": 0,\
\
"on_expiration_notification_template_id": 0\
\
}\
\
],

"meta": {"count": 1

}

}`

## [tag/Loyalty/paths/~1company~1{company_id}~1analytics~1loyalty_programs~1visits/get](https://developer.alteg.io/api\#tag/Loyalty/paths/~1company~1{company_id}~1analytics~1loyalty_programs~1visits/get) Get customer statistics

The method allows you to get statistics on returning, new and lost customers

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### query Parameters

|     |     |
| --- | --- |
| date\_to<br>required | string<br>Period end date |
| date\_from<br>required | string<br>Period start date |
| loyalty\_program\_id<br>required | string<br>Promotion ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer bearer\_token, User user\_token |

### Responses

**200**

OK

get/company/{company\_id}/analytics/loyalty\_programs/visits

https://api.alteg.io/api/v1/company/{company\_id}/analytics/loyalty\_programs/visits

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"client_stats": {"new": {"all_count": 0,

"lost_count": 0,

"returned_count": 0,

"returned_percent": 0

},

"old": {"all_count": 0,

"lost_count": 0,

"returned_count": 0,

"returned_percent": 0

},

"total": {"all_count": 0,

"lost_count": 0,

"returned_count": 0,

"returned_percent": 0

}

},

"visits_stats_by_day": [{"date": "2025-09-21T23:00:00.000+03:00",\
\
"new_count": 0,\
\
"old_count": 0\
\
},\
\
{"date": "2025-09-21T23:00:00.000+03:00",\
\
"new_count": 0,\
\
"old_count": 0\
\
}\
\
]

},

"meta": [ ]

}`

## [tag/Loyalty/paths/~1company~1{company_id}~1analytics~1loyalty_programs~1income~1/get](https://developer.alteg.io/api\#tag/Loyalty/paths/~1company~1{company_id}~1analytics~1loyalty_programs~1income~1/get) Get revenue statistics

The method allows you to get statistics on revenue.

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### query Parameters

|     |     |
| --- | --- |
| date\_to<br>required | string<br>Period end date |
| date\_from<br>required | string<br>Period start date |
| loyalty\_program\_id<br>required | string<br>Promotion ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer bearer\_token, User user\_token |

### Responses

**200**

OK

get/company/{company\_id}/analytics/loyalty\_programs/income/

https://api.alteg.io/api/v1/company/{company\_id}/analytics/loyalty\_programs/income/

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"income_stats": {"new": {"all_sum": 0,

"returned_sum": 0

},

"old": {"all_sum": 0,

"returned_sum": 0

},

"total": {"all_sum": 0,

"returned_sum": 0

}

},

"currency": {"id": 1,

"iso": "RUB",

"name": "US Dollar",

"symbol": "USD",

"is_symbol_after_amount": true

},

"income_stats_by_day": [{"date": "2025-09-21T23:00:00.000+03:00",\
\
"new_sum": 0,\
\
"old_sum": 0\
\
},\
\
{"date": "2025-09-21T23:00:00.000+03:00",\
\
"new_sum": 0,\
\
"old_sum": 0\
\
}\
\
]

},

"meta": [ ]

}`

## [tag/Loyalty/paths/~1company~1{company_id}~1analytics~1loyalty_programs~1staff~1/get](https://developer.alteg.io/api\#tag/Loyalty/paths/~1company~1{company_id}~1analytics~1loyalty_programs~1staff~1/get) Get employee return

The method allows you to get the return statistics for a staff member

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### query Parameters

|     |     |
| --- | --- |
| date\_to<br>required | string<br>Period end date |
| date\_from<br>required | string<br>Period start date |
| loyalty\_program\_id<br>required | string<br>Promotion ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer bearer\_token, User user\_token |

### Responses

**200**

OK

get/company/{company\_id}/analytics/loyalty\_programs/staff/

https://api.alteg.io/api/v1/company/{company\_id}/analytics/loyalty\_programs/staff/

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"client_stats": {"all_count": 1,\
\
"lost_count": 0,\
\
"returned_count": 1,\
\
"returned_percent": 100\
\
},\
\
"staff": {"id": 1140369,\
\
"name": "Doniella Davy"\
\
}\
\
}\
\
],

"meta": {"count": 1

}

}`

## [tag/User-records](https://developer.alteg.io/api\#tag/User-records) User records

## [tag/User-records/operation/Get User Appointments](https://developer.alteg.io/api\#tag/User-records/operation/Get%20User%20Appointments) Get User Appointments

The JSON Object containing the user appointment parameters has the following fields:

| Field | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | number | YES | Appointment ID |
| services | array of numbers | YES | List of ID service appointments |
| location | object | YES | location parameters |
| staff | object | YES | Parameters of the specialist who was booked |
| clients\_count | int | YES | Number of clients |
| date | string | YES | Session date |
| datetime | string | YES | Session date in ISO |
| create\_date | string | YES | Appointment creation date |
| length | number | YES | Session duration |
| deleted | boolean | YES | Has the appointment been created ? (true if deleted) |
| notify\_by\_sms | number | NO | Number of hours in advance to send an SMS reminder for the appointment. Set to 0 to disable SMS reminders |
| notify\_by\_email | number | NO | Number of hours in advance to send an email reminder for the appointment. Set to 0 to disable email reminders |
| comment | string | YES | Appointment Comment |
| master\_requested | boolean | YES | Whether a specific specialist was specified when appointment (false if "any specialist" was specified) |
| online | boolean | YES | Indicates whether the appointment was created online by the client (true) or manually by an administrator (false) |
| visit\_attendance | number | YES | 2 - The user confirmed the appointment, 1 - The user came, the services were provided, 0 - the user was waiting, -1 - the user did not come to visit |
| api\_id | string | NO | External Appointment ID |
| last\_change\_date | string | NO | Date of the last edit of the appointment |
| prepaid | boolean | NO | Is online payment available for appointment |
| prepaid\_confirmed | boolean | NO | Online payment status |
| last\_change\_date | string | NO | Date of the last edit of the appointment |
| activity\_id | int | NO | ID bringing group event |

Each object in the services array has the following fields:

| Field | Type | Description |
| --- | --- | --- |
| id | number | Service ID |
| title | string | Service name |
| cost | float | Service cost |
| price\_min | float | Minimum price of the service |
| price\_max | float | Maximum service price |
| discount | float | Discount |
| amount | int | Number of ordered services |
| session\_length | int | Service duration in seconds (only if filter by staff member is set) |

The location object has the following fields:

| Field | Type | Description |
| --- | --- | --- |
| id | number | location ID |
| title | string | location name |
| country\_id | number | Identifier of the country in which the location is located |
| country | string | location name |
| city\_id | number | Identifier of the city where the location is located) |
| city | string | location city name |
| time zone | string | timezone locations |
| address | string | Address where the location is located |
| phone | string | location's main phone number |
| phones | array of strings | All phone numbers of the location |
| coordinate\_lat | float | Latitude where the location is located |
| coordinate lng | float | Longitude |
| allow\_delete\_record | boolean | Is it possible to delete an appointment |
| allow\_change\_record | boolean | Is it possible to reschedule the appointment |
| site | string | location website |
| currency\_short\_title | string | Currency symbol |
| allow\_change\_record\_delay\_step | int | Time after which you can reschedule the appointment |
| allow\_delete\_record\_delay\_step | int | Time after which you can delete an appointment |

The staff object has the following fields:

| Field | Type | Description |
| --- | --- | --- |
| id | number | staff member ID |
| name | string | staff member name |
| specialization | string | staff member specialization |
| position | object | staff member position |
| show\_rating | number | Whether to show staff member's rating (1 - show, 0 - don't show) |
| rating | number | staff member rating |
| votes\_count | number | Number of votes rated staff member |
| comments\_count | number | Number of comments to a staff member |
| avatar | string | Path to staff member avatar file |

##### Authorizations:

(_bearer__user_)

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**201**

Created

get/user/records/{record\_id}/{record\_hash}

https://api.alteg.io/api/v1/user/records/{record\_id}/{record\_hash}

### Response samples

- 201

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 13132699,\
\
"services": [{"id": 389043,\
\
"title": "Correction of extended nails",\
\
"cost": 2300,\
\
"price_min": 2300,\
\
"price_max": 2300,\
\
"discount": 0,\
\
"amount": 1,\
\
"seance_length": 1800\
\
}\
\
],\
\
"company": {"id": 4564,\
\
"title": "Nail studio",\
\
"country_id": 1,\
\
"country": "United States",\
\
"city_id": 2,\
\
"city": "New York",\
\
"phone": "+1-315-555-0175",\
\
"phones": [ ],\
\
"timezone": 12,\
\
"address": "New York, 787 Jackson Drive",\
\
"coordinate_lat": "40.730610",\
\
"coordinate_lon": "-73.935242",\
\
"allow_delete_record": true,\
\
"allow_change_record": true,\
\
"site": "www.example.com",\
\
"currency_short_title": "USD",\
\
"allow_change_record_delay_step": 0,\
\
"allow_delete_record_delay_step": 0\
\
},\
\
"staff": {"id": 55436,\
\
"name": "Natalia",\
\
"specialization": "Specialist in manicure and pedicure",\
\
"position": {"id": 446,\
\
"title": "Manicurist"\
\
},\
\
"show_rating": 1,\
\
"rating": 4.84,\
\
"votes_count": 0,\
\
"avatar": "http://example.com/image.png",\
\
"comments_count": 37\
\
},\
\
"clients_count": 1,\
\
"date": "2025-09-21T23:00:00.000+03:00",\
\
"datetime": "2017-10-24T17:30:00+0000",\
\
"create_date": "2017-10-20T21:40:24+0000",\
\
"comment": "",\
\
"deleted": true,\
\
"attendance": 0,\
\
"length": 1800,\
\
"notify_by_sms": 0,\
\
"notify_by_email": 0,\
\
"master_requested": false,\
\
"online": true,\
\
"api_id": "",\
\
"last_change_date": "2017-10-24T23:54:02+0000",\
\
"prepaid": false,\
\
"prepaid_confirmed": false,\
\
"activity_id": 0\
\
},\
\
{"id": 13133413,\
\
"services": [{"id": 389045,\
\
"title": "Hand massage (10 min)",\
\
"cost": 300,\
\
"price_min": 300,\
\
"price_max": 400,\
\
"discount": 0,\
\
"amount": 1,\
\
"seance_length": 1800\
\
}\
\
],\
\
"company": {"id": 4564,\
\
"title": "Nail studio",\
\
"country_id": 1,\
\
"country": "United States",\
\
"city_id": 2,\
\
"city": "New York",\
\
"phone": "+1-315-555-0175",\
\
"phones": [ ],\
\
"timezone": 12,\
\
"address": "New York, 787 Jackson Drive",\
\
"coordinate_lat": "40.730610",\
\
"coordinate_lon": "-73.935242",\
\
"allow_delete_record": true,\
\
"allow_change_record": true,\
\
"site": "www.example.com",\
\
"currency_short_title": "USD",\
\
"allow_change_record_delay_step": 0,\
\
"allow_delete_record_delay_step": 0\
\
},\
\
"staff": {"id": 55436,\
\
"name": "Natalia",\
\
"specialization": "Specialist in manicure and pedicure",\
\
"position": {"id": 446,\
\
"title": "Manicurist"\
\
},\
\
"show_rating": 1,\
\
"rating": 4.84,\
\
"votes_count": 0,\
\
"avatar": "http://example.com/image.png",\
\
"comments_count": 37\
\
},\
\
"clients_count": 1,\
\
"date": "2025-09-21T23:00:00.000+03:00",\
\
"datetime": "2017-10-24T17:30:00+0000",\
\
"create_date": "2017-10-20T21:40:24+0000",\
\
"comment": "",\
\
"deleted": true,\
\
"attendance": 0,\
\
"length": 1800,\
\
"notify_by_sms": 0,\
\
"notify_by_email": 0,\
\
"master_requested": false,\
\
"online": true,\
\
"api_id": "",\
\
"last_change_date": "2017-10-24T23:54:02+0000",\
\
"prepaid": false,\
\
"prepaid_confirmed": false,\
\
"activity_id": 0\
\
}\
\
],

"meta": [ ]

}`

## [tag/Employees](https://developer.alteg.io/api\#tag/Employees) Employees

## [tag/Employees/operation/api.location.staff.create_quick](https://developer.alteg.io/api\#tag/Employees/operation/api.location.staff.create_quick) Quick create an employee

Creates a new employee with a minimal set of parameters.

##### Authorizations:

_BearerPartnerUser_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

##### Request Body schema: application/json

|     |     |
| --- | --- |
| name<br>required | string<br>Name of a staff member. |
| specialization<br>required | string<br>Specialization of a staff member. |
| position\_id<br>required | number or null<br>ID of a position that should be linked to a staff member. |
| phone\_number<br>required | string or null<br>Phone number of a user that should be linked to a staff member (without "+", 9 to 15 digits). |
| user\_email<br>required | string <email> <br>Email address of the user to be created or linked to the staff member. |
| user\_phone<br>required | string<br>User phone number (without "+", 9 to 15 digits). Can be the same as phone\_number or different for user account login. |
| is\_user\_invite<br>required | boolean<br>Whether to send an invitation email to the user. Set to true to send invitation, false to create without sending invitation. |

### Responses

**201**

Created

**401**

Unauthorized

**403**

Forbidden

**404**

Not Found

**422**

Unprocessable Entity

post/company/{company\_id}/staff/quick

https://api.alteg.io/api/v1/company/{company\_id}/staff/quick

### Request samples

- Payload

Content type

application/json

Copy

`{"name": "John Johnson",

"specialization": "Specialist",

"position_id": 123,

"phone_number": "11234567890",

"user_email": "john.johnson@example.com",

"user_phone": "11234567890",

"is_user_invite": false

}`

### Response samples

- 201
- 401
- 403
- 404
- 422

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 123,

"name": "John Johnson",

"company_id": 123,

"specialization": "Master",

"avatar": "https://app.alteg.io/images/no-master-sm.png",

"avatar_big": "https://app.alteg.io/images/no-master.png",

"position": {"id": 123,

"title": "Position"

}

},

"meta": { }

}`

## [tag/Employees/operation/Add new employee](https://developer.alteg.io/api\#tag/Employees/operation/Add%20new%20employee) Deprecated. Add new employee  Deprecated

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| name | string<br>staff member name |
| specialization | string<br>staff member specialization |
| weight | number<br>staff member weight. staff members are sorted by weight on exit, heavier first |
| information | string<br>staff member information (HTML format) |
| api\_id | string<br>External staff member ID |
| hidden | number<br>Display status in online appointment, 1 - hidden, 0 - not hidden |
| fired | number<br>The staff member's dismissal status, 1 - dismissed, 0 - not dismissed |
| user\_id | number<br>Linked user ID, 0 - unlink user |

### Responses

**201**

Created

post/staff/{company\_id}

https://api.alteg.io/api/v1/staff/{company\_id}

### Request samples

- Payload

Content type

application/json

Copy

`{"name": "Basil",

"specialization": "the hairdresser",

"weight": 10,

"information": "Trimming with three hands",

"api_id": "42",

"hidden": 0,

"fired": 0,

"user_id": 123

}`

### Response samples

- 201

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 17969,

"api_id": "42",

"name": "Basil",

"specialization": "the hairdresser",

"position": {"id": 1,

"title": "Administrator"

},

"show_rating": 0,

"rating": 0,

"votes_count": 0,

"user_id": 12345,

"avatar": "https://app.alteg.io/uploads/masters/sm/20151018220924_4963.jpg",

"avatar_big": "https://app.alteg.io/uploads/masters/norm/20151018220924_4963.jpg",

"comments_count": 0,

"weight": 10,

"information": "<span><span><span>&nbsp;</span></span></span>",

"hidden": 0,

"fired": 0,

"status": 0

},

"meta": [ ]

}`

## [tag/Employees/operation/Get a List of Employees / Specific Employee](https://developer.alteg.io/api\#tag/Employees/operation/Get%20a%20List%20of%20Employees%20/%20Specific%20Employee) Get a List of Employees / Specific Employee

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Location ID |
| staff\_id<br>required | number<br>staff member ID, if you need to work with a specific staff member. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

**403**

Forbidden

**404**

Not Found

get/company/{company\_id}/staff/{staff\_id}

https://api.alteg.io/api/v1/company/{company\_id}/staff/{staff\_id}

### Response samples

- 200
- 403
- 404

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 1001539,\
\
"name": "staff member 1",\
\
"company_id": 176275,\
\
"specialization": "specialist",\
\
"position": {"id": 1,\
\
"title": "Administrator"\
\
},\
\
"avatar": "https://app.alteg.io/images/no-master-sm.png",\
\
"avatar_big": "https://app.alteg.io/images/no-master.png",\
\
"fired": 0,\
\
"status": 0,\
\
"hidden": 0,\
\
"user_id": 12345\
\
}\
\
],

"meta": {"total_count": 1

}

}`

## [tag/Employees/operation/Deprecated. Get a list of employees / specific employee](https://developer.alteg.io/api\#tag/Employees/operation/Deprecated.%20Get%20a%20list%20of%20employees%20/%20specific%20employee) Deprecated. Get a list of employees / specific employee  Deprecated

##### Authorizations:

_bearer_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| staff\_id<br>required | number<br>staff member ID, if you need to work with a specific staff member. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token |

### Responses

**200**

OK

get/staff/{company\_id}/{staff\_id}

https://api.alteg.io/api/v1/staff/{company\_id}/{staff\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": "17969",\
\
"name": "Basil",\
\
"specialization": "the hairdresser",\
\
"position": {"id": 1,\
\
"title": "Administrator"\
\
},\
\
"show_rating": "0",\
\
"rating": "0",\
\
"votes_count": "0",\
\
"user_id": 12345,\
\
"avatar": "https://app.alteg.io/uploads/masters/sm/20151018220924_4963.jpg",\
\
"avatar_big": "https://app.alteg.io/uploads/masters/norm/20151018220924_4963.jpg",\
\
"comments_count": "0",\
\
"weight": "10",\
\
"information": "<span><span><span>&nbsp;</span></span></span>",\
\
"hidden": "0",\
\
"fired": "0",\
\
"status": "0",\
\
"image_group": {"id": 72250,\
\
"entity": "master",\
\
"entity_id": 26427,\
\
"images": {"sm": {"id": "186817",\
\
"path": "https://app.alteg.io/uploads/masters/sm/9/90/9041171cfdabe4c_20170327202542.jpeg",\
\
"width": "100",\
\
"height": "100",\
\
"type": "jpeg",\
\
"image_group_id": 72250,\
\
"version": "sm"\
\
},\
\
"norm": {"id": "186818",\
\
"path": "https://app.alteg.io/uploads/masters/norm/a/aa/aa37b29b7eb322d_20170327202542.jpeg",\
\
"width": "180",\
\
"height": "220",\
\
"type": "jpeg",\
\
"image_group_id": 72250,\
\
"version": "norm"\
\
},\
\
"origin": {"id": "186819",\
\
"path": "https://app.alteg.io/uploads/masters/origin/6/65/654dbeb4ea0bbc3_20170327202542.jpeg",\
\
"width": "800",\
\
"height": "600",\
\
"type": "jpeg",\
\
"image_group_id": 72250,\
\
"version": "origin"\
\
}\
\
}\
\
}\
\
},\
\
{"id": "34006",\
\
"api_id": "42",\
\
"name": "Denis",\
\
"specialization": "the hairdresser",\
\
"position": [ ],\
\
"show_rating": "0",\
\
"rating": "0",\
\
"votes_count": "0",\
\
"user_id": 12345,\
\
"avatar": "https://app.alteg.io/uploads/masters/sm/20151116091208_4369.jpg",\
\
"avatar_big": "https://app.alteg.io/uploads/masters/norm/20151116091208_4369.jpg",\
\
"comments_count": "0",\
\
"weight": "9",\
\
"information": "<span><span>&nbsp;</span></span>",\
\
"hidden": "0",\
\
"fired": "0",\
\
"status": "0",\
\
"image_group": [ ]\
\
},\
\
{"id": "13616",\
\
"name": "Alexander",\
\
"specialization": "the hairdresser",\
\
"position": [ ],\
\
"show_rating": "0",\
\
"rating": "4.76921",\
\
"votes_count": "0",\
\
"user_id": 12345,\
\
"avatar": "https://app.alteg.io/uploads/masters/sm/20251112123913_5162.jpg",\
\
"avatar_big": "https://app.alteg.io/uploads/masters/norm/20251112123913_5162.jpg",\
\
"comments_count": "26",\
\
"weight": "8",\
\
"information": "<span><span><span>&nbsp;</span></span></span>",\
\
"hidden": "0",\
\
"fired": "0",\
\
"status": "0",\
\
"image_group": [ ]\
\
}\
\
],

"meta": [ ]

}`

## [tag/Employees/operation/Change Employee](https://developer.alteg.io/api\#tag/Employees/operation/Change%20Employee) Change Employee

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| staff\_id<br>required | number<br>staff member ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: \*/\*  required

|     |     |
| --- | --- |
| name | string<br>staff member name |
| specialization | string<br>staff member specialization |
| weight | number<br>staff member weight. staff members are sorted by weight on exit, heavier first |
| information | string<br>staff member information (HTML format) |
| api\_id | string<br>External staff member ID |
| hidden | number<br>Display status in online appointment, 1 - hidden, 0 - not hidden |
| fired | number<br>The staff member's dismissal status, 1 - dismissed, 0 - not dismissed |
| user\_id | number<br>Linked user ID, 0 - unlink user |

### Responses

**200**

OK

put/staff/{company\_id}/{staff\_id}

https://api.alteg.io/api/v1/staff/{company\_id}/{staff\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 17969,

"api_id": "42",

"name": "Basil",

"specialization": "the hairdresser",

"position": {"id": 1,

"title": "Administrator"

},

"show_rating": 0,

"rating": 0,

"votes_count": 0,

"user_id": 12345,

"avatar": "https://app.alteg.io/uploads/masters/sm/20151018220924_4963.jpg",

"avatar_big": "https://app.alteg.io/uploads/masters/norm/20151018220924_4963.jpg",

"comments_count": 0,

"weight": 10,

"information": "<span><span><span>&nbsp;</span></span></span>",

"hidden": 0,

"fired": 0,

"status": 0

},

"meta": [ ]

}`

## [tag/Employees/operation/Delete employee](https://developer.alteg.io/api\#tag/Employees/operation/Delete%20employee) Delete employee

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| staff\_id<br>required | number<br>staff member ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**204**

No Content

delete/staff/{company\_id}/{staff\_id}

https://api.alteg.io/api/v1/staff/{company\_id}/{staff\_id}

## [tag/Chain-Clients](https://developer.alteg.io/api\#tag/Chain-Clients) Chain Clients

## [tag/Chain-Clients/operation/Get a chain client by phone number.](https://developer.alteg.io/api\#tag/Chain-Clients/operation/Get%20a%20chain%20client%20by%20phone%20number.) Get a chain client by phone number.

- Parameter
  - group\_id (required, number, `43877`) \- ID of the location chain

#### Client filtering

- phone:'70001234567' (optional, string) - Phone to filter clients

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| group\_id<br>required | number<br>Location chain ID |

##### query Parameters

|     |     |
| --- | --- |
| phone<br>required | string<br>Example: phone='79264037640'<br>Phone to filter clients, required parameter |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token.User user\_token |

### Responses

**200**

OK

**404**

Not Found

get/group/{group\_id}/clients/

https://api.alteg.io/api/v1/group/{group\_id}/clients/

### Response samples

- 200
- 404

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"salon_group_id": 312,

"phone": "+1-315-555-0175",

"clients": [{"id": 4240880,\
\
"company_id": 4564,\
\
"name": "lx",\
\
"email": "client@example.com"\
\
},\
\
{"id": 4243272,\
\
"company_id": 24697,\
\
"name": "lx",\
\
"email": "client@example.com"\
\
}\
\
]

},

"meta": [ ]

}`

## [tag/Resources](https://developer.alteg.io/api\#tag/Resources) Resources

## [tag/Resources/operation/Getting Resources at a Location](https://developer.alteg.io/api\#tag/Resources/operation/Getting%20Resources%20at%20a%20Location) Getting Resources at a Location

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### query Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/resources/{company\_id}

https://api.alteg.io/api/v1/resources/{company\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 70,\
\
"title": "Pedicure chair",\
\
"instances": [{"id": 181,\
\
"title": "Pedicure chair #1",\
\
"resource_id": 70\
\
}\
\
]\
\
},\
\
{"id": 464,\
\
"title": "massage room",\
\
"instances": [{"id": 1094,\
\
"title": "Massage room 1st floor",\
\
"resource_id": 464\
\
},\
\
{"id": 1162,\
\
"title": "Massage room 2nd floor",\
\
"resource_id": 464\
\
}\
\
]\
\
}\
\
],

"meta": {"count": 2

}

}`

## [tag/Work-Schedule](https://developer.alteg.io/api\#tag/Work-Schedule) Work Schedule

## [tag/Work-Schedule/operation/Get an employee's schedule](https://developer.alteg.io/api\#tag/Work-Schedule/operation/Get%20an%20employee's%20schedule) Get an employee's schedule

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| staff\_id<br>required | number<br>staff member ID. |
| start\_date<br>required | number<br>Example: ''<br>Period start date |
| end\_date<br>required | number<br>Example: ''<br>Period end date |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/schedule/{company\_id}/{staff\_id}/{start\_date}/{end\_date}

https://api.alteg.io/api/v1/schedule/{company\_id}/{staff\_id}/{start\_date}/{end\_date}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"date": "2025-09-21T23:00:00.000+03:00",\
\
"is_working": 1,\
\
"slots": [{"from": "10:00",\
\
"to": "14:00"\
\
},\
\
{"from": "15:00",\
\
"to": "23:15"\
\
}\
\
]\
\
},\
\
{"date": "2025-09-21T23:00:00.000+03:00",\
\
"is_working": 1,\
\
"slots": [{"from": "10:00",\
\
"to": "14:30"\
\
},\
\
{"from": "15:00",\
\
"to": "22:10"\
\
}\
\
]\
\
},\
\
{"date": "2025-09-21T23:00:00.000+03:00",\
\
"is_working": 0,\
\
"slots": [ ]\
\
},\
\
{"date": "2025-09-21T23:00:00.000+03:00",\
\
"is_working": 1,\
\
"slots": [{"from": "10:00",\
\
"to": "14:00"\
\
},\
\
{"from": "15:00",\
\
"to": "22:00"\
\
}\
\
]\
\
}\
\
],

"meta": [ ]

}`

## [tag/Work-Schedule/operation/Change an employee's work schedule](https://developer.alteg.io/api\#tag/Work-Schedule/operation/Change%20an%20employee's%20work%20schedule) Change an employee's work schedule

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| staff\_id<br>required | number<br>staff member ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: \*/\*  optional

|     |     |
| --- | --- |
| date<br>required | string<br>date |
| is\_working<br>required | boolean<br>Working date or not |
| slots<br>required | object<br>Array of (from, to) working hours |

### Responses

**201**

Created

put/schedule/{company\_id}/{staff\_id}/{start\_date}/{end\_date}

https://api.alteg.io/api/v1/schedule/{company\_id}/{staff\_id}/{start\_date}/{end\_date}

## [tag/Sessions-for-the-Appointment-Calendar](https://developer.alteg.io/api\#tag/Sessions-for-the-Appointment-Calendar) Sessions for the Appointment Calendar

## [tag/Sessions-for-the-Appointment-Calendar/operation/Get a list of sessions for the Appointment Calendar](https://developer.alteg.io/api\#tag/Sessions-for-the-Appointment-Calendar/operation/Get%20a%20list%20of%20sessions%20for%20the%20Appointment%20Calendar) Get a list of sessions for the Appointment Calendar

The sessions object for the log has the following fields:

| Field | Type | Description |
| --- | --- | --- |
| time | string | Session time (17:30 for example) |
| free | boolean | Free time or busy |

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| date<br>required | string<br>date in iso8601 format.<br>Filter by appointment date (eg '2015-09-30') |
| staff\_id<br>required | number<br>staff member ID. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/timetable/seances/{company\_id}/{staff\_id}/{date}

https://api.alteg.io/api/v1/timetable/seances/{company\_id}/{staff\_id}/{date}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"time": "10:00",\
\
"is_free": true\
\
},\
\
{"time": "10:15",\
\
"is_free": true\
\
},\
\
{"time": "10:30",\
\
"is_free": true\
\
},\
\
{"time": "10:45",\
\
"is_free": true\
\
},\
\
{"time": "11:00",\
\
"is_free": false\
\
},\
\
{"time": "11:15",\
\
"is_free": false\
\
},\
\
{"time": "11:30",\
\
"is_free": false\
\
},\
\
{"time": "11:45",\
\
"is_free": false\
\
},\
\
{"time": "12:00",\
\
"is_free": false\
\
},\
\
{"time": "12:15",\
\
"is_free": false\
\
},\
\
{"time": "12:30",\
\
"is_free": false\
\
},\
\
{"time": "12:45",\
\
"is_free": false\
\
},\
\
{"time": "13:00",\
\
"is_free": true\
\
},\
\
{"time": "13:15",\
\
"is_free": true\
\
},\
\
{"time": "13:30",\
\
"is_free": true\
\
},\
\
{"time": "13:45",\
\
"is_free": true\
\
},\
\
{"time": "14:00",\
\
"is_free": true\
\
},\
\
{"time": "14:15",\
\
"is_free": true\
\
},\
\
{"time": "14:30",\
\
"is_free": true\
\
},\
\
{"time": "14:45",\
\
"is_free": true\
\
},\
\
{"time": "15:00",\
\
"is_free": true\
\
},\
\
{"time": "15:15",\
\
"is_free": true\
\
},\
\
{"time": "15:30",\
\
"is_free": true\
\
},\
\
{"time": "15:45",\
\
"is_free": true\
\
},\
\
{"time": "16:00",\
\
"is_free": true\
\
},\
\
{"time": "16:15",\
\
"is_free": true\
\
},\
\
{"time": "16:30",\
\
"is_free": false\
\
},\
\
{"time": "16:45",\
\
"is_free": false\
\
},\
\
{"time": "17:00",\
\
"is_free": false\
\
}\
\
],

"meta": [ ]

}`

## [tag/POS-Transactions](https://developer.alteg.io/api\#tag/POS-Transactions) POS Transactions

## [tag/POS-Transactions/paths/~1kkm_transactions~1{company_id}/get](https://developer.alteg.io/api\#tag/POS-Transactions/paths/~1kkm_transactions~1{company_id}/get) Get transactions

Filters

| Parameter | Description |
| --- | --- |
| page | Page number |
| editable\_length | Number of clients per page |
| type | Operation type |
| status | Operation status |
| start\_date | Period start date |
| end\_date | Period end date |

Types of all transactions with cash register

| Meaning | Description |
| --- | --- |
| 0 | Sales operation – Active for documents of type Visit |
| 1 | Sale return operation – Active for documents of type Visit |
| 2 | Correction operation |
| 4 | Shift opening operation – Opens a new POS shift |
| 5 | Shift closing operation – Closes the current POS shift |
| 9 | Get POS status – Retrieves the current status of the POS device |
| 11 | Get POS team status – Retrieves the status of all POS devices connected to the team |
| 12 | Correction operation |
| 13 | Print X-report – Prints a non-fiscal summary report of the current shift |
| 6 | Cash deposit – Registers a cash-in transaction in the POS |
| 7 | Cash withdrawal – Registers a cash-out transaction in the POS |

Statuses of All POS Operations

| Meaning | Description |
| --- | --- |
| 0 | Connection error with POS – Unable to establish a connection with the POS device |
| 1 | Success – Operation completed successfully |
| 2 | Sent for printing – The request has been sent to the POS and is waiting for print completion |
| 3 | Runtime error – An error occurred while processing the operation on the POS device |
| 4 | Status check error – Failed to retrieve the current status of the POS |
| 5 | Waiting for POS readiness – Operation is pending until the POS device becomes ready |

Document Types

| Meaning | Description |
| --- | --- |
| 1 | Sale of products |
| 2 | Provision of services |
| 3 | Arrival of products |
| 4 | Products write-off |
| 5 | Transfer of products |
| 6 | Inventory |
| 7 | Visit |
| 8 | Consumables write-off |
| 9 | Deposit replenishment |

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### query Parameters

|     |     |
| --- | --- |
| page | number<br>Example: page=1<br>Page number |
| editable\_length | number<br>Example: editable\_length=25<br>Number of customers per page |
| type | number<br>Example: type=20<br>Type of transaction |
| status | number<br>Example: status=6<br>Operation status |
| start\_date | number<br>Example: start\_date=''<br>Period start date |
| end\_date | number<br>Example: end\_date=''<br>Period end date |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer access\_token, User user\_token |

### Responses

**200**

OK

get/kkm\_transactions/{company\_id}

https://api.alteg.io/api/v1/kkm\_transactions/{company\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 1059,\
\
"print_date": "2025-09-21T23:00:00.000+03:00",\
\
"printed_count": 1,\
\
"sum": 10,\
\
"type": {"id": 1,\
\
"title": "Sales return operation"\
\
},\
\
"status": {"id": 3,\
\
"title": "Runtime error"\
\
},\
\
"document": {"id": 2045,\
\
"type": 7,\
\
"type_title": "Visit"\
\
},\
\
"cashier": {"id": 746310,\
\
"name": "Jack Smith"\
\
}\
\
}\
\
],

"meta": {"count": 1

}

}`

## [tag/POS-Transactions/operation/Print receipt](https://developer.alteg.io/api\#tag/POS-Transactions/operation/Print%20receipt) Print receipt

Types of all transactions with cash register

| Meaning | Description |
| --- | --- |
| 0 | Sale operation (active for documents with types "Visit" and "Deposit replenishment") |
| 1 | Sale return operation (active for documents with types "Visit" and "Deposit replenishment") |
| 2 | Correction operation |
| 4 | Shift opening operation – Opens a new POS shift |
| 5 | Shift closing operation – Closes the current POS shift |
| 9 | Get POS status – Retrieves the current status of the POS device |
| 11 | Get POS team status – Retrieves the status of all POS devices connected to the team |
| 12 | Correction operation |
| 13 | Print X-report – Prints a non-fiscal summary report of the current shift |
| 6 | Cash deposit – Registers a cash-in transaction in the POS |
| 7 | Cash withdrawal – Registers a cash-out transaction in the POS |

Document Types

| Meaning | Description |
| --- | --- |
| 1 | Sale of products |
| 2 | Provision of services |
| 3 | Arrival of products |
| 4 | Products write-off |
| 5 | Transfer of products |
| 6 | Inventory |
| 7 | Visit |
| 8 | Consumables write-off |
| 9 | Deposit replenishment |

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Location ID |

##### Request Body schema: \*/\*  optional

|     |     |
| --- | --- |
| document\_id<br>required | number<br>Document ID |
| type<br>required | number<br>type of operation with cash register (see table of types of all operations) |
| is\_pos\_enabled | boolean<br>enable POS terminal (default false) |

### Responses

**200**

OK

post/kkm\_transactions/{company\_id}/print\_document\_bill

https://api.alteg.io/api/v1/kkm\_transactions/{company\_id}/print\_document\_bill

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"kkm_type": 0,

"kkm_transactions": [{"id": 1954,\
\
"print_date": "2025-09-21T23:00:00.000+03:00",\
\
"printed_count": 0,\
\
"sum": 0,\
\
"type": {"id": 0,\
\
"title": "Sale operation"\
\
},\
\
"status": {"id": 2,\
\
"title": "Sent for printing"\
\
},\
\
"document": {"id": 164,\
\
"type": 9,\
\
"type_title": "Deposit replenishment"\
\
},\
\
"cashier": {"id": 1138453,\
\
"name": "Jack Smith"\
\
}\
\
}\
\
],

"status": 2,

"bill_json": [[ ]\
\
]

},

"meta": [ ]

}`

## [tag/Sales-Operation](https://developer.alteg.io/api\#tag/Sales-Operation) Sales Operation

## [tag/Sales-Operation/operation/Receipt of a Sales Transaction](https://developer.alteg.io/api\#tag/Sales-Operation/operation/Receipt%20of%20a%20Sales%20Transaction) Receipt of a Sales Transaction

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| document\_id<br>required | integer<br>Sales Document ID |
| company\_id<br>required | number<br>Location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/company/{company\_id}/sale/{document\_id}

https://api.alteg.io/api/v1/company/{company\_id}/sale/{document\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"state": {"items": [{"id": 2181520,\
\
"type": "good",\
\
"title": "item 12",\
\
"amount": 1,\
\
"default_cost_per_unit": 1300,\
\
"default_cost_total": 1300,\
\
"client_discount_percent": 10,\
\
"cost_to_pay_total": 1170\
\
},\
\
{"id": 22017,\
\
"type": "service",\
\
"document_id": 8200391,\
\
"title": "Manicure",\
\
"amount": 1,\
\
"default_cost_per_unit": 500,\
\
"default_cost_total": 500,\
\
"client_discount_percent": 10,\
\
"cost_to_pay_total": 450\
\
}\
\
],

"loyalty_transactions": [{"id": 25042,\
\
"document_id": 8201102,\
\
"sale_item_id": 2181521,\
\
"sale_item_type": "good",\
\
"amount": 9.9,\
\
"type_id": 11,\
\
"created_at": "2025-09-21T23:00:00.000+03:00",\
\
"deposit_transaction_id": 775,\
\
"chain": {"id": 500,\
\
"title": "YC BE Chain"\
\
},\
\
"type": {"id": 11,\
\
"title": "Withdrawal from personal account"\
\
},\
\
"deposit": {"id": 220,\
\
"balance": 990.1,\
\
"type": {"id": 5,\
\
"title": "deposit 1"\
\
}\
\
}\
\
},\
\
{"id": 25043,\
\
"document_id": 8201102,\
\
"amount": 0.1,\
\
"type_id": 2,\
\
"created_at": "2025-09-21T23:00:00.000+03:00",\
\
"loyalty_card_id": 185395,\
\
"loyalty_program_id": 264,\
\
"chain": {"id": 231,\
\
"title": "Example chain."\
\
},\
\
"type": {"id": 2,\
\
"title": "Loyalty programs"\
\
},\
\
"loyalty_card": {"id": 185395,\
\
"type_id": 265,\
\
"number": 23100185395,\
\
"balance": 50.15,\
\
"type": {"id": 265,\
\
"type": "Loyalty program template test"\
\
},\
\
"chain": {"id": 231,\
\
"title": "Example chain."\
\
}\
\
},\
\
"loyalty_program": {"id": 264,\
\
"title": "CASHBACK BigBro",\
\
"type_id": 7,\
\
"is_value_percent": true,\
\
"type": {"id": 7,\
\
"title": "Cumulative cashback (paid)"\
\
},\
\
"chain": {"id": 231,\
\
"title": "Example chain."\
\
}\
\
}\
\
},\
\
{"id": 25050,\
\
"document_id": 8201102,\
\
"sale_item_id": 2181521,\
\
"sale_item_type": "good",\
\
"amount": 100,\
\
"type_id": 8,\
\
"created_at": "2025-09-21T23:00:00.000+03:00",\
\
"loyalty_certificate_id": 339,\
\
"chain": {"id": 79,\
\
"title": "Bank 24"\
\
},\
\
"type": {"id": 8,\
\
"title": "Write-off from the certificate"\
\
},\
\
"loyalty_certificate": {"id": 339,\
\
"balance": 0,\
\
"applicable_balance": 0,\
\
"type": {"id": 20,\
\
"title": "Test Certificate",\
\
"is_code_required": true\
\
},\
\
"chain": {"id": 231,\
\
"title": "Example chain."\
\
}\
\
}\
\
}\
\
],

"payment_transactions": [{"id": 6033940,\
\
"document_id": 8200904,\
\
"sale_item_id": 2181442,\
\
"sale_item_type": "good",\
\
"expense_id": 7,\
\
"account_id": 90218,\
\
"amount": 32,\
\
"account": {"id": 90218,\
\
"title": "Cash by default",\
\
"is_cash": true,\
\
"is_default": true\
\
},\
\
"expense": {"id": 7,\
\
"title": "Sale of goods"\
\
}\
\
},\
\
{"id": 6033941,\
\
"document_id": 8200904,\
\
"sale_item_id": 2181442,\
\
"sale_item_type": "good",\
\
"expense_id": 7,\
\
"account_id": 90218,\
\
"amount": 27,\
\
"account": {"id": 90218,\
\
"title": "cash desk",\
\
"is_cash": true,\
\
"is_default": false\
\
},\
\
"expense": {"id": 7,\
\
"title": "Sale of goods"\
\
}\
\
},\
\
{"id": 6034121,\
\
"document_id": 8201102,\
\
"sale_item_id": 2181521,\
\
"sale_item_type": "good",\
\
"expense_id": 7,\
\
"account_id": 23182,\
\
"amount": 43,\
\
"account": {"id": 23182,\
\
"title": "Cards - acquiring by default",\
\
"is_cash": false,\
\
"is_default": true\
\
},\
\
"expense": {"id": 7,\
\
"title": "Sale of goods"\
\
}\
\
},\
\
{"id": 6034122,\
\
"document_id": 8201102,\
\
"sale_item_id": 2181521,\
\
"sale_item_type": "good",\
\
"expense_id": 7,\
\
"account_id": 23182,\
\
"amount": 12,\
\
"account": {"id": 23182,\
\
"title": "Cards - acquiring",\
\
"is_cash": false,\
\
"is_default": false\
\
},\
\
"expense": {"id": 7,\
\
"title": "Sale of goods"\
\
}\
\
}\
\
]

},

"kkm_state": {"last_operation_type": 1,

"transactions": [{"id": 2424,\
\
"document_id": 8200904,\
\
"print_date": "2025-09-21T23:00:00.000+03:00",\
\
"printed_count": 0,\
\
"sum": 0,\
\
"type": {"id": 0,\
\
"title": "Sale operation"\
\
},\
\
"status": {"id": 1,\
\
"title": "Successfully"\
\
},\
\
"document": {"id": 7215,\
\
"type": 1,\
\
"type_title": "Sale of goods"\
\
},\
\
"cashier": {"id": 746310,\
\
"name": "Jack Smith"\
\
}\
\
}\
\
]

},

"payment_methods": [{"slug": "account",\
\
"is_applicable": false,\
\
"applicable_amount": 1170,\
\
"applicable_count": 0,\
\
"applicable_value": 0,\
\
"account_id": 36785,\
\
"account": {"id": 36785,\
\
"title": "Cash desk - non-cash",\
\
"is_cash": false\
\
}\
\
},\
\
{"slug": "loyalty_card",\
\
"is_applicable": true,\
\
"applicable_amount": 51.65,\
\
"applicable_count": 0,\
\
"applicable_value": 0,\
\
"loyalty_card_id": 19283,\
\
"loyalty_card": {"id": 19283,\
\
"type_id": 155,\
\
"number": 31200019283,\
\
"balance": 51.65,\
\
"type": {"id": 155,\
\
"type": "discount card"\
\
},\
\
"chain": {"id": 312,\
\
"title": "Trinity group"\
\
}\
\
}\
\
},\
\
{"slug": "loyalty_program",\
\
"is_applicable": true,\
\
"applicable_amount": 234,\
\
"applicable_count": 0,\
\
"applicable_value": 20,\
\
"loyalty_card_id": 19283,\
\
"loyalty_program_id": 183,\
\
"loyalty_card": {"id": 19283,\
\
"type_id": 155,\
\
"number": 31200019283,\
\
"balance": 51.65,\
\
"type": {"id": 155,\
\
"type": "discount card"\
\
},\
\
"chain": {"id": 312,\
\
"title": "Trinity group"\
\
}\
\
},\
\
"loyalty_program": {"id": 183,\
\
"title": "permanent discount",\
\
"type_id": 1,\
\
"is_value_percent": true,\
\
"type": {"id": 1,\
\
"title": "Fixed discount"\
\
},\
\
"chain": {"id": 312,\
\
"title": "Trinity group"\
\
}\
\
}\
\
},\
\
{"slug": "loyalty_abonement",\
\
"is_applicable": false,\
\
"applicable_amount": 0,\
\
"applicable_count": 0,\
\
"applicable_value": 0,\
\
"loyalty_abonement_id": 27,\
\
"loyalty_abonement": {"id": 27,\
\
"is_united_balance": false,\
\
"united_balance": 0,\
\
"type": {"id": 7,\
\
"title": "subscription to 5000 QA net",\
\
"is_code_required": true\
\
},\
\
"chain": {"id": 231,\
\
"title": "Example chain."\
\
},\
\
"balance_container": {"links": [{"count": 5,\
\
"category": {"id": 229680,\
\
"category_id": 1,\
\
"title": "Manicure"\
\
}\
\
},\
\
{"count": 5,\
\
"category": {"id": 429813,\
\
"category_id": 429812,\
\
"title": "1 Lesson"\
\
}\
\
}\
\
]\
\
}\
\
}\
\
},\
\
{"slug": "loyalty_certificate",\
\
"is_applicable": true,\
\
"applicable_amount": 1170,\
\
"applicable_count": 0,\
\
"applicable_value": 0,\
\
"loyalty_certificate_id": 338,\
\
"loyalty_certificate": {"id": 338,\
\
"balance": 10000,\
\
"applicable_balance": 10000,\
\
"type": {"id": 130,\
\
"title": "test",\
\
"is_code_required": true\
\
},\
\
"chain": {"id": 231,\
\
"title": "Example chain."\
\
}\
\
}\
\
},\
\
{"slug": "referral_loyalty_program",\
\
"is_applicable": false,\
\
"applicable_amount": 0,\
\
"applicable_count": 0,\
\
"applicable_value": 0,\
\
"loyalty_program_id": 424,\
\
"loyalty_program": {"id": 424,\
\
"title": "Fixed discount",\
\
"type_id": 1,\
\
"is_value_percent": true,\
\
"type": {"id": 1,\
\
"title": "Fixed discount"\
\
},\
\
"chain": {"id": 231,\
\
"title": "Example chain."\
\
}\
\
}\
\
},\
\
{"slug": "deposit",\
\
"is_applicable": true,\
\
"applicable_amount": 9.9,\
\
"applicable_count": 0,\
\
"applicable_value": 0,\
\
"deposit_id": 220,\
\
"deposit": {"id": 220,\
\
"balance": 1000,\
\
"type": {"id": 5,\
\
"title": "deposit 1"\
\
}\
\
}\
\
}\
\
]

},

"meta": [ ]

}`

## [tag/Sale-operation](https://developer.alteg.io/api\#tag/Sale-operation) Sale operation

## [tag/Sale-operation/operation/Delete a Cashier Payment Transaction](https://developer.alteg.io/api\#tag/Sale-operation/operation/Delete%20a%20Cashier%20Payment%20Transaction) Delete a Cashier Payment Transaction

As a response, information about the [Sale operation](https://developer.alteg.io/api#sale-operation) is returned

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| document\_id<br>required | integer<br>Sales Document ID |
| payment\_transaction\_id<br>required | integer<br>transaction ID |
| company\_id<br>required | number<br>Location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

delete/company/{company\_id}/sale/{document\_id}/payment/payment\_transaction/{payment\_transaction\_id}

https://api.alteg.io/api/v1/company/{company\_id}/sale/{document\_id}/payment/payment\_transaction/{payment\_transaction\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"state": {"items": [{"id": 2181520,\
\
"type": "good",\
\
"title": "item 12",\
\
"amount": 1,\
\
"default_cost_per_unit": 1300,\
\
"default_cost_total": 1300,\
\
"client_discount_percent": 10,\
\
"cost_to_pay_total": 1170\
\
},\
\
{"id": 22017,\
\
"type": "service",\
\
"document_id": 8200391,\
\
"title": "Manicure",\
\
"amount": 1,\
\
"default_cost_per_unit": 500,\
\
"default_cost_total": 500,\
\
"client_discount_percent": 10,\
\
"cost_to_pay_total": 450\
\
}\
\
],

"loyalty_transactions": [{"id": 25042,\
\
"document_id": 8201102,\
\
"sale_item_id": 2181521,\
\
"sale_item_type": "good",\
\
"amount": 9.9,\
\
"type_id": 11,\
\
"created_at": "2025-09-21T23:00:00.000+03:00",\
\
"deposit_transaction_id": 775,\
\
"chain": {"id": 500,\
\
"title": "YC BE Chain"\
\
},\
\
"type": {"id": 11,\
\
"title": "Withdrawal from personal account"\
\
},\
\
"deposit": {"id": 220,\
\
"balance": 990.1,\
\
"type": {"id": 5,\
\
"title": "deposit 1"\
\
}\
\
}\
\
},\
\
{"id": 25043,\
\
"document_id": 8201102,\
\
"amount": 0.1,\
\
"type_id": 2,\
\
"created_at": "2025-09-21T23:00:00.000+03:00",\
\
"loyalty_card_id": 185395,\
\
"loyalty_program_id": 264,\
\
"chain": {"id": 231,\
\
"title": "Example chain."\
\
},\
\
"type": {"id": 2,\
\
"title": "Loyalty programs"\
\
},\
\
"loyalty_card": {"id": 185395,\
\
"type_id": 265,\
\
"number": 23100185395,\
\
"balance": 50.15,\
\
"type": {"id": 265,\
\
"type": "Loyalty program template test"\
\
},\
\
"chain": {"id": 231,\
\
"title": "Example chain."\
\
}\
\
},\
\
"loyalty_program": {"id": 264,\
\
"title": "CASHBACK BigBro",\
\
"type_id": 7,\
\
"is_value_percent": true,\
\
"type": {"id": 7,\
\
"title": "Cumulative cashback (paid)"\
\
},\
\
"chain": {"id": 231,\
\
"title": "Example chain."\
\
}\
\
}\
\
},\
\
{"id": 25050,\
\
"document_id": 8201102,\
\
"sale_item_id": 2181521,\
\
"sale_item_type": "good",\
\
"amount": 100,\
\
"type_id": 8,\
\
"created_at": "2025-09-21T23:00:00.000+03:00",\
\
"loyalty_certificate_id": 339,\
\
"chain": {"id": 79,\
\
"title": "Bank 24"\
\
},\
\
"type": {"id": 8,\
\
"title": "Write-off from the certificate"\
\
},\
\
"loyalty_certificate": {"id": 339,\
\
"balance": 0,\
\
"applicable_balance": 0,\
\
"type": {"id": 20,\
\
"title": "Test Certificate",\
\
"is_code_required": true\
\
}\
\
}\
\
}\
\
],

"payment_transactions": [{"id": 6033940,\
\
"document_id": 8200904,\
\
"sale_item_id": 2181442,\
\
"sale_item_type": "good",\
\
"expense_id": 7,\
\
"account_id": 90218,\
\
"amount": 32,\
\
"account": {"id": 90218,\
\
"title": "Cash by default",\
\
"is_cash": true,\
\
"is_default": true\
\
},\
\
"expense": {"id": 7,\
\
"title": "Sale of goods"\
\
}\
\
},\
\
{"id": 6033941,\
\
"document_id": 8200904,\
\
"sale_item_id": 2181442,\
\
"sale_item_type": "good",\
\
"expense_id": 7,\
\
"account_id": 90218,\
\
"amount": 27,\
\
"account": {"id": 90218,\
\
"title": "cash desk",\
\
"is_cash": true,\
\
"is_default": false\
\
},\
\
"expense": {"id": 7,\
\
"title": "Sale of goods"\
\
}\
\
},\
\
{"id": 6034121,\
\
"document_id": 8201102,\
\
"sale_item_id": 2181521,\
\
"sale_item_type": "good",\
\
"expense_id": 7,\
\
"account_id": 23182,\
\
"amount": 43,\
\
"account": {"id": 23182,\
\
"title": "Cards - acquiring by default",\
\
"is_cash": false,\
\
"is_default": true\
\
},\
\
"expense": {"id": 7,\
\
"title": "Sale of goods"\
\
}\
\
},\
\
{"id": 6034122,\
\
"document_id": 8201102,\
\
"sale_item_id": 2181521,\
\
"sale_item_type": "good",\
\
"expense_id": 7,\
\
"account_id": 23182,\
\
"amount": 12,\
\
"account": {"id": 23182,\
\
"title": "Cards - acquiring",\
\
"is_cash": false,\
\
"is_default": false\
\
},\
\
"expense": {"id": 7,\
\
"title": "Sale of goods"\
\
}\
\
}\
\
]

},

"kkm_state": {"last_operation_type": 1,

"transactions": [{"id": 2424,\
\
"document_id": 8200904,\
\
"print_date": "2025-09-21T23:00:00.000+03:00",\
\
"printed_count": 0,\
\
"sum": 0,\
\
"type": {"id": 0,\
\
"title": "Sale operation"\
\
},\
\
"status": {"id": 1,\
\
"title": "Successfully"\
\
},\
\
"document": {"id": 7215,\
\
"type": 1,\
\
"type_title": "Sale of goods"\
\
},\
\
"cashier": {"id": 746310,\
\
"name": "Jack Smith"\
\
}\
\
}\
\
]

},

"payment_methods": [{"slug": "account",\
\
"is_applicable": false,\
\
"applicable_amount": 1170,\
\
"applicable_count": 0,\
\
"applicable_value": 0,\
\
"account_id": 36785,\
\
"account": {"id": 36785,\
\
"title": "Cash desk - non-cash",\
\
"is_cash": false\
\
}\
\
},\
\
{"slug": "loyalty_card",\
\
"is_applicable": true,\
\
"applicable_amount": 51.65,\
\
"applicable_count": 0,\
\
"applicable_value": 0,\
\
"loyalty_card_id": 19283,\
\
"loyalty_card": {"id": 19283,\
\
"type_id": 155,\
\
"number": 31200019283,\
\
"balance": 51.65,\
\
"type": {"id": 155,\
\
"type": "discount card"\
\
},\
\
"chain": {"id": 312,\
\
"title": "Trinity group"\
\
}\
\
}\
\
},\
\
{"slug": "loyalty_program",\
\
"is_applicable": true,\
\
"applicable_amount": 234,\
\
"applicable_count": 0,\
\
"applicable_value": 20,\
\
"loyalty_card_id": 19283,\
\
"loyalty_program_id": 183,\
\
"loyalty_card": {"id": 19283,\
\
"type_id": 155,\
\
"number": 31200019283,\
\
"balance": 51.65,\
\
"type": {"id": 155,\
\
"type": "discount card"\
\
},\
\
"chain": {"id": 312,\
\
"title": "Trinity group"\
\
}\
\
},\
\
"loyalty_program": {"id": 183,\
\
"title": "permanent discount",\
\
"type_id": 1,\
\
"is_value_percent": true,\
\
"type": {"id": 1,\
\
"title": "Fixed discount"\
\
},\
\
"chain": {"id": 312,\
\
"title": "Trinity group"\
\
}\
\
}\
\
},\
\
{"slug": "loyalty_abonement",\
\
"is_applicable": false,\
\
"applicable_amount": 0,\
\
"applicable_count": 0,\
\
"applicable_value": 0,\
\
"loyalty_abonement_id": 27,\
\
"loyalty_abonement": {"id": 27,\
\
"is_united_balance": false,\
\
"united_balance": 0,\
\
"type": {"id": 7,\
\
"title": "subscription to 5000 QA net",\
\
"is_code_required": true\
\
},\
\
"balance_container": {"links": [{"count": 5,\
\
"category": {"id": 229680,\
\
"category_id": 1,\
\
"title": "Manicure"\
\
}\
\
},\
\
{"count": 5,\
\
"category": {"id": 429813,\
\
"category_id": 429812,\
\
"title": "1 Lesson"\
\
}\
\
}\
\
]\
\
}\
\
}\
\
},\
\
{"slug": "loyalty_certificate",\
\
"is_applicable": true,\
\
"applicable_amount": 1170,\
\
"applicable_count": 0,\
\
"applicable_value": 0,\
\
"loyalty_certificate_id": 338,\
\
"loyalty_certificate": {"id": 338,\
\
"balance": 10000,\
\
"applicable_balance": 10000,\
\
"type": {"id": 130,\
\
"title": "test",\
\
"is_code_required": true\
\
}\
\
}\
\
},\
\
{"slug": "referral_loyalty_program",\
\
"is_applicable": false,\
\
"applicable_amount": 0,\
\
"applicable_count": 0,\
\
"applicable_value": 0,\
\
"loyalty_program_id": 424,\
\
"loyalty_program": {"id": 424,\
\
"title": "Fixed discount",\
\
"type_id": 1,\
\
"is_value_percent": true,\
\
"type": {"id": 1,\
\
"title": "Fixed discount"\
\
},\
\
"chain": {"id": 231,\
\
"title": "Example chain."\
\
}\
\
}\
\
},\
\
{"slug": "deposit",\
\
"is_applicable": true,\
\
"applicable_amount": 9.9,\
\
"applicable_count": 0,\
\
"applicable_value": 0,\
\
"deposit_id": 220,\
\
"deposit": {"id": 220,\
\
"balance": 1000,\
\
"type": {"id": 5,\
\
"title": "deposit 1"\
\
}\
\
}\
\
}\
\
]

},

"meta": [ ]

}`

## [tag/Sale-operation/operation/Delete a Loyalty Payment Transaction](https://developer.alteg.io/api\#tag/Sale-operation/operation/Delete%20a%20Loyalty%20Payment%20Transaction) Delete a Loyalty Payment Transaction

As a response, information about the [Sale operation](https://developer.alteg.io/api#sale-operation) is returned

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| document\_id<br>required | integer<br>Sales Document ID |
| payment\_transaction\_id<br>required | integer<br>transaction ID |
| company\_id<br>required | number<br>Location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

delete/company/{company\_id}/sale/{document\_id}/payment/loyalty\_transaction/{payment\_transaction\_id}

https://api.alteg.io/api/v1/company/{company\_id}/sale/{document\_id}/payment/loyalty\_transaction/{payment\_transaction\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"state": {"items": [{"id": 2181520,\
\
"type": "good",\
\
"title": "item 12",\
\
"amount": 1,\
\
"default_cost_per_unit": 1300,\
\
"default_cost_total": 1300,\
\
"client_discount_percent": 10,\
\
"cost_to_pay_total": 1170\
\
},\
\
{"id": 22017,\
\
"type": "service",\
\
"document_id": 8200391,\
\
"title": "Manicure",\
\
"amount": 1,\
\
"default_cost_per_unit": 500,\
\
"default_cost_total": 500,\
\
"client_discount_percent": 10,\
\
"cost_to_pay_total": 450\
\
}\
\
],

"loyalty_transactions": [{"id": 25042,\
\
"document_id": 8201102,\
\
"sale_item_id": 2181521,\
\
"sale_item_type": "good",\
\
"amount": 9.9,\
\
"type_id": 11,\
\
"created_at": "2025-09-21T23:00:00.000+03:00",\
\
"deposit_transaction_id": 775,\
\
"chain": {"id": 500,\
\
"title": "YC BE chain"\
\
},\
\
"type": {"id": 11,\
\
"title": "Withdrawal from personal account"\
\
},\
\
"deposit": {"id": 220,\
\
"balance": 990.1,\
\
"type": {"id": 5,\
\
"title": "deposit 1"\
\
}\
\
}\
\
},\
\
{"id": 25043,\
\
"document_id": 8201102,\
\
"amount": 0.1,\
\
"type_id": 2,\
\
"created_at": "2025-09-21T23:00:00.000+03:00",\
\
"loyalty_card_id": 185395,\
\
"loyalty_program_id": 264,\
\
"chain": {"id": 231,\
\
"title": "Example chain."\
\
},\
\
"type": {"id": 2,\
\
"title": "Loyalty programs"\
\
},\
\
"loyalty_card": {"id": 185395,\
\
"type_id": 265,\
\
"number": 23100185395,\
\
"balance": 50.15,\
\
"type": {"id": 265,\
\
"type": "Loyalty program template test"\
\
},\
\
"chain": {"id": 231,\
\
"title": "Example chain."\
\
}\
\
},\
\
"loyalty_program": {"id": 264,\
\
"title": "CASHBACK BigBro",\
\
"type_id": 7,\
\
"is_value_percent": true,\
\
"type": {"id": 7,\
\
"title": "Cumulative cashback (paid)"\
\
},\
\
"chain": {"id": 231,\
\
"title": "Example chain."\
\
}\
\
}\
\
},\
\
{"id": 25050,\
\
"document_id": 8201102,\
\
"sale_item_id": 2181521,\
\
"sale_item_type": "good",\
\
"amount": 100,\
\
"type_id": 8,\
\
"created_at": "2025-09-21T23:00:00.000+03:00",\
\
"loyalty_certificate_id": 339,\
\
"chain": {"id": 79,\
\
"title": "Bank 24"\
\
},\
\
"type": {"id": 8,\
\
"title": "Write-off from the certificate"\
\
},\
\
"loyalty_certificate": {"id": 339,\
\
"balance": 0,\
\
"applicable_balance": 0,\
\
"type": {"id": 20,\
\
"title": "Test Certificate",\
\
"is_code_required": true\
\
}\
\
}\
\
}\
\
],

"payment_transactions": [{"id": 6033940,\
\
"document_id": 8200904,\
\
"sale_item_id": 2181442,\
\
"sale_item_type": "good",\
\
"expense_id": 7,\
\
"account_id": 90218,\
\
"amount": 32,\
\
"account": {"id": 90218,\
\
"title": "Cash by default",\
\
"is_cash": true,\
\
"is_default": true\
\
},\
\
"expense": {"id": 7,\
\
"title": "Sale of goods"\
\
}\
\
},\
\
{"id": 6033941,\
\
"document_id": 8200904,\
\
"sale_item_id": 2181442,\
\
"sale_item_type": "good",\
\
"expense_id": 7,\
\
"account_id": 90218,\
\
"amount": 27,\
\
"account": {"id": 90218,\
\
"title": "cash desk",\
\
"is_cash": true,\
\
"is_default": false\
\
},\
\
"expense": {"id": 7,\
\
"title": "Sale of goods"\
\
}\
\
},\
\
{"id": 6034121,\
\
"document_id": 8201102,\
\
"sale_item_id": 2181521,\
\
"sale_item_type": "good",\
\
"expense_id": 7,\
\
"account_id": 23182,\
\
"amount": 43,\
\
"account": {"id": 23182,\
\
"title": "Cards - acquiring by default",\
\
"is_cash": false,\
\
"is_default": true\
\
},\
\
"expense": {"id": 7,\
\
"title": "Sale of goods"\
\
}\
\
},\
\
{"id": 6034122,\
\
"document_id": 8201102,\
\
"sale_item_id": 2181521,\
\
"sale_item_type": "good",\
\
"expense_id": 7,\
\
"account_id": 23182,\
\
"amount": 12,\
\
"account": {"id": 23182,\
\
"title": "Cards - acquiring",\
\
"is_cash": false,\
\
"is_default": false\
\
},\
\
"expense": {"id": 7,\
\
"title": "Sale of goods"\
\
}\
\
}\
\
]

},

"kkm_state": {"last_operation_type": 1,

"transactions": [{"id": 2424,\
\
"document_id": 8200904,\
\
"print_date": "2025-09-21T23:00:00.000+03:00",\
\
"printed_count": 0,\
\
"sum": 0,\
\
"type": {"id": 0,\
\
"title": "Sale operation"\
\
},\
\
"status": {"id": 1,\
\
"title": "Successfully"\
\
},\
\
"document": {"id": 7215,\
\
"type": 1,\
\
"type_title": "Sale of goods"\
\
},\
\
"cashier": {"id": 746310,\
\
"name": "Jack Smith"\
\
}\
\
}\
\
]

},

"payment_methods": [{"slug": "account",\
\
"is_applicable": false,\
\
"applicable_amount": 1170,\
\
"applicable_count": 0,\
\
"applicable_value": 0,\
\
"account_id": 36785,\
\
"account": {"id": 36785,\
\
"title": "Cash desk - non-cash",\
\
"is_cash": false\
\
}\
\
},\
\
{"slug": "loyalty_card",\
\
"is_applicable": true,\
\
"applicable_amount": 51.65,\
\
"applicable_count": 0,\
\
"applicable_value": 0,\
\
"loyalty_card_id": 19283,\
\
"loyalty_card": {"id": 19283,\
\
"type_id": 155,\
\
"number": 31200019283,\
\
"balance": 51.65,\
\
"type": {"id": 155,\
\
"type": "discount card"\
\
},\
\
"chain": {"id": 312,\
\
"title": "Trinity group"\
\
}\
\
}\
\
},\
\
{"slug": "loyalty_program",\
\
"is_applicable": true,\
\
"applicable_amount": 234,\
\
"applicable_count": 0,\
\
"applicable_value": 20,\
\
"loyalty_card_id": 19283,\
\
"loyalty_program_id": 183,\
\
"loyalty_card": {"id": 19283,\
\
"type_id": 155,\
\
"number": 31200019283,\
\
"balance": 51.65,\
\
"type": {"id": 155,\
\
"type": "discount card"\
\
},\
\
"chain": {"id": 312,\
\
"title": "Trinity group"\
\
}\
\
},\
\
"loyalty_program": {"id": 183,\
\
"title": "permanent discount",\
\
"type_id": 1,\
\
"is_value_percent": true,\
\
"type": {"id": 1,\
\
"title": "Fixed discount"\
\
},\
\
"chain": {"id": 312,\
\
"title": "Trinity group"\
\
}\
\
}\
\
},\
\
{"slug": "loyalty_abonement",\
\
"is_applicable": false,\
\
"applicable_amount": 0,\
\
"applicable_count": 0,\
\
"applicable_value": 0,\
\
"loyalty_abonement_id": 27,\
\
"loyalty_abonement": {"id": 27,\
\
"is_united_balance": false,\
\
"united_balance": 0,\
\
"type": {"id": 7,\
\
"title": "subscription to 5000 QA net",\
\
"is_code_required": true\
\
},\
\
"balance_container": {"links": [{"count": 5,\
\
"category": {"id": 229680,\
\
"category_id": 1,\
\
"title": "Manicure"\
\
}\
\
},\
\
{"count": 5,\
\
"category": {"id": 429813,\
\
"category_id": 429812,\
\
"title": "1 Lesson"\
\
}\
\
}\
\
]\
\
}\
\
}\
\
},\
\
{"slug": "loyalty_certificate",\
\
"is_applicable": true,\
\
"applicable_amount": 1170,\
\
"applicable_count": 0,\
\
"applicable_value": 0,\
\
"loyalty_certificate_id": 338,\
\
"loyalty_certificate": {"id": 338,\
\
"balance": 10000,\
\
"applicable_balance": 10000,\
\
"type": {"id": 130,\
\
"title": "test",\
\
"is_code_required": true\
\
}\
\
}\
\
},\
\
{"slug": "referral_loyalty_program",\
\
"is_applicable": false,\
\
"applicable_amount": 0,\
\
"applicable_count": 0,\
\
"applicable_value": 0,\
\
"loyalty_program_id": 424,\
\
"loyalty_program": {"id": 424,\
\
"title": "Fixed discount",\
\
"type_id": 1,\
\
"is_value_percent": true,\
\
"type": {"id": 1,\
\
"title": "Fixed discount"\
\
},\
\
"chain": {"id": 231,\
\
"title": "Example chain."\
\
}\
\
}\
\
},\
\
{"slug": "deposit",\
\
"is_applicable": true,\
\
"applicable_amount": 9.9,\
\
"applicable_count": 0,\
\
"applicable_value": 0,\
\
"deposit_id": 220,\
\
"deposit": {"id": 220,\
\
"balance": 1000,\
\
"type": {"id": 5,\
\
"title": "deposit 1"\
\
}\
\
}\
\
}\
\
]

},

"meta": [ ]

}`

## [tag/Sale-operation/operation/Loyalty payment (various methods)](https://developer.alteg.io/api\#tag/Sale-operation/operation/Loyalty%20payment%20(various%20methods)) Payment at the Cash Desk and Loyalty (Various Methods)

As a response, information about the [Sale operation](https://developer.alteg.io/api#sale-operation) is returned

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| document\_id<br>required | number<br>Document ID |
| company\_id<br>required | number<br>Location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: application/json  required

1. In the case of payment by a gift card, if the user does not have the "Pay by gift card and membership without code" right, the "number" (string) parameter containing the gift card code must also be passed in the request body.
2. In the case of payment by membership, if the user does not have the "Pay by gift card and membership without code" right, the "number" (string) parameter containing the membership code must also be passed in the request body.

Any of

Payment at the checkoutPayment via client personal accountPayment with a gift cardPayment with membership - works only for the visitPay with referral program - works only for visitPay with a loyalty cardPay with a loyalty program

|     |     |
| --- | --- |
| payment | object<br>Object containing the payment method |

### Responses

**200**

OK

post/company/{company\_id}/sale/{document\_id}/payment

https://api.alteg.io/api/v1/company/{company\_id}/sale/{document\_id}/payment

### Request samples

- Payload

Content type

application/json

Example

Payment at the checkoutPayment via client personal accountPayment with a gift cardPayment with membership - works only for the visitPay with referral program - works only for visitPay with a loyalty cardPay with a loyalty programPayment at the checkout

Copy
Expand all  Collapse all

`{"payment": {"method": {"slug": "account",

"account_id": 90218

},

"amount": 123

}

}`

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"state": {"items": [{"id": 2181520,\
\
"type": "good",\
\
"title": "item 12",\
\
"amount": 1,\
\
"default_cost_per_unit": 1300,\
\
"default_cost_total": 1300,\
\
"client_discount_percent": 10,\
\
"cost_to_pay_total": 1170\
\
},\
\
{"id": 22017,\
\
"type": "service",\
\
"document_id": 8200391,\
\
"title": "Manicure",\
\
"amount": 1,\
\
"default_cost_per_unit": 500,\
\
"default_cost_total": 500,\
\
"client_discount_percent": 10,\
\
"cost_to_pay_total": 450\
\
}\
\
],

"loyalty_transactions": [{"id": 25042,\
\
"document_id": 8201102,\
\
"sale_item_id": 2181521,\
\
"sale_item_type": "good",\
\
"amount": 9.9,\
\
"type_id": 11,\
\
"created_at": "2025-09-21T23:00:00.000+03:00",\
\
"deposit_transaction_id": 775,\
\
"chain": {"id": 500,\
\
"title": "YC BE chain"\
\
},\
\
"type": {"id": 11,\
\
"title": "Withdrawal from personal account"\
\
},\
\
"deposit": {"id": 220,\
\
"balance": 990.1,\
\
"type": {"id": 5,\
\
"title": "deposit 1"\
\
}\
\
}\
\
},\
\
{"id": 25043,\
\
"document_id": 8201102,\
\
"amount": 0.1,\
\
"type_id": 2,\
\
"created_at": "2025-09-21T23:00:00.000+03:00",\
\
"loyalty_card_id": 185395,\
\
"loyalty_program_id": 264,\
\
"chain": {"id": 231,\
\
"title": "Example chain."\
\
},\
\
"type": {"id": 2,\
\
"title": "Loyalty programs"\
\
},\
\
"loyalty_card": {"id": 185395,\
\
"type_id": 265,\
\
"number": 23100185395,\
\
"balance": 50.15,\
\
"type": {"id": 265,\
\
"type": "Loyalty program template test"\
\
},\
\
"chain": {"id": 231,\
\
"title": "Example chain."\
\
}\
\
},\
\
"loyalty_program": {"id": 264,\
\
"title": "CASHBACK BigBro",\
\
"type_id": 7,\
\
"is_value_percent": true,\
\
"type": {"id": 7,\
\
"title": "Cumulative cashback (paid)"\
\
},\
\
"chain": {"id": 231,\
\
"title": "Example chain."\
\
}\
\
}\
\
},\
\
{"id": 25050,\
\
"document_id": 8201102,\
\
"sale_item_id": 2181521,\
\
"sale_item_type": "good",\
\
"amount": 100,\
\
"type_id": 8,\
\
"created_at": "2025-09-21T23:00:00.000+03:00",\
\
"loyalty_certificate_id": 339,\
\
"chain": {"id": 79,\
\
"title": "Bank 24"\
\
},\
\
"type": {"id": 8,\
\
"title": "Write-off from the certificate"\
\
},\
\
"loyalty_certificate": {"id": 339,\
\
"balance": 0,\
\
"applicable_balance": 0,\
\
"type": {"id": 20,\
\
"title": "Test Certificate",\
\
"is_code_required": true\
\
},\
\
"chain": {"id": 231,\
\
"title": "Example chain."\
\
}\
\
}\
\
}\
\
],

"payment_transactions": [{"id": 6033940,\
\
"document_id": 8200904,\
\
"sale_item_id": 2181442,\
\
"sale_item_type": "good",\
\
"expense_id": 7,\
\
"account_id": 90218,\
\
"amount": 32,\
\
"account": {"id": 90218,\
\
"title": "Cash by default",\
\
"is_cash": true,\
\
"is_default": true\
\
},\
\
"expense": {"id": 7,\
\
"title": "Sale of goods"\
\
}\
\
},\
\
{"id": 6033941,\
\
"document_id": 8200904,\
\
"sale_item_id": 2181442,\
\
"sale_item_type": "good",\
\
"expense_id": 7,\
\
"account_id": 90218,\
\
"amount": 27,\
\
"account": {"id": 90218,\
\
"title": "cash desk",\
\
"is_cash": true,\
\
"is_default": false\
\
},\
\
"expense": {"id": 7,\
\
"title": "Sale of goods"\
\
}\
\
},\
\
{"id": 6034121,\
\
"document_id": 8201102,\
\
"sale_item_id": 2181521,\
\
"sale_item_type": "good",\
\
"expense_id": 7,\
\
"account_id": 23182,\
\
"amount": 43,\
\
"account": {"id": 23182,\
\
"title": "Cards - acquiring by default",\
\
"is_cash": false,\
\
"is_default": true\
\
},\
\
"expense": {"id": 7,\
\
"title": "Sale of goods"\
\
}\
\
},\
\
{"id": 6034122,\
\
"document_id": 8201102,\
\
"sale_item_id": 2181521,\
\
"sale_item_type": "good",\
\
"expense_id": 7,\
\
"account_id": 23182,\
\
"amount": 12,\
\
"account": {"id": 23182,\
\
"title": "Cards - acquiring",\
\
"is_cash": false,\
\
"is_default": false\
\
},\
\
"expense": {"id": 7,\
\
"title": "Sale of goods"\
\
}\
\
}\
\
]

},

"kkm_state": {"last_operation_type": 1,

"transactions": [{"id": 2424,\
\
"document_id": 8200904,\
\
"print_date": "2025-09-21T23:00:00.000+03:00",\
\
"printed_count": 0,\
\
"sum": 0,\
\
"type": {"id": 0,\
\
"title": "Sale operation"\
\
},\
\
"status": {"id": 1,\
\
"title": "Successfully"\
\
},\
\
"document": {"id": 7215,\
\
"type": 1,\
\
"type_title": "Sale of goods"\
\
},\
\
"cashier": {"id": 746310,\
\
"name": "Jack Smith"\
\
}\
\
}\
\
]

},

"payment_methods": [{"slug": "account",\
\
"is_applicable": false,\
\
"applicable_amount": 1170,\
\
"applicable_count": 0,\
\
"applicable_value": 0,\
\
"account_id": 36785,\
\
"account": {"id": 36785,\
\
"title": "Cash desk - non-cash",\
\
"is_cash": false\
\
}\
\
},\
\
{"slug": "loyalty_card",\
\
"is_applicable": true,\
\
"applicable_amount": 51.65,\
\
"applicable_count": 0,\
\
"applicable_value": 0,\
\
"loyalty_card_id": 19283,\
\
"loyalty_card": {"id": 19283,\
\
"type_id": 155,\
\
"number": 31200019283,\
\
"balance": 51.65,\
\
"type": {"id": 155,\
\
"type": "discount card"\
\
},\
\
"chain": {"id": 312,\
\
"title": "Trinity group"\
\
}\
\
}\
\
},\
\
{"slug": "loyalty_program",\
\
"is_applicable": true,\
\
"applicable_amount": 234,\
\
"applicable_count": 0,\
\
"applicable_value": 20,\
\
"loyalty_card_id": 19283,\
\
"loyalty_program_id": 183,\
\
"loyalty_card": {"id": 19283,\
\
"type_id": 155,\
\
"number": 31200019283,\
\
"balance": 51.65,\
\
"type": {"id": 155,\
\
"type": "discount card"\
\
},\
\
"chain": {"id": 312,\
\
"title": "Trinity group"\
\
}\
\
},\
\
"loyalty_program": {"id": 183,\
\
"title": "permanent discount",\
\
"type_id": 1,\
\
"is_value_percent": true,\
\
"type": {"id": 1,\
\
"title": "Fixed discount"\
\
},\
\
"chain": {"id": 312,\
\
"title": "Trinity group"\
\
}\
\
}\
\
},\
\
{"slug": "loyalty_abonement",\
\
"is_applicable": false,\
\
"applicable_amount": 0,\
\
"applicable_count": 0,\
\
"applicable_value": 0,\
\
"loyalty_abonement_id": 27,\
\
"loyalty_abonement": {"id": 27,\
\
"is_united_balance": false,\
\
"united_balance": 0,\
\
"type": {"id": 7,\
\
"title": "subscription to 5000 QA net",\
\
"is_code_required": true\
\
},\
\
"chain": {"id": 231,\
\
"title": "Example chain."\
\
},\
\
"balance_container": {"links": [{"count": 5,\
\
"category": {"id": 229680,\
\
"category_id": 1,\
\
"title": "Manicure"\
\
}\
\
},\
\
{"count": 5,\
\
"category": {"id": 429813,\
\
"category_id": 429812,\
\
"title": "1 Lesson"\
\
}\
\
}\
\
]\
\
}\
\
}\
\
},\
\
{"slug": "loyalty_certificate",\
\
"is_applicable": true,\
\
"applicable_amount": 1170,\
\
"applicable_count": 0,\
\
"applicable_value": 0,\
\
"loyalty_certificate_id": 338,\
\
"loyalty_certificate": {"id": 338,\
\
"balance": 10000,\
\
"applicable_balance": 10000,\
\
"type": {"id": 130,\
\
"title": "test",\
\
"is_code_required": true\
\
},\
\
"chain": {"id": 231,\
\
"title": "Example chain."\
\
}\
\
}\
\
},\
\
{"slug": "referral_loyalty_program",\
\
"is_applicable": false,\
\
"applicable_amount": 0,\
\
"applicable_count": 0,\
\
"applicable_value": 0,\
\
"loyalty_program_id": 424,\
\
"loyalty_program": {"id": 424,\
\
"title": "Fixed discount",\
\
"type_id": 1,\
\
"is_value_percent": true,\
\
"type": {"id": 1,\
\
"title": "Fixed discount"\
\
},\
\
"chain": {"id": 231,\
\
"title": "Example chain."\
\
}\
\
}\
\
},\
\
{"slug": "deposit",\
\
"is_applicable": true,\
\
"applicable_amount": 9.9,\
\
"applicable_count": 0,\
\
"applicable_value": 0,\
\
"deposit_id": 220,\
\
"deposit": {"id": 220,\
\
"balance": 1000,\
\
"type": {"id": 5,\
\
"title": "deposit 1"\
\
}\
\
}\
\
}\
\
]

},

"meta": [ ]

}`

## [tag/Integration-with-chain-telephony](https://developer.alteg.io/api\#tag/Integration-with-chain-telephony) Integration with chain telephony

## [tag/Integration-with-chain-telephony/paths/~1voip~1integration/post](https://developer.alteg.io/api\#tag/Integration-with-chain-telephony/paths/~1voip~1integration/post) Telephony events

#### Enable integration

To use the api and activate access to the settings in the user interface, you need to activate the integration by sending the "Enable integration" request. After a successful connection, access to the section with routing settings will be opened in the chain user interface.

#### Disable integration

To disable the integration, you can use the "Disable integration" method. After the integration is disabled, access to the user interface settings section is closed, the requests "Call notification" and "Call information saving" are not processed.

#### Call notification

To display notifications about an incoming call, the "Call notification" method is used, the call type ("incoming", "outgoing", "internal") is specified in the parameters, but currently notifications are displayed only for the "incoming" value. Notifications are displayed for users defined based on routing settings. When specifying the "user" and "diversion" parameters at the same time, "user" is the priority when searching for routes.

#### Saving call information

The information about the call is automatically saved to the chain history and to the history of chain locations in accordance with the call routing settings.

##### Authorizations:

_bearer_

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token |

##### Request Body schema: application/json  required

Request bodies

Any of

Connect integrationDisable integrationSaving call informationcall notification

|     |     |
| --- | --- |
| command<br>required | string<br>Slug of operation 'setup' |
| type<br>required | string<br>Operation type, in this case 'enable' |
| crm\_token<br>required | string<br>CRM-token from the Telephony-Integration in the client's chain section |

### Responses

**202**

Accepted

post/voip/integration

https://api.alteg.io/api/v1/voip/integration

### Request samples

- Payload

Content type

application/json

Example

Connect integrationDisable integrationSaving call informationcall notificationConnect integration

Copy

`{"command": "setup",

"type": "enable",

"crm_token": "7cf262d6-1656-43f9-86ac-2826bdc125d2"

}`

### Response samples

- 202

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"meta": {"message": "Accepted"

}

}`

## [tag/Integration-with-chain-telephony/operation/voip.integration.calls_list](https://developer.alteg.io/api\#tag/Integration-with-chain-telephony/operation/voip.integration.calls_list) Get Location's Call List

This endpoint is designed to get a list of calls in a location, taking into account filters and pagination

##### Authorizations:

_BearerPartnerUser_

##### Request Body schema: application/json

|     |     |
| --- | --- |
| salon\_id<br>required | number<br>Location ID. |
| date\_from<br>required | string<br>Sample start date. |
| date\_to<br>required | string<br>Sample start end. |
| phone | string<br>Phone number. |
| types | Array of strings<br>Items Enum:"incoming""outgoing""internal"<br>Call types list |
| statuses | Array of strings<br>Items Enum:"success""missed""cancel""busy""notallowed""notavailable""notfound"<br>Call statuses list |
| page | number<br>Page number |
| limit | number <= 1000 <br>Amount of elements on page |

### Responses

**200**

Calls list

**401**

Partner token not passed.

**403**

No access (requires the right to view "Overview - Calls").

get/voip/integration/calls

https://api.alteg.io/api/v1/voip/integration/calls

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"salon_id": 615243,

"date_from": "2023-01-01",

"date_to": "2023-02-01",

"phone": "79111234567",

"types": ["incoming",\
\
"internal"\
\
],

"statuses": ["success",\
\
"cancel"\
\
],

"page": 1,

"limit": 25

}`

### Response samples

- 200
- 401
- 403

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 8923525,\
\
"client_id": 51342134,\
\
"caller_phone": "791112345678",\
\
"record_link": "https://records.gravitel.ru/somelink.mp3",\
\
"duration": 244,\
\
"status": "success",\
\
"type": "outgoing",\
\
"call_date": "2023-01-17 23:52:21"\
\
},\
\
{"id": 66795308,\
\
"client_id": 0,\
\
"caller_phone": "791112345678",\
\
"record_link": "",\
\
"duration": 0,\
\
"status": "missed",\
\
"type": "incoming",\
\
"call_date": "2023-01-17 12:31:12"\
\
}\
\
]

}`

## [tag/Memberships](https://developer.alteg.io/api\#tag/Memberships) Memberships

## [tag/Memberships/operation/Freeze membership](https://developer.alteg.io/api\#tag/Memberships/operation/Freeze%20membership) Freeze membership

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| chain\_id<br>required | number<br>Example: 123<br>Chain ID. |
| abonementId<br>required | number<br>Example: 123<br>Membership ID. |

##### Request Body schema: application/json  optional

|     |     |
| --- | --- |
| freeze\_till<br>required | string<br>The date until which the membership will be frozen. |

### Responses

**200**

OK

**400**

Bad Request

post/chain/{chain\_id}/loyalty/abonements/{abonementId}/freeze

https://api.alteg.io/api/v1/chain/{chain\_id}/loyalty/abonements/{abonementId}/freeze

### Request samples

- Payload

Content type

application/json

Copy

`{"freeze_till": "string"

}`

### Response samples

- 200
- 400

Content type

application/json

Copy
Expand all  Collapse all

`[{"success": "true",\
\
"data": [{"id": 123,\
\
"number": 123456,\
\
"balance_string": "Services (x5)",\
\
"created_date": "2025-09-21T23:00:00.000+03:00",\
\
"activated_date": "2025-09-21T23:00:00.000+03:00",\
\
"is_frozen": false,\
\
"freeze_period": 0,\
\
"period": 0,\
\
"period_unit_id": 1,\
\
"status": {"id": 2,\
\
"title": "activated",\
\
"extended_title": "activated"\
\
},\
\
"is_united_balance": false,\
\
"united_balance_services_count": 0,\
\
"balance_container": {"links": [{"count": 9,\
\
"category": {"id": 7182839,\
\
"category_id": 1,\
\
"title": "Services"\
\
}\
\
}\
\
]\
\
},\
\
"type": {"id": 896,\
\
"salon_group_id": 279982,\
\
"title": "Subscription for everything",\
\
"period": 0,\
\
"period_unit_id": 1,\
\
"allow_freeze": true,\
\
"freeze_limit": 0,\
\
"is_allow_empty_code": true,\
\
"is_united_balance": false,\
\
"united_balance_services_count": 0,\
\
"is_code_required": false,\
\
"balance_container": {"links": [{"count": 10,\
\
"category": {"id": 7182839,\
\
"category_id": 1,\
\
"title": "Services"\
\
}\
\
}\
\
]\
\
}\
\
}\
\
}\
\
],\
\
"meta": {"count": 1\
\
}\
\
}\
\
]`

## [tag/Memberships/operation/Unfreeze Membership](https://developer.alteg.io/api\#tag/Memberships/operation/Unfreeze%20Membership) Unfreeze Membership

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| chain\_id<br>required | number<br>Example: 123<br>Chain ID. |
| abonementId<br>required | number<br>Example: 123<br>Membership ID. |

### Responses

**200**

OK

**400**

Bad Request

post/chain/{chain\_id}/loyalty/abonements/{abonementId}/unfreeze

https://api.alteg.io/api/v1/chain/{chain\_id}/loyalty/abonements/{abonementId}/unfreeze

### Response samples

- 200
- 400

Content type

application/json

Copy
Expand all  Collapse all

`[{"success": "true",\
\
"data": [{"id": 123,\
\
"number": 123456,\
\
"balance_string": "Services (x5)",\
\
"created_date": "2025-09-21T23:00:00.000+03:00",\
\
"activated_date": "2025-09-21T23:00:00.000+03:00",\
\
"is_frozen": false,\
\
"freeze_period": 0,\
\
"period": 0,\
\
"period_unit_id": 1,\
\
"status": {"id": 2,\
\
"title": "activated",\
\
"extended_title": "activated"\
\
},\
\
"is_united_balance": false,\
\
"united_balance_services_count": 0,\
\
"balance_container": {"links": [{"count": 9,\
\
"category": {"id": 7182839,\
\
"category_id": 1,\
\
"title": "Services"\
\
}\
\
}\
\
]\
\
},\
\
"type": {"id": 896,\
\
"salon_group_id": 279982,\
\
"title": "Subscription for everything",\
\
"period": 0,\
\
"period_unit_id": 1,\
\
"allow_freeze": true,\
\
"freeze_limit": 0,\
\
"is_allow_empty_code": true,\
\
"is_united_balance": false,\
\
"united_balance_services_count": 0,\
\
"is_code_required": false,\
\
"balance_container": {"links": [{"count": 10,\
\
"category": {"id": 7182839,\
\
"category_id": 1,\
\
"title": "Services"\
\
}\
\
}\
\
]\
\
}\
\
}\
\
}\
\
],\
\
"meta": {"count": 1\
\
}\
\
}\
\
]`

## [tag/Memberships/operation/Change Membership Duration](https://developer.alteg.io/api\#tag/Memberships/operation/Change%20Membership%20Duration) Change Membership Duration

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| chain\_id<br>required | number<br>Example: 123<br>Chain ID. |
| abonementId<br>required | number<br>Example: 123<br>Membership ID. |

##### Request Body schema: application/json  optional

|     |     |
| --- | --- |
| period<br>required | number<br>Period duration |
| period\_unit\_id<br>required | number<br>Period type (1 - day, 2 - week, 3 - month, 4 - year) |

### Responses

**200**

OK

**400**

Bad Request

post/chain/{chain\_id}/loyalty/abonements/{abonementId}/set\_period

https://api.alteg.io/api/v1/chain/{chain\_id}/loyalty/abonements/{abonementId}/set\_period

### Request samples

- Payload

Content type

application/json

Copy

`{"period": 0,

"period_unit_id": 0

}`

### Response samples

- 200
- 400

Content type

application/json

Copy
Expand all  Collapse all

`[{"success": "true",\
\
"data": [{"id": 123,\
\
"number": 123456,\
\
"balance_string": "Services (x5)",\
\
"created_date": "2025-09-21T23:00:00.000+03:00",\
\
"activated_date": "2025-09-21T23:00:00.000+03:00",\
\
"is_frozen": false,\
\
"freeze_period": 0,\
\
"period": 0,\
\
"period_unit_id": 1,\
\
"status": {"id": 2,\
\
"title": "activated",\
\
"extended_title": "activated"\
\
},\
\
"is_united_balance": false,\
\
"united_balance_services_count": 0,\
\
"balance_container": {"links": [{"count": 9,\
\
"category": {"id": 7182839,\
\
"category_id": 1,\
\
"title": "Services"\
\
}\
\
}\
\
]\
\
},\
\
"type": {"id": 896,\
\
"salon_group_id": 279982,\
\
"title": "Subscription for everything",\
\
"period": 0,\
\
"period_unit_id": 1,\
\
"allow_freeze": true,\
\
"freeze_limit": 0,\
\
"is_allow_empty_code": true,\
\
"is_united_balance": false,\
\
"united_balance_services_count": 0,\
\
"is_code_required": false,\
\
"balance_container": {"links": [{"count": 10,\
\
"category": {"id": 7182839,\
\
"category_id": 1,\
\
"title": "Services"\
\
}\
\
}\
\
]\
\
}\
\
}\
\
}\
\
],\
\
"meta": {"count": 1\
\
}\
\
}\
\
]`

## [tag/Memberships/operation/Change the Number of Times a Membership Has Been Used](https://developer.alteg.io/api\#tag/Memberships/operation/Change%20the%20Number%20of%20Times%20a%20Membership%20Has%20Been%20Used) Change the Number of Times a Membership Has Been Used

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| chain\_id<br>required | number<br>Example: 123<br>Chain ID. |
| abonementId<br>required | number<br>Example: 123<br>Membership ID. |

##### Request Body schema: application/json  optional

|     |     |
| --- | --- |
| united\_balance\_services\_count<br>required | number<br>Number of services for a membership with a pooled balance |
| services\_balance\_count<br>required | Array of objects<br>Transfer service amount for a membership with a separate balance |

### Responses

**200**

OK

**400**

Bad Request

post/chain/{chain\_id}/loyalty/abonements/{abonementId}/set\_balance

https://api.alteg.io/api/v1/chain/{chain\_id}/loyalty/abonements/{abonementId}/set\_balance

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"united_balance_services_count": 0,

"services_balance_count": [{"service_id": 0,\
\
"balance": 0\
\
}\
\
]

}`

### Response samples

- 400

Content type

application/json

Copy
Expand all  Collapse all

`[{"success": false,\
\
"meta": {"message": "Can't change balance"\
\
}\
\
}\
\
]`

## [tag/Memberships/operation/Get a List of Memberships by Filter](https://developer.alteg.io/api\#tag/Memberships/operation/Get%20a%20List%20of%20Memberships%20by%20Filter) Get a List of Memberships by Filter

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| chain\_id<br>required | number<br>Example: 123<br>Chain ID. |

##### query Parameters

|     |     |
| --- | --- |
| created\_after | string<br>Example: created\_after=2025-09-21T23:00:00.000+03:00<br>Creation date from (filter by creation date). |
| created\_before | string<br>Example: created\_before=2025-09-21T23:00:00.000+03:00<br>Creation date by (filter by creation date). |
| abonements\_ids | Array of numbers<br>List of identifiers for the filter. |
| page | number<br>Example: page=1<br>Page number. |
| count | number<br>Example: count=25<br>Number of appointments per page. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

**400**

Bad Request

get/chain/{chain\_id}/loyalty/abonements

https://api.alteg.io/api/v1/chain/{chain\_id}/loyalty/abonements

### Response samples

- 200
- 400

Content type

application/json

Copy
Expand all  Collapse all

`[{"success": "true",\
\
"data": [{"id": 123,\
\
"number": 123456,\
\
"balance_string": "Services (x5)",\
\
"created_date": "2025-09-21T23:00:00.000+03:00",\
\
"activated_date": "2025-09-21T23:00:00.000+03:00",\
\
"is_frozen": false,\
\
"freeze_period": 0,\
\
"period": 0,\
\
"period_unit_id": 1,\
\
"status": {"id": 2,\
\
"title": "activated",\
\
"extended_title": "activated"\
\
},\
\
"is_united_balance": false,\
\
"united_balance_services_count": 0,\
\
"balance_container": {"links": [{"count": 9,\
\
"category": {"id": 7182839,\
\
"category_id": 1,\
\
"title": "Services"\
\
}\
\
}\
\
]\
\
},\
\
"type": {"id": 896,\
\
"salon_group_id": 279982,\
\
"title": "Subscription for everything",\
\
"period": 0,\
\
"period_unit_id": 1,\
\
"allow_freeze": true,\
\
"freeze_limit": 0,\
\
"is_allow_empty_code": true,\
\
"is_united_balance": false,\
\
"united_balance_services_count": 0,\
\
"is_code_required": false,\
\
"balance_container": {"links": [{"count": 10,\
\
"category": {"id": 7182839,\
\
"category_id": 1,\
\
"title": "Services"\
\
}\
\
}\
\
]\
\
}\
\
}\
\
},\
\
{"id": 720,\
\
"number": 208867,\
\
"balance_string": "Some services (x10)",\
\
"created_date": "2025-09-21T23:00:00.000+03:00",\
\
"is_frozen": false,\
\
"freeze_period": 0,\
\
"period": 0,\
\
"period_unit_id": 1,\
\
"status": {"id": 3,\
\
"title": "Overdue",\
\
"extended_title": "Overdue"\
\
},\
\
"is_united_balance": false,\
\
"united_balance_services_count": 0,\
\
"balance_container": {"links": [{"count": 10,\
\
"category": {"id": 7182839,\
\
"category_id": 1,\
\
"title": "Some services"\
\
}\
\
}\
\
]\
\
},\
\
"type": {"id": 897,\
\
"salon_group_id": 279982,\
\
"title": "Subscription for everything",\
\
"period": 0,\
\
"period_unit_id": 1,\
\
"allow_freeze": true,\
\
"freeze_limit": 0,\
\
"is_allow_empty_code": true,\
\
"is_united_balance": false,\
\
"united_balance_services_count": 0,\
\
"is_code_required": false,\
\
"balance_container": {"links": [{"count": 10,\
\
"category": {"id": 7182839,\
\
"category_id": 1,\
\
"title": "Some services"\
\
}\
\
}\
\
]\
\
}\
\
}\
\
}\
\
],\
\
"meta": {"count": 2\
\
}\
\
}\
\
]`

## [tag/Memberships/operation/Get Client Memberships](https://developer.alteg.io/api\#tag/Memberships/operation/Get%20Client%20Memberships) Get Client Memberships

Returns a list of client's memberships by phone

##### Authorizations:

(_bearer__user_)

##### query Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Location ID |
| phone<br>required | number<br>Customer phone number |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/loyalty/abonements/

https://api.alteg.io/api/v1/loyalty/abonements/

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 659878,\
\
"number": "788376",\
\
"balance_string": "Surfing (x10)",\
\
"is_frozen": false,\
\
"freeze_period": 0,\
\
"period": 9999,\
\
"period_unit_id": 3,\
\
"status": {"id": 1,\
\
"title": "Released",\
\
"extended_title": "Released"\
\
},\
\
"balance_container": {"links": [{"count": 10,\
\
"category": {"id": 3129591,\
\
"category_id": 1,\
\
"title": "Surfing"\
\
}\
\
}\
\
]\
\
},\
\
"type": {"id": 97804,\
\
"salon_group_id": 145071,\
\
"title": "89999",\
\
"period": 9999,\
\
"period_unit_id": 3,\
\
"allow_freeze": false,\
\
"freeze_limit": 0,\
\
"is_allow_empty_code": false,\
\
"is_united_balance": false,\
\
"united_balance_services_count": 0,\
\
"balance_container": {"links": [{"count": 10,\
\
"category": {"id": 3129591,\
\
"category_id": 1,\
\
"title": "Surfing"\
\
}\
\
}\
\
]\
\
}\
\
}\
\
}\
\
],

"meta": {"count": 1

}

}`

## [tag/Memberships/operation/Get User Memberships](https://developer.alteg.io/api\#tag/Memberships/operation/Get%20User%20Memberships) Get User Memberships

Returns a list of memberships of an authorized user

##### Authorizations:

(_bearer__user_)

##### query Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/user/loyalty/abonements/

https://api.alteg.io/api/v1/user/loyalty/abonements/

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 659878,\
\
"number": "788376",\
\
"balance_string": "Surfing (x10)",\
\
"is_frozen": false,\
\
"freeze_period": 0,\
\
"period": 9999,\
\
"period_unit_id": 3,\
\
"status": {"id": 1,\
\
"title": "Released",\
\
"extended_title": "Released"\
\
},\
\
"balance_container": {"links": [{"count": 10,\
\
"category": {"id": 3129591,\
\
"category_id": 1,\
\
"title": "Surfing"\
\
}\
\
}\
\
]\
\
},\
\
"type": {"id": 97804,\
\
"salon_group_id": 145071,\
\
"title": "89999",\
\
"period": 9999,\
\
"period_unit_id": 3,\
\
"allow_freeze": false,\
\
"freeze_limit": 0,\
\
"is_allow_empty_code": false,\
\
"is_united_balance": false,\
\
"united_balance_services_count": 0,\
\
"balance_container": {"links": [{"count": 10,\
\
"category": {"id": 3129591,\
\
"category_id": 1,\
\
"title": "Surfing"\
\
}\
\
}\
\
]\
\
}\
\
}\
\
}\
\
],

"meta": {"count": 1

}

}`

## [tag/Gift-Cards](https://developer.alteg.io/api\#tag/Gift-Cards) Gift Cards

## [tag/Gift-Cards/operation/Get client gift cards](https://developer.alteg.io/api\#tag/Gift-Cards/operation/Get%20client%20gift%20cards) Get client gift cards

Returns a list of client gift cards by phone

| Attribute | Type | Description |
| --- | --- | --- |
| id | int | Gift card ID |
| number | string | Gift card code |
| balance | decimal | Current balance |
| default\_balance | decimal | Initial balance |
| type\_id | int | Gift card type identifier |
| status\_id | int | Status ID |
| created\_date | timestamp | Date of sale |
| expiration\_date | datetime | Burn date |
| type | object | Object with gift card type information |
| status | object | An object with information about the current gift card status |

The type array contains the following objects:

| Attribute | Type | Description |
| --- | --- | --- |
| id | int | Gift card type identifier |
| title | string | Type name |
| balance | decimal | Gift card denomination |
| is\_multi | boolean | Is it available for multiple debits |
| company\_group\_id | int | ID of the chain where the certificate type was created |
| item\_type\_id | int | Restriction on the use of redemption points. 0 - no limit, 1 - services only, 2 - some services + all products, 3 - some services, 4 - products only |
| expiration\_type\_id | int | The ID of the expiration limit. 0 - unlimited, 1 - fixed date, 2 - fixed term |
| expiration\_date | timestamp | Burn date of all gift cards. Populated with expiration\_type\_id = 1 |
| expiration\_timeout | int | Validity period of gift card. Populated with expiration\_type\_id = 2 |
| expiration\_timeout\_unit\_id | int | Time units. 1 - Day, 2 - Week, 3 - Month, 4 - Year |
| is\_allow\_empty\_code | boolean | Sale without code |
| item\_type | object | Object with item\_type\_id and its name |

##### Authorizations:

(_bearer__user_)

##### query Parameters

|     |     |
| --- | --- |
| copmany\_id<br>required | number<br>Location ID |
| phone<br>required | number<br>Customer phone number |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/loyalty/certificates/

https://api.alteg.io/api/v1/loyalty/certificates/

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 409726,\
\
"number": "888",\
\
"balance": 9000,\
\
"default_balance": 9000,\
\
"type_id": 27841,\
\
"status_id": 2,\
\
"created_date": "2025-09-21T23:00:00.000+03:00",\
\
"expiration_date": "2025-09-21T23:00:00.000+03:00",\
\
"type": {"id": 27841,\
\
"title": "certificate 9000",\
\
"balance": 9000,\
\
"is_multi": true,\
\
"company_group_id": 128284,\
\
"item_type_id": 0,\
\
"expiration_type_id": 2,\
\
"expiration_timeout": 365,\
\
"expiration_timeout_unit_id": 1,\
\
"is_allow_empty_code": false,\
\
"item_type": {"id": 0,\
\
"title": "No limits"\
\
}\
\
},\
\
"status": {"id": 2,\
\
"title": "activated"\
\
}\
\
}\
\
],

"meta": {"count": 1

}

}`

## [tag/Gift-Cards/operation/Get user gift cards](https://developer.alteg.io/api\#tag/Gift-Cards/operation/Get%20user%20gift%20cards) Get user gift cards

Returns a list of authorized user gift cards

##### Authorizations:

(_bearer__user_)

##### query Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/user/loyalty/certificates/

https://api.alteg.io/api/v1/user/loyalty/certificates/

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 409726,\
\
"number": "888",\
\
"balance": 9000,\
\
"default_balance": 9000,\
\
"type_id": 27841,\
\
"status_id": 2,\
\
"created_date": "2025-09-21T23:00:00.000+03:00",\
\
"expiration_date": "2025-09-21T23:00:00.000+03:00",\
\
"type": {"id": 27841,\
\
"title": "certificate 9000",\
\
"balance": 9000,\
\
"is_multi": true,\
\
"company_group_id": 128284,\
\
"item_type_id": 0,\
\
"expiration_type_id": 2,\
\
"expiration_timeout": 365,\
\
"expiration_timeout_unit_id": 1,\
\
"is_allow_empty_code": false,\
\
"item_type": {"id": 0,\
\
"title": "No limits"\
\
}\
\
},\
\
"status": {"id": 2,\
\
"title": "activated"\
\
}\
\
}\
\
],

"meta": {"count": 1

}

}`

## [tag/Cities](https://developer.alteg.io/api\#tag/Cities) Cities

## [tag/Cities/operation/Get a list of cities](https://developer.alteg.io/api\#tag/Cities/operation/Get%20a%20list%20of%20cities) Get a list of cities

##### Authorizations:

_bearer_

##### query Parameters

|     |     |
| --- | --- |
| country\_id | number<br>Country ID to get cities from |
| company\_id | number<br>Location ID. If passed, the city of the location will also be returned, regardless of whether it belongs to the specified country or not |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token |

### Responses

**200**

OK

get/cities?country\_id=1&company\_id=1

https://api.alteg.io/api/v1/cities?country\_id=1&company\_id=1

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 2,\
\
"country_id": 1,\
\
"title": "New York"\
\
},\
\
{"id": 1040,\
\
"country_id": 30,\
\
"title": "Belfast"\
\
},\
\
{"id": 1201,\
\
"country_id": 38,\
\
"title": "București"\
\
},\
\
{"id": 1334,\
\
"country_id": 31,\
\
"title": "Budapest"\
\
}\
\
],

"meta": [ ]

}`

## [tag/Images](https://developer.alteg.io/api\#tag/Images) Images

## [tag/Images/operation/Image upload](https://developer.alteg.io/api\#tag/Images/operation/Image%20upload) Image upload

The response object has the following fields:

| Field | Type | Description |
| --- | --- | --- |
| image\_binded | boolean | Status of linking images to an entity |
| image\_group | object | Image group object |

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| entity<br>required | string<br>Example: "master"<br>entity name (master/service) |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>form-data |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: multipart/form-data  required

|     |     |
| --- | --- |
| company\_id | number<br>Location ID for image binding (for entity=service) |
| service\_id | number<br>Service ID for image binding (for entity=service) |
| master\_id | number<br>staff member ID for image binding (for entity=master) |
| image<br>required | string<br>transferred image (image/jpeg, image/png) |

### Responses

**200**

OK

post/images/{entity}

https://api.alteg.io/api/v1/images/{entity}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"image_binded": false,

"image_group ": {"id": 72256,

"entity": "",

"entity_id": 0,

"images": {"basic": {"id": 186826,

"path": "https://app.alteg.io/uploads/setting_service_image/c/cf/cf01a5585348731_20170328195919.jpeg",

"width": 373,

"height": 280,

"type": "jpeg",

"image_group_id": 72256,

"version": "basic"

}

}

}

},

"meta": [ ]

}`

## [tag/Images/operation/Deleting images](https://developer.alteg.io/api\#tag/Images/operation/Deleting%20images) Deleting images

The response object has the following fields:

| Field | Type | Description |
| --- | --- | --- |
| success | boolean | Deletion result |

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| entity<br>required | string<br>entity name (master/service) |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>form-data |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: multipart/form-data  required

|     |     |
| --- | --- |
| image\_group\_id<br>required | number<br>Image group ID to delete |

### Responses

**200**

OK

delete/images/{entity}

https://api.alteg.io/api/v1/images/{entity}

## [tag/Subscriptions](https://developer.alteg.io/api\#tag/Subscriptions) Subscriptions

## [tag/Subscriptions/operation/Retrieve company subscription information](https://developer.alteg.io/api\#tag/Subscriptions/operation/Retrieve%20company%20subscription%20information) Retrieve company subscription information

##### Authorizations:

(_bearer__user_)

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/license/{company\_id}

https://api.alteg.io/api/v1/license/{company\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 1,

"salon_id": 4523464,

"staff_limit": 5,

"deactivation_date": "08.11.2019",

"start_date": "07.05.2025",

"name": "Start",

"active": 1,

"options": [{"id": 3,\
\
"title": "Online payment"\
\
}\
\
]

},

"meta": [ ]

}`

## [tag/Reviews-and-tips](https://developer.alteg.io/api\#tag/Reviews-and-tips) Reviews and tips

## [tag/Reviews-and-tips/paths/~1master_record_review~1{recordToken}/get](https://developer.alteg.io/api\#tag/Reviews-and-tips/paths/~1master_record_review~1{recordToken}/get) Get feedback form status

##### Authorizations:

_bearer_

##### path Parameters

|     |     |
| --- | --- |
| recordToken<br>required | string<br>Short appointment token |

### Responses

**200**

Returns data for displaying the feedback form and information about the status of submitting feedback and tips

get/master\_record\_review/{recordToken}

https://api.alteg.io/api/v1/master\_record\_review/{recordToken}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"favicon_url": "https://www.app.alteg.io/favicon.png",

"is_review_submitted": false,

"page_title": "Leave feedback",

"master": {"id": 58961,

"name": "Alexey Uvarov",

"company_id": 28939,

"specialization": "Permanent Makeup, Artistic Tattoo",

"rating": 5,

"show_rating": 1,

"avatar": "https://www.app.alteg.io/uploads/masters/sm/20161014151227_5360.jpg",

"prepaid": "forbidden",

"position": {"id": 2185,

"title": "Master PM"

}

},

"company": {"id": 28939,

"title": "\"Eyes-n-Lips\" New York",

"logo": "https://www.app.alteg.io/uploads/s_a6f66721046345a6226ac3040a57fb7d.jpg",

"address": "New York, 787 Jackson Drive"

},

"tips": [ ],

"record": {"id": 8219891,

"payed_cost": "2000",

"date": "2017-08-11T15:00:00+0000"

},

"currency": {"id": 1,

"iso": "RUB",

"name": "US Dollar",

"symbol": "USD",

"is_symbol_after_amount": true

},

"agreement_links": {"terms_of_use": "https://www.app.alteg.io/info/terms-of-use-review-tips",

"confidentiality_agreement": "https://www.app.alteg.io/info/confidential"

},

"language": {"id": 1,

"locale": "en-US",

"iso": "usa"

}

},

"meta": [ ]

}`

## [tag/Reviews-and-tips/paths/~1master_record_review~1{recordToken}/post](https://developer.alteg.io/api\#tag/Reviews-and-tips/paths/~1master_record_review~1{recordToken}/post) Submitting a feedback form

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| recordToken<br>required | string<br>Short appointment token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| rating<br>required | integer <int32> <br>Rating for the review (number of stars from 1 to 5) |
| text | string<br>Feedback text |
| tips\_amount | number <double> <br>Tip amount |
| redirect\_prefix | string<br>The prefix part of the url that will be redirected to after returning from the payment form |

### Responses

**200**

Review submitted successfully

post/master\_record\_review/{recordToken}

https://api.alteg.io/api/v1/master\_record\_review/{recordToken}

### Request samples

- Payload

Content type

application/json

Copy

`{"rating": 5,

"text": "Excellent master!",

"tips_amount": 22.5,

"redirect_prefix": "https://n1.app.alteg.io"

}`

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"charge": {"url": "https://url.to/payment/system"

}

},

"meta": [ ]

}`

## [tag/Tips](https://developer.alteg.io/api\#tag/Tips) Tips

## [tag/Tips/paths/~1tips~1{company_id}~1settings/get](https://developer.alteg.io/api\#tag/Tips/paths/~1tips~1{company_id}~1settings/get) Get a list of location employees with their tip settings

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | integer<br>location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

Collection of objects

get/tips/{company\_id}/settings

https://api.alteg.io/api/v1/tips/{company\_id}/settings

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 3120,\
\
"location_id": 4564,\
\
"staff_id": 1071804,\
\
"hash": "1a27116c-726d-4cec-a7dd-7bd6d669a8c1",\
\
"status": 1,\
\
"status_title": "new settings",\
\
"is_enabled": false,\
\
"landing_external": "https://app.alteg.io/tips/external/4564/1a27116c-726d-4cec-a7dd-7bd6d669a8c1/",\
\
"staff": {"id": 1071804,\
\
"name": "Testimonials Location Business Example",\
\
"specialization": "Reviews"\
\
}\
\
},\
\
{"id": 1,\
\
"location_id": 4564,\
\
"staff_id": 37695,\
\
"hash": "abf52f53-e94c-41e8-9f76-93485fd76e5e",\
\
"status": 1,\
\
"status_title": "new settings",\
\
"is_enabled": false,\
\
"landing_external": "https://app.alteg.io/tips/external/4564/abf52f53-e94c-41e8-9f76-93485fd76e5e/",\
\
"staff": {"id": 37695,\
\
"name": "Kim Kardashian",\
\
"specialization": "Cosmetologist-makeup artist",\
\
"user": {"id": 746310,\
\
"name": "James Smith",\
\
"email": "j.smith@example.com",\
\
"phone": "+1-315-555-0175"\
\
},\
\
"position": {"id": 452,\
\
"title": "Masseur"\
\
}\
\
}\
\
}\
\
]

}`

## [tag/Tips/paths/~1tips~1{company_id}~1settings~1{master_tips_settings_id}~1enable/get](https://developer.alteg.io/api\#tag/Tips/paths/~1tips~1{company_id}~1settings~1{master_tips_settings_id}~1enable/get) Enable Tips for the Specialist

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| master\_tips\_settings\_id<br>required | integer<br>tip settings id |
| company\_id<br>required | number<br>location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

Tip settings object

get/tips/{company\_id}/settings/{master\_tips\_settings\_id}/enable

https://api.alteg.io/api/v1/tips/{company\_id}/settings/{master\_tips\_settings\_id}/enable

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 1,\
\
"location_id": 253859,\
\
"staff_id": 742418,\
\
"hash": "ba816199-eecf-4bd2-9f1d-db470545bfaf",\
\
"status": 3,\
\
"status_title": "pending account",\
\
"is_enabled": true,\
\
"landing_external": "https://app.alteg.io/tips/external/253859/ba816199-eecf-4bd2-9f1d-db470545bfaf/",\
\
"master_tips_form_link": "https://app.alteg.io/companies/253859/staff/742418/tips/pay/",\
\
"invite_sms_sent": false,\
\
"staff": {"id": 742418,\
\
"name": "Fusa",\
\
"specialization": "specialist",\
\
"avatar": "https://assets.alteg.io/masters/sm/c/c7/c77a4bf2b6b3896_20210304004333.png",\
\
"employee": {"id": 733043,\
\
"phone": "+1-315-555-0175"\
\
},\
\
"user": {"id": 1553930,\
\
"name": "James Smith",\
\
"email": "j.smith@example.com",\
\
"phone": "+1-315-555-0175"\
\
},\
\
"position": {"id": 103883,\
\
"title": "Yogist"\
\
}\
\
}\
\
},\
\
{"id": 152763,\
\
"location_id": 253859,\
\
"staff_id": 743018,\
\
"hash": "b7c81cab-290a-4b0a-ad05-9c4b98ef3565",\
\
"status": 4,\
\
"status_title": "everything is set",\
\
"is_enabled": true,\
\
"landing_external": "https://app.alteg.io/tips/external/253859/b7c81cab-290a-4b0a-ad05-9c4b98ef3565/",\
\
"master_tips_form_link": "https://app.alteg.io/companies/253859/staff/743018/tips/pay/",\
\
"invite_sms_sent": false,\
\
"staff": {"id": 743018,\
\
"name": "Natasha M",\
\
"specialization": "manicurist",\
\
"avatar": "https://api.alteg.io/images/no-master-sm.png",\
\
"employee": {"id": 733547,\
\
"phone": "+1-315-555-0175"\
\
},\
\
"user": {"id": 6259059,\
\
"name": "Alice Smith",\
\
"email": "a.smith@example.com",\
\
"phone": "+1-315-555-0175"\
\
},\
\
"position": {"id": 103731,\
\
"title": "Manicurist"\
\
}\
\
}\
\
}\
\
],

"meta": {"count": 2

}

}`

## [tag/Tips/paths/~1tips~1{company_id}~1settings~1{master_tips_settings_id}~1disable/post](https://developer.alteg.io/api\#tag/Tips/paths/~1tips~1{company_id}~1settings~1{master_tips_settings_id}~1disable/post) Disable Tips for the Specialist

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | integer<br>location id |
| master\_tips\_settings\_id<br>required | integer<br>tip settings id |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

Tip settings object

post/tips/{company\_id}/settings/{master\_tips\_settings\_id}/disable

https://api.alteg.io/api/v1/tips/{company\_id}/settings/{master\_tips\_settings\_id}/disable

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 1,\
\
"location_id": 253859,\
\
"staff_id": 742418,\
\
"hash": "ba816199-eecf-4bd2-9f1d-db470545bfaf",\
\
"status": 3,\
\
"status_title": "pending account",\
\
"is_enabled": true,\
\
"landing_external": "https://app.alteg.io/tips/external/253859/ba816199-eecf-4bd2-9f1d-db470545bfaf/",\
\
"master_tips_form_link": "https://app.alteg.io/companies/253859/staff/742418/tips/pay/",\
\
"invite_sms_sent": false,\
\
"staff": {"id": 742418,\
\
"name": "Fusa",\
\
"specialization": "specialist",\
\
"avatar": "https://assets.alteg.io/masters/sm/c/c7/c77a4bf2b6b3896_20210304004333.png",\
\
"employee": {"id": 733043,\
\
"phone": "+1-315-555-0175"\
\
},\
\
"user": {"id": 1553930,\
\
"name": "James Smith",\
\
"email": "j.smith@example.com",\
\
"phone": "79774510087"\
\
},\
\
"position": {"id": 103883,\
\
"title": "Yogist"\
\
}\
\
}\
\
},\
\
{"id": 152763,\
\
"location_id": 253859,\
\
"staff_id": 743018,\
\
"hash": "b7c81cab-290a-4b0a-ad05-9c4b98ef3565",\
\
"status": 4,\
\
"status_title": "everything is set",\
\
"is_enabled": true,\
\
"landing_external": "https://app.alteg.io/tips/external/253859/b7c81cab-290a-4b0a-ad05-9c4b98ef3565/",\
\
"master_tips_form_link": "https://app.alteg.io/companies/253859/staff/743018/tips/pay/",\
\
"invite_sms_sent": false,\
\
"staff": {"id": 743018,\
\
"name": "Natasha M",\
\
"specialization": "manicurist",\
\
"avatar": "https://api.alteg.io/images/no-master-sm.png",\
\
"employee": {"id": 733547,\
\
"phone": "+1-315-555-0175"\
\
},\
\
"user": {"id": 6259059,\
\
"name": "Alice Smith",\
\
"email": "a.smith@example.com",\
\
"phone": "+1-315-555-0175"\
\
},\
\
"position": {"id": 103731,\
\
"title": "Manicurist"\
\
}\
\
}\
\
}\
\
],

"meta": {"count": 2

}

}`

## [tag/Payroll](https://developer.alteg.io/api\#tag/Payroll) Payroll

## [tag/Payroll/operation/api.salary.payroll.calculation.staff.search](https://developer.alteg.io/api\#tag/Payroll/operation/api.salary.payroll.calculation.staff.search) Search payroll calculations of an employee

The method allows location owner to search payroll calculations for the period for a staff member.

##### Authorizations:

_BearerPartnerUser_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |
| staff\_id<br>required | number<br>Example: 123<br>ID of a staff member. |

##### query Parameters

|     |     |
| --- | --- |
| date\_from<br>required | string<br>Example: date\_from=2023-03-01<br>Start from date. |
| date\_to<br>required | string<br>Example: date\_to=2023-03-31<br>End to date. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

### Responses

**200**

OK

**401**

Unauthorized

**403**

Forbidden

**404**

Not Found

**422**

Unprocessable Entity

get/company/{company\_id}/salary/payroll/staff/{staff\_id}/calculation/

https://api.alteg.io/api/v1/company/{company\_id}/salary/payroll/staff/{staff\_id}/calculation/

### Response samples

- 200
- 401
- 403
- 404
- 422

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 123,\
\
"company_id": 456,\
\
"staff_id": 789,\
\
"amount": 1000,\
\
"status": "confirmed",\
\
"date_create": "2023-03-03",\
\
"date_from": "2023-03-01",\
\
"date_to": "2023-03-02",\
\
"comment": "Calculation per day"\
\
}\
\
],

"meta": {"count": 1

}

}`

## [tag/Payroll/operation/api.salary.payroll.calculation.staff.read](https://developer.alteg.io/api\#tag/Payroll/operation/api.salary.payroll.calculation.staff.read) Get payroll calculation details of an employee

The method allows location owner to get details of a specific payroll calculation.

##### Authorizations:

_BearerPartnerUser_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |
| staff\_id<br>required | number<br>Example: 123<br>ID of a staff member. |
| calculation\_id<br>required | number<br>Example: 789<br>ID of a salary calculation. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

### Responses

**200**

OK

**401**

Unauthorized

**403**

Forbidden

**404**

Not Found

get/company/{company\_id}/salary/payroll/staff/{staff\_id}/calculation/{calculation\_id}

https://api.alteg.io/api/v1/company/{company\_id}/salary/payroll/staff/{staff\_id}/calculation/{calculation\_id}

### Response samples

- 200
- 401
- 403
- 404

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 123,

"company_id": 456,

"staff_id": 789,

"amount": 1000,

"status": "confirmed",

"date_create": "2023-03-03",

"date_from": "2023-03-01",

"date_to": "2023-03-02",

"comment": "Calculation per day",

"salary_items": [{"date": "2023-03-01",\
\
"time": "12:00",\
\
"item_id": 123,\
\
"item_type_slug": "record",\
\
"salary_sum": "10",\
\
"record_id": 123,\
\
"client_id": 456,\
\
"cost": "1000",\
\
"paid": {"money_sum": "900",\
\
"discount_sum": "30",\
\
"bonus_sum": "70",\
\
"certificate_sum": "0",\
\
"abonement_sum": "0",\
\
"deposit_sum": "0"\
\
},\
\
"salary_calculation_info": {"criteria_title": "Applied calculation criterium",\
\
"param_title": "Applied calculation parameter",\
\
"scheme_title": "Applied calculation scheme"\
\
},\
\
"targets": [{"target_type_slug": "service",\
\
"target_id": 321,\
\
"title": "Cuttings",\
\
"cost": "1000",\
\
"net_cost": "500",\
\
"salary_sum": "10",\
\
"salary_promotion_sum": "1",\
\
"salary_calculation": {"type_slug": "percent",\
\
"value": 1.5,\
\
"description": "1.5% of cost"\
\
}\
\
}\
\
],\
\
"salary_discrepancy": {"reason": "updated_rule",\
\
"actual_sum": "15",\
\
"difference_sum": "5"\
\
}\
\
}\
\
],

"currency": {"id": 2,

"iso": "USD",

"name": "US Dollar",

"symbol": "$",

"is_symbol_after_amount": false

}

},

"meta": [ ]

}`

## [tag/Payroll/operation/api.salary.calculation.staff.salary_schemes_count](https://developer.alteg.io/api\#tag/Payroll/operation/api.salary.calculation.staff.salary_schemes_count) Obtaining payroll schemes count for an employee

The method allows you to get salary calculation schemes count for a staff member before trying to obtain calculation data.

##### Authorizations:

_BearerPartnerUser_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |
| staff\_id<br>required | number<br>Example: 123<br>ID of a staff member. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

### Responses

**200**

OK

**401**

Unauthorized

**403**

Forbidden

**404**

Not Found

get/company/{company\_id}/salary/calculation/staff/{staff\_id}/salary\_schemes\_count/

https://api.alteg.io/api/v1/company/{company\_id}/salary/calculation/staff/{staff\_id}/salary\_schemes\_count/

### Response samples

- 200
- 401
- 403
- 404

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"staff_id": 1112684,

"salary_schemes_count": 2

},

"meta": [ ]

}`

## [tag/Payroll/operation/api.salary.calculation.staff.search](https://developer.alteg.io/api\#tag/Payroll/operation/api.salary.calculation.staff.search) Receipt of mutual settlements of an employee

The method allows location owner to get mutual settlements of a staff member.

##### Authorizations:

_BearerPartnerUser_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |
| staff\_id<br>required | number<br>Example: 123<br>ID of a staff member. |

##### query Parameters

|     |     |
| --- | --- |
| date\_from<br>required | string<br>Example: date\_from=2023-03-01<br>Start from date. |
| date\_to<br>required | string<br>Example: date\_to=2023-03-31<br>End to date. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

### Responses

**200**

OK

**401**

Unauthorized

**403**

Forbidden

**404**

Not Found

**422**

Unprocessable Entity

get/company/{company\_id}/salary/calculation/staff/{staff\_id}/

https://api.alteg.io/api/v1/company/{company\_id}/salary/calculation/staff/{staff\_id}/

### Response samples

- 200
- 401
- 403
- 404
- 422

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"total_sum": {"income": "0",

"expense": "0",

"balance": "240746.48"

},

"currency": {"symbol": "$"

}

},

"meta": [ ]

}`

## [tag/Payroll/operation/api.salary.calculation.staff.daily.search](https://developer.alteg.io/api\#tag/Payroll/operation/api.salary.calculation.staff.daily.search) Receipt of mutual settlements of an employee grouped by date

The method allows location owner to get mutual settlements of a staff member grouped by date.

##### Authorizations:

_BearerPartnerUser_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |
| staff\_id<br>required | number<br>Example: 123<br>ID of a staff member. |

##### query Parameters

|     |     |
| --- | --- |
| date\_from<br>required | string<br>Example: date\_from=2023-03-01<br>Start from date. |
| date\_to<br>required | string<br>Example: date\_to=2023-03-31<br>End to date. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

### Responses

**200**

OK

**401**

Unauthorized

**403**

Forbidden

**404**

Not Found

**422**

Unprocessable Entity

get/company/{company\_id}/salary/calculation/staff/daily/{staff\_id}/

https://api.alteg.io/api/v1/company/{company\_id}/salary/calculation/staff/daily/{staff\_id}/

### Response samples

- 200
- 401
- 403
- 404
- 422

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"payroll_daily": [{"date": "2023-03-01",\
\
"payroll_sum": {"income": "0",\
\
"expense": "0",\
\
"balance": "240746.48"\
\
}\
\
}\
\
],

"currency": {"symbol": "$"

}

},

"meta": {"count": 1

}

}`

## [tag/Payroll/operation/api.salary.period.staff.search](https://developer.alteg.io/api\#tag/Payroll/operation/api.salary.period.staff.search) Getting payroll for a period for an employee

The method allows location owner to get the calculation for the period for a staff member.

##### Authorizations:

_BearerPartnerUser_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |
| staff\_id<br>required | number<br>Example: 123<br>ID of a staff member. |

##### query Parameters

|     |     |
| --- | --- |
| date\_from<br>required | string<br>Example: date\_from=2023-03-01<br>Start from date. |
| date\_to<br>required | string<br>Example: date\_to=2023-03-31<br>End to date. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

### Responses

**200**

OK

**401**

Unauthorized

**403**

Forbidden

**404**

Not Found

**422**

Unprocessable Entity

get/company/{company\_id}/salary/period/staff/{staff\_id}/

https://api.alteg.io/api/v1/company/{company\_id}/salary/period/staff/{staff\_id}/

### Response samples

- 200
- 401
- 403
- 404
- 422

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"working_days_count": 32,

"working_hours_count": 353,

"group_services_count": 3,

"services_count": 0,

"services_sum": "0",

"goods_sales_count": 0,

"goods_sales_sum": "0",

"total_sum": "0",

"salary": "70600",

"currency": {"symbol": "$"

}

},

"meta": [ ]

}`

## [tag/Payroll/operation/api.salary.period.staff.daily.search](https://developer.alteg.io/api\#tag/Payroll/operation/api.salary.period.staff.daily.search) Getting payroll for a period for an employee grouped by date

The method allows location owner to get the calculation for the period for a staff member grouped by date.

##### Authorizations:

_BearerPartnerUser_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |
| staff\_id<br>required | number<br>Example: 123<br>ID of a staff member. |

##### query Parameters

|     |     |
| --- | --- |
| date\_from<br>required | string<br>Example: date\_from=2023-03-01<br>Start from date. |
| date\_to<br>required | string<br>Example: date\_to=2023-03-31<br>End to date. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

### Responses

**200**

OK

**401**

Unauthorized

**403**

Forbidden

**404**

Not Found

**422**

Unprocessable Entity

get/company/{company\_id}/salary/period/staff/daily/{staff\_id}/

https://api.alteg.io/api/v1/company/{company\_id}/salary/period/staff/daily/{staff\_id}/

### Response samples

- 200
- 401
- 403
- 404
- 422

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"period_calculation_daily": [{"date": "2023-03-01",\
\
"period_calculation": {"working_days_count": 32,\
\
"working_hours_count": 353,\
\
"group_services_count": 3,\
\
"services_count": 0,\
\
"services_sum": "0",\
\
"goods_sales_count": 0,\
\
"goods_sales_sum": "0",\
\
"total_sum": "0",\
\
"salary": "70600"\
\
}\
\
}\
\
],

"currency": {"symbol": "$"

}

},

"meta": {"count": 1

}

}`

## [tag/Payroll/operation/api.salary.staff.calculation](https://developer.alteg.io/api\#tag/Payroll/operation/api.salary.staff.calculation) Get Mutual Settlements for a Specific Employee

The method allows you to get mutual settlements of a specific staff member. In the user's access rights, the checkbox "Access to payroll only for a specific staff member" must be specified.

##### Authorizations:

_BearerPartnerUser_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |
| staff\_id<br>required | number<br>Example: 123<br>ID of a staff member. |

##### query Parameters

|     |     |
| --- | --- |
| date\_from<br>required | string<br>Example: date\_from=2023-03-01<br>Start from date. |
| date\_to<br>required | string<br>Example: date\_to=2023-03-31<br>End to date. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

### Responses

**200**

OK

**401**

Unauthorized

**403**

Forbidden

**404**

Not Found

**422**

Unprocessable Entity

get/company/{company\_id}/salary/staff/{staff\_id}/calculation/

https://api.alteg.io/api/v1/company/{company\_id}/salary/staff/{staff\_id}/calculation/

### Response samples

- 200
- 401
- 403
- 404
- 422

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"total_sum": {"income": "0",

"expense": "0",

"balance": "240746.48"

},

"currency": {"symbol": "$"

}

},

"meta": [ ]

}`

## [tag/Payroll/operation/api.salary.staff.salary_schemes](https://developer.alteg.io/api\#tag/Payroll/operation/api.salary.staff.salary_schemes) Obtaining own payroll schemes for a specific employee

The method allows you to get own salary calculation schemes for a specific staff member.
In the user's access rights, the checkbox "Access to payroll only for a specific staff member" must be specified.

##### Authorizations:

_BearerPartnerUser_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |
| staff\_id<br>required | number<br>Example: 123<br>ID of a staff member. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

### Responses

**200**

OK

**401**

Unauthorized

**403**

Forbidden

**404**

Not Found

get/company/{company\_id}/salary/staff/{staff\_id}/salary\_schemes/

https://api.alteg.io/api/v1/company/{company\_id}/salary/staff/{staff\_id}/salary\_schemes/

### Response samples

- 200
- 401
- 403
- 404

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"staff_id": 1112684,\
\
"date_start": "2025-09-21T23:00:00.000+03:00",\
\
"date_end": "2025-09-21T23:00:00.000+03:00",\
\
"salary_scheme": {"id": 28681,\
\
"title": "Service 20%"\
\
}\
\
},\
\
{"staff_id": 1112684,\
\
"date_start": "2025-09-21T23:00:00.000+03:00",\
\
"salary_scheme": {"id": 28680,\
\
"title": "Service 30%"\
\
}\
\
}\
\
],

"meta": {"count": 2

}

}`

## [tag/Payroll/operation/api.salary.staff.period](https://developer.alteg.io/api\#tag/Payroll/operation/api.salary.staff.period) Get Payroll for a Specific Employee for a Given Period

The method allows you to get the calculation for the period for a specific staff member.
In the user's access rights, the checkbox "Access to payroll only for a specific staff member" must be checked.

##### Authorizations:

_BearerPartnerUser_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |
| staff\_id<br>required | number<br>Example: 123<br>ID of a staff member. |

##### query Parameters

|     |     |
| --- | --- |
| date\_from<br>required | string<br>Example: date\_from=2023-03-01<br>Start from date. |
| date\_to<br>required | string<br>Example: date\_to=2023-03-31<br>End to date. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

### Responses

**200**

OK

**401**

Unauthorized

**403**

Forbidden

**404**

Not Found

**422**

Unprocessable Entity

get/company/{company\_id}/salary/staff/{staff\_id}/period/

https://api.alteg.io/api/v1/company/{company\_id}/salary/staff/{staff\_id}/period/

### Response samples

- 200
- 401
- 403
- 404
- 422

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"working_days_count": 32,

"working_hours_count": 353,

"group_services_count": 3,

"services_count": 0,

"services_sum": "0",

"goods_sales_count": 0,

"goods_sales_sum": "0",

"total_sum": "0",

"salary": "70600",

"currency": {"symbol": "$"

}

},

"meta": [ ]

}`

## [tag/Notifications](https://developer.alteg.io/api\#tag/Notifications) Notifications

## [tag/Notifications/paths/~1notification_settings~1{company_id}~1notification_types/get](https://developer.alteg.io/api\#tag/Notifications/paths/~1notification_settings~1{company_id}~1notification_types/get) Get notification settings in a location

The method allows you to get notification settings in a location.

##### Authorizations:

(_user__bearer_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer bearer\_token, USer user\_token |

### Responses

**200**

OK

get/notification\_settings/{company\_id}/notification\_types

https://api.alteg.io/api/v1/notification\_settings/{company\_id}/notification\_types

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"type": "record_create_online_staff",\
\
"channels": {"push": 1,\
\
"sms": 0,\
\
"email": 1\
\
}\
\
},\
\
{"type": "record_move_admin",\
\
"channels": {"push": 1,\
\
"sms": 0,\
\
"email": 0\
\
}\
\
},\
\
{"type": "license_expire",\
\
"channels": {"push": 1,\
\
"sms": 1,\
\
"email": 1\
\
}\
\
},\
\
{"type": "record_create_offline_admin",\
\
"channels": {"push": 1,\
\
"sms": 0,\
\
"email": 1\
\
}\
\
},\
\
{"type": "record_create_offline_staff",\
\
"channels": {"push": 1,\
\
"sms": 0,\
\
"email": 0\
\
}\
\
},\
\
{"type": "record_create_online_admin",\
\
"channels": {"push": 1,\
\
"sms": 0,\
\
"email": 1\
\
}\
\
},\
\
{"type": "record_delete_admin",\
\
"channels": {"push": 0,\
\
"sms": 0,\
\
"email": 1\
\
}\
\
},\
\
{"type": "record_delete_staff",\
\
"channels": {"push": 1,\
\
"sms": 0,\
\
"email": 0\
\
}\
\
},\
\
{"type": "record_move_staff",\
\
"channels": {"push": 0,\
\
"sms": 0,\
\
"email": 0\
\
}\
\
}\
\
],

"meta": {"count": 9

}

}`

## [tag/Notifications/paths/~1notification_settings~1{company_id}~1users~1{user_id}/get](https://developer.alteg.io/api\#tag/Notifications/paths/~1notification_settings~1{company_id}~1users~1{user_id}/get) Get User Notification Settings

The method allows you to get notification settings for a particular location user.

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| user\_id<br>required | number<br>User ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer bearer\_token, User user\_token |

### Responses

**200**

OK

get/notification\_settings/{company\_id}/users/{user\_id}

https://api.alteg.io/api/v1/notification\_settings/{company\_id}/users/{user\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"mode": "staff",

"notification_types": [{"type": "record_create_online_staff",\
\
"channels": {"push": 1,\
\
"sms": 0,\
\
"email": 1\
\
}\
\
},\
\
{"type": "record_create_offline_staff",\
\
"channels": {"push": 1,\
\
"sms": 0,\
\
"email": 0\
\
}\
\
},\
\
{"type": "record_delete_staff",\
\
"channels": {"push": 0,\
\
"sms": 0,\
\
"email": 0\
\
}\
\
},\
\
{"type": "record_move_staff",\
\
"channels": {"push": 0,\
\
"sms": 0,\
\
"email": 0\
\
}\
\
},\
\
{"type": "license_expire",\
\
"channels": {"push": 0,\
\
"sms": 0,\
\
"email": 0\
\
}\
\
}\
\
]

},

"meta": [ ]

}`

## [tag/Notifications/paths/~1notification_settings~1{company_id}~1users~1{user_id}/post](https://developer.alteg.io/api\#tag/Notifications/paths/~1notification_settings~1{company_id}~1users~1{user_id}/post) Change User Push Notification Settings

The method allows you to change the user's PUSH notification settings.
The type of notification to be changed (record\_create\_online\_staff or record\_create\_online\_admin, etc.) should be selected based on the type of notification specified by the user (mode: admin or mode: staff)

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| user\_id<br>required | number<br>User ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer bearer\_token, User user\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| notification\_types | Array of objects<br>Array of objects |

### Responses

**200**

OK

post/notification\_settings/{company\_id}/users/{user\_id}

https://api.alteg.io/api/v1/notification\_settings/{company\_id}/users/{user\_id}

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"notification_types": [{"type": "record_create_online_admin",\
\
"channels": {"push": 1\
\
}\
\
},\
\
{"type": "record_create_offline_admin",\
\
"channels": {"push": 1\
\
}\
\
},\
\
{"type": "record_delete_admin",\
\
"channels": {"push": 1\
\
}\
\
},\
\
{"type": "record_move_admin",\
\
"channels": {"push": 1\
\
}\
\
},\
\
{"type": "license_expire",\
\
"channels": {"push": 1\
\
}\
\
}\
\
]

}`

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"mode": "staff",

"notification_types": [{"type": "record_create_online_staff",\
\
"channels": {"push": 1,\
\
"sms": 0,\
\
"email": 0\
\
}\
\
},\
\
{"type": "record_create_offline_staff",\
\
"channels": {"push": 0,\
\
"sms": 0,\
\
"email": 0\
\
}\
\
},\
\
{"type": "record_delete_staff",\
\
"channels": {"push": 0,\
\
"sms": 0,\
\
"email": 0\
\
}\
\
},\
\
{"type": "record_move_staff",\
\
"channels": {"push": 0,\
\
"sms": 0,\
\
"email": 0\
\
}\
\
},\
\
{"type": "license_expire",\
\
"channels": {"push": 0,\
\
"sms": 0,\
\
"email": 0\
\
}\
\
}\
\
]

},

"meta": [ ]

}`

## [tag/Products](https://developer.alteg.io/api\#tag/Products) Products

## [tag/Products/paths/~1goods~1{company_id}/post](https://developer.alteg.io/api\#tag/Products/paths/~1goods~1{company_id}/post) Create product

The method allows you to create a product

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| title<br>required | string<br>Product Name |
| print\_title | string<br>Title to be printed on receipt |
| article | string<br>vendor code |
| barcode | string<br>Barcode |
| category\_id<br>required | integer<br>Product category ID |
| cost | number <float> <br>Selling price |
| actual\_cost | number <float> <br>Cost price |
| sale\_unit\_id<br>required | integer<br>Sales unit |
| service\_unit\_id<br>required | integer<br>Write-off unit |
| unit\_equals | number <float> <br>The ratio of the unit of measure for sale to the unit of measure for write-off |
| critical\_amount | number <float> <br>critical residue |
| desired\_amount | number <float> <br>Desired balance |
| netto | number <float> <br>Net weight |
| brutto | number <float> <br>Gross weight |
| comment | string<br>A comment |
| tax\_variant | integer<br>Taxation system |
| vat\_id | integer<br>VAT |

### Responses

**201**

Created

**422**

Unprocessable Entity

post/goods/{company\_id}

https://api.alteg.io/api/v1/goods/{company\_id}

### Request samples

- Payload

Content type

application/json

Copy

`{"title": "Shampoo",

"print_title": "Shampoo",

"article": "123",

"barcode": "123",

"category_id": 289632,

"cost": 1000,

"actual_cost": 500,

"sale_unit_id": 216762,

"service_unit_id": 216762,

"unit_equals": 100,

"critical_amount": 1,

"desired_amount": 1,

"netto": 200,

"brutto": 250,

"comment": "Test comment 123",

"tax_variant": 0,

"vat_id": 3

}`

### Response samples

- 201
- 422

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"title": "Shampoo 1",\
\
"value": "Shampoo 1",\
\
"label": "Shampoo 1 (123)",\
\
"good_id": "123456",\
\
"cost": "100500",\
\
"unit_id": "4835",\
\
"unit_short_title": "PC",\
\
"service_unit_id": "3548",\
\
"service_unit_short_title": "gr",\
\
"actual_cost": "1050",\
\
"unit_actual_cost": "105",\
\
"unit_actual_cost_format": "105 r",\
\
"unit_equals": "10",\
\
"barcode": "123",\
\
"loyalty_abonement_type_id": 0,\
\
"loyalty_certificate_type_id": 0,\
\
"loyalty_allow_empty_code": 1,\
\
"critical_amount": 0,\
\
"desired_amount": 0,\
\
"actual_amounts": [{"storage_id": "987",\
\
"amount": "1000000"\
\
}\
\
],\
\
"last_change_date": "2017-01-01T12:00:00+0400"\
\
}\
\
],

"meta": [ ]

}`

## [tag/Products/operation/Get Products](https://developer.alteg.io/api\#tag/Products/operation/Get%20Products) Get Products

- term: Name, article or barcode

- page (number, `1`) \- Page number (not used if good\_id is passed)

- count (number, `25`) \- Number of products on the page (not used if good\_id is passed)

- category\_id (number, `777`) \- Id of the product category (not used if good\_id is passed)

- changed\_after (string) - filtering products changed/created since a specific date and time (not used if good\_id is passed)

- changed\_before (string) - filtering products changed/created before a specific date and time (not used if good\_id is passed)


##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| good\_id<br>required | number<br>Product ID (if you need to get a specific product) |

##### query Parameters

|     |     |
| --- | --- |
| term | string<br>name, article number or barcode |
| page | number<br>Example: page=1<br>page number |
| count | number<br>Example: count=25<br>number of products per page |
| category\_id | number<br>Product category ID |
| changed\_after | string<br>Example: changed\_after=2025-09-21T23:00:00.000+03:00<br>filtering products modified/created since a specific date and time |
| changed\_before | string<br>Example: changed\_before=2017-01-01T12:00:00+0400<br>filtering products modified/created before a specific date and time |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>e.g. application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**200**

OK

get/goods/{company\_id}/{good\_id}

https://api.alteg.io/api/v1/goods/{company\_id}/{good\_id}

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"title": "Shampoo 1",\
\
"value": "Shampoo 1",\
\
"label": "Shampoo 1 (123)",\
\
"good_id": "123456",\
\
"cost": "100500",\
\
"unit_id": "4835",\
\
"unit_short_title": "PC",\
\
"service_unit_id": "3548",\
\
"service_unit_short_title": "gr",\
\
"actual_cost": "1050",\
\
"unit_actual_cost": "105",\
\
"unit_actual_cost_format": "105 r",\
\
"unit_equals": "10",\
\
"barcode": "123",\
\
"loyalty_abonement_type_id": 0,\
\
"loyalty_certificate_type_id": 0,\
\
"loyalty_allow_empty_code": 1,\
\
"critical_amount": 0,\
\
"desired_amount": 0,\
\
"actual_amounts": [{"storage_id": "987",\
\
"amount": "1000000"\
\
}\
\
],\
\
"last_change_date": "2017-01-01T12:00:00+0400"\
\
}\
\
],

"meta": [ ]

}`

## [tag/Products/paths/~1goods~1{company_id}~1{good_id}/put](https://developer.alteg.io/api\#tag/Products/paths/~1goods~1{company_id}~1{good_id}/put) Edit Products

The method allows you to change the product parameters.
When editing units of measure for an item that already has inventory operations, you must add an array of rules for recalculating units of measure - correction\_rules. Otherwise, the array is optional.

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Location ID |
| good\_id<br>required | number<br>Item ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| title<br>required | string<br>Product Name |
| print\_title | string<br>Title to be printed on receipt |
| article | string<br>vendor code |
| barcode | string<br>Barcode |
| category\_id<br>required | integer<br>Product category ID |
| cost | number <float> <br>Selling price |
| actual\_cost | number <float> <br>Cost price |
| sale\_unit\_id<br>required | integer<br>Sales unit |
| service\_unit\_id<br>required | integer<br>Write-off unit |
| unit\_equals | number <float> <br>The ratio of the unit of measure for sale to the unit of measure for write-off |
| critical\_amount | number <float> <br>critical residue |
| desired\_amount | number <float> <br>Desired balance |
| netto | number <float> <br>Net weight |
| brutto | number <float> <br>Gross weight |
| comment | string<br>A comment |
| tax\_variant | integer<br>Taxation system |
| vat\_id | integer<br>VAT |
| correction\_rules | Array of objects<br>An array of rules for converting units of measurement (required if there are inventory operations for the product) |

### Responses

**200**

OK

**409**

Conflict

**422**

Unprocessable Entity

put/goods/{company\_id}/{good\_id}

https://api.alteg.io/api/v1/goods/{company\_id}/{good\_id}

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"title": "Shampoo",

"print_title": "Shampoo",

"article": "123",

"barcode": "123",

"category_id": 289632,

"cost": 1000,

"actual_cost": 500,

"sale_unit_id": 216762,

"service_unit_id": 216762,

"unit_equals": 100,

"critical_amount": 1,

"desired_amount": 1,

"netto": 200,

"brutto": 250,

"comment": "Test comment 123",

"tax_variant": 0,

"vat_id": 3,

"correction_rules": [{"type": 1,\
\
"base_unit": "service"\
\
},\
\
{"type": 2,\
\
"base_unit": "service"\
\
},\
\
{"type": 3,\
\
"base_unit": "sale"\
\
},\
\
{"type": 4,\
\
"base_unit": "sale"\
\
},\
\
{"type": 5,\
\
"base_unit": "sale"\
\
}\
\
]

}`

### Response samples

- 200
- 409
- 422

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"title": "Shampoo 1",\
\
"value": "Shampoo 1",\
\
"label": "Shampoo 1 (123)",\
\
"good_id": "123456",\
\
"cost": "100500",\
\
"unit_id": "4835",\
\
"unit_short_title": "PC",\
\
"service_unit_id": "3548",\
\
"service_unit_short_title": "gr",\
\
"actual_cost": "1050",\
\
"unit_actual_cost": "105",\
\
"unit_actual_cost_format": "105 r",\
\
"unit_equals": "10",\
\
"barcode": "123",\
\
"loyalty_abonement_type_id": 0,\
\
"loyalty_certificate_type_id": 0,\
\
"loyalty_allow_empty_code": 1,\
\
"critical_amount": 0,\
\
"desired_amount": 0,\
\
"actual_amounts": [{"storage_id": "987",\
\
"amount": "1000000"\
\
}\
\
],\
\
"last_change_date": "2017-01-01T12:00:00+0400"\
\
}\
\
],

"meta": [ ]

}`

## [tag/Products/paths/~1goods~1{company_id}~1{good_id}/delete](https://developer.alteg.io/api\#tag/Products/paths/~1goods~1{company_id}~1{good_id}/delete) Delete Items

The method allows you to remove the product

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Location ID |
| good\_id<br>required | number<br>Item ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>application/vnd.api.v2+json |
| Content-Type<br>required | string<br>application/json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |

### Responses

**204**

No Content

delete/goods/{company\_id}/{good\_id}

https://api.alteg.io/api/v1/goods/{company\_id}/{good\_id}

## [tag/Online-Booking-Settings](https://developer.alteg.io/api\#tag/Online-Booking-Settings) Online Booking Settings

## [tag/Online-Booking-Settings/operation/Getting Online Booking Settings](https://developer.alteg.io/api\#tag/Online-Booking-Settings/operation/Getting%20Online%20Booking%20Settings) Getting Online Booking Settings

##### Authorizations:

(_bearer__user_)

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>e.g. application/vnd.api.v2+json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |
| Content-Type<br>required | string<br>application/json |

### Responses

**200**

Online Recording Settings Data

get/company/{company\_id}/settings/online

https://api.alteg.io/api/v1/company/{company\_id}/settings/online

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"confirm_number": false,

"any_master": true,

"seance_delay_step": 90,

"activity_online_record_clients_count_max": 1

},

"meta": [ ]

}`

## [tag/Online-Booking-Settings/operation/Update Online Booking Settings](https://developer.alteg.io/api\#tag/Online-Booking-Settings/operation/Update%20Online%20Booking%20Settings) Update Online Booking Settings

##### Authorizations:

(_bearer__user_)

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>e.g. application/vnd.api.v2+json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |
| Content-Type<br>required | string<br>application/json |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| confirm\_number<br>required | boolean<br>Confirm customer number via SMS |
| any\_master<br>required | boolean<br>"Any staff member" mode |
| seance\_delay\_step<br>required | integer \[ 0 .. 1380 \] <br>Delay to the next session, in minutes from 0 to 23 hours (inclusive) in increments of 30 minutes |
| activity\_online\_record\_clients\_count\_max<br>required | integer \[ 1 .. 255 \] <br>Maximum number of seats in one group event |

### Responses

**200**

Updated online recording settings data

patch/company/{company\_id}/settings/online

https://api.alteg.io/api/v1/company/{company\_id}/settings/online

### Request samples

- Payload

Content type

application/json

Copy

`{"confirm_number": false,

"any_master": true,

"seance_delay_step": 90,

"activity_online_record_clients_count_max": 1

}`

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"confirm_number": false,

"any_master": true,

"seance_delay_step": 90,

"activity_online_record_clients_count_max": 1

},

"meta": [ ]

}`

## [tag/Appointment-Calendar-settings](https://developer.alteg.io/api\#tag/Appointment-Calendar-settings) Appointment Calendar settings

## [tag/Appointment-Calendar-settings/operation/Retrieving Appointment Calendar Settings](https://developer.alteg.io/api\#tag/Appointment-Calendar-settings/operation/Retrieving%20Appointment%20Calendar%20Settings) Retrieving Appointment Calendar Settings

##### Authorizations:

(_bearer__user_)

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>e.g. application/vnd.api.v2+json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |
| Content-Type<br>required | string<br>application/json |

### Responses

**200**

Recording log settings data

get/company/{company\_id}/settings/timetable

https://api.alteg.io/api/v1/company/{company\_id}/settings/timetable

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"record_type": 0,

"activity_record_clients_count_max": 1

},

"meta": [ ]

}`

## [tag/Appointment-Calendar-settings/operation/Update Appointment Calendar settings](https://developer.alteg.io/api\#tag/Appointment-Calendar-settings/operation/Update%20Appointment%20Calendar%20settings) Update Appointment Calendar settings

##### Authorizations:

(_bearer__user_)

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>e.g. application/vnd.api.v2+json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |
| Content-Type<br>required | string<br>application/json |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| record\_type<br>required | integer \[ 0 .. 2 \] <br>Default record type: 0 - Mixed appointment, 1 - Individual appointment, 2 - Group event |
| activity\_record\_clients\_count\_max<br>required | integer \[ 1 .. 255 \] <br>Maximum number of seats in one group event |

### Responses

**200**

Updated recording log settings data

patch/company/{company\_id}/settings/timetable

https://api.alteg.io/api/v1/company/{company\_id}/settings/timetable

### Request samples

- Payload

Content type

application/json

Copy

`{"record_type": 0,

"activity_record_clients_count_max": 1

}`

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"record_type": 90,

"activity_record_clients_count_max": 1

},

"meta": [ ]

}`

## [tag/Booking-Widget-Settings](https://developer.alteg.io/api\#tag/Booking-Widget-Settings) Booking Widget Settings

## [tag/Booking-Widget-Settings/operation/Get a list of booking widgets](https://developer.alteg.io/api\#tag/Booking-Widget-Settings/operation/Get%20a%20list%20of%20booking%20widgets) Get a list of booking widgets

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>e.g. application/vnd.api.v2+json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |
| Content-Type<br>required | string<br>application/json |

### Responses

**200**

List of letterforms

get/company/{company\_id}/booking\_forms/

https://api.alteg.io/api/v1/company/{company\_id}/booking\_forms/

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": [{"id": 1,\
\
"title": "Name",\
\
"is_default": false,\
\
"description": "Description",\
\
"without_menu": false,\
\
"service_step_default": 0,\
\
"service_step_hide": false,\
\
"master_step_default": 0,\
\
"master_step_hide": false,\
\
"service_step_num": 2,\
\
"master_step_num": 1,\
\
"datetime_step_num": 3,\
\
"show_button": true,\
\
"button_position": "bottom right",\
\
"form_position": "right",\
\
"button_color": "#1c84c6",\
\
"button_animation": true,\
\
"html_code": "",\
\
"ab_test_enabled": false\
\
}\
\
],

"meta": [ ]

}`

## [tag/Booking-Widget-Settings/operation/Create a Booking Widget](https://developer.alteg.io/api\#tag/Booking-Widget-Settings/operation/Create%20a%20Booking%20Widget) Create a Booking Widget

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>e.g. application/vnd.api.v2+json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |
| Content-Type<br>required | string<br>application/json |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| title<br>required | string<br>Name of the appointment widget |
| description | string<br>Default: ""<br>appointment widget description |
| is\_default | boolean<br>Default: false<br>Default appointment widget flag |
| without\_menu | boolean<br>Default: false<br>Step mode flag |
| service\_step\_default | number<br>Service ID |
| service\_step\_hide | boolean<br>Default: false<br>Service Hiding Flag |
| master\_step\_default | number<br>staff member ID |
| master\_step\_hide | boolean<br>Default: false<br>staff member hide flag |
| service\_step\_num | number<br>Service step sequence number |
| master\_step\_num | number<br>Sequence number of the wizard step |
| datetime\_step\_num | number<br>Sequence number of the date and time step |
| show\_button | boolean<br>Default: true<br>Button visibility flag |
| button\_position | string<br>Default: "bottom right"<br>Enum:"bottom right""bottom left""top right""top left "<br>Button location on the page |
| form\_position | string<br>Default: "right"<br>Enum:"right""left"<br>Panel position on the page |
| button\_color | string<br>Default: "#1c84c6"<br>Button color |
| button\_animation | boolean<br>Default: true<br>Button animation enable flag |

### Responses

**201**

appointment Widget Settings

post/company/{company\_id}/booking\_forms/

https://api.alteg.io/api/v1/company/{company\_id}/booking\_forms/

### Request samples

- Payload

Content type

application/json

Copy

`{"title": "string",

"description": "",

"is_default": false,

"without_menu": false,

"service_step_default": 0,

"service_step_hide": false,

"master_step_default": 0,

"master_step_hide": false,

"service_step_num": 0,

"master_step_num": 0,

"datetime_step_num": 0,

"show_button": true,

"button_position": "bottom right",

"form_position": "right",

"button_color": "#1c84c6",

"button_animation": true

}`

### Response samples

- 201

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 1,

"title": "Name",

"is_default": false,

"description": "Description",

"without_menu": false,

"service_step_default": 0,

"service_step_hide": false,

"master_step_default": 0,

"master_step_hide": false,

"service_step_num": 2,

"master_step_num": 1,

"datetime_step_num": 3,

"show_button": true,

"button_position": "bottom right",

"form_position": "right",

"button_color": "#1c84c6",

"button_animation": true,

"html_code": "",

"ab_test_enabled": false

},

"meta": [ ]

}`

## [tag/Booking-Widget-Settings/operation/Get a Booking Widget](https://developer.alteg.io/api\#tag/Booking-Widget-Settings/operation/Get%20a%20Booking%20Widget) Get a Booking Widget

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| form\_id<br>required | number<br>appointment widget ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>e.g. application/vnd.api.v2+json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |
| Content-Type<br>required | string<br>application/json |

### Responses

**200**

appointment Widget Settings

get/company/{company\_id}/booking\_forms/{form\_id}/

https://api.alteg.io/api/v1/company/{company\_id}/booking\_forms/{form\_id}/

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 1,

"title": "Name",

"is_default": false,

"description": "Description",

"without_menu": false,

"service_step_default": 0,

"service_step_hide": false,

"master_step_default": 0,

"master_step_hide": false,

"service_step_num": 2,

"master_step_num": 1,

"datetime_step_num": 3,

"show_button": true,

"button_position": "bottom right",

"form_position": "right",

"button_color": "#1c84c6",

"button_animation": true,

"html_code": "",

"ab_test_enabled": false

},

"meta": [ ]

}`

## [tag/Booking-Widget-Settings/operation/Delete Booking Widget](https://developer.alteg.io/api\#tag/Booking-Widget-Settings/operation/Delete%20Booking%20Widget) Delete Booking Widget

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| form\_id<br>required | number<br>appointment widget ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>e.g. application/vnd.api.v2+json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |
| Content-Type<br>required | string<br>application/json |

### Responses

**204**

No Content

delete/company/{company\_id}/booking\_forms/{form\_id}/

https://api.alteg.io/api/v1/company/{company\_id}/booking\_forms/{form\_id}/

## [tag/Booking-Widget-Settings/operation/Change Booking Widget](https://developer.alteg.io/api\#tag/Booking-Widget-Settings/operation/Change%20Booking%20Widget) Change Booking Widget

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |
| form\_id<br>required | number<br>appointment widget ID |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>e.g. application/vnd.api.v2+json |
| Authorization<br>required | string<br>Bearer partner\_token, User user\_token |
| Content-Type<br>required | string<br>application/json |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| title<br>required | string<br>Name of the appointment widget |
| description<br>required | string<br>appointment widget description |
| is\_default<br>required | boolean<br>Default appointment widget flag |
| without\_menu<br>required | boolean<br>Step mode flag |
| service\_step\_default<br>required | number<br>Service ID |
| service\_step\_hide<br>required | boolean<br>Service Hiding Flag |
| master\_step\_default<br>required | number<br>staff member ID |
| master\_step\_hide<br>required | boolean<br>staff member hide flag |
| service\_step\_num<br>required | number<br>Service step sequence number |
| master\_step\_num<br>required | number<br>Sequence number of the wizard step |
| datetime\_step\_num<br>required | number<br>Sequence number of the date and time step |
| show\_button<br>required | boolean<br>Button Visibility Step |
| button\_position<br>required | string<br>Enum:"bottom right""bottom left""top right""top left"<br>Button location on the page |
| form\_position<br>required | string<br>Enum:"right""left"<br>Panel position on the page |
| button\_color<br>required | string<br>Button color |
| button\_animation<br>required | boolean<br>Button animation enable flag |

### Responses

**200**

appointment Widget Settings

patch/company/{company\_id}/booking\_forms/{form\_id}/

https://api.alteg.io/api/v1/company/{company\_id}/booking\_forms/{form\_id}/

### Request samples

- Payload

Content type

application/json

Copy

`{"title": "string",

"description": "string",

"is_default": true,

"without_menu": true,

"service_step_default": 0,

"service_step_hide": true,

"master_step_default": 0,

"master_step_hide": true,

"service_step_num": 0,

"master_step_num": 0,

"datetime_step_num": 0,

"show_button": true,

"button_position": "bottom right",

"form_position": "right",

"button_color": "string",

"button_animation": true

}`

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 1,

"title": "Name",

"is_default": false,

"description": "Description",

"without_menu": false,

"service_step_default": 0,

"service_step_hide": false,

"master_step_default": 0,

"master_step_hide": false,

"service_step_num": 2,

"master_step_num": 1,

"datetime_step_num": 3,

"show_button": true,

"button_position": "bottom right",

"form_position": "right",

"button_color": "#1c84c6",

"button_animation": true,

"html_code": "",

"ab_test_enabled": false

},

"meta": [ ]

}`

## [tag/Positions](https://developer.alteg.io/api\#tag/Positions) Positions

## [tag/Positions/paths/~1company~1{company_id}~1staff~1positions~1/get](https://developer.alteg.io/api\#tag/Positions/paths/~1company~1{company_id}~1staff~1positions~1/get) Get a list of company positions

The method allows you to get a list of current positions in the location

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

### Responses

**200**

List of location positions

get/company/{company\_id}/staff/positions/

https://api.alteg.io/api/v1/company/{company\_id}/staff/positions/

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"data": [{"id": 123,\
\
"title": "Job title"\
\
}\
\
],

"meta": [{ }\
\
],

"success": true

}`

## [tag/Positions/operation/api.location.positions.create_quick](https://developer.alteg.io/api\#tag/Positions/operation/api.location.positions.create_quick) Quick create a position

Creates a new position in a company; position is created as a chain entity and at the same time linked to a company initiated its creation.

##### Authorizations:

_BearerPartnerUser_

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>Example: 123<br>ID of a location. |

##### header Parameters

|     |     |
| --- | --- |
| Accept<br>required | string<br>Example: application/vnd.api.v2+json<br>Should be equal to `application/vnd.api.v2+json` |
| Content-Type<br>required | string<br>Example: application/json<br>Should be equal to `application/json` |

##### Request Body schema: application/json

|     |     |
| --- | --- |
| title<br>required | string<br>Title of a position. |

### Responses

**201**

Created

**401**

Unauthorized

**403**

Forbidden

**404**

Not Found

**422**

Unprocessable Entity

post/company/{company\_id}/positions/quick/

https://api.alteg.io/api/v1/company/{company\_id}/positions/quick/

### Request samples

- Payload

Content type

application/json

Copy

`{"title": "Position"

}`

### Response samples

- 201
- 401
- 403
- 404
- 422

Content type

application/json

Copy
Expand all  Collapse all

`{"success": true,

"data": {"id": 123,

"chain_id": 123,

"title": "Position",

"description": "Position description",

"services_binding_type": 0,

"rules_required_fields": ["employee_name",\
\
"surname",\
\
"patronymic",\
\
"date_admission",\
\
"date_registration_end",\
\
"phone_number",\
\
"citizenship",\
\
"sex",\
\
"passport_data",\
\
"inn",\
\
"number_insurance_certificates"\
\
],

"only_chain_appointment": false

},

"meta": { }

}`

## [tag/Analytics](https://developer.alteg.io/api\#tag/Analytics) Analytics

## [tag/Analytics/paths/~1company~1{company_id}~1analytics~1overall~1/get](https://developer.alteg.io/api\#tag/Analytics/paths/~1company~1{company_id}~1analytics~1overall~1/get) Get key company metrics

The method allows you to get the main indicators of the location for the selected period and compare with the previous period of the same duration

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### query Parameters

|     |     |
| --- | --- |
| date\_from<br>required | string <date> <br>Start date of the analyzed period |
| date\_to<br>required | string <date> <br>End date of the analyzed period (included in the report) |
| staff\_id | integer<br>ID of the location staff member whose work needs to be analyzed |
| position\_id | integer<br>location position ID to analyze the work of all staff members belonging to the same position |
| user\_id | integer<br>The user ID of the location whose work you want to analyze |

### Responses

**200**

Basic indicators

get/company/{company\_id}/analytics/overall/

https://api.alteg.io/api/v1/company/{company\_id}/analytics/overall/

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`{"data": {"income_total_stats": {"current_sum": "12.56",

"previous_sum": "10.34",

"change_percent": 21,

"currency": {"symbol": "USD"

}

},

"income_services_stats": {"current_sum": "12.56",

"previous_sum": "10.34",

"change_percent": 21,

"currency": {"symbol": "USD"

}

},

"income_goods_stats": {"current_sum": "12.56",

"previous_sum": "10.34",

"change_percent": 21,

"currency": {"symbol": "USD"

}

},

"income_average_stats": {"current_sum": "12.56",

"previous_sum": "10.34",

"change_percent": 21,

"currency": {"symbol": "USD"

}

},

"income_average_services_stats": {"current_sum": "12.56",

"previous_sum": "10.34",

"change_percent": 21,

"currency": {"symbol": "USD"

}

},

"fullness_stats": {"current_percent": 12.1,

"previous_percent": 10.2,

"change_percent": 18

},

"record_stats": {"current_completed_count": 150,

"current_completed_percent": 75,

"current_pending_count": 30,

"current_pending_percent": 15,

"current_canceled_count": 20,

"current_canceled_percent": 10,

"current_total_count": 200,

"previous_total_count": 180,

"change_percent": 11

},

"client_stats": {"total_count": 1000,

"new_count": 50,

"new_percent": 10,

"return_count": 450,

"return_percent": 90,

"active_count": 500,

"lost_count": 20,

"lost_percent": 2

}

},

"meta": [{ }\
\
],

"success": true

}`

## [tag/Analytics/paths/~1company~1{company_id}~1analytics~1overall~1charts~1income_daily~1/get](https://developer.alteg.io/api\#tag/Analytics/paths/~1company~1{company_id}~1analytics~1overall~1charts~1income_daily~1/get) Get data on revenue by day

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### query Parameters

|     |     |
| --- | --- |
| date\_from<br>required | string <date> <br>Start date of the analyzed period |
| date\_to<br>required | string <date> <br>End date of the analyzed period (included in the report) |
| staff\_id | integer<br>ID of the location staff member whose work needs to be analyzed |
| position\_id | integer<br>location position ID to analyze the work of all staff members belonging to the same position |
| user\_id | integer<br>The user ID of the location whose work you want to analyze |

### Responses

**200**

Revenue by day

get/company/{company\_id}/analytics/overall/charts/income\_daily/

https://api.alteg.io/api/v1/company/{company\_id}/analytics/overall/charts/income\_daily/

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`[{"label": "Revenue",\
\
"data": [["2025-09-21T23:00:00.000+03:00",\
\
1000\
\
],\
\
["2025-09-21T23:00:00.000+03:00",\
\
500\
\
]\
\
]\
\
}\
\
]`

## [tag/Analytics/paths/~1company~1{company_id}~1analytics~1overall~1charts~1records_daily~1/get](https://developer.alteg.io/api\#tag/Analytics/paths/~1company~1{company_id}~1analytics~1overall~1charts~1records_daily~1/get) Get Data on the Number of Appointments by Day

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### query Parameters

|     |     |
| --- | --- |
| date\_from<br>required | string <date> <br>Start date of the analyzed period |
| date\_to<br>required | string <date> <br>End date of the analyzed period (included in the report) |
| staff\_id | integer<br>ID of the location staff member whose work needs to be analyzed |
| user\_id | integer<br>User ID of the location whose work you want to analyze |

### Responses

**200**

Number of appointments by day

get/company/{company\_id}/analytics/overall/charts/records\_daily/

https://api.alteg.io/api/v1/company/{company\_id}/analytics/overall/charts/records\_daily/

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`[{"label": "Number of records",\
\
"data": [["2025-09-21T23:00:00.000+03:00",\
\
1000\
\
],\
\
["2025-09-21T23:00:00.000+03:00",\
\
500\
\
]\
\
]\
\
},\
\
{"label": "Number of online appointments",\
\
"data": [["2025-09-21T23:00:00.000+03:00",\
\
1000\
\
],\
\
["2025-09-21T23:00:00.000+03:00",\
\
500\
\
]\
\
]\
\
},\
\
{"label": "Number of new customer appointments",\
\
"data": [["2025-09-21T23:00:00.000+03:00",\
\
1000\
\
],\
\
["2025-09-21T23:00:00.000+03:00",\
\
500\
\
]\
\
]\
\
}\
\
]`

## [tag/Analytics/paths/~1company~1{company_id}~1analytics~1overall~1charts~1fullness_daily~1/get](https://developer.alteg.io/api\#tag/Analytics/paths/~1company~1{company_id}~1analytics~1overall~1charts~1fullness_daily~1/get) Get occupancy data by day

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### query Parameters

|     |     |
| --- | --- |
| date\_from<br>required | string <date> <br>Start date of the analyzed period |
| date\_to<br>required | string <date> <br>End date of the analyzed period (included in the report) |
| staff\_id | integer<br>ID of the location staff member whose work needs to be analyzed |
| user\_id | integer<br>The user ID of the location whose work you want to analyze |

### Responses

**200**

Occupancy by day

get/company/{company\_id}/analytics/overall/charts/fullness\_daily/

https://api.alteg.io/api/v1/company/{company\_id}/analytics/overall/charts/fullness\_daily/

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`[{"label": "Working day occupancy, %",\
\
"data": [["2025-09-21T23:00:00.000+03:00",\
\
89.7\
\
],\
\
["2025-09-21T23:00:00.000+03:00",\
\
91.2\
\
]\
\
]\
\
}\
\
]`

## [tag/Analytics/paths/~1company~1{company_id}~1analytics~1overall~1charts~1record_source~1/get](https://developer.alteg.io/api\#tag/Analytics/paths/~1company~1{company_id}~1analytics~1overall~1charts~1record_source~1/get) Get the Structure of Appointments by Source

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### query Parameters

|     |     |
| --- | --- |
| date\_from<br>required | string <date> <br>Start date of the analyzed period |
| date\_to<br>required | string <date> <br>End date of the analyzed period (included in the report) |
| staff\_id | integer<br>ID of the location staff member whose work needs to be analyzed |
| user\_id | integer<br>The user ID of the location whose work you want to analyze |

### Responses

**200**

Structure of records by sources

get/company/{company\_id}/analytics/overall/charts/record\_source/

https://api.alteg.io/api/v1/company/{company\_id}/analytics/overall/charts/record\_source/

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`[{"label": "Administrator",\
\
"data": 10\
\
},\
\
{"label": "Widget",\
\
"data": 30\
\
}\
\
]`

## [tag/Analytics/paths/~1company~1{company_id}~1analytics~1overall~1charts~1record_status~1/get](https://developer.alteg.io/api\#tag/Analytics/paths/~1company~1{company_id}~1analytics~1overall~1charts~1record_status~1/get) Get the Structure of Appointments by Visit Status

##### Authorizations:

(_bearer__user_)

##### path Parameters

|     |     |
| --- | --- |
| company\_id<br>required | number<br>location ID |

##### query Parameters

|     |     |
| --- | --- |
| date\_from<br>required | string <date> <br>Start date of the analyzed period |
| date\_to<br>required | string <date> <br>End date of the analyzed period (included in the report) |
| staff\_id | integer<br>ID of the location staff member whose work needs to be analyzed |
| user\_id | integer<br>The user ID of the location whose work you want to analyze |

### Responses

**200**

Structure of records by visit status

get/company/{company\_id}/analytics/overall/charts/record\_status/

https://api.alteg.io/api/v1/company/{company\_id}/analytics/overall/charts/record\_status/

### Response samples

- 200

Content type

application/json

Copy
Expand all  Collapse all

`[{"label": "Customer expectation",\
\
"data": 10\
\
},\
\
{"label": "The client came",\
\
"data": 30\
\
},\
\
{"label": "Customer confirmed",\
\
"data": 5\
\
},\
\
{"label": "Client didn't come",\
\
"data": 2\
\
}\
\
]`