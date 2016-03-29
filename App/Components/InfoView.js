import React, { Component, View, Text } from 'react-native';
import styles from '../Styles/Components/InfoViewStyle'
// import { connect } from 'react-redux'

export default class InfoView extends Component {
  constructor (props) {
    super(props)

    this.state = {
      rows: props.rows
    }
  }

  static propTypes = {
    rows: React.PropTypes.array,
  }

  componentWillMount() {
    this.calculate()
  }

  componentWillReceiveProps(nextProps) {
    this.calculate()
  }

  rows () {
    let comittedRows = this.state.rows.slice(0)
    comittedRows.pop()
    return comittedRows
  }

  calculate () {
    let subtotal = this.subtotal()
    let total = subtotal

    console.log("subtotal calculated:", this.subtotal())
    console.log("var subtitla:", subtotal);

    this.setState({
      subtotal: subtotal,
      total: total,
    })
  }

  subtotal(){
    let mappedCents = _.map(this.rows(), (n) => {
      return n.cents
    })
    console.log("Subtotal: ", _.sum(mappedCents));
    return _.sum(mappedCents)
  }

  centsToDollars(cents, symbol = false) {
    let converted_float = (cents/100).toFixed(2)

    if (symbol === true) {
      return "$" + converted_float
    } else {
      return converted_float
    }
  }

  render() {
    console.log("state:" ,this.state);

    return (
      // <View style={styles.topRight}>
      //   <View style={styles.subtotal}>
      //     <Text style={styles.medium}>Subtotal:</Text>
      //     <Text style={styles.largeMonospace}>{this.convertCentsToDollars(this.state.subtotal, true)}</Text>
      //   </View>
      //   <View>
      //     <Text>$4.95 Shipping: $4.95</Text>
      //   </View>
      //   <View>
      //     <Text>Discounts: $4.95</Text>
      //   </View>
      //   <View>
      //     <Text>6.75% Tax: $4.50</Text>
      //   </View>
      //   <View style={styles.total}>
      //     <Text style={styles.medium}>Total:</Text>
      //     <Text style={styles.largeMonospace}>{this.convertCentsToDollars(this.state.total, true)}</Text>
      //   </View>
      // </View>


      <View style={styles.topRight}>
        <View style={styles.subtotal}>
          <Text style={styles.medium}>Subtotal:</Text>
          <Text style={styles.largeMonospace}>{this.centsToDollars(this.state.subtotal || 0, true)}</Text>
        </View>
        <View>
          <Text style={styles.small}>$4.95 Shipping: $4.95</Text>
        </View>
        <View>
          <Text style={styles.small}>Discounts: $4.95</Text>
        </View>
        <View>
          <Text style={styles.small}>6.75% Tax: $4.50</Text>
        </View>
        <View style={styles.total}>
          <Text style={styles.medium}>Total:</Text>
          <Text style={styles.largeMonospace}>{this.centsToDollars(this.state.total || 0, true)}</Text>
        </View>
      </View>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     settings: state.settings
//   }
// }
//
// export default connect(mapStateToProps)(InfoView)
