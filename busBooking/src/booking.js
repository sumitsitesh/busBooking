import React, {Component} from 'react';
import Input from './Inputtext'
import Seats from './seats'

class Booking extends Component {

    state = {
        totalSeat: 0,
        twoSeated: null,
        threeSeated: null,
        busSeats: [],
        selectedSeats: []
    }

    handleChange = (totalSeat) => {
        // this.setState({totalSeat})
        let selectedSeats = [];
        if(totalSeat) {
            if(totalSeat < 3) {
                this.state.twoSeated.forEach(element => {
                    element.map(seat => {
                        if(selectedSeats.length != totalSeat && seat.status === 'a') {
                            console.log('selectedSeats.length', selectedSeats.length)
                            selectedSeats.push(seat);
                        }
                    })
                });

            if(selectedSeats.length < totalSeat) {
                this.state.threeSeated.forEach(element => {
                    element.map(seat => {
                        if(selectedSeats.length != totalSeat && seat.status === 'a') {
                            console.log('selectedSeats.length', selectedSeats.length)
                            selectedSeats.push(seat);
                        }
                    })
                });
            }
            } else {
                    this.state.threeSeated.forEach(element => {
                        element.map(seat => {
                            if(selectedSeats.length != totalSeat && seat.status === 'a') {
                                console.log('selectedSeats.length', selectedSeats.length)
                                selectedSeats.push(seat);
                            }
                        })
                    });

                    if(selectedSeats.length < totalSeat) {
                        this.state.twoSeated.forEach(element => {
                            element.map(seat => {
                                if(selectedSeats.length != totalSeat && seat.status === 'a') {
                                    console.log('selectedSeats.length', selectedSeats.length)
                                    selectedSeats.push(seat);
                                }
                            })
                        });
                    }
            }
        }
        console.log(selectedSeats)

        if(selectedSeats.length < totalSeat) {
            this.setState({selectedSeats: []})
            console.log(`Error: Only ${selectedSeats.length} available`)
        } else {
        this.setState({selectedSeats})
        }
        
    }

    componentDidMount = () => {

        const busSeats = [ 
            {seatNumber: '1', row: 'A', status: 'a'},{seatNumber: '2', row: 'A', status: 'a'},{seatNumber: '3', row: 'A', status: 'a'},{seatNumber: '4', row: 'A', status: 'b'},{seatNumber: '5', row: 'A', status: 'b'},
            {seatNumber: '1', row: 'B', status: 'a'},{seatNumber: '2', row: 'B', status: 'a'},{seatNumber: '3', row: 'B', status: 'a'},{seatNumber: '4', row: 'B', status: 'b'},{seatNumber: '5', row: 'B', status: 'a'},
            {seatNumber: '1', row: 'C', status: 'a'},{seatNumber: '2', row: 'C', status: 'a'},{seatNumber: '3', row: 'C', status: 'a'},{seatNumber: '4', row: 'C', status: 'b'},{seatNumber: '5', row: 'C', status: 'b'},
            {seatNumber: '1', row: 'D', status: 'b'},{seatNumber: '2', row: 'D', status: 'a'},{seatNumber: '3', row: 'D', status: 'a'},{seatNumber: '4', row: 'D', status: 'a'},{seatNumber: '5', row: 'D', status: 'b'},
            {seatNumber: '1', row: 'E', status: 'b'},{seatNumber: '2', row: 'E', status: 'a'},{seatNumber: '3', row: 'E', status: 'a'},{seatNumber: '4', row: 'E', status: 'b'},{seatNumber: '5', row: 'E', status: 'b'},
        ]

        this.mapSeatsInRow(busSeats)
    }

    mapSeatsInRow = (busSeats) => {
        let threeSeated = new Map();
        let twoSeated = new Map();

        busSeats.map(seat => {
            if(seat.seatNumber < 4) {
                const row = threeSeated.get(seat.row);
                if(row) {
                    row.push(seat);
                }else {
                    const key = seat.row
                    threeSeated.set(key, [seat])
                }
            }
            else {
                const row = twoSeated.get(seat.row);
                if(row) {
                    row.push(seat);
                }else {
                    const key = seat.row
                    twoSeated.set(key, [seat])
                }
            }
        })

        this.setState({threeSeated, twoSeated, busSeats})
    }

  render() {

      return (
          <div>
          <h1>Booking</h1>
          <Input handleChange={this.handleChange} totalSeat={this.state.totalSeat}/>
          <Seats twoSeated={this.state.twoSeated} threeSeated={this.state.threeSeated} selectedSeats={this.state.selectedSeats}/>
          </div>
      );
  }
}

export default Booking;