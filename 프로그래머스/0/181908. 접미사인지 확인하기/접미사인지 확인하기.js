function solution(my_string, is_suffix) {
    let answer = 0;
    let arr = [];
    for(let i=my_string.length-1; i>=0; i--){
        arr.push(my_string.slice(i));
    }
    arr.map((item)=>{
        if(item===is_suffix){
            return answer = 1;
        }
    })
    return answer;
}