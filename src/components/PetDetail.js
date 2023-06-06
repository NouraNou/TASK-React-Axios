import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { deletePet, getPet, updatePet } from "../api/pets";

const PetDetail = () => {
  const { petId } = useParams();
  const [pet, setPet] = useState({});

  //**** */
  const fetchApi = async () => {
    const res = await getPet(petId);
    setPet(res);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const updateApi = async () => {
    const res = await updatePet(petId, pet.name, pet.type, pet.image);
    setPet(res);
  };

  const deletApi = async () => {
    const res = await deletePet(petId);
  };

  if (!pet) {
    return <h1>Pet was not found</h1>;
  }
  return (
    <div className="bg-[#F9E3BE] w-screen h-[100vh] flex justify-center items-center">
      <div className="border border-black rounded-md w-[70%] h-[70%] overflow-hidden flex flex-col md:flex-row p-5">
        <div className="h-full w-full md:w-[35%]">
          <img
            src={pet.image}
            alt={pet.name}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="w-full md:w-[65%] h-full pt-[30px] flex flex-col p-3">
          <h1>Name: {pet.name}</h1>
          <h1>Type: {pet.type}</h1>
          <h1>adopted: {pet.adopted}</h1>

          <button
            onClick={updateApi}
            className="w-[70px] border border-black rounded-md  hover:bg-green-400 mb-5"
          >
            Adobt
          </button>

          <button
            onClick={deletApi}
            className="w-[70px] border border-black rounded-md  hover:bg-red-400"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetDetail;
