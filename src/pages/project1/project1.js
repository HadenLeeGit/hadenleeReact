import React from 'react';
var nasa = new XMLHttpRequest();

//NASA API
nasa.open("GET", "https://api.nasa.gov/planetary/apod?api_key=jdWAgkBikUsBEkhRVGhK9g52CE23uO4xhVJyxIdI");
nasa.send();

//get info
var response
nasa.addEventListener("load", function(){
    if(nasa.status == 200 && nasa.readyState == 4){
        response = JSON.parse(nasa.responseText);
    }
})
export class Project1 extends React.Component {

    render() {return (
        <main id="projects" style={{marginTop:84}}>
            <div className="project">
                <h1>NASA Astronomy Picture Of The Day</h1>
                <h2 id="title">{response.title}</h2>,
                <h3>Date: <span id="date">{response.date}</span></h3>
                <img id="pic" src={response.hdurl} alt="APOD" width="100%"></img>
                    <p id="explanation">{response.explanation}</p>,
            </div>
        </main>
    );}
}