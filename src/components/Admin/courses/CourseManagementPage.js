import React, { useEffect, useState } from 'react';
import { BiSave, BiTrash, BiEdit } from 'react-icons/bi';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';

// Define the fade-in animation using styled-components and react-animations
const FadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 1s ${FadeInAnimation};
`;

const CourseManagementPage = () => {
  const [courses, setCourses] = useState([

  ]);
  const [load, setload] = useState(true)
  const [editingCourse, setEditingCourse] = useState(null);
  const [courseid, setcourseid] = useState('');
  const [sno, setsno] = useState('');

  const [coursename, setcoursename] = useState('');


  const handlecourseid = (event) => {
    setcourseid(event.target.value)
    console.log(event.target.value)
  };

  const handlecoursename = (event) => {
    setcoursename(event.target.value)

  };

  const handleAddCourse = () => {
    if (courseid !== '' && coursename !== '') {
      const jarray = [];


      jarray.push({
        courseid,
        coursename,
      });
      let mydata = 0
      mydata = JSON.stringify(jarray);
      // alert('ok')

      console.log(mydata)
      const url = "/insertcourse.php";

      const b = false;

      axios
        .post(url, mydata, { headers: { "Content-Type": "application/json" } })
        .then((response) => {
          // alert('error')
          // check response
          console.log(response)
          if (response.data[0].status === 1) {
            alert('Course added Successfully');
            setEditingCourse(false)
            handleloadcourses()

          } else {

            alert('Invalid Details');
          }
        })
        .catch((error) => {
          if (error.response) {
            alert(error.response.data);
            alert(error.response.status);
            alert(error.response.headers);
          }
        })
    } else {
      alert('invalid value')
    }
  };

  const handleEditCourse = (id, name, sno) => {
    setEditingCourse(true)
    setcourseid(id)
    setcoursename(name)
    setsno(sno)


  };

  const handleUpdateCourse = () => {
    const jarray = [];
    jarray.push({
      courseid,
      coursename,
      sno,
      mkey: 1090,
    });
    let mydata = 0
    mydata = JSON.stringify(jarray);
    // alert('ok')

    console.log(mydata)
    const url = "/updatecourse.php";

    const b = false;

    axios
      .post(url, mydata, { headers: { "Content-Type": "application/json" } })
      .then((response) => {
        // alert('error')
        // check response
        console.log(response)
        if (response.data[0].status === 1) {
          alert('Course Updated Successfully');
          setEditingCourse(false)
          handleloadcourses()

        } else {

          alert('Invalid Details');
        }
      })
      .catch((error) => {

        console.log(error)
      })




  };

  const handleDeleteCourse = (sno) => {
    const jarray = [];
    jarray.push({
      sno,
      mkey: 1090,
    });
    let mydata = 0
    mydata = JSON.stringify(jarray);
    // alert('ok')

    console.log(mydata)
    const url = "/delete_course.php";

    const b = false;

    axios
      .post(url, mydata, { headers: { "Content-Type": "application/json" } })
      .then((response) => {
        // alert('error')
        // check response
        alert('course deleted successfully')
        handleloadcourses()
      })
      .catch((error) => {

        console.log(error)
      })

  };


  const handleloadcourses = async () => {
    const jarray = [];
    jarray.push({ key: "101w021" });
    const mydata = JSON.stringify(jarray);
    const url = '/listcourse.php';
    try {
      const { data: response } = await axios.post(url, mydata, {
        headers: { "Content-Type": "application/json" }
      });
      setCourses(response);
      console.log(response)
      setload(false)

    } catch (error) {
      console.log(error)
      alert("Error1 ");
    }
  };

  useEffect(() => {
    // Simulate loading data from an API or database
    setTimeout(() => {
      (async () => {
        await handleloadcourses();
      })();
    }, 1500);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <FadeInDiv className="max-w-xl w-full">
        <h2 className="text-2xl font-bold mb-4">Course Management</h2>

        {/* Add or Edit Course Form */}
        <div className="bg-white rounded-lg shadow p-4 mb-4">
          <h3 className="text-lg font-bold mb-2">{editingCourse ? 'Edit Course' : 'Add Course'}</h3>
          <div className="mb-4">
            <p htmlFor="courseid" className="block text-sm font-medium text-gray-700">
              Course ID
            </p>
            <input
              type="text"
              id="courseid"
              name="courseid"
              value={courseid}
              onChange={handlecourseid}
              className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
            />
          </div>
          <div className="mb-4">
            <p htmlFor="coursename" className="block text-sm font-medium text-gray-700">
              Course Name
            </p>
            <input
              type="text"
              id="coursename"
              name="coursename"
              value={coursename}
              onChange={handlecoursename}
              className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
            />
          </div>
          {editingCourse ? (
            <button
              type="button"
              onClick={handleUpdateCourse}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2"
            >
              Update Course
            </button>
          ) : (
            <button
              type="button"
              onClick={handleAddCourse}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2"
            >
              Add Course
            </button>
          )}
        </div>

        {/* Display Course Cards */}
        {load ? (<p>Loading</p>) : (

          <>{courses.map((course) => (
            <div key={course.courseid} className="bg-white rounded-lg shadow p-4 mb-4">
              <div className="flex justify-end">
                <BiEdit
                  className="text-blue-500 hover:text-blue-600 cursor-pointer"
                  onClick={() => handleEditCourse(course.courseid, course.coursename, course.sno)}
                />
                <BiTrash
                  className="text-red-500 hover:text-red-600 cursor-pointer ml-2"
                  onClick={() => handleDeleteCourse(course.sno)}
                />
              </div>
              <h3 className="text-lg font-bold">{course.coursename}</h3>
              <p className="text-gray-500">{course.courseid}</p>
            </div>
          ))}</>)}
      </FadeInDiv>
    </div>
  );
};

export default CourseManagementPage;
