function solution(n) {
    let cnt = 1;
    while(true){
        if(6 * cnt % n === 0){
            return cnt
        }
        cnt += 1;
    }
}