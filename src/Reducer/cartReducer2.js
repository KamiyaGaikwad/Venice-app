
export function cartReducer(state, action) {
  
    switch (action.type) {
      case "ADD_TO_CART"://increment quantity
      console.log("being called")
        if (state.cart.find(item => item.title === action.payload.title)) {
            console.log(state.cart.find(item => item.title === action.payload.title))
            state.cart.find(item => item.title === action.payload.title).quantity+=1;
        console.log(state.cart)} 
        else{
            console.log("ll",state.cart.find(item => item.title === action.payload.title))
          state.cart.push({...action.payload,quantity:1})}
          console.log(state.cart)
          return {
            ...state,
            cart:[...state.cart],
            cartitems: state.cartitems + 1,
            cartprice: state.cartprice + Number(action.payload.price)
          };
          
        

      case "REMOVE_FROM_CART":
        //decrement
            if (state.cart.find(item => item.title === action.payload.title)) {
                console.log(state.cart.find(item => item.title === action.payload.title))
                --state.cart.find(item => item.title === action.payload.title).quantity;
                console.log(state.cart)
                
            if(state.cart.find(item => item.title === action.payload.title).quantity <=0){
                
                state.cart = state.cart.filter(item => item.title !== action.payload.title)
                console.log(state.cart)
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

  // case "ADD_TO_CART":
  //       // determine if valid product
  //       if (products.find(product => product._id === action.payload)) {
  //         let newState1 = [...state];

  //         // increment cart item quantity if exists
  //         if (newState1.find(item => item.product._id === action.payload._id)) {
  //           
  //           ++newState1.find(item => item.product.sku === action.payload.sku)
  //             .quantity;
  //         } else {
  //           newState1.push({
  //             quantity: 1,
  //             product: products.find(
  //               product => product._id === action.payload._id
  //             )
  //           });
  //         }
  //         return newState1;
  //       }

  //       // if not valid product return previous state
  //       return state;
  