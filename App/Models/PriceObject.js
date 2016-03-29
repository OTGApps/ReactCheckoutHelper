export default class PriceObject extends Object {

  constructor (cents = 0, discount = 0) {
    super()
    this.cents = cents
    this.discount = discount
  }

  get cents () {
    this.cents
  }

  get discount () {
    this.discount
  }

  dollars (symbol = false) {
    let converted_float = (this.cents / 100).toFixed(2)

    if (symbol === true) {
      return '$' + converted_float
    } else {
      return converted_float
    }
  }

  discountedDollars () {

  }

}
