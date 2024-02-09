// Friday 2/9/24 Codewars 7 Kyu Fundamentals - Curing Arachnophobia

// https://www.codewars.com/kata/5bc73331797b005d18000255/train/javascript

/*
There is no single treatment that works for every phobia, but some people cure it by being gradually exposed to the phobic situation or object. In this kata we will try curing arachnophobia by drawing primitive spiders.

Our spiders will have legs, body, eyes and a mouth. Here are some examples:

/\((OOwOO))/\

/╲(((0000w0000)))╱\

^(oWo)^

You will be given four values:

    leg size where each value stands for its own leg type: 1 for "^ ^", 2 for "/\ /\", 3 for "/╲ ╱\", 4 for "╱╲ ╱╲"
    body size where each value stands for its own body type: 1 for "( )", 2 for "(( ))", 3 for "((( )))"
    mouth representing the spider's mouth
    eye representing the spider's eye

Note: the eyes are symmetric, and their total amount is 2 to the power of body size.

You will also be given only valid data. That's it for the instructions, you can start coding!
*/

// 3rd attempt - working!
function drawSpider(legSize, bodySize, mouth, eye) {
    const legs = {
      1: "^ ^",
      2: "/\\ /\\",
      3: "/╲ ╱\\",
      4: "╱╲ ╱╲"        // Had additional "╲" after each since I thought was a backslash and needed to escape
    }
    
    const body = {
      1: "( )",
      2: "(( ))",
      3: "((( )))"
    }
    
    const numberOfEyes = 2 ** bodySize;
    
  
    const legSplit = legs[legSize].split(' ');
    const bodySplit = body[bodySize].split(' ');
    
    let eyesSplit = ''
    for(let i = 0; i < numberOfEyes / 2; i++) {
      eyesSplit += eye;
    }
    
    let spider = `${legSplit[0]}${bodySplit[0]}${eyesSplit}${mouth}${eyesSplit}${bodySplit[1]}${legSplit[1]}`
    
    return spider;
}




// 2nd attempt - not working, close though! Passed almost all tests except for 1
function drawSpider(legSize, bodySize, mouth, eye) {
    const legs = {
      1: "^ ^",
      2: "/\\ /\\",
      3: "/╲ ╱\\",
      4: "╱╲╲ ╱╲╲"
    }
    
    const body = {
      1: "( )",
      2: "(( ))",
      3: "((( )))"
    }
    
    const numberOfEyes = 2 ** bodySize;
    
  
    const legSplit = legs[legSize].split(' ');
    const bodySplit = body[bodySize].split(' ');
    
    let eyesSplit = ''
    for(let i = 0; i < numberOfEyes / 2; i++) {
      eyesSplit += eye;
    }
    
    let spider = `${legSplit[0]}${bodySplit[0]}${eyesSplit}${mouth}${eyesSplit}${bodySplit[1]}${legSplit[1]}`
    
    return spider;  
}
/*
Log
Actual:   /\((°°w°°))/\
Expected: /\((°°w°°))/\
Actual:   /╲(°W°)╱\
Expected: /╲(°W°)╱\
Actual:   /╲(((ooooWoooo)))╱\
Expected: /╲(((ooooWoooo)))╱\
Actual:   ^(((::::M::::)))^
Expected: ^(((::::M::::)))^
Actual:   /\(oMo)/\
Expected: /\(oMo)/\
Actual:   ^((○○W○○))^
Expected: ^((○○W○○))^
Actual:   /╲((OOWOO))╱\
Expected: /╲((OOWOO))╱\
Actual:   /╲(((OOOOMOOOO)))╱\
Expected: /╲(((OOOOMOOOO)))╱\
Actual:   ^((00W00))^
Expected: ^((00W00))^
Actual:   /╲(°M°)╱\
Expected: /╲(°M°)╱\
Actual:   ╱╲╲(OMO)╱╲╲
Expected: ╱╲(OMO)╱╲
expected '╱╲╲(OMO)╱╲╲' to equal '╱╲(OMO)╱╲'
*/




// 1st attempt - not working
function drawSpider(legSize, bodySize, mouth, eye) {
    const legs = {
      1: "^ ^",
      2: "/\\ /\\",
      3: "/╲ ╱\\",
      4: "╱╲╲ ╱╲╲"
    }
    
    const body = {
      1: "( )",
      2: "(( ))",
      3: "((( )))"
    }
    
    const numberOfEyes = 2 ** bodySize;
    
  
    const legSplit = legs[legSize].split(' ');
    const bodySplit = body[bodySize].split(' ');
    
    let eyesSplit = ''
    for(let i = 0; i < numberOfEyes / 2; i++) {
      eyesSplit += eye;
    }
    
    let spider = '';
    spider += legSplit[0],
      += bodySplit[0],
      += eyesSplit,
      += mouth,
      += eyesSplit,
      += bodySplit[1],
      += legSplit[1]
    
    return spider;  
}





/* =============
Other Solutions
============= */
function drawSpider(legSize, bodySize, mouth, eye) {
    let legs;
    let body;
    let eyes= "";
    for(let i = 0; i<(Math.pow(2,bodySize))/2;i++){
      eyes+=eye;
    }
    switch(legSize){
        case 1:
        legs = "^ ^";
        break;
        case 2:
        legs = "/\\ /\\";
        break;
        case 3:
        legs = "/╲ ╱\\";
        break;
        case 4:
        legs = "╱╲ ╱╲";
        break;
        
        default:
    }
      switch(bodySize){
        case 1:
        body = `(${eyes}${mouth}${eyes})`;
        break;
        case 2:
        body = `((${eyes}${mouth}${eyes}))`;
        break;
        case 3:
        body = `(((${eyes}${mouth}${eyes})))`;
        break;
        
        default:
    }
    let spider = legs.replace(' ',body);                // replace() method, was trying to think how to insert in halfway point
    return spider;
}