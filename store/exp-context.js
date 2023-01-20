import { createContext, useReducer } from 'react';

const EXPNS = [
    {
        id: 'e1',
        desc: 'Trail runners',
        amt: 129.99,
        date: new Date('2023-01-18'),
    },
    {
        id: 'e2',
        desc: 'Injinji socks',
        amt: 12.75,
        date: new Date('2022-12-15'),
    },
    {
        id: 'e3',
        desc: 'Tailwind',
        amt: 30.80,
        date: new Date('2022-10-04'),
    },
    {
        id: 'e4',
        desc: 'Race entry',
        amt: 90.00,
        date: new Date('2023-01-01'),
    },
];

export const ExpContext = createContext({
    exp: [],
    addExp: ({ desc, amt, date }) => { },
    deleteExp: (id) => { },
    updateExp: (id, { desc, amt, date }) => { },
});

function expReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{ ...action.payload, id: id }, ...state];
        case 'UPDATE':
            const updateExpId = state.findIndex //get the index of the item to be updated
                ((exp) => exp.id === action.payload.id
                );
            const updateExp = state[updateExpId]; //get the data at that index
            const updatedItem = { ...updateExp, ...action.payload.date }; //merge the  old and new data
            const updatedExpList = [...state]; //get the array to be updated, spread in new to keep it immutable
            updatedExpList[updateExpId] = updatedItem; //using the newly created array, go to the index of the item being updated, set it to the updated data
            return updatedExpList;
        case 'DELETE':
            return state.filter((exp) => exp.id !== action.payload);
        default:
            return state;
    }
}

function ExpContextProvider({ children }) {
    const [expState, dispatch] = useReducer(expReducer, EXPNS);

    function addExp(expData) {
        dispatch({ type: 'ADD', payload: expData });
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
        deleteExp: deleteExp,
        updateExp: updateExp,
    };

    return (
        <ExpContext.Provider value={value}>{children}</ExpContext.Provider>
    );
}

export default ExpContextProvider;