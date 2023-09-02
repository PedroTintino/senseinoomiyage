import React from "react";
import './LessonBox.css'

import Random from "./Random.jsx";

function LessonBox(){
    return(
        <>
        <div className='phraseReturn'>
            <p><strong>今日の宿題は</strong></p>
            <Random/>
        </div>
        </>
    )
}

export default LessonBox