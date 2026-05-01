enum Testcase{
    pass="PASS",
    fail="FAIL",
}

console.log(Testcase.pass);

enum environment{
    dev = "https://dev.api.com",
    staging= "https://staging.api.com",
    QA = "https://qa.api.com",
    prod ="https://api.com"
}
console.log(environment.dev);
//function with enum
enum Severity{
    low,
    medium,
    high

}
function immediateCheck(severity:Severity):boolean{
    return severity >= Severity.high;
}
console.log(immediateCheck(Severity.low));
console.log(immediateCheck(Severity.medium));