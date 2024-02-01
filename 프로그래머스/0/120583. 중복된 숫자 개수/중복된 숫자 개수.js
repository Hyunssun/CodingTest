function solution(array, n) {
    var answer = 0;
    array.map((item)=>{
        if(item===n){
            answer+=1;
        }
    })
    return answer;
}