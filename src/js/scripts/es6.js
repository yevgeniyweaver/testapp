
function varLet(userOne){
  /*                      var, let, const                         */
  let ve = 'out';
  function test(inner) {
    if (inner) {
      let ve = 'in_2'; // scope whole function
      return ve;
    }
    return ve; // gets redefined on line 4
  }
  // console.log( `if ve not rewrite  = ${test(false)}` ); // undefined
  // console.log( `if ve rewrite in if = ${test(true)}` ); // inner

  /*                       Destructurization                       */

  const { name: userName, phone: userPhone, ...othersUserParams } = userOne;

  function getFullName({ name, username }) {
    return `${name} ${username}`;
  }
  console.log( getFullName(userOne) )
  // function settings() {
  //   return { display: { color: 'red' }, keyboard: { layout: 'querty'} };
  // }
  const { address: { city: userCity, street: userStreet }, company: { name: companyName, catchPhrase: diviz }} = userOne;
  //console.log( userCity, userStreet );
  console.log( `Company name: ${companyName}, phrase: ${diviz} `);

  const defaultUserParams = ({age = 30, country = 'USA'}) => {
    console.log(age, country)
  }
  userOne.age = 40
  userOne.country = 'Ukraine'
 defaultUserParams(userOne)

  function printf(format) {
    var params = [].slice.call(arguments, 1);
    console.log(Array.from(arguments))

    //console.log('params: ', params);
    // console.log('format: ', format);
  }
  printf(2,3,4,5,6)









  let a = 1;
  let b = 2;
  let c = 3;
  [a, b, c] = [c, a, c];
  // console.log(a, b, c); // 2 1
  function createMargin() {
    var left=15, right=15, top=30, bottom=20;
    return { left, right, top, bottom };
  }
  let margin = createMargin()
  let { top, bottom } = margin
  //console.log(top, bottom)

}




export { varLet }
