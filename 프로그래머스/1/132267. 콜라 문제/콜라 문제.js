function solution(a, b, n) {
    var answer = 0;
    while(n>=a){
        let na=Math.floor(n/a);
        answer+=na*b;
        n=(na*b)+(n%a);
    }
    return answer;
}