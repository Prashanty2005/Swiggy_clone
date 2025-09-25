import {createSlice} from "@reduxjs/toolkit"


//example how object will look like
// {
//     id:1234,
//     name:"Pizza",
//     category:"slicer"
//     quantity:  1     //this field will be add extra by us
// }

const cart =createSlice({
    name:'cartSlice',
    initialState:{
        items:[],
        // from restinfo whenever we add any card into cart , this whole card in which img and
        // all information about card is stored will be send to store as an object and will be stored into items
        // as a element of it
        count:0 
    },
    reducers:{
        addItems: (state,action)=>{
            const items=action.payload
            const existing = state.items.find(i => i.id === items.id);
            if(!existing){
            state.items.push({...action.payload,quantity:1});//add extra field to object and set it to 1
            state.count++;
            }
        },
        IncrementItems: (state,action)=>{
            const element=state.items.find(item=> item.id === action.payload.id);
            //find that object which needs to increment in size
            element.quantity+=1;
            state.count++;

        },
        DecrementItems:(state,action)=>{
            const element=state.items.find(item=> item.id === action.payload.id);
            if(element.quantity>1){
                element.quantity-=1;
            }
            else{
                state.items=state.items.filter(item=> item.id!= action.payload.id);
            }
            state.count--;
        }
    }
})

export const{addItems,IncrementItems,DecrementItems}= cart.actions;
export default cart.reducer;