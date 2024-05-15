class Solution {

    public boolean isValid(String s) {
        //stack to keep track of parenthesis
        Stack<Character> controlStack = new Stack<>();
        //iterate through the string
        for(int i=0 ; i<s.length() ; i++){
            //check the character at the current index
            switch(s.charAt(i)){
                case '(' : 
                    controlStack.push(s.charAt(i));
                    break;
                case '[' :
                    controlStack.push(s.charAt(i));
                    break;
                case '{' : 
                    controlStack.push(s.charAt(i));
                    break;
                case ')' : 
                //check if the stack is empty or the top of the stack is not the corresponding opening parenthesis
                    if(!controlStack.empty() && controlStack.peek() == '(' ){
                        controlStack.pop();
                        break;
                    }
                    return false; 
                case ']' : 
                    if(!controlStack.empty() && controlStack.peek() == '[' ){
                        controlStack.pop();
                        break;
                    }
                    return false; 
                case '}' : 
                    if(!controlStack.empty() && controlStack.peek() == '{'  ){
                        controlStack.pop();
                        break;
                    }
                    return false; 
            }
        }
        if(controlStack.empty()){
            return true;
        }
        return false; 
    }
}