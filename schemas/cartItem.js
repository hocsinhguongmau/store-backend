import { AiOutlineShoppingCart } from 'react-icons/ai'
export default {
  name: 'cartItem',
  title: 'Cart Item',
  type: 'document',
  icon: AiOutlineShoppingCart,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'size',
      title: 'Size',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'string',
    },
    {
      name: 'href',
      title: 'Href',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'currency',
      title: 'Currency',
      type: 'string',
    },
    {
      name: 'quantity',
      title: 'Quantity',
      type: 'number',
    },
    {
      name: 'itemTotal',
      title: 'Total',
      type: 'number',
    },
    {
      name: 'id',
      title: 'ID',
      type: 'string',
    },
  ],
}
