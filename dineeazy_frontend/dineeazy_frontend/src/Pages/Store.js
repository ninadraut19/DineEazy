import {createStore} from 'redux';

const sessionStore = (state={custId:0,custLoginStatus:false, restId:0, restLoginStatus:false},action)=>{

    if(action.type === "save1")
    {     console.log("here")
        return {
            custId:action.payload.custId,
            custLoginStatus:action.payload.custLoginStatus,
            
        };
    }

    if(action.type === "save2")
    {
        return {
            restId:action.payload.restId,
            restLoginStatus:action.payload.restLoginStatus
        }
    }
    
    return state;

} 

const store = createStore(sessionStore);
export default store;