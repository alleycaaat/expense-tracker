import { Pressable, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { GlobalStyles } from '../../constants/styles';
import { getFormatDate } from '../../util/date';

function ExpItem({ item }) {
    const nav = useNavigation();

    function pressHandler() {
        nav.navigate('ManageExp', {
            expId: item.id
        });
    }

    return (
        <Pressable
            onPress={pressHandler}
            style={({ pressed }) => pressed && styles.pressed}
        >
            <View style={styles.item}>
                <View>
                    <Text style={[styles.text, styles.desc]}>{item.desc}</Text>
                    <Text style={styles.text}>{getFormatDate(item.date)}</Text>
                </View>
                <View style={styles.amtWrapper}>
                    <Text style={styles.amt}>${item.amt.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable>
    );
}

export default ExpItem;

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: GlobalStyles.colors.primary,
        padding: 12,
        marginVertical: 8,
        elevation: 3,
        borderRadius: 6,
    },
    text: {
        color: 'white',
    },
    desc: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold',
    },
    amtWrapper: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        minWidth: 80,
    },
    amt: {
        color: GlobalStyles.colors.darkest,
        fontWeight: 'bold',
    },
    pressed: {
        opacity: 0.5,
    },
});
