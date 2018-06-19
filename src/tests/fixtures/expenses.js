import moment from 'moment';

export default [
  {
    id: '1',
    description: 'Learn Redux',
    note: 'Tylor',
    amount: 125,
		createdAt: 0,
  },
  {
    id: '2',
    description: 'React Complete',
    note: 'Andrew',
    amount: 10,
    createdAt: moment(0).subtract(4, 'days').valueOf(),
  },
  {
    id: '3',
    description: 'Learn JS',
    note: 'Me',
    amount: 1500,
    createdAt: moment(0).add(4, 'days').valueOf(),
  },
];
