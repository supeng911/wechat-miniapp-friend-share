Date.prototype.format = function(format) {
  const o = {
    "M+" : this.getMonth()+1, //month
    "d+" : this.getDate(),    //day
    "h+" : this.getHours(),   //hour
    "m+" : this.getMinutes(), //minute
    "s+" : this.getSeconds(), //second
    "q+" : Math.floor((this.getMonth()+3)/3),  //quarter
    "S" : this.getMilliseconds() //millisecond
  }
  if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
    (this.getFullYear()+"").substr(4 - RegExp.$1.length));
  for(var k in o)if(new RegExp("("+ k +")").test(format))
    format = format.replace(RegExp.$1,
      RegExp.$1.length==1 ? o[k] :
        ("00"+ o[k]).substr((""+ o[k]).length));
  return format;
}

function formatDate(timestamp) {
  let date = new Date();
  return date;
}

export function day(timestamp) {
  const date = formatDate(timestamp);
  return date.format('dd')
}

export function month(timestamp) {
  const date = formatDate(timestamp);
  return date.format('MM')
}

export function enMonth(timestamp) {
  const date = formatDate(timestamp);
  const monthNum = date.format('MM')
  const EnMonthEnum = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.']
  return EnMonthEnum[monthNum - 1] || null
}

export function year(timestamp) {
  const date = formatDate(timestamp);
  return date.format('yyyy')
}

/**
 * 格式化输出时间
 * @param timestamp
 * @returns {*}
 */
export function formatTime(timestamp) {
  if (!timestamp) {
    return null;
  }

  const nowTimestamp = new Date().getTime();

  const subTime = nowTimestamp - timestamp;

  if (subTime < (60 * 1000)) {
    return `${parseInt(subTime / 1000, 10)}秒前`;
  } if (subTime < (60 * 60 * 1000)) {
    return `${parseInt(subTime / 60000, 10)}分钟前`;
  } if (subTime < (24 * 60 * 60 * 1000)) {
    return `${parseInt(subTime / (60 * 60 * 1000), 10)}小时前`;
  } if (subTime < (7 * 24 * 60 * 60 * 1000)) {
    return `${parseInt(subTime / (24 * 60 * 60 * 1000), 10)}天前`;
  }

  const outDate = formatDate(timestamp)
  return outDate.format('yyyy-MM-dd');
}

/**
 * 截取字符串
 *
 * @param {string} src 可能含有html标签的字符串
 * @param {number} 截取长度
 * @param {bool|string=} 截取尾部后缀
 *
 *
 */
export function formatStr(src, length = 20, suffix = '...') {
  if (src === null) {
    return '';
  }

  if (length >= src.length) return src;

  let str = '';
  // final content

  let i = 0;
  // position in source

  let tag = '';
  // current tag contents (used during content reading)

  let c = '';
  // current char (used during content reading)

  let end = 0;
  // ending position of tag (used during content reading)

  let cnt = 0;
  // content size

  let tagTree = []; // open tags

  const len = src.length; // lenght of the source

  const tagStrip = (content) => {
    const index = tag.indexOf(' '); // check for space (ex.: <span a="b">)
    if (index === -1) { // no space (ex.: <span>)
      return content.slice(1, -1);
    }
    return content.slice(1, index);
  };

  while (cnt < length && i < len) {
    c = src.charAt(i); // Read next char
    if (c === '<') {
      // Tag found
      end = src.slice(i).indexOf('>');
      if (end === -1) { // Check for incomplete tag
        return str;
      }
      end += i + 1;
      tag = src.slice(i, end); // Read tag contents
      str += tag; // Append the tag to final content
      if (tag.charAt(1) === '/') {
        // Closing tag
        tagTree = tagTree.slice(0, -1);
      } else {
        // New tag
        tagTree.push(tagStrip(tag));
      }
      i = end; // Move the position to end of the tag
    } else {
      // Append content character and move the position
      str += c;
      i += 1;
      cnt += 1;
    }
  }

  if (tagTree.length > 0) {
    for (i = tagTree.length - 1; i >= 0; i -= 1) {
      str += `</${tagTree[i]}>`;
    }
  }
  // Return final cutted content and put suffix after it
  if (suffix === false) return str;
  return str + ((typeof suffix === 'undefined' || suffix === true) ? '...' : suffix);
}
