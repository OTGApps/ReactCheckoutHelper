import React, { Component, Text, TouchableOpacity } from 'react-native'
import styles from '../Styles/Components/ButtonStyle'

export default class Button extends React.Component {

  constructor (props) {
    super(props)
    this.handlePress = this.handlePress.bind(this);
    this.buttonOpacity = 0.5;
  }

  handlePress () {
    const { onPress, label } = this.props
    onPress && onPress(label)
  }

  render(){
    return(
      <TouchableOpacity style={this.props.style} activeOpacity={this.buttonOpacity}  onPress={this.handlePress}>
        <Text style={styles.buttonText}>{this.props.label}</Text>
      </TouchableOpacity>
    )
  }
}
