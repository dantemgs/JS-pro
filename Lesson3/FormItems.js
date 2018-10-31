class FormItems {
    constructor(id, text, placeholder, className) {
        this.id = id;
        this.text = text;
        this.placeholder = placeholder;
        this.className = className;
        this.element = null;

    }

    build(form) {
        form.innerHTML += `<label for="${this.id}">${this.text}</label>
             <input type="text" id="${this.id}" class="${this.className}" placeholder="${this.placeholder}">`;

        this._addEvent();

    }

    _addEvent() {
        this.element = document.querySelector(`#${this.id}`);
        this.element.addEventListener('focus', () => {
            console.log(this.element.classList);
            this.element.classList.toggle('red');
            this.element.classList.toggle('green');
        });
        this.element.addEventListener('blur', () => {
            console.log(this.element.classList);
            this.element.classList.toggle('red');
            this.element.classList.toggle('green');
        })
    }
}