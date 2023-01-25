import { Button, StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

function ErrorScreen({ message, onConfirm }) {
    return (
        <View style={styles.wrapper}>
            <Text style={[styles.text, styles.title]}>Danger, danger!</Text>
            <Text style={styles.text}>{message}</Text>
            <Button onPress={onConfirm}>Okay</Button>
        </View>
    );
}

export default ErrorScreen;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: GlobalStyles.colors.darkest,
    },
    text: {
        color: 'white',
        textAlign: 'center',
        marginBottom: 8,
    },
    title: {
        fontSize: 21,
        fontWeight: 'bold',
    },
});