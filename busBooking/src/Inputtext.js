import React, {Component} from 'react';

class Input extends Component {

  render() {
      const {handleChange, numberOfSeats} = this.props
      return (
        <div>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Seats:
                    <input type="text" value={numberOfSeats} name="no of seats" onChange={(e) => handleChange(e.target.value)}/>
                </label>
            </form>
        </div>
      );
  }
}

export default Input;