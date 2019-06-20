import React, { Component } from 'react';
import Pet from './Pet';
import pf from 'petfinder-client';

const petfinder = pf();

class Results extends Component {
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
        console.log(data);
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
  }
  render() {
    return (
      <div className="search">
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
              media={pet.media}
              location={`${pet.contact.city},${pet.contact.state}`}
              id={pet.id}
            />
          );
        })}
      </div>
    );
  }
}
export default Results;
