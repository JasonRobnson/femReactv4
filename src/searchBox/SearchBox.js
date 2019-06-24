import React from 'react';
import { ANIMALS } from 'petfinder-client';
import { Consumer } from '../searchContext/SearchContext';

class SearchBox extends React.Component {
  render() {
    return (
      <Consumer>
        {context => {
          return (
            <div className="search-params">
              <label htmlFor="location">
                Location
                <input
                  onChange={context.handleLocationChange}
                  type="text"
                  id="location"
                  value={context.location}
                  placeholder="Location"
                />
              </label>

              {/* context ENDS the dropdown menu code */}
              <label htmlFor="animal">
                Animal
                <select
                  id="animal"
                  value={context.animal}
                  onChange={context.handleAnimalChange}
                  onBlur={context.handleAnimalChange}
                >
                  <option value=""> All Animals </option>
                  {ANIMALS.map(animal => (
                    <option key={animal} value={animal}>
                      {' '}
                      {animal}
                    </option>
                  ))}
                </select>
              </label>

              {/* This ENDS the dropdown menu code */}
              <label htmlFor="breed">
                Breed
                <select
                  value={context.breed}
                  onChange={context.handleBreedChange}
                  onBlur={context.handleBreedChange}
                  id="breed"
                  disabled={context.breeds.length === 0}
                >
                  {context.breeds.map(breed => (
                    <option key={breed} value={breed}>
                      {breed}
                    </option>
                  ))}
                </select>
              </label>
              <button>Submit</button>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default SearchBox;
