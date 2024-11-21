import {z} from "zod";
import React from "react";
import {formSchema} from "./zodSchema.ts";

export type TFormSchema = z.infer<typeof formSchema>;
export type THandleSubmit = (e: React.FormEvent<HTMLFormElement>) => void;
export type TSetCardNumber = (value: number | '') => void;
export enum CardType {
    mastercard = 'MasterCardIcon',
    visa = 'VisaIcon',
    mir = 'MirCardIcon',
    default = 'DefaultCardIcon'
}
