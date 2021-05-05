import moment from 'moment';
import selectExpenses from '../../selectors/expenses';

import expenses from '../fixtures/expenses';

test('should filter by text value', () => {
    const filters = {
        text: 'B',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses, filters);

    const expected = [
        {
        id: '2',
        description: 'B',
        note: '',
        amount: 500,
        createdAt: moment(0).subtract(4, 'days').valueOf()
        }
    ]

    expect(result).toEqual(expected);
});

test('should filter by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }

    const result = selectExpenses(expenses, filters);

    const expected = [
        {
        id: '3',
        description: 'C',
        note: '',
        amount: 300,
        createdAt: moment(0).add(4, 'days').valueOf()
        },
        {
        id: '1',
        description: 'A',
        note: '',
        amount: 100,
        createdAt: 0
        }
    ]

    expect(result).toEqual(expected);
});

test('should filter by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }

    const result = selectExpenses(expenses, filters);

    const expected = [
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
        }
    ]

    expect(result).toEqual(expected);
});

test('should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses, filters);

    const expected = [
        {
        id: '3',
        description: 'C',
        note: '',
        amount: 300,
        createdAt: moment(0).add(4, 'days').valueOf()
        },
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
        }
    ]

    expect(result).toEqual(expected);
});

test('should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses, filters);

    const expected = [
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
        },
        {
        id: '1',
        description: 'A',
        note: '',
        amount: 100,
        createdAt: 0
        }
    ]

    expect(result).toEqual(expected);
});