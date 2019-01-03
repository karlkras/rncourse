import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const listItem  = ({ item }) => (
    <View style={styles.listItem}>
        <Text>{item}</Text>
    </View>
);

export default listItem;
