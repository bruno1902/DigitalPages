import React, { Component } from 'react';
import Data from '../../Data/data.json';
import { Link } from "react-router-dom";

import './Content.css';

class Content extends React.Component {
 
    render() {
        return (
            <div className="bgc-content">
                {Data.map((Detail, index)=>{
                    return <div className="content-data">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <Link to="/Info"><img src={Detail.photo}></img></Link>
                    </div>
                })}
            </div>
        );
    }
}

export default Content;


/* import React, { Component } from 'react';
import Data from '../../Data/data.json';

class Content extends React.Component {
 
    render() {
        return (
            <div>
                <h1>hellow</h1>
                {Data.map((postDetail, index)=>{
                    return <div>
                    <p>{postDetail.name}</p>
                    <p>{postDetail.name}</p>
                    <p>{postDetail.name}</p>
                    </div>
                })}
            </div>
        );
    }
}

export default Content; */