class MenuTab {
    constructor(current){
        this.current = current;
        this.$sourse = [
            'first-tab.txt',
            'second-tab.txt',
            'third-tab.txt',
            'fourth-tab.txt'
        ];
        this.$className = {
            dataSet: 'text-file-link',
            cursor: 'cursor',
            currentMenuList: `${this.current}` + '-menu__list',
            currentMenuListSelected: `${this.current}` + '-menu__list_selected',
            menu: `.${this.current}` + '-menu',
            text: `.${this.current}` + '-text',

        };
        this.$currentMenuItems = $(`.${this.$className.currentMenuList}`);
        this._addAppropriateLinkTextFile();
    }

    _addAppropriateLinkTextFile(){
        this.$currentMenuItems.each((index, item) => {
            $(item).data(this.$className.dataSet, this.$sourse[index]);
        });

        this._initFirstElem ();
    }

    _initFirstElem (){
        let $firstElem = `.${this.$className.currentMenuList}:first`;

        this._getDataAddText ($firstElem);
        this._toggleClass($firstElem);

        this._addEvent();
    }

    _getDataAddText (elem){
        fetch($(elem).data(this.$className.dataSet))
            .then(resolt => resolt.text())
            .then(data => $(this.$className.text).html(data));
    }

    _toggleClass(elem){
        $(elem).toggleClass(this.$className.cursor);
        $(elem).toggleClass(this.$className.currentMenuListSelected);
        $(elem).toggleClass(this.$className.currentMenuList);
    }

    _addEvent(){
        $(this.$className.menu).on('click', `.${this.$className.currentMenuList}`, (event) => {
            this._getDataAddText (event.target);

            this._initClassNameAllTab();

            this._toggleClass(event.target);
        })
    }

    _initClassNameAllTab(){
        this.$currentMenuItems.each((i, item) => {
            if (!$(item).hasClass(this.$className.cursor)) {
                $(item).toggleClass(this.$className.cursor)
            }
            if ($(item).hasClass(this.$className.currentMenuListSelected)) {
                $(item).toggleClass(this.$className.currentMenuList);
                $(item).toggleClass(this.$className.currentMenuListSelected);

            }
        });
    }
}