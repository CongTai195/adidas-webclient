import React, { Component } from 'react'

export const DataAddress = React.createContext();

export class DataProvider extends Component {
    state = {
        address: [
            {
                "Province_Code": "01",
                "Province_name": "Thành phố Hà Nội",
                "District": [
                    {
                        "District_Code": "001",
                        "District_name": "Quận Ba Đình",
                        "Commune": [
                            {
                                "Commune_Code": "00001",
                                "Commune_Name": "Phường Phúc Xá"
                            },
                            {
                                "Commune_Code": "00004",
                                "Commune_Name": "Phường Trúc Bạch"
                            },
                            {
                                "Commune_Code": "00006",
                                "Commune_Name": "Phường Vĩnh Phúc"
                            },
                            {
                                "Commune_Code": "00007",
                                "Commune_Name": "Phường Cống Vị"
                            },
                            {
                                "Commune_Code": "00008",
                                "Commune_Name": "Phường Liễu Giai"
                            },
                            {
                                "Commune_Code": "00010",
                                "Commune_Name": "Phường Nguyễn Trung Trực"
                            }
                        ]
                    },
                    {
                        "District_Code": "002",
                        "District_name": "Quận Hoàn Kiếm",
                        "Commune": [
                            {
                                "Commune_Code": "00037",
                                "Commune_Name": "Phường Phúc Tân"
                            },
                            {
                                "Commune_Code": "00040",
                                "Commune_Name": "Phường Đồng Xuân"
                            },
                            {
                                "Commune_Code": "00043",
                                "Commune_Name": "Phường Hàng Mã"
                            }
                        ]
                    }
                ]
            },
            {
                "Province_Code": "17",
                "Province_name": "Tỉnh Hoà Bình",
                "District": [
                    {
                        "District_Code": "148",
                        "District_name": "Thành phố Hòa Bình",
                        "Commune": [
                            {
                                "Commune_Code": "04789",
                                "Commune_Name": "Phường Thái Bình"
                            },
                            {
                                "Commune_Code": "04792",
                                "Commune_Name": "Phường Tân Hòa"
                            },
                            {
                                "Commune_Code": "04795",
                                "Commune_Name": "Phường Thịnh Lang"
                            },
                            {
                                "Commune_Code": "04798",
                                "Commune_Name": "Phường Hữu Nghị"
                            },
                            {
                                "Commune_Code": "04801",
                                "Commune_Name": "Phường Tân Thịnh"
                            },
                            {
                                "Commune_Code": "04804",
                                "Commune_Name": "Phường Đồng Tiến"
                            }
                        ]
                    },
                    {
                        "District_Code": "150",
                        "District_name": "Huyện Đà Bắc",
                        "Commune": [
                            {
                                "Commune_Code": "04831",
                                "Commune_Name": "Thị trấn Đà Bắc"
                            },
                            {
                                "Commune_Code": "04834",
                                "Commune_Name": "Xã Đồng Nghê"
                            },
                            {
                                "Commune_Code": "04837",
                                "Commune_Name": "Xã Suối Nánh"
                            }
                        ]
                    }
                ]
            }
        ]
    }

    render() {


        return (
            <DataAddress.Provider value={{}}>
                {this.props.children}
            </DataAddress.Provider>
        )
    }
}

