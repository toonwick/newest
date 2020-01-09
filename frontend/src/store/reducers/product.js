import { GET_PRODUCTS } from '../actions/constants'

const productReducer = (state = [], {type, payload}) => {
    switch (type) {
      case GET_PRODUCTS:
        return payload
      default:
        return state
    }
}

export default productReducer;