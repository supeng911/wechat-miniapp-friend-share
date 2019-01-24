import Taro from '@tarojs/taro';

const API_PREFIX = process.env.API_PREFIX

function checkStatusCode(response) {
  const { statusCode, data } = response;
  if (statusCode !== 200) {
    throw new Error(`网络请求错误，状态码${statusCode}`);
  }
  return data;
}

function checkResponseData(responseBody) {
  const {code, msg, data} = responseBody;
  if(code !== 200) {
    throw new Error(`response 请求错误，状态码${code}, 错误提示：${msg}`);
  }
  return data;
}


export default (url, options = {method: 'GET', data: {}}) => {
  const outOptions = {
    url: API_PREFIX + url,
    dataType: 'json',
    ...options
  }

  return Taro.request(outOptions)
    .then(checkStatusCode)
    .then(checkResponseData)
    .then(res => res)
    .catch(err => {
      console.error('has error', err);
    })
}
