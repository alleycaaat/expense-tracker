import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

function Loading() {
    return (
        <View style={styles.wrapper}>
            <ActivityIndicator size='large' color='white' />
        </View>
    );
}

export default Loading;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: GlobalStyles.colors.darkest,
    }
});