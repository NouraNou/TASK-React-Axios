import instance from "./index";

const getPets = async () => {
  const res = await instance.get("/pets");
  return res.data;
};

const getPet = async (Id) => {
  const res = await instance.get(`/pets/${Id}`);
  return res.data;
};

const addPet = async (name, type, image, adopted) => {
  const res = await instance.post("/pets", {
    name: name,
    type: type,
    image: image,
    adopted: adopted,
  });
  return res.data;
};

const updatePet = async (id, name, type, image) => {
  const res = await instance.put(`/pets/${id}`, {
    name: name,
    type: type,
    image: image,
    adopted: 1,
  });
  return res.data;
};

const deletePet = async (id) => {
  const res = await instance.delete(`/pets/${id}`);
  return res.data;
};

export { getPets, getPet, addPet, updatePet, deletePet };
