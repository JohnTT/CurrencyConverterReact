import React, { PropTypes } from 'react';
import { View } from 'react-native';
import styles from './styles';

const Container = ({ children }) => (
    <View style={styles.container}>
        {children}
    </View>
);


export default Container;