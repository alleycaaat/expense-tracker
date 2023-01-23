import { useContext } from 'react';

import { ExpContext } from '../store/exp-context';
import { getDateMinusDays } from '../util/date';

import ExpOutput from '../components/ExpOutput/ExpOutput';

function RecentExp() {
    const expCtx = useContext(ExpContext);

    const recentExp = expCtx.exp.filter((exp) => {
        const today = new Date();
        const prevDate = getDateMinusDays(today, 7);
        return (exp.date > prevDate) && (exp.date <= today);
    });
    return (
        <ExpOutput
            exp={recentExp}
            daterange='Last 7 days'
            fallback={'No expenses in the last 7 days'}
        />
    );
}

export default RecentExp;