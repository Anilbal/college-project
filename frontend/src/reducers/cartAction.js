import { getProductDetails } from "../api/ProductApi"
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_INCREASE } from "./cardConstaints"

export const add_item_to_cart=(product,quantity)=>async(dispatch,getState)=>{
    // product:id
    let data=await getProductDetails(product)
    console.log(data)

    dispatch({
        type:ADD_TO_CART,
        payload:{
              product:data._id,
              product_name:data.product_name,
              product_price:data.product_price,
              product_image:data.product_image,
              count_in_stock:data.count_in_stock,
              quantity:quantity
        }
    })
    // set data in localstorage
    localStorage.setItem("cart_items",JSON.stringify(getState().cart.cart_items))
}

export const removefromcart=(id)=>(dispatch,getState)=>{
    dispatch({
        type:REMOVE_FROM_CART,
        payload:id
    })
    alert("Item removed From Cart")
    localStorage.setItem("cart_items",JSON.stringify(getState().cart.cart_items))
}

export const update_increase=(product,quantity)=>async(dispatch,getState)=>{
    // product:id
    let data=await getProductDetails(product)
    console.log(data)

    dispatch({
        type:UPDATE_INCREASE,
        payload:{
              product:data._id,
              product_name:data.product_name,
              product_price:data.product_price,
              product_image:data.product_image,
              count_in_stock:data.count_in_stock,
              quantity:quantity
        }
    })
    // set data in localstorage
    localStorage.setItem("cart_items",JSON.stringify(getState().cart.cart_items))
}
