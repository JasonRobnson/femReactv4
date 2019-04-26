import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';
import pf from 'petfinder-client';

const petfinder = pf();
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: []
    };
  }
  componentDidMount() {
    petfinder.pet
      .find({ output: 'full', location: 'Minneapolis, MN' })
      .then(data => {
        let pets;

        // data is shared in an XML format, and if its a single item returns an object, more than one returns an array
        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [data.petfinder.pets.pet];
          }
        } else {
          pets = [];
        }
        this.setState({
          pets
        });
      });
    // const promise = petfinder.breed.list({ animal: 'dog' });
    // promise.then(console.log, console.error);
  }
  render() {
    return (
      <div>
        <h1>Adopt Me</h1>
        <Pet name="Lunda" animal="Dog" breed="Whoknows" />
        <Pet name="Sam" animal="Log" breed="Whoknows" />
        <Pet name="Tham" animal="Fog" breed="Whoknows" />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
