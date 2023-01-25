import { createContext, useReducer } from 'react';

export const ExpContext = createContext({
    exp: [],
    addExp: ({ desc, amt, date }) => { },
    setExp: (exp) => { },
    deleteExp: (id) => { },
    updateExp: (id, { desc, amt, date }) => { },
});

function expReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return [action.payload, ...state]
        case 'SET':
            const reorder = action.payload.reverse();
            return reorder;
        case 'UPDATE':
            //get the index of the item to be updated
            const updateExpId = state.findIndex(
                (exps) => exps.id === action.payload.id
            );
            const updateExp = state[updateExpId]; //get the data at that index
            const updatedItem = { ...updateExp, ...action.payload.data }; //merge the  old and new data
            const updatedExpList = [...state]; //get the array to be updated, spread in new to keep it immutable
            updatedExpList[updateExpId] = updatedItem; //using the newly created array, go to the index of the item being updated, set it to the updated data
            return updatedExpList;
        case 'DELETE':
            return state.filter((exps) => exps.id !== action.payload);
        default:
            return state;
    }
}

function ExpContextProvider({ children }) {
    const [expState, dispatch] = useReducer(expReducer, []);

    function addExp(expData) {
        dispatch({ type: 'ADD', payload: expData });
    }

    function setExp(exp) {
        dispatch({ type: 'SET', payload: exp });
    }

    function deleteExp(id) {
        dispatch({ type: 'DELETE', payload: id });
    }

    function updateExp(id, expData) {
        dispatch({ type: 'UPDATE', payload: { id: id, data: expData } });
    }

    const value = {
        exp: expState,
        addExp: addExp,
        setExp: setExp,
        deleteExp: deleteExp,
        updateExp: updateExp,
    };

    return (
        <ExpContext.Provider value={value}>{children}</ExpContext.Provider>
    );
}

export default ExpContextProvider;
