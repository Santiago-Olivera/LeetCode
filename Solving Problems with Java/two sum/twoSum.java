class Solution {
    public int[] twoSum(int[] nums, int target) {
        int startIndex = 0; //start index for the result, we start with the first element of nums array
        int endIndex = 0;  // end index for the result
        int compareTarget = 0;  //variable to be compare with target

        //Loop elements of the array nums
        for(int i = 0 ; i < nums.length ; i++){
            /* For each iteration of loop i (outer loop), we set compareTarget to be
            the sum of the nums[startIndex] + nums[j] , so in the example : 
            [2,7,11,15] ,initially  compareTarget = 2 + 7, then we compare if equals to target */
            for(int j = startIndex + 1; j < nums.length ; j++){
                compareTarget = nums[startIndex] + nums[j] ; 
                if(compareTarget == target){
                     endIndex = j;
                     break;
                }
            }
            if(compareTarget == target){
                break;
            }
            startIndex++ ; 
        }
        int[] result = {startIndex,endIndex} ;
        return result;
    }
}