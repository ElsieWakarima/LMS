import React, { useState } from 'react';

const AssignmentSubmission = () => {
  const [deadline, setDeadline] = useState('2023-06-30');
  const [assignmentName, setAssignmentName] = useState('Assignment 1');
  const [description, setDescription] = useState('Write a research paper on a chosen topic');
  const [document, setDocument] = useState(null);

  const handleUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setDocument(uploadedFile);
  };

  const handleDelete = () => {
    setDocument(null);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Assignment Submission</h1>
        <div className="mb-4">
          <p className="font-bold">Deadline:</p>
          <p>{deadline}</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Assignment Name:</p>
          <p>{assignmentName}</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Description:</p>
          <p>{description}</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Upload Document:</p>
          {document ? (
            <div className="flex items-center">
              <p className="mr-2">{document.name}</p>
              <button className="px-3 py-1 bg-red-500 text-white rounded" onClick={handleDelete}>
                Delete
              </button>
            </div>
          ) : (
            <input type="file" onChange={handleUpload} />
          )}
        </div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
      </div>
    </div>
  );
};

export default AssignmentSubmission;
