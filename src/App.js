import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="row">
                    <div className="six columns character">
                        <img
                            src="https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-wraith.png.adapt.crop16x9.png"
                            className="u-max-full-width"/>
                        <h1>Larius11</h1>
                    </div>
                    <div className="six columns">
                        <table className="u-full-width">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Sex</th>
                                <th>Location</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Dave Gamache</td>
                                <td>26</td>
                                <td>Male</td>
                                <td>San Francisco</td>
                            </tr>
                            <tr>
                                <td>Dwayne Johnson</td>
                                <td>42</td>
                                <td>Male</td>
                                <td>Hayward</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="twelve columns">
                        <img src="https://trackercdn.com/cdn/apex.tracker.gg/legends/wraith-concept-bg-small.jpg" className="u-max-full-width character-bg" alt="transparent image"/>
                        Statistics...
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
