import React from 'react'

function ButtonRegis ({label}){
    return(
      <div className='button-container'>
      <button className="btn btn1" style={{color: '#DAFFFB', fontWeight: 'bold'}}>
      {label}
    </button>
    </div>
    );
}


export default ButtonRegis;