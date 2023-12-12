export interface detailsMockProps {
  title: string,
  addToShoppingList: string,
  detailsCard: {
    productName: string,
    productPrice: number,
    productDescription: string,
    productTags: string[] | string,
  }
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
}