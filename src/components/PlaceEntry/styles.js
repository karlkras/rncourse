import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    placeInput: {
        width: "70%",
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'red'
    },
    placeButton: {
        width: "30%"
    }
});

export default styles;
