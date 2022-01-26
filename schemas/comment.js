import { AiOutlineComment } from 'react-icons/ai'

export default {
  name: 'comment',
  type: 'document',
  title: 'Comment',
  icon: AiOutlineComment,
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'email',
      type: 'string',
    },
    {
      title: 'Approved',
      name: 'approved',
      type: 'boolean',
      description: "Comments won't show on the site without approval",
    },
    {
      name: 'comment',
      type: 'text',
    },
    {
      name: 'product',
      type: 'reference',
      to: [{ type: 'product' }],
    },
    {
      name: 'rating',
      type: 'number',
      validation: (Rule) => Rule.max(5),
    },
  ],
  initialValue: {
    rating: 0,
  },
  preview: {
    select: {
      name: 'name',
      comment: 'comment',
      product: 'product.title',
    },
    prepare({ name, comment, product }) {
      return {
        title: `${name} on ${product}`,
        subtitle: comment,
      }
    },
  },
}
