class Reviews {
    constructor(source, container) {
        this.source = source;
        this.container = container;
        this.items = [];
        this._getData();
    }

    _getData() {
        fetch(this.source)
            .then(result => result.json())
            .then(data => this._render(data));
    }

    _render(data) {
        for (let obj of data) {
            this.items.push(obj);
            this._renderItem(obj);
        }

        this._successClickHandler();
        this._deleteClickHandler();
    }

    _renderItem(item) {
        let date = this._getDate();

        let $wrapperReview = $('<div/>', {
            class: 'wrapper__review'
        });
        let $container = $('<div/>', {
            class: 'container'
        });
        let $div = $('<div/>');
        let $name = $('<div/>', {
            class: 'name'
        });
        let $date = $('<span/>', {
            class: 'date'
        });
        let $menu = $('<div/>', {
            class: 'menu'
        });
        let $success = $('<div/>', {
            class: 'menu__button success'
        });
        let $delete = $('<div/>', {
            class: 'menu__button delete'
        });
        $name.text(item.author);
        $date.text(date);
        $name.appendTo($div);
        $date.appendTo($div);
        $success.html('<i class="far fa-check-circle"></i>');
        $delete.html('<i class="far fa-times-circle"></i>');
        $success.appendTo($menu);
        $delete.appendTo($menu);

        $div.appendTo($container);
        $menu.appendTo($container);

        $container.appendTo($wrapperReview);
        $wrapperReview.append($(`<p class="text">${item.text}</p>`));

        $wrapperReview.appendTo(this.container);
    }

    _getDate() {
        let date = new Date();

        let d = date.getDate();
        let m = date.getMonth();
        let y = date.getFullYear();
        let min = date.getMinutes();
        let sec = date.getSeconds();

        return (`${d}.${m}.${y} ${min}:${sec}`);
    }

    _successClickHandler() {
        $('.wrapper__review').on('click', '.success', e => {
            if (e.target.tagName !== 'DIV') {
                $(e.target.parentNode.parentNode.parentNode.parentNode).addClass('green');
                $(e.target.parentNode.parentNode).remove();
                return;
            }
            $(e.target.parentNode.parentNode.parentNode).addClass('green');
            $(e.target.parentNode).remove();
        });
    }

    _deleteClickHandler(){
        $('.wrapper__review').on('click', '.delete', e => {
            if (e.target.tagName !== 'DIV') {
                $(e.target.parentNode.parentNode.parentNode.parentNode).remove();

                if (!$('.wrapper__review')) {
                    this.container.hide();
                }
                return;
            }
            $(e.target.parentNode.parentNode.parentNode).remove();
        });
    }



    addItem(obj){
        obj.id = this.items.length + 1;

        this.items.push(obj);

        this._renderItem(this.items[this.items.length - 1]);

        this._successClickHandler();
        this._deleteClickHandler();
    }

}