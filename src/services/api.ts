import { MOCK_AUTO_FILL_DATA } from "../utils/constants";
import { AddressData } from "../types/types";

export const fetchAddressByZip = async (
  zipCode: string
): Promise<Partial<AddressData>> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_AUTO_FILL_DATA[zipCode]);
    }, 800);
  });
