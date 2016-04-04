// An All Components Screen is a great way to dev and quick-test components
import React, { Platform, ListView, View, PropTypes } from 'react-native'
// import { connect } from 'react-redux'
import styles from '../Styles/MainScreenStyle'
import Routes from '../Navigation/Routes'
import InfoView from '../Components/InfoView'

import Swipeout from 'react-native-swipeout'
import _ from 'lodash'

// My Models
import PriceObject from '../Models/PriceObject'

// My Components
import Button from '../Components/Button'
import ListItem from '../Components/ListItem'
// import DiscountPicker from '../Components/DiscountPicker'

const ios = Platform.OS === 'ios'
const android = Platform.OS === 'android'

export default class MainScreen extends React.Component {

  static propTypes = {
    navigator: PropTypes.object.isRequired,
    dispatch: PropTypes.func
  }

  constructor (props) {
    super(props)
    this.state = {
      rows: [this.rowFactory()],
      listTopPadding: 0,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    }

    // Bind Functions
    this.pressedButton = this.pressedButton.bind(this)
    this.pressedClrAll = this.pressedClrAll.bind(this)
    this.pressedClearLast = this.pressedClearLast.bind(this)
    this.pressedBackspace = this.pressedBackspace.bind(this)
    this.pressedAdd = this.pressedAdd.bind(this)
    this.pressedDoubleZero = this.pressedDoubleZero.bind(this)
    this.pressedDiscount = this.pressedDiscount.bind(this)
  }

  componentWillMount () {
    this.props.navigator.state.tapSettings = this.tapSettings.bind(this)
  }

  tapSettings () {
    const { navigator } = this.props
    const route = Routes.SettingsScreen
    navigator.push(route)
  }

  componentDidMount () {
    this.setDataSource()

    // https://github.com/facebook/react-native/issues/953
    requestAnimationFrame(this.measureListHolderComponent.bind(this))
  }

  measureListHolderComponent () {
    this.refs.listHolder.measure((ox, oy, width, height) => {
      // TODO - 48?
      this.setState({listTopPadding: height - 48})
    })
  }

  resetDataSource () {
    console.log('resetDataSource')
    this.setState({
      rows: [this.rowFactory()]
    })
    this.setState(this.calculateObject())
    this.setDataSource()
    this.scrollToBottom()
  }

  calculateObject () {
    let subtotal = this.subtotal()
    let shipping = 0
    let itemDiscounts = 0
    let overallDiscount = 0
    let tax = 0

    return {
      subtotal: subtotal,
      shipping: shipping,
      itemDiscounts: itemDiscounts,
      overallDiscount: overallDiscount,
      tax: tax,
      total: subtotal + shipping - itemDiscounts - overallDiscount + tax
    }
  }

  calculateAndSet () {
    this.setState(this.calculateObject())
  }

  subtotal () {
    let rows = this.state.rows
    let mappedCents = _.map(rows, (n) => {
      return n.cents
    })
    console.log('Subtotal: ', _.sum(mappedCents))
    return _.sum(mappedCents)
  }

  pressedButton (button) {
    console.log('Pressed Button: ', button)

    let rows = this.state.rows
    let popped = rows.pop()
    rows.push(this.rowFactory(parseInt(popped.cents + '' + button), popped.discount))
    this.setRows(rows)
  }

  pressedClrAll () {
    console.log('Pressed Clear All')
    this.resetDataSource()
  }

  pressedClearLast () {
    console.log('Pressed Clear Last')

    let rows = this.state.rows
    rows.pop()
    rows.pop()
    rows.push(this.rowFactory())
    this.setRows(rows)
  }

  pressedBackspace () {
    console.log('Pressed Backspace')

    let rows = this.state.rows
    let popped = rows.pop()
    let lastCents = parseInt(popped.cents.toString().slice(0, -1))

    if (isNaN(lastCents)) { lastCents = 0 }
    rows.push(this.rowFactory(lastCents, popped.discount))
    this.setRows(rows)
  }

  pressedAdd () {
    console.log('Pressed Add')

    let rows = this.state.rows
    console.log(rows)
    if (this.canAddNumberToList(rows)) {
      rows.push(this.rowFactory())
      this.setRows(rows)
    }
  }

