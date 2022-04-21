console.log("Hi");
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("first timeout");
    const a=5
    resolve(a);
  }, 2000);
}).then((data) => new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("second timeout", data);
          resolve(data+2)
        }, 2000);
    })
).then((data2)=>{
console.log(data2);
})
