import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id:'abc123' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'abc123'
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense('abc123',{note: 'New note'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc123',
        updates: {
            note: 'New note'
        }
    });
});

test('should setup add expense action object whith provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 123456,
        createdAt: 1000,
        note: 'This was last months rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            amount: 0,
            createdAt: 0,
            note: '',
            id: expect.any(String)
        }
    });
});