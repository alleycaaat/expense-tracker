import { View, StyleSheet, Text } from 'react-native';

import { GlobalStyles } from '../../constants/styles';

import ExpList from './ExpList';
import ExpSummary from './ExpSummary';

function ExpOutput({ exp, daterange, fallback }) {
    let content = <Text style={styles.fallback}>{fallback}</Text>;

    if (exp.length > 0) {
        content = <ExpList exp={exp} />;
    }

    return (
        <View style={styles.container}>
            <ExpSummary exp={exp} daterange={daterange} />
            {content}
        </View>
    );
}

export default ExpOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: 'white',
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.darkest,
    },
    fallback: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 31,
    },
});
