import {z} from "zod";

export const formSchema = z
    .object({
        cardNumber: z.string().min(1, 'Введите номер карты'),
        date: z.string().min(1, 'Введите дату'),
        cvc: z.string().min(1, 'Введите трехзначный код на обратной стороне карты'),
        email: z
            .string()
            .min(1, 'Введите почту')
            .email('Некорректный адрес')
    });
