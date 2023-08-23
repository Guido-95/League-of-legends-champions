import React,{useEffect,useState} from 'react'
import { useNavigate,useParams } from "react-router-dom";
import { fetchDataSingleChampion } from '../redux/reducers/league-slice';
import { useDispatch,useSelector } from 'react-redux';
function DetailChampion() {
    const dispatch = useDispatch();
    const {champion,loading,ability} = useSelector(state => state.league);
    const {nameChampion}=useParams();
    useEffect(()=>{
        dispatch(fetchDataSingleChampion(nameChampion));
        
    },[])
    const [skinSelected,setSkinSelected] = useState(0);
    useEffect(()=>{
        let elemento = document.querySelector(".choice-skins");
        elemento.classList.remove("img-active"); // Sostituisci "miaClasse" con il nome della classe che desideri rimuovere
        setTimeout(() => {
            elemento.classList.add("img-active"); // Sostituisci "miaClasse" con il nome della classe che desideri aggiungere
        }, 700);

    },[skinSelected])
 
    const [spellSelected,setSPellSelected] = useState(0);
    const [isShowFullText,setIsShowFullText] = useState(false);
    // const backgroundImg = {
    //     backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${nameChampion}_0.jpg)`,
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',
    //   };
     
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
    <div  className='detail-champion' >
        <div className="detail-champion-container">
            <div className='img-name-champion'>
                <img className='champion-splash' src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${nameChampion}_0.jpg`} alt="" />
                <div className="name-title">
                    <h2>{champion[nameChampion]?.title}</h2>
                    <h1>{champion[nameChampion]?.id}</h1>

                </div>
            </div>
            <div className="champion-info">
                <div className="left">
                    <div className='role'>
                        <div>
                            ruolo
                        </div>
                        
                        {champion[nameChampion]?.tags[0]}
                    </div>
                    <div>
                        <div>
                            difficolt&agrave;
                        </div>
                        
                        {champion[nameChampion]?.info.difficulty + "/10"}
                    </div>
                </div>
                <div className="right">
                    {isShowFullText ? champion[nameChampion]?.lore : `${champion[nameChampion]?.lore.slice(0, 200)}...`}
                    {!isShowFullText && <span className='show-text' onClick={()=> setIsShowFullText(true)}> espandi</span>}
                </div>
            </div>
           
            <div className="container-spell-description">
                <h2>abilit&agrave;</h2>
                <div className='spell-img'>
                    <div className="spell-1">
                        <img onClick={()=>setSPellSelected(0)}className={`${spellSelected === 0 ? 'selected-spell' :''} single-spell`} src={`http://ddragon.leagueoflegends.com/cdn/13.10.1/img/passive/${champion[nameChampion]?.passive?.image.full}`} alt='' />
                        
                        <div className={`  ${spellSelected === 0 ? 'selected-circle' :'circle'} `}>
                            
                        </div>
                     
                    </div>
                    <div className="spell-1">
                        <img onClick={()=>setSPellSelected(1)}className={`${spellSelected === 1 ? 'selected-spell' :''} single-spell`} src={`https://ddragon.leagueoflegends.com/cdn/13.10.1/img/spell/${champion[nameChampion]?.spells[0].id}.png`} alt="" />
                        <div className={`  ${spellSelected === 1 ? 'selected-circle' :'circle'} `}>
                            
                        </div>
                      
                    </div>
                    <div className="spell-1">
                    <img onClick={()=>setSPellSelected(2)}className={`${spellSelected === 2 ? 'selected-spell' :''} single-spell`} src={`https://ddragon.leagueoflegends.com/cdn/13.10.1/img/spell/${champion[nameChampion]?.spells[1].id}.png`} alt="" />
                        <div className={`  ${spellSelected === 2 ? 'selected-circle' :'circle'} `}>
                            
                        </div>
                      
                    </div>
                    <div className="spell-1">
                        <img onClick={()=>setSPellSelected(3)}className={`${spellSelected === 3 ? 'selected-spell' :''} single-spell`} src={`https://ddragon.leagueoflegends.com/cdn/13.10.1/img/spell/${champion[nameChampion]?.spells[2].id}.png`} alt="" />
                       
                            <div className={`  ${spellSelected === 3 ? 'selected-circle' :'circle'} `}>
                            
                            </div>
                    </div>
                    <div className="spell-1">
                    <img onClick={()=>setSPellSelected(4)}className={`${spellSelected === 4 ? 'selected-spell' :''} single-spell`} src={`https://ddragon.leagueoflegends.com/cdn/13.10.1/img/spell/${champion[nameChampion]?.spells[3].id}.png`} alt="" />
                       
                        <div className={`  ${spellSelected === 4 ? 'selected-circle' :'circle'} `}>
                                
                        </div>
                      
                    </div>
                    {/* <div className={`${spellSelected === 0 ? 'selected-circle1' : spellSelected === 1 ? 'selected-circle2' : spellSelected === 2 ? 'selected-circle3' : spellSelected === 3 ? 'selected-circle4' : spellSelected === 4 ? 'selected-circle5' : ''} circle`}>
                           
                    </div> */}
                    <div className="line">
                        
                    </div>
                </div>
                <div className="description-spell">
                    {spellSelected === 0 && 
                        <div className='ability'>
                            <div className='passiva'> passiva </div> 
                            <div className='spell'> {champion[nameChampion]?.passive?.name}</div> 
                            <p> {champion[nameChampion]?.passive?.description.replace(/<br\s*\/?>/gi, '')}</p> 
                        </div>
                    }
                    {spellSelected === 1 && 
                        <div className='ability'>
                            <div> Q </div>
                            <div className='spell'>  {ability[0]?.name}</div>
                            <p>
                                {ability[0]?.description.replace(/<br\s*\/?>/gi, '')}
                            </p> 
                        </div>
                    }
                    {spellSelected === 2 && 
                        <div className='ability'>
                            <div>W</div> 
                            <div className='spell'>  {ability[1]?.name}</div>
                            <p>
                                {ability[1]?.description.replace(/<br\s*\/?>/gi, '')}
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus possimus nesciunt aliquam praesentium earum accusamus! Voluptates ipsa recusandae cumque mollitia quam, illo culpa, ipsum ad atque obcaecati, voluptatem eos molestias.
                            </p> 
                        </div>
                    }
                    {spellSelected === 3 && 
                        <div className='ability'>
                            <div>E</div> 
                            <div className='spell'>  {ability[2]?.name}</div>
                            <p>
                                {ability[2]?.description.replace(/<br\s*\/?>/gi, '')}
                            </p>
                        </div>}
                    {spellSelected === 4 && 
                        <div className='ability'>
                            <div>R</div> 
                            <div className='spell'>  {ability[3]?.name}</div>
                            <p>
                                {ability[3]?.description.replace(/<br\s*\/?>/gi, '')}
                            </p>
                        </div>
                    }
                </div>
                
            </div>
            
            <div className="skins">
                <div className="names-skin">
                    <h2>skin disponibili</h2>
                    {champion[nameChampion]?.skins.map((el)=>{
                      
                        return <div className={`  ${el.num === skinSelected ? 'selected' :''}  name-skin`} key={el.id} onClick={()=>setSkinSelected(el.num)}>{el.name}</div>
                    })}
                </div>
                <div className="splash-skin image-gallery">
                    <img className={`choice-skins img-active`} src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${nameChampion}_${skinSelected}.jpg`} />
                </div>
            </div>
        </div>
        
        
    </div>
    
  )
}

export default DetailChampion