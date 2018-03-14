var Promise = require('.');
setTimeout(() => {
    console.log(0)
}, 0)
let timeout = new Promise((resolve, reject) => {
	setTimeout( () => {
		console.log(1)
		resolve(2)

	}, 1000)
})
timeout.then((v) => {
    console.log(v)
})
.then(() => {
	console.log("v1")
})

Promise.resolve().then(() => {
	console.log("a")
})

console.log("first")
