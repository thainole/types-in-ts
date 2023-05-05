interface RegularPerson {
  readonly name: string; // esta propiedad no se podrá modificar
  age: number;
  gender: 'F' | 'M';
  isSingle: boolean;
  hasPets?: boolean; // signo '?' para indicar que es una propiedad opcional
  playSongs?: () => void;
}

interface PersonWithPets extends RegularPerson {
  typeOfPet: 'dog' | 'cat';
  pet: string[] | string;
}

const artist: RegularPerson = {
  name: 'Taylor Swift',
  age: 33,
  gender: 'F',
  isSingle: true,
  hasPets: true,
};

const artistWithPets: PersonWithPets = {
  name: 'Taylor Swift',
  age: 33,
  gender: 'F',
  isSingle: true,
  hasPets: true,
  typeOfPet: 'cat',
  pet: ['Meredith', 'Olivia', 'Benjamin'],
};
