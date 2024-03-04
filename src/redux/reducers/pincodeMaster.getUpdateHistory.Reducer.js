import { PINCODE_GET_UPDATE_HISTORY_MASTER_DATA } from '../../core/constants/actions'
import { getNewState } from '../../core/utility'
// PINCODE_GET_UPDATE_HISTORY_MASTER_DATA
// PINCODE_POST_MASTER_DATA
// PINCODE_UPDATE_MASTER_DATA
// PINCODE_GET_OTP_MASTER_DATA
// PINCODE_RESEND_OTP_MASTER_DATA
// PINCODE_GET_CITIES_MASTER_DATA
// PINCODE_GET_UPDATE_HISTORY_MASTER_DATA
const intialState = {
  pincodeUpdateHistory: [],
  isLoading: false
}
export default function getUpdateHistoryPincodeMaster(state = intialState, action) {

  switch (action.type) {
    case PINCODE_GET_UPDATE_HISTORY_MASTER_DATA.REQUEST:
      return getNewState(state, { isLoading: true })

    case PINCODE_GET_UPDATE_HISTORY_MASTER_DATA.SUCCESS:
      const { pincodeUpdateHistory } = action.payload;
      return getNewState(state, { pincodeUpdateHistory, isLoading: false })

    case PINCODE_GET_UPDATE_HISTORY_MASTER_DATA.FAILURE:
      const { error } = action.payload
      return getNewState(state, { error, ...intialState })

    default:
      return state
  }
}