import './App.css';
import {Component} from "react"

console.log("Rukesh Rukku")

class App extends Component {

  state = {hr: "", mm: "", ss: "", ss2: ""}

  displayTime = () => {
    const date = new Date()

    let hh = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()

    let hRotate = `${30*hh + mm/2}deg`;
    let mRotate = `${6*mm}deg`;
    let sRotate = `${6*ss}deg`;
    let ss2Rotate = `${6*ss - 180}deg`
    this.setState({hr: hRotate, mm: mRotate, ss: sRotate, ss2: ss2Rotate})
  }

  componentDidMount() {
    setInterval(this.displayTime, 1000)
  }

  render() {
    const hours = this.state.hr
    const minutes = this.state.mm
    const seconds = this.state.ss
    const sec = this.state.ss2

  return (
    <div className='bg'>
      <div className='clock'>

        <div style={{"--clr": "red", "--h": "65px", "--hr": hours}} className='hand' id="hour"><i className='i'></i></div>
        <div style={{"--clr": "blue", "--h": "89px", "--hr": minutes}} className='hand' id="min"><i className='i'></i></div>
        <div style={{"--clr": "white", "--h": "94px", "--hr": seconds}} className='hand' id="sec"><i className='i'></i></div>
        <div style={{"--clr": "white", "--h": "20px", "--hr": sec}} className='hand' id="sec2"><i className='i'></i></div>

        <span className="span" style={{"--length": 1}}><b className='b'>1</b></span>
        <span className="span" style={{"--length": 2}}><b className='b'>2</b></span>
        <span className="span" style={{"--length": 3}}><b className='b'>3</b></span>
        <span className="span" style={{"--length": 4}}><b className='b'>4</b></span>
        <span className="span" style={{"--length": 5}}><b className='b'>5</b></span>
        <span className="span" style={{"--length": 6}}><b className='b'>6</b></span>
        <span className="span" style={{"--length": 7}}><b className='b'>7</b></span>
        <span className="span" style={{"--length": 8}}><b className='b'>8</b></span>
        <span className="span" style={{"--length": 9}}><b className='b'>9</b></span>
        <span className="span" style={{"--length": 10}}><b className='b'>10</b></span>
        <span className="span" style={{"--length": 11}}><b className='b'>11</b></span>
        <span className="span" style={{"--length": 12}}><b className='b'>12</b></span>
      </div>
    </div>
  );
  }
}

export default App;
