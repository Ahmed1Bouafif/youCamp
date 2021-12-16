export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Aziz',
      img:'https://cdn.visitportugal.com/sites/default/files/styles/encontre_detalhe_poi_destaque/public/mediateca/Dream%20Overland_D.jpg?itok=USG6IhIS',
      text: 'good camping'
    },
    {
      id: 2,
      name: 'Bilel',
      img:'https://www.forbes.com/wheels/wp-content/uploads/2020/10/Bronco-Overland-1200.png',
      text: 'good view'
    },
    {
      id: 3,
      name: 'Bob',
      img:'https://theshireoverland.com/img/blog/1-foto-de-los-extremaos-en-la-sierra-de-cazorla-57.jpg',
      text: 'good friends'
    }
  ];