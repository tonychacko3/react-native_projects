import { View, Text } from 'react-native'
import React from 'react'
import { ADD_ITEM, REMOVE_ITEM } from './ActionType';

export  function CartReduser(State=[],action) {
    switch (action.type) {
        case ADD_ITEM:
            {
                return [...State,action.payloard]
            }
            
            break;
            case REMOVE_ITEM:
                {
                    const deleteArray=State.filter((item,index)=>
                    {
                        return index!=action.payloard
                    })
                    return deleteArray
                }
            
            break;
    
        default:
            return State
            break;
    }


  }
