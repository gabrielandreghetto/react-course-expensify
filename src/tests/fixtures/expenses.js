import moment from 'moment';

export default [
    {
    id: '1',
    description: 'A',
    note: '',
    amount: 100,
    createdAt: 0
    },
    {
    id: '2',
    description: 'B',
    note: '',
    amount: 500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
    id: '3',
    description: 'C',
    note: '',
    amount: 300,
    createdAt: moment(0).add(4, 'days').valueOf()
    }
]