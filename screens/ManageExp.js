import { useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Btn from '../components/UI/Btn';
import IconBtn from '../components/UI/IconBtn';
import { GlobalStyles } from '../constants/styles';

function ManageExp({ route, navigation }) {
    const editedId = route.params?.expId;
    const isEditing = !!editedId;
    function deleteHandler() {

    }
    function cancelHandler() {

    }
    function confirmHandler() {

    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, [navigation, isEditing]);

    return (
        <View style={styles.container}>
            <View style={styles.buttonWrapper}>
                <Btn style={styles.button} mode='flat' onPress={cancelHandler}>Cancel</Btn>
                <Btn style={styles.button} onPress={confirmHandler}>{isEditing ? 'Update' : 'Add'}</Btn>
            </View>
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
    }
});