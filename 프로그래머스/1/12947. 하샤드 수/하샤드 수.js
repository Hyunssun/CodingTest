function solution(x) {
    let val=0;
    [...x.toString()].map((item)=>{
        val+=Number(item)
    })
    return x%val===0?true:false;
}