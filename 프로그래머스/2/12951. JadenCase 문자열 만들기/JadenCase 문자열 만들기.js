function solution(s) {
    let answer = [];
    s.split(' ').map((item)=>{
        answer.push(item.charAt(0).toUpperCase()+item.substring(1).toLowerCase())
    })
    return answer.join(' ');
}