import { classNames } from 'shared/lib/classNames/classNames';
import React, { ReactNode, useCallback, useEffect, useRef } from 'react';
import cls from './Modal.module.scss';
import { FC, useState } from 'react';
import { isEscape } from 'shared/lib/helpers/listeners';
import { Portal } from 'shared/ui/Portal';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 300;

const Modal: FC<ModalProps> = ({ className, children, isOpen = false, onClose, ...props }) => {
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.closing]: isClosing,
  };
  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (isEscape(e)) {
        closeHandler();
      }
    },
    [closeHandler],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  const clickContentHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className])} {...props}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={clickContentHandler}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export { Modal };
