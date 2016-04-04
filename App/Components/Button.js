import React, { Text, TouchableOpacity } from 'react-native'
import styles from '../Styles/Components/ButtonStyle'
import LinearGradient from 'react-native-linear-gradient'
import Colors from '../Themes/Colors'

export default class Button extends React.Component {

  constructor (props) {
    super(props)
    this.handlePress = this.handlePress.bind(this)
    this.buttonOpacity = 0.5

    switch(props.gradient) {
      case 'red':
        this.gradient = [Colors.red, Colors.white]
        break
      case 'green':
        this.gradient = [Colors.green, Colors.white]
        break
      case 'blue':
        this.gradient = [Colors.blue, Colors.white]
        break
      default:
        this.gradient = [Colors.steel, Colors.white]
        break
    }
  }

  handlePress () {
    const { onPress, label } = this.props
    onPress && onPress(label)
  }

  render () {
    return (
      <TouchableOpacity activeOpacity={this.buttonOpacity} onPress={this.handlePress} style={styles.touchable}>
        <LinearGradient colors={this.gradient} style={styles.linearGradient}>
          <Text style={styles.buttonText}>{this.props.label}</Text>
        </LinearGradient>
      </TouchableOpacity>
    )
  }
}
