
/* 	
  职责链模式的定义是:
  1、使多个对象都有机会处理请求，从而避免请求的发送者和接收者之间的耦合关系，
      将这些对象连成一条链，并沿着这条链传递该请求，直到有一个对象处理它为止。
  2、职责链模式的名字非常形象，一系列可能会处理请求的对象被连接成一条链，
      请求在这些对 象之间依次传递，直到遇到一个可以处理它的对象，我们把这些对象称为链中的节点。
 */
  
  // ############例子，条件分支极其复杂######################
  var order = function (orderType, pay, stock) {
    if (orderType === 1) { // 500 元定金购买模式
      if (pay === true) { // 已支付定金
        console.log('500 元定金预购, 得到100 优惠券');
      } else { // 未支付定金，降级到普通购买模式
        if (stock > 0) { // 用于普通购买的手机还有库存
          console.log('普通购买, 无优惠券');

        } else {
          console.log('手机库存不足');
        }
      }
    } else if (orderType === 2) { // 200 元定金购买模式
      if (pay === true) {
        console.log('200 元定金预购, 得到50 优惠券');
      } else {
        if (stock > 0) {
          console.log('普通购买, 无优惠券');
        } else {
          console.log('手机库存不足');
        }
      }
    } else if (orderType === 3) {
      if (stock > 0) {
        console.log('普通购买, 无优惠券');
      } else {
        console.log('手机库存不足');
      }
    }
  };
  order(1, true, 500); // 输出： 500 元定金预购, 得到100 优惠券


  // ############用责任链模式进行改造#########################
  var order500 = function (orderType, pay, stock) {
    if (orderType === 1 && pay === true) {
      console.log('500 元定金预购，得到100 优惠券');
    } else {
      return 'nextSuccessor'; // 我不知道下一个节点是谁，反正把请求往后面传递
    }
  };

  var order200 = function (orderType, pay, stock) {
    if (orderType === 2 && pay === true) {
      console.log('200 元定金预购，得到50 优惠券');
    } else {
      return 'nextSuccessor'; // 我不知道下一个节点是谁，反正把请求往后面传递
    }
  };

  var orderNormal = function (orderType, pay, stock) {
    if (stock > 0) {
      console.log('普通购买，无优惠券');
    } else {
      console.log('手机库存不足');
    }
  };

  // Chain.prototype.setNextSuccessor 指定在链中的下一个节点
  // Chain.prototype.passRequest 传递请求给某个节点
  // 节点类
  var Chain = function (fn) {
    this.fn = fn;
    this.successor = null;
  };

  Chain.prototype.setNextSuccessor = function (successor) {
    return this.successor = successor;
  };

  Chain.prototype.passRequest = function () {
    // 先执行再传递
    var ret = this.fn.apply(this, arguments);
    if (ret === 'nextSuccessor') {
      return this.successor && this.successor.passRequest.apply(this.successor, arguments);
    }
    return ret;
  };

  var chainOrder500 = new Chain(order500);
  var chainOrder200 = new Chain(order200);
  var chainOrderNormal = new Chain(orderNormal);

  chainOrder500.setNextSuccessor(chainOrder200);
  chainOrder200.setNextSuccessor(chainOrderNormal);
  chainOrder500.passRequest(1, true, 500); // 输出：500 元定金预购，得到100 优惠券
  chainOrder500.passRequest(2, true, 500); // 输出：200 元定金预购，得到50 优惠券
  chainOrder500.passRequest(3, true, 500); // 输出：普通购买，无优惠券
  chainOrder500.passRequest(1, false, 0);  // 输出：手机库存不足

  Function.prototype.after = function (fn) {
    var self = this;
    return function () {
      var ret = self.apply(this, arguments);
      if (ret === 'nextSuccessor') {
        return fn.apply(this, arguments);
      }
      return ret;
    }
  };

  var order = order500yuan.after(order200yuan).after(orderNormal);
  order(1, true, 500);        // 输出：500 元定金预购，得到100 优惠券
  order(2, true, 500);        // 输出：200 元定金预购，得到50 优惠券
  order(1, false, 500);       // 输出：普通购买，无优惠券

