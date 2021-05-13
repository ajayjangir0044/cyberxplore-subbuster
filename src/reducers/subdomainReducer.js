let initialState=[]
if(typeof window !== 'undefined'){

    if(localStorage.getItem("subdomain")){
        //if items are already in local storage
        initialState=JSON.parse(localStorage.getItem("subdomain"))
    }
}
export const subdomainReducer=(state=initialState,action)=>{
    switch(action.type){
        case "NEW_SUBDOMAIN_SEARCH":
            return action.payload
        default:
            return state
    }

}