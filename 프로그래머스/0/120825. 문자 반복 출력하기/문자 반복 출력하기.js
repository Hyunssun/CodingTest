function solution(my_string, n) {
    let answer = [];
    [...my_string].map((item)=>{
        answer.push(item.repeat(n))
    })
    return answer.join('');
}