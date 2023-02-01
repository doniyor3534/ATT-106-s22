import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  uyinchilar:[
    {id:1,name:''},
    {id:2,name:'Doniyorbek2'},
    {id:3,name:'Doniyorbek3'},
    {id:4,name:'Doniyorbek4'},
    {id:5,name:'Doniyorbek5'},
    {id:6,name:'Doniyorbek6'},
    {id:7,name:'Doniyorbek7'},
    {id:8,name:'Doniyorbek8'},
  ],
  uyinchi:'',
  secunt:0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    uyinchiselect: (state,action) => {
       state.uyinchi = action.payload
    },
    secuntfun: (state) => {
      state.secunt +=1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { uyinchiselect, secuntfun, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer