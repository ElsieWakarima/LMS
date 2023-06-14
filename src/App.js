import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { StyledChart } from './components/chart';
import ScrollToTop from './components/scroll-to-top';
import EventForm from './components/Student/Events/EventForm';

import AssignmentSubmission from './components/Student/Assignment/AssignmentSubmission';
import CourseOutlinePage from './components/Lecture/CourseOutline/CourseOutlinePage';
import CourseManagementPage from './components/Admin/courses/CourseManagementPage';
import MemberManagementPage from './components/Admin/Members/MemberManagmentPage';
import FeeManagementPage from './components/Admin/Fee/FeeManagment';
import EventManagment from './components/Admin/Events/EventManagment';

// ----------------------------------------------------------------------

export default function App() {
  return (
    // <div>
    //   <EventManagment />
    // </div>
  

    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
        
          <ScrollToTop />
          <StyledChart />
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );

}
