import axios from 'axios';

const ADDY = .env

export async function storeExp(expData) {
    const res = await axios.post(ADDY + 'expenses.json', expData)
    const id = res.data.name
    return id;
}

export async function getExp() {
    const res = await axios.get(ADDY + '/expenses.json');

    const exps = [];

    for (const key in res.data) {
        const expObj = {
            id: key,
            amt: res.data[key].amt,
            //firebase stores date as string, must convert back to object
            date: new Date(res.data[key].date),
            desc: res.data[key].desc,
        };
        exps.push(expObj);
    }
    return exps;
}