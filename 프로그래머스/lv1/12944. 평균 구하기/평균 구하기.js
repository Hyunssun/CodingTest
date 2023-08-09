function solution(arr) {
    var answer = 0;
    answer = arr.reduce((acc,el,i)=>{
        return acc + el;
    }, 0)
    return answer / arr.length;
}