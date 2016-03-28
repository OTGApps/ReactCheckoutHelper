import { Transitions } from '../Themes/'

export default new class Routes {

  // Here are the "Containers" in our app (e.g. Screens).
  //
  // These routes are implemented as getter functions
  // because I like the simple calling notation, but
  // they're lazily evaluated to prevent recursion
  // when the screens themselves use this Routes file.

  get MainScreen () {
    return {
      title: 'Checkout Helper',
      component: require('../Containers/MainScreen').default,
      rightButton: 'SETTINGS'
    }
  }

  get SettingsScreen () {
    return {
      title: 'Settings',
      component: require('../Containers/SettingsScreen').default,
      leftButton: 'BACK'
    }
  }

  get AllComponentsScreen () {
    return {
      title: 'Welcome',
      component: require('../Containers/AllComponentsScreen').default
    }
  }

  get LoginScreen () {
    return {
      title: 'Login',
      component: require('../Containers/LoginScreen').default,
      customConfiguration: Transitions.modal
    }
  }

}
