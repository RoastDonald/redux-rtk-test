import React, { useEffect } from 'react';
import './App.css';
import PostContainer from './components/PostContainer';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';

function App() {
  
  return (
    <div className="App">
      <PostContainer/>
    </div>
  );
}

export default App;
