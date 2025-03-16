public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        Console.WriteLine("Enter numbers:");
        int n= Convert.ToInt32(Console.ReadLine());
        int[] arr= new int[n];
         //input:
          for(int i=0; i<n; i++)
          {
            arr[i]=Convert.ToInt32(Console.ReadLine());

          }
// target
int target= Convert.ToInt32(Console.ReadLine());

 //Now

            for(int i=0; i<n; i++)
            {
                int j=1;
                for (int k=0; k<(n-i) ; k++)
                if((arr[i]+arr[j]) == target)
                {
                    Console.WriteLine(arr[i]+","+arr[j])
                    break;
                }
                j++;

            }
            
                }
}