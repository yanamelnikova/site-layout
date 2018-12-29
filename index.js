window.onload = function () {
};


function triggerMenu() {
    var onclickMenuWrap = document.getElementsByClassName('onclick-menu-wrap')[0];
    onclickMenuWrap.style.display =
        onclickMenuWrap.style.display === 'flex' ? 'none' : 'flex';

    // if (onclickMenuWrap.style.display === 'flex') {
    //     onclickMenuWrap.style.display = 'none'
    // } else {
    //     onclickMenuWrap.style.display = 'flex'
    // }
}
