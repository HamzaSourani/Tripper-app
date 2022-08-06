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
  favorites: Number;
  stations: stations;
  is_favorite: number | null;
};

type stations = [
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
        };
      }
    ];
  }
];
export default trips;
