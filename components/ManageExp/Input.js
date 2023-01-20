import { StyleSheet, Text, TextInput, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

function Input({ label, style, inputConfig }) {
    let inputStyles = [styles.input];

    if (inputConfig && inputConfig.multiline) {
        inputStyles.push(styles.multiline);
    }

    return (
        <View style={[styles.wrapper, style]}>
            <Text style={styles.label}>{label}</Text>
            <TextInput {...inputConfig} style={inputStyles} />
        </View>
    );
}

export default Input;

const styles = StyleSheet.create({
    wrapper: {
        marginHorizontal: 4,
        marginVertical: 11,
    },
    label: {
        color: GlobalStyles.colors.lightest,
        fontSize: 14,
        marginBottom: 6,
    },
    input: {
        backgroundColor: GlobalStyles.colors.lightest,
        color: GlobalStyles.colors.darkest,
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
    },
    multiline: {
        minHeight: 100,
        textAlignVertical: 'top',
    }
});