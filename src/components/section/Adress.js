import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../Context'
import Data from '../data/data_address.json'

function Adress(props) {
    const context = useContext(DataContext)
    const address = Data
    const fills_address = props.address
    const [chooseDistricts, setDistrictsy] = useState(0);
    const [getstatusDistricts, setstatusDistrictsy] = useState(false);
    const [chooseWards, setWards] = useState(0);
    const [getstatusWards, setstatusWards] = useState(false);

    const [getProvince, setvalProvince] = useState("");
    const [getDistricts, setvalDistricts] = useState("");
    const [getWards, setvalWards] = useState("");
    
    
    function check_status() {
        //if (getstatusDistricts && getstatusWards) {
            props.addressCallBack(fills_address+", "+getProvince+", "+getDistricts+", "+getWards+".")
        //}
    }



    return (
        <div className="address-container">
            <select className="form-control" onChange={(e) => {
                setDistrictsy(e.target.options[e.target.options.selectedIndex].getAttribute('data-key')),
                setvalProvince(e.target.value), setstatusDistrictsy(true)
            }}>
                <option key="0" >Tỉnh/ Thành phố</option>
                {
                    address.map((item, index) => (
                        <option key={index} data-key={index} value={item.Name}>{item.Name}</option>
                    ))
                }
            </select>

            <div className="address-container-chil">
                <select className="form-control-chil-1" onChange={(e) => {
                    setWards(e.target.options[e.target.options.selectedIndex].getAttribute('data-key')),
                    setvalDistricts(e.target.value), setstatusWards(true)
                }}>
                    <option key="0" >Quận/ Huyện</option>
                    {
                        (address[chooseDistricts].Districts).map((item, index) => (
                            <option key={item.Id} data-key={index} value={item.Name}>{item.Name}</option>
                        ))
                    }
                </select>
                <select className="form-control-chil-2" onChange={(e) => {
                    
                    setvalWards(e.target.value),check_status()
                }}>
                    <option key="0" >Phường/ Xã</option>
                    {
                        ((address[chooseDistricts].Districts)[chooseWards].Wards).map((item, index) => (
                            <option key={item.Id} data-key={index} value={item.Name}>{item.Name}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )

}

export default Adress
