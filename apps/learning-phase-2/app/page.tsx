'use client';
import PetCard from '../components/PetCatd';


type Pet = {
  name: string
  species: string
  age: number
  color: string
  breed: string
}


export default function Home() {
  console.log("Page is rendering");
  const name = "Keisuke";

  const pet_name = "Pochi";
  const pet_speicies = "Dog";
  const pet_age = 3;
  const pet_color = "White";
  const pet_description = `A ${pet_speicies} named {${pet_name}}`;

  // const pet = {
  //   name: "Pochi",
  //   species: "Dog",
  //   age: 3,
  //   color: "Brown"
  // };
  // const pets: Pet[] = [
  //   {name: "Taro", species: "Dog", age: 3},
  //   {name: "Tama", species: "Cat", age: 5},
  //   {name: "Piyo", species: "Inco", age: 2}
  // ];
  const pets: Pet[] = [
    {
      name: "Pochi",
      species: "Dog",
      age: 3,
      color: "Brown",
      breed: "Golden Retriever"
    },
    {
      name: "Tama",
      species: "Cat",
      age: 5,
      color: "Orange",
      breed: "Persian"
    },
    {
      name: "Tweety",
      species: "Bird",
      age: 2,
      color: "Yellow",
      breed: "Canary"
    },
    {
      name: "Masuo",
      species: "Fish",
      age: 1,
      color: "Blue",
      breed: "Betta",
    }
  ]

  let show_id = 2;

  // console.log("Pet name:", pet_name);
  // console.log("Pet species:", pet_speicies);
  // console.log("Pet age:", pet_age);
  // console.log("Pet color:", pet_color);
  // console.log("Pet:", pet);
  // console.log("Pets:", pets);


  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">
          🐾 Good Morning {name}!😾
        </h1>
        <p className="text-xl text-gray-600 mt-4">
          Track and manage your pets in one place
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pets.map((pet) => (
            <PetCard key={pet.name} {...pet} />
          ))}
        </div>

      </div>
    </main>
  )
}
