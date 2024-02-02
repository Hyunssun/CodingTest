function solution(s) {
    var answer = true;
    [...s].map((item)=>{
        if(s.length!==4&&s.length!==6||isNaN(item)){
            answer=false
        }
    })
    return answer;
}