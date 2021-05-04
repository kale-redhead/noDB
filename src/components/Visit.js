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
                    value = {this.state.followUp}
                    onChange = {(e) => this.handleFollowUp(e.target.value)}
                    placeholder = 'Enter New Follow Up Visit Date'/>
                {}
                <button onClick = {this.handleSave}>Save</button>
            </div>
        ) : (
            <div className = 'visit'>
                {}
                <p>{this.props.visit.date}</p>
                <p>{this.props.visit.pet}</p>
                <p>{this.props.visit.reason}</p>
                <p>Next Vet Visit: {this.props.visit.followUp}</p>

                {}
                <button className = 'button1'
                onClick = {() => this.props.deleteVisit(this.props.visit.id)}>
                    Delete Visit
                </button>

                {}
                <button className = 'button2' onClick = {this.toggleEdit}>Edit</button>
            </div>
        )
    }
}

export default Visit