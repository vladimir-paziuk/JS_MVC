import loader   from '../helpers/loader';

class Controller {

    constructor(model, view, events) {
        this.view =     view;
        this.model =    model;
        this.events =   events;

        this.config = {};
    }

    init(config) {
        this.config = config;
        this.view.cacheDom(this.config.dom);
        this.bindEvents();

        this.update();
    }

    bindEvents() {
        this.view.events();

        this.events.on('updated', this.update.bind(this));
        this.events.on('updated', this.__showContext.bind(this));
    }


    update() {
        loader.init(this.config.id);

        this.model.get().done(data => {
            this.view.render(data);

            loader.remove();
        });
    }

    del(id) {
        this.model.del(id).done(data => {
            this.events.emit('updated', data);
        });
    }

    add(data) {
        this.model.add(data).done(data => {
            this.events.emit('updated', data);
        });
    }

    __showContext() {
        console.log(this);
    }

}

export default Controller;