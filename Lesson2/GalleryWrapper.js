class GalleryWrapper {
    constructor(id, className, items) {
        this.id = id;
        this.className = className;
        this.items = items;
    }

    render() {
        let result = `<div id="${this.id}" class="${this.className}">`;

        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] instanceof GalleryWrapperItem) {
                result += this.items[i].render();
            }
        }

        result += `</div>`;
        return result;
    }

    // remove(){
    //     let el = document.getElementById(this.id);
    //     if (el){
    //         el.remove();
    //     }
    // }
}