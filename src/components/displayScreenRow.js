import React from 'react'; 


const DisplayScreenRow = (props) => {
    return (
        <div className="screen-row"> 
            <input type="text" readOnly value = {props.value}/>
        </div>
    )
}

export default DisplayScreenRow; 