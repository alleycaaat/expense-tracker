import { FlatList } from 'react-native';
import ExpItem from '../ExpItem';

function rednerExpItem(itemData) {
    return (
        <ExpItem {...itemData} />
    );
}
function ExpList({ exp }) {
    return (
        <FlatList
            data={exp}
            renderItem={rednerExpItem}
            keyExtractor={(item) => item.id}
        />
    );
}

export default ExpList;