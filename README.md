# Template.class.js
ES6+ Template class. Super simple few lines micro template script!

### Usage:

### Our HTML
```html
<div id="output"></div>
 
<script id="template" type="text/template">
    <h1>${title}</h1>
    <ul>
        <% links.forEach((link, i) => { %>
        <li><a href="${link.href}/${i}">${link.title}</a></li>
        <% }) %>
    </ul>
</script>
```

### Our JavaScript
```js
var output = document.getElementById('output');
var html = document.getElementById('template').innerHTML;
var template = new Template(html);
 
output.innerHTML = template.render({
    title: 'Welcome!',
    links: [
        {href: '/page', title: 'Test 1'},
        {href: '/page', title: 'Test X'}
    ]
});
```

### The result
```html
<div id="output">
    <h1>Welcome!</h1>
    <ul>
        <li><a href="/page/0">Test 1</a></li>
        <li><a href="/page/1">Test X</a></li>
    </ul>
</div>
```

No, there is currently no caching. But c'mon, you can simply make own cache with simple object ;)
