import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import { FC, InputHTMLAttributes, memo, useState, useEffect, useRef } from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

const Input: FC<InputProps> = ({
  className,
  value,
  onChange,
  type = 'text',
  placeholder = '',
  autofocus = false,

  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);
  const ref = useRef<HTMLInputElement>();

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current.focus();
    }
  }, [autofocus]);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onSelect = (e: any) => {
    setCaretPosition(e?.target.selectionStart || 0);
  };
  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      {placeholder && <div className={cls.placeholder}>{`${placeholder}>`}</div>}
      <div className={cls.caretWrapper}>
        <input
          ref={ref}
          value={value}
          type={type}
          className={cls.input}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChangeHandler}
          onSelect={onSelect}
          {...props}
        ></input>
        {isFocused && (
          <span className={cls.caret} style={{ left: `${caretPosition * 9}px` }}></span>
        )}
      </div>
    </div>
  );
};

const memoInput = memo(Input);
export { memoInput };
