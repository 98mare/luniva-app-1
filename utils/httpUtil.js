import { httpBase } from "./httpBaseUtil";

export const fetch = (url, params) => {
  return httpBase().get(`/${url}`, params)
}

export const store = (url, params) => {
  return httpBase().post(`/${url}`, data)
}
export const update = (url, params) => {
  return httpBase().put(`/${url}`, data)
}
export const destroy = (url, params) => {
  return httpBase().delete(`/${url}`, data)
}