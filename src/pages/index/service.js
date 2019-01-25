import request from '../../utils/request'

export function getFeedList({page=1, size=5}) {
  // FIXME url need fix
  return request('/feed/list', {
    method: 'POST',
    data: {page, size}
  });
}


export function loadMore() {

}
