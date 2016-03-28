import React from 'react-native'
import { TouchableOpacity, Image, Text } from 'react-native'
import styles from '../Styles/NavigationStyle'

export default {

  backButton() {
    return (
      <Text style={styles.backButtonText}>Back</Text>
    )
  },

  settingsButton(onPressFunction) {
    return (
      <TouchableOpacity onPress={onPressFunction} style={styles.settingsButton}>
        <Image
          source={require('../Images/settings.png')}
          style={{ width: 20, height: 20}}
          tintColor="#FFF"
        />
      </TouchableOpacity>
    )
  }

}