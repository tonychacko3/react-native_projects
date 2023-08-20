import { ADD_ITEM, REMOVE_ITEM } from "./ActionType";


export function AddtoCart(data){
    return{
    type:ADD_ITEM,
    payloard:data, 
    }
}


export function Removeitem(index){
    return{
    type:REMOVE_ITEM,
    payloard:index,
    }
}