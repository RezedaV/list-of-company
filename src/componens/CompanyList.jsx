import React from 'react';
import CompanyItem from "./CompanyItem";

const CompanyList = ({companies, title, remove}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            {companies.map((company, index )=>
                <CompanyItem remove={remove} number={index + 1} company={company} key={company.id} />
            )}
        </div>
    );
};

export default CompanyList;