type places = place[] | [];
export type place = {
  id: string;
  name: string;
  img: null;
  place_type: string;
  address: string;
  street_address: string;
  city: string;
  country: "الجمهورية العربية السورية";
  comment: number;
  review: null;
  favorites: number;
};

export default places;
