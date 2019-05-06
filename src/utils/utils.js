/**
 * 生产 N 位 随机数
 * @param n 几位
 */
export const getMath = (n) => {
  let rnd = ''
  for (let i = 0; i < n; i++) {
    rnd += Math.floor(Math.random() * 10)
  }
  return rnd
}
