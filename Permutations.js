/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {

    var temp=[];
    var ans=[];
    var map = new Array(nums.length)
    map.fill(false)
    //generate(ans,temp,nums);
    recursiveGenerate(nums,ans,temp,map)
    return ans;
};

var generate = function(ans,temp,arr){
   console.log("ans,temp,arr",ans,temp,arr)
     if(arr.length==0){
           // console.log("temp",temp)
            ans.push(Array.from(temp));
            return
        }

        for(var i = 0;i<arr.length;i++){
            temp.push(arr[i]);
            var newArr = arr.filter((el)=>el!=arr[i]);
            console.log("newArr",newArr)
            generate(ans,temp,newArr);
            temp.pop()
            // console.log("after pop temp",temp)
        }


}
var recursiveGenerate = function(nums,ans,temp,map){
    if(temp.length==nums.length){
        ans.push(Array.from(temp));
    }

    for(var i = 0;i<nums.length;i++){
        if(!map[i]){
            map[i]=true;
            temp.push(nums[i]);
            recursiveGenerate(nums,ans,temp,map);
            temp.pop()
            map[i]=false;
        }
    }
}