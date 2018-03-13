class Promise {
  constructor(fn) {
    var _self = this;
    this.state = 'pending';
    this.value = null;
    const resolve = (value) => {
      if (_self.state == 'pending') {
        _self.state = 'fulfilled'
        _self.value = value;
      }
    }
    const reject = (value) => {
      if (_self.state == 'pending') {
        _self.state = 'rejected';
        _self.value = value
      }
    }
    if(fn) {
      fn(resolve, reject);
    }
  }

  then(onResolve, onReject) {
    return new Promise((resolve, reject) => {
      let onResolveFn = (val) => {
        let ret = onResolve ? onResolve(val) : val;
        resolve(ret);
      }
      let onRejectFn = (val) => {
        let ret = onReject ? onReject(val): val;
        reject(ret)
      }
      console.log(this)
      if(this.state == 'fulfilled') {
        onResolveFn(this.value);
      }
      if(this.state == 'rejected') {
        onRejectFn(this.value);
      }
    })
  }
}

module.exports = Promise;