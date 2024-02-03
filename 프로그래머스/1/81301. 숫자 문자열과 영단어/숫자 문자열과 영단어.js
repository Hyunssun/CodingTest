function solution(s) {
    var answer = [];
    let numArr=['zero','one','two','three','four','five','six','seven','eight','nine']
    let num=[]
    numArr.map((item,index)=>{
        var pos = s.indexOf(item);
        while(pos > -1){
            num.push([pos,index])
            pos=s.indexOf(item, pos + 1);
        }  
    })
    s.split('').map((item,index)=>{
        if(!isNaN(item)){
            num.push([index,Number(item)])
        }
    })
    num.sort((a,b)=>a[0]-b[0])
    num.map((item)=>{
        answer.push(item[1])
    })
    
    return Number(answer.join(''));
}