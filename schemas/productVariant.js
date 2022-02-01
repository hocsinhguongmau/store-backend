export default {
  title: 'Product variant',
  name: 'productVariant',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Size in ml',
      name: 'ml',
      type: 'number',
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number',
    },
    {
      title: 'SKU',
      name: 'sku',
      type: 'number',
    },
    {
      title: 'Discount',
      name: 'discount',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(90),
    },
  ],
  initialValue: {
    sku: 100,
    discount: 0,
  },
}
