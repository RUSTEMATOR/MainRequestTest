const a = `https://www.kingbillybet1.com/land/en/

https://www.kingbillybet2.com/land/en/

https://www.kingbillybet3.com/land/en/

https://www.kingbillybet4.com/land/en/

https://www.kingbillybet5.com/land/en/`


const array = new Set(a.split('\n').map(link => link.trim()))


console.log(Array.from(array))