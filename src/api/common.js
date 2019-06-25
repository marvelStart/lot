import axios from 'axios'

/**
 * 文件上传
 * @param data
 * @returns {AxiosPromise}
 */
export const uploadFile = (data) => {
  return axios({
    url: '/lot/fileController/saveFile.do',
    method: 'post',
    data: data
  })
}
