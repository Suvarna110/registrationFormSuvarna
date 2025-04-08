import {useState} from "react";
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password: "",
    id:"",
    createdAt:"",
  });

  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value});
  };

  const handleSubmit = async(e) => {
   e.preventDefault();

  const response = await fetch(
    "https://rltrduclhd.execute-api.us-west-2.amazonaws.com/Suvarnatestdeployr",
  {
    methos: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(formData),
  }
  );

  const data = await response.json();
  alert(data.message);
};

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
           <input type="text" name="name" placeholder="Name" onChange={handleChange} required/>
           <input type="email" name="email" placeholder="Email" onChange={handleChange} required/>
           <input type="password" name="password" placeholder="Password" onChange={handleChange} required/>
           <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
