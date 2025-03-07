"use strict";
const sumOfAge = (user1, user2) => {
    return user1.age + user2.age;
};
const ans = sumOfAge({ name: "hi", age: 12 }, { name: "hahh", age: 13 });
console.log(ans);
