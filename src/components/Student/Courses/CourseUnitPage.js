import React from 'react';
import { BiBookBookmark, BiFile } from 'react-icons/bi';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

// Define the fade-in animation using styled-components and react-animations
const FadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 1s ${FadeInAnimation};
`;

const CourseOutlinePage = () => {
  // Dummy data for course outline
  const courseOutlineData = [
    {
      courseid: 'CSE101',
      title: 'Introduction to Computer Science',
      subtitle: ['Course Overview', 'Basic Concepts'],
      assignments: ['Assignment 1', 'Assignment 2', 'Final Project'],
    },
    {
      courseid: 'CSE102',
      title: 'Data Structures and Algorithms',
      subtitle: ['Introduction to Data Structures', 'Sorting Algorithms', 'Graph Algorithms'],
      assignments: ['Lab Assignment 1', 'Lab Assignment 2', 'Final Project'],
    },
    {
      courseid: 'CSE201',
      title: 'Database Systems',
      subtitle: ['Introduction to Databases', 'Relational Database Design'],
      assignments: ['SQL Assignment 1', 'SQL Assignment 2', 'Database Project'],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <FadeInDiv className="max-w-xl w-full">
        <h2 className="text-2xl font-bold mb-4">Course Outline</h2>
        {courseOutlineData.map((course) => (
          <div
            key={course.courseid}
            className="bg-white rounded-lg shadow w-full p-4 mb-4 cursor-pointer hover:bg-gray-100 transition duration-300"
          >
            <h3 className="text-lg font-bold">{course.title}</h3>
            <p className="text-gray-500">{course.courseid}</p>
            <div className="mt-4">
              <h4 className="text-md font-bold">Subtitles:</h4>
              <ul className="list-disc list-inside">
                {course.subtitle.map((subtitle) => (
                  <li key={subtitle}>{subtitle}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="text-md font-bold">Assignments:</h4>
              <ul className="list-disc list-inside">
                {course.assignments.map((assignment) => (
                  <li key={assignment} className="flex items-center">
                    <BiFile className="mr-2" />
                    <span className="text-blue-500 hover:underline cursor-pointer">{assignment}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </FadeInDiv>
    </div>
  );
};

export default CourseOutlinePage;
