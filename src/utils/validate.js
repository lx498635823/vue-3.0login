/**
 *过滤特殊字符
 */
// 需要添加export将方法暴露出来才能用不然获取不到
export function stripscript(s) {
  var pattern = new RegExp(
    "[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&;—|{ }【】‘；：”“'。，、？]"
  );
  var rs = "";
  for (var i = 0; i < s.length; i++) {
    rs = rs + s.substr(i, 1).replace(pattern, "");
  }
  return rs;
}
//验证邮箱
export function validateEmail(v) {
  let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
  return !reg.test(v) ? false : true;
}

//验证密码
export function validatePass(v) {
  let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
  return !reg.test(v) ? true : false;
}
//验证码
export function validateC(v) {
  let reg = /^[a-z0-9]{6}$/;
  return !reg.test(v) ? true : false;
}
