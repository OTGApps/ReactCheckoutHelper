import React, {
  Component,
  Text,
  TouchableOpacity,
} from 'react-native';

export default class CloseButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Text style={{marginLeft: 10}}>Done</Text>
      </TouchableOpacity>
    );
  }
}
