declare module 'angel1979-react-simple-modal' {
    import { FC } from 'react';
  
    interface ModalProps {
      title?: string;
      buttonLabel?: string;
      isOpen: boolean;
      onClose: () => void;
      onButtonClick?: () => void;
    }
  
    export const Modal: FC<ModalProps>;
  }
  