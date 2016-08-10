import $ from 'jquery';

export default new class {

    constructor() {
        this.imageUrl = './images/preloader.gif';
        this.className = 'app-preloader';
        this.$parent = {};
    }

    create() {
        const image = document.createElement('img');
        $(image)
            .attr('src', this.imageUrl)
            .css({
                "position": "absolute",
                "top":      0,
                "right":    0,
                "bottom":   0,
                "left":     0,
                "margin":   "auto"
            })
            .addClass(this.className);
        
        return image;
    }

    init(parent) {
        this.$parent = $(parent);

        this.$parent.css({
            'position': 'relative',
            'minHeight': 25
        });

        const preloader = this.create();
        this.$parent.append(preloader);
    }

    remove() {
        this.$parent.css({
            'position': '',
            'minHeight': ''
        });
        this.$parent.find('.' + this.className).remove();
    }

}