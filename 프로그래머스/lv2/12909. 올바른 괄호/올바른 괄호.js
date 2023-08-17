function solution(s){
    let a = 0;
    for(let x of s){
        if(x === '('){
            a++;
        }else{
            a--;
        }
        if(a < 0){
            return false;
        }
    }
    return a === 0 ? true : false;
}