## Please fix the following issues

1. In the title of the header, it displays `5 orders` but there are `6 orders` in the table. We want to display the `total` number of `orders` in the header title

2. In the table order submitted date is missing, we have timestamp data included in the `src\assets\timeStamps.json` with the corresponding ids, please combine that with the order data and make sure the order submitted date is being displayed in the table

3. Order Volume cell is displaying USD values, can you please make it display the currency value selected on the dropdown located in the header of the dashboard

4. Can you please add search feature on the order IDs with the search bar given in the header

5. Please clear the console errors and warnings.

6. When user selects an order, can you populate the Card on top of the listing component as shown in the image

# Dashboard 

### Dashboard is live - https://steeleye-assignment-1-lime.vercel.app

This repository contains the questions and answers for the Dashboard assignment.

### Q1: In the title of the header, it displays `5 orders` but there are `6 orders` in the table. We want to display the `total` number of `orders` in the header title

### Ans:
To dynamically display the total number of orders in the header title we use data.json to iterate over json and find the length and store it in totalOrder varaiable and render instead of static 5 orders.

```html
<!-- Before -->
 <HeaderTitle primaryTitle="Orders" secondaryTitle= "Order 5" />

<!-- After -->
  <HeaderTitle primaryTitle="Orders" secondaryTitle={`${totalOrders} orders`} />
```

### Q2: In the table order submitted date is missing, we have timestamp data included in the `src\assets\timeStamps.json` with the corresponding ids, please combine that with the order data and make sure the order submitted date is being displayed in the table

### Ans:
To display the Order submitted data in table, timestamps.json is used to extract extract "Order Submitted Date"

```javascript
import timeStampsData from "../src/assets/timeStamps.json";

 const combinedData = rows.map((row) => ({
    ...row,
    orderTimeStamps: timeStampsData.results.find((item) => item["&id"] === row["&id"]).timestamps,
  }));
```

### Q3: Order Volume cell is displaying USD values, can you please make it display the currency value selected on the dropdown located in the header of the dashboard
### Answer:
- Create a dropdown component to select the currency.
- Pass the selected currency value to the OrdersTable component.
- Use the selected currency value to format the order volume in the table accordingly.

```js
<Dropdown
  options={["GBP", "USD", "JPY", "EUR"]}
  onChange={(e) => setCurrency(e.target.value)}
  selectedItem={currency}
/>
```


### Q4: Can you please add search feature on the order IDs with the search bar given in the header
### Answer:
To add search feature in dashboard I used `useState` hook to manage the search and filter the order based on search query.
```javascript
const [searchText, setSearchText] = useState("");

const filteredRows = mockData.results.filter((row) =>
    row["&id"].toLowerCase().includes(searchText.toLowerCase())
  );
```

### Q5: Please clear the console errors and warnings.
### Answer:
To clear the console error, I have added key prop to child component so that it did not give "key" prop error and child in table render without any error.
```javascript
key={k}
```
### Q6: When user selects an order, can you populate the Card on top of the listing component as shown in the image
### Answer:
To populate the card on top of the listing component, when the user select an order,the selected order details and timestamps passed to the List row . In the Dashboard component, i just pass the prop ,And list component i just make one fuction with showdata in row and pass value of order details and timestampsa nd finally  a onClick function in list row is used to show the data on the top of list

```javascript Dashboard Component to pass the prop
selectedOrderDetails={setSelectedOrderDetails} selectedOrderTimeStamps={setSelectedOrderTimeStamps} 
```

```javascript List Component to pass the prop
 const showdata=(rows)=>{
    selectedOrderDetails(rows.executionDetails)
    selectedOrderTimeStamps(rows.orderTimeStamps)
  }
```
```javascript ListRow Component 
onClick={()=>{showdata(data)}}>
```

## Bonus

## Card Component

The Card component is designed to display information in a card format. It accepts the following props:

### Props

- `cardData`: An object containing the card data to be displayed. It includes properties like `description`, `OrderID`, `Buysell`, `Country`, and `OrderSubmitted`.
- `title`: The title of the card.

### Example

```jsx
import React from 'react';
import Card from '../component/card/Card';

export default {
    title: 'Card',
    component: Card,
};

export const DefaultCard = () => (
    <Card
        cardData={{
            description: 'This is a card component',
            OrderID: 'SE|20221104|179|9:1:NEWO',
            Buysell: 'BUYI',
            Country: 'NEWO',
            OrderSubmitted: '2022-11-04T15:29:00Z'
        }}
        title="My Card"
    />
);
```

In this example, I created a `Card` component and provide sample data for the `cardData` prop. We also set the `title` prop to "My Card". This story demonstrates how the Card component is used to display information in a card format.