import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {
    state={
        isLoggedIn:false,
        email:'',
        name:'',
        picture:'',
        UserID:'',
        phone:''


    }
    responseFacebook=response=>{
    
      this.setState({
      isLoggedIn:true,
      UserID:response.userID,
      name:response.name,
      email:response.email,
     
      picture:response.picture.data.url
    });
    }
    componentClicked=()=> console.log("clicked");
    
  render() {
    let fbContent
    if (this.state.isLoggedIn){
        fbContent=(
            <div style={{
                width:'400px',
                margin:'auto',
                //background:'#f4f4f4',
                padding:'20px'
            }}>
                <img src={this.state.picture} alt={this.state.name}/>
                <h2>Welcome {this.state.name}</h2>
              
              

            </div>
        );

    }else{
   
        fbContent = (
            <FacebookLogin
            appId="7113783495392290"
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook} />
        );

        
    }
    return (
      <div>
        {fbContent}
      </div>
    )
  }
}
