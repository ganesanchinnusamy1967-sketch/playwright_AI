class Credentials{
    user;//public
    #password;//private
constructor(user,pass){
    this.user = user;
    this.#password = pass;
}
getCredentials(){
    return this.#password;
}

}
let cred = new Credentials("admin","Murugan@12345");
console.log(cred.getCredentials());
console.log(cred.user);