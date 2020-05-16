import React from 'react';

function SetList(props){
    return(
        <div className="set set-list">
            <h2 className="br-indigo">{props.title}</h2>
            <ul className={(props.listflex === true) ? "d-flex flex-wrap" : ""}>
                {
                props.list.map(elem => {
                    return <li className="pr-5" key={elem}>{elem}</li>
                })
                }
            </ul>
        </div>
    );
}

export default SetList;