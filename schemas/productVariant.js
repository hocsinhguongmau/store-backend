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
      validation: (Rule) => Rule.min(10).max(90),
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
}
