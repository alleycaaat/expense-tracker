import { useContext, useLayoutEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { GlobalStyles } from '../constants/styles';
import { ExpContext } from '../store/exp-context';

import IconBtn from '../components/UI/IconBtn';
import ExpForm from '../components/ManageExp/ExpForm';
import { deleteExp, storeExp, updateExp } from '../util/http';
import Loading from '../components/UI/Loading';
import ErrorScreen from '../components/UI/ErrorScreen';

function ManageExp({ route, navigation }) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const expCtx = useContext(ExpContext);

    //params is a ternary to avoid throwing an error if there's no id
    const editedId = route.params?.expId;
    const isEditing = !!editedId;

    const selectedExp = expCtx.exp.find(exps => exps.id === editedId);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, [navigation, isEditing]);

    async function deleteHandler() {
        setIsLoading(true);
        try {
            await deleteExp(editedId);
            expCtx.deleteExp(editedId);
            navigation.goBack();
        } catch (error) {
            setIsLoading(false);
            setError('Failed to delete expense, please try again later.');
        }
    }

    function cancelHandler() {
        navigation.goBack();
    }

    async function confirmHandler(expData) {
        setIsLoading(true);
        try {
            if (isEditing) {
                expCtx.updateExp(editedId, expData);
                await updateExp(editedId, expData);
            } else {
                const id = await storeExp(expData);
                expCtx.addExp({ ...expData, id: id });
            }
            navigation.goBack();
        } catch (error) {
            setIsLoading(false);
            setError('Failed to save expense, please try again.');
        }
    }

    if (error && !isLoading) {
        return <ErrorScreen message={error} />;
    }

    if (isLoading) {
        return <Loading />;
    }

    return (
        <View style={styles.container}>
            <ExpForm
                cancelHandler={cancelHandler}
                onSubmit={confirmHandler}
                confirmBtnLabel={isEditing ? 'Update' : 'Add'}
                defaultValues={selectedExp}
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
    delete: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.lighter,
        alignItems: 'center',
    },
});