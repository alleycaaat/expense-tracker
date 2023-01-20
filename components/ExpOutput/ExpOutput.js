import { View, StyleSheet } from 'react-native';

import { GlobalStyles } from '../../constants/styles';

import ExpList from './ExpList';
import ExpSummary from './ExpSummary';

function ExpOutput({ exp, daterange }) {
    return (
        <View style={styles.container}>
            <ExpSummary exp={exp} daterange={daterange} />
            <ExpList exp={exp} />
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
});
