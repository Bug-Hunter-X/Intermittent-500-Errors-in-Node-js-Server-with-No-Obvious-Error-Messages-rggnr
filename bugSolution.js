const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello, world!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// Solution: Robust error handling for asynchronous operations
async function myAsyncFunction() {
    try{
        console.log('before');
        await somePromise();
        console.log('after');
    } catch(e){
        console.error('Error in myAsyncFunction:', e);
    }
}

async function somePromise(){
  return new Promise((resolve, reject) =>{
      setTimeout(() => reject(new Error('Something went wrong')), 2000);
  });
}

myAsyncFunction();
console.log('outside');