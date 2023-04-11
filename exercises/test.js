/**
 * TESTING IN NODE JS
 * You can test your functions/promises here. Make sure to remove the 'export' keyword
 * to be able to run the functions successfully with
 * ```node exercises/test.js```
*/

const usersUrl = [
  {
    "id": 1,
    login: "user1@test.com",
    "isActive": false
  },
  {
    "id": 2,
    login: "user2@test.com",
    "isActive": false
  },
  {
    "id": 3,
    login: "user3@test.com",
    "isActive": true
  },
  {
    "id": 4,
    login: "user4@test.com",
    "isActive": false
  }
]

const getLoginList = (data) => {
  data.forEach((obj) => {
    console.log(obj.login)
    // return obj.login
  })
}

getLoginList(usersUrl)
