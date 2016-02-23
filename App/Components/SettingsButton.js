import React, {
  Component,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class SettingsButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Image
          source={require('../../img/settings.png')}
          style={[{ width: 20, height: 20, }, this.props.style]}
          tintColor="#000"
        />
      </TouchableOpacity>
    );
  }
}
