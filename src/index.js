 // @flow
 import React ,{ Component }from 'react'
 import ReactDOM from 'react-dom'
// import App from './App'
// import App1 from './app1'
// import Timer from './Timer'

// ReactDOM.render(<App />, document.getElementById('abc'));
// ReactDOM.render(<App1 />, document.getElementById('123'));
// ReactDOM.render(<Timer />, document.getElementById('timer'))

// const name = 'mama';
// const element = <h1>Hello, {name}</h1>;

// ReactDOM.render(element, document.getElementById('test'));

class Square extends Component<{value:string,onClick:() => void}>{
    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
          };
        return (
        <button style={style} className="square" onClick={()=>{this.props.onClick()}}>
            {this.props.value}
        </button>
        );
    }
}
  
class Board extends Component<{},{nextOne:string,squares:Array<string>}> {
    constructor(props){
        super(props);
        this.state={
            nextOne:"O",
            squares : Array(9).fill(""),
        }
    }
    renderSquare(i) {
        return <Square 
            value={this.state.squares[i]} 
            onClick={() => this.handleClick(i)}
        />;
    }


    handleClick(i) {
        const newSquares = this.state.squares.slice();
        newSquares[i] = this.state.nextOne;
        this.setState({squares: newSquares});
        if(this.state.nextOne==="O"){
            this.setState({nextOne: "X"});
        } else {
            this.setState({nextOne: "O"});
        }
    }
    render() {
        return (
        <div>
            <div className="status"><span>Next player:{this.state.nextOne}</span></div>
            <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            </div>
            <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            </div>
            <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            </div>
        </div>
        );
    }
}

class Game extends Component<{}> {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                <Board />
                </div>
                <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(<Game />, (document.getElementById("abc"):any));
