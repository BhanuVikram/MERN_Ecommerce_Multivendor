### API Endpoints

<br>

| Admin                                   |      |                                 |
| --------------------------------------- | ---- | ------------------------------- |
| Admin log in                            | POST | /admin/login                    |
| Update own profile                      | PUT  | /me/profile                     |
| Get all tickets                         | GET  | /admin/tickets                  |
| Get a ticket                            | GET  | /admin/tickets/:ticket_id       |
| Respond to a ticket                     | PUT  | /admin/tickets/:ticket_id       |
| Update a ticket                         | PUT  | /admin/tickets/:ticket_id       |
| Get all threads                         | GET  | /admin/threads/                 |
| Get a single thread                     | GET  | /admin/thread/:user_id          |
| Get all users                           | GET  | /admin/users                    |
| Get all disabled users                  | GET  | /admin/user/disabled/:user_id   |
| Get a single user                       | GET  | /admin/user/:user_id            |
| Get all agents                          | GET  | /admin/agents                   |
| Get all disabled agent                  | GET  | /admin/user/disabled/:agent_id  |
| Get a single agent                      | GET  | /admin/agent/:agent_id          |
| Get all vendors                         | GET  | /admin/vendors                  |
| Get all disabled vendors                | GET  | /admin/user/disabled/:vendor_id |
| Get a single vendor                     | GET  | /admin/vendor/:vendor_id        |
| Change agent, vendor, user role         | PUT  | /admin/role/:user_id            |
| Update agent, vendor, shop, user status | PUT  | /admin/status/:user_id          |
| Get all orders                          | GET  | /admin/orders                   |
| Get a single order                      | GET  | /admin/order/:order_id          |
| Get all orders of a vendor              | GET  | /admin/orders/vendor/:vendor_id |
| Get all orders of a user                | GET  | /admin/orders/user/:user_id     |
| Update an order                         | PUT  | /admin/orders/:order_id         |
| Get all events                          | GET  | /admin/events                   |
| Get all events of a vendor              | GET  | /admin/events/:vendor_id        |
| Get all coupons                         | GET  | /admin/coupons                  |
| Create a coupon                         | POST | /admin/coupon                   |
| Update a coupon                         | PUT  | /admin/coupon/:coupon_id        |
| Dashboard                               | GET  | /admin/dashboard                |

<br>

| Agent                           |      |                                 |
| ------------------------------- | ---- | ------------------------------- |
| Agent log in                    | POST | /agent/login                    |
| Update own profile              | PUT  | /me/profile                     |
| Disable own status              | PUT  | /me/status                      |
| Update user status              | PUT  | /agent/user/:user_id            |
| Update vendor status            | PUT  | /agent/vendor/:vendor_id        |
| Get a single vendor             | GET  | /agent/vendor/:vendor_id        |
| Get all user orders of a vendor | GET  | /agent/orders/vendor/:vendor_id |
| Get a single user               | GET  | /agent/user/:user_id            |
| Get all user orders of a user   | GET  | /agent/orders/user/:user_id     |
| Get a single order              | GET  | /agent/orders/:order_id         |
| Update an order                 | PUT  | /agent/orders/:order_id         |
| Get all tickets                 | GET  | /agent/tickets                  |
| Get a ticket                    | GET  | /agent/tickets/:ticket_id       |
| Respond to a ticket             | PUT  | /agent/tickets/:ticket_id       |
| Update a ticket                 | PUT  | /agent/tickets/:ticket_id       |
| Get all events                  | GET  | /agent/events                   |
| Get all events of a vendor      | GET  | /agent/events/:vendor_id        |
| Dashboard                       | GET  | /agent/dashboard                |

<br>

