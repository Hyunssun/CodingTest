function solution(a, b) {
    var answer = 0;
    let as = a.toString()
    let bs = b.toString()
    if(as + bs > bs + as){
        answer = as + bs
    }
    else if(as + bs < bs + as){
        answer = bs + as
    }
    else{
        answer = as + bs
    }
    return Number(answer);
}