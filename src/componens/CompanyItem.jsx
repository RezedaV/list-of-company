import React from 'react';
import MyButton from "./UI/button/MyButton";

const CompanyItem = (props) => {
    return (
        <div className='company'>
            <div className='company__content'>
                <strong className='company__name'>
                    {props.number}. Наименование:  {props.company.title}
                </strong>
                <div className='company__address'>
                    Адрес:  {props.company.address}
                </div>
                <div className='company__ogrn'>
                    ОГРН:  {props.company.ogrn}
                </div>
                <div className='company__inn'>
                    ИНН:  {props.company.inn}
                </div>
                <div className='company__dateReg'>
                    Дата  регистрации:  {props.company.dateReg}
                </div>
            </div>
            <div className='company__btn'>
                <MyButton onClick={() => props.remove(props.company)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    );
};

export default CompanyItem;