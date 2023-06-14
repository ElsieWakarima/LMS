import React from 'react';

const StudentAssignmentSubmission = ({ studentData }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4">Assignment Submission</h1>
        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2" >
            Student Name:
          </p>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="studentName"
            type="text"
            value={studentData.name}
            readOnly
          />
        </div>
        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2">
            Student ID:
          </p>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="studentID"
            type="text"
            value={studentData.id}
            readOnly
          />
        </div>
        
        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2" >
            Assignment Title:
          </p>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="assignmentTitle"
            type="text"
            value={studentData.assignmentTitle}
            readOnly
          />
        </div>
        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2" >
            Submission Date:
          </p>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="submissionDate"
            type="text"
            value={studentData.submissionDate}
            readOnly
          />
        </div>
        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2" >
            Submission File:
          </p>
          <a href={studentData.submissionFile} className="text-blue-500 hover:underline">
            Download File
          </a>
        </div>
      </div>
    </div>
  );
};

export default StudentAssignmentSubmission;
