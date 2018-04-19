# biddingApp
Bidding app under construnction

Technologies used:
Spring boot and Angular JS (SockJS and StompJS). H2 in-memory database is used.

1. Copy the server side Java code from src\main\java\* and create a Spring boot project. Build it and run as Spring boot application.
2. Copy the front end code from src\app\* and create a Angular project. Before running it with "ng serve" command, ensure all components are available (install SockJS and stompjs eg: npm i --save stompjs)


----------------
1. Once the UI and backend are up and running, access localhost:4200 from web browser. Register 3 or 4 users as either bidder or bid creator (yet to make a distinction between these roles)
2. Create a bid. start date and end data fields are for time being modeled as numbers, so populate them with some numbers.
3. For time being, add only 1 item to the bid.
4. Navigate to login page, by clicking login button. After successful login, you will be navigated to start bid, where you can give bid name and click get bid details, which will fetch you with bid item.
5. Populate with the bid amount and click update bid.
6. Open another tab or window in your browser with the same url and click Leader board button, which lists the bids in the ascending order of bid amounts.
7. Have more users created and add bids
