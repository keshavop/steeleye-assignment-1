import React from 'react';
import Card from '../component/card/Card';


export default {
  title: 'Card',
  component: Card,
};

export const DefaultCard = () => (
  <Card
    cardData={{
      description: 'This is a card component used to display information.',
      OrderID: 'SE|20221104|179|9:1:NEWO',
      Buysell: 'BUYI',
      Country: 'NEWO',
      OrderSubmitted: '2022-11-04T15:29:00Z'

    }}
    title="My Card"

  />
);
