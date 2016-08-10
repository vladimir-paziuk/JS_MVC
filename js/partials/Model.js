import $ from 'jquery';

class Model {

    constructor() {
        this.rootUrl = 'http://rest.learncode.academy/api/john';
    }

    get() {
        return $.ajax({
            url: this.rootUrl + '/friends',
            method: 'GET'
        });
    }

    del(id){
        return $.ajax({
            url: this.rootUrl + '/friends/' + id,
            method: 'DELETE'
        });
    }

    add(data){
        return $.ajax({
            url: this.rootUrl + '/friends/',
            method: 'POST',
            data: data
        });
    }

}

export default Model;