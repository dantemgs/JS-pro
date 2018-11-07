class CitysSelection {
    constructor(id, wrapper) {
        this.id = id;
        this.wrapper = wrapper;
        this.lengthPattern = 3;
        this.pattern = '';
        this.arrData = [];
        this._getData();
    }

    _getData() {
        fetch('RussiaCity.txt')
            .then(result => result.text())
            .then(data => this._toArr(data));
    }

    _toArr(data) {
        this.arrData = data.match(/\B.+\B/gi);

        this._getPattern();
    }

    _getPattern() {
        $(this.id).on('input', () => {
            let text = '';
            text = $(this.id).val();
            text = text.match(/[а-яё]+/gi);

            if (!text) {
                return;
            }

            this.pattern = text[0];
            if (this.pattern.length < this.lengthPattern) {
                this._removeVisible();
                return;
            }

            this._search();
        });


    }

    _removeVisible() {
        if ($(this.wrapper).hasClass('visible')) {
            $(this.wrapper).removeClass('visible');
        }
    }

    _search() {
        let arrHint = [];

        $(this.arrData).each((i, elem) => {
            if (elem.match(RegExp(this.pattern, 'gi'))) {
                arrHint.push(i);
            }
        });

        this._buildHint(arrHint);
    }

    _buildHint(arrHint) {
        let textHint = [];
        $(arrHint).each((i, elem) => {
            textHint.push(this.arrData[elem]);
        });

        let str = '';
        $(textHint).each((i, elem) => {
            str += `<div class="check">${elem}</div>`;
        });
        $(this.wrapper).html(str);

        if (!$(this.wrapper).hasClass('visible')) {
            this._toggleVisible();
        }

        this._clickHandler();
    }

    _toggleVisible() {
        $(this.wrapper).toggleClass('visible')
    }


    _clickHandler() {
        $(document).mouseup((e) => {
            let container = $(this.wrapper);
            if (container.has(e.target).length === 0){
                this._removeVisible();
            }
        });

        let hints = $(".check");

        hints.on('click', (event) => {
            hints.each((i, hint) => {
                if (hint !== event.target) {
                    return;
                }

                $(this.id).val($(event.target).text());

                this._toggleVisible();
            })
        })
    }


}