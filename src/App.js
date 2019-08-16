import React, { Component } from 'react';
import Layout from './Layout';
import './App.css';

class App extends Component {
  state = {
    data: [
      {
        question: "What is 8*2",
        options: ['16', '12', '8', '24'],
        answer: '16'
      },
      {
        question: "What is 9*5",
        options: ['18', '27', '45', '38'],
        answer: '45'
      },
      {
        question: "What is 7*6",
        options: ['14', '21', '42', '49'],
        answer: '42'
      },
      {
        question: "What is 5*7",
        options: ['12', '25', '35', '48'],
        answer: '35'
      },
      {
        question: "What is 4*9",
        options: ['12', '21', '38', '36'],
        answer: '36'
      },
      {
        question: "What is 3*5",
        options: ['16', '12', '3', '15'],
        answer: '15'
      }
    ],
    count: 0,
    correct: 0,
    inCorrect: 0
  }

  handleResult = (isCorrect) => {
    if (isCorrect) {
      this.setState((prevState) => ({
        correct: prevState.correct + 1,
        count: prevState.count + 1
      }))
    } else {
      this.setState((prevState) => ({
        inCorrect: prevState.inCorrect + 1,
        count: prevState.count + 1
      }))
    }

  }
  refreshPage = () => {
    window.location.reload();
  }
  render() {
    const { data, count, correct, inCorrect } = this.state;
    return (
      <div className="container text-center text-light">
        {
          (count < 6) && <Layout
            question={data[count].question}
            options={data[count].options}
            answer={data[count].answer}
            correct={correct}
            inCorrect={inCorrect}
            handleResult={this.handleResult} />
        }
        <h2>Correct:{correct}</h2>
        <h2>InCorrect:{inCorrect}</h2>
        <button type="submit" onClick={this.refreshPage}>Reload</button>
      </div>
    )
  }
}

export default App;
