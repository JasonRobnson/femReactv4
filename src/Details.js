import React from 'react';

import pf from 'petfinder-client';
import { navigate } from '@reach/router';

const petfinder = pf();
class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    petfinder.pet
      .get({
        output: 'full',
        id: this.props.id
      })
      .then(data => {
        const pet = data.petfinder.pet;

        let breed;
        if (Array.isArray(data.petfinder.pet.breeds.breed)) {
          breed = data.petfinder.pet.breeds.breed.join(', ');
        } else {
          breed = data.petfinder.pet.breeds.breed;
        }

        this.setState({
          name: pet.name,
          animal: pet.animal,
          location: `${pet.contact.city}, ${pet.contact.state}`,
          description: pet.description,
          media: pet.media,
          breed,
          loading: false
        });
      })
      .catch(() => {
        // this.setState({ error: err });
        navigate('/');
      });
  }
  render() {
    if (this.state.loading) {
      return <h1>You're page is loading foo!</h1>;
    }

    const { name, animal, breed, description, location } = this.state;
    return (
      <div className="details">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {location}
        </h2>
        <p>{description}</p>
      </div>
    );
  }
}

export default Details;
