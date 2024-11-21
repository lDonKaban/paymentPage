import Cleave from 'cleave.js/react';
import { Control, Controller, FieldError } from 'react-hook-form';
import { CleaveOptions } from 'cleave.js/options';
import { TFormSchema } from '../Types/formTypes.ts';

type TProps = {
  name: 'cardNumber' | 'date' | 'cvc' | 'email';
  options?: CleaveOptions;
  control: Control<TFormSchema>;
  error?: FieldError;
};
export const CustomInput = ({ name, options, control, error }: TProps) => (
  <>
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <Cleave
          onChange={(e) => field.onChange(e.target.value)}
          className={'input-text'}
          options={options ?? {}}
          aria-invalid={!!error}
        />
      )}
    />
    {error && (
      <span role="alert" className="error">
        {error?.message}
      </span>
    )}
  </>
);
