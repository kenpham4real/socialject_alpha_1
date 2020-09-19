import {
    CREATE_PROFILE, Up_Load_Image,
} from'../../../actions/posting-project-user/profile/CreatePageAction'
// Initialize the initial state
const initialState = {
    CreateProfile : [],
    UpLoadImage:[],
}

// Export the reducer

export const CreatePageReducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE_PROFILE:
            return({
                ...state,
                createProfile: action.finishCreate,
            })
        
        default: return state;
    }
}




