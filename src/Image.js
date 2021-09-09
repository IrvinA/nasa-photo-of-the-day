import React from "react";
export default function Image(props) {
    const { image } = props;

    return (
        <div className="Current-image">
            <img src={image} alt="NASA Pic of the Day"/>
        </div>
    )
}