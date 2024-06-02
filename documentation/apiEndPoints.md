### API End Points

<br>

| Admin                                 |      |                                 |
| ------------------------------------- | ---- | ------------------------------- |
| Admin log in                          | POST | /admin/login                    |
| Get all tickets                       | GET  | /admin/tickets                  |
| Get a ticket                          | GET  | /admin/tickets/:ticket_id       |
| Respond to a ticket                   | PUT  | /admin/tickets/:ticket_id       |
| Update a ticket                       | PUT  | /admin/tickets/:ticket_id       |
| Update vendor status                  | PUT  | /admin/vendor/:vendor_id        |
| Get all vendors                       | GET  | /admin/vendors                  |
| Get all orders                        | GET  | /admin/orders                   |
| Get all customer orders of a vendor   | GET  | /admin/orders/vendor/:vendor_id |
| Get all customer orders of a customer | GET  | /admin/orders/user/:user_id     |
| Update an order                       | PUT  | /admin/orders/:order_id         |
| Get all events                        | GET  | /admin/events                   |
| Get all events of a vendor            | GET  | /admin/events/:vendor_id        |
| Dashboard                             | GET  | /admin/dashboard                |

<br>

| Vendor                       |      |                            |
| ---------------------------- | ---- | -------------------------- |
| Vendor sign up               | POST | /vendor/signup             |
| Vendor log in                | POST | /vendor/login              |
| Get all orders               | GET  | /vendor/orders             |
| Get all orders of a customer | GET  | /vendor/orders/:user_id    |
| Update an order              | PUT  | /vendor/orders/:order_id   |
| Get all threads              | GET  | /vendor/threads/           |
| Get a single thread          | GET  | /vendor/threads/:user_id   |
| Create a coupon code         | POST | /vendor/coupon             |
| Get all coupons              | GET  | /vendor/coupons            |
| Update a coupon              | PUT  | /vendor/coupon/:coupon_id  |
| Get all of my events         | GET  | /vendor/events             |
| Create an event              | POST | /vendor/event              |
| Update an event              | PUT  | /vendor/event/:event_id    |
| Issue a refund               | PUT  | /vendor/refund/:product_id |
| Update shop profile          | PUT  | /vendor/shop/update        |
| Withdrawal history           | GET  | /vendor/withdrawals        |
| Withdraw funds               | POST | /vendor/withdraw           |
| Dashboard                    | GET  | /vendor/dashboard          |

<br>

| User                                 |        |                                 |
| ------------------------------------ | ------ | ------------------------------- |
| User sign up                         | POST   | /signup                         |
| User log in                          | POST   | /login                          |
| User profile                         | GET    | /me                             |
| Get all products                     | GET    | /products                       |
| Get all products of a vendor         | GET    | /product/:vendor_id             |
| Get single product                   | GET    | /product/:product_id            |
| Get all product reviews              | GET    | /product/reviews/:product_id    |
| Write a product review               | POST   | /product/reviews/:product_id    |
| Edit my product review               | PUT    | /me/product/reviews/:product_id |
| Delete a product review              | DELETE | /product/reviews/:product_id    |
| Get single shop/seller profile       | GET    | /sellers/:vendor_id             |
| Get all seller reviews               | GET    | /seller/reviews/:vendor_id      |
| Write a seller review                | POST   | /seller/reviews/:vendor_id      |
| Edit my seller review                | PUT    | /me/seller/reviews/:vendor_id   |
| Delete a seller review               | DELETE | /seller/reviews/:vendor_id      |
| User profile                         | GET    | /me                             |
| Update user profile                  | PUT    | /me/update                      |
| Get all of my orders                 | GET    | /me/orders                      |
| Get a single order                   | GET    | /me/order/:order_id             |
| Place a new order                    | POST   | /me/order                       |
| Cancel an order                      | PUT    | /me/order/:order_id             |
| Add a product to wishlist            | PUT    | /wishlist/add/:product_id       |
| Remove a product from wishlist       | PUT    | /wishlist/remove/:product_id    |
| Add a product to cart                | PUT    | /cart/add/:product_id           |
| Get all products in cart             | GET    | /cart                           |
| Update product quantity in cart      | PUT    | /cart/update/:product_id        |
| Remove a product from cart           | PUT    | /cart/remove/:product_id        |
| Checkout                             | POST   | /checkout                       |
| Create a ticket                      | POST   | /ticket/create                  |
| Get all of my tickets                | GET    | /me/tickets                     |
| Get one of my tickets                | GET    | /me/tickets/:ticket_id          |
| Respond to a ticket                  | PUT    | /me/tickets/:ticket_id          |
| Get all of my threads                | GET    | /threads/                       |
| Get one of my threads                | GET    | /threads/:vendor_id             |
| Send a message                       | POST   | /message/                       |
| Get coupon value                     | GET    | /coupon/coupon_code             |
| Get all active events of all vendors | GET    | /events                         |
| Get all active events of a vendor    | GET    | /events/:vendor_id              |
| Place an order                       | POST   | /order                          |
| Return request                       | POST   | /return/:product_id             |
| Log out                              | GET    | /logout                         |
