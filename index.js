class Promise {
  constructor(fn) {
    var _self = this;
    this.state = 'pending';
    this.value = null;
    this.callback = {
      fulfilled: [],
      rejected: []
    };
    const resolve = (value) => {
      if (_self.state == 'pending') {
        _self.state = 'fulfilled'
        _self.value = value;
        _self.callback.fulfilled.length && _self.callback.fulfilled.forEach( v=> v(value));
      }
    }
    const reject = (value) => {
      if (_self.state == 'pending') {
        _self.state = 'rejected';
        _self.value = value;
        _self.callback.rejected.length && _self.callback.rejected.forEach( v => v(value));
      }
    }
    if(fn) {
      process.nextTick(() => fn(resolve, reject))
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
        resolve(ret);
      }
      // this.next.push(onResolveFn);
      if(this.state == 'fulfilled') {
        onResolveFn(this.value);
      }
      if(this.state == 'rejected') {
        onRejectFn(this.value);
      }
      if(this.state == 'pending') {
        this.callback.fulfilled.push(onResolveFn);
        this.callback.rejected.push(onRejectFn);
      }
    })
  }

  static resolve(value) {
    return new Promise(resolve => {
      resolve(value)
    });
  }
}

module.exports = Promise;
