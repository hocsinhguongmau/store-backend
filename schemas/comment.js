import { AiOutlineComment } from 'react-icons/ai'

export default {
  name: 'comment',
  type: 'document',
  title: 'Comment',
  icon: AiOutlineComment,
  fields: [
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
      email: 'email',
      product: 'product.title',
    },
    prepare({ email, comment, product }) {
      return {
        title: `${email} commented on ${product}`,
        subtitle: comment,
      }
    },
  },
}
