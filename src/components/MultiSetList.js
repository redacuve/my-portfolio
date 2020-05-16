import React from 'react';

function MultiSetList(props){
    return(
        <div className="set multiset-list">
            <h2 className="br-indigo">{props.title}</h2>
            {
            props.multiset.map(elem => {
                return <div className="subset" key={elem.subtitle}>
                    <h5 className="c-indigo">{elem.subtitle}</h5>
                    <ul className="d-flex list-unstyled flex-wrap">
                        {elem.list.map(lilist => {
                            return <li className="pr-3" key={lilist}>{lilist}</li>
                        })}
                    </ul>
                </div>
            })
            
            }
        </div>
    );
}

export default MultiSetList;