type placeCardsType = {
  id: string;
  name: string;
  place_type: string;
  address: string;
  street_address: string;
  city: string;
  country: "الجمهورية العربية السورية";
  comment: number;
  review: number;
  favorites: number;
  is_favorite: number;
  media: {
    id: number;
    model_type: "place";
    model_id: string;
    uuid: string;
    collection_name: string;
    name: string;
    file_name: string;
    mime_type: string;
    disk: string;
    conversions_disk: string;
    size: number;
    manipulations: [];
    custom_properties: [];
    generated_conversions: [];
    responsive_images: [];
    order_column: 1;
    created_at: string;
    updated_at: string;
    original_url: string;
    preview_url: string;
  }[];
};
export default placeCardsType;
