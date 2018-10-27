class SubMenu extends Menu{
    constructor (id, className, listId, listClassName, linkId, linkClassName, href, title, items) {
        super(id, className, items);
        this.listId = listId;
        this.listClassName = listClassName;
        this.linkId = linkId;
        this.linkClassName = linkClassName;
        this.href = href;
        this.title = title;
    }

    render(){
        return `<li id="${this.listId}" class="${this.listClassName}">`+
            `<a id="${this.linkId}" class="${this.linkClassName}" `+
            `href="${this.href}">${this.title}</a>${super.render()}</li>`
    }
}