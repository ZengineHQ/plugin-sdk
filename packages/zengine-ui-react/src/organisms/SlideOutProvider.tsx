import React, { useState, ReactChild, ReactChildren } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';

import SlideOutContext from './SlideOutContext';

export interface SlideOutProps {
  children?: ReactChildren | ReactChild
}

export interface SlideOutOpenOptions {
  onClose?: Function
}

const SlideOutProvider = ({ children }: SlideOutProps): React.ReactElement => {
  const [show, setShow] = useState<boolean>(false);
  const [title, setTitle] = useState<string | null>(null);
  const [contents, setContents] = useState<string | React.ReactElement | null>(null);
  const [onClose, setOnClose] = useState<Function>();

  const open = (title: string, contents: string | React.ReactElement, options?: SlideOutOpenOptions): void => {
    setTitle(title);
    setContents(contents);
    setShow(true);

    if (options !== undefined) {
      if (options.onClose !== undefined) {
        // If a setter gets a function argument, it calls it
        // immediately.  So, we wrap in a dummy function
        // that returns the actual function we want to
        // call down in close()
        setOnClose(() => options.onClose);
      }
    }
  };

  const close = (): void => {
    setShow(false);
    setContents(null);
    setTitle(null);
    if (onClose !== undefined) {
      onClose();
    }
  };

  return (
    <SlideOutContext.Provider value={{
      open,
      close,
    }}>
      {children}

      <Modal
        backdrop={true}
        show={show}
        centered={false}
        dialogClassName="org-slideout-provider"
        onHide={close}
        scrollable={true}
        animation={false}
      >
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {contents}
        </Modal.Body>
      </Modal>
    </SlideOutContext.Provider>
  );
};

SlideOutProvider.propTypes = {
  children: PropTypes.any,
};

export default SlideOutProvider;
