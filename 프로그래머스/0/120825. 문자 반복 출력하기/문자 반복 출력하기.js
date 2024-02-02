function solution(my_string, n) {
    let answer = [];
    [...my_string].map((item,index)=>{
        for(let i=0; i<n; i++){
            answer.push(item);
        }
    })
    return answer.join('');
}