import React from 'react';

function MultiSetList(props){
    return(
        <div className="set multiset-list">
            <h2>{props.title}</h2>
            {
            props.multiset.map(elem => {
                return <div className="subset" key={elem.subtitle}>
                    <h5>{elem.subtitle}</h5>
                    <ul className="d-flex">
                        {elem.list.map(lilist => {
                            return <li key={lilist}>{lilist}</li>
                        })}
                    </ul>
                </div>
            })
            
            }
        </div>
    );
}

export default MultiSetList;