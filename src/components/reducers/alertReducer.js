
import { 

    SHOW_ALERT,
    HIDE_ALERT

} from '../types/indexTypes'

//every reducer has their own state

const initialState = {

    alert:null
}

export default function (state = initialState, action){
    switch(action.type){
        default:
            return state
    }
}