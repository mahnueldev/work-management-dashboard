import { v4 as uuidv4 } from 'uuid';
import Lily from '../images/Lily.jpg';


const user= [
  {
    id: uuidv4(),
    firstname: 'Lily',
    surname: 'Abogun',
    occupation: 'Project Manager',
    image: Lily,
  },
  
];

export default user;
