import React from 'react';
import './Home.css'
import image from '../res/Images/AaronEricksonOffice1Background.png'
import Resume from './Resume'
import CoverLetter from './CoverLetter'

class Home extends React.Component {
    constructor(props) {
        super(props);
    
        // Initialize state in the constructor
        this.state = {
          page: 1,
        };
      }

    navigateTo(page) {
        if (page === 1) {
            return CoverLetter()
        }
        else if (page === 2) {
            return (<Resume/>)
        } 
    }

    render() {
        console.log(this.state.page)
        return (
            <div>
                <div className="container">
                <img width="" src={image} alt=""></img>
                
                <div className="first-and-last-name">
                        Aaron<br/>Erickson
                    </div>
                    
                </div>
                <br/>
                <button className="nav-buttons" onClick={() => this.setState({page:1})}>Home</button>
                <button className="nav-buttons" onClick={() => this.setState({page:2})}>Resume</button>
                <button className="nav-buttons" onClick={() => this.setState({page:3})}>GitHub</button>
                <button className="nav-buttons" onClick={() => this.setState({page:4})}>Feed</button>
                {/* <div className="spacer"></div> */}
                {this.navigateTo(this.state.page)}
                <div className="spacer"></div>
                <div className="spacer"></div>
            </div>
        )
    }
}

export default Home;