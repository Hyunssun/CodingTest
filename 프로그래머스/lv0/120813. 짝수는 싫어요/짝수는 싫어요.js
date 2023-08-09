function solution(n) {
    var answer = [];
    for(let i = 1; i <= n; i++){
        i % 2 === 1 && answer.push(i)
    }
    answer.sort((a,b) => a-b)
    return answer;
}