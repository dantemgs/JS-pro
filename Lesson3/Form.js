class Form {
    constructor(id, arrData) {
        this.form = id;
        this.arrData = arrData;
        this.items = [];
        this._initForm();
    }

    _initForm() {
        this.form = document.getElementById(this.form);
        this._buildItems();
        this._buildForm();
    }

    _buildItems(){
        for(let i = 0; i < this.arrData.length; i++){
            this.items[i] = new FormItems(this.arrData[i].input.id,
                this.arrData[i].label.text, this.arrData[i].input.placeholder,  'green');
        }
    }

    _buildForm() {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] instanceof FormItems) {
                this.items[i].build(this.form);
            }
        }

        this.form.innerHTML += `<input type="submit" id="submit">`;

        let elem = document.getElementById('submit');
        elem.addEventListener('submit', () => {
            alert('Бе-бе');
        })
    }
}