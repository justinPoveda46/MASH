function mash() {
    return getChildrenCount();
    
}
console.log(mash());

function getHome(){
 

    let homes =  ["Mansion", "Apartment", "Shack", "House",];
    homes.push(process.argv[2]);
    homes.push("tunnel")
    return homes[Math.floor(Math.random()* homes.length)]

}
console.log(getHome());

function getChildrenCount() {
    let array = [ Math.floor(Math.random()*100+ 1), process.argv[3]]
    let chance = Math.floor(Math.random()*2 )
    return "You will live in a " + getHome() + ", and you will have " + array[chance]  + " kids!" + "and youl'll drive a " + getCar();

}

console.log(getChildrenCount());

function getCar(){

    let vechiles = ["rari","wagon","lambo","a rock"];
    return vechiles[Math.floor(Math.random()* vechiles.length)]

}
 console.log(getCar());
















