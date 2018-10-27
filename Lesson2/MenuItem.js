class MenuItem {
    constructor(listId, listClassName, linkId, linkClassName, href, title){
        this.listId = listId;
        this.listClassName = listClassName;
        this.linkId = linkId;
        this.linkClassName = linkClassName;
        this.href = href;
        this.title = title;

    }

    render(){
        return `<li id="${this.listId}" class="${this.listClassName}">`+
            `<a id="${this.linkId}" class="${this.linkClassName}" href="${this.href}">${this.title}</a></li>`
    }
}