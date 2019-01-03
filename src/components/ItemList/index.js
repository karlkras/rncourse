import React from 'react';
import { View } from 'react-native';
import ListItem from '../ListItem';
import styles from './styles';


const ItemList = ({ items }) => {

    const itemsOutput = items.map( (item, index) => (
        <ListItem key={index} item={item}/>
    ));

    return (
        <View style={styles.listContainer}>
            {itemsOutput}
        </View>
    );
};

export default ItemList;


