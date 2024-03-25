function solution(numbers) {
    var answer = '';
    
    const arr = numbers.toString().split(',');
    arr.sort((a, b) => (b + a) - (a + b));

    answer = arr.join('');
    
    return answer.startsWith('0') ? '0' : answer;
}