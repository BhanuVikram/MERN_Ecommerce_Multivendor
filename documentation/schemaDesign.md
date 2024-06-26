### Schema Design

<br>

#### Data Sets

- User Schema
- Product Schema
- Order Schema
- Event Schema
- Coupon Schema
- Shop Schema
- Withdraw Schema
- Ticket Schema
- Thread Schema

<br>

![Schema Design](<./assets/Schema Design.jpeg>)

<br>

#### User Schema

| Key                  | Type   | Required | Unique | Default      | Foreign Key |
| -------------------- | ------ | -------- | ------ | ------------ | ----------- |
| First Name           | String | Yes      |        |              |             |
| Last Name            | String | Yes      |        |              |             |
| Email                | String | Yes      | Yes    |              |             |
| Phone Number         | Number | Yes      | Yes    |              |             |
| Addresses            |        | Yes      |        |              |             |
| Password             | String | Yes      |        |              |             |
| Role                 | String |          |        | User         |             |
| Created At           | Date   |          |        | Current Time |             |
| Reset Password Token | String |          |        |              |             |
| Reset Password Time  | Date   |          |        |              |             |

<br>

#### Product Schema

| Key                | Type    | Required | Unique | Default      | Foreign Key |
| ------------------ | ------- | -------- | ------ | ------------ | ----------- |
| Title              | String  | Yes      |        |              |             |
| Category           | String  | Yes      |        |              |             |
| Description        | String  | Yes      |        |              |             |
| Images             |         | Yes      |        |              |             |
| Price              | Number  | Yes      |        |              |             |
| Total Quantity     | Number  | Yes      |        | 0            |             |
| Quantity Sold      | Number  |          |        | 0            |             |
| Quantity Remaining | Number  |          |        | 0            |             |
| In Stock           | Boolean |          |        | false        |             |
| Disabled           | Boolean |          |        | false        |             |
| Reviews            |         |          |        |              |             |
| Ratings            | Number  |          |        |              |             |
| Created By         | Object  |          |        |              | User Schema |
| Created At         | Date    |          |        | Current time |             |

<br>

#### Order Schema

| Key              | Type   | Required | Unique | Default      | Foreign Key |
| ---------------- | ------ | -------- | ------ | ------------ | ----------- |
| Cart             |        |          |        |              |             |
| User             | Object |          |        |              | User Schema |
| Shipping Address | Object | Yes      |        |              |             |
| Total Price      | Number |          |        |              |             |
| Status           | String |          |        | Processing   |             |
| Payment Info     | Object | Yes      |        |              |             |
| Created At       | Date   |          |        | Current Time |             |
| Delivered By     | String |          |        |              |             |
| Delivered At     | Date   |          |        |              |             |

<br>

#### Event Schema

| Key                 | Type   | Required | Unique | Default      | Foreign Key    |
| ------------------- | ------ | -------- | ------ | ------------ | -------------- |
| Created By          | Object |          |        |              | User Schema    |
| Name                | String | Yes      |        |              |                |
| Description         | String | Yes      |        |              |                |
| Category            | String | Yes      |        |              |                |
| Start Date          | Date   | Yes      |        |              |                |
| End Date            | Date   | Yes      |        |              |                |
| Status              | String | Yes      |        |              |                |
| Tags                |        |          |        |              |                |
| Product ID          |        |          |        |              | Product Schema |
| Original Price      | Number | Yes      |        |              |                |
| Discounted Price    | Number | Yes      |        |              |                |
| Quantity Discounted | Number | Yes      |        | 0            |                |
| Quantity Sold       | Number | Yes      |        | 0            |                |
| Quantity Remaining  | Number |          |        | 0            |                |
| Banner              |        | Yes      |        |              |                |
| Created At          | Date   |          |        | Current Time |                |

<br>

#### Coupon Schema

| Key                     | Type   | Required | Unique | Default      | Foreign Key    |
| ----------------------- | ------ | -------- | ------ | ------------ | -------------- |
| Name                    | String | Yes      |        |              |                |
| Value                   | Number | Yes      |        |              |                |
| Coupon Code             | String | Yes      | Yes    |              |                |
| Minimum Purchase Amount | Number | Yes      |        | 0            |                |
| Maximum Purchase Amount | Number | Yes      |        | 0            |                |
| Selected Products       |        | Yes      |        |              | Product Schema |
| Coupon Quantity         | Number | Yes      |        |              |                |
| Created By              | Object |          |        |              | User Schema    |
| Created At              | Date   |          |        | Current Time |                |

<br>

#### Shop Schema

| Key                         | Type   | Required | Unique | Default      | Foreign Key     |
| --------------------------- | ------ | -------- | ------ | ------------ | --------------- |
| Created By                  | Object |          |        |              | User Schema     |
| Name                        | String | Yes      | Yes    |              |                 |
| Description                 | String | Yes      |        |              |                 |
| Email                       | String | Yes      | Yes    |              |                 |
| Address                     |        | Yes      |        |              |                 |
| Identity Verification       |        | Yes      |        |              |                 |
| Business Verification       |        | Yes      |        |              |                 |
| Address Verification        |        | Yes      |        |              |                 |
| Phone Number                | Number | Yes      |        |              |                 |
| Logo                        |        | Yes      |        |              |                 |
| Banner                      |        | Yes      |        |              |                 |
| Withdrawals                 | Object |          |        |              | Withdraw Schema |
| Total Amount Withdrawn      | Number |          |        | 0            |                 |
| Total Number of Withdrawals | Number |          |        | 0            |                 |
| Reviews                     |        |          |        |              |                 |
| Ratings                     | Number |          |        |              |                 |
| Created At                  | Date   |          |        | Current Time |                 |

<br>

#### Withdraw Schema

| Key                         | Type   | Required | Unique | Default      | Foreign Key |
| --------------------------- | ------ | -------- | ------ | ------------ | ----------- |
| Total Amount                | Number |          |        | 0            |             |
| Total Amount Withdrawn      | Number |          |        | 0            |             |
| Total Number of Withdrawals | Number |          |        | 0            |             |
| Available Amount            | Number |          |        | 0            |             |
| Withdrawal Status           | String |          |        |              |             |
| Created By                  | Object |          |        |              | User Schema |
| Created At                  | Date   |          |        | Current Time |             |

<br>

#### Ticket Schema

| Key         | Type   | Required | Unique | Default      | Foreign Key |
| ----------- | ------ | -------- | ------ | ------------ | ----------- |
| Title       | String | Yes      |        |              |             |
| Body        | String | Yes      |        |              |             |
| Sender      | Object |          |        |              | User Schema |
| Receiver    | Object |          |        |              | User Schema |
| Attachments |        |          |        |              |             |
| Created At  | Date   |          |        | Current Time |             |

<br>

#### Thread Schema

| Key             | Type   | Required | Unique | Default      | Foreign Key |
| --------------- | ------ | -------- | ------ | ------------ | ----------- |
| Conversation ID |        |          |        |              |             |
| Message         | String | Yes      |        |              |             |
| Sender          | Object |          |        |              | User Schema |
| Receiver        | Object |          |        |              | User Schema |
| Attachments     |        |          |        |              |             |
| Timestamp       | Date   |          |        | Current Time |             |
