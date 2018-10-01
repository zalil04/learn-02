class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '', date: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
      return (
        <div>
          <h3>Задачник</h3>
          <TodoList items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              Что необходимо сделать?
            </label>
            <br/>
            <input
              id="new-todo"
              class="form-control"
              name="text"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <br/>
            <button class="btn btn-primary">
              Добавить
            </button>
          </form>
        </div>
      );
    }

    handleChange(e) {
      this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }

  class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: []};
    }
    render() {
      let tasks = [...this.state.items, ...this.props.items]
      return (
        <ul>
          {tasks.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      );
    }
  }
  const domContainer = document.querySelector('#todo_list');
  ReactDOM.render(<TodoApp/>, domContainer);