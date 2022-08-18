import mediaType from "./mediaType";
type product = {
  id: string;
  product_type_id: string;
  place_id: string;
  name: string;
  created_at: string;
  updated_at: string;
  deleted_at: null;
  price: number;
  media: mediaType[];
  product_type: {
    id: string;
    place_type_id: string;
    name: string;
    created_at: string;
    updated_at: string;
    deleted_at: null;
  };
  place: {
    id: string;
    user_id: string;
    place_type_id: string;
    name: string;
    description: string;
    price: number;
    started_at: null;
    ended_at: null;
    created_at: string;
    updated_at: string;
    deleted_at: null;
  };
};
export default product;
