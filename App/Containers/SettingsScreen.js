import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { GiftedForm, GiftedFormManager } from 'react-native-gifted-form'
import Store from 'react-native-simple-store'
import Routes from '../Navigation/Routes'
import styles from '../Styles/SettingsScreenStyle'

export default class SettingsScreen extends React.Component {

  static propTypes = {
    navigator: PropTypes.object.isRequired,
    dispatch: PropTypes.func,
  }

  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount(props) {
    console.log("giftedform mounted!")
  }

  defaults() {
    return {
      taxEnabled: true,
      taxRate: '6.75',
      shippingEnabled: true,
      shippingRate: '4.00'
    }
  }

  tapBack() {
    console.log("tapped back");
    const { navigator } = this.props
    if (navigator.state.stable) {
      navigator.pop()
    }
  }

  showTaxElements(){
    if(this.refs && this.refs.taxEnabled) {
      return this.refs.taxEnabled.state.value
    } else{
      return this.defaults().taxEnabled
    }
  }

  showShippingElements(){
    if(this.refs && this.refs.shippingEnabled) {
      return this.refs.shippingEnabled.state.value
    } else{
      return this.defaults().shippingEnabled
    }
  }

  _renderTax1(){
    if (this.showTaxElements()) {
      return (
        <GiftedForm.SwitchWidget
          name='taxPreDiscountedPrice'
          title='Tax pre-discounted price?' />
      )
    }
  }

  _renderTax2() {
    if (this.showTaxElements()) {
      return (
        <GiftedForm.TextInputWidget
          name='taxRate'
          title='Tax Rate (%):'
          keyboardType='numeric' />
      )
    }
  }

  _renderShipping1() {
    if (this.showShippingElements()) {
      return (
        <GiftedForm.TextInputWidget
          name='shippingRate'
          title='Flat Rate ($):'
          keyboardType='numeric' />
      )
    }
  }

  _renderShipping2() {
    if (this.showShippingElements()) {
      return (
        <GiftedForm.TextInputWidget
          name='shippingRatePct'
          title='% Rate:'
          keyboardType='numeric' />
      )
    }
  }

  _renderShipping3() {
    if (this.showShippingElements()) {
      return (
        <GiftedForm.TextInputWidget
          name='shippingNotToExceed'
          title='Not to exceed:'
          keyboardType='numeric' />
      )
    }
  }

  _renderShipping4() {
    if (this.showShippingElements()) {
      return (
        <GiftedForm.TextInputWidget
          name='shippingMinimum'
          title='Minimum:'
          keyboardType='numeric' />
      )
    }
  }

  _renderShipping5() {
    if (this.showShippingElements()) {
      return (
        <GiftedForm.SwitchWidget
          name='shippingTaxEnabled'
          title='Tax Shipping?' />
      )
    }
  }

  render() {
    return (
      <GiftedForm
        formName='setingsForm'
        clearOnClose={false} // delete the values of the form when unmounted
        defaults={this.defaults()}
        style={styles.content}>

        <GiftedForm.SeparatorWidget />
        <GiftedForm.GroupWidget title='Tax'>
          <GiftedForm.SwitchWidget
            name='taxEnabled'
            title='Charge Tax?'
            ref='taxEnabled'
            onChange={(value) => {
              this.forceUpdate()
            }}
          />
        {this._renderTax1()}
        {this._renderTax2()}
        </GiftedForm.GroupWidget>

        <GiftedForm.SeparatorWidget />
        <GiftedForm.GroupWidget title='Shipping'>
          <GiftedForm.SwitchWidget
            name='shippingEnabled'
            title='Charge Shipping?'
            ref='shippingEnabled'
            onChange={(value) => {
              this.forceUpdate()
            }}
          />
          {this._renderShipping1()}
          {this._renderShipping2()}
          {this._renderShipping3()}
          {this._renderShipping4()}
          {this._renderShipping5()}
        </GiftedForm.GroupWidget>

      </GiftedForm>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // loggedIn: state.login.username !== null,
    // temperature: state.weather.temperature,
    // city: state.weather.city
  }
}

export default connect(mapStateToProps)(SettingsScreen)
