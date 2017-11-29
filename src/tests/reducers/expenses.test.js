import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = { type: 'REMOVE_EXPENSE', id: expenses[1].id };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should not remove expense if id does not exist', () => {
    const action = { type: 'REMOVE_EXPENSE', id: '-1'};
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const newExpense = {
        id: '4',
        description: 'newExpense',
        amount: 10,
        createdAt: 0,
        note: ''
    };
    const action = { type: 'ADD_EXPENSE', expense: newExpense};
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, newExpense ]);
});

test('should edit an expense', () => {
    const description = 'Semi-truck';
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates:{
            description
        }
    }
    const state = expensesReducer(expenses,action);
    // expect(state).toEqual([{
    //     id: '1',
    //     description: 'Semi-truck',
    //     note: '',
    //     amount: 195,
    //     createdAt: 0
    // }, expenses[1], expenses[2]]);
    expect(state[0].description).toBe(description);
});

test('should not edit an expense when invalid id', () => {
    const updates = {
        description: 'Semi-truck'
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});