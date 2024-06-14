function translateX10px(index) {
    var effectedElement = document.getElementsByClassName('translateX10px');
    // Thực hiện bất kỳ thay đổi CSS nào bạn muốn ở đây
    effectedElement[index].style.transform = 'translateX(10px)';
}

function resetTransform(index) {
    var effectedElements = document.getElementsByClassName('translateX10px');
    effectedElements[index].style.transform = 'none';
}

function changePicture(index) {
    var effectedElements = document.getElementsByClassName('book-img');
    switch (index) {
        case 0: effectedElements[index].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2019/04/product-2.jpg'; break;
        case 1: effectedElements[index].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2020/04/product-29.jpg'; break;
        case 2: effectedElements[index].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2019/04/product-1.jpg'; break;
        case 3: effectedElements[index].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2020/12/product-118.jpg'; break;
        case 4: effectedElements[index].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2020/04/product-109.jpg'; break;
        case 5: effectedElements[index].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2020/12/product-117.jpg'; break;
        case 6: effectedElements[index].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2020/04/product-109.jpg'; break;
        default: effectedElements[index].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2019/04/product-5.jpg'; break;
    }
}

function resetPicture(index) {
    var effectedElements = document.getElementsByClassName('book-img');
    switch (index) {
        case 0: effectedElements[index].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2019/04/product-1.jpg'; break;
        case 1: effectedElements[index].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2020/04/product-109.jpg'; break;
        case 2: effectedElements[index].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2019/04/product-4.jpg'; break;
        case 3: effectedElements[index].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2020/12/product-22.jpg'; break;
        case 4: effectedElements[index].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2020/04/product-14.jpg'; break;
        case 5: effectedElements[index].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2019/04/product-3.jpg'; break;
        case 6: effectedElements[index].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2020/12/product-98.jpg'; break;
        default: effectedElements[index].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2019/04/product-2.jpg'; break;
    }
}