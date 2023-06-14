import React, { useState, useEffect, useRef } from 'react';
import { BiDownload } from 'react-icons/bi';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import html2pdf from 'html2pdf.js';

// Define the fade-in animation using styled-components and react-animations
const FadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 1s ${FadeInAnimation};
`;

const IndividualReportPage = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [studentName, setStudentName] = useState('');
  const [totalGrade, setTotalGrade] = useState(0);
  const chartRef = useRef(null);

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
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    // Calculate the total grade
    const gradeSum = reports.reduce((sum, report) => sum + report.grade, 0);
    setTotalGrade(gradeSum);
  }, [reports]);

  const handleDownloadPDF = () => {
    const element = document.getElementById('report-page');
    const opt = {
      margin: [0.5, 0.5, 0.5, 0.5],
      filename: 'report.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <FadeInDiv className="max-w-3xl w-full">
        <div id='report-page'>

          {/* Student Information */}
          <div className="bg-white rounded-lg shadow p-4 mb-4">
            <div className="flex items-center">
              <p htmlFor="studentName" className="font-bold mr-2">
                Student Name:
              </p>
              <p htmlFor="studentName" className=" text-cyan-600 mr-2">
                Dave
              </p>
            </div>
          </div>

          {/* Reports Table */}
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="bg-white rounded-lg shadow p-4 mb-4">
              <h3 className="text-lg font-bold mb-2">Reports</h3>
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="py-2">Course Name</th>
                    <th className="py-2">Course ID</th>
                    <th className="py-2">Grade</th>
                    <th className="py-2">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {reports.map((report) => (
                    <tr key={report.report_id}>
                      <td className="py-2">{report.student_id}</td>
                      <td className="py-2">{report.course_id}</td>
                      <td className="py-2">{report.grade}</td>
                      <td className="py-2">{report.remarks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Total Grade */}
          <div className="bg-white rounded-lg shadow p-4 mb-4">
            <h3 className="text-lg font-bold mb-2">Total Grade</h3>
            <p className="text-3xl font-bold">{totalGrade}</p>
          </div>

          {/* Grade Chart */}

        </div>
        {/* Download Button */}
        <div className="bg-white rounded-lg shadow p-4 mb-4">
          <button
            type="button"
            onClick={handleDownloadPDF}
            className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2"
          >
            <BiDownload className="mr-2" />
            Download as PDF
          </button>
        </div>
      </FadeInDiv>
    </div>
  );
};

export default IndividualReportPage;
