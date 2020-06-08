import { useEffect } from 'react';

/**
 * Helper to switch to an initial Storybook panel when a component first runs.
 * Used primarily to make sure "Playground" stories open in the "Knobs" panel.
 *
 * @param name
 */
const useDefaultPanel = name => {
  useEffect(() => {
    const xpath = `//button[text()="${ name }"]`;
    const doc = window.top.document;
    const el = doc.evaluate(xpath, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (el) {
      el.click();
    }
  }, [name]);
};

export default useDefaultPanel;
