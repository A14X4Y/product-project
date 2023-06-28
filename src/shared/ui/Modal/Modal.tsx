import { classNames } from 'shared/lib/classNames/classNames';
import React, { ReactNode, useCallback, useEffect, useRef } from 'react';
import cls from './Modal.module.scss';
import { FC, useState } from 'react';
import { isEscape } from 'shared/lib/helpers/listeners';
import { Portal } from 'shared/ui/Portal';
import { useTheme } from 'app/providers/ThemeProvider';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;

const Modal: FC<ModalProps> = ({
  className,
  children,
  isOpen = false,
  onClose,
  lazy,
  ...props
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  console.log(isMounted);
  const { theme } = useTheme();

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.closing]: isClosing,
  };

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

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
    console.log('asdasadasd');
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

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className, theme])} {...props}>
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
