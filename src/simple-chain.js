const CustomError = require("../extensions/custom-error");

class ChainMaker {
    constructor() {
        this.arr = []
        this.resultArr = []
    }

    getLength() {
        return this
    }

    addLink(value) {
      if (value === undefined) {
        this.arr.push(' ')
        return this
      }
        this.arr.push(value)
        return this
    }

    removeLink(position) {
      if (this.IsInteger(position) && this.arr[position] !== undefined && position > 0) {
        if (position === 0) {
          this.arr.splice(position, 1)
          return this
        } else {
          this.arr.splice(position - 1, 1)
          return this
        }
      }
      this.arr = []
      this.resultArr = []
      throw new Error('THROWN')
    }

    reverseChain() {
      this.arr.reverse()
      return this
    }

    finishChain() {
        this.clue()
        let result = this.resultArr.join('')
        this.arr = []
        this.resultArr = []
        return result
    }

    clue() {
      if (this.arr.length === 1) {
        this.resultArr.push(`( ${this.arr[0]} )`)
      } else {

        for (let i = 0; i < this.arr.length; i++) {
          if (i === 0) {
            this.resultArr.push(`( ${this.arr[i]} )~`)
          } else if (i === this.arr.length - 1) {
            this.resultArr.push(`~( ${this.arr[i]} )`)
          } else {
            this.resultArr.push(`~( ${this.arr[i]} )~`)
          }
        }
      }
    }

    IsInteger(value) {
        return (value ^ 0 ) === value;
    }
}

let chainMaker = new ChainMaker()

module.exports = chainMaker;

