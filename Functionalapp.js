
import axios from 'axios'
import qs from 'qs';
import { useState } from "react";
import React, { useEffect } from "react";


 function App() {
   
   const [data, setData] = useState([]);
   const [data1, setData1] = useState([]);

   useEffect(() => {

    // Calling API 0
     fetch('http://35.244.8.93:3000/Get_testimonial1', {
          method: 'POST',
          body: new URLSearchParams({
            'id': '56609cdc79b2838b15c2950d5dbf654b'
          })
        })
       .then((res) => res.json())
       .then((data) => {
         setData(data.response);
       })
       .catch((err) => {
         console.log(err);
       });


    // Calling API 1
     fetch('http://35.244.8.93:3000/get_course_detail/', {
       method: 'POST',
       body: new URLSearchParams({
         'id': '56609cdc79b2838b15c2950d5dbf654b'
       })
     })
       .then((res) => res.json())
       .then((data) => {
         setData1(data.response);
       })
       .catch((err) => {
         console.log(err);
       });
   }, []);
   console.log(data[0]);
   console.log(data1[0]);
  return (
    <>
      <ul>
        {data.map((item,index) => {
          return <p key={index}>{item.fname}</p>
        })}
      </ul>

      <ul>
        {data1.slice(0,4).map((value, index) => {
          return <li key={index}>{value.course_slug}</li>
        })}
      </ul>
    </>
  );
}


export default App;
