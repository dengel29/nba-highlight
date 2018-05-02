import React, { Component } from 'react';

const URL_TEAMS = 'http://localhost:3004/teams'

class Poll extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pollTeams: []
        }
    }

    fetchPoll(){
        fetch(`${URL_TEAMS}?poll=true&_sort=count&_order=desc`,
        {method:'GET'})
        .then(response => response.json())
        .then(json => {
            console.log(json)
            this.setState({
                pollTeams:json
            })
        })
    }

    renderPoll(){
        const position = ['1st', '2nd', '3rd']
        return this.state.pollTeams.map((item, index)=>{
            return(
                <div key={item.id} className="poll_item" onClick={()=>this.addCount(item.id, item.count)}>
                    <img src={`/images/teams/${item.logo}`} alt={item.name}/>
                    <h4>{position[index]}</h4>
                    <div>{item.count} Votes</div>
                </div>
            )
        })
    }

    componentDidMount(){
        this.fetchPoll()
    }

    addCount(itemId, itemCount){
        fetch(`${URL_TEAMS}/${itemId}`, {
            method:'PATCH',
            headers:{
                'Accept': 'application/json',
                'Content-type':'application/json',
            },
            body:JSON.stringify({count: itemCount + 1})
        })
        .then(()=>{
            this.fetchPoll()
        })
    }

    render(){
        return(
            <div className="home_poll poll_container">
                {this.renderPoll()}
            </div>
        )
    }
}


export default Poll;
