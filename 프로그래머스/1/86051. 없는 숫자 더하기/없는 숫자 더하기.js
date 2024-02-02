function solution(numbers) {
    var answer = 0;
    let arr=[0,1,2,3,4,5,6,7,8,9]
    numbers.map((item)=>{
        arr=arr.filter((v)=>item!==v)
    })
    arr.map((item)=>{
        answer+=item
    })
    return answer;
}