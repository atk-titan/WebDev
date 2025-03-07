interface User{
    name:string,
    age:number
}

const sumOfAge=(user1:User , user2:User)=>{
    return user1.age + user2.age;
}

const ans = sumOfAge({name:"hi",age:12},{name:"hahh",age:13});
console.log(ans);