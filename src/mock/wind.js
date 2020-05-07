/*
 * @Descripttion: Mock 数据 天气部分
 * @version: 
 * @Date: 2020-04-28 15:35:57
 */
import Mock from 'mockjs'
const Random = Mock.Random;
Mock.mock('/api/weather', () => {
  let list = []

  
  return {
    data: list
  }
})