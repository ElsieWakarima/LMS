import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

// Define the fade-in animation using styled-components and react-animations
const FadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 1s ${FadeInAnimation};
`;

const AssignmentAddPage = () => {
  const [assignmentData, setAssignmentData] = useState({
    assignmentName: '',
    assignmentDate: '',
    deadline: '',
    courseId: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAssignmentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAssignmentAdd = () => {
    // Add your logic here to add the assignment
    console.log('Adding assignment:', assignmentData);
    // You can make an API call or perform any other necessary actions
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <FadeInDiv className="bg-white rounded-lg shadow p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Add Assignment</h2>
        <div className="flex items-center mb-6">
          <FiPlus className="text-3xl mr-3" />
          <input
            type="text"
            name="assignmentName"
            placeholder="Assignment Name"
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            value={assignmentData.assignmentName}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-center mb-6">
          <FiPlus className="text-3xl mr-3" />
          <input
            type="date"
            name="assignmentDate"
            placeholder="Assignment Date"
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            value={assignmentData.assignmentDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-center mb-6">
          <FiPlus className="text-3xl mr-3" />
          <input
            type="date"
            name="deadline"
            placeholder="Deadline"
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            value={assignmentData.deadline}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-center mb-6">
          <FiPlus className="text-3xl mr-3" />
          <input
            type="text"
            name="courseId"
            placeholder="Course ID"
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            value={assignmentData.courseId}
            onChange={handleInputChange}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2"
          onClick={handleAssignmentAdd}
        >
          Add Assignment
        </button>
      </FadeInDiv>
    </div>
  );
};

export default AssignmentAddPage;
