function solution(sizes) {
    let maxW=[];
    let maxH=[];
    [...sizes].map((item)=>{
        if(item[0]>=item[1]){
            maxW.push(item[0]);
            maxH.push(item[1]);
        }else{
            maxW.push(item[1]);
            maxH.push(item[0]);
        }
    })
    return Math.max(...maxW)*Math.max(...maxH);
}