function translateX10px(index) {
    var translateX10px = document.getElementsByClassName('translateX10px');
    translateX10px[index].style.transform = 'translateX(10px)';
}

function resetTransform(index) {
    var translateX10px = document.getElementsByClassName('translateX10px');
    translateX10px[index].style.transform = 'none';
}

function mouseEnterBook(index) {
    var bookImg = document.getElementsByClassName(`book-img-${index}`);
    var listButtonsBook = document.getElementsByClassName(`list-buttons-book-${index}`);
    switch (index) {
        case 0: {
            bookImg[0].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2019/04/product-2.jpg'; 
            listButtonsBook[0].style.opacity = '1';
            listButtonsBook[0].style.transform = 'translateY(-50px)';
            break;
        }
        case 1: {
            bookImg[0].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2020/04/product-29.jpg'; 
            listButtonsBook[0].style.opacity = '1';
            listButtonsBook[0].style.transform = 'translateY(-50px)';
            break;
        }
        case 2: {
            bookImg[0].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2019/04/product-1.jpg'; 
            listButtonsBook[0].style.opacity = '1';
            listButtonsBook[0].style.transform = 'translateY(-50px)';
            break;
        }
        case 3: {
            bookImg[0].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2020/12/product-118.jpg'; 
            listButtonsBook[0].style.opacity = '1';
            listButtonsBook[0].style.transform = 'translateY(-50px)';
            break;
        }
        case 4: {
            bookImg[0].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2020/04/product-109.jpg'; 
            listButtonsBook[0].style.opacity = '1';
            listButtonsBook[0].style.transform = 'translateY(-50px)';
            break;
        }
        case 5: {
            bookImg[0].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2020/12/product-116.jpg'; 
            listButtonsBook[0].style.opacity = '1';
            listButtonsBook[0].style.transform = 'translateY(-50px)';
            break;
        }
        case 6: {
            bookImg[0].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2020/12/product-117.jpg'; 
            listButtonsBook[0].style.opacity = '1';
            listButtonsBook[0].style.transform = 'translateY(-50px)';
            break;
        }
        case 7: {
            bookImg[0].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2020/04/product-109.jpg'; 
            listButtonsBook[0].style.opacity = '1';
            listButtonsBook[0].style.transform = 'translateY(-50px)';
            break;
        }
        case 8: {
            bookImg[0].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2019/04/product-5.jpg'; 
            listButtonsBook[0].style.opacity = '1';
            listButtonsBook[0].style.transform = 'translateY(-50px)';
            break;
        }
        default: {
            bookImg[0].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2019/04/product-2.jpg'; 
            listButtonsBook[0].style.opacity = '1';
            listButtonsBook[0].style.transform = 'translateY(-50px)';
        break;
        }
    }
}

function mouseLeaveBook(index) {
    var bookImg = document.getElementsByClassName(`book-img-${index}`);
    var listButtonsBook = document.getElementsByClassName(`list-buttons-book-${index}`);
    switch (index) {
        case 0: {
            bookImg[0].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2019/04/product-1.jpg'; 
            listButtonsBook[0].style.transform = 'translateY(0)';
            listButtonsBook[0].style.opacity = 0;
            break;
        }
        case 1: {
            bookImg[0].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2020/04/product-109.jpg'; 
            listButtonsBook[0].style.transform = 'translateY(0)';
            listButtonsBook[0].style.opacity = 0;
            break;
        }
        case 2: {
            bookImg[0].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2019/04/product-4.jpg'; 
            listButtonsBook[0].style.transform = 'translateY(0)';
            listButtonsBook[0].style.opacity = 0;
            break;
        }
        case 3: {
            bookImg[0].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2020/12/product-22.jpg'; 
            listButtonsBook[0].style.transform = 'translateY(0)';
            listButtonsBook[0].style.opacity = 0;
            break;
        }
        case 4: {
            bookImg[0].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2020/04/product-14.jpg'; 
            listButtonsBook[0].style.transform = 'translateY(0)';
            listButtonsBook[0].style.opacity = 0;
            break;
        }
        case 5: {
            bookImg[0].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2020/12/product-23.jpg'; 
            listButtonsBook[0].style.transform = 'translateY(0)';
            listButtonsBook[0].style.opacity = 0;
            break;
        }
        case 6: {
            bookImg[0].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2019/04/product-3.jpg'; 
            listButtonsBook[0].style.transform = 'translateY(0)';
            listButtonsBook[0].style.opacity = 0;
            break;
        }
        case 7: {
            bookImg[0].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2020/12/product-98.jpg'; 
            listButtonsBook[0].style.transform = 'translateY(0)';
            listButtonsBook[0].style.opacity = 0;
            break;
        }
        case 8: {
            bookImg[0].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2019/04/product-2.jpg'; 
            listButtonsBook[0].style.transform = 'translateY(0)';
            listButtonsBook[0].style.opacity = 0;
            break;
        }
        default: {
            bookImg[0].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2020/12/product-76.jpg'; 
            listButtonsBook[0].style.transform = 'translateY(0)';
            listButtonsBook[0].style.opacity = 0;
            break;
        }
    }
}

function mouseEnterPicture(index) {
    var hoverPictureBg = document.getElementsByClassName('hover-picture-bg');
    var picture = document.getElementsByClassName('picture-img');
    hoverPictureBg[index].style.display = "block";
    picture[index].style.transform = "scale(1.2)";
}

function mouseLeavePicture(index) {
    var hoverPictureBg = document.getElementsByClassName('hover-picture-bg');
    var picture = document.getElementsByClassName('picture-img');
    hoverPictureBg[index].style.display = "none";
    picture[index].style.transform = "none";
}


