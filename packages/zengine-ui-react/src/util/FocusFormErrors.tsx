import { useEffect } from 'react';
import { useFormikContext } from 'formik';

const FocusFormErrors = (): null => {
  const { errors, isSubmitting, isValidating } = useFormikContext();

  useEffect(() => {
    if (isSubmitting && !isValidating) {
      const keys = Object.keys(errors);
      if (keys.length > 0) {
        const selector = `[name=${keys[0]}]`;
        const errorElement = document.querySelector(selector) as HTMLElement;
        if (errorElement !== null) {
          window.scrollTo(0, errorElement.offsetTop);
        }
      }
    }
  }, [errors, isSubmitting, isValidating]);

  return null;
};

export default FocusFormErrors;
