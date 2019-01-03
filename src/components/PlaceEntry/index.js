import React from 'react';
import { View, TextInput, Button } from 'react-native';
import styles from './styles';

const PlaceEntry = ({ value, onChange, submit }) => (
    <View style={styles.inputContainer}>
        <TextInput
            style={styles.placeInput}
            onChangeText={(placeName) => onChange(placeName)}
            value={value}
            placeholder='Enter place'
        />
        <Button
            title='Add'
            style={styles.placeButton}
            onPress={submit}
        />
    </View>
);

export default PlaceEntry;