import React, { useState } from "react";

function Form() {
  const[formData,setFormData]= useState({firstName:"Dennis",lastName:"Mwendwa",admin:false})
  // const [firstName, setFirstName] = useState("John");
  // const [lastName, setLastName] = useState("Henry");

  // function handleFirstNameChange(event) {
  //   setFormData({...formData,firstName:event.target.value});
  // }

  // function handleLastNameChange(event) {
  //   setFormData({...formData,lastName:event.target.value});
  // }
  
  function handleChange(event){
    const name =event.target.name;
    let value =event.target.value;
    if(event.target.type === "checkbox"){
      value =event.target.checked
    }
setFormData({...formData,[name]:value})

  }
  function handleSubmit(event){
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstname"onChange={handleChange} value={formData.firstName} />
      <input type="text" name="lastname" onChange={handleChange} value={formData.lastName} />
      <input type ="checkbox" name="admin" onChange={handleChange} checked={formData.admin}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
