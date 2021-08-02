import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.css';
import menuIcon from './icons/menu-outline.svg';
import closeIcon from './icons/close-outline.svg';

function TopBar() {
  return (
    <div className="TopBar">
      <p>Top bar</p>
    </div>
  )
}

const items = [
  { label: "Page 1", href: "/page1" },
  { label: "Page 2", href: "/page2" },
  { label: "Page 3", href: "/page3" },
  { label: "About", href: "/about" }
]

function SideBar() {
  const [ visible, setVisible ] = useState(true);
  return (
    <div className="SideBar">
      <div className="SideBar_banner">
        Sidebar title goes here
        <button className="SideBar_visiblitybutton" onClick={()=>setVisible(! visible)}>
          <img src={ visible ? closeIcon : menuIcon } />
        </button>
      </div>
      <div className={(visible) ? "SideBar_content" : "hideContent SideBar_content"}>
        <p>Side bar content, menu items etc go here</p>
        <ul>
        { items.map((item)=>{
            return(
            <li><a href={item.href}>{item.label}</a></li>
            )
        })}
        </ul>
      </div>
    </div>
  )
}

function Page1() { 
  let html = [];
  for (let i=0; i<100; i++) {
    html.push(i);
  }
  return ( 
    <div>
      {html.map((v)=>{
        return(<p>{v}</p>)
      })}
    </div>
)}

function Page2() { return ( <p>Page 2</p>) }
function Page3() { return ( <p>Page 3</p>) }
function About() { return ( <p>About</p>) }
function Welcome() { return ( <p>Welcome</p>) }

function Content() {
  return (
    <div className="Content">
    <Router>
    <Switch>
      <Route path="/page1"><Page1/></Route>
      <Route path="/page2"><Page2/></Route>
      <Route path="/page3"><Page3/></Route>
      <Route path="/about"><About/></Route>
      <Route><Welcome/></Route>
    </Switch>
    </Router>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <TopBar />
      <SideBar />
      <Content />
    </div>
  );
}

export default App;
