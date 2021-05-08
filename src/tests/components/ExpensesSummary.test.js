import React from 'react';
import { shallow } from 'enzyme';

import {ExpensesSummary} from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should correctly render with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={23556} />);
    expect(wrapper).toMatchSnapshot();

});

test('should correctly render with multiple expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={12} expensesTotal={25453556} />);
    expect(wrapper).toMatchSnapshot();
});