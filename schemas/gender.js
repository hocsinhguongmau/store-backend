import { BsGenderAmbiguous } from 'react-icons/bs'

export default {
  name: 'gender',
  title: 'Gender',
  type: 'document',
  icon: BsGenderAmbiguous,
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
  ],
}
