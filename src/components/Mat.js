import React from 'react';

function Mat({mat}) {
  
  return(
    <div className='mat'>
      <img src={mat.image} alt={mat.name}/>
      <button>♡</button>
      <h2>{mat.name + " Yoga Mat"}</h2>
      <h3>{mat.brand}</h3>
      <ul>
        <li>{"Available Widths: " + mat.width1 + "`\"`" + (mat.width2 != null  ? ", " + mat.width2 + "`\"`" : "") + (mat.width3 != null ? ", " + mat.width3 + "`\"`" : "")}</li>
        <li>{"Available Lengths: " + mat.length1 + "`\"`" + (mat.length2 != null ? ", " + mat.length2 + "`\"`" : "")}</li>
        <li>{"Thickness: " + mat.thickness + "mm"}</li>
        <li>{"Weight: " + mat.weight + "lb"}</li>
      </ul>
    </div>
  );
}

export default Mat;



