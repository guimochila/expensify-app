import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

describe('Expenses Action', () => {
  test('should setup remove expense action', () => {
    const action = removeExpense({ id: 0 });
    expect(action).toEqual({
      type: 'REMOVE_EXPENSE',
      id: 0,
    });
  });

  test('should setup edit expense action', () => {
    const action = editExpense(0, { description: 'JS Engineer' });

    expect(action).toEqual({
      type: 'EDIT_EXPENSE',
      id: 0,
      updates: {
        description: 'JS Engineer',
      },
    });
  });

  test('should setup add expense action object with provided valued', () => {
    const expenseData = {
      description: 'Rent',
      amount: 250,
      createdAt: 1000,
      note: 'This was last months',
    };

    const action = addExpense(expenseData);
    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        ...expenseData,
        id: expect.any(String),
      },
    });
  });

  test('should setup add expense action object with default values', () => {
    const action = addExpense();

    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        description: '',
        note: '',
        amount: 0,
				createdAt: expect.any(Number),
				id: expect.any(String)
      },
    });
  });
});
