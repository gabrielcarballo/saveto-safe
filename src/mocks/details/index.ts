export interface detailsMockProps {
  title: string,
  detailsCard: {
    productName: string,
    productPrice: number,
    productDescription: string,
    productTags: string[] | string
  }
}

export const detailsMock: detailsMockProps = {
  title: 'Product Details',
  detailsCard: {
    productName: 'Brócolis',
    productPrice: 10,
    productDescription: 'A text about Brocoli',
    productTags: ['veggie', 'organic'].map((tag) => tag.toUpperCase())
  }
}