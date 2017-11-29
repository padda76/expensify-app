const moment = require.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp);
};

/*
Mocking moment since ExpenseForm pass inn currentdate with moment(), this will always 
result in different values. This mock sets timestamp to 0 as default, thus passing tests.
*/