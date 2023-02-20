import { v4 as uuidv4 } from 'uuid';
import { IoIosAddCircle } from 'react-icons/io';



const addproj= [
  {
    id: uuidv4(),
    title: 'Add Project',
    desc: 'Create a new project, Collaborate with others and store all your projects locally',
    icon: <IoIosAddCircle/>,
    text: 'Create a new project', 
  },
  
];

export default addproj;
