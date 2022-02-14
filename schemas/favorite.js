import { MdFavorite } from 'react-icons/md'

export default {
  name: 'favorite',
  title: 'Favorite',
  type: 'document',
  icon: MdFavorite,
  fields: [
    {
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
  ],
  preview: {
    select: {
      email: 'email',
    },
    prepare({ email }) {
      return {
        title: `Favorite items from ${email}`,
      }
    },
  },
}
