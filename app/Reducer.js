/**
 * Rootreducer for our app
 */

const defaultState = {
    charCount: 0,
    title: ''
};

const reducer = function(state = defaultState, action){
    switch(action.type){
        case 'COUNT_CHARS':
            return Object.assign({}, state, {charCount: action.data.length});
        case 'TITLE_CHARS_COUNT':
            let title = 1;
            const text = action.data;
            if(text.length > 20){
                title = text.substring(0, 20);
            }
            else{
                title = text;
            }
            return Object.assign({}, state, {title: title});
        default:
            return state;
    }
}

export default reducer;