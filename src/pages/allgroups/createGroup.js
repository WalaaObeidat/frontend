import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { useState , useEffect } from 'react';
import { IoMdPhotos } from "react-icons/io";


export default function CreateGroup(props) {
//     const current_ID = JSON.parse(localStorage.getItem('id'));

//     const [text, setText] = useState("");
// const [file, setFile] = useState(null);

// const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("text", text);
//     formData.append("user_id", current_ID);
//     formData.append("file", file);

//     try {
//       const response = await axios.post(
//         "http://localhost:80/frontend/back_end/groups.php",
//         formData
//       );
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

  return (
    <>

{/*  */}
<div id= "form">

    {/*  Button Add to Group */}
      <h2 style={{color:"white"}}>Create Group</h2>
      <br />


      
       {/*  Form Add to Group */}

       <section className="section_form">
       <form id="consultation-form" className="feed-form" onSubmit={props.handleSubmit}>


         <input  name="title" placeholder="Group Title" type="text" id="text" value={props.text} onChange={(e) => props.setText(e.target.value)} />
         <input name="description" required placeholder="Group Description"  type="text" id="text" value={props.group_description} onChange={(e) => props.setGroupDescription(e.target.value)} />
        <input type="file"  name="img" id="file" accept="image/*"  onChange={(e) => props.setFile(e.target.files[0])} hidden/>
        <label className="label" for="file"><IoMdPhotos size={20}/>Choose Photo</label>


        <br/>

        <button className="BtnAdd"> Create Group </button>
       </form>
     </section>
    </div>

    
    </>
  )
}
