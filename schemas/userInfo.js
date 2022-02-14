import { HiUser } from 'react-icons/hi'

export default {
  name: 'userInfo',
  title: 'User Info',
  type: 'document',
  icon: HiUser,
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },
  ],
}
