class Promise {
  constructor(fn) {
    var _self = this;
    this.state = 'pending';
    this.value = null;
    this.next = [];
    const resolve = (value) => {
      if (_self.state == 'pending') {
        _self.state = 'fulfilled'
        _self.value = value;
        console.log("hahah", _self.next)
        _self.next.forEach(v => {
          console.log(v)
          v(value);
        })
      }
    }
    const reject = () => {
      
    }
    if(fn) {
      fn(resolve, reject);
    }
  }

  then(onResolve, onReject) {
    return new Promise((resolve, reject) => {
      let onResolveFn = (value) => {
        let ret = onResolve ? onResolve(val) : val;
        resolve(ret);
        console.log("a")
      }
      this.next.push(onResolveFn);
      onResolve(this.value)
    })
  }
}

module.exports = Promise;