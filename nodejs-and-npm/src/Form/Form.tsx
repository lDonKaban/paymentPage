import React, {ReactElement, ReactHTMLElement} from "react";
import './Form.css'

export const Form: React.FC = () => {
    return (
        <>
            <form className={'form'}>
                <label className={'label-container'}>
                    <span className={'label-text'}>Номер карты</span>
                    <input type="text" name="card-number" className={'input-text'}/>
                </label>
                <label className={'label-container'}>
                    <span className={'label-text'}>Срок действия</span>
                    <div className={'date'}>
                        <input
                            type="text"
                            name="date-month"
                            className={'input-date'}
                            placeholder="MM"
                        />
                        <span>/</span>
                        <input
                            type="text"
                            name="date-year"
                            className={'input-date'}
                            placeholder="ГГ"
                        />
                    </div>
                </label>
                <label className={'label-container'}>
                    <span className={'label-text'}>CVC/CVV (три цифры на обороте карты)</span>
                    <input type="text" name="cvc" className={'input-text'}/>
                </label>
                <label className={'label-container'}>
                    <span className={'label-text'}>email для отправки онлайн-чека</span>
                    <input type="text" name="email" className={'input-text'}/>
                </label>
                <input type="submit" value="Отправить" className={'input-button'}/>
            </form>
        </>
    )
}