| Vendor                   |      |                            |
| ------------------------ | ---- | -------------------------- |
| Vendor sign up           | POST | /vendor/signup             |
| Vendor log in            | POST | /vendor/login              |
| Update own profile       | PUT  | /me/profile                |
| Update own status        | PUT  | /me/status                 |
| Create a shop            | POST | /vendor/createshop         |
| Get my shop              | GET  | /me/shop/                  |
| Update shop profile      | PUT  | /me/shop/profile           |
| Update shop status       | PUT  | /me/shop/status            |
| Create a product         | POST | /vendor/createproduct      |
| Update a product         | PUT  | /vendor/updateproduct      |
| Get all orders           | GET  | /vendor/orders             |
| Get all orders of a user | GET  | /vendor/orders/:user_id    |
| Update an order          | PUT  | /vendor/orders/:order_id   |
| Get all threads          | GET  | /vendor/threads/           |
| Get a single thread      | GET  | /vendor/thread/:user_id    |
| Create a coupon          | POST | /vendor/coupon             |
| Get all coupons          | GET  | /vendor/coupons            |
| Update a coupon          | PUT  | /vendor/coupon/:coupon_id  |
| Get all of my events     | GET  | /vendor/events             |
| Create an event          | POST | /vendor/event              |
| Update an event          | PUT  | /vendor/event/:event_id    |
| Get a single user        | GET  | /vendor/user/:user_id      |
| Get a single agent       | GET  | /vendor/agent/:agent_id    |
| Issue a refund           | PUT  | /vendor/refund/:product_id |
| Withdrawal history       | GET  | /vendor/withdrawals        |
| Withdraw funds           | POST | /vendor/withdraw           |
| Dashboard                | GET  | /vendor/dashboard          |

<br>

| User                               |      |                                 |
| ---------------------------------- | ---- | ------------------------------- |
| User sign up                       | POST | /signup                         |
| User log in                        | POST | /login                          |
| User profile                       | GET  | /me                             |
| Get all products                   | GET  | /products                       |
| Get all products of a shop         | GET  | /products/:shop_id              |
| Get single product                 | GET  | /product/:product_id            |
| Get all product reviews            | GET  | /product/reviews/:product_id    |
| Write a product review             | POST | /product/reviews/:product_id    |
| Edit my product review             | PUT  | /me/product/reviews/:product_id |
| Delete a product review            | PUT  | /product/reviews/:product_id    |
| Get a single shop                  | GET  | /shop/:shop_id                  |
| Get all reviews of a shop          | GET  | /shop/reviews/:shop_id          |
| Write a shop review                | POST | /shop/reviews/:shop_id          |
| Edit my shop review                | PUT  | /me/shop/reviews/:shop_id       |
| Delete a shop review               | PUT  | /shop/reviews/:shop_id          |
| User profile                       | GET  | /me                             |
| Update own profile                 | PUT  | /me/profile                     |
| Update own status                  | PUT  | /me/status                      |
| Get all of my orders               | GET  | /me/orders                      |
| Get a single order                 | GET  | /me/order/:order_id             |
| Place an order                     | POST | /me/order                       |
| Cancel an order                    | PUT  | /me/order/:order_id             |
| Add a product to wishlist          | PUT  | /wishlist/add/:product_id       |
| Remove a product from wishlist     | PUT  | /wishlist/remove/:product_id    |
| Add a product to cart              | PUT  | /cart/add/:product_id           |
| Get all products in cart           | GET  | /cart                           |
| Update product quantity in cart    | PUT  | /cart/update/:product_id        |
| Remove a product from cart         | PUT  | /cart/remove/:product_id        |
| Checkout                           | POST | /checkout                       |
| Create a ticket                    | POST | /ticket/create                  |
| Get all of my tickets              | GET  | /me/tickets                     |
| Get one of my tickets              | GET  | /me/tickets/:ticket_id          |
| Respond to a ticket                | PUT  | /me/tickets/:ticket_id          |
| Get all of my threads              | GET  | /threads/                       |
| Get one of my threads              | GET  | /threads/:vendor_id             |
| Send a message                     | POST | /message/                       |
| Get coupon value                   | GET  | /coupon/coupon_code             |
| Get all active events of all shops | GET  | /events                         |
| Get all active events of a shop    | GET  | /events/:shop_id                |
| Place an order                     | POST | /order                          |
| Return request                     | POST | /return/:product_id             |
| Log out                            | GET  | /logout                         |
