import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import { StudentRegForm } from './components/Student/StudentReg';
import { FeeUpdate } from './components/Student/FeeUpdate';
import EventList from './components/Student/Events/EventsList';
import StudentCourses from './components/Student/Courses/StudentCourses';
import ReportView from './components/Student/ReportView/ReportView';
import CourseView from './components/Student/Courses/CourseUnitPage';
import LecCourses from './components/Lecture/Courses/LecCourses';
import AssignmentAddPage from './components/Lecture/Assigment/AddAssignment';
import AssignmentViewPage from './components/Lecture/Assigment/AssignmentViewPage';
import CourseOutlineManagementPage from './components/Lecture/CourseOutline/CourseOutlinePage';
import ReportManagementPage from './components/Lecture/Results/ReportManagmentPage';
import CourseManagementPage from './components/Admin/courses/CourseManagementPage';
import MemberManagementPage from './components/Admin/Members/MemberManagmentPage';
import FeeManagementPage from './components/Admin/Fee/FeeManagment';
import CourseEnrollmentPage from './components/Student/CourseSelection/CousesSelection';
import StudentProfile from './components/Student/StudentProfile/StudentProfile';
import EventManagementPage from './components/Admin/Events/EventManagment';
import AllocationManagementPage from './components/Admin/courses/AllocationManagementPage';
// import CourseOutlinePage from './components/Student/Courses/CourseUnitPage';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/login',
      element: <LoginPage />,
    }, {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'event', element: <EventList /> },
        { path: 'leccourses', element: <LecCourses /> },
        { path: 'studentreport', element: <ReportView /> },
        { path: 'studentcourseview', element: <CourseView /> },
        { path: 'studentcourses', element: <StudentCourses /> },
        { path: 'studentreg', element: <StudentRegForm /> },
        { path: 'feeupdate', element: <FeeUpdate /> },
        { path: 'addassignment', element: <AssignmentAddPage /> },
        { path: 'assignmentview', element: <AssignmentViewPage /> },
        { path: 'coursesoutline', element: <CourseOutlineManagementPage /> },
        { path: 'reportmanagment', element: <ReportManagementPage /> },
        { path: 'coursesmanagment', element: <CourseManagementPage /> },
        // { path: 'courseunit', element: <CourseOutlinePage /> },
        { path: 'membermanagment', element: <MemberManagementPage /> },
        { path: 'feemanagment', element: <FeeManagementPage /> },
        { path: 'courseselection', element: <CourseEnrollmentPage /> },
        { path: 'Profile', element: <StudentProfile /> },
        { path: 'eventmanagment', element: <EventManagementPage /> },
        { path: 'feemanagment', element: <FeeManagementPage /> },
        { path: 'membermanagment', element: <MemberManagementPage /> },
        { path: 'courses', element: <StudentCourses /> },
        { path: 'allocation', element: <AllocationManagementPage /> },



      ],
    },


    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
