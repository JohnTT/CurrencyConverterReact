import React, { Component } from 'react';
import { View, StatusBar, KeyboardAvoidingView } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.94';
const TEMP_CONVERSION_RATE = 0.7994;
const TEMP_CONVERSION_DATE = new Date();

const USD_TO_CAD = TEMP_CONVERSION_RATE;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      basePrice: TEMP_BASE_PRICE,
      quotePrice: TEMP_QUOTE_PRICE,
    }
  }

  handlePressBaseCurrency = () => {
    console.log('press base');

  };

  handlePressQuoteCurrency = () => {
    console.log('press quote');
    this.setState({quotePrice: String(Number(this.state.basePrice) * USD_TO_CAD)})

  };

  handleSwapCurrency = () => {
    console.log('press swap currency');
  }

  handleTextChange = (text) => {
    console.log('change text', text);
    this.setState({basePrice: text})
  };

  handleOptionsPress = () => {
    console.log('handle options press');
  };

  render() {
    return (
      <Container>
          <StatusBar translucent={false} barStyle="light-content"/>
          <Header onPress={this.handleOptionsPress}/>

          <KeyboardAvoidingView behavior="padding">
            <Logo />

            <InputWithButton
              buttonText={TEMP_BASE_CURRENCY}
              onPress={this.handlePressBaseCurrency}
              defaultValue={this.state.basePrice}
              keyboardType="numeric"
              onChangeText={this.handleTextChange}
            />

            <InputWithButton
              buttonText={TEMP_QUOTE_CURRENCY}
              onPress={this.handlePressQuoteCurrency}
              editable={false}
              value={this.state.quotePrice}
            />

            <LastConverted
              base={TEMP_BASE_CURRENCY}
              quote={TEMP_QUOTE_CURRENCY}
              date={TEMP_CONVERSION_DATE}
              conversionRate={TEMP_CONVERSION_RATE}
            />

            <ClearButton
              text='Reverse Currencies'
              onPress={this.handleSwapCurrency}
            />
          </KeyboardAvoidingView>
      </Container>
    )
  }
}

export default Home;
