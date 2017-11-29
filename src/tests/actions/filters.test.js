import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';

test('should generate set text filter action object with set value', () => {
    const action = setTextFilter('Rent');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Rent'
    });
});

test('should generate set text filter action object with default value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should set sort by amount action filter', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('should set sort by date action filter', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE'});
});

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

