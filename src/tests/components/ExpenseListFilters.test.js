import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import  { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter   = jest.fn();
    sortByDate      = jest.fn();
    sortByAmount    = jest.fn();
    setStartDate    = jest.fn();
    setEndDate      = jest.fn();

    wrapper         = shallow(<ExpenseListFilters 
                                setTextFilter={setTextFilter} 
                                sortByDate={sortByDate} 
                                sortByAmount={sortByAmount} 
                                setStartDate={setStartDate} 
                                setEndDate={setEndDate} 
                                filters={filters}
                            />);
});

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data', () => {
    wrapper.setProps({
        filters: altFilters
    });

    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const value = 'water';

    wrapper.find('input')
    .simulate('change', {
        target: { value }
    });

    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should handle sort by date', () => {
    wrapper.setProps({
        filters: altFilters
    });

    const value = 'date';

    wrapper.find('select')
    .simulate('change', {
        target: { value }
    });

    expect(sortByDate).toHaveBeenLastCalledWith();
});

test('should handle sort by amount', () => {
    const value = 'amount';

    wrapper.find('select')
    .simulate('change', {
        target: { value }
    });

    expect(sortByAmount).toHaveBeenLastCalledWith();
});

test('should handle date change', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate   = moment(0).add(8, 'years');

    wrapper
    .find('DateRangePicker')
    .prop('onDatesChange')({
        startDate,
        endDate
    });

    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    // expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes', () => {
  const calendarFocused = 'endDate';

  wrapper
  .find('DateRangePicker')
  .prop('onFocusChange')(calendarFocused);

  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
