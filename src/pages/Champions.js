import React,{useEffect,useState} from 'react';
import { fetchData } from '../redux/reducers/league-slice';
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../App.css';

function Champions() {
  const dispatch = useDispatch();
  const {champions,loading} = useSelector(state => state.league);
  useEffect(()=>{
    dispatch(fetchData('ALL'));
  },[])
  const [filter,setFilter] = useState("ALL");
  const championsArray = Object.values(champions);
  return (
       loading 
            ? 
            <div className="loader">
              <div className="loader-container">
                <span>L</span>
                <span>o</span>
                <span>a</span>
                <span>d</span>
                <span>i</span>
                <span>n</span>
                <span>g</span>
              </div>  
            </div>
        :
    <div className="champions-container">
      <h1>scegli il tuo campione</h1>
      <div className='filter-type-champion'>
        <div className={`${filter === 'ALL' ? 'active' :''}`} onClick={ ()=>  {dispatch(fetchData('ALL')); setFilter('ALL')}}>TUTTO</div>
        <div className={`${filter === 'Assassin' ? 'active' :''}`} onClick={ ()=>  {dispatch(fetchData('Assassin')); setFilter('Assassin')}}>ASSASSINI</div>
        <div className={`${filter === 'Fighter' ? 'active' :''}`} onClick={ ()=>  {dispatch(fetchData('Fighter')); setFilter('Fighter')}}>COMBATTENTI</div>
        <div className={`${filter === 'Mage'? 'active' :''}`} onClick={ ()=>  {dispatch(fetchData('Mage')); setFilter('Mage')}}>MAGHI</div>
        <div className={`${filter === 'Marksman'? 'active' :''}`} onClick={ ()=>  {dispatch(fetchData('Marksman')); setFilter('Marksman')}}>TIRATORI</div>
        <div className={`${filter === 'Support'? 'active' :''}`} onClick={ ()=>  {dispatch(fetchData('Support')); setFilter('Support')}}>SUPPORTI</div>
        <div className={`${filter === 'Tank'? 'active' :''}`} onClick={ ()=>  {dispatch(fetchData('Tank')); setFilter('Tank')}}>TANK</div>  
      </div>
      <div className="champions">
        {championsArray.map(el => {
          return (
            <Link key={el.id} className='champions-splash-mini' to={`/${el.id}`} >
              <img  key={el.name} src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${el.id}_0.jpg`} alt="" />
              <div>
                {el.name}
              </div>
            </Link>
            )
        })}
      </div>
     
    </div>
  );
}

export default Champions;
