/*
 * @Descripttion: Mock 数据 天气部分
 * @version: 
 * @Date: 2020-04-28 15:35:57
 */
import Mock from 'mockjs'
const Random = Mock.Random;


// id=WS_airTemp 气温，单位℃
// id=WS_airHum 湿度，单位%

// id=WS_windDir 风向，单位°
// id=WS_windSpd 风速，单位m/s

// id=WS_lightInt 光照，单位Lux
// id=WS_UVI 紫外线，无单位

// id=WS_airPres 气压，单位pa
// id=WS_rainVol 雨量，单位mm


// 左上，气温湿度
// 右上，风速风向
// 左下，日照和紫外线强度
// 右下，气压和降水

Mock.mock('/api/weather', () => {
  let datastreams;
  let count = 0;
  /**
   * 气温，单位℃
   */
  let WS_airTemp = {
    id: 'WS_airTemp',
    datapoints: []
  }
  for(let i = 0; i < 10; i++) {
    WS_airTemp.datapoints.push({
      at: Random.datetime(),
      value: Random.integer(100, 999)
    })
    count++;
  }


  /**
   * 湿度，单位%
   */
  let WS_airHum = {
    id: 'WS_airHum',
    datapoints: []
  }
  for(let i = 0; i < 10; i++) {
    WS_airHum.datapoints.push({
      at: Random.datetime(),
      value: Random.natural(30, 90)
    })
    count++;
  }


  /**
   * 风向，单位°
   */
  let WS_windDir = {
    id: 'WS_windDir',
    datapoints: []
  }
  for(let i = 0; i < 10; i++) {
    WS_windDir.datapoints.push({
      at: Random.datetime(),
      value: Random.natural(0, 360)
    })
    count++;
  }
  // console.log(WS_windDir)


  /**
   * 速，单位m/s
   */
  let WS_windSpd = {
    id: 'WS_windSpd',
    datapoints: []
  }
  for(let i = 0; i < 10; i++) {
    WS_windSpd.datapoints.push({
      at: Random.datetime(),
      value: Random.float(0, 10, 0,2)
    })
    count++;
  }


  /**
   * 光照，单位Lux
   */
  let WS_lightInt = {
    id: 'WS_lightInt',
    datapoints: []
  }
  for(let i = 0; i < 10; i++) {
    WS_lightInt.datapoints.push({
      at: Random.datetime(),
      value: Random.natural(0, 100000)
    })
    count++;
  }


  /**
   * 紫外线，无单位
   */
  let WS_UVI = {
    id: 'WS_UVI',
    datapoints: []
  }
  for(let i = 0; i < 10; i++) {
    WS_UVI.datapoints.push({
      at: Random.datetime(),
      value: Random.natural(0, 100000)
    })
    count++;
  }

  /**
   * 气压，单位pa
   */
  let WS_airPres = {
    id: 'WS_airPres',
    datapoints: []
  }
  for(let i = 0; i < 10; i++) {
    WS_airPres.datapoints.push({
      at: Random.datetime(),
      value: Random.natural(89270, 89350)
    })
    count++;
  }


  /**
   * 雨量，单位mm
   */
  let WS_rainVol = {
    id: 'WS_rainVol',
    datapoints: []
  }
  for(let i = 0; i < 10; i++) {
    WS_rainVol.datapoints.push({
      at: Random.datetime(),
      value: Random.float(0, 300, 0,1)
    })
    count++;
  }

  

  datastreams = [WS_airTemp, WS_airHum, WS_windDir, WS_windSpd, WS_lightInt, WS_UVI, WS_airPres, WS_rainVol]


  return {
    data: {
      count,
      cursor: 
        Random.integer(100, 99999) + '_' +
        Random.integer(100, 99999999) + '_' +
        Random.integer(100, 999999999999),
      datastreams
    }
  }
})