import { 

    SHOW_ALERT,
    HIDE_ALERT

} from '../types/indexTypes';

//show alert

export function showAlert (alert){
    return (dispatch) => {
        dispatch(showAlertError(alert))
    }
} 

const showAlertError = alert => ({
    type:SHOW_ALERT,
    payload: alert
})