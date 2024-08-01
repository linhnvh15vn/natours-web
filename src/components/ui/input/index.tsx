'use client';

import React, { InputHTMLAttributes, useId } from 'react';
import styles from './input.module.scss';
import classNames from 'classnames/bind';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const cx = classNames.bind(styles);

export default function Input({ label, ...props }: Props) {
  const id = useId();

  return (
    <div className={cx('form__group', props.className)}>
      <label className={cx('form__label')} htmlFor={id}>
        {label}
      </label>
      <input className={cx('form__input')} id={id} {...props} />
    </div>
  );
}
