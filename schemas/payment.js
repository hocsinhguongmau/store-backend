import { BsCashStack } from 'react-icons/bs'

export default {
  name: 'payment',
  title: 'Payment',
  type: 'document',
  icon: BsCashStack,
  fields: [
    {
      name: 'orderId',
      title: 'Order ID',
      type: 'string',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
    },
  ],
}
