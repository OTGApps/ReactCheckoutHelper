import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'

export default StyleSheet.create({
  touchable: {
    flex: 1,
    borderRadius: 5,
    borderWidth: 1,
    margin: 2,
    borderColor: Colors.silver
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 5
  },
  buttonText: {
    textAlign: 'center'
  }
})
