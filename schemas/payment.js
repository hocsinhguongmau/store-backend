import { BsCashStack } from 'react-icons/bs'
export default {
  name: 'payment',
  title: 'Payment',
  type: 'document',
  icon: BsCashStack,
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
    },
    {
      title: 'Carts',
      name: 'carts',
      type: 'array',
      of: [{ type: 'cartItem' }],
    },
    {
      title: 'User Info',
      name: 'userInfo',
      type: 'array',
      of: [{ type: 'userInfo' }],
    },
    { name: 'total', title: 'Total', type: 'string' },
  ],
}
