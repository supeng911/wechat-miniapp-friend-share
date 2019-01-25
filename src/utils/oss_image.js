function arrayToStyle(style) {
  if (style instanceof Array) {
    return style[1] ? `/resize,m_fill,w_${style[0]},h_${style[1]}` : `/resize,w_${style[0]}`;
  }

  return style;
}

const aliyunPictureUrl = (pictureModal, style, defaultType = 'user') => {
  // 设置模型
  let modal;

  if (pictureModal) {
    modal = pictureModal;
  } else {
    switch (defaultType) {
      case 'user':
        modal = { path: 'file.vbao100.com/default/user.jpg' };
        break;
      default:
        modal = { domain: 'file.vbao100.com/default/user.jpg' };
    }
  }

  let url = ''

  if (!!modal.style || !!style) {
    url =  `https://${modal.path}?x-oss-process=image${modal.style || ''}${arrayToStyle(style) || ''}`;
  } else {
    url =  `https://${modal.path}`;
  }

  return url;
};


export default aliyunPictureUrl;
