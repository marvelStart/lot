import request from '@/utils/request'

/**
 * 文件上传
 * @param data
 * @returns {AxiosPromise}
 */
export const uploadFile = (data) => {
  return request({
    url: '/lot/fileController/saveFile.do',
    method: 'post',
    data: data
  })
}
