function Bubble_Sort( arr, n)  
{
    for(var i = 1; i < n; ++i)      
    {    
        for(var j = 0; j <= (n - i - 1); ++j)   
        {    
            if (arr[j] > arr[j + 1]){
                var temm = arr[j];
                arr[j] = arr[j + 1];
                arr[j+1] = temm;
             }
        }
    }
}
 
 
var n = 5;
var arr = [2, 0, 1, 4, 3];

Bubble_Sort(arr, n);
document.write("The Sorted Array by using Bubble Sort is : ");

for (var i = 0; i < n; i++) {
    document.write(arr[i]+" ");
}
