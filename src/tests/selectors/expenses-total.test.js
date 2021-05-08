import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});

test('should correctly add up a single expense', () => {
    const res = selectExpensesTotal([expenses[1]]);
    expect(res).toBe(500);
});

test('should correctly add up all expensess', () => {
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(900);
});
