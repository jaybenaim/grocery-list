import React from 'react';

const Form = ({onFormSubmit, type}) => {
  const nameRef = React.createRef(); 


  const handleSubmit = (event) => {
    event.preventDefault();

    const item = { 
      name: nameRef.current.value,
      quantity: 1, 
      type: type,
    }
    
    nameRef.current.value = '' 
    onFormSubmit(item)
  }
  return (
   <form id="newItem" className="newitem" auto-complete="off" onSubmit={handleSubmit}>
     <label htmlFor="itemName" className="line-label">New Item</label>
     <div className="addnew">
       <input ref={nameRef} type="text" name="item" id="itemName" className="form-component inpt" placeholder="What do you need?" />
       <input type="submit" value="Add" className="form-component btn" />
     </div>
   </form>
  );
};

export default Form;
