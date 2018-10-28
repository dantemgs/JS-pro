class Galery {
    constructor(id, className, items) {
        this.id = id;
        this.className = className;
        this.items = items;
    }

    render() {
        let result = `<div id="${this.id}" class="${this.className}">`;

        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] instanceof GaleryItem) {
                result += this.items[i].render();
            }
        }

        result += `</div>`;
        return result;
    }

}