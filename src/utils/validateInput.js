/**
 * 
 * @param {Element} element 
 * @returns {String, String} fieldName, errorMsg
 */
const validateInput = (element) =>{
  const {name, value} = element.target
  const regexpSqli = /\b(ALTER|CREATE|DELETE|DROP|EXEC(UTE){0,1}|INSERT( +INTO){0,1}|MERGE|SELECT|UPDATE|UNION( +ALL){0,1})\b/g
  const regexpHtml = /<(\/*?)(?!(em|p|br\s*\/|strong))\w+?.+?>/gim

  if(regexpHtml.test(value)){
    console.log('Memasukkan tag HTML dilarang!')
    return {fieldName: name, errorMsg: 'Memasukkan tag HTML dilarang!'}
  }
  if(regexpSqli.test(value)){
    console.log('Memasukkan SQLi query dilarang!')
    return {fieldName: name, errorMsg: 'Memasukkan SQLi query dilarang!'}
  }
  return {fieldName: name, errorMsg: ''}
}
/**
 * 
 * @param {Element} element 
 * @returns {String, String} fieldName, errorMsg
 */
export default validateInput;