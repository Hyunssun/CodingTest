function solution(arr) {
    var answer = [];
    answer=arr.filter((v)=>v!==Math.min.apply(null,arr));
    return answer.length===0?[-1]:answer;
}