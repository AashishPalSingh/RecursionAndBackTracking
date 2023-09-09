/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {

    let ans =[];
    let temp=[];
    let candidates= Array.from({length: 9}, (_, index) => index + 1)
    backtrackedCombinationSum(candidates.sort(),n,ans,temp,0,k)
    return ans;
};

var backtrackedCombinationSum = function(candidates,target,ans,temp,index,k) {
    //console.log("outer temp",temp)
    // console.log("temp",temp)
        if(target==0 && temp.length==k){

            ans.push(Array.from(temp));
        }

    for(let i=index;i<candidates.length;i++){
       // console.log("candidates[index], target",candidates[i],target)
        if(i>index && candidates[i]==candidates[i-1]){
         //   console.log("in first if")
            continue;
        }
        if(candidates[i]<=target){
            temp.push(candidates[i])
            backtrackedCombinationSum(candidates,target-candidates[i],ans,temp,i+1,k)
            temp.pop()
        }

    }
};