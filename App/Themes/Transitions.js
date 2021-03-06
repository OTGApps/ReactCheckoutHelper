import React from 'react-native'

// Transitions could be any of those provided by SceneConfigs
// https://github.com/facebook/react-native/blob/master/Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js
// OR
// Something custom that you've created.

const transitions = {
  default: {
    ...React.Navigator.SceneConfigs.HorizontalSwipeJump,
    gestures: null
  },
  modal: {
    ...React.Navigator.SceneConfigs.FloatFromBottom
  }
}

export default transitions
