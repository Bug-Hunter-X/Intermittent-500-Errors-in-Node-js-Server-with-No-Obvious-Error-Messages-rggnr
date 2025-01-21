const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello, world!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// Uncommon bug: Inconsistent use of async/await
//The following code demonstrates an inconsistent use of async/await, which is an uncommon but tricky error
async function myAsyncFunction() {
    // some asynchronous operations
  console.log('before');
  await somePromise();
  console.log('after');
}

async function somePromise(){
  return new Promise(resolve =>{
      setTimeout(() => resolve(), 2000);
  });
}

myAsyncFunction();
console.log('outside');