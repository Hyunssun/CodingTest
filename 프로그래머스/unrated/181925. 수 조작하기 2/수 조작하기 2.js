function solution(numLog) {
    var answer = [];
    for(let i = 0; i < numLog.length - 1; i++){
        switch(numLog[i + 1] - numLog[i]){
            case 1:
                answer.push('w'); 
                break;
            case 10:
                answer.push('d'); 
                break;
            case -1:
                answer.push('s'); 
                break;
            case -10:
                answer.push('a'); 
                break;
        }
    }
    return answer.join('');
}