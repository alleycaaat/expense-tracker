import { useLayoutEffect } from 'react';
import { StyleSheet, Text } from 'react-native';

function ManageExp({ route, navigation }) {
    const editedId = route.params?.expId;
    const isEditing = !!editedId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, [navigation, isEditing]);

    return (
        <Text>ManageExp</Text>
    );
}

export default ManageExp;

const styles = StyleSheet.create({

});