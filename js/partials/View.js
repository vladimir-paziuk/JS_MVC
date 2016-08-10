import $ from 'jquery';
import _ from 'underscore';

class View {

    constructor() {
        this.dom = {};
    }

    events() {
        $('body').on('click', '[data-action]', event => {
            event.preventDefault();
            const action = $(event.target).attr('data-action');

            action in this ? this[action](event) : this.controller[action](event);
        });
    }

    cacheDom(dom) {
        this.dom = dom;
    }

    getTemplate(id) {
        return _.template($('#' + id).html());
    }

    render(data) {
        const template = this.getTemplate(this.dom.templates.cell);
        const list = data.map(list => template(list));
        $(this.dom.elements.tbody).html(list);
    }


    del(event) {
        const id = $(event.target).closest('tr').attr('id');
        this.controller.del(id);
    }

    add() {
        const data = {
            name: $(this.dom.elements.firstField).val(),
            drink: $(this.dom.elements.secondField).val()
        };
        this.controller.add(data);
    }
}

export default View;