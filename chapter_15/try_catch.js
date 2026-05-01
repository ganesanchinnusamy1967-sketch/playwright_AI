async function getresults(){
    try{
        let r=await Promise.reject("503 service unavailable");
        console.log(r);
    } catch(error){
        console.log(error);
    } finally {
        console.log("Always run");
    }

}
getresults();