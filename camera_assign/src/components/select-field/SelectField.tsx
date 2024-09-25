import React from 'react';
import FormControl from '@mui/material/FormControl';
import { Select } from '@mui/material';
import { Controller } from 'react-hook-form';

export interface ISelectProps {
    controlName: string;
    labelName?: string;
    placeholder?: string;
    control: any;
    defaultValue?: any;
    register: any;
    errors?: any;
    rules?: any;
    options: any[];
    optionName: string;
    optionValue: string | number;
    classes?: any;
    changeHandler?: any;
    hideLabelName?: boolean;
}

const SelectField = (props: ISelectProps) => {
    return (
               
        <FormControl fullWidth>
            <Controller
                control={props.control}
                name={props.controlName}
                rules={props.rules}
                defaultValue=""
                render={({ field }) => (
                    <Select {...field}
                        className={`form-control nativeSelect ${props.errors[props.controlName] && 'invalid-parentBox'}`}
                        onChange={(e) => {
                            field.onChange(e);
                            props.changeHandler && props.changeHandler(e);
                        }}
                    >
                        {props.placeholder && (
                            <option disabled value="">
                                <em style={{ color: '#8F9BB3', fontSize: '14px' }}>{props.placeholder} </em>
                            </option>
                        )}

                        {props.options.map((option) => (

                            <option key={option[props.optionValue]} value={option[props.optionValue]}>
                                {option[props.optionName]}
                            </option>
                        ))}
                    </Select>
                )}
            />

        </FormControl>
    );
};

export default SelectField;
