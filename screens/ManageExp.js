import { useContext, useLayoutEffect } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { GlobalStyles } from '../constants/styles';
import { ExpContext } from '../store/exp-context';

import Btn from '../components/UI/Btn';
import IconBtn from '../components/UI/IconBtn';
import ExpForm from '../components/ManageExp/ExpForm';

function ManageExp({ route, navigation }) {
    const expCtx = useContext(ExpContext);

    //params is a ternary to avoid throwing an error if there's no id
    const editedId = route.params?.expId;
    const isEditing = !!editedId;

    function deleteHandler() {
        expCtx.deleteExp(editedId);
        navigation.goBack();
    }

    function cancelHandler() {
        navigation.goBack();
    }

    function confirmHandler(expData) {
        console.log('expData:',expData)
        if (isEditing) {
            expCtx.updateExp(editedId, expData);
        } else {
            expCtx.addExp(expData);
        }
        navigation.goBack();
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, [navigation, isEditing]);

    return (
        <View style={styles.container}>
            <ExpForm
                cancelHandler={cancelHandler}
                onSubmit={confirmHandler}
                confirmBtnLabel={isEditing ? 'Update' : 'Add'}
            />

            {isEditing && (
                <View style={styles.delete}>
                    <IconBtn
                        icon='trash'
                        color={GlobalStyles.colors.lightalert}
                        size={31}
                        onPress={deleteHandler} />
                </View>
            )}
        </View>
    );
}

export default ManageExp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.darkest,
    },
});