function solution(absolutes, signs) {
    var answer = 0;
    absolutes.map((item,index)=>{
        signs[index]?answer+=item:answer-=item;
    })
    return answer;
}