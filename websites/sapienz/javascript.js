function getInFocus(current, id) {
    if(current.value.length > 0) {
        let element = document.getElementById(id);
        element.focus();
    }
}

async function goToIntranet(user) {
    // TODO CHECK NAMES ETC
    if(user.toLowerCase().includes("fischer")) {
        hide('loginForm');
        show('loading');
        await delay(1200);
        window.location.href = 'intranet-fischer.html';
    } else if(user.toLowerCase().includes("kemp")) {
        hide('loginForm');
        show('loading');
        await delay(1200);
        window.location.href = 'intranet-kemp.html';
    } else {
        alert("Username muss 'fischer' oder 'kemp' enthalten.");
    }
}

async function loadImages() {
    hide('imageLoadingFolderClosed');
    document.getElementById('imageLoadingFolder').style.display = "table-row";
    document.getElementById('imageLoading').style.display = "table-row";
    await counter('loadingGallery', "%", 1500, 94, 0, 100);
    /* await delay(2500); */
    hide('imageLoading');
    showClass('imageGalleryTr');
    /* jajajaja */
    /* show('imageGallery'); */
}

async function loadFileBrowser() {
    await counter('loadingBrowser', " Files", 2800, 97, 0, 1100);
    /* await counter('loadingBrowser', " Files", 1000, 0, 0, 58); */  // testing
    hide('filebrowserLoader');
    show('filelist');
}

function unloadImages() {
    document.getElementById('imageLoadingFolderClosed').style.display = "table-row";
    hide('imageLoadingFolder');
    hideClass('imageGalleryTr');
}

let listOfImages = [
    "imgs/gallery/1.jpg",
    "imgs/gallery/2.jpg",
    "imgs/gallery/3.jpg",
    "imgs/gallery/4.jpg",
    "imgs/gallery/5.jpg",
    "imgs/gallery/6.jpg",
    "imgs/gallery/7.jpg",
    "imgs/gallery/8.jpg",
    "imgs/gallery/9.jpg",
    "imgs/gallery/10.jpg",
]
let listOfImagesNames = [
    "IMG_42729.jpg",
    "IMG_42730.jpg",
    "IMG_42731.jpg",
    "IMG_42732.jpg",
    "IMG_42733.jpg",
    "IMG_42734.jpg",
    "IMG_42735.jpg",
    "IMG_42736.jpg",
    "IMG_42737.jpg",
    "IMG_42738.jpg",
    "IMG_42739.jpg",
    "IMG_42740.jpg",
    "IMG_42741.jpg",
    "IMG_42742.jpg",
]

let imageIndex = -1;

function openGallery() {
    show('gallery');
    imageIndex = 0;
    openImage(1);
}

function closeGallery() {
    hide('gallery');
    imageIndex = -1;
}

function openImage(increment) {
    imageIndex += increment;
    if(imageIndex >= listOfImages.length) imageIndex = 0;
    let galleryImage = document.getElementById('galleryImage');
    let galleryDesc = document.getElementById('galleryDesc');
    galleryDesc.innerHTML = (imageIndex+1).toString().padStart(4, "0") + ": " + listOfImagesNames[imageIndex];
    galleryImage.style.backgroundImage = "url("+listOfImages[imageIndex]+")";
}