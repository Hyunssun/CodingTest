function solution(strings, n) {
    var answer = [];
    let arr=[];
    strings.sort();
    strings.sort((a,b)=>{
        if(a[n]>b[n]) return 1;
        if(a[n]<b[n]) return -1;
    });
    answer=strings;
    return answer;
}