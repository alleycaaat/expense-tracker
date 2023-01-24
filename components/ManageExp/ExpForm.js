import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { GlobalStyles } from '../../constants/styles';

import Input from './Input';
import Btn from '../UI/Btn';

function ExpForm({ confirmBtnLabel, cancelHandler, onSubmit, defaultValues }) {
    //s9m152

    const [inputValues, setInputValues] = useState({
        amt: defaultValues ? defaultValues.amt.toString() : '',
        date: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : '',
        desc: defaultValues ? defaultValues.desc.toString() : '',
    });

    const submitHandler = () => {
        const expData = {
            amt: +inputValues.amt,
            date: new Date(inputValues.date),
            desc: inputValues.desc,
        };
        onSubmit(expData);
    };

    const inputHandler = (inputName, val) => {
        setInputValues((currValue) => {
            return {
                ...currValue,
                [inputName]: val,
            };
        });
    };

    return (
        <View style={styles.wrapper}>
            <Text style={styles.header}>Expense Details</Text>
            <View style={styles.row}>
                <Input
                    style={styles.inputRow}
                    label='Amount'
                    inputConfig={{
                        onChangeText: inputHandler.bind(this, 'amt'),
                        keyboardType: 'decimal-pad',
                        placeholder: '$xx.xx',
                        value: inputValues.amt,
                    }}
                />
                <Input
                    style={styles.inputRow}
                    label='Date'
                    inputConfig={{
                        onChangeText: inputHandler.bind(this, 'date'),
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10,
                        value: inputValues.date,
                    }} />
            </View>
            <Input label='Description'
                inputConfig={{
                    placeholder: 'Describe the purchase',
                    maxLength: 150,
                    multiline: true,
                    autoCorrect: false,
                    onChangeText: inputHandler.bind(this, 'desc'),
                    value: inputValues.desc,
                }} />
            <View style={styles.buttonWrapper}>
                <Btn
                    style={styles.button}
                    onPress={cancelHandler}
                    mode='flat'
                >Cancel</Btn>
                <Btn style={styles.button} onPress={submitHandler}>
                    {confirmBtnLabel}
                </Btn>
            </View>
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
    buttonWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8,
    },
    delete: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.lighter,
        alignItems: 'center',
    },
});