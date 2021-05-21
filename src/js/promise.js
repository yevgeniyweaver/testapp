onPromise = (e) => {
  e.preventDefault();

  new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
  }).then(function(result) {
    console.log(result);
    if(result === 1){
      //return Promise.reject(102);
      return Promise.resolve(102);
    }
    return result * 2;
  }).then(
    (result) => {
      console.log(result);
      return Promise.resolve('200 Ok');
    },
    (error) => {
      console.log(error);
      if(error === 101){
        return Promise.resolve('201 Ok');
      }else if(error ===102){
        return Promise.resolve('202 Ok');
      }
      return error;
    }
  ).then((result) => {
    console.log(result);
    return result * 2;
  },(error) => {
    console.log(error);
  });

  // new Promise(function(resolve, reject) {
  //     setTimeout(() => resolve(1), 1000); // (*)
  // }).then(function(result) { // (**)
  //     console.log(result); // 1
  //     //return result * 2;
  //     const user = {name:'Vasia'}
  //     user.avatar_url = 'scrin_1.png'
  //     return new Promise(function(resolve, reject) {
  //         setTimeout(() => resolve(user), 1000);
  //     })
  // }).then(githubUser => new Promise(function(resolve, reject) {
  //     console.log(githubUser)
  //     let img = document.createElement('img');
  //     img.src = githubUser.avatar_url;
  //     img.className = "promise-avatar-example";
  //     document.body.append(img);
  //
  //     setTimeout(() => {
  //         img.remove();
  //         resolve(githubUser); // (**)
  //     }, 1500);
  // })).then(function(result) {
  //     console.log(result);
  //     return result * 2;
  // });


  // let inputName =  this.state.name;
  // console.log('state='+inputName)
  //
  // function doSomething() {
  //     return new Promise((resolve, reject) => {
  //         resolve(9) // if (Math.random() > .5) { resolve(1) } else { reject(0) }
  //     })
  // }
  //
  // const promise = doSomething();
  // console.log(promise)
  // promise
  //   // .finally(() => alert("Промис завершён"))
  //   .then(
  //     (result) => {
  //         if( localStorage.getItem('users') ){
  //             if(this.state.name.length < 2) return Promise.reject('name must have more than 1 character');
  //             let users = JSON.parse( localStorage.users )
  //             let issetUser = users.find((item, index, array) => {
  //                 if(item.name == inputName) return item
  //             });
  //             if(issetUser){
  //                 return Promise.reject(issetUser.name+' is exists');
  //             }
  //             let next = {name:inputName}
  //             users.push(next)
  //             localStorage.setItem('users', JSON.stringify(users))
  //             console.log(localStorage.users)
  //         }else{
  //             if(this.state.name.length < 2) return Promise.reject('name must have more than 1 character');
  //             let arr = [];
  //             let first = { name: inputName }
  //             arr.push(first)
  //             console.log(arr)
  //             localStorage.setItem('users', JSON.stringify(arr))
  //             return Promise.resolve(inputName);
  //         }},
  //     (error)=> {
  //       //return Promise.resolve(name);
  //         //return 390;  // console.log('error='+error)
  //         //return error
  //         if(error < 10){
  //             return Promise.reject(404);
  //         }
  //         return Promise.resolve('200 OK');
  //     })
  //   .then((result) =>{console.log('inserted row = '+result);},(error)=>{ console.log("Input Warning: " + error);});
}

// const onPromise = (e) => {
//    
//     function doSomething() {
//         return new Promise((resolve, reject) => {
//             console.log("Промис выполнен");
//             if (Math.random() > .5) {
//                 resolve(1)
//             } else {
//                 reject(0)
//             }
//         })
//     }
//
//     const promise = doSomething();
//     console.log(promise)
//     promise
//       .finally(() => alert("Промис завершён"))
//       .then(
//         (result) =>{
//           if( localStorage.getItem('start') ){ //result/2 > Math.random()
//               return Promise.resolve(localStorage.getItem('start')); // (*)
//           }else{
//               // localStorage.setItem('start','222')
//               return Promise.resolve(3); // (*)
//           }},
//         (error)=>{ 
//           return error
//         })
//       .then((result) =>{console.log(result);},(error)=>{ console.log("ошибкой " + error);});
//
//      Promise.resolve('555').then((res) => console.log(res));
//      console.log('last'); // 1, 2
// }
