/**
 * 
 * @param {Number} number the number that will be formatted
 * @returns International(ID) formatted number
 */
 /*@param {Number} digit count of significant digits (behind comma). ignore if you want fixed number*/
const formatNumber = (number/*, digit*/) =>{
  return new Intl.NumberFormat('id-ID').format(number/*.toFixed(digit ?? 0)*/)
}

export default formatNumber;