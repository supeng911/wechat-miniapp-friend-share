
export function abs(num) {
  if(num > 0) {
    return num;
  } else {
    return -num;
  }
}

export function parseRaw(rawStr) {
  let rawObj = null;
  try {
    rawObj = JSON.parse(rawStr);
  } catch (e) {
    rawObj = null;
    console.log('解析 raw 字符串出错');
  }

  return rawObj;
}
