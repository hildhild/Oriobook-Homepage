function showMenuModal() {
    var menuModal = document.getElementsByClassName("menu-modal")[0];
    menuModal.classList.remove("hidden");
    menuModal.classList.add("flex");
}

function hideMenuModal() {
    var menuModal = document.getElementsByClassName("menu-modal")[0];
    menuModal.classList.remove("flex");
    menuModal.classList.add("hidden");
}

function toggleCategoryDropdown() {
    var categoryDropdown = document.querySelector(".category-dropdown");
    if (categoryDropdown.classList.contains("hidden")) {
        categoryDropdown.classList.remove("hidden");
        categoryDropdown.classList.add("flex");
    }
    else {
        categoryDropdown.classList.remove("flex");
        categoryDropdown.classList.add("hidden");
    }
}

function toggleOtherCategory() {
    var otherCategory = document.querySelector(".other-category-dropdown");
    var otherBtn = document.querySelector(".other-button");
    if (otherCategory.classList.contains("hidden")) {
        otherCategory.classList.remove("hidden");
        otherCategory.classList.add("flex");
        otherBtn.classList.remove("flex");
        otherBtn.classList.add("hidden");
    }
    else {
        otherCategory.classList.remove("flex");
        otherCategory.classList.add("hidden");
        otherBtn.classList.remove("hidden");
        otherBtn.classList.add("flex");
    }
}

function showSearchModal() {
    var searchModal = document.getElementsByClassName("search-modal")[0];
    searchModal.classList.remove("hidden");
    searchModal.classList.add("flex");
}

function hideSearchModal() {
    var searchModal = document.getElementsByClassName("search-modal")[0];
    searchModal.classList.remove("flex");
    searchModal.classList.add("hidden");
}

function showAccountModal() {
    var accountModal = document.getElementsByClassName("account-modal")[0];
    accountModal.classList.remove("hidden");
    accountModal.classList.add("flex");
}

function hideAccountModal() {
    var accountModal = document.getElementsByClassName("account-modal")[0];
    accountModal.classList.remove("flex");
    accountModal.classList.add("hidden");
}

function showCartModal() {
    var cartModal = document.getElementsByClassName("cart-modal")[0];
    var body = document.getElementsByTagName("body")[0];
    cartModal.classList.remove("hidden");
    cartModal.classList.add("flex");
    body.classList.add("overflow-hidden");
}

function hideCartModal() {
    var cartModal = document.getElementsByClassName("cart-modal")[0];
    var body = document.getElementsByTagName("body")[0];
    cartModal.classList.remove("flex");
    cartModal.classList.add("hidden");
    body.classList.remove("overflow-hidden");
}

function stopPropagation(event) {
    event.stopPropagation();
}

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


