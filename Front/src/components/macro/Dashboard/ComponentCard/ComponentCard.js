import React from "react";
import './ComponentCard.css'

function ComponentCard(props){
    return (
        <>
            <div className={"dashboard-card col-12 col-lg-9 my-5 mx-lg-4"}>
                {props.children}
            </div>
        </>
    )
}

export default ComponentCard