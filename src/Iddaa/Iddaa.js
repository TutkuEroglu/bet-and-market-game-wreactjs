import React, { useState, useEffect } from 'react'
import { Iddaadata } from "./Iddaadata";
import { useSelector , useDispatch} from "react-redux";
import { increment, decrement } from "../action/index"
import './Iddaa.css';




function Iddaa() {

  const [yeah, setYeah] = useState("")
  const [week, setWeek] = useState(0)
  const [puann, setPuann] = useState([])
  const [vis, setVis] = useState(false)
  const [mevy, setMevy] = useState(false)
  const [rand, setRand] = useState(false)
  const [takımismi, setTakımismi] = useState("");

        const dispatch = useDispatch();
        const counter = useSelector(state => state.Money);
      
        let item1 = Iddaadata.find( ({name}) => name === "Aquarius FC")
        let item2 = Iddaadata.find( ({name}) => name === "KARTEL SK")
        let item3 = Iddaadata.find( ({name}) => name === "CHENISS JK")
        let item4 = Iddaadata.find( ({name}) => name === "Randqua FC")
        let item5 = Iddaadata.find( ({name}) => name === "Holmes FC")
        let item6 = Iddaadata.find( ({name}) => name === "Real Mardin")
        let item7 = Iddaadata.find( ({name}) => name === "BETY AŞ")
        let item8 = Iddaadata.find( ({name}) => name === "ARSENAL")
        let item9 = Iddaadata.find( ({name}) => name === "BARCELONA")
        let item10 = Iddaadata.find( ({name}) => name === "JUVENTUS")
        if (rand === true && Iddaadata.find( ({sahiplik}) => sahiplik === 1)) {item8 =Iddaadata.find( ({name}) => name === takımismi ) }

  const isimguncelle = (val) => {
    setRand(true)
    val.name = takımismi
    val.sahiplik2 = 0
  }

  const addegis = (val) => {
    val.sahiplik2 = 1
    setMevy(true)
  }

  const Satinal = (val) => {
    if (counter >= 50000){
      dispatch(decrement(50000))
      val.sahiplik = 1
      console.log(val)
    } else {
      alert("takım sahibi olucak paran yok")
    }
  }

  const bagis = (val) => {
    if (counter >= 5000){
      dispatch(decrement(5000))
      val.guc = val.guc + 0.2
      console.log(val)
    } else {
      alert("Bağış yapıcak kadar paran yok")
    }
  }


  const Tut = (val) => {
    if (counter >= 500){
      dispatch(decrement(500))
      val.tuttugun = 1
      setVis(true)
    } else {
      alert("takım destekleyecek kadar paran yok")
    }
  }


  const sifirla = () => {
    setWeek(0)
    Iddaadata.map((val) => {
      return (
        val.siralama = 0,
        val.mac = 0,
        val.galibiyet=0,
        val.berabere=0,
        val.maglubiyet=0,
        val.atilangol=0,
        val.yenilengol=0,
        val.macgol=0,
        val.averaj=0,
        val.puan=0,
        val.form="",
        val.tuttugun=0
      )
     
    })
  }

  const fnc = (item, aytım) => {

        let aa = Math.floor(Math.random() * 10) + 1; 
        let ab = Math.floor(Math.random() * 10) + 1;

        let me = Math.floor(Math.random() * 5);
        let mex = Math.floor(Math.random() * 5);
        
if (item.guc === aytım.guc ) {
  console.log("esit")
        item.mac = item.mac + 1;
        aytım.mac = aytım.mac + 1;
        item.atilangol = item.atilangol + me;
        aytım.atilangol = aytım.atilangol + mex;
        item.yenilengol = item.yenilengol + mex;
        aytım.yenilengol = aytım.yenilengol + me;
        item.averaj = item.atilangol - item.yenilengol;
        aytım.averaj = aytım.atilangol - aytım.yenilengol;
        item.macgol = me
        aytım.macgol = mex
        

        if (me===mex) {
          item.puan = item.puan + 1
          aytım.puan = aytım.puan + 1
          item.berabere = item.berabere + 1
          aytım.berabere = aytım.berabere + 1
          item.form = "berabere"
          aytım.form = "berabere"
        } else if (me > mex) {
          item.puan = item.puan + 3;
          item.galibiyet = item.galibiyet + 1; 
          aytım.maglubiyet = aytım.maglubiyet + 1;
          item.form = "yendi"
          aytım.form = "yenildi"
        } else if (mex > me) {
          aytım.puan = aytım.puan + 3;
          aytım.galibiyet = aytım.galibiyet + 1;
          item.maglubiyet = item.maglubiyet + 1;
          aytım.form = "yendi"
          item.form = "yenildi"
        }
} 
if (item.guc > aytım.guc ) {
  console.log("byk")
  if (aa > 9 && ab > 9) {
    console.log("İTEMMMMMM")
        item.mac = item.mac + 1;
        aytım.mac = aytım.mac + 1;
        item.atilangol = item.atilangol + me+5;
        aytım.atilangol = aytım.atilangol + mex;
        item.yenilengol = item.yenilengol + mex;
        aytım.yenilengol = aytım.yenilengol + me+5;
        item.averaj = item.atilangol - item.yenilengol;
        aytım.averaj = aytım.atilangol - aytım.yenilengol;
        item.macgol = me+5
        aytım.macgol = mex
        

        if (me+5===mex) {
          item.puan = item.puan + 1
          aytım.puan = aytım.puan + 1
          item.berabere = item.berabere + 1
          aytım.berabere = aytım.berabere + 1
          item.form = "berabere"
          aytım.form = "berabere"
        } else if (me+5 > mex) {
          item.puan = item.puan + 3;
          item.galibiyet = item.galibiyet + 1; 
          aytım.maglubiyet = aytım.maglubiyet + 1;
          item.form = "yendi"
          aytım.form = "yenildi"
        } else if (mex > me+5) {
          aytım.puan = aytım.puan + 3;
          aytım.galibiyet = aytım.galibiyet + 1;
          item.maglubiyet = item.maglubiyet + 1;
          aytım.form = "yendi"
          item.form = "yenildi"
        }
  } else if (aa > 8 && ab > 8) {
    console.log("İTEMMMMMM")
    item.mac = item.mac + 1;
        aytım.mac = aytım.mac + 1;
        item.atilangol = item.atilangol + me+4;
        aytım.atilangol = aytım.atilangol + mex;
        item.yenilengol = item.yenilengol + mex;
        aytım.yenilengol = aytım.yenilengol + me+4;
        item.averaj = item.atilangol - item.yenilengol;
        aytım.averaj = aytım.atilangol - aytım.yenilengol;
        item.macgol = me+4
        aytım.macgol = mex
        

        if (me+4===mex) {
          item.puan = item.puan + 1
          aytım.puan = aytım.puan + 1
          item.berabere = item.berabere + 1
          aytım.berabere = aytım.berabere + 1
          item.form = "berabere"
          aytım.form = "berabere"
        } else if (me+4 > mex) {
          item.puan = item.puan + 3;
          item.galibiyet = item.galibiyet + 1; 
          aytım.maglubiyet = aytım.maglubiyet + 1;
          item.form = "yendi"
          aytım.form = "yenildi"
        } else if (mex > me+4) {
          aytım.puan = aytım.puan + 3;
          aytım.galibiyet = aytım.galibiyet + 1;
          item.maglubiyet = item.maglubiyet + 1;
          aytım.form = "yendi"
          item.form = "yenildi"
        }
  } else if (aa > 7 && ab > 7) {
    console.log("İTEMMMMMM")
    item.mac = item.mac + 1;
        aytım.mac = aytım.mac + 1;
        item.atilangol = item.atilangol + me+3;
        aytım.atilangol = aytım.atilangol + mex;
        item.yenilengol = item.yenilengol + mex;
        aytım.yenilengol = aytım.yenilengol + me+3;
        item.averaj = item.atilangol - item.yenilengol;
        aytım.averaj = aytım.atilangol - aytım.yenilengol;
        item.macgol = me+3
        aytım.macgol = mex
        

        if (me+3===mex) {
          item.puan = item.puan + 1
          aytım.puan = aytım.puan + 1
          item.berabere = item.berabere + 1
          aytım.berabere = aytım.berabere + 1
          item.form = "berabere"
          aytım.form = "berabere"
        } else if (me+3 > mex) {
          item.puan = item.puan + 3;
          item.galibiyet = item.galibiyet + 1; 
          aytım.maglubiyet = aytım.maglubiyet + 1;
          item.form = "yendi"
          aytım.form = "yenildi"
        } else if (mex > me+3) {
          aytım.puan = aytım.puan + 3;
          aytım.galibiyet = aytım.galibiyet + 1;
          item.maglubiyet = item.maglubiyet + 1;
          aytım.form = "yendi"
          item.form = "yenildi"
        }
  } else if (aa > 6 && ab > 6) {
    console.log("İTEMMMMMM")
    item.mac = item.mac + 1;
        aytım.mac = aytım.mac + 1;
        item.atilangol = item.atilangol + me+2;
        aytım.atilangol = aytım.atilangol + mex;
        item.yenilengol = item.yenilengol + mex;
        aytım.yenilengol = aytım.yenilengol + me+2;
        item.averaj = item.atilangol - item.yenilengol;
        aytım.averaj = aytım.atilangol - aytım.yenilengol;
        item.macgol = me+2
        aytım.macgol = mex
        

        if (me+2===mex) {
          item.puan = item.puan + 1
          aytım.puan = aytım.puan + 1
          item.berabere = item.berabere + 1
          aytım.berabere = aytım.berabere + 1
          item.form = "berabere"
          aytım.form = "berabere"
        } else if (me+2 > mex) {
          item.puan = item.puan + 3;
          item.galibiyet = item.galibiyet + 1; 
          aytım.maglubiyet = aytım.maglubiyet + 1;
          item.form = "yendi"
          aytım.form = "yenildi"
        } else if (mex > me+2) {
          aytım.puan = aytım.puan + 3;
          aytım.galibiyet = aytım.galibiyet + 1;
          item.maglubiyet = item.maglubiyet + 1;
          aytım.form = "yendi"
          item.form = "yenildi"
        }
  } else if (aa > 5 && ab > 5) {
    console.log("İTEMMMMMM")
    item.mac = item.mac + 1;
    aytım.mac = aytım.mac + 1;
    item.atilangol = item.atilangol + me+1;
    aytım.atilangol = aytım.atilangol + mex;
    item.yenilengol = item.yenilengol + mex;
    aytım.yenilengol = aytım.yenilengol + me+1;
    item.averaj = item.atilangol - item.yenilengol;
    aytım.averaj = aytım.atilangol - aytım.yenilengol;
    item.macgol = me+1
    aytım.macgol = mex
    

    if (me+1===mex) {
      item.puan = item.puan + 1
      aytım.puan = aytım.puan + 1
      item.berabere = item.berabere + 1
      aytım.berabere = aytım.berabere + 1
      item.form = "berabere"
      aytım.form = "berabere"
    } else if (me+1 > mex) {
      item.puan = item.puan + 3;
      item.galibiyet = item.galibiyet + 1; 
      aytım.maglubiyet = aytım.maglubiyet + 1;
      item.form = "yendi"
      aytım.form = "yenildi"
    } else if (mex > me+1) {
      aytım.puan = aytım.puan + 3;
      aytım.galibiyet = aytım.galibiyet + 1;
      item.maglubiyet = item.maglubiyet + 1;
      aytım.form = "yendi"
      item.form = "yenildi"
    }
  } else {
        item.mac = item.mac + 1;
        aytım.mac = aytım.mac + 1;
        item.atilangol = item.atilangol + me;
        aytım.atilangol = aytım.atilangol + mex;
        item.yenilengol = item.yenilengol + mex;
        aytım.yenilengol = aytım.yenilengol + me;
        item.averaj = item.atilangol - item.yenilengol;
        aytım.averaj = aytım.atilangol - aytım.yenilengol;
        item.macgol = me
        aytım.macgol = mex
        

        if (me===mex) {
          item.puan = item.puan + 1
          aytım.puan = aytım.puan + 1
          item.berabere = item.berabere + 1
          aytım.berabere = aytım.berabere + 1
          item.form = "berabere"
          aytım.form = "berabere"
        } else if (me > mex) {
          item.puan = item.puan + 3;
          item.galibiyet = item.galibiyet + 1; 
          aytım.maglubiyet = aytım.maglubiyet + 1;
          item.form = "yendi"
          aytım.form = "yenildi"
        } else if (mex > me) {
          aytım.puan = aytım.puan + 3;
          aytım.galibiyet = aytım.galibiyet + 1;
          item.maglubiyet = item.maglubiyet + 1;
          aytım.form = "yendi"
          item.form = "yenildi"
        }
      }
}
if (aytım.guc > item.guc ) {
  console.log("kck")
  if (aa > 9 && ab > 9) {
    console.log("AYTIMMMM")
    item.mac = item.mac + 1;
        aytım.mac = aytım.mac + 1;
        item.atilangol = item.atilangol + me;
        aytım.atilangol = aytım.atilangol + mex+5;
        item.yenilengol = item.yenilengol + mex+5;
        aytım.yenilengol = aytım.yenilengol + me;
        item.averaj = item.atilangol - item.yenilengol;
        aytım.averaj = aytım.atilangol - aytım.yenilengol;
        item.macgol = me
        aytım.macgol = mex+5
        

        if (me===mex+5) {
          item.puan = item.puan + 1
          aytım.puan = aytım.puan + 1
          item.berabere = item.berabere + 1
          aytım.berabere = aytım.berabere + 1
          item.form = "berabere"
          aytım.form = "berabere"
        } else if (me > mex+5) {
          item.puan = item.puan + 3;
          item.galibiyet = item.galibiyet + 1; 
          aytım.maglubiyet = aytım.maglubiyet + 1;
          item.form = "yendi"
          aytım.form = "yenildi"
        } else if (mex+5 > me) {
          aytım.puan = aytım.puan + 3;
          aytım.galibiyet = aytım.galibiyet + 1;
          item.maglubiyet = item.maglubiyet + 1;
          aytım.form = "yendi"
          item.form = "yenildi"
        }
  } else if (aa > 8 && ab > 8) {
    console.log("AYTIMMMM")
    item.mac = item.mac + 1;
        aytım.mac = aytım.mac + 1;
        item.atilangol = item.atilangol + me;
        aytım.atilangol = aytım.atilangol + mex+4;
        item.yenilengol = item.yenilengol + mex+4;
        aytım.yenilengol = aytım.yenilengol + me;
        item.averaj = item.atilangol - item.yenilengol;
        aytım.averaj = aytım.atilangol - aytım.yenilengol;
        item.macgol = me
        aytım.macgol = mex+4
        

        if (me===mex+4) {
          item.puan = item.puan + 1
          aytım.puan = aytım.puan + 1
          item.berabere = item.berabere + 1
          aytım.berabere = aytım.berabere + 1
          item.form = "berabere"
          aytım.form = "berabere"
        } else if (me > mex+4) {
          item.puan = item.puan + 3;
          item.galibiyet = item.galibiyet + 1; 
          aytım.maglubiyet = aytım.maglubiyet + 1;
          item.form = "yendi"
          aytım.form = "yenildi"
        } else if (mex+4 > me) {
          aytım.puan = aytım.puan + 3;
          aytım.galibiyet = aytım.galibiyet + 1;
          item.maglubiyet = item.maglubiyet + 1;
          aytım.form = "yendi"
          item.form = "yenildi"
        }
  } else if (aa > 7 && ab > 7) {
    console.log("AYTIMMMM")
    item.mac = item.mac + 1;
        aytım.mac = aytım.mac + 1;
        item.atilangol = item.atilangol + me;
        aytım.atilangol = aytım.atilangol + mex+3;
        item.yenilengol = item.yenilengol + mex+3;
        aytım.yenilengol = aytım.yenilengol + me;
        item.averaj = item.atilangol - item.yenilengol;
        aytım.averaj = aytım.atilangol - aytım.yenilengol;
        item.macgol = me
        aytım.macgol = mex+3
        

        if (me===mex+3) {
          item.puan = item.puan + 1
          aytım.puan = aytım.puan + 1
          item.berabere = item.berabere + 1
          aytım.berabere = aytım.berabere + 1
          item.form = "berabere"
          aytım.form = "berabere"
        } else if (me > mex+3) {
          item.puan = item.puan + 3;
          item.galibiyet = item.galibiyet + 1; 
          aytım.maglubiyet = aytım.maglubiyet + 1;
          item.form = "yendi"
          aytım.form = "yenildi"
        } else if (mex+3 > me) {
          aytım.puan = aytım.puan + 3;
          aytım.galibiyet = aytım.galibiyet + 1;
          item.maglubiyet = item.maglubiyet + 1;
          aytım.form = "yendi"
          item.form = "yenildi"
        }
  } else if (aa > 6 && ab > 6) {
    console.log("AYTIMMMM")
    item.mac = item.mac + 1;
        aytım.mac = aytım.mac + 1;
        item.atilangol = item.atilangol + me;
        aytım.atilangol = aytım.atilangol + mex+2;
        item.yenilengol = item.yenilengol + mex+2;
        aytım.yenilengol = aytım.yenilengol + me;
        item.averaj = item.atilangol - item.yenilengol;
        aytım.averaj = aytım.atilangol - aytım.yenilengol;
        item.macgol = me
        aytım.macgol = mex+2
        

        if (me===mex+2) {
          item.puan = item.puan + 1
          aytım.puan = aytım.puan + 1
          item.berabere = item.berabere + 1
          aytım.berabere = aytım.berabere + 1
          item.form = "berabere"
          aytım.form = "berabere"
        } else if (me > mex+2) {
          item.puan = item.puan + 3;
          item.galibiyet = item.galibiyet + 1; 
          aytım.maglubiyet = aytım.maglubiyet + 1;
          item.form = "yendi"
          aytım.form = "yenildi"
        } else if (mex+2 > me) {
          aytım.puan = aytım.puan + 3;
          aytım.galibiyet = aytım.galibiyet + 1;
          item.maglubiyet = item.maglubiyet + 1;
          aytım.form = "yendi"
          item.form = "yenildi"
        }
  } else if (aa > 5 && ab > 5) {
    console.log("AYTIMMMM")
    item.mac = item.mac + 1;
        aytım.mac = aytım.mac + 1;
        item.atilangol = item.atilangol + me;
        aytım.atilangol = aytım.atilangol + mex+1;
        item.yenilengol = item.yenilengol + mex+1;
        aytım.yenilengol = aytım.yenilengol + me;
        item.averaj = item.atilangol - item.yenilengol;
        aytım.averaj = aytım.atilangol - aytım.yenilengol;
        item.macgol = me
        aytım.macgol = mex+1
        

        if (me===mex+1) {
          item.puan = item.puan + 1
          aytım.puan = aytım.puan + 1
          item.berabere = item.berabere + 1
          aytım.berabere = aytım.berabere + 1
          item.form = "berabere"
          aytım.form = "berabere"
        } else if (me > mex+1) {
          item.puan = item.puan + 3;
          item.galibiyet = item.galibiyet + 1; 
          aytım.maglubiyet = aytım.maglubiyet + 1;
          item.form = "yendi"
          aytım.form = "yenildi"
        } else if (mex+1 > me) {
          aytım.puan = aytım.puan + 3;
          aytım.galibiyet = aytım.galibiyet + 1;
          item.maglubiyet = item.maglubiyet + 1;
          aytım.form = "yendi"
          item.form = "yenildi"
        }
  } else {
    item.mac = item.mac + 1;
        aytım.mac = aytım.mac + 1;
        item.atilangol = item.atilangol + me;
        aytım.atilangol = aytım.atilangol + mex;
        item.yenilengol = item.yenilengol + mex;
        aytım.yenilengol = aytım.yenilengol + me;
        item.averaj = item.atilangol - item.yenilengol;
        aytım.averaj = aytım.atilangol - aytım.yenilengol;
        item.macgol = me
        aytım.macgol = mex
        

        if (me===mex) {
          item.puan = item.puan + 1
          aytım.puan = aytım.puan + 1
          item.berabere = item.berabere + 1
          aytım.berabere = aytım.berabere + 1
          item.form = "berabere"
          aytım.form = "berabere"
        } else if (me > mex) {
          item.puan = item.puan + 3;
          item.galibiyet = item.galibiyet + 1; 
          aytım.maglubiyet = aytım.maglubiyet + 1;
          item.form = "yendi"
          aytım.form = "yenildi"
        } else if (mex > me) {
          aytım.puan = aytım.puan + 3;
          aytım.galibiyet = aytım.galibiyet + 1;
          item.maglubiyet = item.maglubiyet + 1;
          aytım.form = "yendi"
          item.form = "yenildi"
    }
  
  } 
}




        
        

  }

  const ligibaslat = () => {
        const int1 = setInterval(() => {
            ligg(int1);
          }, 1500);
          setYeah({});
          return () => clearInterval(int1)
  }

  const ligg = (int1) => {
        

    if (week === 0) {
        fnc(item2, item3)
        fnc(item4, item5)
        fnc(item1, item6)
        fnc(item9, item10)
        fnc(item8, item7)
        setWeek(1);
      } else if (week === 1) {
        fnc(item3, item7)
        fnc(item5, item1)
        fnc(item6, item9)
        fnc(item10, item8)
        fnc(item2, item4)
        setWeek(2);
      }  else if (week === 2) {
        fnc(item4, item3)
        fnc(item7, item10)
        fnc(item8, item6)
        fnc(item9, item5)
        fnc(item1, item2)
        setWeek(3);
      }  else if (week === 3) {
        fnc(item5, item8)
        fnc(item2, item9)
        fnc(item4, item1)
        fnc(item3, item10)
        fnc(item6, item7)
        setWeek(4);
      } else if (week === 4) {
        fnc(item9, item4)
        fnc(item1, item3)
        fnc(item10, item6)
        fnc(item7, item5)
        fnc(item8, item2)
        setWeek(5);
      } else if (week === 5) {
        fnc(item1, item9)
        fnc(item4, item8)
        fnc(item2, item7)
        fnc(item5, item10)
        fnc(item3, item6)
        setWeek(6);
      } else if (week === 6) {
        fnc(item6, item5)
        fnc(item8, item1)
        fnc(item9, item3)
        fnc(item7, item4)
        fnc(item10, item2)
        setWeek(7);
      } else if (week === 7) {
        fnc(item3, item5)
        fnc(item2, item6)
        fnc(item4, item10)
        fnc(item1, item7)
        fnc(item9, item8)
        setWeek(8);
      } else if (week === 8) {
        fnc(item7, item9)
        fnc(item10, item1)
        fnc(item5, item2)
        fnc(item8, item3)
        fnc(item6, item4)
        setWeek(9);
      } else if (week === 9) {
        fnc(item7, item8)
        fnc(item10, item9)
        fnc(item3, item2)
        fnc(item6, item1)
        fnc(item5, item4)
        setWeek(10);
      } else if (week === 10) {
        fnc(item4, item2)
        fnc(item1, item5)
        fnc(item9, item6)
        fnc(item8, item10)
        fnc(item7, item3)
        setWeek(11);
      } else if (week === 11) {
        fnc(item6, item8)
        fnc(item5, item9)
        fnc(item3, item4)
        fnc(item10, item7)
        fnc(item2, item1)
        setWeek(12);
      } else if (week === 12) {
        fnc(item1, item4)
        fnc(item7, item6)
        fnc(item9, item2)
        fnc(item8, item5)
        fnc(item10, item3)
        setWeek(13);
      } else if (week === 13) {
        fnc(item2, item8)
        fnc(item3, item1)
        fnc(item4, item9)
        fnc(item5, item7)
        fnc(item6, item10)
        setWeek(14);
      } else if (week === 14) {
        fnc(item10, item5)
        fnc(item7, item2)
        fnc(item9, item1)
        fnc(item6, item3)
        fnc(item8, item4)
        setWeek(15);
      } else if (week === 15) {
        fnc(item2, item10)
        fnc(item4, item7)
        fnc(item3, item9)
        fnc(item5, item6)
        fnc(item1, item8)
        setWeek(16);
      } else if (week === 16) {
        fnc(item7, item1)
        fnc(item10, item4)
        fnc(item8, item9)
        fnc(item6, item2)
        fnc(item5, item3)
        setWeek(17);
      } else if (week === 17) {
        fnc(item3, item8)
        fnc(item9, item7)
        fnc(item1, item10)
        fnc(item4, item6)
        fnc(item2, item5)
        setWeek(18);
        setTimeout(() => {
         alert((Iddaadata.find( ({siralama}) => siralama === 1)).name + " ŞAMPİYONNNN")
         Iddaadata.find( ({siralama}) => siralama === 1).guc = Iddaadata.find( ({siralama}) => siralama === 1).guc + 0.5
         if (!Iddaadata.find( ({sahiplik}) => sahiplik === 1)) {
           
         } else {

          if (((Iddaadata.find( ({sahiplik}) => sahiplik === 1)).siralama === 1)) {
           dispatch(increment(5000))
           alert("Takımın 1. oldu. Kârın 5000$")
          } else if (((Iddaadata.find( ({sahiplik}) => sahiplik === 1)).siralama === 2)) {
           dispatch(increment(4000))
           alert("Takımın 2. oldu. Kârın 4000$")
          } else if (((Iddaadata.find( ({sahiplik}) => sahiplik === 1)).siralama === 3)) {
           dispatch(increment(3000))
           alert("Takımın 3. oldu. Kârın 3000$")
          } else if (((Iddaadata.find( ({sahiplik}) => sahiplik === 1)).siralama === 4)) {
           dispatch(increment(2000))
           alert("Takımın 4. oldu. Kârın 2000$")
          } else {
            alert("Takımın ilk 4 e bile giremedi")
          } }
         
         
         
         if (!Iddaadata.find( ({tuttugun}) => tuttugun === 1)) {
          alert("Hiçbir takım tutmadın")
         } else {

         if (((Iddaadata.find( ({tuttugun}) => tuttugun === 1)).siralama === 1)) {
          dispatch(increment(2500))
          alert("Tuttuğun takım 1. oldu. Kârın 2500")
         } else if (((Iddaadata.find( ({tuttugun}) => tuttugun === 1)).siralama === 2)) {
          dispatch(increment(2000))
          alert("Tuttuğun takım 2. oldu. Kârın 2000")
         } else if (((Iddaadata.find( ({tuttugun}) => tuttugun === 1)).siralama === 3)) {
          dispatch(increment(1500))
          alert("Tuttuğun takım 3. oldu. Kârın 1500")
         } else if (((Iddaadata.find( ({tuttugun}) => tuttugun === 1)).siralama === 4)) {
          dispatch(increment(1000))
          alert("Tuttuğun takım 4. oldu. Kârın 1000")
         } else {
           alert("Takımın ilk 4'e giremedi")
         } }
         
         let a = Iddaadata.find( ({siralama}) => siralama === 1)
         a.sampiyonluk++
        }, 3000);
      } 
      

      Iddaadata.sort((a, b) => (b.puan > a.puan) ? 1 : -1)

        let aa = {
          ...Iddaadata[0],
          siralama:1,
        }
        let bb = {
          ...Iddaadata[1],
          siralama:2,
        }
        let cc = {
          ...Iddaadata[2],
          siralama:3,
        }
        let dd = {
          ...Iddaadata[3],
          siralama:4,
        }
        let ee = {
          ...Iddaadata[4],
          siralama:5,
        }
        let ff = {
          ...Iddaadata[5],
          siralama:6,
        }
        let gg = {
          ...Iddaadata[6],
          siralama:7,
        }
        let hh = {
          ...Iddaadata[7],
          siralama:8,
        }
        let ii = {
          ...Iddaadata[8],
          siralama:9,
        }
        let jj = {
          ...Iddaadata[9],
          siralama:10,
        }
        
        Iddaadata[0] = aa
        Iddaadata[1] = bb
        Iddaadata[2] = cc
        Iddaadata[3] = dd
        Iddaadata[4] = ee
        Iddaadata[5] = ff
        Iddaadata[6] = gg
        Iddaadata[7] = hh
        Iddaadata[8] = ii
        Iddaadata[9] = jj
        setYeah({});

       setTimeout(() => {
          clearInterval(int1)
      }, 1000); 
  }

  useEffect(() => {
    setYeah({});
  }, [])

    return (
        <div className="All">
        <div className="Baslat">
        <button className="btn btn-primary" onClick={() => ligibaslat()}>Ligi baslat</button>
           Hafta: {week}
          {week===0 || week ===1 || week ===2 || week===3 || week === 4 ? <div className="Fiksturr">Fikstur <br/>
      Hafta 1 <br/>
      {item2.name} - {item3.name} <br/>
      {item4.name} - {item5.name} <br/>
      {item1.name} - {item6.name} <br/>
      {item9.name} - {item10.name} <br/>
      {item8.name} - {item7.name} <br/> 
      Hafta 2 <br/>
      {item3.name} - {item7.name} <br/>
      {item5.name} - {item1.name} <br/>
      {item6.name} - {item9.name} <br/>
      {item10.name} - {item8.name} <br/>
      {item2.name} - {item4.name} <br/>
      Hafta 3 <br/>
      {item4.name} - {item3.name} <br/>
      {item7.name} - {item10.name} <br/>
      {item8.name} - {item6.name} <br/>
      {item9.name} - {item5.name} <br/>
      {item1.name} - {item2.name} <br/> 
      Hafta 4 <br/>
      {item5.name} - {item8.name} <br/>
      {item2.name} - {item9.name} <br/>
      {item4.name} - {item1.name} <br/>
      {item3.name} - {item10.name} <br/>
      {item6.name} - {item7.name} <br/>  
      Hafta 5 <br/>
      {item9.name} - {item4.name} <br/>
      {item1.name} - {item3.name} <br/>
      {item10.name} - {item6.name} <br/>
      {item7.name} - {item5.name} <br/>
      {item8.name} - {item2.name} <br/> 
      </div>: ""}
      {week===5 || week ===6 || week ===7 || week===8  ? <div className="Fiksturr">Fikstur <br/>
      Hafta 6 <br/>
      {item1.name} - {item9.name} <br/>
      {item4.name} - {item8.name} <br/>
      {item2.name} - {item7.name} <br/>
      {item5.name} - {item10.name} <br/>
      {item3.name} - {item6.name} <br/>
      Hafta 7 <br/>
      {item6.name} - {item5.name} <br/>
      {item8.name} - {item1.name} <br/>
      {item9.name} - {item3.name} <br/>
      {item7.name} - {item4.name} <br/>
      {item10.name} - {item2.name} <br/> 
      Hafta 8 <br/>
      {item3.name} - {item5.name} <br/>
      {item2.name} - {item6.name} <br/>
      {item4.name} - {item10.name} <br/>
      {item1.name} - {item7.name} <br/>
      {item9.name} - {item8.name} <br/>
      Hafta 9 <br/>
      {item7.name} - {item9.name} <br/>
      {item10.name} - {item1.name} <br/>
      {item5.name} - {item2.name} <br/>
      {item8.name} - {item3.name} <br/>
      {item6.name} - {item4.name} <br/>   
      ***ARA SEZONA GİRİŞ***
      </div>: ""}
      {week===9 || week ===10 || week ===11 || week===12 || week === 13 ? <div className="Fiksturr">Fikstur <br/>
      Hafta 10 <br/>
      {item7.name} - {item8.name} <br/>
      {item10.name} - {item9.name} <br/>
      {item3.name} - {item2.name} <br/>
      {item6.name} - {item1.name} <br/>
      {item5.name} - {item4.name} <br/>
      Hafta 11 <br/>
      {item4.name} - {item2.name} <br/>
      {item1.name} - {item5.name} <br/>
      {item9.name} - {item6.name} <br/>
      {item8.name} - {item10.name} <br/>
      {item7.name} - {item3.name} <br/> 
      Hafta 12 <br/>
      {item6.name} - {item8.name} <br/>
      {item5.name} - {item9.name} <br/>
      {item3.name} - {item4.name} <br/>
      {item10.name} - {item7.name} <br/>
      {item2.name} - {item1.name} <br/> 
      Hafta 13 <br/>
      {item1.name} - {item4.name} <br/>
      {item7.name} - {item6.name} <br/>
      {item9.name} - {item2.name} <br/>
      {item8.name} - {item5.name} <br/>
      {item10.name} - {item3.name} <br/>  
      Hafta 14 <br/>
      {item2.name} - {item8.name} <br/>
      {item3.name} - {item1.name} <br/>
      {item4.name} - {item9.name} <br/>
      {item5.name} - {item7.name} <br/>
      {item6.name} - {item10.name} <br/>  
      </div>: ""}
      {week===14 || week ===15 || week ===16 || week===17 ? <div className="Fiksturr">Fikstur <br/>
      Hafta 15 <br/>
      {item10.name} - {item5.name} <br/>
      {item7.name} - {item2.name} <br/>
      {item9.name} - {item1.name} <br/>
      {item6.name} - {item3.name} <br/>
      {item8.name} - {item4.name} <br/> 
      Hafta 16 <br/>
      {item2.name} - {item10.name} <br/>
      {item4.name} - {item7.name} <br/>
      {item3.name} - {item9.name} <br/>
      {item5.name} - {item6.name} <br/>
      {item1.name} - {item8.name} <br/> 
      Hafta 17 <br/>
      {item7.name} - {item1.name} <br/>
      {item10.name} - {item4.name} <br/>
      {item8.name} - {item9.name} <br/>
      {item6.name} - {item2.name} <br/>
      {item5.name} - {item3.name} <br/> 
      Hafta 18 <br/>
      {item3.name} - {item8.name} <br/>
      {item9.name} - {item7.name} <br/>
      {item1.name} - {item10.name} <br/>
      {item4.name} - {item6.name} <br/>
      {item2.name} - {item5.name} <br/> 
      </div>: ""}
        </div>
          
           <div className="ligTablo">
            <table className="table">
            <thead>
        <tr style={{display:"flex"}}>
          <th scope="col" style={{width:"50px",maxWidth:"50px",minWidth:"50px"}}>P</th>
          <th scope="col" style={{width:"140px",maxWidth:"140px",minWidth:"140px"}}>Takım</th>
          <th scope="col" style={{width:"50px"}}>M</th>
          <th scope="col" style={{width:"50px"}}>G</th>
          <th scope="col" style={{width:"50px"}}>B</th>
          <th scope="col" style={{width:"50px"}}>M</th>
          <th scope="col" style={{width:"50px"}}>A</th>
          <th scope="col" style={{width:"50px"}}>Y</th>
          <th scope="col" style={{width:"50px"}}>A+</th>
          <th scope="col" style={{width:"50px"}}>P</th>
          <th scope="col" style={{width:"100px"}}>Form</th>
          <th scope="col" style={{width:"50px"}}>Ş</th>
          <th scope="col" style={{width:"150px"}}>İşlem</th>
        </tr>
            </thead>
            
      <tbody>
        <tr>
        {Iddaadata.map((val,key) => {
               return (
            <div className="Takimlar" key={val.id}>
          <th scope="row" style={{width:"50px",maxWidth:"50px",minWidth:"50px"}}>{val.siralama}</th>
          <td style={{width:"140px",maxWidth:"140px",minWidth:"140px"}}>{val.name}</td>
          <td style={{width:"50px",maxWidth:"50px",minWidth:"50px"}}>{val.mac}</td>
          <td style={{width:"50px",maxWidth:"50px",minWidth:"50px"}}>{val.galibiyet}</td>
          <td style={{width:"50px",maxWidth:"50px",minWidth:"50px"}}>{val.berabere}</td>
          <td style={{width:"50px",maxWidth:"50px",minWidth:"50px",}}>{val.maglubiyet}</td>
          <td style={{width:"50px",maxWidth:"50px",minWidth:"50px"}}>{val.atilangol}</td>
          <td style={{width:"50px",maxWidth:"50px",minWidth:"50px"}}>{val.yenilengol}</td>
          <td style={{width:"50px",maxWidth:"50px",minWidth:"50px"}}>{val.averaj}</td>
          <td style={{width:"50px",maxWidth:"50px",minWidth:"50px"}}>{val.puan}</td>
          <td style={{width:"100px",maxWidth:"100px",minWidth:"100px"}}>{val.form}</td>
          <td style={{width:"50px",maxWidth:"50px",minWidth:"50px"}}>{val.sampiyonluk}</td>
          <td style={{width:"75px",maxWidth:"75px",minWidth:"75px"}}>{week===0 || week===1 || week===2 ? <div><button className="btn btn-info" style={{height:"35px",width:"70px"}} onClick={() => Tut(val)}>Destek </button></div>: <button className="btn btn-info" style={{height:"35px",width:"70px"}}onClick={() => bagis(val)}>Bağış</button>}{val.sahiplik2===1 ? <div><input onChange={(e) => setTakımismi(e.target.value)}></input><button className="btn btn-info" style={{height:"35px",width:"100px"}}onClick={() => isimguncelle(val)}>Güncelle</button></div> : ""}</td>
          <td style={{width:"75px",maxWidth:"75px",minWidth:"75px"}}>{val.sahiplik===1 ? <button className="btn btn-info" style={{height:"35px",width:"60px"}}onClick={() => addegis(val)}>Ad dğş</button> : <button className="btn btn-success" style={{height:"35px",width:"60px"}}onClick={() => Satinal(val)}>S. Al</button>}</td>
          </div>
          ) 
            })}
        </tr>
      </tbody>
    </table>
    </div>
    <div className="Fikstur">
      MAÇ SONUÇLARI
    {week===1 ? <div style={{fontSize:"30px"}}> Fikstur Hafta 1 <br/>
      
      {item2.name} {item2.macgol} - {item3.macgol} {item3.name} <br/>
      {item4.name} {item4.macgol} - {item5.macgol} {item5.name} <br/>
      {item1.name} {item1.macgol} - {item6.macgol} {item6.name} <br/>
      {item9.name} {item9.macgol} - {item10.macgol} {item10.name} <br/>
      {item8.name} {item8.macgol} - {item7.macgol} {item7.name} <br/> 
      
      </div> : ""}

      {week===2 ? <div style={{fontSize:"30px"}}> Fikstur Hafta 2 <br/>
      
      {item3.name} {item3.macgol} - {item7.macgol} {item7.name} <br/>
      {item5.name} {item5.macgol} - {item1.macgol} {item1.name} <br/>
      {item6.name} {item6.macgol} - {item9.macgol} {item9.name} <br/>
      {item10.name} {item10.macgol} - {item8.macgol} {item8.name} <br/>
      {item2.name} {item2.macgol} - {item4.macgol} {item4.name} <br/>
      
      </div> : ""}
      {week===3 ? <div style={{fontSize:"30px"}}> Fikstur Hafta 3 <br/>
      
      {item4.name} {item4.macgol} - {item3.macgol} {item3.name} <br/>
      {item7.name} {item7.macgol} - {item10.macgol} {item10.name} <br/>
      {item8.name} {item8.macgol} - {item6.macgol} {item6.name} <br/>
      {item9.name} {item9.macgol} - {item5.macgol} {item5.name} <br/>
      {item1.name} {item1.macgol} - {item2.macgol} {item2.name} <br/>  
      
      </div> : ""}
      {week===4 ? <div style={{fontSize:"30px"}}> Fikstur Hafta 4 <br/>
      
      {item5.name} {item5.macgol} - {item8.macgol} {item8.name} <br/>
      {item2.name} {item2.macgol} - {item9.macgol} {item9.name} <br/>
      {item4.name} {item4.macgol} - {item1.macgol} {item1.name} <br/>
      {item3.name} {item3.macgol} - {item10.macgol} {item10.name} <br/>
      {item6.name} {item6.macgol} - {item7.macgol} {item7.name} <br/> 
      
      </div> : ""}
      {week===5 ? <div style={{fontSize:"30px"}}> Fikstur Hafta 5 <br/>
      
      {item9.name} {item9.macgol} - {item4.macgol} {item4.name} <br/>
      {item1.name} {item1.macgol} - {item3.macgol} {item3.name} <br/>
      {item10.name} {item10.macgol} - {item6.macgol} {item6.name} <br/>
      {item7.name} {item7.macgol} - {item5.macgol} {item5.name} <br/>
      {item8.name} {item8.macgol} - {item2.macgol} {item2.name} <br/> 
      
      </div> : ""}
      {week===6 ? <div style={{fontSize:"30px"}}> Fikstur Hafta 6 <br/>
      
      {item1.name} {item1.macgol} - {item9.macgol} {item9.name} <br/>
      {item4.name} {item4.macgol} - {item8.macgol} {item8.name} <br/>
      {item2.name} {item2.macgol} - {item7.macgol} {item7.name} <br/>
      {item5.name} {item5.macgol} - {item10.macgol} {item10.name} <br/>
      {item3.name} {item3.macgol} - {item6.macgol} {item6.name} <br/> 
      
      </div> : ""}
      {week===7 ? <div style={{fontSize:"30px"}}> Fikstur Hafta 7 <br/>
      
      {item6.name} {item6.macgol} - {item5.macgol} {item5.name} <br/>
      {item8.name} {item8.macgol} - {item1.macgol} {item1.name} <br/>
      {item9.name} {item9.macgol} - {item3.macgol} {item3.name} <br/>
      {item7.name} {item7.macgol} - {item4.macgol} {item4.name} <br/>
      {item10.name} {item10.macgol} - {item2.macgol} {item2.name} <br/> 
      
      </div> : ""}
      {week===8 ? <div style={{fontSize:"30px"}}> Fikstur Hafta 8 <br/>
      
      {item3.name} {item3.macgol} - {item5.macgol} {item5.name} <br/>
      {item2.name} {item2.macgol} - {item6.macgol} {item6.name} <br/>
      {item4.name} {item4.macgol} - {item10.macgol} {item10.name} <br/>
      {item1.name} {item1.macgol} - {item7.macgol} {item7.name} <br/>
      {item9.name} {item9.macgol} - {item8.macgol} {item8.name} <br/> 
      
      </div> : ""}
      {week===9 ? <div style={{fontSize:"30px"}}> Fikstur Hafta 9 <br/>
      
      {item7.name} {item7.macgol} - {item9.macgol} {item9.name} <br/>
      {item10.name} {item10.macgol} - {item1.macgol} {item1.name} <br/>
      {item5.name} {item5.macgol} - {item2.macgol} {item2.name} <br/>
      {item8.name} {item8.macgol} - {item3.macgol} {item3.name} <br/>
      {item6.name} {item6.macgol} - {item4.macgol} {item4.name} <br/> 
      
      </div> : ""}
      {week===10 ? <div style={{fontSize:"30px"}}> Fikstur Hafta 10 <br/>
      
      {item7.name} {item7.macgol} - {item8.macgol} {item8.name} <br/>
      {item10.name} {item10.macgol} - {item9.macgol} {item9.name} <br/>
      {item3.name} {item3.macgol} - {item2.macgol} {item2.name} <br/>
      {item6.name} {item6.macgol} - {item1.macgol} {item1.name} <br/>
      {item5.name} {item5.macgol} - {item4.macgol} {item4.name} <br/> 
      
      </div> : ""}
      {week===11 ? <div style={{fontSize:"30px"}}> Fikstur Hafta 11 <br/>
      
      {item4.name} {item4.macgol} - {item2.macgol} {item2.name} <br/>
      {item1.name} {item1.macgol} - {item5.macgol} {item5.name} <br/>
      {item9.name} {item9.macgol} - {item6.macgol} {item6.name} <br/>
      {item8.name} {item8.macgol} - {item10.macgol} {item10.name} <br/>
      {item7.name} {item7.macgol} - {item3.macgol} {item3.name} <br/> 
      
      </div> : ""}
      {week===12 ? <div style={{fontSize:"30px"}}> Fikstur Hafta 12 <br/>
      
      {item6.name} {item6.macgol} - {item8.macgol} {item8.name} <br/>
      {item5.name} {item5.macgol} - {item9.macgol} {item9.name} <br/>
      {item3.name} {item3.macgol} - {item4.macgol} {item4.name} <br/>
      {item10.name} {item10.macgol} - {item7.macgol} {item7.name} <br/>
      {item2.name} {item2.macgol} - {item1.macgol} {item1.name} <br/> 
      
      </div> : ""}
      {week===13 ? <div style={{fontSize:"30px"}}> Fikstur Hafta 13 <br/>
      
      {item1.name} {item1.macgol} - {item4.macgol} {item4.name} <br/>
      {item7.name} {item7.macgol} - {item6.macgol} {item6.name} <br/>
      {item9.name} {item9.macgol} - {item2.macgol} {item2.name} <br/>
      {item8.name} {item8.macgol} - {item5.macgol} {item5.name} <br/>
      {item10.name} {item10.macgol} - {item3.macgol} {item3.name} <br/> 
      
      </div> : ""}
      {week===14 ? <div style={{fontSize:"30px"}}> Fikstur Hafta 14 <br/>
      
      {item2.name} {item2.macgol} - {item8.macgol} {item8.name} <br/>
      {item3.name} {item3.macgol} - {item1.macgol} {item1.name} <br/>
      {item4.name} {item4.macgol} - {item9.macgol} {item9.name} <br/>
      {item5.name} {item5.macgol} - {item7.macgol} {item7.name} <br/>
      {item6.name} {item6.macgol} - {item10.macgol} {item10.name} <br/> 
      
      </div> : ""}
      {week===15 ? <div style={{fontSize:"30px"}}> Fikstur Hafta 15 <br/>
      
      {item10.name} {item10.macgol} - {item5.macgol} {item5.name} <br/>
      {item7.name} {item7.macgol} - {item2.macgol} {item2.name} <br/>
      {item9.name} {item9.macgol} - {item1.macgol} {item1.name} <br/>
      {item6.name} {item6.macgol} - {item3.macgol} {item3.name} <br/>
      {item8.name} {item8.macgol} - {item4.macgol} {item4.name} <br/> 
      
      </div> : ""}
      {week===16 ? <div style={{fontSize:"30px"}}> Fikstur Hafta 16 <br/>
      
      {item2.name} {item2.macgol} - {item10.macgol} {item10.name} <br/>
      {item4.name} {item4.macgol} - {item7.macgol} {item7.name} <br/>
      {item3.name} {item3.macgol} - {item9.macgol} {item9.name} <br/>
      {item5.name} {item5.macgol} - {item6.macgol} {item6.name} <br/>
      {item1.name} {item1.macgol} - {item8.macgol} {item8.name} <br/> 
      
      </div> : ""}
      {week===17 ? <div style={{fontSize:"30px"}}> Fikstur Hafta 17 <br/>
      
      {item7.name} {item7.macgol} - {item1.macgol} {item1.name} <br/>
      {item10.name} {item10.macgol} - {item4.macgol} {item4.name} <br/>
      {item8.name} {item8.macgol} - {item9.macgol} {item9.name} <br/>
      {item6.name} {item6.macgol} - {item2.macgol} {item2.name} <br/>
      {item5.name} {item5.macgol} - {item3.macgol} {item3.name} <br/> 
      
      </div> : ""}
      {week===18 ? <div style={{fontSize:"30px"}}> Fikstur Hafta 18 <br/>
      
      {item3.name} {item3.macgol} - {item8.macgol} {item8.name} <br/>
      {item9.name} {item9.macgol} - {item7.macgol} {item7.name} <br/>
      {item1.name} {item1.macgol} - {item10.macgol} {item10.name} <br/>
      {item4.name} {item4.macgol} - {item6.macgol} {item6.name} <br/>
      {item2.name} {item2.macgol} - {item5.macgol} {item5.name} <br/> 
      
      </div> : ""}
      
      <button className="btn btn-info" onClick={() => sifirla()}>Sezonu sıfırla.</button>
    </div>
        </div>
    )
}

export default Iddaa;
