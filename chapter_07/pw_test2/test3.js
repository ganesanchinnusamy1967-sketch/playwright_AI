// Bug Severity Classifier
// As a QA engineer, classify bugs based on two factors: frequency ("always", "often", "rarely") and impact ("blocker", "major", "minor"). Write a JavaScript program using nested if-else that prints the bug severity level.

// Classification Matrix:
// - always + blocker → P0 | always + major → P1 | always + minor → P2
// - often + blocker → P1 | often + major → P2 | often + minor → P3
// - rarely + blocker → P2 | rarely + major → P3 | rarely + minor → P4
let fre="always";
let imp ="blocker";
if(fre==="always"){
    if(imp==="blocker"){
        console.log("PO")
    }else if(imp==="major"){
        console.log("P1")
    }else if(imp==="minor"){
        console.log("P2")
    }

}else if(fre==="often"){
    if(imp==="blocker"){
        console.log("P1")
    }else if(imp==="major"){
        console.log("P2")
    }else if(imp==="minor"){
        console.log("P3")
    }
}else if(fre==="rarely"){
    if(imp==="blocker"){
        console.log("P2")
    }else if(imp==="major"){
        console.log("P3")
    }else if(imp==="minor"){
        console.log("P4")
    }
}  