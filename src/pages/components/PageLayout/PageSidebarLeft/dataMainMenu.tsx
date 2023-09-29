import { MenuItems } from '../../Navigation/menu.type.ts';
import { AiFillHome } from 'react-icons/ai';
import { FaAddressCard, FaGlobe, FaPenNib, FaUser } from 'react-icons/fa6';

export const dataMainMenu: MenuItems = [
  {
    url: '/',
    label: 'Home',
    Icon: <AiFillHome />,
    linkClassName: 'text-decoration-none hover:text-decoration-none text-body flex items-center text-2xl',
    labelClassName: 'lg:ms-6 hidden xl:inline-block',
    className: 'py-2 px-4 text-lg xl:w-full',
  },
  {
    url: '/explorer',
    label: 'Explorer',
    Icon: <FaGlobe />,
    linkClassName: 'text-decoration-none hover:text-decoration-none text-body flex items-center text-2xl',
    labelClassName: 'lg:ms-6 hidden xl:inline-block',
    className: 'py-2 px-4 text-lg xl:w-full',
  },
  {
    url: '/profile',
    label: 'Profile',
    Icon: <FaUser />,
    linkClassName: 'text-decoration-none hover:text-decoration-none text-body flex items-center text-2xl',
    labelClassName: 'lg:ms-6 hidden xl:inline-block',
    className: 'py-2 px-4 text-lg xl:w-full',
  },
  {
    url: '/contact',
    label: 'Contact',
    Icon: <FaAddressCard />,
    linkClassName: 'text-decoration-none hover:text-decoration-none text-body flex items-center text-2xl',
    labelClassName: 'lg:ms-6 hidden xl:inline-block',
    className: 'py-2 px-4 text-lg xl:w-full',
  },
  {
    url: '/post',
    label: 'poster',
    Icon: <FaPenNib />,
    linkClassName:
      'flex justify-center items-center select-none border border-blue-200 rounded text-2xl pt-2 pb-3 px-3 no-underline bg-blue-600 text-white hover:bg-blue-500 w-full',
    iconClassName: 'xl:hidden',
    labelClassName: 'hidden xl:inline-block',
    className: 'py-2 px-0 text-lg xl:w-full',
  },
];
