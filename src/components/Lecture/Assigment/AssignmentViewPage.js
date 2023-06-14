import React, { useState } from 'react';
import { FiDownload, FiEdit, FiSearch } from 'react-icons/fi';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

// Define the fade-in animation using styled-components and react-animations
const FadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 1s ${FadeInAnimation};
`;

const AssignmentViewPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [assignments, setAssignments] = useState([
    { submission_id: 1, student_number: '12345', course_id: 'CSE101', grade: 'A', file_name: 'assignment1.pdf' },
    { submission_id: 2, student_number: '67890', course_id: 'CSE102', grade: 'B', file_name: 'assignment2.pdf' },
    // Add more dummy assignments as needed
  ]);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleGradeChange = (event, submissionId) => {
    const updatedAssignments = assignments.map((assignment) => {
      if (assignment.submission_id === submissionId) {
        return { ...assignment, grade: event.target.value };
      }
      return assignment;
    });
    setAssignments(updatedAssignments);
  };

  const handleUpdateGrade = (submissionId) => {
    // Add your logic here to update the grade for the assignment
    const assignment = assignments.find((assignment) => assignment.submission_id === submissionId);
    console.log(`Updating grade for submission ID ${submissionId}: ${assignment.grade}`);
    // You can make an API call or perform any other necessary actions
  };

  const filteredAssignments = assignments.filter((assignment) =>
    assignment.student_number.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <FadeInDiv className="bg-white rounded-lg shadow p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Assignment View</h2>
        <div className="mb-4">
          <div className="flex items-center">
            <FiSearch className="text-xl mr-2 text-gray-500" />
            <input
              type="text"
              placeholder="Search by Student"
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              value={searchTerm}
              onChange={handleSearchTermChange}
            />
          </div>
        </div>
        {filteredAssignments.length > 0 ? (
          <div className="space-y-4">
            {filteredAssignments.map((assignment) => (
              <div key={assignment.submission_id} className="flex items-center border-b pb-2">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
                  <FiDownload className="text-gray-500 text-xl" />
                </div>
                <div className="flex-grow pl-4">
                  <h3 className="font-bold">
                    Student Number: {assignment.student_number} | Course ID: {assignment.course_id}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Grade:
                    <input
                      type="text"
                      className="border border-gray-300 rounded px-2 py-1 ml-2 w-16 focus:outline-none focus:border-blue-500"
                      value={assignment.grade}
                      onChange={(event) => handleGradeChange(event, assignment.submission_id)}
                    />
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white rounded px-2 py-1 ml-2"
                      onClick={() => handleUpdateGrade(assignment.submission_id)}
                    >
                      Update
                    </button>
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No assignments found.</p>
        )}
      </FadeInDiv>
    </div>
  );
};

export default AssignmentViewPage;
