import React, { useState, useEffect } from 'react'
import {SirketData} from "./SirketData";
import { useSelector , useDispatch} from "react-redux";
import { increment, decrement, lotaliss, lotsatiss } from "../action/index"
import './Sirket.css';
import { BsFillCaretUpFill } from "react-icons/bs";
import { BsFillCaretDownFill } from "react-icons/bs";
import int from "../Logo/int.jpg"
import villa from "../Logo/villa.jpg"

function Sirket() {


    const [value, setValue] = useState("");
    const [vis, setVis] = useState(false);
    const [mevy, setMevy] = useState(false);
    const [kira1, setKira1] = useState(false);
    const [emre, setEmre]  = useState(false)



    const counter = useSelector(state => state.Money);

    const dispatch = useDispatch();



        const villaKirala = () => {
            if (counter) {
                alert("AGA ZENGİN OLDUN AGA")
                const int4 = setInterval(() => {
                    belespara2();
                  }, 1000);
                  return () => clearInterval(int4)}
        }

        const belespara2 = () => {
            dispatch(increment(20))
        }

        const villaSatinal = () => {
            setValue({}); 
            if ( counter >= 50000 ) {
                dispatch(decrement( 50000))
                setEmre(true)
                alert("çabuk kiraya ver afferin")
            } else {
                alert("villa senin neyine amk fakiri")
            }
        }

        const Cafeal = () => {
            setValue({}); 
            if ( counter >= 15000 ) {
                dispatch(decrement(15000))
                setMevy(true) 
                setKira1(true)
                alert("tebrikler gerçek bir hayatsızsın")
            } else {
                alert("yeteri kadar paran yok")
            }
        }

        const CafeKirala = () => {    
            if (counter) {
            alert("tebrikler amk kira alıyosun")
            const int3 = setInterval(() => {
                belespara();
              }, 1000);
              return () => clearInterval(int3)}
        }

        const belespara = () => {
            dispatch(increment(5))
               
        }


        const refresh = () => {
            setValue({});  
                if ( counter >= 2000) {
                    dispatch(decrement(2000))
                    setVis(true)
                    alert("artık şirket durumlarını görebileceksin")
                } else {
                    setVis(false)
                    alert("yeteri kadar paran yok")
                }

        }

        const gunubaslat = () => {
            setValue({});
            const int2 = setInterval(() => {
                sirketdurum();
              }, 10000);
              return () => clearInterval(int2)
        
        }



        const gun = () => {
            
            SirketData.map((val) => {
                let a = +((val.pay + ((Math.random() * 11)/25))).toFixed(2);
                let b = +((val.pay + ((Math.random() * 11)/20))).toFixed(2);
                let c = +((val.pay + ((Math.random() * 11)/15))).toFixed(2);
                let d = +((val.pay - ((Math.random() * 11)/25))).toFixed(2);
                let e = +((val.pay - ((Math.random() * 11)/20))).toFixed(2);
                let f = +((val.pay - ((Math.random() * 11)/15))).toFixed(2);  
                let aa = +(((val.pay - val.startingPay)/val.startingPay)*100).toFixed(2);
                let ff = +(((val.lot-val.startingLot)/val.startingLot)*100).toFixed(4)
            if ( val.lot > 0 && val.pay > 0) {
                if (  val.sirketDurumu === "Mukemmel" ) {
                    val.pay = c
                    val.alis = val.pay - 1
                    val.lot--
                    val.artis = aa
                    val.lut = ff
                }
                if (  val.sirketDurumu === "Çok iyi" ) {
                    val.pay = b
                    val.alis = val.pay - 1
                    val.lot--
                    val.artis = aa
                    val.lut = ff
                }
                if (  val.sirketDurumu === "İyi" ) {
                    val.pay = a
                    val.alis = val.pay - 1
                    val.lot--
                    val.artis = aa
                    val.lut = ff
                }
                if (  val.sirketDurumu === "Kotu" ) {
                    val.pay = d
                    val.alis = val.pay - 1
                    val.lot++
                    val.artis = aa
                    val.lut = ff
                }
                if (  val.sirketDurumu === "Cok kotu" ) {
                    val.pay = e
                    val.alis = val.pay - 1
                    val.lot++
                    val.artis = aa
                    val.lut = ff
                }
                if (  val.sirketDurumu === "Berbat" ) {
                    val.pay = f
                    val.alis = val.pay - 1
                    val.lot++
                    val.artis = aa
                    val.lut = ff
                }
            } else {
                val.lot++
                val.alis = val.pay - 1.5
                val.pay++
                val.artis = aa
                val.lut = ff
            }
            setValue({});
            })
        }

        const sirketdurum = () => {
            
            SirketData.map((val) => {
                let me = Math.floor(Math.random() * 11);
                    if (me > 9) {
                        val.sirketDurumu = "Mukemmel"
                        val.upordown = <BsFillCaretUpFill color="green"/>
                    }
                    if (me < 9) {
                        val.sirketDurumu = "Çok iyi"
                        val.upordown = <BsFillCaretUpFill color="green"/>
                    }
                    if (me < 7) {
                        val.sirketDurumu = "İyi"
                        val.upordown = <BsFillCaretUpFill color="green"/>
                    }
                    if (me < 5) {
                        val.sirketDurumu = "Kotu"
                        val.upordown = <BsFillCaretDownFill color="red"/>
                    }
                    if (me < 3) {
                        val.sirketDurumu = "Cok kotu"
                        val.upordown = <BsFillCaretDownFill color="red"/>
                    }
                    if (me === 0) {
                        val.sirketDurumu = "Berbat"
                        val.upordown = <BsFillCaretDownFill color="red"/>
                    }
                
        
            })
            setValue({});
        }
        

        useEffect(() => {
            const interval = setInterval(() => {
              gun();
            }, 1000);
            return () => clearInterval(interval)
            
            }, [value]);


            const alis = (val) => {
                var rand = val.pay + Math.floor((Math.random() * 11)/7)
            if (val.lot > 0 & counter > 0) {   
                dispatch(decrement(val.pay))
                val.SeninLotun++
                val.lot--
                val.pay = rand
                dispatch(lotaliss(val.pay))
                if (val.id === 1) {
                    
                }
                
                
            } else {
                alert("YAVAŞ LA KAÇ TANE ALIYON")
            }
    
        }

    const satis = (val) => {
        if (val.SeninLotun > 0) {
            var rand = val.pay - Math.floor((Math.random() * 11)/7)
            dispatch(increment(val.alis))
            val.SeninLotun--
            val.lot++
            val.pay = rand
            dispatch(lotsatiss(val.pay))
        } else {
            alert("satılacak hissen kalmadi")
        }
}
    return (
        <div className="Sirketler">        
        <button class="btn btn-dark" style={{}} onClick={gunubaslat}>Gunu Baslat</button>
        <button class="btn btn-warning" style={{}} onClick={refresh}>Şirket durumlarını öğren 2000tl</button>

        <div className="Sirketa">
            <table className="table">
            <thead>
        <tr style={{display:"flex"}}>
          <th scope="col" style={{width:"100px"}}>Sembol</th>
          <th scope="col" style={{width:"70px"}}>Alış</th>
          <th scope="col" style={{width:"70px"}}>Satış</th>
          <th scope="col" style={{width:"150px"}}>Sirket Durumu</th>
          <th scope="col" style={{width:"75px",maxWidth:"75px"}}>%Fark</th>
          <th scope="col" style={{width:"150px",maxWidth:"150px",textAlign:"center"}}>İşlem</th>
        </tr>
            </thead>
            
      <tbody>
        <tr>
        {SirketData.map((val,key) => {
               return (
            <div className="Sirket" key={val.id}>
          <th scope="row" style={{width:"100px",maxWidth:"100"}}>{val.upordown}{val.name}</th>
          <td style={{width:"70px",maxWidth:"70px"}}>{val.pay}</td>
          <td style={{width:"70px",maxWidth:"70px"}}>{val.alis}</td>
          <td style={{width:"150px",maxWidth:"150px"}}>{vis ? val.sirketDurumu : "-"}</td>
          <td style={{width:"75px",maxWidth:"75px"}}>{vis ? "%"+(val.artis) : "-"}</td>
          <td><button style={{width:"75px",maxWidth:"75px"}}class="btn btn-success" onClick={() => alis(val)}>Al</button></td>
          <td><button style={{width:"75px",maxWidth:"75px"}}class="btn btn-danger" onClick={() => satis(val)}>Sat</button></td> 
          </div>
          ) 
            })}
        </tr>
      </tbody>
    </table>
    </div>
<div className="Sirketb">
    <table className="table">
            <thead>
        <tr style={{display:"flex",lineHeight:"15px"}}>
          <th scope="col" style={{width:"100px"}}>Sembol</th>
          <th scope="col" style={{width:"130px"}}>Başlangıç Lot</th>
          <th scope="col" style={{width:"100px"}}>Kalan Lot</th>
          <th scope="col" style={{width:"120px"}}>Aldığın Lot</th>
          <th scope="col" style={{width:"83px"}}>Fark</th>
        </tr>
            </thead>
            
      <tbody>
        <tr >
        {SirketData.map((val,key) => {
               return (
            <div className="Sirketbb" key={val.id}>
          <th scope="row" style={{width:"100px",maxWidth:"100px"}}>{val.name}</th>
          <td style={{width:"130px",textAlign:"center",maxWidth:"130px"}}>{val.startingLot}</td>
          <td style={{width:"100px",textAlign:"center",maxWidth:"100px"}}>{val.lot}</td>
          <td style={{width:"120px",textAlign:"center",maxWidth:"120px"}}>{val.SeninLotun > 0 ? val.SeninLotun : "-"}</td>
          <td style={{width:"75px",textAlign:"center",maxWidth:"75px"}}>{val.lut}</td>
          </div>
          ) 
            })}
        </tr>
      </tbody>
    </table>

    
    </div>

    <div className="Satinal">
        <div className="Satinall">
            <div className="SatinFoto">
                <img alt="" style={{height:"200px",width:"378px"}}src={int}></img>
                <div className="Satinbut">
                    <h5 style={{position:"absolute",bottom:"5px",left:"115px"}}>İnternet Kafe 15.000 tl<br/></h5>
                  {mevy ? <button className="btn btn-warning" style={{position:"absolute",right:"0px",height:"48px"}}onClick={() => CafeKirala()}>Kirala</button>
                    : <button className="btn btn-success" style={{position:"absolute",right:"0px",height:"48px"}} onClick={() => Cafeal()}>Satın al</button> }
                
                </div>
            </div>
        </div>
    </div>
        <div className="Satinall2">
            <div className="SatinFoto2">
                <img alt="" style={{position:"absolute",height:"200px",width:"378px",top:"-136px"}} src={villa}></img>
                <div className="Satinbut22">
                    <h5 style={{position:"absolute",bottom:"-50px",right:"85px"}}>Bahçeli villa 50.000 tl</h5>
                    {emre ? <button className="btn btn-warning" style={{position:"absolute",bottom:"-63px",right:"0px",height:"55px"}} onClick={() => villaKirala()}>Kirala</button> 
                    :   <button className="btn btn-success" style={{position:"absolute",bottom:"-63px",right:"0px",height:"55px"}} onClick={() => villaSatinal()}>Satın al</button>}
                    
                </div>
            </div>
        </div>
        </div>
    )
}

export default Sirket;
