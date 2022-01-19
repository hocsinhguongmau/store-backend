import { MdBusinessCenter } from 'react-icons/md'

export default {
  name: 'vendor',
  title: 'Vendor',
  type: 'document',
  icon: MdBusinessCenter,
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
      name: 'logo',
      title: 'logo',
      type: 'image',
    },
    {
      name: 'popular',
      title: 'Popular',
      type: 'boolean',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'localeBlockContent',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'logo',
    },
  },
}
