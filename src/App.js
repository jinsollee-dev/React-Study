import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';
import TodoItem from './component/TodoItem';
import { flushSync } from 'react-dom';
import './component/Form.css';



class App extends Component {
  id = 4;
  state = {
    input: '',
    todos: [
      { id: 0, text: '치킨먹기1', checked: false },
      { id: 1, text: '치킨먹기2', checked: true },
      { id: 2, text: '치킨먹기3', checked: false },
      { id: 3, text: '치킨먹기4', checked: true },
    ]
  }

  //할일 추가 함수 
  handleCreate = () => {
    const { input, todos } = this.state
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    })
  }

  //엔터키로 추가 
  handleKeyPress = e => {
    //눌러진 키가 enter라면... handleCreate 호출 
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  //입력창 글자 변화 감지
  handleChange = (e) => {
    this.setState({
      //여기서 상단 state의 input값이 입력창에 적은 값으로 변함  
      input: e.target.value
    })
  }

  //삭제
  handleRemove = id => {
    const { todos } = this.state
    const nextTodos = todos.filter(todo => todo.id !== id);
    this.setState({
      todos: nextTodos
    })
  }

  //토글 
  handleToggle = (id) =>{
    // console.log("toggle id : ", id)
    const {todos} = this.state
    const index = todos.findIndex(todo => todo.id === id)
    //선택된 객체
    const selected = todos[index]
    const nextTodos = [...todos]

    nextTodos[index] = {
      ...selected, 
      checked : !selected.checked //원래 체크했던 값의 반대값 
    }
    
    this.setState({
      todos : nextTodos
    })
  }


  render() {
    return (
      <div className='todo-list'>
        <TodoForm
          onChange={this.handleChange}
          value={this.state.input}
          onCreate={this.handleCreate}
          onKeyPress={this.handleKeyPress} />
        <TodoList
          todos={this.state.todos}
          onRemove={this.handleRemove}
          onToggle={this.handleToggle} />
      </div>
    )
  }
}


export default App;
