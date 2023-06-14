// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

export const navConfigLec = [

  {
    title: 'events',
    path: '/dashboard/event',
    icon: icon('ic_event'),
  },
  
  {
    title: 'Courses',
    path: '/dashboard/leccourses',
    icon: icon('ic_my'),
  },


  {
    title: 'Assignments',
    path: '/dashboard/assignmentview',
    icon: icon('ic_academics'),
  },
  {
    title: 'Grading',
    path: '/dashboard/reportmanagment',
    icon: icon('ic_this'),
  },
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

export const navConfigAdmin = [
  
  {
    title: 'events',
    path: '/dashboard/eventmanagment',
    icon: icon('ic_event'),
  },
  
  {
    title: 'Courses',
    path: '/dashboard/coursesmanagment',
    icon: icon('ic_my'),
  },

  {
    title: 'Members',
    path: '/dashboard/membermanagment',
    icon: icon('ic_this'),
  },
  {
    title: 'Fee',
    path: '/dashboard/feemanagment',
    icon: icon('ic_academics'),
  },
  {
    title: 'Course Allocation',
    path: '/dashboard/allocation',
    icon: icon('ic_this'),
  },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },

];

export const navConfigStudent = [
  {
    title: 'Home',
    path: '/dashboard/app',
    icon: icon('ic_home'),
  },

  {
    title: 'events',
    path: '/dashboard/event',
    icon: icon('ic_event'),
  },
  
  {
    title: 'My courses',
    path: '/dashboard/courses',
    icon: icon('ic_my'),
  },
  {
    title: 'enrollment',
    path: '/dashboard/courseselection',
    icon: icon('ic_my'),
  },
  // {
  //   title: 'This Course',
  //   path: '/dashboard/blog',
  //   icon: icon('ic_this'),
  // },
 
  {
    title: 'Report',
    path: '/dashboard/studentreport',
    icon: icon('ic_this'),
  },
  // {
  //   title: 'Add student',
  //   path: '/admindashboard/studentreg',
  //   icon: icon('ic_this'),
  // },
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

