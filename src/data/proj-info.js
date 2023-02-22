import { v4 as uuidv4 } from 'uuid';

import Lily from '../images/Lily.jpg';

const projinfo = [
  {
    id: uuidv4(),
    logo: 'https://rb.gy/i73pbt',
    title: 'Target',
    reporter: 'Aremu Bisi',
    created: '2022-09-16T09:39:25.595Z',
    due: '2022-09-16T09:39:25.595Z',
    stats: ['in progress'],
    team: [
      {
        name: 'John Doe',
        image: Lily,
      },
      {
        name: 'Aremu Bisi',
        image: Lily,
      },
      {
        name: 'Sonya Olaniyi',
        image: Lily,
      },
      {
        name: 'Agatha Smith',
        image: Lily,
      },
      {
        name: 'Lola Rae',
        image: Lily,
      },
    ],
    value: '56',
  },
  {
    id: uuidv4(),
    logo:'https://rb.gy/ffxi2r' ,
    title: 'Target',
    reporter: 'Tega Rose',
    created: '2022-09-16T09:39:25.595Z',
    due: '2022-09-16T09:39:25.595Z',
    stats: ['closed'],
    team: [
      {
        name: 'John Doe',
        image: Lily,
      },
      {
        name: 'Agatha Smith',
        image: Lily,
      },
      {
        name: 'Lola Rae',
        image: Lily,
      },
    ],
    value: '40',
  },
  {
    id: uuidv4(),
    logo: 'https://rb.gy/qyla3e',
    title: 'Target',
    reporter: 'Mebele Anna',
    created: '2022-09-16T09:39:25.595Z',
    due: '2022-09-16T09:39:25.595Z',
    stats: [ 'open'],
    team: [
      {
        name: 'John Doe',
        image: Lily,
      },
      {
        name: 'Agatha Smith',
        image: Lily,
      },
      {
        name: 'Lola Rae',
        image: Lily,
      },
    ],
    value: '89',
  },
];

export default projinfo;
// create table of 5 columns in react, 'recent projects, created, reporter, due and stats'
