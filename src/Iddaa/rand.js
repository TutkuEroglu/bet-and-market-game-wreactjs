import React from 'react'
import {Iddaadata} from "./Iddaadata"

function rand() {
    let item1 = Iddaadata.find( ({name}) => name === "Aquarius FC")
    let item2 = Iddaadata.find( ({name}) => name === "KARTEL SK")
    let item3 = Iddaadata.find( ({name}) => name === "CHENISS JK")
    let item4 = Iddaadata.find( ({name}) => name === "Randqua FC")
    let item5 = Iddaadata.find( ({name}) => name === "Holmes FC")
    let item6 = Iddaadata.find( ({name}) => name === "Real Mardin FC")
    let item7 = Iddaadata.find( ({name}) => name === "BETY AŞ")
    let item8 = Iddaadata.find( ({name}) => name === "3Bacak SK")
    let item9 = Iddaadata.find( ({name}) => name === "İbneler FC")
    let item10 = Iddaadata.find( ({name}) => name === "Dick FC")

    return (
        <div>
             Fikstur Hafta 1 <br/>
      
            {item2.name} {item2.macgol} - {item3.macgol} {item3.name} <br/>
            {item4.name} {item4.macgol} - {item5.macgol} {item5.name} <br/>
            {item1.name} {item1.macgol} - {item6.macgol} {item6.name} <br/>
            {item9.name} {item9.macgol} - {item10.macgol} {item10.name} <br/>
            {item8.name} {item8.macgol} - {item7.macgol} {item7.name} <br/> 
      
      

            Fikstur Hafta 2 <br/>
      
            {item3.name} {item3.macgol} - {item7.macgol} {item7.name} <br/>
            {item5.name} {item5.macgol} - {item1.macgol} {item1.name} <br/>
            {item6.name} {item6.macgol} - {item9.macgol} {item9.name} <br/>
            {item10.name} {item10.macgol} - {item8.macgol} {item8.name} <br/>
            {item2.name} {item2.macgol} - {item4.macgol} {item4.name} <br/> 
      
      
        </div>
    )
}

export default rand
