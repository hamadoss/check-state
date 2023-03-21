import React, { Component } from 'react'
import profilepic from "./profilepic.png"
class Profile extends Component {
  
    Person = {
        fullname : "Mohamed Alibi",
        bio : "bio",
        imgSrc : profilepic,
        Profession : "Developer"

    }
    render() {
        return(
            <div>
                <h3>{this.Person.fullname}</h3>
                <h3>{this.Person.bio}</h3>
                <h3>{this.Person.Profession}</h3>
                <img src={this.Person.imgSrc} alt="" />
            </div>
        )
    }
  
}

export default Profile