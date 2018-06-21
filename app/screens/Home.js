import React, { Component } from 'react';
import { View, StatusBar, KeyboardAvoidingView } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'CAD';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.94';
const USD_TO_CAD = 1.3307

class Home extends Component {
  constructor() {
    super();
    this.state = {
      basePrice: '100.00',
      quotePrice: '133.07'
    }
  }

  handlePressBaseCurrency = () => {
    console.log('press base');

  };

  handlePressQuoteCurrency = () => {
    console.log('press quote');
    this.setState({quotePrice: String(Number(this.state.basePrice) * USD_TO_CAD)})

  };

  handleTextChange = (text) => {
    console.log('change text', text);
    this.setState({basePrice: text})
  };

  render() {
    return (
      <Container>
          <StatusBar translucent={false} barStyle="light-content"/>

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
          </KeyboardAvoidingView>

      </Container>
    )
  }
}

export default Home;
