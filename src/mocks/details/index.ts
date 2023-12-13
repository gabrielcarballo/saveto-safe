export interface detailsMockProps {
  title: string,
  addToShoppingList: string,
  detailsCard: {
    productName: string,
    productPrice: number,
    productDescription: string,
    productTags: string[] | string,
  },
  marketSearch: marketSearchProps[]
}

export interface marketSearchProps {
    price: number,
    name: string,
    distance: number,
    location: string,
    image: string
}

export const detailsMock: detailsMockProps = {
  title: 'Product Details',
  detailsCard: {
    productName: 'Brócoli',
    productPrice: 10,
    productDescription: 'A text about Brocoli',
    productTags: ['veggie', 'organic'].map((tag) => tag.toUpperCase())
  },
  addToShoppingList: 'Add to shopping list',
  marketSearch: [
    {
      price: 10,
      name: 'Mercadona',
      distance: 1.2,
      location: 'Calle de la Verdadera, 123',
      image: 'https://www.mercadona.es/favicon.ico'
    },
    {
      price: 9,
      name: 'Lidl',
      distance: 1.5,
      location: 'Avenida de la Imaginación, 456',
      image: 'https://www.lidl.es/favicon.ico'
    },
    {
      price: 8,
      name: 'Carrefour',
      distance: 1.8,
      location: 'Plaza de la Invención, 789',
      image: 'https://www.carrefour.es/favicon.ico'
    },
    {
      price: 7,
      name: 'Alcampo',
      distance: 2.1,
      location: 'Paseo de la Creatividad, 321',
      image: 'https://www.alcampo.es/favicon.ico'
    },
    {
      price: 6,
      name: 'Eroski',
      distance: 2.4,
      location: 'Callejón de la Inspiración, 654',
      image: 'https://www.eroski.es/favicon.ico'
    },
    {
      price: 5,
      name: 'Dia',
      distance: 2.7,
      location: 'Bulevar de la Fantasía, 987',
      image: 'https://www.dia.es/favicon.ico'
    },
    {
      price: 4,
      name: 'Condis',
      distance: 3,
      location: 'Ronda de la Ilusión, 147',
      image: 'https://www.condis.es/favicon.ico'
    },
    {
      price: 3,
      name: 'Supercor',
      distance: 3.3,
      location: 'Camino de la Utopía, 258',
      image: 'https://www.supercor.es/favicon.ico'
    },
  ]
}