/* const strategy = {
  ['A'](salary) {
    return 4 * salary
  },
  ['B'](salary) {
    return 4 * salary
  },
  ['C'](salary) {
    return 4 * salary
  },
  ['D'](salary) {
    return 4 * salary
  }
}

const getBound = (level, salary) => strategy[level](salary)

console.log(getBound('A', 500)); */

/* const TV = {
  open() {
    console.log('open the TV');
  },
  close() {
    console.log('close the TV');
  }
}

const AC = {
  open() {
    console.log('open the AC');
  },
  close() {
    console.log('close the AC');
  }
}

const Commad = function(receiver) {
  this.receiver = receiver
}

Commad.prototype.turnOn = function(){
  this.receiver.open()
}

Commad.prototype.turnOff = function() {
  this.receiver.close()
}

const setCommad = function(state,conmmd) {
  if(state === 1) {
    conmmd.turnOn()
  } else if(state === 2) {
    conmmd.turnOff()
  }
}

setCommad(1, new Commad(TV))
setCommad(2, new Commad(TV))

setCommad(1, new Commad(AC))
setCommad(2, new Commad(AC)) */



