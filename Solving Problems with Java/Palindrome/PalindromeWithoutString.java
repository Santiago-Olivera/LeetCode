class Solution {
    public boolean isPalindrome(int x) {
        //Negativa number --> Not palindrome
        if(x < 0){
            return false; 
        }
        // Single number 1-9  --> Palindrome
        else if(x < 10){
            return true;
        }
        //Positive numbers greater or equal to 10
        else{
            //Number coverted to an array of digits
            List<Integer>  xArray = new ArrayList<>();
            int intPartOfX = x; 
            int decimalPartOfX;
            while(intPartOfX >= 10){
                // Modulus return the decimal part of x after dividing by 10
                decimalPartOfX = x%10; 
                x=x/10;
                //Stores the integer part
                intPartOfX = x; 
                //Adding each digit of the number starting from the last one into an array
                xArray.add(decimalPartOfX);
            }
            // add the fist digit to the array. 
            xArray.add(intPartOfX);
            for(int i=0; i<xArray.size();i++){
                //compare first with last, second with last -1 ...
                if(xArray.get(i) != xArray.get(xArray.size()-1-i)){
                    return false; 
                }
            }
            return true;
        }
    }
}