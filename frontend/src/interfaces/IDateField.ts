import { IDisabled } from "./IDisabled";
import { DateTime } from 'luxon';

export interface IDateField extends IDisabled{
    value?: DateTime | null;
    onChange?: (date: DateTime | null) => void;
}