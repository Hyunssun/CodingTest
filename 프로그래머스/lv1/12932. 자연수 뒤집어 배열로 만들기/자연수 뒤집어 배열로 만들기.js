function solution(n) {
    var answer = [];
    nStr = n.toString()
    for(let i = nStr.length - 1; i >= 0; i--){
        answer.push(Number(nStr[i]))
    }
    return answer;
}