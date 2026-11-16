function addTwoNums(a, b){
    try{
        if(typeof(a) != 'number'){
            throw new ReferenceError('the first argumnent is not a number')
        }else if (typeof(b) != 'number'){
            throw new ReferenceError('the second Argument is not a numeber')
        }else{
            console.log(a+b)
        }
}catch(err){
    console.log("Error", err)
}
}
addTwoNums(5, "5")
console.log("it still work")
