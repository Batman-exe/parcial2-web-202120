import React, {useContext, useState} from 'react';
import {LOCALES} from "../i18n/locales";
import '../styles/_i18nselector.scss';

export const I18nSelect = ({setLang}) => {
    console.log(`setLang ${setLang}`);
    return (
        <div className="lang-select-wrapper">
            <div className="button">
                <button type="button" className="btn btn-primary" onClick={()=>{setLang(LOCALES.ENGLISH)}}>EN</button>
            </div>
            <div className="button">
                <button type="button" className="btn btn-primary" onClick={()=>{setLang(LOCALES.SPANISH)}}>ES</button>
            </div>
        </div>
    );
};
