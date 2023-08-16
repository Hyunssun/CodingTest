function solution(arr, queries) {
    var answer = [];
    for(let i = 0; i < queries.length; i++){
        let a = [];
        for(let j = queries[i][0]; j <= queries[i][1]; j++){
            if(arr[j] > queries[i][2]){
                a.push(arr[j]);
            }
        }
        if(a.length === 0){
            answer.push(-1);
        }else{
            a.sort((a,b) => a - b);
            answer.push(a[0]);
        }
    }
    return answer;
}