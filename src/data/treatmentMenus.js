
import { facialTreatments } from "./facialTreatments";

export const treatmentMenus = {
  facials: facialTreatments,

  "dermal-fillers": [
    { id: "lip-filler", name: "Lip Filler" },
    { id: "cheek-filler", name: "Cheek Filler" },
    { id: "chin-filler", name: "Chin Filler" },
    { id: "under-eye-filler", name: "Under-Eye Filler" },
    {
      id: "facial-balancing",
      name: "Facial Balancing Signature Filler",
    },
  ],

  microneedling: [
    { id: "microneedling", name: "Microneedling" },
    {
      id: "microneedling-peptides",
      name: "Microneedling with Peptides",
    },
    {
      id: "vampire-facial",
      name: "Vampire Facial® / PRP Microneedling",
    },
  ],

  waxing: [
    { id: "brazilian", name: "Brazilian Wax" },
    { id: "bikini-line", name: "Bikini Line Wax" },
  ],
};
