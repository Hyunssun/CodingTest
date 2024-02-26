function solution(n) {
    var answer = 0;
    let cnt1 = count(n);
    let cnt2 = 0;
    while(cnt1!==cnt2){
        n++;
        cnt2=count(n);
    }
    answer=n;
    return answer;
}

function count(num){
    const cnt = [...num.toString(2)].reduce((acc, cur) => {
     if (cur==='1') {
       acc += 1;
     }
     return acc;
    }, 0);
    return cnt;
}