const countShopItems=(favorites)=>{
    let initialCount=0;
    for(let i=0;i<favorites.length; i++){
        const currentValue=favorites[i].count
        initialCount+=currentValue;

    }
    return initialCount;


    
}
export default countShopItems;