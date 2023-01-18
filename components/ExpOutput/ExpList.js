import { FlatList, Text } from 'react-native';

function rednerExpItem(itemData) {
    return (
        <Text>{itemData.item.desc}</Text>
    );
}
function ExpList({ expenses }) {
    return (
        <FlatList
            data={expenses}
            renderItem={rednerExpItem}
            keyExtractor={(item) => item.id}
        />
    );
}

export default ExpList;