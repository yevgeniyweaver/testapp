export const initUsers = async () => {
  let response = await fetch('https://jsonplaceholder.typicode.com/users');
  let getUsers = await response.json();
  return getUsers;
}



