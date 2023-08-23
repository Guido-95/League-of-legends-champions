import React,{useEffect,useState} from 'react';
import { fetchData } from './redux/reducers/league-slice';
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const {champions} = useSelector(state => state.league);
  useEffect(()=>{
    dispatch(fetchData('ALL'));
  },[])
  const [filter,setFilter] = useState("ALL");
  const championsArray = Object.values(champions);
  console.log(filter)
  return (
    <div className="App">
     home
    </div>
  );
}

export default App;
