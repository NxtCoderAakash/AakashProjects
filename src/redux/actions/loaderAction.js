import { SET_LOADER } from "../../core/constants/actions";
export const SHOW_LOADER = 'SHOW_LOADER';
export const HIDE_LOADER = 'HIDE_LOADER';

export function showLoader() {
  return {
    type: SHOW_LOADER
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  }
}

export function setLoader(show) {
  return {
    type: SET_LOADER,
    payload: { show }
  }
}