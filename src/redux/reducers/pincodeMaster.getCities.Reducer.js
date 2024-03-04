import { PINCODE_GET_CITIES_MASTER_DATA } from '../../core/constants/actions'
import { getNewState } from '../../core/utility'
const intialState = {
  pincodeCityList: [],
  isLoading: false
}

export default function getCitiesPincodeMaster(state = intialState, action) {

  switch (action.type) {
    case PINCODE_GET_CITIES_MASTER_DATA.REQUEST:
      return getNewState(state, { isLoading: true })

    case PINCODE_GET_CITIES_MASTER_DATA.SUCCESS:
      const { pincodeCityList } = action.payload;
      return getNewState(state, { pincodeCityList, isLoading: false })

    case PINCODE_GET_CITIES_MASTER_DATA.FAILURE:
      const { error } = action.payload
      return getNewState(state, { error, ...intialState })

    default:
      return state
  }
}