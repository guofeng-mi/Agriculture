/*
 * @Descripttion: 
 * @version: 
 * @Author: Logic
 * @Date: 2019-12-26 14:01:06
 * @LastEditors: Logic
 * @LastEditTime: 2019-12-26 16:46:10
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-empty": 2, //不允许出现空的代码块
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
