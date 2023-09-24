// 9/23/23 Saturday Codewars 8 Kyu Fundamentals - Safen User Input Part I - htmlspecialchars

// https://www.codewars.com/kata/56bcaedfcf6b7f2125001118/train/javascript

/*
Safen User Input Part I - htmlspecialchars

You are a(n) novice/average/experienced/professional/world-famous Web Developer (choose one) who owns a(n) simple/clean/slick/beautiful/complicated/professional/business website (choose one or more) which contains form fields so visitors can send emails or leave a comment on your website with ease. However, with ease comes danger. Every now and then, a hacker visits your website and attempts to compromise it through the use of XSS (Cross Site Scripting). This is done by injecting script tags into the website through form fields which may contain malicious code (e.g. a redirection to a malicious website that steals personal information).
Mission

Your mission is to implement a function that converts the following potentially harmful characters:

    < --> &lt;
    > --> &gt;
    " --> &quot;
    & --> &amp;

Good luck :D

*/

// 2nd try - working
function htmlspecialchars(formData) {
    let replacementChars = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '&': '&amp;'
    };

    let newFormData = '';
    for (let i = 0; i < formData.length; i++) {
        if (formData[i] in replacementChars) {
            newFormData += replacementChars[formData[i]];
        } else {
            newFormData += formData[i];
        }
    }
    return newFormData;
}


// 1st try - not working
function htmlspecialchars(formData) {
    let replacementChars = {
        '<': '&lt',
        '>': '&gt',
        '"': '&quot',
        '&': '&amp;'
    }

    let newFormData = '';
    for (let i = 0; i < formData.length; i++) {
        if (formData[i] in replacementChars) newFormData += replacementChars[formData[i]];
        newFormData += formData[i];
    }
  
  return newFormData;
}




/* =============
Other Solutions
============= */
function htmlspecialchars(formData) {
    return formData.replace(/&/g, "&amp;")
                   .replace(/"/g, "&quot;")
                   .replace(/</g, "&lt;")
                   .replace(/>/g, "&gt;");
}

// Other solution #2
function htmlspecialchars(formData) {
    const dict = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '&': '&amp;',
    };
    return formData.replace(/[<>"&]/g, char => dict[char]);
}