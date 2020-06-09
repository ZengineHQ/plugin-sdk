import React, { useEffect } from 'react';
import { useFormikContext } from 'formik';

const FocusFormErrors = (): null => {
  const { errors, isSubmitting, isValidating } = useFormikContext();

  useEffect(() => {
    if (isSubmitting && !isValidating) {
      let keys = Object.keys(errors);
      if (keys.length > 0) {
        const selector = `[name=${keys[0]}]`;
        const errorElement = document.querySelector(selector) as HTMLElement;
        if (errorElement) {
          window.scrollTo({
            top: errorElement.offsetTop,
            behavior: 'smooth'
          })
          errorElement.focus();
        }
      }
    }
  }, [errors, isSubmitting, isValidating]);

  return null;
};

export default FocusFormErrors;
