import React, { Component } from 'react';

class Subscriptions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            error: false,
            success:false
        }
    }

    onChangeInput = (event) => {
        this.setState({
            email:event.target.value
        })
        console.log(this.state.email)
    }

    saveEmail = (email) => {
        const URL_EMAIL = 'http://localhost:3004/subcriptions'

        fetch(URL_EMAIL,{
            method: 'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({email})
        }).then(res => res.json())
        .then(()=>{
            this.setState({
                email:'',
                success:true
            })
        })
    }


    // .bind(this) at the end of this setTimeout function allows us to use this.setState, otherwise will not
    clearMessages = () => {
        setTimeout(function(){
            this.setState({
                error:false,
                success:false
            })
        }.bind(this),3000)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let email = this.state.email;
        let regex = /.+\@.+\..+/;

        if(regex.test(email)){
            this.saveEmail(email)
        } else {
            this.setState({
                error:true
            })
        }
        this.clearMessages();
    }

    render() {
        return (
            <div className="subscribe_panel">
                <h3>Subscribe</h3>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input
                        type="text"
                        placeholder="email@email.com"
                        value={this.state.email}
                        onChange={this.onChangeInput}/>
                    </form>
                    <div className={this.state.error ? "error show" : "error"}>Double check that email</div>
                    <div className={this.state.success ? "success show" : "success"}>Thankyou</div>
                </div>
                <small>
                    Lorem ipsum dolor banana fanafa farafa
                </small>
            </div>
        );
    }
}

export default Subscriptions;

