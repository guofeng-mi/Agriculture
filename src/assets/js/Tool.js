/*
 * @Descripttion: 
 * @version: 
 * @Date: 2020-05-06 14:37:58
 */
export default {
  
  /**
   * @method 日期格式化
   * @date 必传 日期对象 new Date('2020-4-9 9:40:40')
   * @fmt 可传 日期格式
    * YYYY-mm-dd => 1983-01-29
    * YYYY-mm-dd H-M-S => 2020-4-9 9:40:40
   */
  formatDate(date, fmt = 'YYYY-mm-dd') { 
    if(!date) {
      console.log('日期或日期格式错误');
      return;
    }


    let ret;
    const opt = {
      "Y+": date.getFullYear().toString(),        // 年
      "m+": (date.getMonth() + 1).toString(),     // 月
      "d+": date.getDate().toString(),            // 日
      "H+": date.getHours().toString(),           // 时
      "M+": date.getMinutes().toString(),         // 分
      "S+": date.getSeconds().toString()          // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    
    for (let k in opt) {
      ret = new RegExp("(" + k + ")").exec(fmt);
      if (ret) {
          fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
      }
    }
    return fmt;
  } 
}