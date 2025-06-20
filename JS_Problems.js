// ! Palindrome
const palindrome = (str) =>{
   let left= 0
   let right =str.length -1
   while(left<right){
    if(str[left] !== str[right])
        return false
    left++
    right--
   }
   return true
}
// * Output
console.log(palindrome("ababa"));


// ! Insert Element at beginning and end of an array
const insertElement =()=> {
    const myArray = ['a', 'b', 'c', 'd']

    const FrstElement = 'aa'
    const LastElement = 'ee'
    const n = myArray.length 

    for (let i =n ; i > 0; i--) {
        myArray[i] = myArray[i - 1];
    }

    myArray[0] = FrstElement;
    myArray[n]= LastElement
    return myArray
};
// * Output
console.log(insertElement())


// ! Odd or Even
const oddEven = () =>{
    const myArray = [1,3,5,2,9,7]
    let ans={}
    myArray.forEach((element,index) => {
        if(element % 2 ==0){
            ans[index]="Even"
        }
        else
            ans[index] = "Odd"
    });
    return ans

}
// * Output
console.log(oddEven())


// ! Check if an object has a specific property
const Check= (Prop)=>{
    const Obj ={ name: "Cess", work: "developer", countryVisits: 3 }
    if(Prop in Obj)
        return `Object has ${Prop}`
    else
        return `Oops, Object does not has ${Prop}`
}
// * Output
console.log(Check("name"))
console.log(Check("Firstname"))

// ! Remove Duplicates
const removeDup=(arr)=>{
    const ans=[]
    const arrHash={}
    for (let i=0; i<arr.length;i++){
        const value= arr[i]
        if(!arrHash[value]){
            arrHash[value]=true
            ans.push(value)}
    }
    return ans
}
const arr = [1,3,5,2,9,7,8,3,2,2,2,1]
console.log(removeDup(arr))



// ! Largest number in a array
const largest=()=>{
    const myArray = ["1", "3", "5", "2", "9", "7"]
    let larg = Number(myArray[0])
        for (let i =0 ; i < myArray.length; i++) {
            currnt = Number(myArray[i])
            if (currnt>larg){
                larg = currnt
            }
        }
    return `Largest num is ${larg}`
    
}
// * Output
console.log(largest())


// ! To get a profie string (eg: Aravindhan => AR Aravindhan Velumani => AV)
const profilestr = (str)=>{
    const trimmed =str.trim()
    const wrd = trimmed.split(" ").filter(Boolean)
    if(wrd.length > 1)
        return (wrd[0][0] + wrd[1][0]).toUpperCase()
  return trimmed.slice(0,2).toUpperCase();
};

// * Output
console.log(profilestr("Aravindhan"))
console.log(profilestr("Aravindhan Velmani"))


// ! Reverse the str
const revStr=(str)=>{
    let rev=""
   for(let i =str.length-1 ; i>=0; i--){
    rev+= str[i]
   }
   return rev
}
// * Output
console.log(revStr("Apple"))


// ! Average value
const avgVal=(arr)=>{
    let avg=0
    let sum=0
    let n= arr.length
for(let i=0 ; i<n;i++){
    sum+=arr[i]
}
return avg =sum/n
}
const myArray = [1,3,5,2,9,7]
console.log(avgVal(myArray))


// ! Seperate Odd and Even

const sepOddEven = () =>{
    const myArray = [1,3,5,2,9,7]
    const odd=[]
    const even=[]
    myArray.forEach((element,index) => {
        if(element % 2 ==0){
            even.push(element)
        }
        else
            odd.push(element)
    });
    // * Output
    console.log(odd)
    console.log(even)

}
sepOddEven()

