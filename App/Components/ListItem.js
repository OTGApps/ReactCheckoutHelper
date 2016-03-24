import React, { View, Text, TouchableOpacity } from 'react-native'
import styles from '../Styles/Components/ListItemStyle'

export default class Button extends React.Component {

  constructor (props) {
    super(props)
    // this.handlePress = this.handlePress.bind(this);
    // this.buttonOpacity = 0.5;
  }

  handlePress () {
    // const { onPress, label } = this.props
    // onPress && onPress(label)
  }

  render(){
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.li}>
          <Text style={styles.liText}>{this.props.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
