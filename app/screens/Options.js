import React, { Component } from 'react';
import { ScrollView, StatusBar, Platform, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PropTypes } from 'prop-types';

import { ListItem, Separator } from '../components/List';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  handleThemesPress = () => {
    this.props.navigation.navigate('Themes', { title: 'Themes' });
  };

  handleSitePress = () => {
    Linking.openURL("http://fixer.io");
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="light-content"/>
        <ListItem
          text='Themes'
          onPress={this.handleThemesPress}
          customIcon={
            <Ionicons name={ICON_PREFIX+'-arrow-forward'}
              color={ICON_COLOR}
              size={ICON_SIZE}
            />
          }
        />

        <Separator />

        <ListItem
          text='Fixer.io'
          onPress={this.handleSitePress}
          customIcon={
            <Ionicons name={ICON_PREFIX+'-link'}
            color={ICON_COLOR}
            size={ICON_SIZE}
            />
          }
        />
      </ScrollView>
    );
  };
};

export default Options;
