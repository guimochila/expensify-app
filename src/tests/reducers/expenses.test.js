import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
	const state = expensesReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual([]);
});

test('should remove expense by id', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: expenses[1].id
	}
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses by id not found', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: '10'
	}
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});

test('should add an expense', () => {
	const action = {
		type: 'ADD_EXPENSE',
		expense: {
			id: '4',
			description: 'Become JS Engineer',
			note: 'Study',
			amount: 800,
			createdAt: 0,
		}
	}
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([...expenses, action.expense]);
});

test('should edit an expense', () => {
	const action = {
		type: 'EDIT_EXPENSE',
		id: expenses[2].id,
		updates: {
			description: 'Become Software Engineer'
		}
	}
	const state = expensesReducer(expenses, action);
	expect(state[2].description).toBe(action.updates.description);
});

test('should not edit an expense if id not found', () => {
	const action = {
		type: 'EDIT_EXPENSE',
		id: '-1',
		updates: {
			description: 'Failed test'
		}
	}
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});
