
## WarungWebApp
WarungWeb is a locally-based (for now) application that utilizes a JSON server as a database to manage data for each of its pages. WarungWeb itself consists of 3 different pages/apps. In this case, WarungWeb is a website for restaurant needs. Each app/web is tailored according to its name and position in a restaurant.
You can read about WarungWeb database in https://github.com/kuhrmdhn/WarungWebAppBackend

1. Cashier App
As the name suggests, this application is intended for cashiers. It functions similarly to how a cashier operates; it can add items to the order list, process transactions, and check the stock or status of items sold. The product data displayed is directly retrieved from the Owner App, which communicates via the JSON server. Meanwhile, the order data will be sent to the Chef App, which also communicates via the JSON server.

2. Chef App
After an order is placed, it needs to be processed, and that's where the Chef App comes in. The Chef App receives order data from the Cashier App, which is then processed by the 'Chef' responsible for preparing the order. The data displayed is the latest data sent from the Cashier app during the delivery, meaning if there are changes in the central data/Owner App, the data in the Chef App will not change.

3. Owner App
The Owner App contains the main and up-to-date data, which will communicate with the Cashier App and indirectly with the Chef App. The Owner App manages all the data displayed on each App. Access to the Owner App requires verification with a username and password registered in the JSON server database. The Owner App can perform CRUD operations on product data and Owner/author data, monitor sales, revenue, and existing products.

## How To Use
