const initialState = {
    products: [],
    priceRange: 150,
    category: [],
    rating: 0,
    sortBy: null,
}

const productReducer =(state,action)=>{

switch(action.type){
    case 'GOT_PRODUCTS':
        return{
            ...state,
            products:action.payload
        }
    
    case 'BY_PRICE_RANGE':
        return{
            ...state,
            priceRange:action.payload
        }

    case 'BY_CATEGORY':
        if (state.category.includes(action.payload)) {
            return {
                ...state,
                category: [...state.category].filter((eachCategory) => eachCategory !== action.payload),
            };
        }
        return {
            ...state,
            category: [...state.category, action.payload],
        };

    case 'BY_RATING':
        return{
            ...state,
            rating:action.payload
        }
    
    case 'SORT_BY':
        return{
            ...state,
            sortBy:action.payload
        }

    case 'CLEAR_FILTERS':
        return{
            ...state,
            priceRange: 150,
            category: [],
            rating: 0,
            sortBy: null,
        }

    default:
        return state
    
}
}

export {productReducer,initialState};