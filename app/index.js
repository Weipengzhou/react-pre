import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/apple.scss'
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }
    render(){
      const divStyle = {
        color:'red',
        border:'1px solid green',
      }
      return(
        <div style={divStyle}> HEllo </div>

      )
    }
}
const list = ['java','script','Node']
class HelloMessage extends React.Component{
  render(){
    return(
    <ul>
        {
          list.map((result,index) =>{
            return <li key={index}>{result}</li>
          })
        }
        <App/>
        <div className="abc">{'text'}</div>
        <input type="button" disabled={true}/>;

    </ul>
    )
  }
}
class Hello extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }
  render(){
    return(
      <div>Hello {this.props.name}</div>
    )
  }
}
Hello.propTypes ={
  name:React.PropTypes.string,
}
Hello.defaultProps={
  name:'Zuck',
}
const timeStyle = {
  color:'red',
  fontSize:'20px',
}
class Timer extends React.Component{
  constructor(props){
    super(props);
    this.tick = this.tick.bind(this);
    this.state={
      time:0,
    }
  }
  tick(){
    this.setState({time:this.state.time +1})
  }
  componentDidMount(){
    this.interval=setInterval(this.tick,1000)
  }
  conponentWillUnmout(){
    clearInterval(this.interval)
  }
  render(){
    return(
      <div>time:{this.state.time}</div>
    )
  }
}

const TodoList = (props) => <ul>{props.items.map((item)=>(<li key={item.id}>{item.text}</li>))}</ul>

class TodoApp extends React.Component{
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.state={
      items:[],
      text:'',
    }
  }
  onChange(e){
    this.setState({text:e.target.value});
  }
  handleSubmit(e){
    e.preventDefault();
    const nextItems = this.state.items.concat([{text:this.state.text,id:Date.now()}]);

    const nextText = '';
    this.setState({items:nextItems,text:nextText});
  }
  render(){
    return(
      <div>
        <h3>小黑屋</h3>
        <TodoList items = {this.state.items}/>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text}/>
          <button>{'添加'}</button>
        </form>
      </div>
    )
  }
}
ReactDOM.render(<TodoApp/>,document.getElementById('app'))

