function solution(s) {
    let answer = [];
    let arr=s.split(' ')
    let arr2=[]
    
    arr.map((item)=>{
        arr2.push(item.split(''))
    })
    
    arr2.map((item,index)=>{
    let arr3=[]
        item.map((it,idx)=>{
            idx===0?
                arr3.push(it.toUpperCase()):
            arr3.push(it.toLowerCase());
        })
        answer.push(arr3.join(''))
    })
    return answer.join(' ');
}