import React from 'react';

function SetList(props){
    return(
        <div className="set set-list">
            <h2>{props.title}</h2>
            <ul className={(props.listflex === true) ? "d-flex" : ""}>
                {
                props.list.map(elem => {
                    return <li key={elem}>{elem}</li>
                })
                }
            </ul>
        </div>
    );
}

export default SetList;