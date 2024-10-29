const Page = () =>{
    const cart = [
        { name: "Apple", quantity: 5, price: 2 },
        { name: "Banana", quantity: 1, price: 1 },
        { name: "Orange", quantity: 3, price: 3 },
        { name: "Grapes", quantity: 1, price: 4 }
    ];
    let TotalPrice =0;
    const newArr = cart.filter((fruits)=>{
        return fruits.quantity > 1
    })
    newArr.map((fruits)=>{
       return TotalPrice = TotalPrice + fruits.quantity * fruits.price
    })
return(<div>
    {TotalPrice}
</div>)
}
export default Page