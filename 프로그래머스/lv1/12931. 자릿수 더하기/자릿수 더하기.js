function solution(n)
{
    let answer = 0;
    let num = n
    for(let i = 0; i < n.toString().length; i++){
        answer = answer + num % 10;
        num = Math.floor(num / 10);
    }
    return answer;
}