import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';

import SlideOutContext from './SlideOutContext';

export interface SlideOutProps {
  // children?: string | React.ReactElement
  children?: any
}

const SlideOutProvider = ({ children }: SlideOutProps): React.ReactElement => {
  const [show, setShow] = useState<boolean>(false);
  const [title, setTitle] = useState<string | null>(null);
  const [contents, setContents] = useState<string | React.ReactElement | null>(null);

  const open = (title: string, contents: string | React.ReactElement) => {
    console.warn('title', title);
    console.warn('contents', contents);
    setTitle(title);
    setContents(contents);
    setShow(true);
  };

  const close = () => {
    console.warn('close');
    setShow(false);
    setContents(null);
    setTitle(null);
  };

  return (
    <SlideOutContext.Provider value={{
      open,
      close,
    }}>
      {children}

      <Modal
        show={show}
        centered
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {contents}
        </Modal.Body>

        {/*<Modal.Footer>*/}
        {/*</Modal.Footer>*/}
      </Modal>
    </SlideOutContext.Provider>
  );
};

SlideOutProvider.propTypes = {
  children: PropTypes.any,
};

export default SlideOutProvider;
