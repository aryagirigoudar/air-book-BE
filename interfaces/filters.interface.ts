/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';
export interface IFilters extends Document{
    readonly id: string;
    readonly label: string;
}