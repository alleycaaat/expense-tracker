import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { GlobalStyles } from '../../constants/styles';

import Input from './Input';
import Btn from '../UI/Btn';

function ExpForm({ confirmBtnLabel, cancelHandler, onSubmit, defaultValues }) {
    //s9m152

    const [inputs, setInputs] = useState({
        amt: {
            value: defaultValues ? defaultValues.amt.toString() : '',
            isValid: true,
        },
        date: {
            value: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : '',
            isValid: true,
        },
        desc: {
            value: defaultValues ? defaultValues.desc.toString() : '',
            isValid: true,
        },
    });

    const inputHandler = (inputName, val) => {
        setInputs((currValue) => {
            return {
                ...currValue,
                [inputName]: { value: val, isValid: true },
            };
        });
    };

    const submitHandler = () => {
        const expData = {
            amt: +inputs.amt.value,
            date: new Date(inputs.date.value),
            desc: inputs.desc.value,
        };
        //confirm it's greater than zero and that it is a number
        const amtValidation = !isNaN(expData.amt) && expData.amt > 0;
        //confirm it was converted to an object a few lines up
        const dateValidation = expData.date.toString() !== 'Invalid Date';
        //remove leading/trailing white space, checking the length
        const descValidation = expData.desc.trim().length > 0;

        //if any of the above are false
        if (!amtValidation || !dateValidation || !descValidation) {
            setInputs((currInputs) => {
                return {
                    amt: { value: currInputs.amt.value, isValid: amtValidation },
                    date: { value: currInputs.date.value, isValid: dateValidation },
                    desc: { value: currInputs.desc.value, isValid: descValidation },
                };
            });
            return;
        }
        onSubmit(expData);
    };

    const formIsInvalid =
        !inputs.amt.isValid ||
        !inputs.date.isValid ||
        !inputs.desc.isValid;

    return (
        <View style={styles.wrapper}>
            <Text style={styles.header}>Expense Details</Text>
            <View style={styles.row}>
                <Input
                    style={styles.inputRow}
                    label='Amount'
                    invalid={!inputs.amt.isValid}
                    inputConfig={{
                        onChangeText: inputHandler.bind(this, 'amt'),
                        keyboardType: 'decimal-pad',
                        placeholder: '$xx.xx',
                        value: inputs.amt.value,
                    }}
                />
                <Input
                    style={styles.inputRow}
                    label='Date'
                    invalid={!inputs.date.isValid}
                    inputConfig={{
                        onChangeText: inputHandler.bind(this, 'date'),
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10,
                        value: inputs.date.value,
                    }} />
            </View>
            <Input
                label='Description'
                invalid={!inputs.desc.isValid}
                inputConfig={{
                    placeholder: 'Describe the purchase',
                    maxLength: 150,
                    multiline: true,
                    autoCorrect: false,
                    onChangeText: inputHandler.bind(this, 'desc'),
                    value: inputs.desc.value,
                }} />

            {formIsInvalid && <Text style={styles.alert}>Input error - please check your expense details</Text>}

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
    alert: {
        color: GlobalStyles.colors.accent,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 6,
    },
});