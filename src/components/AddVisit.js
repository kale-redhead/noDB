import {Component} from 'react'

class AddVisit extends Component{
    constructor(){
        super()
        this.state = {
            pet: '',
            date: '',
            reason: '',
            followUp: '',
        }
    }

    handlePet = (value) => {
        this.setState({ pet: value })
    }
    handleDate = (value) => {
        this.setState({ date: value })
    }
    handleReason = (value) => {
        this.setState({ reason: value })
    }
    handleFollowUp = (value) => {
        this.setState({ followUp: value })
    }

    handleAdd = () => {
        this.props.addVisit(
            this.state.pet,
            this.state.date,
            this.state.reason,
            this.state.followUp
        );
        this.setState({
            pet: '',
            date: '',
            reason: '',
            followUp: ''
        });
    }

    render() {
        return(
            <div>
                <h2>Add Vet Visit Form</h2>
                <input
                    value = {this.state.pet}
                    onChange = {(e) => this.handlePet(e.target.value)}
                    placeholder = 'Enter Pet Name'/>
                <input
                    value = {this.state.date}
                    onChange = {(e) => this.handleDate(e.target.value)}
                    placeholder = 'Enter Date of Visit'/>
                <input
                    value = {this.state.reason}
                    onChange = {(e) => this.handleReason(e.target.value)}
                    placeholder = 'Enter Reason for Visit'/>
                <input
                    value = {this.state.followUp}
                    onChange = {(e) => this.handleFollowUp(e.target.value)}
                    placeholder = 'Enter Follow Up Visit Date'/>
                <button
                    onClick = {this.handleAdd}>
                    Add Vet Visit
                </button>
            </div>
        )
    }
}

export default AddVisit