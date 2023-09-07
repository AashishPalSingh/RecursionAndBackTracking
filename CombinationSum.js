/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let ans =[];
    let temp=[];
    backtrackedCombinationSum(candidates,target,ans,temp,0)
    return ans;
};

var backtrackedCombinationSum = function(candidates,target,ans,temp,index) {
    if(index==candidates.length){
        //console.log("temp",temp)
        if(target==0){
            ans.push(Array.from(temp));
        }
        return
    }
    if(candidates[index]<=target){
        temp.push(candidates[index])
        backtrackedCombinationSum(candidates,target-candidates[index],ans,temp,index)
        temp.pop()
    }
    backtrackedCombinationSum(candidates,target,ans,temp,index+1)
};