function translateX10px(index) {
    var effectedElement = document.getElementsByClassName('translateX10px');
    // Thực hiện bất kỳ thay đổi CSS nào bạn muốn ở đây
    effectedElement[index].style.transform = 'translateX(10px)';
}

function resetTransform(index) {
    var effectedElements = document.getElementsByClassName('translateX10px');
    effectedElements[index].style.transform = 'none';
}

function mouseEnterBook(index) {
    var effectedElements = document.getElementsByClassName('book-img');
    var listButtonsBook = document.getElementsByClassName('list-buttons-book');
    switch (index) {
        case 0: {
            effectedElements[index].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2019/04/product-2.jpg'; 
            listButtonsBook[index].style.opacity = '1';
            listButtonsBook[index].style.transform = 'translateY(-50px)';
            break;
        }
        case 1: {
            effectedElements[index].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2020/04/product-29.jpg'; 
            listButtonsBook[index].style.opacity = '1';
            listButtonsBook[index].style.transform = 'translateY(-50px)';
            break;
        }
        case 2: {
            effectedElements[index].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2019/04/product-1.jpg'; 
            listButtonsBook[index].style.opacity = '1';
            listButtonsBook[index].style.transform = 'translateY(-50px)';
            break;
        }
        case 3: {
            effectedElements[index].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2020/12/product-118.jpg'; 
            listButtonsBook[index].style.opacity = '1';
            listButtonsBook[index].style.transform = 'translateY(-50px)';
            break;
        }
        case 4: {
            effectedElements[index].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2020/04/product-109.jpg'; 
            listButtonsBook[index].style.opacity = '1';
            listButtonsBook[index].style.transform = 'translateY(-50px)';
            break;
        }
        case 5: {
            effectedElements[index].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2020/12/product-117.jpg'; 
            listButtonsBook[index].style.opacity = '1';
            listButtonsBook[index].style.transform = 'translateY(-50px)';
            break;
        }
        case 6: {
            effectedElements[index].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2020/04/product-109.jpg'; 
            listButtonsBook[index].style.opacity = '1';
            listButtonsBook[index].style.transform = 'translateY(-50px)';
            break;
        }
        default: {
            effectedElements[index].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2019/04/product-5.jpg'; 
            listButtonsBook[index].style.opacity = '1';
            listButtonsBook[index].style.transform = 'translateY(-50px)';
        break;
        }
    }
}

function mouseLeaveBook(index) {
    var effectedElements = document.getElementsByClassName('book-img');
    var listButtonsBook = document.getElementsByClassName('list-buttons-book');
    switch (index) {
        case 0: {
            effectedElements[index].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2019/04/product-1.jpg'; 
            listButtonsBook[index].style.transform = 'translateY(0)';
            listButtonsBook[index].style.opacity = 0;
            break;
        }
        case 1: {
            effectedElements[index].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2020/04/product-109.jpg'; 
            listButtonsBook[index].style.transform = 'translateY(0)';
            listButtonsBook[index].style.opacity = 0;
            break;
        }
        case 2: {
            effectedElements[index].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2019/04/product-4.jpg'; 
            listButtonsBook[index].style.transform = 'translateY(0)';
            listButtonsBook[index].style.opacity = 0;
            break;
        }
        case 3: {
            effectedElements[index].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2020/12/product-22.jpg'; 
            listButtonsBook[index].style.transform = 'translateY(0)';
            listButtonsBook[index].style.opacity = 0;
            break;
        }
        case 4: {
            effectedElements[index].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2020/04/product-14.jpg'; 
            listButtonsBook[index].style.transform = 'translateY(0)';
            listButtonsBook[index].style.opacity = 0;
            break;
        }
        case 5: {
            effectedElements[index].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2019/04/product-3.jpg'; 
            listButtonsBook[index].style.transform = 'translateY(0)';
            listButtonsBook[index].style.opacity = 0;
            break;
        }
        case 6: {
            effectedElements[index].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2020/12/product-98.jpg'; 
            listButtonsBook[index].style.transform = 'translateY(0)';
            listButtonsBook[index].style.opacity = 0;
            break;
        }
        default: {
            effectedElements[index].src = 'https://wpbingosite.com/wordpress/oriobook/wp-content/uploads/2019/04/product-2.jpg'; 
            listButtonsBook[index].style.transform = 'translateY(0)';
            listButtonsBook[index].style.opacity = 0;
            break;
        }
    }
}

function mouseEnterPicture(index) {
    var effectedElements = document.getElementsByClassName('hover-picture-bg');
    var picture = document.getElementsByClassName('picture-img');
    effectedElements[index].style.display = "block";
    picture[index].style.transform = "scale(1.2)";
}

function mouseLeavePicture(index) {
    var effectedElements = document.getElementsByClassName('hover-picture-bg');
    var picture = document.getElementsByClassName('picture-img');
    effectedElements[index].style.display = "none";
    picture[index].style.transform = "none";
}