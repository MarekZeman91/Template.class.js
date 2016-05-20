/**
 * Project: Template.class
 * Author: Marek Zeman
 * Twitter: MarekZeman91
 * Site: http://marekzeman.cz
 * License: MIT
 * Version: 1.01
 */
const TemplatePartials = {};
class Template {
    constructor(template) {
        template = template.replace(/<\$=\s*([a-zA-Z]+)\(([^\)]+)\)/g, '`); o.push(p.$1($2))')
                           .replace(/<\$/g, '`);').replace(/\$>/g, '; o.push(`');

        this.render = Function('d', 'with (d) {' +
            'const o = []; const p = this.p;' +
            'o.push(`' + template + '`);' +
            'return o.join("")};'
        ).bind({p: TemplatePartials});
    }

    static registerPartial(name, template) {
        TemplatePartials[name] = new Template(template).render;
    }
}
