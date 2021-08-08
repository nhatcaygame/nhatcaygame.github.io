/**
 * @author      Vu Minh Nhat (Nhat Cay Game)
 * @Version     1.0.0
 * @link        https://www.nhatcaygame.xyz
 * @link        https://www.facebook.com/taolagin2003
 */



var myObj = {
    Administrator: "Nhật Cày Game",
    Powered: "GinStudio"
};
console.log(myObj);
console.log("%cF12 làm chó nhé :)) Ahihi", "font: 600 50px Roboto;color:red", );

var messageBox = document.querySelector('.js-message');
var btn = document.querySelector('.js-message-btn');
var card = document.querySelector('.js-profile-card');
var closeBtn = document.querySelectorAll('.js-message-close');

btn.addEventListener('click', function (e) {
    e.preventDefault();
    card.classList.add('active');
});

closeBtn.forEach(function (element, index) {
    console.log(element);
    element.addEventListener('click', function (e) {
        e.preventDefault();
        card.classList.remove('active');
    });
});

function FacebookLink(){
    alert("Vui Lòng Đợi 3s Hệ Thống Đang Chuyển Hướng");
    setTimeout(() => {
        window.location.href="https://www.facebook.com/taolagin2003";
    },1000)
}
function YoutubeLink(){
    alert("Vui Lòng Đợi 3s Hệ Thống Đang Chuyển Hướng");
    setTimeout(() => {
        window.location.href="https://www.youtube.com/channel/UCZi4G5qdEk-foIfpTDOqK5A";
    },1000)
}