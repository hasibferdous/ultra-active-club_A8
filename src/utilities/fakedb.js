// use local storage to manage cart data
const addToDb = id =>{
    let shoppingTime = {};

    //get the shopping cart from local storage
    const storedTime = localStorage.getItem('shopping-cart');
    if(storedTime){
        shoppingTime = JSON.parse(storedTime);
    }

    // add quantity
    const quantity = shoppingTime[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingTime[id] = newQuantity;
    }
    else{
        shoppingTime[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingTime));
}

const getStoredTime = () =>{
        let shoppingTime ={};
        //get the shopping cart from local storage
        const storedTime = localStorage.getItem('shopping-time');
        if(storedTime){
            shoppingTime = JSON.parse(storedTime);
        }
        return shoppingTime;
}



const removeFromDb = id =>{
    const storedTime = localStorage.getItem('shopping-time');
    if(storedTime){
        const shoppingTime = JSON.parse(storedTime);
        if(id in shoppingTime){
            delete shoppingTime[id];
            localStorage.setItem('shopping-time', JSON.stringify(shoppingTime));
        }
    }
}

const deleteShoppingTime = () =>{
    localStorage.removeItem('shopping-time');
}

export {
    addToDb,
    getStoredTime, 
    removeFromDb,
    deleteShoppingTime
}