interface GenderProperties {
  gender: string;
  orientation: string;
  pronouns: string;
}

interface PersonInterface {
  name: string;
  age: number;
  genderProps: GenderProperties;
}

function greet(person: PersonInterface) {}

console.log(
  greet({
    name: "John",
    age: 30,
    genderProps: {
      gender: "male",
      orientation: "straight",
      pronouns: "he/him",
    },
  })
);
