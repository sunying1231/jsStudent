// 斐波那契数列（递归方法）
function translation(n){
    if(n==1||n==2){
       return 1;
    }
    return translation(n-1)+translation(n-2);

 }