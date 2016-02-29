import React, {
  Platform,
  Component,
  Text,
  TouchableOpacity,
  View,
  ListView,
} from 'react-native'
import NavigationBar from 'react-native-navbar'
import Swipeout from 'react-native-swipeout'

import styles from './Styles/RootStyle'
import _ from 'lodash'

// My Components
import Button from './Components/Button'
import ListItem from './Components/ListItem'
import DiscountPicker from './Components/DiscountPicker'
import SettingsButton from './Components/SettingsButton'

const ios = Platform.OS === 'ios'
const android = Platform.OS === 'android'

export default class Root extends React.Component {

  constructor(props) {
    super(props)

    // State
    this.state = {
      rows: [{cents: 0, discount:null}],
      listTopPadding: 0,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      title: "Checkout Helper",
    }

    // Bind Functions
    this.pressedNumber = this.pressedNumber.bind(this)
    this.pressedClrAll = this.pressedClrAll.bind(this)
    this.pressedClearLast = this.pressedClearLast.bind(this)
    this.pressedBackspace = this.pressedBackspace.bind(this)
    this.pressedAdd = this.pressedAdd.bind(this)
    this.pressedDoubleZero = this.pressedDoubleZero.bind(this)
    this.pressedDiscount = this.pressedDiscount.bind(this)
  }

  componentDidMount() {
    this.calculateAndSet()
    this.setDataSource()

    // https://github.com/facebook/react-native/issues/953
    requestAnimationFrame(this.measureListHolderComponent.bind(this))
  }

  measureListHolderComponent() {
    this.refs.listHolder.measure((ox, oy, width, height) => {
      // TODO - 48?
      this.setState({listTopPadding: height - 48})
    })
  }

  resetDataSource() {
    console.log("resetDataSource")
    this.setState({
      rows: [this.rowFactory()],
    })
    this.setState(this.calculateObject())
    this.setDataSource()
    this.scrollToBottom()
  }

  convertCentsToDollars(cents, symbol = false) {
    var converted_float = (cents/100).toFixed(2)

    if (symbol === true) {
      return "$" + converted_float
    } else {
      return converted_float
    }
  }

  setRows(rows) {
    this.setState({
      rows: rows,
    })

    this.setDataSource(true)
  }

