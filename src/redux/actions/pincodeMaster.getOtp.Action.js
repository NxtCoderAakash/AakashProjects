import { PINCODE_MASTER_DATA } from '../../core/constants/actions'
// import { pendingAssignList } from '../../core/services/franchiseServices'
import { getOtpPincodeMasterData } from '../../core/services/logisticsServices'
import { showLoader, hideLoader } from './loaderAction'
import { setNotification } from './notificationAction'
// getPincodeMasterData
// postPincodeMasterData
// updatePincodeMasterData
// getOtpPincodeMasterData
// resendOtpPincodeMasterData
// getCitiesPincodeMasterData
// getUpdateHistoryPincodeMasterData
export function getOtpPincodeMasterDataAction(payload) {
  return dispatch => {
    dispatch(request())
    dispatch(showLoader())
    return getOtpPincodeMasterData(payload)
      .then(apiResponse => {
        if (apiResponse.isValid) {
            console.log(apiResponse,"apiResponse pincode master")
          const { pincodeList } = apiResponse
        //   const { page } = payload;
          dispatch(success({ pincodeList }))
        } else {
          dispatch(failure({ error: apiResponse.message }))
          dispatch(setNotification('danger', 'ERROR', apiResponse.message))
        }
        dispatch(hideLoader())
      })
  }

  function request() { return { type: PINCODE_MASTER_DATA.REQUEST } }
  function success(pincodeMasterData) { return { type: PINCODE_MASTER_DATA.SUCCESS, payload: { ...pincodeMasterData } } }
  function failure(error) { return { type: PINCODE_MASTER_DATA.FAILURE, payload: { ...error } } }
}

export function resetInventoryList() {
  return { type: PINCODE_MASTER_DATA.RESET }
}
