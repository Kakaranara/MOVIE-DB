import React from 'react';

const Nav1 = (props) =>{
    return(
        <div className="container-search">
            <div className="row">
                <form action='' onSubmit={props.handleSubmit}>
                    <div className="search-input" >
                        <input placeholder="Search Movie" type="text" onChange={props.handleChange}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Nav1;