import React, { useState, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

// Define the fade-in animation using styled-components and react-animations
const FadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 1s ${FadeInAnimation};
`;

const CourseEnrollmentPage = () => {
  const [courses, setCourses] = useState([]);
  const [searchCourse, setSearchCourse] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data from an API or database
    setTimeout(() => {
      const dummyData = [
        {
          courseid: '1',
          course_name: 'Course 1',
        },
        // Add more dummy data here...
      ];
      setCourses(dummyData);
      setSearchResults(dummyData);
      setLoading(false);
    }, 1500);
  }, []);

  const handleSearchChange = (event) => {
    setSearchCourse(event.target.value);
  };

  const handleSearchCourse = () => {
    const filteredCourses = courses.filter((course) =>
      course.course_name.toLowerCase().includes(searchCourse.toLowerCase())
    );
    setSearchResults(filteredCourses);
  };

  const handleEnrollCourse = (courseid) => {
    // Add your logic for enrolling in a course here
    console.log(`Enrolling in course with ID: ${courseid}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <FadeInDiv className="max-w-xl w-full">
        <h2 className="text-2xl font-bold mb-4">Course Enrollment</h2>

        {/* Search Course */}
        <div className="bg-white rounded-lg shadow p-4 mb-4">
          <h3 className="text-lg font-bold mb-2">Search Course</h3>
          <div className="flex items-center">
            <input
              type="text"
              id="searchCourse"
              name="searchCourse"
              value={searchCourse}
              onChange={handleSearchChange}
              placeholder="Enter Course Name"
              className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
            />
            <button
              type="button"
              onClick={handleSearchCourse}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-md ml-2 px-4 py-2"
            >
              <BiSearch />
            </button>
          </div>
        </div>

        {/* Display Courses */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {searchResults.map((course) => (
              <div
                key={course.courseid}
                className="bg-white rounded-lg shadow p-4 flex flex-col justify-between"
              >
              <div>
                  <h3 className="text-lg font-bold mb-2">{course.courseid}</h3>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{course.course_name}</h3>
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => handleEnrollCourse(course.courseid)}
                    className="bg-green-500 hover:bg-green-600 text-white rounded-md px-4 py-2"
                  >
                    Enroll
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </FadeInDiv>
    </div>
  );
};

export default CourseEnrollmentPage;
