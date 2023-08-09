function solution(ineq, eq, n, m) {
    var answer = 0;
    switch (ineq){
        case '>':
            if(eq = '='){
                return n >= m ? 1 : 0  
            }else{
                return n > m ? 1 : 0
            }
            braek
        case '<':
            if(eq = '='){
                return n <= m ? 1 : 0  
            }else{
                return n < m ? 1 : 0
            }
            braek
    }
    return answer;
}