import { useCallback, useState } from "react";

const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  const isOpen = useCallback(() => {
    setValue(true);
  }, []);

  const isClose = useCallback(() => {
    setValue(false);
  }, []);

  return { value, toggle, isOpen, isClose };
};

export default useToggle;
