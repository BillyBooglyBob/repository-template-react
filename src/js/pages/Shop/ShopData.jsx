import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useShopData = () => {
  return useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      const result = await axios.get("https://fakestoreapi.com/products?limit=5");
      return result.data;
    },
  });
};

export default useShopData;
