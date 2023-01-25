import { StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

function ErrorScreen({ message }) {
    return (
        <View style={styles.wrapper}>
            <Text style={[styles.text, styles.title]}>Well this is embarrassing...</Text>
            <Text style={styles.text}>{message}</Text>
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