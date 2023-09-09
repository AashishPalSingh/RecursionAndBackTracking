/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let ans =[];
    let temp=[];
    backtrackedCombinationSum(candidates.sort(),target,ans,temp,0)
    return ans;
};

var backtrackedCombinationSum = function(candidates,target,ans,temp,index) {
    //console.log("outer temp",temp)
    // console.log("temp",temp)
        if(target==0){
            ans.push(Array.from(temp));
        }

    for(let i=index;i<candidates.length;i++){
       // console.log("candidates[index], target",candidates[i],target)
        if(i>index && candidates[i]==candidates[i-1] ){
         //   console.log("in first if")
            continue;
        }
        if(candidates[i]<=target){
            temp.push(candidates[i])
            backtrackedCombinationSum(candidates,target-candidates[i],ans,temp,i+1)
            temp.pop()
        }

    }
};