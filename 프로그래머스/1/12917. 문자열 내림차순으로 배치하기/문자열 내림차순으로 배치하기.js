function solution(s) {
    let upper=[];
    let lower=[];
    [...s].map((item,index)=>{
        item===s[index].toUpperCase()?upper.push(item):lower.push(item)
    })
    return lower.sort().reverse().join('')+upper.sort().reverse().join('');
}