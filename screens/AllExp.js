import { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';

import { ExpContext } from '../store/exp-context';

import ExpOutput from '../components/ExpOutput/ExpOutput';

function AllExp() {
    const expCtx = useContext(ExpContext)

    return (
        <ExpOutput exp={expCtx.exp} daterange='Total' />
    );
}

export default AllExp;

const styles = StyleSheet.create({

});