const conterReducer = (state = 0, action) => {
    switch(action.type){
        case "lotaliss":
            return state + action.payload; 
        case "lotsatiss":
            return state - action.payload;
        default:
            return state;
    }
}
export default conterReducer;