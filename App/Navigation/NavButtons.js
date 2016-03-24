import React from 'react-native'
import { TouchableOpacity, Image } from 'react-native'

export default {
  settingsButton(navigator) {
    
    return (
      <TouchableOpacity>
        <Image
          source={require('../Images/settings.png')}
          style={{ width: 20, height: 20, }}
          tintColor="#000"
        />
      </TouchableOpacity>
    );
  }
}
