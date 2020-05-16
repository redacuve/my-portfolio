import React from 'react'

function DateSet(props){
    return(
        <div className="dateset">
            <h2 className="br-indigo">{props.title}</h2>
            {props.list.map((elem, index) => {
                return (
                <div className="row" key={index}>
                    <div className="dates col-4 col-lg-3">
                        {elem.dates}
                    </div>
                    <div className="info col-8 col-lg-9">
                        <p>{elem.description}</p>
                        {elem.duties && <ul>{elem.duties.map(elem => {return <li key={elem}>{elem}</li>})}</ul>}
                    </div>
                </div>
            )})
            }
                

        </div>
    );
}

export default DateSet;