import React from 'react'; 

import DisplayScreenRow from './displayScreenRow.js';

const DisplayScreen = (props) => {
    return (
        <div className="screen"> 
            <DisplayScreenRow value = {props.question}/>
            <DisplayScreenRow value = {props.answer}/>
        </div>
    )
}

export default DisplayScreen; 