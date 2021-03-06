import React, { useEffect, useRef, useState } from 'react';

import { useField } from '@unform/core';

import SelectData from 'react-select';

import { Container } from './styles';

interface Option {
  label: string
  value: string | number
}

const styles = {
  control: (css: any) => ({
    ...css,
    transition: '0.1s',
    backgroundColor: 'var(--gray-900)',
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    border: '2px solid var(--purple-400)',
    cursor: 'pointer'
  }),

  dropdownIndicator: (css: any) => ({
    ...css,
    color: 'var(--purple-400)'
  }),

  indicatorSeparator: (css: any) => ({
    ...css,
    backgroundColor: 'var(--purple-400)'
  }),

  singleValue: (css: any) => ({
    ...css,
    color: 'var(--gray-50)'
  }),

  option: (css: any) => ({
    ...css,
    color: 'var(--gray-200)',
    fontWeight: '500',
    backgroundColor: 'var(--gray-900)',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'var(--gray-700)'
    }
  }),

  menu: (css: any) => ({
    ...css,
    marginTop: 0,
    backgroundColor: 'var(--gray-900)'
  })
};

interface Props {
  name: string
  options: Option[]
  onChange?: (value: string | number | undefined) => void
}

const Select: React.FC<Props> = ({ name, options, onChange }) => {
  const selectRef = useRef<any>(null);

  const [value, setValue] = useState('');

  const { fieldName, registerField } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        return value;
      },
      clearValue: (ref: any) => {
        selectRef?.current?.select?.clearValue();
        setValue('');
      }
    });
  }, [fieldName, registerField, options]);

  return (
    <Container>
      <SelectData
        name={name}
        options={options}
        styles={styles}
        onChange={(option) => onChange?.(option?.value)}
      />
    </Container>
  );
};

export default Select;
