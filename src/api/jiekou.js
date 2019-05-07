import axios from '@/axios'

export function getMessage(params) {
      return axios({
        url:'/message/getAllMsg',
        params:params,
        method:'get',
      })
}
export function addVenue(params) {
  return axios({
    url: '/Venue/addVenue',
    data: params,
    method: 'post',
  })
}
export function getUserList() {
  return axios({
    url: 'account/getUserList',
    method: 'get',
  })

}
export function getAdmin() {
  return axios({
    url: 'account/getAdmin',
    method: 'get',
  })

}
export function update(params) {
  return axios({
    url: 'account/update',
    data: params,
    method: 'post',
  })
}
export function login(params) {
  return axios({
    url: 'account/login',
    data: params,
    method: 'post',
  })
}

export function selectOrder() {
  return axios({
    url: 'order/selectOrder',
    method: 'get',
  })
}
export function selectOrderPay() {
  return axios({
    url: 'order/selectOrderPay',
    method: 'get',
  })
}

export function send_notice(params) {
  return axios({
    url: 'message/send_notice',
    method: 'post',
    data:params,
  })
}
export function getSelfInfo() {
  return axios({
    url: 'account/getSelfInfo',
    method: 'get',
  })
}
export function userGetOrder() {
  return axios({
    url: 'order/userGetOrder',
    method: 'get',
  })
}
export function register(params) {
  return axios({
    url: 'account/register',
    method: 'post',
    data:params
  })
}

export function addOrder(params) {
  return axios({
    url: 'order/addOrder',
    data:params,
    method: 'post',
  })
}
export function getVenueList() {
  return axios({
    url: 'Venue/getVenueList',
    method: 'get',
  })
}
export function deleteVenue(params) {
  console.log(params)
  return axios({
    url: 'Venue/deleteVenue',
    method: 'post',
    data:params
  })
}

