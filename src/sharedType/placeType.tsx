type place =
  | {
      id: string;
      user_id: string;
      comment: number;
      address: string;
      street_address: string;
      city: string;
      country: string;
      review: number | null;
      favorites: number;
      is_favorite: number | null;
      place_type_id: string;
      name: string;
      description: string;
      price: number;
      img: null;
      started_at: null;
      ended_at: null;
      created_at: string;
      updated_at: string;
      deleted_at: null;
      place_type_tag: {
        id: string;
        place_type_id: string;
        tag_id: string;
        created_at: string;
        updated_at: string;
        deleted_at: null;
        pivot: {
          place_id: string;
          place_type_tag_id: string;
        };
        tag: {
          id: string;
          name: string;
          created_at: string;
          updated_at: string;
          deleted_at: null;
        };
      }[];
      specs: specs[];
      specs_place: spacs_place[];
      products: product[];
      reviews: [];
      media: media[];
    }
  | undefined;
export type media = {
  id: number;
  model_type: "place";
  model_id: string;
  uuid: string;
  collection_name: string;
  name: string;
  file_name: string;
  mime_type: string;
  disk: "public";
  conversions_disk: "public";
  size: number;
  manipulations: [];
  custom_properties: [];
  generated_conversions: [];
  responsive_images: [];
  order_column: number;
  created_at: string;
  updated_at: string;
  original_url: string;
  preview_url: string;
};
export type specs = {
  id: string;
  name: string;
  place_type_id: string;
  has_multiple_option: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: null;
  pivot: {
    place_id: string;
    specs_id: string;
  };
};
export type spacs_place = {
  id: string;
  specs_id: string;
  place_id: string;
  has_multiple_option: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: null;
  options: options[];
};
export type options = {
  id: string;
  name: string;
  specs_id: string;
  created_at: string;
  updated_at: string;
  deleted_at: null;
  pivot: {
    specs_place_id: string;
    option_id: string;
  };
};
export type product = {
  id: string;
  product_type_id: string;
  place_id: string;
  name: string;
  created_at: string;
  updated_at: string;
  deleted_at: null;
  product_type: {
    id: string;
    place_type_id: string;
    name: string;
    created_at: string;
    updated_at: string;
    deleted_at: null;
  };
};
export default place;
