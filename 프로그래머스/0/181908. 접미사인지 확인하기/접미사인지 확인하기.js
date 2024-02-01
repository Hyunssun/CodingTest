function solution(my_string, is_suffix) {
    let arr = [];
    for(let i=my_string.length-1; i>=0; i--){
        arr.push(my_string.slice(i));
    }
    return arr.includes(is_suffix)?1:0;
}