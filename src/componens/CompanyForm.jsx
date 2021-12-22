import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const CompanyForm = ({create}) => {
    const [newCompany, setNewCompany] = useState({title:'', address:'', ogrn:'', inn:'', dateReg:''})

    const adeNewCompany = (e) => {
        e.preventDefault()
        const comp = {
            ...newCompany,
            id: Date.now()
        }
        // setCompanies([...companies, {...newCompany, id: Date.now()}])
        create(comp)
        setNewCompany({title:'', address:'', ogrn:'', inn:'', dateReg:''})
    }


    return (
        <form>
            <MyInput
                value={newCompany.title}
                onChange = {e => setNewCompany({...newCompany, title: e.target.value})}
                type="text"
                placeholder='Наименование компании'/>
            <MyInput
                value={newCompany.address}
                onChange = {e => setNewCompany({...newCompany, address: e.target.value})}
                type="text"
                placeholder='Адрес:'/>
            <MyInput
                value={newCompany.ogrn}
                onChange = {e => setNewCompany({...newCompany, ogrn: e.target.value})}
                type="text"
                placeholder='ОГРН:'/>
            <MyInput
                value={newCompany.inn}
                onChange = {e => setNewCompany({...newCompany, inn: e.target.value})}
                type="text"
                placeholder='ИНН:'/>
            <MyInput
                value={newCompany.dateReg}
                onChange = {e => setNewCompany({...newCompany, dateReg: e.target.value})}
                type="text"
                placeholder='Дата  регистрации:'/>
            <MyButton onClick={adeNewCompany}>Добавить компанию</MyButton>
        </form>
    );
};

export default CompanyForm;