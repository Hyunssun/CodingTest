function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    let a = denom1 * numer2 + denom2 * numer1
    let b = denom1 * denom2
    
    const func = (a, b) => (a % b === 0 ? val = b : func(b, a % b));
    
    answer.push(a/func(a,b), b/func(a,b));
     
    return answer;
}