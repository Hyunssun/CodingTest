function solution(arr, divisor) {
    var answer = [];
    arr.map((item)=>{
        item % divisor===0 && answer.push(item)
    })
    if(answer.length===0){
        answer.push(-1)
    }
    return answer.sort((a,b)=>a-b);
}