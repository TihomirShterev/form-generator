import { useEffect } from "react";
import { fetchAddressByZip } from "../services/api";
import { AutoFillHookProps } from "../types/types";

export const useAutoFill = ({
  zipCode,
  setValue,
  setError,
  clearErrors,
  resetField,
}: AutoFillHookProps) => {
  useEffect(() => {
    if (zipCode?.length === 5) {
      const autoFill = async () => {
        try {
          const data = await fetchAddressByZip(zipCode);

          if (data.city) {
            setValue("city", data.city);
          }

          if (data.state) {
            setValue("state", data.state);
          }

          clearErrors();
        } catch (err) {
          resetField("city");
          resetField("state");
        }
      };

      autoFill();
    }
  }, [zipCode, setValue, setError, clearErrors, resetField]);
};
