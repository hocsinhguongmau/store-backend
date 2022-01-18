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
  ],
  preview: {
    select: {
      name: 'name',
      comment: 'comment',
      product: 'product.title',
    },
    prepare({ name, comment, post }) {
      return {
        title: `${name} on ${post}`,
        subtitle: comment,
      }
    },
  },
}
