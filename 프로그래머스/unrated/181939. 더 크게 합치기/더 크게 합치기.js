function solution(a, b) {
    var answer = 0;
    return  Math.max(Number(`${a}${b}`),Number(`${b}${a}`));
}