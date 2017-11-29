import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach( () => {
    //setup with usual suspects: wrapper and spies
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage  
        editExpense={editExpense} 
        removeExpense={removeExpense} 
        history={history}
        expense={expenses[1]}
    />);
});

test('should render EditExpensePage', () => {
    //snapshot
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
    //spies
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
});

test('should handle removeExpense', () => {
    //spies
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({id: expenses[1].id});
});