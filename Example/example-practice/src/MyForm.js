import React from 'react'

function MyForm() {
    const handelSubmit =(event)=>{
        event.preventDefault();
        console.log("Button was clicked");
    };
    const handelChange =(event)=>{
        console.log(event.target.value);
    };
  return (
    <div>
      <form action=""  onSubmit={handelSubmit}>
          <input type="text" onChange={handelChange} />
          <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default MyForm
