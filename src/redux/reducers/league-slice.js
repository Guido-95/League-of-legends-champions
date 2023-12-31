import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  champions: [],
  champion: {},
  ability:[],
  loading:false,
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    //const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    //return response.data;
  }
);

export const leagueSlice = createSlice({
  name: 'league',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // startLoading:(state)=>{
    //   state.loading = true;
    
    // },
    // stopLoading:(state)=>{
    //   state.loading = false;
    
    // },
    saveDataChampions: (state,action) => {
      state.champions = action.payload;
    },
    saveDataSingleChampion: (state,action) => {
      state.champion = action.payload[0];
      state.ability = action.payload[1];
    },
   
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    loading:(state,action) =>{
      if(action.payload === 'start'){
        state.loading = true;
      }
      if(action.payload === 'stop'){
        state.loading = false;
      }
    }
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(incrementAsync.pending, (state) => {
  //       state.status = 'loading';
  //     })
  //     .addCase(incrementAsync.fulfilled, (state, action) => {
  //       state.status = 'idle';
  //       state.value += action.payload;
  //     });
  // },
});
export const fetchData = (type)=> async (dispatch)=>{
  try {
  
    dispatch(loading('start'));
 
    if(type === 'ALL'){
      const responseChampions = await axios.get(`https://ddragon.leagueoflegends.com/cdn/13.10.1/data/it_IT/champion.json`);
      dispatch(saveDataChampions(responseChampions.data.data));
    }else{
      const responseChampions = await axios.get(`https://ddragon.leagueoflegends.com/cdn/13.10.1/data/it_IT/champion.json`);
      const arrayDiOggetti = Object.values(responseChampions.data.data);
   
      
      const filterChamp = arrayDiOggetti.filter(el=> {
        for (let i = 0; i < el.tags.length; i++) {
          if(el.tags[i] === type){
            return true;
          }
      
        }
        
      })
      
      
      dispatch(saveDataChampions(filterChamp));
    }
    dispatch(loading('stop'));
  } catch (error) {
      console.log(error)
  }
 
}
export const fetchDataSingleChampion = (nomeChampion)=> async (dispatch)=>{
  try {
    dispatch(loading('start'));
    const responseChampion = await axios.get(`https://ddragon.leagueoflegends.com/cdn/13.10.1/data/it_IT/champion/${nomeChampion}.json`);
    dispatch(saveDataSingleChampion([responseChampion.data.data,responseChampion.data.data[nomeChampion].spells]));
    
    dispatch(loading('stop'));
  } catch (error) {
      console.log(error)
  }
 
}
export const {saveDataChampions,loading, saveDataSingleChampion,startLoading, stopLoading, increment, decrement, incrementByAmount } = leagueSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state) => state.counter.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const incrementIfOdd = (amount) => (dispatch, getState) => {


};

export default leagueSlice.reducer;
