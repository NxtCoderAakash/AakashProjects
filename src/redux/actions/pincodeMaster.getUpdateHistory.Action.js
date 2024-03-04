import { PINCODE_GET_UPDATE_HISTORY_MASTER_DATA } from '../../core/constants/actions'
// import { pendingAssignList } from '../../core/services/franchiseServices'
import { getUpdateHistoryPincodeMasterData } from '../../core/services/logisticsServices'
import { showLoader, hideLoader } from './loaderAction'
import { setNotification } from './notificationAction'

export function getUpdateHistoryPincodeMasterDataAction(payload) {
  return dispatch => {
    dispatch(request())
    dispatch(showLoader())
    return getUpdateHistoryPincodeMasterData(payload)
      .then(apiResponse => {
        if (apiResponse.isValid) {
            // console.log(apiResponse,"apiResponse updateHistory master")
          const { pincodeHistoryList } = apiResponse
        //   const { page } = payload;
          dispatch(success({ pincodeUpdateHistory:pincodeHistoryList }))
        } else {
          dispatch(failure({ error: apiResponse.message }))
          dispatch(setNotification('danger', 'ERROR', apiResponse.message))
        }
        dispatch(hideLoader())
      })
  }

  function request() { return { type: PINCODE_GET_UPDATE_HISTORY_MASTER_DATA.REQUEST } }
  function success(pincodeMasterData) { return { type: PINCODE_GET_UPDATE_HISTORY_MASTER_DATA.SUCCESS, payload: { ...pincodeMasterData } } }
  function failure(error) { return { type: PINCODE_GET_UPDATE_HISTORY_MASTER_DATA.FAILURE, payload: { ...error } } }
}

export function resetInventoryList() {
  return { type: PINCODE_GET_UPDATE_HISTORY_MASTER_DATA.RESET }
}
