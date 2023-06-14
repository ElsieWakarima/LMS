// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Home',
    path: '/dashboard/app',
    icon: icon('ic_home'),
  },
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_dash'),
  },
  
  {
    title: 'events',
    path: '/dashboard/events',
    icon: icon('ic_event'),
  },
  
  {
    title: 'My courses',
    path: '/dashboard/products',
    icon: icon('ic_my'),
  },
  {
    title: 'This Course',
    path: '/dashboard/blog',
    icon: icon('ic_this'),
  },
 
  {
    title: 'News',
    path: '/dashboard/blog',
    icon: icon('ic_this'),
  },
  {
    title: 'Add student',
    path: '/admindashboard/studentreg',
    icon: icon('ic_this'),
  },
  // {
  //   title: 'Academics',
  //   path: '/dashboard/products',
  //   icon: icon('ic_academics'),
  // },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },

];

export default navConfig;
