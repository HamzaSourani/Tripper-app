import React from "react";
import axios from "axios";
import productsType from "../sharedType/productsType";
const useFetchProducts = () => {
  const [product, setProduct] = React.useState<productsType[]>([]);
  React.useEffect(() => {
    (async () => {
      const res = await axios({
        method: "get",
        url: "http://tripper.dentatic.com/api/products",
        headers: {
          Accetp: "application/json",
        },
      });
      setProduct(res.data.data.data as productsType[]);
    })();
  }, []);
  return product;
};

export default useFetchProducts;
