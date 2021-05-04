import {Component} from 'react'

class Visit extends Component{
    constructor(){
        super()
        this.state = {
            editMode: false,
            followUp: '',
        }
    }

    handleFollowUp = (value) => {
        this.setState({ followUp: value})
    }

    toggleEdit = () => {
        this.setState({ editMode: !this.state.editMode })
    }

    handleSave = () => {
        this.props.editVisit(this.props.visit.id, this.state.followUp)
        this.toggleEdit()
        this.setState({ followUp: '' })
    }

    render() {
        return this.state.editMode ? (
            <div className = 'visit'>
                {}
                <input 
                    value = {this.state.title}
                    onChange = {(e) => this.handleFollowUp(e.target.value)}/>
                {}
                <button onClick = {this.handleSave}>Save</button>
            </div>
        ) : (
            <div className = 'visit'>
                {}
                <p>Pet Name: {this.props.visit.pet}</p>
                <p>Date: {this.props.visit.date}</p>
                <p>Reason: {this.props.visit.reason}</p>
                <p>Follow-up Visit: {this.props.visit.followUp}</p>

                {}
                <button 
                onClick = {() => this.props.deleteVisit(this.props.visit.id)}>
                    Delete Visit
                </button>

                {}
                <button onClick = {this.toggleEdit}>Edit</button>
            </div>
        )
    }
}

export default Visit