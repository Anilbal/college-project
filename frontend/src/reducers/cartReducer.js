import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_INCREASE } from "./cardConstaints"

const initialData={
    cart_items:[],
    shipping_info:{},

}
const cartReducer=(state,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            let new_items=action.payload
            let itemExists=state.cart_items.find(item=>item.product===new_items.product)
            if(itemExists && new_items.quantity==1){
                alert("Items already existed")
                return {...state}
            }
            else if(!itemExists){
                alert("Item added To cart")
            return {...state,cart_items:[...state.cart_items,new_items]}
            }else {
                return {...state,cart_items:[...state.cart_items.map(item=>{
                    return (item.product===new_items.product)?new_items:item
                })]}
            }
            case REMOVE_FROM_CART:
            let new_item1=action.payload
                return {...state,cart_items:[...state.cart_items.filter(item=>item.product!=new_item1)]}

            case UPDATE_INCREASE:
                let new_item2=action.payload
                return{...state,cart_items:[...state.cart_items.map(item=>{
                    return(item.product===new_item2.product)?new_item2:item
                })]}
        default:
            return {...state}
    }
}
export default cartReducer