function solution(num_list) {
    var answer = 0;
    
    let a = ''
    let b = ''
    num_list.map((item)=>{
        item % 2 === 1 ? a += item : b += item;
    })
    
    return Number(a)+Number(b);
}