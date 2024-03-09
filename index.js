arr = [
    {id:1,
    text:"msg1"},
    {id:2,
    text:"msg2"},
    {id:3,
    text:"msg3"},
    
    
]

console.log(arr.map((item)=>(item.id === 2 ? item.text="text2" : item.text=`${item.text}`)))
arr = arr.map((item)=>(item.id === 2 ? item.text="text2" : item.text=`${item.text}`))
console.log(arr);