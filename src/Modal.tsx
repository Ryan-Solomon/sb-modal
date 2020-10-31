import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Root>
      <button onClick={() => setIsModalOpen(true)}>SHOW MODAL</button>

      {isModalOpen && (
        <Overlay>
          <Dialog>
            <p>
              It's a modal{' '}
              <span role='img' aria-label='tada'>
                🎉
              </span>
            </p>
            <button onClick={() => setIsModalOpen(false)}>CLOSE MODAL</button>
          </Dialog>
        </Overlay>
      )}
    </Root>
  );
}

const Root = styled.div`
  font-family: sans-serif;
  text-align: center;
  position: relative;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
`;

const Dialog = styled.div`
  background: white;
  border-radius: 5px;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export default Modal;
