import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';

const coursesData = [
  {
    courseCode: 'CSE101',
    description: 'Introduction to Computer Science',
  },
  {
    courseCode: 'MAT201',
    description: 'Linear Algebra',
  },
  {
    courseCode: 'PHY301',
    description: 'Quantum Mechanics',
  },
  // Add more course objects as needed
];

const CourseCard = ({ courseCode, description }) => {
  const navigate = useNavigate();
  const handleClick =() =>{
    navigate('/dashboard/coursesoutline' ,{state: {id: 1, name: 'sabaoon', shirt: 'green'}});
  }
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg rounded-lg p-6 mb-4"
    >
      <h3 className="text-lg font-semibold">{courseCode}</h3>
      <p className="text-gray-600">{description}</p>
      <button onClick={handleClick} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Open</button>
    </motion.div>
  );
};

export default function LecCourses() {
 

  return (
    <div className="flex flex-col items-center h-screen w-screen sm:w-full">
      <h1 className="text-3xl font-semibold mb-8">Your Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
        {coursesData.map((course, index) => (
          <CourseCard key={index} courseCode={course.courseCode} description={course.description} />
        ))}
      </div>
    </div>
  );
};
