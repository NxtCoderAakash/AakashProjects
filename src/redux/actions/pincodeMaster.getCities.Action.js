import { PINCODE_GET_CITIES_MASTER_DATA } from '../../core/constants/actions'
// import { pendingAssignList } from '../../core/services/franchiseServices'
import { getCitiesPincodeMasterData } from '../../core/services/logisticsServices'
import { showLoader, hideLoader } from './loaderAction'
import { setNotification } from './notificationAction'

export function getCitiesPincodeMasterDataAction() {
  return dispatch => {
    dispatch(request())
    dispatch(showLoader())
    return getCitiesPincodeMasterData()
      .then(apiResponse => {
        if (apiResponse.isValid) {
            console.log(apiResponse,"apiResponse getCities master")
            const { pincodeCityList } = apiResponse
        //   const { page } = payload;
        console.log(pincodeCityList,"pincodeCityList aakash")
          dispatch(success({ pincodeCityList }))
        } else {
          dispatch(failure({ error: apiResponse.message }))
          dispatch(setNotification('danger', 'ERROR', apiResponse.message))
        }
        dispatch(hideLoader())
      })
  }

  function request() { return { type: PINCODE_GET_CITIES_MASTER_DATA.REQUEST } }
  function success(pincodeMasterData) { return { type: PINCODE_GET_CITIES_MASTER_DATA.SUCCESS, payload: { ...pincodeMasterData } } }
  function failure(error) { return { type: PINCODE_GET_CITIES_MASTER_DATA.FAILURE, payload: { ...error } } }
}

export function resetInventoryList() {
  return { type: PINCODE_GET_CITIES_MASTER_DATA.RESET }
}
