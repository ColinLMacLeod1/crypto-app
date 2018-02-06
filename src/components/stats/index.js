import {h, Component} from 'preact';
import style from './style.less'


export default class Stats extends Component {
  constructor(props){
    super(props);
    this.state={
      coinCode: 'BTC',
      coinName: 'Bitcoin'
    };
  }

  render() {
    return (
      <div class={style.stats}>
        <h2>Stats</h2>
        <h4>{this.state.coinCode} ({this.state.coinName})</h4>
      </div>
    )
  }
}
