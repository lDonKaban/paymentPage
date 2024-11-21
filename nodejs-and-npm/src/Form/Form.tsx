import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import './Form.css';
import { CustomInput } from '../CustomInput';
import { CardIcon } from '../Icons';
import { TFormSchema } from '../Types/formTypes';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from '../Types/zodSchema.ts';
import { CreditCardType } from 'cleave.js/options/creditCard';

export const Form: React.FC = () => {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormSchema>({ resolver: zodResolver(formSchema) });
  const [cardType, setCardType] = useState<CreditCardType>('unknown');

  // const validateCardNumber = (e) => {
  //     const validatedCardNumber = formSchema.shape.cardNumber.safeParse(cardNumber)
  //     if (!validatedCardNumber.success) {
  //         console.log('validatedCardNumber.error =', validatedCardNumber.error)
  //         console.log('register<\'cardNumber\'>(\'cardNumber\') =', register<'cardNumber'>('cardNumber'))
  //     }
  // }

  const onSubmit: SubmitHandler<TFormSchema> = (data) => {
    console.log('testData =', data);
    reset();
  };

  const changeCardType = (type: CreditCardType) => {
    setCardType(type);
  };

  useEffect(() => {
    console.log('error =', errors);
  }, [errors]);

  return (
    <>
      <form className={'form'} onSubmit={handleSubmit(onSubmit)}>
        <label className={'label-container'}>
          <div className="text-with-icon">
            <span className={'label-text'}>Номер карты</span>
            <CardIcon name={cardType} />
          </div>
          <CustomInput
            error={errors.cardNumber}
            name="cardNumber"
            options={{
              creditCard: true,
              onCreditCardTypeChanged: changeCardType,
            }}
            control={control}
          />
        </label>
        <div className="dateAndCvc">
          <label className={'label-container date-container'}>
            <span className={'label-text'}>Срок действия</span>
            <CustomInput
              error={errors.date}
              name="date"
              options={{
                date: true,
                delimiter: '/',
                datePattern: ['m', 'y'],
              }}
              control={control}
            />
          </label>
          <label className={'label-container cvc-container'}>
            <span className={'label-text'}>CVC/CVV</span>
            <CustomInput
              error={errors.cvc}
              name="cvc"
              options={{
                numericOnly: true,
                blocks: [3],
              }}
              control={control}
            />
          </label>
        </div>
        <label className={'label-container'}>
          <span className={'label-text'}>email для отправки онлайн-чека</span>
          <CustomInput error={errors.email} name="email" control={control} />
        </label>
        <input type="submit" value="Оплатить" className={'input-button'} />
      </form>
    </>
  );
};