  setDataSource(scroll = false) {
    var _this = this
    object_rows = _.map(this.state.rows, function(n) { return {title: _this.convertCentsToDollars(n.cents, true)} })

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(object_rows)
    })

    // Calculates everything and sets state.
    this.calculateAndSet()

    if (scroll === true) {
      this.scrollToBottom()
    }
  }

  // TODO - this doesn't work.
  scrollToBottom() {
    console.log("Scrolling to bottom")
    var ul = this.refs.list
    console.log(ul.scrollProperties)
    console.log("Scrolling to:", ul.scrollProperties.contentLength - 48)
    ul.scrollTo({y: ul.scrollProperties.contentLength - 48})
  }

  renderItem(item, sectionID, rowID) {
    var deleteButton = {
      text: 'Delete',
      onPress: () => { console.log(item, sectionID, rowID) },
      type: 'delete',
      backgroundColor: 'red',
      color: 'white',
      /*
        https://github.com/dancormier/react-native-swipeout/issues/42
        The width property doesn't work yet.
       */
      width: 40,
    }

    return (
      <Swipeout
        right={[deleteButton]}
        rowID={rowID}
        sectionID={sectionID}
        autoClose={true}
        close={(rowID == 0) ? true : false}
      >
        <ListItem item={item} onPress={() => {}} />
      </Swipeout>
    )
  }

  rowFactory(cents = 0, discount = null){
    return {
      cents: cents,
      discount: discount,
    }
  }

  calculateObject(){
    var subtotal = this.subtotal()
    var shipping = 0
    var itemDiscounts = 0
    var overallDiscount = 0
    var tax = 0

    return {
      subtotal: subtotal,
      shipping: shipping,
      itemDiscounts: itemDiscounts,
      overallDiscount: overallDiscount,
      tax: tax,
    }
  }

  calculateAndSet() {
    this.setState(this.calculateObject())
  }

  subtotal(){
    var rows = this.state.rows
    var mappedCents = _.map(rows, (n) => {
      return n.cents
    })
    return _.sum(mappedCents)
  }

  // Button Factory
  renderButton(text, additionalStyles=null, onPress=null) {
    var buttonStyles = [styles.button]
    if (additionalStyles !== null) {
      buttonStyles.push(additionalStyles)
    }
    var pressEvent = ((onPress == null) ? this.pressedNumber : onPress )

    return(
      <Button label={text} style={buttonStyles} onPress={pressEvent} />
    )
  }

  pressedNumber(number) {
    console.log("Pressed number: " + number)

    var rows = this.state.rows
    var popped = rows.pop()
    rows.push(this.rowFactory(parseInt(popped.cents + "" + number), popped.discount))
    this.setRows(rows)
  }

  pressedClrAll() {
    console.log("Pressed Clear All")
    this.resetDataSource()
  }

  pressedClearLast() {
    console.log("Pressed Clear Last")

    var rows = this.state.rows
    rows.pop()
    rows.pop()
    rows.push(this.rowFactory())
    this.setRows(rows)
  }

  pressedBackspace() {
    console.log("Pressed Backspace")

    var rows = this.state.rows
    var popped = rows.pop()
    var lastCents = parseInt(popped.cents.toString().slice(0, -1))

    if (isNaN(lastCents)) { lastCents = 0 }
    rows.push(this.rowFactory(lastCents, popped.discount))
    this.setRows(rows)
  }

  pressedAdd() {
    console.log("Pressed Add")

    var rows = this.state.rows
    console.log(rows)
    if (this.canAddNumberToList(rows)) {
      rows.push(this.rowFactory())
      this.setRows(rows)
    }
  }

  // Determines if an operation should succeed or not
  canAddNumberToList() {
    var rows = this.state.rows
    return rows[rows.length-1] != 0
  }

  pressedDoubleZero() {
    console.log("Pressed Double Zero")

    var rows = this.state.rows
    if (this.canAddNumberToList()) {
      var popped = rows.pop()

      rows.push(this.rowFactory(parseInt(popped.cents + "00"), popped.discount))
      rows.push(this.rowFactory())
      this.setRows(rows)
    }
  }

  pressedDiscount() {
    console.log("Pressed Discount")
  }

  render() {
    const leftButtonConfig = {
      title: 'Next',
      handler: () => alert('hello!'),
    }

    return (
      <View style={styles.mainContainer}>
        <NavigationBar
          title={{title: this.state.title}}
          leftButton={
            <SettingsButton
              style={{ marginLeft: 8 }}
              onPress={() => alert('Pressed Settings Button')}/>}
          tintColor="#CCC" />
        <View style={styles.content}>
          <View style={styles.topContent} ref="listHolder">
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderItem.bind(this)}
              style={[styles.listView, {paddingTop: this.state.listTopPadding}]}
              ref="list"
              onContentSizeChange={(newSize)=>{
                this.scrollToBottom()
              }} />
            <View style={styles.topRight}>
              <View style={styles.subtotal}>
                <Text style={styles.medium}>Subtotal:</Text>
                <Text style={styles.largeMonospace}>{this.convertCentsToDollars(this.state.subtotal, true)}</Text>
              </View>
              <View>
                <Text>$4.95 Shipping: $4.95</Text>
              </View>
              <View>
                <Text>Discounts: $4.95</Text>
              </View>
              <View>
                <Text>6.75% Tax: $4.50</Text>
              </View>
              <View style={styles.total}>
                <Text style={styles.medium}>Total:</Text>
                <Text style={styles.largeMonospace}>$12.50</Text>
              </View>
            </View>
          </View>
          <View style={styles.bottomContent}>

            {/* Top Row */}
            <View style={styles.row}>
              { this.renderButton('7') }
              { this.renderButton('8') }
              { this.renderButton('9') }
              { this.renderButton('Clr All', styles.redButton, this.pressedClrAll) }
            </View>

            {/* 2nd Row */}
            <View style={styles.row}>
              { this.renderButton('4') }
              { this.renderButton('5') }
              { this.renderButton('6') }
              { this.renderButton('Clr Last', styles.redButton, this.pressedClearLast) }
            </View>

            {/* 3rd Row */}
            <View style={styles.row}>
              { this.renderButton('1') }
              { this.renderButton('2') }
              { this.renderButton('3') }
              { this.renderButton('Bksp', styles.redButton, this.pressedBackspace) }
            </View>

            {/* 4th Row */}
            <View style={styles.row}>
              { this.renderButton('0') }
              { this.renderButton('.00', null, this.pressedDoubleZero) }
              { this.renderButton('Add', styles.greenButton, this.pressedAdd) }
              { this.renderButton('Disc', styles.blueButton, this.pressedDiscount) }
            </View>

          </View>
       </View>
      </View>
    )
  }
}
