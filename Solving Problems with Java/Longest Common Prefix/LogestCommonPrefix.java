class Solution {
    public String longestCommonPrefix(String[] strs) {
        List<String> execute = new ArrayList<>() ; 
        String minLength = strs[0] ; 
        // Find the minimum length string in the array
        for(int i=1 ; i<strs.length ; i++){
            if(minLength.length() > strs[i].length()){
                minLength = strs[i];
            }
        }
        // Iterate through the minimum length string to compare each character
        for(int i=0; i<minLength.length(); i++){
            boolean go = true;
            // Iterate through the array of strings
            for(int j=0; j<strs.length ; j++){
                // If the character is not common in all the strings, break the loop
                if(minLength.charAt(i) != strs[j].charAt(i)){
                    go = false; 
                    break; 
                }
            }
            // If the character is common in all the strings, add it to the list
            if(go){
                execute.add(String.valueOf(minLength.charAt(i)));
            }else{
                break;
            }
        }
        // Join the list of characters to form the result
        String result = String.join("", execute);
        return result;
    }
}