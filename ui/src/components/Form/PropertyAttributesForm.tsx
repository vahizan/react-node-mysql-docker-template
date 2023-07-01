import React, { FunctionComponent } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import {

    useFormContext,

} from 'react-hook-form';

import { useTranslation } from 'react-i18next';


import styles from './PropertyAttributesForm.scss';



interface Props {
    title: string;
}

const PropertyAttributesForm: FunctionComponent<Props> = () => {
    const {
        formState: { errors },
    } = useFormContext();


    const fieldWithErrorMessage = (field: { key: string; field: JSX.Element | undefined }, index: number) => {
        return (
            <div key={`${field.key}_${index}`} className={styles.field}>
                {field.field}
                {errors[field.key]?.message && (
                    <div>ERROR</div>
                )}
            </div>
        );
    };
    return (
        <div className={styles.propertyAttributesContainer}>
            <ul className={styles.listContainer}>

            </ul>

        </div>
    );
};

export default PropertyAttributesForm;
