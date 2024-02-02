function solution(s) {
    var answer = true;
    [...s].map((item)=>{
        if(isNaN(item)){
            answer=false
        }
    })
    return s.length===4||s.length===6?answer:false;
}