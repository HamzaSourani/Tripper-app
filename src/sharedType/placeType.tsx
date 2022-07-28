type place =
  | {
      id: string;
      user_id: string;
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
      specs: [];
      specs_place: [];
      products: [];
      reviews: [];
      media: [];
    }
  | undefined;
export default place;
