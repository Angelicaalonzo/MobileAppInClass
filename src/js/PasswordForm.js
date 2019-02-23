
class PasswordInput extends React.Component {

    //constructor
    constructor(props){
        super(props);
        this.state = {delivery_password: ''}; 

        this.handlePasswordChange = this.handlePasswordChange.bind(this);

    }

    handlePasswordChange(event){
        const delivery_password = event.target.value;
        this.setState( () => {
                return {
                    delivery_password
                }
            }
        );

    }

    render() {
        return (
            <div className="form-group">
                <p>{this.props.specialcode}</p>
                <input className="form-control" 
                       id="passwordInput" 
                       onChange={this.handlePasswordChange}
                       placeholder="Enter Your Password" 
                       type="input"
                       value={this.state.delivery_password}  />
            </div>
        );
    };

    
}