/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x === 0 || x === 1) return x;
    let st = 1,end = x,index = 0
    while(st<=end){
        let mid = Math.floor((st+end)/2)
        if(mid *mid === x){
            return mid
        }else if (mid *mid <x){
            index = mid
            st = mid +1
        }
        else{
            end = mid-1
        }
    }
    return index 
}; 