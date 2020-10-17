import React from 'react';
import axios from 'axios';
import Header from './Header.js';

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
    /*<div>
        <div>Hello world</div>
            <form  action="Home.js" method="post" id="contactForm" novalidate="novalidate">
                <div class="row">
                    <div class="col-sm-6">
                        <div>
                            <input name="name" id="contactName" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" placeholder="Enter your name" />
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div>
                            <input name="email" onChange={this.takeEmailValue} id="contactEmail" type="email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" placeholder="Email" />
                        </div>
                    </div>
                    <div class="col-12">
                        <div>
                            <input name="subject" id="contactSubject" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Subject'" placeholder="Enter Subject" />
                        </div>
                    </div>
                    <div class="col-12">
                        <div >
                            <textarea class="form-control w-100" name="message" id="contactMessage" cols="30" rows="9" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'" placeholder=" Enter Message"></textarea>
                        </div>
                    </div>
                </div>
                <div class="form-group mt-3">
                    <button type="submit" class="button button-contactForm boxed-btn" id="contactUsBtn">Send</button>
                </div>
            </form> 
    </div>*/
    <div className="App">
        <Header></Header>
    </div>
    );
}
}
export default Home;