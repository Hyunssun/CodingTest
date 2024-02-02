function solution(s) {
    var answer = '';
    let arr=s.split(' ')
    arr.map((item)=>{
        for(let i=0; i<item.length; i++){
            i%2===0?
                answer+=item[i].toUpperCase():
                answer+=item[i].toLowerCase()
        }
        answer+=' '
    })
    return answer.slice(0,-1);
}