// Create new EasyHTTP Object
const http = new EasyHTTP;

// Make an HTTP GET request
http.get('https://jsonplaceholder.typicode.com/users')
        .then(data => console.log(data))
        .catch(err => console.log(err));

// Make an HTTP Post Request

// Create User data to POST
const data = {
    name: 'John Doe',
    username: 'JohnDoe',
    email: 'johndoe@gmail.com'
}

// Post user data
http.post('https://jsonplaceholder.typicode.com/users', data)
        .then(data => console.log(data))
        .catch(err => console.log(err));

// Make an HTTP PUT Request
// Update user data
const dataUpdate = {
    name: 'John Doe',
    age: 11,
    username: 'JohnDoe',
    email: 'johndoe@gmail.com'
}
// Put user data
http.put('https://jsonplaceholder.typicode.com/users/3', dataUpdate)
    .then(data => console.log(data))
    .catch(err => console.log(err));

// Delete user
http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(err => console.log(err));