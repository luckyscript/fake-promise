var Promise = require('.');
// setTimeout(() => {
//     console.log(0)
// }, 0)
let timeout = new Promise((resolve, reject) => {
    console.log(1)
    resolve(2)
})
timeout.then((v) => {
    console.log(v)
})
.then(() => {
	console.log("v1")
})
