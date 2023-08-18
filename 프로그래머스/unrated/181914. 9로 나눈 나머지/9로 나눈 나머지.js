function solution(number) {
    var answer = 0;
    for(let i = 0; i < number.length; i++){
        answer = answer + Number(number[i]);
    }
    return answer % 9;
}