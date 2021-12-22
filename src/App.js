import React, {useState} from "react";
import './styles/App.css';
import CompanyList from "./componens/CompanyList";
import CompanyForm from "./componens/CompanyForm";
import MyModal from "./componens/UI/MyModal/MyModal";
import MyButton from "./componens/UI/button/MyButton";

function App() {
    const [companies, setCompanies] = useState([
        {id:1, title:'OOO Ананас', address:'г.Екатеринбург, ул. Белинского 83, оф.403', ogrn:'315668600000359', inn:'667361968598', dateReg:'19.01.2015'},
        {id:2, title:'АО "Киномакс"', address:'г.Москва, ул. Василисы Кожиной, д. 1', ogrn:'1127746658995', inn:'7705995118', dateReg:'24.08.2012'},
        {id:3, title:'OOO Планета здоровья', address:'г.Москва, ул.Братиславская, дом 16, корпус 1', ogrn:'1107746057517', inn:'7733723966', dateReg:'02.02.2010'}
])
    const [modal, setModal] = useState(false)

    const createComp = (comp) =>{
        setCompanies([...companies, comp])
        setModal(false)

    }

    const removeCompany = (company) => {
        setCompanies(companies.filter(c=> c.id !== company.id))
    }




  return (
    <div className="App">
        <MyButton onClick={() => setModal(true)} style={{marginTop:30}}>Cоздать компанию</MyButton>
        <MyModal visible={modal} setVisible={setModal}>
            <CompanyForm  create={createComp}/>
        </MyModal>
        {companies.length !== 0
        ? <CompanyList remove={removeCompany} companies={companies} title={'Список компаний:'}/>
        : <h1 style={{textAlign: 'center'}}>Список компаний пуст</h1>
        }

    </div>
  );
}

export default App;
