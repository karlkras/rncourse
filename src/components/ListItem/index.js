import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

const listItem  = ({ item, onItemPressed }) => (
    <TouchableOpacity onPress={onItemPressed}>
        <View style={styles.listItem}>
            <Text>{item}</Text>
        </View>
    </TouchableOpacity>
);

export default listItem;
