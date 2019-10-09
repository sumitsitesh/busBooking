import React, {Component} from 'react';

class Seats extends Component {

  render() {
    const { threeSeated, twoSeated, selectedSeats} = this.props

    

const concatedSeats = selectedSeats.map(seat => `${seat.row}-${seat.seatNumber}`)
const threeSeatedKeys = threeSeated && [...threeSeated.keys()]
const twoSeatedKeys = twoSeated && [...twoSeated.keys()]
console.log( 'twoSeated :: ', twoSeated)
      return (
          <div style={{width:'400px', height:'300px', border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{padding: '5px'}}>
                {threeSeatedKeys && threeSeatedKeys.map(key => (
                    <div style={{display:'flex'}}>
                        {threeSeated.get(key).map((item, key) => {
                            const tempSeat = `${item.row}-${item.seatNumber}`
                            return <div key={key}>
                                <div style={{width: '45px', height: '45px',borderRadius: '5px', 
                                    backgroundColor: item.status === 'b' ? '#F76F8E' : concatedSeats.includes(tempSeat) ? '#058ED9' : '#94C9A9', margin: '3px', 
                                    display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                {`${item.row}-${item.seatNumber}`}
                                </div>
                            </div>
                        })}
                    </div>
                ))}
            </div>
            <div style={{marginLeft: '100px'}}>
                {twoSeatedKeys && twoSeatedKeys.map(key => (
                    <div style={{display:'flex'}}>
                        {twoSeated.get(key).map((item, key) => {
                            const tempSeat = `${item.row}-${item.seatNumber}`
                            return<div key={key}>
                                <div style={{width: '45px', height: '45px',borderRadius: '5px', 
                                    backgroundColor: item.status === 'b' ? '#F76F8E' : concatedSeats.includes(tempSeat) ? '#058ED9' : '#94C9A9', margin: '3px', 
                                    display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    {`${item.row}-${item.seatNumber}`}
                                </div>
                            </div>
                        })}
                    </div>
                ))}
            </div>
          </div>
      );
  }
}

export default Seats;