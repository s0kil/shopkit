import { thunk } from 'easy-peasy'

import modal from './modal'
import user from './user'
import cart from './cart'
import checkout from './checkout'

export default {
  initialize: thunk(
    async (_, { cartId, customerId, customerToken }, { dispatch }) => {
      console.log({ cartId })
      await dispatch.cart.getCart(cartId)
      await dispatch.cart.setCartId(cartId)
      // await dispatch.user.setCustomerId(customerId)
      // await dispatch.user.setCustomerToken(customerToken)
      // await dispatch.user.getCustomer({ customerId, customerToken })
    }
  ),
  modal,
  user,
  cart,
  checkout
}