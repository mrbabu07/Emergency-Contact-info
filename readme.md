getelementby id holo ami shodo get elementbyid diye akta id select kore aktar kaj korte parbo, ar getelementbyclassname diye ami multiple class name same rekhe akadik kaj korte parbo ak shate, ar queryselector holo je aita document theke first jeta match hobe oi ta nibe, ar queryselectorAll diye sob match niye kaj korbe


let li = document.createElement("li") and 
let ul = document.querySelector("ul"); 
ul.appendChild(li);


 event bubble handeling holo opor theke nice root to child akare traverse korbe and por child to root ar dike traverse hobe

 event delegation holo attach a single event listener to a parent element akotre onk gula child ar shate connection kore

 preventDefault() holo jkn kono form ar modde dom ar kaj kora hoi tkn ta bar bar reload hoi, oi reload ta edate preventDefault use kora hoi, 