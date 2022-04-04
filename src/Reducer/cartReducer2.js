
export function cartReducer(state, action) {
  
    switch (action.type) {
      case "ADD_TO_CART"://increment quantity
      
        if (state.cart.find(item => item.title === action.payload.title)) {
            
            state.cart.find(item => item.title === action.payload.title).quantity+=1;
        } 
        else{
            
          state.cart.push({...action.payload,quantity:1})}
          
          return {
            ...state,
            cart:[...state.cart],
            cartitems: state.cartitems + 1,
            cartprice: state.cartprice + Number(action.payload.price)
          };
          
        

      case "REMOVE_FROM_CART":
        //decrement
            if (state.cart.find(item => item.title === action.payload.title)) {
                
                --state.cart.find(item => item.title === action.payload.title).quantity;
                
                
            if(state.cart.find(item => item.title === action.payload.title).quantity <=0){
                
                state.cart = state.cart.filter(item => item.title !== action.payload.title)
                
            }
            }
         
        return {
          ...state,
          cart:[...state.cart],
          cartitems: state.cartitems - 1,
          cartprice: state.cartprice - Number(action.payload.price)
        };
        
      default:
        return state;
    }
  }
