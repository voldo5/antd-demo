import React from "react";
import { Button } from "antd";
//import "./App.css";
import "./App.css";

const App = () => (
  <div className="App">
    {/* <Button type="primary" className="custom-btn"> */}
    <Button type="primary">Button</Button>
    <div className="span6">Note that the Segoe UI</div>
    <div className="span1">Note that the Roboto, sans-serif</div>
    <div className="span2">Note that the sans-serif</div>
    <div className="span3">Note that the Roboto</div>
    <div className="span4">Note that the -apple-system</div>
    <div className="span5">Note that the BlinkMacSystemFont</div>

    <div className="span7">Note that the Apple Color Emoji</div>
    <div className="span8">Note that the Segoe UI Symbol</div>
    <div className="span9">Note that the Segoe UI Emoji</div>
    <div className="span10">Note that the development build</div>
  </div>
);

export default App;
