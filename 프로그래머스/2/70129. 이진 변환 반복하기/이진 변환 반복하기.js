function solution(s) {
    var answer = [0, 0];
    let tmp = [];
    while(s.length > 1) {
        tmp = s.split("").filter(item => item === '1');
        answer[1] += (s.length - tmp.length);
        s = tmp.length.toString(2);
        answer[0]++;
    }
    return answer;
}