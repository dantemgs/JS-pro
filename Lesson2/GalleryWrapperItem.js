class GalleryWrapperItem {
    constructor(tag, id, className, max, alt){
        this.tag = tag;
        this.id = id;
        this.className = className;
        this.max = max;
        this.alt = alt;
    }

    render(){
        if (this.tag === 'IMG'){
            return `<img id="${this.id}" class="${this.className}" src="${this.max}" alt="${this.alt}">`;
        } else if (this.tag === 'DIV') {
            return `<div id="${this.id}" class="${this.className}"></div>`;
        }
    }
}