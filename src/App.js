import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState, useEffect } from 'react';
import Todo from './views/Todo';
import Usersnode from './views/Usersnode';
import Blog from './views/Blog';
import AddNewBlog from './views/AddNewBlog'
import { Countdown, CountDownHooks } from './views/Countdown';
import PageNotFound from './views/PageNotFound'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import DetailBlog from './views/DetailBlog';


function App() {
  const [name, setName] = useState('');
  const [todos, setTodos] = useState([
    { id: "todo1", title: "watching", type: "abc" },
    { id: "todo2", title: "Doing homework", type: "ecf" },
    { id: "todo3", title: "Playing game", type: "abc" },
    { id: "todo4", title: "Reading books", type: "abc" },
  ]);
  //didMount
  useEffect(() => {
    console.log('run user effect');
  }, [name, todos]);
  const handleOnChangeInput = (event) => {
    setName(event.target.value);
  }
  const handleOnClick = (event) => {
    if (!name) {
      alert('empty input');
      return;
    }
    let newTodo = {
      id: Math.floor((Math.random() * 100000) + 1),
      title: name,
      type: "asdsabc"
    }
    setTodos([...todos, newTodo]);
    setName('');
  }
  const handleOnleDeleteApp = (id) => {
    let newtodos = todos.filter(item => item.id != id);
    setTodos(newtodos);
  }
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <div style={{ margin: '10px 0' }}>
            <Routes>
              <Route path="/" element={<Usersnode />} />
              <Route path="/timer" element={
                <div>
                  <Countdown />
                  <span>---------------------------</span>
                  <CountDownHooks />
                </div>
              } />
              <Route path="/todo" element={
                <div>
                  <Todo todos={todos} title="All todo" handleOnleDeleteApp={handleOnleDeleteApp} />
                  <Todo todos={todos.filter(item => item.type === 'abc')} title="abc todo" handleOnleDeleteApp={handleOnleDeleteApp} />
                </div>
              } />
              <Route path='/blog' element={<Blog />} />
              <Route path="/secret" element={<Todo todos={todos} title="All todo" handleOnleDeleteApp={handleOnleDeleteApp} />} />
              <Route path="/blog/:id" element={<DetailBlog />} />
              <Route path="/add-new-blog" element={<AddNewBlog />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </header>
      </div>
    </Router>

  );
}

export default App;
