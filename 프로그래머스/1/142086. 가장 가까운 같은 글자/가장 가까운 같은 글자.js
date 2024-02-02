function solution(s) {
    var answer = [-1];
    for(let i=0; i<s.length; i++){
        let count = 0;
        for(let j=i; j>=0; j--){
            if(i!==j){
                count++;
                if(s[i]===s[j]){
                    answer.push(count);
                    break;
                }
                if(j===0){
                    answer.push(-1);
                }
            }
        }
    }
    return answer;
}