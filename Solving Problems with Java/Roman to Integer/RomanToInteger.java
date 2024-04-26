class Solution {
    public List<Integer> convertToNumber (String roman){
        List<Integer> romanInt = new ArrayList<>();
        for(int i=0 ; i < roman.length() ; i++){
            switch(roman.charAt(i)){
                case 'I' : romanInt.add(1);
                            break;
                case 'V' : romanInt.add(5);
                            break;
                case 'X' : romanInt.add(10);
                            break;
                case 'L' : romanInt.add(50);
                            break;
                case 'C' : romanInt.add(100);
                            break;
                case 'D' : romanInt.add(500);
                            break;
                case 'M' : romanInt.add(1000);
                            break;
            }
        }
        return romanInt;
    };

    public int romanToInt(String s) {
        int total = 0; 
        List<Integer> sIntArray = new ArrayList<>(convertToNumber(s));
        sIntArray.add(0);
        for(int i=0 ; i < sIntArray.size()-1 ; i++){
            int current = sIntArray.get(i);
            int next = sIntArray.get(i+1);
            if(current >= next){
                total += current;
            }
            else{
                total += (next-current);
                i++;
            }
        }
        return total; 
    }
}