/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let ans =[]
    let temp=[]
    subset(nums,0,ans,temp)
    return ans
};
var  subset= function(nums,index,ans,temp){
    if(index==nums.length){
        ans.push(Array.from(temp))
        return
    }
    temp.push(nums[index])
    subset(nums,index+1,ans,temp)
    temp.pop()
    subset(nums,index+1,ans,temp)
}