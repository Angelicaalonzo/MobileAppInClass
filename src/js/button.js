
class Button extends React.Component {

    //constructor
    constructor(props){
        super(props);
        this.state = {delivery_button: ''}; 

    }

    render() {
        return (
            <div className="form-group">
                <p>{this.props.specialcode}</p>
                <input className="form-control" 
                       id="Button" 
                       placeholder="Submit" 
                       type="Submit"
                         />
            </div>
        );
    };

    
}