  // Determines if an operation should succeed or not
  canAddNumberToList () {
    let rows = this.state.rows
    return rows[rows.length - 1] !== 0
  }

  pressedDoubleZero () {
    console.log('Pressed Double Zero')

    let rows = this.state.rows
    if (this.canAddNumberToList()) {
      let popped = rows.pop()

      rows.push(this.rowFactory(parseInt(popped.cents + '00'), popped.discount))
      rows.push(this.rowFactory())
      this.setRows(rows)
    }
  }

  pressedDiscount () {
    console.log('Pressed Discount')
  }

  // TODO - this doesn't work.
  scrollToBottom () {
    console.log('Scrolling to bottom')
    let ul = this.refs.list
    console.log(ul.scrollProperties)
    console.log('Scrolling to:', ul.scrollProperties.contentLength - 48)
    ul.scrollTo({y: ul.scrollProperties.contentLength - 48})
  }

  setRows (rows) {
    this.setState({
      rows: rows
    })

    this.setDataSource(true)
  }

  setDataSource (scroll = false) {
    let _this = this
    let object_rows = _.map(this.state.rows, function (n) {
      return {
        title: _this.convertCentsToDollars(n.cents, true)
      }
    })

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(object_rows)
    })

    // Calculates everything and sets state.
    // this.calculateAndSet()

    // if (scroll === true) {
    //   this.scrollToBottom()
    // }
  }

  renderItem (item, sectionID, rowID) {
    let deleteButton = {
      text: 'Delete',
      onPress: () => { console.log(item, sectionID, rowID) },
      type: 'delete',
      backgroundColor: 'red',
      color: 'white',
      /*
        https://github.com/dancormier/react-native-swipeout/issues/42
        The width property doesn't work yet.
       */
      width: 40
    }

    // TODO - don't render the swipeable row on the bottom

    return (
      <Swipeout
        right={[deleteButton]}
        rowID={rowID}
        sectionID={sectionID}
        autoClose={true}
        close={rowID === 0}
      >
        <ListItem item={item} onPress={() => {}} />
      </Swipeout>
    )
  }

  rowFactory (cents = 0, discount = null) {
    return new PriceObject(cents, discount)
  }

  convertCentsToDollars (cents, symbol = false) {
    let converted_float = (cents / 100).toFixed(2)

    if (symbol === true) {
      return '$' + converted_float
    } else {
      return converted_float
    }
  }

  // Button Factory
  renderButton (text, gradient = null, onPress = null) {
    const pressEvent = ((onPress == null) ? this.pressedButton : onPress)

    return (
      <Button label={text} style={styles.button} onPress={pressEvent} gradient={gradient} />
    )
  }

  render () {
    return (
      <View style={styles.content}>
        <View style={styles.topContent} ref='listHolder'>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderItem.bind(this)}
            style={[styles.listView, {paddingTop: this.state.listTopPadding}]}
            ref='list'
            onContentSizeChange={(newSize) => {
              this.scrollToBottom()
            }} />
          <InfoView rows={this.state.rows} />
        </View>
        <View style={styles.bottomContent}>

          {/* Top Row */}
          <View style={styles.row}>
            {this.renderButton('7')}
            {this.renderButton('8')}
            {this.renderButton('9')}
            {this.renderButton('Clr All', 'red', this.pressedClrAll)}
          </View>

          {/* 2nd Row */}
          <View style={styles.row}>
            {this.renderButton('4')}
            {this.renderButton('5')}
            {this.renderButton('6')}
            {this.renderButton('Clr Last', 'red', this.pressedClearLast)}
          </View>

          {/* 3rd Row */}
          <View style={styles.row}>
            {this.renderButton('1')}
            {this.renderButton('2')}
            {this.renderButton('3')}
            {this.renderButton('Bksp', 'red', this.pressedBackspace)}
          </View>

          {/* 4th Row */}
          <View style={styles.row}>
            {this.renderButton('0')}
            {this.renderButton('.00', null, this.pressedDoubleZero)}
            {this.renderButton('Add', 'green', this.pressedAdd)}
            {this.renderButton('Disc', 'blue', this.pressedDiscount)}
          </View>

        </View>
      </View>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     // loggedIn: state.login.username !== null,
//     // temperature: state.weather.temperature,
//     // city: state.weather.city
//   }
// }
//
// export default connect(mapStateToProps)(MainScreen)
