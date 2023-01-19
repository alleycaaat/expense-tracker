import { StyleSheet} from 'react-native';
import ExpOutput from '../components/ExpOutput/ExpOutput';

function RecentExp() {
    return (
        <ExpOutput daterange='Last 7 days' />
    );
}

export default RecentExp;

const styles = StyleSheet.create({

});