import favorites_relation from "./favoritesRelation";
import review from "./reviewType";
import media from "./mediaType";
type trips = {
  id: string;
  name: string;
  description: string;
  max: number;
  number_of_days: number;
  type: string;
  cost: number;
  status: string;
  started_at: string;
  ended_at: string;
  category: "مغامرات" | "ترفيه" | "تاريخ" | "تجربة جديدة";
  review: null;
  reviews: review[];
  favorites: Number;
  stations: stations;
  favorites_relation: favorites_relation[];
};

export type stations = [
  {
    id: string;
    journey_id: string;
    order: 1;
    started_at: string;
    ended_at: string;
    created_at: null;
    updated_at: null;
    deleted_at: null;
    journey_places: [
      {
        id: string;
        journey_station_id: string;
        place_id: string;
        started_at: string;
        ended_at: string;
        created_at: null;
        updated_at: null;
        deleted_at: null;
        place: {
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
          address: {
            id: string;
            addressable_type: "place";
            addressable_id: string;
            address: string;
            street_address: string;
            longitude: number;
            latitude: number;
            postal_code: string;
            is_default: number;
            created_at: null;
            updated_at: null;
            deleted_at: null;
            city_id: number;
          };
          reviews: review[];
          media: media[];
        };
      }
    ];
  }
];

export default trips;
