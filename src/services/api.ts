import { ZipCode } from "../types/types";
import { MOCK_AUTO_FILL_DATA } from "./api.data";

interface AddressData {
  zipCode: ZipCode;
  city: string;
  state: string;
}

export const fetchAddressByZip = async (
  zipCode: string
): Promise<Partial<AddressData>> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_AUTO_FILL_DATA[zipCode]);
    }, 800);
  });
