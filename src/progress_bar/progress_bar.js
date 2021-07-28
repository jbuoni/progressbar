import '../App.css';

import { Component } from 'react';

export default class ProgressBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0
    }
  }

  componentDidMount() {
    this.doAnimation();
  }

  doAnimation() {
    setInterval(function(e) {
      if(this.state.progress <= 5){
        const progress = this.state.progress + 1
        console.log(progress)
        this.setState({ progress })
      }
    }.bind(this), 1000);

  }

  render() {
    const { progress } = this.state;
    const progressItems = Array(5).fill(false);

    for(let x = 0; x < progress; x++) {
      progressItems[x] = true;
    }

    const total = 5 - progress;
    // eslint-disable-next-line
    let width = total === 0 ? 200 : 200 / (5 - progress);

    if(progress == 0) {
      width = 0;
    }


    return (
      <div className='progress-bar'>
        <div className='progress' style={{width: width }}></div>
      </div>
    )
  }
}