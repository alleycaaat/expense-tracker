import { useContext, useEffect, useState } from 'react';

import { ExpContext } from '../store/exp-context';
import { getDateMinusDays } from '../util/date';
import { getExp } from '../util/http';

import ExpOutput from '../components/ExpOutput/ExpOutput';
import Loading from '../components/UI/Loading';
import ErrorScreen from '../components/UI/ErrorScreen';

function RecentExp() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError]=useState()
    const expCtx = useContext(ExpContext);

    useEffect(() => {
        async function getExpenses() {
            try {
                const exp = await getExp();
                expCtx.setExp(exp);
            } catch (error) {
                setError('Could not retrieve expenses.')
            }
            setIsLoading(false);
        }
        getExpenses();
    }, []);

    function errorHandler() {
        setError(null)
    }

    if (error && !isLoading) {
        return <ErrorScreen message={error} onConfirm={errorHandler} />
    }

    if (isLoading) {
        return <Loading />;
    }

    const recentExp = expCtx.exp.filter((exp) => {
        const today = new Date();
        const prevDate = getDateMinusDays(today, 7);

        return (exp.date >= prevDate) && (exp.date <= today);
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