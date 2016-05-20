/**
 * Project: Template.class
 * Author: Marek Zeman
 * Twitter: MarekZeman91
 * Site: http://marekzeman.cz
 * License: MIT
 * Version: 1
 */
class Template {
    constructor(template) {
        template = template
            .replace(/<%/g, '`);')
            .replace(/%>/g, '; o.push(`');

        this.render = Function('d', 'const o = [];'+
            'with (d) {o.push(`' + template + '`)}'+
            'return o.join("");'
        );
    }

    toString() {
        return this.render.toString();
    }
}
