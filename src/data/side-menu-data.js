import { v4 as uuidv4 } from 'uuid';
import { MdSpaceDashboard } from 'react-icons/md';
import { BsFillCalendarDateFill } from 'react-icons/bs';
import { SiGooglemessages } from 'react-icons/si';
import { FaQuestionCircle } from 'react-icons/fa';
import { RiSettingsFill } from 'react-icons/ri';

const menuArray = [
  {
    id: uuidv4(),
    label: 'Dashboard',
    icon: <MdSpaceDashboard />,
    to: '/',
  },
  {
    id: uuidv4(),
    label: 'Calender',
    icon: <BsFillCalendarDateFill />,
    to: '/calender',
  },
  {
    id: uuidv4(),
    label: 'Message',
    icon: <SiGooglemessages />,
    to: '/message',
  },
  {
    id: uuidv4(),
    label: 'FAQ',
    icon: <FaQuestionCircle />,
    to: '/FAQ',
  },
  {
    id: uuidv4(),
    label: 'Settings',
    icon: <RiSettingsFill />,
    to: '/settings',
  },
];

export default menuArray;
