import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  return (
    <div className="App">
      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}
      {/* It appers beneath but to change rules->app.css(to flex)*/}
      <Feed />

      {/* Widgets */}

    </div>
  );
}

export default App;
