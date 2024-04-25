class Solution {
    public boolean isPalindrome(int x) {
        //Converting the integer x into a String
        String xString = Integer.toString(x);
        //Looping through the elements of the String
        for(int i=0;i<xString.length();i++){
            //Comparing first with last, second with last - 1...
            //If they're different then is not palindrome
            if(xString.charAt(i) != xString.charAt(xString.length()-1-i)){
                return false;
            }
        }
        //its palindrome
        return true;
    }
}