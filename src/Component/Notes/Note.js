import React, { useState } from 'react';
import './Note.css'

const Note = () => {
    return (
        <div className='notes'>
            <h2>How does React works?</h2>
            <p>ReactJS is one of the most popular JavaScript libraries for mobile and web application development.
                 Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user 
                 interface (UI) building called components.
                 One of the biggest advantages of using React is that you can infuse HTML code with JavaScript.
            Users can create a representation of a DOM node by declaring the Element function in React.
            The syntax of the HTML code above is similar to XML. That said, instead of using the traditional DOM class, React uses className.
            JSX tags have a name, children, and attributes. Numeric values and expressions must be written inside curly brackets. The quotation marks in JSX attributes represent strings, similarly to JavaScript.
            In most cases, React is written using JSX instead of standard JavaScript to simplify components and keep code clean.</p>
            
            <h2>Write down the difference between props and state</h2>
            <p><table>
  <tr>
    <th>PROPS</th>
    <th>STATE</th>
    
  </tr>
  <tr>
    <td>The Data is passed from one component to another.</td>
    <td>The Data is passed within the component only.</td>
    
  </tr>
  <tr>
    <td>It is Immutable (cannot be modified).</td>
    <td>It is Mutable ( can be modified).</td>
    
  </tr>
  <tr>
    <td>Props can be used with state and functional components.</td>
    <td>State can be used only with the state components/class component</td>
    
  </tr>
  <tr>
    <td>Props are read-only.</td>
    <td>State is both read and write.</td>
    
  </tr>
</table>
</p>
            <h2>Besides data-loading what are the functions of useEffect()?</h2>
            <p>useEffect use cases</p>
                <p>1.Running once on mount: fetch API data</p>
                <p>2.Running on state change: validating input field</p>
                <p>3.Running on state change: live filtering</p>
                <p>4.Running on state change: trigger animation on new array value</p>
                <p>5.Running on props change: update paragraph list on fetched API data update</p>
                <p>6.Running on props change: updating fetched API data to get BTC updated price</p>
        </div>
    );
};

export default Note;