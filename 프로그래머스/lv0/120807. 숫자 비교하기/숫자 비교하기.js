function solution(num1, num2) {
    var answer = 0;
    if(num1<0||num1>10000){
        return;
    }
    if(num2<0||num2>10000){
        return;
    }
    num1===num2?answer=1:answer=-1
    return answer;
}