
## WarungWebApp
Warung Web is a web-based application for managing restaurant businesses. It includes 3 applications namely Cashier App, Chef App, and Owner App. Access to the Application requires verification with the username and password registered in the database, its automatic redirect to each role.

1. Cashier Application
As the name suggests, this application is aimed at cashiers. Its function is similar to how a cashier works; can add items to the order list, process transactions, and check stock or status of items sold. The product data displayed is taken directly from the Owner Application, which communicates with the database. Meanwhile, order data will be sent to the Chef App which also communicates with the database.

2. Chef App
Once an order is placed, it needs to be processed, and that's where the Chef App comes into play. The Chef App receives order data from the Cashier App, which is then processed by the 'Chef' who is responsible for preparing the order. The data displayed is the latest data sent from the Cashier application at the time of delivery, meaning that if there are changes to the central data/Owner App then the data in the Chef App will not change.

3. Application Owner
The Owner App contains main and current data, which will communicate with the Cashier App and indirectly with the Chef App. The Owner Application manages all data displayed in each Application. The Owner Application can perform CRUD operations on product data, monitoring sales, revenue and existing products.
