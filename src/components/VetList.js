import {Component} from 'react'
import axios from 'axios'
import AddVisit from './AddVisit'
import Visit from './Visit'

class VetList extends Component{
    constructor(){
        super()
        this.state = {
            visitArray: []
        }
    }

    componentDidMount(){
        axios.get('/api/visits')
        .then((res) => {
            this.setState({visitArray: res.data});
        })
        .catch((err) => {
            console.log(err)
        });
    }

    deleteVisit = (id) =>{
        axios.delete(`/api/visits/${id}`)
        .then((res) => {
            this.setState({visitArray: res.data});
        })
        .catch((err) => {
            console.log(err)
        });
    }

    addVisit = (pet, date, reason, followUp) => {
        axios.post(`/api/visits`, {pet, date, reason, followUp})
        .then((res) => {
            this.setState({ visitArray: res.data});
        })
        .catch((err) => {
            console.log(err)
        });
    }

    editVisit = (id, followUp) => {
        axios.put(`/api/visits/${id}`, {followUp})
        .then((res) => {
            this.setState({visitArray: res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render(){
        console.log(this.state)
        return(
            <div>
                <AddVisit addVisit = {this.addVisit}/>
                {this.state.visitArray.map((visit) => {
                    return(
                        <Visit 
                        visit = {visit} 
                        deleteVisit = {this.deleteVisit}
                        editVisit = {this.editVisit}/>
                    )
                })}
            </div>
        )
    }
}

export default VetList