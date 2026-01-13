import { useEffect } from "react";
import { UseFormSetValue } from "react-hook-form";
import { fetchAddressByZip } from "../services/mockApi";
import { FormValues } from "../types";

export const useAutoFill = (zipCode: string, setValue: UseFormSetValue<FormValues>) => {
  useEffect(() => {
    if (zipCode?.length === 5) {
      const autoFill = async () => {
        const data = await fetchAddressByZip(zipCode);
        if (data.city) {
          setValue("city", data.city);
        }

        if (data.state) {
          setValue("state", data.state);
        }
      };

      autoFill();
    }
  }, [zipCode, setValue]);
};
