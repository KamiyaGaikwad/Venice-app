
export function wishReducer(state, action) {
  
    switch (action.type) {
      case "ADD_TO_WISH":
        if (state.wish.find(item=>item.title === action.payload.title)) {
          return {
            ...state,
            wish:[...state.wish],
            wishItems: state.wishItems
          };  
        }
        else{
          return {
            ...state,
            wish:[...state.wish,action.payload],
            wishItems: state.wishItems + 1
          };
          
        }

      case "REMOVE_FROM_WISH":
            
            state.wish = state.wish.filter(item=>item.title !== action.payload.title)
            return {
                ...state,
                wish:[...state.wish],
                wishItems: state.wishItems - 1
              };    
        
      default:
        return state;
    }
  }
