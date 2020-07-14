import React from 'react';


function Facts(props) {
        return (
            <div className="fact-box">
                <div>{props.fact}</div>
            </div>    
        );
    
}

export default Facts;