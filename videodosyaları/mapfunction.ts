const map = <T>(array: T[], cb:(item:T)=>T): T[] =>{
    let result: T[] = [];
    if (array.length == 0){
        return array;
    }
    for(let i = 0; i < array.length;i++){
        result.push(cb(array[i]));
    }
    return result;
}