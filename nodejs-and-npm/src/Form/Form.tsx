import React, {ReactElement, ReactHTMLElement, useState} from "react";
import './Form.css'
import Cleave from 'cleave.js/react'

type THandleSubmit = (e: React.FormEvent<HTMLFormElement>) => void
type TSetCardNumber = (value: number | null) => void
const handleSubmit: THandleSubmit = (e) => {
    e.preventDefault()
    console.log('Оплачено')
}

export const Form: React.FC = () => {
    const [cardNumber, setCardNumber] = useState('')
    const [date, setDate] = useState('')
    const [cvc, setCVC] = useState('')

    const formatValue = (value) => {
        console.log('value =', value)
        const formattedValue = value.replace(/[^0-9]/g, '')
        console.log('formattedValue =', formattedValue)
        console.log('cvc =', cvc)
        setCVC((prevState) => formattedValue)
    }

    return (
        <>
            <form className={'form'} onSubmit={handleSubmit}>
                <label className={'label-container'}>
                    <span className={'label-text'}>Номер карты</span>
                    <Cleave
                        className={'input-text'}
                        options={{creditCard: true}}
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                    />
                    {/*<input type="text" name="card-number" className={'input-text'} value={cardNumber} />*/}
                </label>
                <div className="dateAndCvc">
                    <label className={'label-container date-container'}>
                        <span className={'label-text'}>Срок действия</span>
                        {/*<div className={'date'}>*/}
                            <Cleave
                                className={'input-text'}
                                placeholder='ММ/ГГ'
                                options={{
                                    date: true,
                                    delimiter: '/',
                                    datePattern: ['m', 'y']
                                }}
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                            {/*<input*/}
                            {/*    type="text"*/}
                            {/*    name="date-month"*/}
                            {/*    className={'input-date input-text'}*/}
                            {/*    placeholder="MM"*/}
                            {/*/>*/}
                            {/*<span>/</span>*/}
                            {/*<input*/}
                            {/*    type="text"*/}
                            {/*    name="date-year"*/}
                            {/*    className={'input-date input-text'}*/}
                            {/*    placeholder="ГГ"*/}
                            {/*/>*/}
                        {/*</div>*/}
                    </label>
                    <label className={'label-container cvc-container'}>
                        <span className={'label-text'}>CVC/CVV</span>
                        <Cleave
                            className={'input-text'}
                            options={{
                                numericOnly: true,
                                blocks: [3]
                            }}
                            value={cvc}
                            onChange={(e) => setCVC(e.target.value)}
                        />
                        {/*<input type="text" name="cvc" className={'input-text'}/>*/}
                    </label>
                </div>
                <label className={'label-container'}>
                    <span className={'label-text'}>email для отправки онлайн-чека</span>
                    <input type="text" name="email" className={'input-text'}/>
                </label>
                <input type="submit" value="Оплатить" className={'input-button'}/>
            </form>
        </>
    )
}
