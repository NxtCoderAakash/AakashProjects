import { PINCODE_MASTER_DATA } from '../../core/constants/actions'
import { getNewState } from '../../core/utility'

const intialState = {
  pincodeList: [],
  isLoading: false
}
export default function getPincodeMaster(state = intialState, action) {

  switch (action.type) {
    case PINCODE_MASTER_DATA.REQUEST:
      return getNewState(state, { isLoading: true })

    case PINCODE_MASTER_DATA.SUCCESS:
      const { pincodeList } = action.payload;
      return getNewState(state, { pincodeList, isLoading: false })

    case PINCODE_MASTER_DATA.FAILURE:
      const { error } = action.payload
      return getNewState(state, { error, ...intialState })

    default:
      return state
  }
}