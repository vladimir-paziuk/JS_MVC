import Model        from './partials/Model';
import View         from './partials/View';
import Controller   from './partials/Controller';
import Events       from './partials/Events';

class App {
    constructor(){
        this.model =        new Model();
        this.view =         new View();
        this.controller =   new Controller(this.model, this.view, new Events());

        this.view.controller = this.controller;
    }

}

const app = new App();

const config = {
    id: '#APP',
    dom: {
        elements: {
            tbody: '#tbody',
            firstField: '#first-field',
            secondField: '#second-field'
        },
        templates: {
            cell: 'cell'
        }
    }
};

app.controller.init(config);