import React, {
  Component,
  Text,
  TouchableOpacity,
  View,
  ListView,
} from 'react-native';

import styles from './Styles/RootStyle'
import Button from './Components/Button'
import ListItem from './Components/ListItem'

export default class Root extends React.Component {

  constructor(props) {
    super(props);

    // State
    this.state = {
      rows: [123, 146, 2649],
      listTopPadding: 0,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };

    // Bind Functions
    this.pressedNumber = this.pressedNumber.bind(this);
    this.pressedClrAll = this.pressedClrAll.bind(this);
    this.pressedClearLast = this.pressedClearLast.bind(this);
    this.pressedBackspace = this.pressedBackspace.bind(this);
    this.pressedAdd = this.pressedAdd.bind(this);
    this.pressedDoubleZero = this.pressedDoubleZero.bind(this);
    this.pressedDiscount = this.pressedDiscount.bind(this);
  }

  componentDidMount() {
    this.setDataSource();
  }
  resetDataSource() {
    console.log("resetDataSource");
    this.setState({rows: [0]});
    this.setDataSource();
    this.scrollToBottom();
  }

  convertCentsToDollars(cents, symbol = false) {
    let converted_float = (cents/100).toFixed(2);

    if (symbol === true) {
      return "$" + converted_float
    } else {
      return converted_float
    }
  }

  setRows(rows) {
    this.setState({
      rows: rows
    })

    this.setDataSource(true);
  }

  setDataSource(scroll = false) {
    let _this = this
    object_rows = _.map(this.state.rows, function(n) { return {title: _this.convertCentsToDollars(n, true)}; });

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(object_rows)
    })

    if (scroll === true) {
      this.scrollToBottom();
    }
  }
  scrollToBottom() {
    console.log("Scrolling to bottom");
  }

  renderItem(item) {
    return (
      <ListItem item={item} onPress={() => {}} />
    );
  }

  pressedNumber(number) {
    console.log(number);
    // console.log("Pressed number: " + number);
    alert("Pressed number: " + number);
  }

  pressedClrAll() {
    console.log("Pressed Clear All");
  }

  pressedClearLast() {
    console.log("Pressed Clear Last");
  }

  pressedBackspace() {
    console.log("Pressed Backspace");
  }

  pressedAdd() {
    console.log("Pressed Add");
  }

  pressedDoubleZero() {
    console.log("Pressed Double Zero");
  }

  pressedDiscount() {
    console.log("Pressed Discount");
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.toolbar}>
          <Text style={styles.toolbarTitle}>Checkout Helper</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.topContent} ref="listHolder">
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderItem.bind(this)}
              style={styles.listView}
              ref="list"
              onContentSizeChange={(newSize)=>{
              }} />
            <View style={styles.topRight}>
              <Text>This is the top right content</Text>
            </View>
          </View>
          <View style={styles.bottomContent}>

            {/* Top Row */}
            <View style={styles.row}>
              <Button label='7' style={styles.button} onPress={this.pressedNumber} />
              <Button label='8' style={styles.button} onPress={this.pressedNumber} />
              <Button label='9' style={styles.button} onPress={this.pressedNumber} />
              <Button label='Clr All' style={[styles.button, styles.redButton]} onPress={this.pressedClrAll} />
            </View>

            {/* 2nd Row */}
            <View style={styles.row}>
              <Button label='4' style={styles.button} onPress={this.pressedNumber} />
              <Button label='5' style={styles.button} onPress={this.pressedNumber} />
              <Button label='6' style={styles.button} onPress={this.pressedNumber} />
              <Button label='Clr Last' style={[styles.button, styles.redButton]} onPress={this.pressedClearLast} />
            </View>

            {/* 3rd Row */}
            <View style={styles.row}>
              <Button label='1' style={styles.button} onPress={this.pressedNumber} />
              <Button label='2' style={styles.button} onPress={this.pressedNumber} />
              <Button label='3' style={styles.button} onPress={this.pressedNumber} />
              <Button label='Bksp' style={[styles.button, styles.redButton]} onPress={this.pressedBackspace} />
            </View>

            {/* 4th Row */}
            <View style={styles.row}>
              <Button label='0' style={styles.button} onPress={this.pressedNumber} />
              <Button label='.00' style={styles.button} onPress={this.pressedDoubleZero} />
              <Button label='Add' style={[styles.button, styles.greenButton]} onPress={this.pressedAdd} />
              <Button label='Disc' style={[styles.button, styles.blueButton]} onPress={this.pressedDiscount} />
            </View>

          </View>
       </View>
      </View>
    );
  }
}