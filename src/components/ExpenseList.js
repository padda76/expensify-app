import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                props.expenses.map((expense) => {
                    return <ExpenseListItem {...expense} key={expense.id} />;
                })
            )
        }

    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    };
}

export default connect(mapStateToProps)(ExpenseList);

//default connected version to be used i app
//named export to be used in tests