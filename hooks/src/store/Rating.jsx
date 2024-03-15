import React from "react";

function Rating({count,rate}) {
    
    return(
        <>
        <span className="badge badg-pill bg-primary"> {rate} / 5  </span>
        </>
    )
}
export default Rating;