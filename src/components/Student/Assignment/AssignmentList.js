import React from 'react';

const AssignmentList = () => {
  const assignments = [
    {
      id: 1,
      deadline: '2023-06-10',
      name: 'Math Assignment',
      description: 'Complete the exercises on algebra and submit them online.',
    },
    {
      id: 2,
      deadline: '2023-06-12',
      name: 'Science Project',
      description: 'Prepare a presentation on the solar system and present it in class.',
    },
    // Add more assignments as needed
  ];

  const AssignmentCard = ({ assignment }) => {

    return (
      <div className="bg-white rounded-lg shadow p-6 mb-4" style={animationProps}>
        <h2 className="text-xl font-semibold mb-2">{assignment.name}</h2>
        <p className="text-gray-600 mb-4">
          <span className="font-semibold">Deadline:</span> {assignment.deadline}
        </p>
        <p className="text-gray-700">{assignment.description}</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded mt-4">Open</button>
      </div>
    );
  };
  

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold mb-8">Assignment List</h1>
        {assignments.map((assignment) => (
          <AssignmentCard key={assignment.id} assignment={assignment} />
        ))}
      </div>
    </div>
  );
};

export default AssignmentList;
