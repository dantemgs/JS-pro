class GaleryItem{
    constructor(min, max, alt, dataClass){
        this.min = min;
        this.max = max;
        this.alt = alt;
        this.dataClass = dataClass;
    }

    render (){
        return `<img src="${this.min}" alt="${this.alt}" data-max="${this.max}" data-class="${this.dataClass}">`;
    }
}