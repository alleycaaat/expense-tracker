import { StyleSheet, Text, View } from 'react-native';
import Input from './Input';

function ExpForm() {
    function amtChngHandler() {

    }
    return (
        <View style={styles.wrapper}>
            <Text style={styles.header}>Expense Details</Text>
            <View style={styles.row}>
                <Input
                    style={styles.inputRow}
                    label='Amount'
                    inputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: amtChngHandler,
                        placeholder: '$xx.xx',
                    }} />
                <Input
                    style={styles.inputRow}
                    label='Date'
                    inputConfig={{
                        placeholder: 'DD-MM-YYYY',
                        maxLength: 10,
                        onChangeText: () => { },
                    }} />
            </View>
            <Input label='Description'
                inputConfig={{
                    placeholder: 'Describe the purchase',
                    maxLength: 150,
                    multiline: true,
                    autoCorrect: false,
                    onChangeText: () => { },
                }} />
        </View>

    );
}

export default ExpForm;

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 50,
    },
    header: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 21,
        marginVertical: 21,
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputRow: {
        flex: 1,
    },
});