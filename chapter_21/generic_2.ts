function wrapResponse<T>(statuscode:number, data:T): { statuscode: number; data: T }{
    return {statuscode:statuscode,data:data};
}
let user1=wrapResponse<string>(200, "admin");
console.log(user1.statuscode,user1.data);
let user2=wrapResponse<boolean>(200, true);
console.log(user2.statuscode,user2.data);
let user3=wrapResponse<number>(200, 12);
console.log(user3.statuscode,user3.data);
