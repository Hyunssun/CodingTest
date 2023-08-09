function solution(num_list) {
    let a = 1;
    let b = 0;
    num_list.map((item)=>{
        a = a * item
        b = b + item
    })
    return a < (b**2) ? 1 : 0;
}