import { AUTO_FILL_DATA_MOCK } from "../utils/constants";
import { AddressData } from "../types";

export const fetchAddressByZip = async (
  zipCode: string
): Promise<Partial<AddressData>> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(AUTO_FILL_DATA_MOCK[zipCode]);
    }, 800);
  });
