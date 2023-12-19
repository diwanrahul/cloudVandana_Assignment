import java.util.Scanner;

public class romanToInteger {
  public static void main(String[] arr){
    Scanner sc = new Scanner(System.in);
    String romanNumber = sc.nextLine();

        System.out.println(romanToInt(romanNumber));
        sc.close();
    }


public static int romanToInt(String s){
    if(s == null || s.length() == 0)
    return 0;
    int sum = 0;

    for(int i = s.length()-1; i>0; i--){
        switch (s.charAt(i)) {
            case 'I':{
                if(sum == 5 || sum >= 10)
                    sum -=1;
                  else sum += 1;
                    break;
            }
            case 'V':{
                sum += 5; break;
            }
            case 'X':{
                if(sum >= 50)
                    sum -=10;
                else 
                    sum +=10;
                break;
            }
            case 'L':{
                sum += 50; break;
            }
            case 'C':{
                if(sum >= 500)
                sum -= 100;
                else 
                sum += 100;
                break;
            }
            case 'D':{
                sum += 500;
                break;
            }
            case 'M':{
                sum += 1000;
                break;
            }           
             
        
            default:
                break;
        }
    }
return sum;
}
}
