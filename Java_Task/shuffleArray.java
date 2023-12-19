public class shuffleArray {
   
    public static void main(String[] arr){
  int [] inputArray={1,2,3,4,5,6,7};
        shufle(inputArray);
        for(int i:inputArray){
            System.out.print(i+" ");
        }

    }
    public static void shufle(int[] inputArray) {
        int len=inputArray.length;
        for(int i=0;i<len;i++){
            int ran=(int)(Math.random()*len);
            
            int temp=inputArray[i];
            inputArray[i]=inputArray[ran];
            inputArray[ran]=temp;
        }
    } 
}

