function solution(str1, str2) {
    var answer = '';
    for(let i=0; i<str1.length; i++){
        answer = answer + str1[i]
        answer = answer + str2[i]
    }
    return answer;
}