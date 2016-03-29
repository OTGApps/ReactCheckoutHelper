import React, { TouchableOpacity, Image } from 'react-native'
import styles from '../Styles/NavigationStyle'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Colors, Metrics } from '../Themes'

export default {

  backButton (onPressFunction) {
    return (
      <TouchableOpacity onPress={onPressFunction}>
        <Icon name='angle-left'
          size={Metrics.icons.medium}
          color={Colors.snow}
          style={styles.backButton}
        />
      </TouchableOpacity>
    )
  },

  settingsButton (onPressFunction) {
    return (
      <TouchableOpacity onPress={onPressFunction} style={styles.settingsButton}>
        <Image
          source={require('../Images/settings.png')}
          style={{width: 20, height: 20}}
          tintColor='#FFF'
        />
      </TouchableOpacity>
    )
  }
}
