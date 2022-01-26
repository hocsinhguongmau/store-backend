import { GiDelicatePerfume } from 'react-icons/gi'

export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: GiDelicatePerfume,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'gender',
      title: 'Gender',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'gender' },
        },
      ],
    },
    {
      title: 'Sold',
      name: 'sold',
      type: 'number',
    },
    {
      title: 'Discount',
      name: 'discount',
      type: 'boolean',
    },
    {
      title: 'Default variant',
      name: 'defaultProductVariant',
      type: 'productVariant',
    },
    {
      title: 'Variants',
      name: 'variants',
      type: 'array',
      of: [
        {
          title: 'Variant',
          type: 'productVariant',
        },
      ],
    },

    {
      name: 'vendor',
      title: 'Vendor',
      type: 'reference',
      to: { type: 'vendor' },
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
    {
      name: 'blurb',
      title: 'Blurb',
      type: 'localeString',
    },

    {
      name: 'top_notes',
      title: 'Top notes',
      type: 'localeString',
    },
    {
      name: 'middle_notes',
      title: 'Middle notes',
      type: 'localeString',
    },
    {
      name: 'base_notes',
      title: 'Base notes',
      type: 'localeString',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'localeBlockContent',
    },
  ],
  initialValue: {
    sold: 0,
    discount: false,
  },

  preview: {
    select: {
      title: 'title',
      manufactor: 'manufactor.title',
      media: 'defaultProductVariant.images[0]',
    },
  },
}
