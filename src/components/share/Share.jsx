import "./share.css";
import { MdPermMedia,MdLabelImportantOutline,MdOutlineMeetingRoom,MdEmojiEmotions } from 'react-icons/md';
import { useEffect, useState } from "react";
import axios from "axios";
import { CgSoftwareUpload } from "react-icons/cg";


export default function Share() {

  const current_ID = JSON.parse(localStorage.getItem('id'));
  const ImageUser = localStorage.getItem('image');

  const [users,setUsers] = useState([]);
  const [inputs , setInputs] = useState("")
  const [posts , setPosts] = useState([]);
  const [comments , setComments] = useState([]);


  const [file, setFile] = useState(null);

  useEffect(()=>{
    getUsers();
  

},[]);
  const getUsers = async () => {

    await axios.get(`http://localhost:80/react_project/back_end/user.php/read/${current_ID}`)
    .then((respone)=>{
        setUsers(respone.data[0])
       
    })
}

// create post
const handleImagePost = async (e) => {
  e.preventDefault();

  const formData = new FormData();

  formData.append("post", inputs);
  formData.append("user_id", current_ID);
  formData.append("file", file);

  try {
    const response = await axios.post(
      "http://localhost:80/frontend/back_end/posts.php", formData
    );
    console.log(response.data);
    window.location.assign('/');
  } catch (error) {
    console.error(error);
  }
};

const handlePost = (e) => {
  const value = e.target.value;
  setInputs(value)
}
  return (
    <form onSubmit={handleImagePost}>
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={ ImageUser ? require(`../image/${ImageUser}`) : require(`../image/icon.png`)} alt="" />
          <input
            placeholder="What's in your mind Safak?"
            className="shareInput"
            id={current_ID} rows={4} style={{background: '#fff'}} onChange={handlePost}
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    {/* <MdPermMedia htmlColor="tomato" className="shareIcon"/> */}
                    <input type="file" className="shareInput" id="file"
            onChange={(e) => setFile(e.target.files[0])} hidden/>
            <label for="file"><CgSoftwareUpload size={20}/> Choose file</label>
                    {/* <input
            type="file" 
            className="shareInput" id="file"
            onChange={(e) => setFile(e.target.files[0])}/>  */}
                           
            </div>
                {/* <div className="shareOption">
                    <MdLabelImportantOutline htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <MdOutlineMeetingRoom htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <MdEmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                </div> */}
            </div>
            <button type="submit" className="shareButton">Post</button>
        </div>
      </div>
    </div>
    </form>
  );
}