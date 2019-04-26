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
        <div>
          {this.state.pets.map(pet => {
            let breed;
            if (Array.isArray(pet.breeds.breed)) {
              breed = pet.breeds.breed.join(', ');
            } else {
              breed = pet.breeds.breed;
            }
            return (
              <Pet
                key={pet.id}
                name={pet.name}
                animal={pet.animal}
                breed={breed}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
