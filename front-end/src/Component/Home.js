import React from 'react';
import Footer from './Footer.js';
import axios from 'axios';
import Header from './Header.js';
import Signup from './Signup.js'
class Home extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         userEmail: ''
    //     }    
    //     this.takeEmailValue = this.takeEmailValue.bind()
    // }
    // takeEmailValue = (e) => { 
    //     this.setState({ userEmail: e.target.value })
    //  }

    // componentDidMount() {
    //     axios({
    //         method: 'post',
    //         url: '/Home',
    //         data: {
    //             email: this.state.userEmail,
    //             firstName: 'shedrack',
    //             lastName: 'akintayo'
    //         }
    //     });
    // }

    // shouldComponentUpdate(){
    //     console.log(this.state.userEmail);
    // }
render(){
    return (
    <div className="App">
        <Header></Header>
        <img src={process.env.PUBLIC_URL + "/car.jpg"} width="100%"></img>
        <div className="ttl">
                <h1>Welcome to ParkWise</h1>
        </div>
        <Footer></Footer>
    </div>
    );
    }
}
export default Home;