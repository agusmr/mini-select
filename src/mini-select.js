import {
  h,
  Component
} from 'preact';
import SlimSelect from 'slim-select';

class MiniSelect extends Component {
  constructor() {
    super();
    this.callbackChange = this.callbackChange.bind(this);
    this.hasSelected = false;
    this.valChange = null;
  }
  callbackChange() {
    this.hasSelected = true;
    this.valChange = this.selectRef.value;
    this.props.onChange(this.valChange)
  }
  componentDidMount() {
    const config_select = { "select": this.selectRef };
    new SlimSelect(config_select);
    this.hasSelected = true;
  }
  componentDidUpdate(prevProps) {
    if (prevProps.forceSelect != this.props.forceSelect) {
      this.hasSelected = true;
      this.valChange = this.valChange || this.props.value;
      this.selectRef.value = this.valChange;
    }
  }
  random(min, max) {
    return Math.random() * (max - min) + min;
  }
  render() {
    const random_id = `r_select_${this.random(1, 999)}`;
    const value_select = (!this.hasSelected && this.props.value) || this.valChange || '';
    return (
      <div>
        <select
          id={this.props.id || random_id}
          name={this.props.name || random_id}
          value={value_select}
          ref={refSelect => this.selectRef = refSelect}
          onChange={this.props.onChange && this.callbackChange}
          class={`slim-select ${this.props.class || ''}`}
          style={{ width: (this.props.width || "100%") }}
        >
          <option>{this.props.title}</option>
          {
            this.props.list.map((item) => (
              <option value={item.id}>{item.title}</option>
            ))
          }
        </select>
      </div>);
  }
}

if (typeof module != 'undefined') module.exports = MiniSelect;
else self.MiniSelect = MiniSelect;