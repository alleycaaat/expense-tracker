import { View, Text, StyleSheet } from 'react-native';

import ExpList from './ExpList';
import ExpSummary from './ExpSummary';
import { GlobalStyles } from '../../constants/styles';

const EXPNS = [
    {
        id: 'e1',
        desc: 'Trail runners',
        amt: 129.99,
        date: new Date('2023-01-18'),
    },
    {
        id: 'e2',
        desc: 'Injinji socks',
        amt: 12.75,
        date: new Date('2022-12-15'),
    },
    {
        id: 'e3',
        desc: 'Tailwind',
        amt: 30.80,
        date: new Date('2022-10-04'),
    },
    {
        id: 'e4',
        desc: 'Race entry',
        amt: 90.00,
        date: new Date('2023-01-01'),
    },
];

function ExpOutput({ expenses, daterange }) {
    return (
        <View style={styles.container}>
            <ExpSummary expenses={EXPNS} daterange={daterange} />
            <ExpList expenses={EXPNS} />
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
