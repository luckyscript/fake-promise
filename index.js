class Promise {
    constructor(fn) {
        let _this = this;
        this.status = 'pendding'
        
        const resolve =  (v) => {
            console.log(v)
        }
        const reject = () => {
            console.log('reject');
        }

        if(fn && fn.constructor && fn.constructor.name == 'Function') {
            setTimeout(() => {
                try {
                    fn(resolve, reject)
                } catch (e) {
                    reject(e)
                }
            },0)
        }
    }
    then() {}
}

module.exports = Promise;