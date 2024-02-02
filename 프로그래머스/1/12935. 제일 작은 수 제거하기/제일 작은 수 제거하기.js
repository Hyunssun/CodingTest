function solution(arr) {
    var answer = [];
    answer=arr.filter((v)=>v!==Math.min(...arr));
    return answer.length===0?[-1]:answer;
}