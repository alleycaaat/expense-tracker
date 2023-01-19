import { Text, View, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

function ExpSummary({ daterange, expenses }) {
    const expSum = expenses.reduce((sum, expense) => {
        return (
            sum + expense.amt
        );
    }, 0);
    return (
        <View style={styles.container}>
            <Text style={styles.date}>{daterange}</Text>
            <Text style={styles.sum}>${expSum.toFixed(2)}</Text>
        </View>
    );
}

export default ExpSummary;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8,
        elevation: 6,
        borderRadius: 6,
        backgroundColor: GlobalStyles.colors.lightest,
    },
    date: {
        fontSize: 14,
        fontWeight: 'bold',
        color: GlobalStyles.colors.darkest,
    },
    sum: {
        color: GlobalStyles.colors.darkest,
    }
});
