import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, {
        type: '@@INIT'
    });

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sort by to amount', () => {
    const state = filtersReducer(undefined, {
        type: 'SORT_BY_AMOUNT'
    });

    expect(state.sortBy).toBe('amount')
})

test('should set sort by to date', () => {
    const currentState = {
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }

    const action = {
        type: 'SORT_BY_DATE'
    }

    const state = filtersReducer(currentState, action);

    expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
    const action = {
        type: 'SET_TEXT_FILTER',
        text: 'test'
    }

    const state = filtersReducer(undefined, action);

    expect(state.text).toBe('test')
})

test('should set start date filter', () => {
    const action = {
        type: 'SET_START_DATE',
        date: 123
    }

    const state = filtersReducer(undefined, action);

    expect(state.startDate).toBe(123)
})

test('should set end date filter', () => {
    const action = {
        type: 'SET_END_DATE',
        date: 123
    }

    const state = filtersReducer(undefined, action);

    expect(state.endDate).toBe(123)
})