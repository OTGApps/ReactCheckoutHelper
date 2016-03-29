import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { GiftedForm } from 'react-native-gifted-form'
import styles from '../Styles/SettingsScreenStyle'
import Actions from '../Actions/Creators'

export default class SettingsScreen extends React.Component {

  static propTypes = {
    navigator: PropTypes.object.isRequired,
    dispatch: PropTypes.func
  }

  componentDidMount (props) {
  }

  handleValueChange (values) {
    const { dispatch } = this.props
    dispatch(Actions.saveSettings(values))
  }

  showTaxElements () {
    if (this.refs && this.refs.taxEnabled) {
      return this.refs.taxEnabled.state.value
    } else {
      return this.props.currentSettings.taxEnabled
    }
  }

  showShippingElements () {
    if (this.refs && this.refs.shippingEnabled) {
      return this.refs.shippingEnabled.state.value
    } else {
      return this.props.currentSettings.shippingEnabled
    }
  }

  _renderTax1 () {
    if (this.showTaxElements()) {
      return (
        <GiftedForm.SwitchWidget
          name='taxPreDiscountedPrice'
          title='Tax pre-discounted price?' />
      )
    }
  }

  _renderTaxRate () {
    if (this.showTaxElements()) {
      return (
        <GiftedForm.TextInputWidget
          name='taxRate'
          title='Tax Rate (%):'
          keyboardType='numeric' />
      )
    }
  }

  _renderShipping5 () {
    if (this.showTaxElements() && this.showShippingElements()) {
      return (
        <GiftedForm.SwitchWidget
          name='shippingTaxEnabled'
          title='Tax Shipping?' />
      )
    }
  }

  _flatRateShipping () {
    if (this.showShippingElements()) {
      return (
        <GiftedForm.GroupWidget title='Flat Rate Shipping'>
          <GiftedForm.TextInputWidget
            name='shippingRate'
            title='Flat Rate ($):'
            keyboardType='numeric' />
        </GiftedForm.GroupWidget>
      )
    }
  }

  _percentageShipping () {
    if (this.showShippingElements()) {
      return (
        <GiftedForm.GroupWidget title='Percentage Rate Shipping'>
          <GiftedForm.TextInputWidget
            name='shippingRatePct'
            title='% Rate:'
            keyboardType='numeric' />
          <GiftedForm.TextInputWidget
            name='shippingMaximum'
            title='Maximum ($):'
            keyboardType='numeric' />
          <GiftedForm.TextInputWidget
            name='shippingMinimum'
            title='Minimum ($):'
            keyboardType='numeric' />
        </GiftedForm.GroupWidget>
      )
    }
  }

  render () {
    return (
      <GiftedForm
        formName='setingsForm'
        clearOnClose={false} // delete the values of the form when unmounted
        defaults={this.props.currentSettings}
        style={styles.content}
        onValueChange={this.handleValueChange.bind(this)}>

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
        {this._renderTaxRate()}
        {this._renderShipping5()}
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
          {this._flatRateShipping()}
          {this._percentageShipping()}
        </GiftedForm.GroupWidget>

      </GiftedForm>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentSettings: state.settings
  }
}

export default connect(mapStateToProps)(SettingsScreen)
