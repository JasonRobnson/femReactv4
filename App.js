const Pet = props => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('h1', {}, props.animal),
    React.createElement('h1', {}, props.breed)
  ]);
};

class App extends React.Component {
  handleTitleClick() {
    alert('You clicked the Title');
  }
  render() {
    return React.createElement('div', {}, [
      React.createElement('h1', { onClick: this.handleTitleClick }, 'Adopt Me'),
      React.createElement(Pet, {
        name: 'Lunda',
        animal: 'Dog',
        breed: 'Whoknows'
      }),
      React.createElement(Pet, {
        name: 'Lunda',
        animal: 'Dog',
        breed: 'Whoknows'
      }),
      React.createElement(Pet, {
        name: 'Lunda',
        animal: 'Dog',
        breed: 'Whoknows'
      })
    ]);
  }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
