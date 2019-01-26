import request from '../../utils/request'

export function getFeedList({uid=1, offset=0, size = 5}) {
  // FIXME url need fix
  return request('/recommend', {
    method: 'POST',
    data: {uid, offset, size}
  });
}


export function loadMore() {

}
