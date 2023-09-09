/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {

    let ans =[];
    let temp=[];
    subset(nums.sort(),ans,temp,0)
    return ans;
};

var subset = function(candidates,ans,temp,index) {
     ans.push(Array.from(temp));

    for(let i=index;i<candidates.length;i++){
       // console.log("candidates[index], target",candidates[i],target)
        if(i>index && candidates[i]==candidates[i-1] ){
         //   console.log("in first if")
            continue;
        }
        temp.push(candidates[i])
        subset(candidates,ans,temp,i+1)
        temp.pop()

    }
};