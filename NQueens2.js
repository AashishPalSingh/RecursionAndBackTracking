/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {

    let board = new Array(n)
    for(let i=0;i<n;i++){
        board[i]=new Array(n)
        board[i].fill('.')
    }
    let ans=[]
    solve(0,board,ans,n);
    return ans.length;
};
var solve= function(col,board,ans,n){
    if(col==n){
        //console.log(board.map((el)=>el.join("")))
        ans.push(board.map((el)=>el.join("")))
        return;
    }
    for(let row =0;row<n;row++){
        if(isSafe(row,col,board,n)){
            board[row][col]='Q';
            solve(col+1,board,ans,n)
            board[row][col]='.'
        }
    }
}
var isSafe =function (row,col,board,n){
    let rowDup =row;
    let colDup=col;
    while(row>=0 && col>=0){
        if(board[row][col]=='Q') return false
        row--;
        col--
    }
    row= rowDup;
    col = colDup;
    while (col>=0){
        if(board[row][col]=='Q') return false
        col--
    }
    ow= rowDup;
    col = colDup;
    while (col>=0 && row<=n-1){
        if(board[row][col]=='Q') return false
        col--;
        row++
    }
    return true
}