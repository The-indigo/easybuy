class CartModel{

    constructor(name,userId,productId,price,image,quantity){
        this.name=name;
        this.userId=userId
        this.productId=productId
        this.price=price;
        this.image=image
        this.quantity=quantity
    }

    constructor(id,userId,productId,name,price,image,quantity){
        this.id=id;
        this.userId=userId
       this.productId= productId
        this.name=name;
        this.price=price;
        this.image=image
        this.quantity=quantity

    }
}
export default CartModel;