import { useContext } from 'react';

import { ExpContext } from '../store/exp-context';

import ExpOutput from '../components/ExpOutput/ExpOutput';

function AllExp() {
    const expCtx = useContext(ExpContext);

    return (
        <ExpOutput
            exp={expCtx.exp}
            daterange='Total'
            fallback={'No expenses to display'}
        />
    );
}

export default AllExp;
