import React from 'react';

function InputData() {
  return (
    <div>
      <input type="text" className="input-form" placeholder="Enter Book Name" />
      <input type="text" className="input-form" placeholder="Enter Author Name" />
      <input type="button" className="input-form" value="Enter " />
    </div>
  );
}

export default InputData;
