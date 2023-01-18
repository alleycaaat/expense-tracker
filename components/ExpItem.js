import { Pressable, View, Text, StyleSheet } from 'react-native';

function ExpItem({ item }) {
    return (
        <Pressable>
            <View style={styles.item}>
                <View>
                    <Text>{item.desc}</Text>
                    <Text>{item.date}</Text>
                </View>
                <View>
                    <Text>{item.amt}</Text>
                </View>
            </View>
        </Pressable>
    );
}

export default ExpItem;

const styles = StyleSheet.create({
    item: {
        padding: 12,
        marginVertical: 8,
    }
});
