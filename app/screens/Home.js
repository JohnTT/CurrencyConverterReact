import React, { Component } from 'react';
import { View, StatusBar, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

import { swapCurrency } from '../actions/currencies.js';
import { changeCurrencyAmount } from '../actions/currencies.js';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.94';
const TEMP_CONVERSION_RATE = 0.7994;
const TEMP_CONVERSION_DATE = new Date();

const USD_TO_CAD = TEMP_CONVERSION_RATE;

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    conversionRate: PropTypes.number,
    isFetching: PropTypes.bool,
    lastConvertedDate: PropTypes.object,
  };

  constructor() {
    super();
    this.state = {
      basePrice: TEMP_BASE_PRICE,
      quotePrice: TEMP_QUOTE_PRICE,
    }
  };

  handleOptionsPress = () => {
    this.props.navigation.navigate('Options', { title: 'Options' });
  };

  handlePressBaseCurrency = () => {
    this.props.navigation.navigate('CurrencyList', { title: 'Base Currency',
      type: 'base'});
  };

  handlePressQuoteCurrency = () => {
    this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency',
      type: 'quote'});
  };

  handleSwapCurrency = () => {
    // TODO: Make this work with this.props.dispatch()
    this.props.dispatch(swapCurrency());
  };

  handleTextChange = (amount) => {
    // TODO: Make this work with this.props.dispatch()
    console.log('change amount', amount);
    this.props.dispatch(changeCurrencyAmount(amount));
  };

  render() {

    let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);
    if (this.props.isFetching) {
      quotePrice = '...';
    };

    return (
      <Container>
          <StatusBar translucent={false} barStyle="light-content"/>
          <Header onPress={this.handleOptionsPress}/>

          <KeyboardAvoidingView behavior="padding">
            <Logo />

            <InputWithButton
              buttonText={this.props.baseCurrency}
              onPress={this.handlePressBaseCurrency}
              defaultValue={this.props.amount.toString()}
              keyboardType="numeric"
              onChangeText={this.handleTextChange}
            />

            <InputWithButton
              buttonText={this.props.quoteCurrency}
              onPress={this.handlePressQuoteCurrency}
              editable={false}
              value={quotePrice}
            />

            <LastConverted
              base={this.props.baseCurrency}
              quote={this.props.quoteCurrency}
              date={this.props.lastConvertedDate}
              conversionRate={this.props.conversionRate}
            />

            <ClearButton
              text='Reverse Currencies'
              onPress={this.handleSwapCurrency}
            />
          </KeyboardAvoidingView>
      </Container>
    )
  };
};

const mapStateToProps = (state) => {
  const baseCurrency = state.currencies.baseCurrency;
  const quoteCurrency = state.currencies.quoteCurrency;
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};


  return {
    baseCurrency,
    quoteCurrency,
    amount: state.currencies.amount,
    conversionRate: rates[quoteCurrency],
    isFetching: conversionSelector.isFetching,
    lastConvertedDate: conversionSelector.date ?
      new Date(conversionSelector.date) : new Date(),
  };
};

export default connect(mapStateToProps)(Home);
