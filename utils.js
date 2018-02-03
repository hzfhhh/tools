const Utils = {
    /**
   *  [时间戳11]
   * @param  {[type]} time [description]
   */
      formateTime (time, format) {
        var timer = new Date(time)
        // var format = 'yyyy-MM-dd hh:mm:ss'
        var date = {
          'M+': timer.getMonth() + 1,
          'd+': timer.getDate(),
          'h+': timer.getHours(),
          'm+': timer.getMinutes(),
          's+': timer.getSeconds(),
          'q+': Math.floor((timer.getMonth() + 3) / 3),
          'S+': timer.getMilliseconds()
        }
        if (/(y+)/i.test(format)) {
          format = format.replace(RegExp.$1, (timer.getFullYear() + '').substr(4 - RegExp.$1.length))
        }
        for (var k in date) {
          if (new RegExp('(' + k + ')').test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length === 1
                ? date[k] : ('00' + date[k]).substr(('' + date[k]).length))
          }
        }
        return format
      },
      /**
       * @param {string} url, 需要解析的url，必传
       * @param {string} name, 需要获取的参数名，必传
       * @returns
       */
      getUrlParam(url, name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = url.split('?')[1].substr(0).match(reg); //匹配目标参数
        if (r != null) return unescape(r[2]);
        return null; //返回参数值
      },
      // 根据用户ID获取头像地址
      getAvatarUrl: function (kkId) {
        if (kkId) {
          return utils.avatarUrl + '?userId=' + encodeURIComponent(kkId);
        } else {
          return 'assets/css/img/default-user.png';
        }
      }
    // 检测字符串中是否存在中文
    isChina(str) { 
      if(/[\u4e00-\u9fa5]+/.test(str))
      { 
        return false; 
      } 
        return true; 
    }
}
export default Utils
