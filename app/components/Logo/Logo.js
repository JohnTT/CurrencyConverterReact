import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, Keyboard, Animated } from 'react-native';

import styles from './styles';

const ANIMATION_DURATION = 250;

class Logo extends Component {
  constructor(props) {
      super(props);

      this.containerImageWidth = new Animated.Value(styles.$largeContainerSize);
      this.imageWidth = new Animated.Value(styles.$largeImageSize);
      this.imageTranslateY = new Animated.Value(0);
  };

  componentDidMount() {
    this.keyboardShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardShow);
    this.keyboardHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardHide);
    console.log('keyboard did mount');
  };

  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
    console.log('keyboard did unmount');
  };

  keyboardShow = () => {
    Animated.timing(this.containerImageWidth, {
      toValue: styles.$smallContainerSize,
      duration: ANIMATION_DURATION,
    }).start();

    Animated.timing(this.imageWidth, {
      toValue: styles.$smallImageSize,
      duration: ANIMATION_DURATION,
    }).start();

    Animated.timing(this.imageTranslateY, {
      toValue: styles.$smallImageTranslateY,
      duration: ANIMATION_DURATION,
    }).start();

  };

  keyboardHide = () => {
    Animated.timing(this.containerImageWidth, {
      toValue: styles.$largeContainerSize,
      duration: ANIMATION_DURATION,
    }).start();

    Animated.timing(this.imageWidth, {
      toValue: styles.$largeImageSize,
      duration: ANIMATION_DURATION,
    }).start();

    Animated.timing(this.imageTranslateY, {
      toValue: styles.$largeImageTranslateY,
      duration: ANIMATION_DURATION,
    }).start();

  };

  render () {
    const containerImageStyle = [
      styles.containerImage,
      { width: this.containerImageWidth, height: this.containerImageWidth },
    ];

    const imageStyle = [
      styles.logo,
      { width: this.imageWidth, transform: [{ translateY: this.imageTranslateY }] },
    ];

    return (
      <View style={styles.container}>
        <Animated.Image resizeMode="contain"
          style={containerImageStyle}
          source={require('./images/background.png')}>
        </Animated.Image>

        <Animated.Image resizeMode="contain"
          style={imageStyle}
          source={require('./images/logo.png')}>
        </Animated.Image>



        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  };
};

export default Logo;
