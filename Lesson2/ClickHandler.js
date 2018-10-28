class ClickHandler {
    constructor(event, data, openedImage) {
        this.event = event;
        this.data = data;
        this.openedImage = openedImage;
    }

    openImage() {
        let galleryWrapper = new GalleryWrapper(`${this.data.wrapper.id}`, `${this.data.wrapper.class}`, [
            new GalleryWrapperItem(`${this.data.wrapper__screen.tag}`, `${this.data.wrapper__screen.id}`,
                `${this.data.wrapper__screen.class}`),

            new GalleryWrapperItem(`${this.data.wrapper__close.tag}`, `${this.data.wrapper__close.id}`,
                `${this.data.wrapper__close.class}`, `${this.data.wrapper__close.src}`, `${this.data.wrapper__close.alt}`),

            new GalleryWrapperItem(`${this.data.nextArrow.tag}`, `${this.data.nextArrow.id}`,
                `${this.data.nextArrow.class}`, `${this.data.nextArrow.src}`, `${this.data.nextArrow.alt}`),

            new GalleryWrapperItem(`${this.data.backArrow.tag}`, `${this.data.backArrow.id}`,
                `${this.data.backArrow.class}`, `${this.data.backArrow.src}`, `${this.data.backArrow.alt}`),

            new GalleryWrapperItem(`${this.data.wrapper__image.tag}`, `${this.data.wrapper__image.id}`,
                `${this.data.wrapper__image.class}`, `${this.openedImage.dataset.max}`, `${this.data.wrapper__image.alt}`),
        ]);

        let wrapper = document.createElement('DIV');
        wrapper.innerHTML = galleryWrapper.render();
        this.event.target.parentElement.append(wrapper);
    }
    closeWrapper() {
        let wrapper = document.getElementById(`${this.data.wrapper.id}`).parentElement;
        if (wrapper) {
            wrapper.remove();
        }
    }
    nextImage(){
        this.closeWrapper();
        if (this.openedImage.nextSibling) {
            this.openedImage = this.openedImage.nextSibling;
            this.openImage();
        } else {
            this.openedImage = this.openedImage.parentElement.firstChild;
            this.openImage();
        }


    }
    backImage(){
        this.closeWrapper();
        if (this.openedImage.previousSibling) {
            this.openedImage = this.openedImage.previousSibling;
            this.openImage();
        } else {
            this.openedImage = this.openedImage.parentElement.lastChild;
            this.openImage();
        }

    }
}