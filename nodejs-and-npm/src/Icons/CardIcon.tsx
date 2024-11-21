import { CreditCardType } from 'cleave.js/options/creditCard';

type TCardIcon = (props: { name: CreditCardType }) => JSX.Element;
export const CardIcon: TCardIcon = ({ name }) => {
  const path =
    name && name !== 'unknown'
      ? `src/assets/${name}.svg`
      : 'src/assets/default.svg';
  return <img src={path} alt="иконка банковской карты" />;
};
