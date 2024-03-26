console.log("running")

var TopLikeCount = 9;
var IncreaseTopLike = document.querySelector(".topLike");

function likeT() {
    TopLikeCount++;
    IncreaseTopLike.innerText = TopLikeCount + " like(s)"
}

var MiddleLikeCount = 12;
var IncreaseMiddleLike = document.querySelector(".middleLike");

function likeM() {
    MiddleLikeCount++;
    IncreaseMiddleLike.innerText = MiddleLikeCount + " like(s)"
}

var BottomLikeCount = 9;
var IncreaseBottomLike = document.querySelector(".bottomLike")

function likeB() {
    BottomLikeCount++;
    IncreaseBottomLike.innerText = BottomLikeCount + " like(s)"
}
