class ReplaceText {
    constructor(sourse, regExp) {
        this.search = regExp.search;
        this.replacement = regExp.replacement;
        this._getData(sourse);
    }
    getNextReplaceText(text, regExp){
        this.finalText = text;
        this.search = regExp.search;
        this.replacement = regExp.replacement;
        this._replaceText(this.finalText);
    }

    _getData(sourse) {
        fetch(sourse)
            .then(result => {return result.text()})
            .then(text => this._replaceText(text));
    }

    _replaceText(text) {
        this.finalText = text.replace(this.search, this.replacement);
        this._render();
    }

    _render() {
        console.log("");
        console.group();
        console.log(this.finalText);
        console.groupEnd();
    }
}
