import React, { useState } from 'react';
import { BiSave, BiTrash, BiEdit } from 'react-icons/bi';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';

// Define the fade-in animation using styled-components and react-animations
const FadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 1s ${FadeInAnimation};
`;

const CourseOutlineManagementPage = () => {
    const [courseOutlineData, setCourseOutlineData] = useState([
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
    ]);

    const [editingIndex, setEditingIndex] = useState(-1);
    const [newCourse, setNewCourse] = useState({
        courseid: '',
        title: '',
        subtitle: [],
        assignments: [],
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewCourse((prevCourse) => ({
            ...prevCourse,
            [name]: value,
        }));
    };

    const handleArrayInputChange = (event, index) => {
        const { name, value } = event.target;
        setNewCourse((prevCourse) => {
            const updatedArray = [...prevCourse[name]];
            updatedArray[index] = value;
            return {
                ...prevCourse,
                [name]: updatedArray,
            };
        });
    };

    const handleAddCourse = () => {
        const jarray = [];
        jarray.push({
            courseid: newCourse.courseid,
            title: newCourse.title,
            subtitle: newCourse.subtitle,
            assignments: newCourse.assignments,
        });
        let mydata = 0
        mydata = JSON.stringify(jarray);
        // alert('ok')

        // const url = "http://localhost/LMS_backend/login.php";

        // const b = false;

        axios
            .post("/insertcourse_outline.php", mydata, { headers: { "Content-Type": "application/json" } })
            .then((response) => {
                alert('error')
                // check response
                console.log()
                if (response.data[0].status === 1) {
                    alert('okay')
                } else {

                    alert('error')
                }
            })
            .catch((error) => {
                if (error.response) {
                    alert(error.response.data);
                    alert(error.response.status);
                    alert(error.response.headers);
                }
            })
        setNewCourse({
            courseid: '',
            title: '',
            subtitle: [],
            assignments: [],
        });
    };


    const handleEditCourse = (index) => {
        setEditingIndex(index);
        setNewCourse(courseOutlineData[index]);
    };

    const handleUpdateCourse = () => {
        setCourseOutlineData((prevData) => {
            const updatedData = [...prevData];
            updatedData[editingIndex] = newCourse;
            return updatedData;
        });
        setEditingIndex(-1);
        setNewCourse({
            courseid: '',
            title: '',
            subtitle: [],
            assignments: [],
        });
    };

    const handleDeleteCourse = (index) => {
        setCourseOutlineData((prevData) => {
            const updatedData = [...prevData];
            updatedData.splice(index, 1);
            return updatedData;
        });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <FadeInDiv className="max-w-xl w-full">
                <h2 className="text-2xl font-bold mb-4">Course Outline Management</h2>

                {/* Add or Edit Course Form */}
                <div className="bg-white rounded-lg shadow p-4 mb-4">
                    <h3 className="text-lg font-bold mb-2">{editingIndex === -1 ? 'Add Course' : 'Edit Course'}</h3>
                    <div className="mb-4">
                        <p htmlFor="courseid" className="block text-sm font-medium text-gray-700">
                            Course ID
                        </p>
                        <input
                            type="text"
                            id="courseid"
                            name="courseid"
                            value={newCourse.courseid}
                            onChange={handleInputChange}
                            className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <p htmlFor="title" className="block text-sm font-medium text-gray-700">
                            Title
                        </p>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={newCourse.title}
                            onChange={handleInputChange}
                            className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <p htmlFor="subtitle" className="block text-sm font-medium text-gray-700">
                            Subtitles
                        </p>
                        {newCourse.subtitle.map((subtitle, index) => (
                            <input
                                key={index}
                                type="text"
                                name="subtitle"
                                value={subtitle}
                                onChange={(event) => handleArrayInputChange(event, index)}
                                className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
                            />
                        ))}
                        <button
                            type="button"
                            onClick={() => setNewCourse((prevCourse) => ({ ...prevCourse, subtitle: [...prevCourse.subtitle, ''] }))}
                            className="text-blue-500 hover:underline mt-2"
                        >
                            Add Subtitle
                        </button>
                    </div>
                    <div className="mb-4">
                        <p htmlFor="assignments" className="block text-sm font-medium text-gray-700">
                            Assignments
                        </p>
                        {newCourse.assignments.map((assignment, index) => (
                            <input
                                key={index}
                                type="text"
                                name="assignments"
                                value={assignment}
                                onChange={(event) => handleArrayInputChange(event, index)}
                                className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
                            />
                        ))}
                        <button
                            type="button"
                            onClick={() => setNewCourse((prevCourse) => ({ ...prevCourse, assignments: [...prevCourse.assignments, ''] }))}
                            className="text-blue-500 hover:underline mt-2"
                        >
                            Add Assignment
                        </button>
                    </div>
                    {editingIndex === -1 ? (
                        <button
                            type="button"
                            onClick={handleAddCourse}
                            className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2"
                        >
                            Add Course
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={handleUpdateCourse}
                            className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2"
                        >
                            Update Course
                        </button>
                    )}
                </div>

                {/* Display Course Outlines */}
                {courseOutlineData.map((course, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow p-4 mb-4 cursor-pointer hover:bg-gray-100 transition duration-300"
                    >
                        <div className="flex justify-end">
                            <BiEdit className="text-blue-500 hover:text-blue-600 cursor-pointer" onClick={() => handleEditCourse(index)} />
                            <BiTrash className="text-red-500 hover:text-red-600 cursor-pointer ml-2" onClick={() => handleDeleteCourse(index)} />
                        </div>
                        <h3 className="text-lg font-bold">{course.title}</h3>
                        <p className="text-gray-500">{course.courseid}</p>
                        <div className="mt-4">
                            <h4 className="text-md font-bold">Subtitles:</h4>
                            <ul className="list-disc list-inside">
                                {course.subtitle.map((subtitle, index) => (
                                    <li key={index}>{subtitle}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-4">
                            <h4 className="text-md font-bold">Assignments:</h4>
                            <ul className="list-disc list-inside">
                                {course.assignments.map((assignment, index) => (
                                    <li key={index}>{assignment}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </FadeInDiv>
        </div>
    );
};

export default CourseOutlineManagementPage;
