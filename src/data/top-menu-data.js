import { v4 as uuidv4 } from 'uuid';

const topMenuArray = [
  {
    id: uuidv4(),
    label: 'All projects',
    to: '/projects',
  },
  {
    id: uuidv4(),
    label: 'Members',
    to: '/members',
  },
  {
    id: uuidv4(),
    label: 'Stats',
    to: '/stats',
  },
  {
    id: uuidv4(),
    label: 'Doc',
    to: '/doc',
  },
  {
    id: uuidv4(),
    label: 'Help',
    to: '/help',
  },
];

export default topMenuArray;
