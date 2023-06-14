import React, { useState, useEffect } from 'react';
import { BiSearch, BiEdit, BiTrash } from 'react-icons/bi';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

// Define the fade-in animation using styled-components and react-animations
const FadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 1s ${FadeInAnimation};
`;

const ReportManagementPage = () => {
  const [reports, setReports] = useState([]);
  const [searchMemberNo, setSearchMemberNo] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    studentId: '',
    courseId: '',
    grade: '',
    remarks: '',
  });

  useEffect(() => {
    // Simulate loading data from an API or database
    setTimeout(() => {
      const dummyData = [
        {
          report_id: 1,
          student_id: 1,
          course_id: 1,
          grade: 90,
          remarks: 'Excellent performance',
        },
        // Add more dummy data here...
      ];
      setReports(dummyData);
      setSearchResults(dummyData);
      setLoading(false);
    }, 1500);
  }, []);

  const handleSearchChange = (event) => {
    setSearchMemberNo(event.target.value);
  };

  const handleSearchReports = () => {
    const filteredReports = reports.filter((report) =>
      report.student_id.toString().includes(searchMemberNo)
    );
    setSearchResults(filteredReports);
  };

  const handleFormChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddReport = () => {
    // Add your logic for adding a report here
    console.log('Adding report:', formData);
    // Reset the form fields
    setFormData({
      studentId: '',
      courseId: '',
      grade: '',
      remarks: '',
    });
  };

  const handleEditReport = (report) => {
    // Add your logic for editing a report here
    console.log('Editing report:', report);
    // Update the form fields with the selected report data
    setFormData({
      studentId: report.student_id.toString(),
      courseId: report.course_id.toString(),
      grade: report.grade.toString(),
      remarks: report.remarks,
    });
  };

  const handleDeleteReport = (reportId) => {
    // Add your logic for deleting a report here
    console.log('Deleting report with ID:', reportId);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <FadeInDiv className="max-w-xl w-full">
        <h2 className="text-2xl font-bold mb-4">Report Management</h2>

        {/* Search Reports */}
        <div className="bg-white rounded-lg shadow p-4 mb-4">
          <h3 className="text-lg font-bold mb-2">Search Reports</h3>
          <div className="flex items-center">
            <input
              type="text"
              id="searchMemberNo"
              name="searchMemberNo"
              value={searchMemberNo}
              onChange={handleSearchChange}
              placeholder="Enter Member Number"
              className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
            />
            <button
              type="button"
              onClick={handleSearchReports}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-md ml-2 px-4 py-2"
            >
              <BiSearch />
            </button>
          </div>
        </div>

        {/* Display Reports */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {searchResults.map((report) => (
              <div
                key={report.report_id}
                className="bg-white rounded-lg shadow p-4 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold mb-2">
                    Student ID: {report.student_id}
                  </h3>
                  <p>Course ID: {report.course_id}</p>
                  <p>Grade: {report.grade}</p>
                  <p>Remarks: {report.remarks}</p>
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    onClick={() => handleEditReport(report)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-md px-3 py-1"
                  >
                    <BiEdit />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteReport(report.report_id)}
                    className="bg-red-500 hover:bg-red-600 text-white rounded-md px-3 py-1"
                  >
                    <BiTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Add/Update Report Form */}
        <div className="bg-white rounded-lg shadow p-4 mt-4">
          <h3 className="text-lg font-bold mb-2">Add/Update Report</h3>
          <form className="grid grid-cols-2 gap-4">
            <div>
              <p htmlFor="studentId" className="block font-bold mb-1">
                Student ID
              </p>
              <input
                type="text"
                id="studentId"
                name="studentId"
                value={formData.studentId}
                onChange={handleFormChange}
                className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
              />
            </div>
            <div>
              <p htmlFor="courseId" className="block font-bold mb-1">
                Course ID
              </p>
              <input
                type="text"
                id="courseId"
                name="courseId"
                value={formData.courseId}
                onChange={handleFormChange}
                className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
              />
            </div>
            <div>
              <p htmlFor="grade" className="block font-bold mb-1">
                Grade
              </p>
              <input
                type="text"
                id="grade"
                name="grade"
                value={formData.grade}
                onChange={handleFormChange}
                className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
              />
            </div>
            <div>
              <p htmlFor="remarks" className="block font-bold mb-1">
                Remarks
              </p>
              <textarea
                id="remarks"
                name="remarks"
                value={formData.remarks}
                onChange={handleFormChange}
                className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
              />
            </div>
            <div className="col-span-2 flex justify-end">
              <button
                type="button"
                onClick={handleAddReport}
                className="bg-green-500 hover:bg-green-600 text-white rounded-md px-4 py-2"
              >
                Add/Update Report
              </button>
            </div>
          </form>
        </div>
      </FadeInDiv>
    </div>
  );
};

export default ReportManagementPage;
