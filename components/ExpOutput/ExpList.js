import { FlatList } from 'react-native';
import ExpItem from '../ExpItem';

function rednerExpItem(itemData) {
    return (
        <ExpItem {...itemData} />
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