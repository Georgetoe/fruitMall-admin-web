import request from '@/utils/request'

/**
 * 获取当前用户信息
 * @returns {*}
 */
export function getInfo() {
  return request({
    url:'/admin/info',
    method:'get',
  })
}

export function getInfoBrand() {
  return request({
    url:'/admin/info',
    method:'get',
  })
}
