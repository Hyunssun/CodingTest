function solution(intStrs, k, s, l) {
    let answer = [];
    let arr = [];
    intStrs.map((item)=>{
        arr.push(item.split('').splice(s,l))
    })
    arr.map((item)=>{
        if(item.join('')>k){
            answer.push(Number(item.join('')))
        }
    })
    return answer;
}