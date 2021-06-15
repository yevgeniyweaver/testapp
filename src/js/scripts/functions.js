
function isEmpty(obj){
  if (Object.keys(obj).length == 0) {
    return "empty"
  }else{
    return false
  }
}
function isEmptyObject(obj) {
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) { return false; }
  }
  return true;
}

const isSum = (obj, sum) => {
  for(let key in obj){
    if(obj.hasOwnProperty(key)) {
      sum += obj[key]
    }
  }
  return sum
}




let maskObject = {
  nameMask: /^[a-zA-ZäöüÄÖÜß\u0400-\u04FF-\s]*$/i,
  phoneMask: /^[\d]+$/ig,
  emailMask: /[a-z]+@/i,
  siteMask: /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/,
  timeMask: /^\d\d:\d\d:\d\d$/,

}
let maskTestFields = {
  number: `+7(903)-123-45-67`,
  emailTest: `vasia@gmail.com`,
  time: '12:37:34',
  title:`vasia343434`,
  str:`7 88 77 6655 23_a./34 1_wvTTRRasia`,
  str2: `+38(098) 63-45-167black Вася и Петя`,
  str4: `1) это метеочувствительные люди,
                    2) имеющие хронические заболевания
                       a) пожилые
                       b)сердечники,
                    3) гипертоники и гипотоники,
                    4) люди с бессонницей.`
}


export { isEmpty, isEmptyObject, isSum, maskObject, maskTestFields }
