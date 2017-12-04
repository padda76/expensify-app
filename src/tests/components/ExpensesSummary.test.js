import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from './../fixtures/expenses';

test('should render summary of 1 expense correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={123} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render summary of multiple expenses correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={45} expensesTotal={98756623} />);
    expect(wrapper).toMatchSnapshot();
});