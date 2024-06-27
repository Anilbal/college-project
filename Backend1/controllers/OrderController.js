let Order=require("../models/OrderModel")
let OrderItems=require("../models/OrderItemsModel")

exports.placeorder=async(req,res)=>{
    let orderItemsIds=await Promise.all(
        req.body.orderItems.map(async OrderItem=>{
            let OrderItemstoAdd=new OrderItems({
                product:OrderItem.product,
                quantity:OrderItem.quantity
            })
            OrderItemstoAdd=await OrderItemstoAdd.save()
            if(!OrderItemstoAdd){
                return res.status(400).json({error:"Something went wrong"})
            }
            return OrderItemstoAdd._id
        })
    )
    let indivisualTotal=await Promise.all(
        orderItemsIds.map(async OrderItemsId=>{
            let item =await OrderItems.findById(OrderItemsId).populate('product','product_price')
            return item.quantity*item.product.product_price
        })
    )
    let totalPrice=indivisualTotal.reduce((a,b)=>{
        return a+b
    })
    let newOrder=new Order({
        orderItems:orderItemsIds,
        user:req.body.user,
        shipping_address:req.body.shipping_address,
        alternate_shipping_address:req.body.alternate_shipping_address,
        city:req.body.city,
        country:req.body.country,
        phone:req.body.phone,
        total_price:totalPrice
    })
    newOrder=await newOrder.save()

    if(!newOrder){
        return res.status(400).json({error:"Something went wrong"})
    }
    res.send(newOrder)
}

