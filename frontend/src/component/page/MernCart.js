import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add_item_to_cart, removefromcart, update_increase } from '../../reducers/cartAction'
const MernCart = () => {
    const dispatch=useDispatch()
    const cart_items=useSelector(state=>state.cart.cart_items)
    const cart_items_number_arr=cart_items.map(item=>item.quantity)
    const total_quantity=cart_items_number_arr.reduce((a,b)=>a+b,0)
    // in reduce we should declear a initial value
    const cart_items_number_arr_price=cart_items.map(item=>item.quantity*item.product_price)
    const total_price=cart_items_number_arr_price.reduce((a,b)=>a+b,0)

    console.log(cart_items)


    const decrease=(id,quantity)=>(e)=>{
        e.preventDefault()
        quantity--
        if(quantity===0){
            dispatch(removefromcart(id))
        }
        else{
            dispatch(update_increase(id,quantity))
        }
    }
    const increase=(id,quantity,count)=>(e)=>{
        e.preventDefault()
        quantity++
        if(quantity>count){
            alert("Count Limit EXceeded")
        }else{
        dispatch(add_item_to_cart(id,quantity))
        }
    }
    console.log(cart_items)

  return (
    <>
        <div className="row">
            <div className="col-8">
                    {
            cart_items.length>0?
            <table className='table table-bordered'>
                <thead>
                    <th>S.no</th>
                    <th>Product Image</th>
                    <th>Product Name</th>
                    <th>Product Quantity</th>
                    <th>Total Price</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        cart_items.map((item,key)=>{
                            return <tr>
                                <td>{key+1}</td>
                                <td><img src={`http://localhost:5000/${item.product_image}`} height="150px" alt=""/></td>
                                <td><h2>{item.product_name}</h2></td>
                                <td><button onClick={decrease(item.product,item.quantity)}>-</button>{item.quantity}<button onClick={increase(item.product,item.quantity,item.count_in_stock)}>+</button></td>
                                <td>{`${item.quantity*item.product_price}`}</td>

                                <td>
                                    <div className='btn bordered' onClick={(e)=>{
                                        e.preventDefault()
                                        dispatch(removefromcart(item.product))
                                    }
                                    }>Remove</div>
                                </td>
                            </tr>
                            
                        })
                    }
                </tbody>
		<button>Proceed to checkout</button>

            </table>:
            <h1 className='alert alert-danger'>No Items IN cart</h1>
        }
            </div>
            <div className='col-4'>
                <h1>Cart Details</h1>
                <h3>Total Quanity:{total_quantity}</h3>
                <h3>Total price:{total_price}</h3>

            </div>
        </div>
    
    </>
  )
}

export default MernCart