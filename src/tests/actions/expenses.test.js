import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, startEditExpense, removeExpense, setExpenses, startSetExpenses, startRemoveExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const uid = 'thisIsMyTestUID';
const defaultAuthState = { auth: { uid } }; 
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt };
    });
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: 'abc123' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'abc123'
    });
});

test('should remove expenses from from firebase', (done) => {
    const id = expenses[0].id;
    const store = createMockStore(defaultAuthState);
    store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id 
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense('abc123', { note: 'New note' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc123',
        updates: {
            note: 'New note'
        }
    });
});

test('should edit expense from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[0].id;
    const updates = { note: 'new Note' };

    store.dispatch(startEditExpense(id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val().note).toBe(updates.note);
        done();
    });
});

test('should setup add expense action object whith provided values', () => {
    const action = addExpense(expenses[0]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[0]
    });
});

test('should add expense to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    };

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const expected = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    };

    store.dispatch(startAddExpense()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expected
            }
        });

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expected);
        done();
    });
});

test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});
