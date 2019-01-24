import request from '../../utils/request'

export function getFeedList({page=1, size=5}) {
  return request('/test');
}


export function loadMore() {

}
