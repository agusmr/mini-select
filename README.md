# Mini Select
Mini-select is a simple Slim advanced select dropdown library for Preact, based on slim-select.
  - Small size
  - Easy to modification
  
#### Usage
```
    <PreactSelect 
        list={this.state.list}  
        value={1} 
        forceSelect={true} 
        class="mini-select" 
        title="Select list items" 
    />
```
#### Demo using htm and preact
```
<script src="https://unpkg.com/preact@8.2.7/dist/preact.min.js"></script>
<script src="./../dist/mini-select.umd.js"></script>
<script type="module" >
  import { html, Component, render, h } from 'https://unpkg.com/htm/preact/standalone.mjs';
    class App extends Component {
      constructor(){
        super();
        this.state.todos = [{id:1, title:`Item 0`}];
      }
      addTodo() {
        const todos = this.state.todos || [];
        this.setState({ todos: todos.concat({id:todos.length, title:`Item ${todos.length}`}) });
      }
      render({ }, { todos = [] }) {
        return html`
          <div class="app">
            <${Header} name="Demo Mini Select" />
            <${MiniSelect} 
              list=${this.state.todos}  
              value=${this.state.todos.length} 
              forceSelect=${true} 
              class="mini-select" 
              title="Select list items" 
            />
            <button onClick=${this.addTodo.bind(this)}>Add Item Select</button>
            <${Footer}><//>
          </div>
        `;
      }
    }

    const Header = ({ name }) => html`<header><h1>${name}</h1></header>`
    const Footer = props => html`<footer ...${props} />`

    render(html`<${App} />`, document.body);
  </script>
```
#### Property
- id [default random]
- list [required give null ]
- title [set title on component]
- name [default random]
- value [default '']
- onChange [callback select onChange]
- class [to append class on component]
- width [to set width component, default 100%]

### Tech
mini-select uses a number of open source projects to work properly:
* [Slim-select] - Slim advanced select dropdown https://github.com/brianvoe/slim-select
* [Preact] - Fast 3kB React alternative with the same modern API. Components & Virtual DOM. https://github.com/developit/preact
* [microbundle] - Zero-configuration bundler for tiny modules. https://github.com/developit/microbundle

And of course mini-select itself is open source with a [public repository][https://github.com/agusmr/mini-select]
 on GitHub.

### Development

Want to contribute? Great!

mini-select uses microbundle powered by Rollup js to Creates multiple output formats for each entry (CJS, UMD & ESM).

#### Building for source
$ npm run build

### Todos
-

License
----

MIT

