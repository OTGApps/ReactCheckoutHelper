import React, {
  Component,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './Styles/RootStyle'

export default class Root extends React.Component {
  pressedNumber(number) {
    console.log("Pressed number: " + number);
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
    let button_opacity = 0.5;

    return (
      <View style={styles.mainContainer}>
        <View style={styles.toolbar}>
          <Text style={styles.toolbarTitle}>Checkout Helper</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.topContent}>
          <View style={styles.topLeft}>
            <Text>This is the top left content</Text>
          </View>
          <View style={styles.topRight}>
            <Text>This is the top right content</Text>
          </View>
          </View>
          <View style={styles.bottomContent}>

            {/* Top Row */}
            <View style={styles.row}>
              <TouchableOpacity style={styles.button} onPress={this.pressedNumber.bind(this, 7)} activeOpacity={button_opacity}>
                <Text style={styles.buttonText}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={this.pressedNumber.bind(this, 8)} activeOpacity={button_opacity}>
                <Text style={styles.buttonText}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={this.pressedNumber.bind(this, 9)} activeOpacity={button_opacity}>
                <Text style={styles.buttonText}>9</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.redButton]} onPress={this.pressedClrAll.bind()} activeOpacity={button_opacity}>
                <Text style={styles.buttonText}>Clr All</Text>
              </TouchableOpacity>
            </View>

            {/* 2nd Row */}
            <View style={styles.row}>
              <TouchableOpacity style={styles.button} onPress={this.pressedNumber.bind(this, 4)} activeOpacity={button_opacity}>
                <Text style={styles.buttonText}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={this.pressedNumber.bind(this, 5)} activeOpacity={button_opacity}>
                <Text style={styles.buttonText}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={this.pressedNumber.bind(this, 6)} activeOpacity={button_opacity}>
                <Text style={styles.buttonText}>6</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.redButton]} onPress={this.pressedClearLast.bind()} activeOpacity={button_opacity}>
                <Text style={styles.buttonText}>Clr Last</Text>
              </TouchableOpacity>
            </View>

            {/* 3rd Row */}
            <View style={styles.row}>
              <TouchableOpacity style={styles.button} onPress={this.pressedNumber.bind(this, 1)} activeOpacity={button_opacity}>
                <Text style={styles.buttonText}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={this.pressedNumber.bind(this, 2)} activeOpacity={button_opacity}>
                <Text style={styles.buttonText}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={this.pressedNumber.bind(this, 3)} activeOpacity={button_opacity}>
                <Text style={styles.buttonText}>3</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.redButton]} onPress={this.pressedBackspace.bind()} activeOpacity={button_opacity}>
                <Text style={styles.buttonText}>Bksp</Text>
              </TouchableOpacity>
            </View>

            {/* 4th Row */}
            <View style={styles.row}>
              <TouchableOpacity style={styles.button} onPress={this.pressedNumber.bind(this, 0)} activeOpacity={button_opacity}>
                <Text style={styles.buttonText}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={this.pressedDoubleZero.bind()} activeOpacity={button_opacity}>
                <Text style={styles.buttonText}>.00</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.greenButton]} onPress={this.pressedAdd.bind()} activeOpacity={button_opacity}>
                <Text style={styles.buttonText}>Add</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.blueButton]} onPress={this.pressedDiscount.bind()} activeOpacity={button_opacity}>
                <Text style={styles.buttonText}>Disc</Text>
              </TouchableOpacity>
            </View>

          </View>
       </View>
      </View>
    );
  }
}
