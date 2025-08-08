import clsx from 'clsx';
import s from './Modal.module.css';
import { IoClose } from 'react-icons/io5';
import { UseModal } from '../../zustand/modal';
import { useEffect } from 'react';

const Modal = () => {
  const { isOpen, closeModal } = UseModal();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [closeModal]);

  const handleBackDropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className={clsx(s.modalBackdrop, isOpen && s.visible)} onClick={handleBackDropClick}>
      <div className={clsx(s.modalWindow)}>
        <button
          type='button'
          className={clsx(s.closeModalButton)}
          aria-label='Close modal button'
          onClick={closeModal}
        >
          <IoClose className={clsx(s.closeModalIcon)} />
        </button>
        <h2 className={clsx(s.modalTitle)}>Thank you!</h2>
        <p className={clsx(s.modalText)}>
          Thank you for choosing Yacht Adventures, your booking details have been received and our
          team will be in touch shortly to confirm your reservation and provide any additional
          information or assistance you may need.
        </p>
      </div>
    </div>
  );
};

export default Modal;
