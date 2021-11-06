import React, { Component } from 'react';

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                // E:/4 (Ky 1 Nam 4)/PBL6/web_client/src/components
                "_id": "1",
                "title": "Shoes 01",
                "category": 1,
                "src": "/giay_nam_01.png",
                "Description": "Giay bao dep sai 1 ngay hung lien nen dung mua",
                "Content": "Khong biet ghi gi trong nay het a",
                "price": 5000,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 10,
                "size": [1, 2, 3, 4, 21, 22, 23, 24, 25]

            },
            {
                "_id": "2",
                "title": "Shoes 02",
                "category": 1,
                "src": "/giay_nam_02.png",
                "Description": "Giay bao dep sai 1 ngay hung lien nen dung mua",
                "Content": "Khong biet ghi gi trong nay het a",
                "price": 2700,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 5,
                "size": [21, 22, 23, 24, 25]

            },
            {
                "_id": "3",
                "title": "Shoes 03",
                "category": 1,
                "src": "/giay_nam_03.png",
                "Description": "Giay bao dep sai 1 ngay hung lien nen dung mua",
                "Content": "Khong biet ghi gi trong nay het a",
                "price": 5000,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 9,
                "size": [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

            },
            {
                "_id": "4",
                "title": "Shoes 04",
                "category": 1,
                "src": "/giay_nam_04.png",
                "Description": "Giay bao dep sai 1 ngay hung lien nen dung mua",
                "Content": "Khong biet ghi gi trong nay het a",
                "price": 4000,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 8,
                "size": [21, 22, 23, 24, 25]

            },
            {
                "_id": "5",
                "title": "Shoes 05",
                "category": 1,
                "src": "/giay_nam_05.png",
                "Description": "Giay bao dep sai 1 ngay hung lien nen dung mua",
                "Content": "Khong biet ghi gi trong nay het a",
                "price": 3600,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 6,
                "size": [21, 22, 23, 24, 25]

            },
            {
                "_id": "6",
                "title": "Shoes 06",
                "category": 1,
                "src": "/giay_nam_06.png",
                "Description": "Giay bao dep sai 1 ngay hung lien nen dung mua",
                "Content": "Khong biet ghi gi trong nay het a",
                "price": 6000,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 7,
                "size": [21, 22, 23, 24, 25]

            },
            {
                "_id": "7",
                "title": "Shoes 07",
                "category": 1,
                "src": "/giay_nam_07.png",
                "Description": "Giay bao dep sai 1 ngay hung lien nen dung mua",
                "Content": "Khong biet ghi gi trong nay het a",
                "price": 2300,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 4,
                "size": [21, 22, 23, 24, 25]

            },
            {
                "_id": "8",
                "title": "Shoes 08",
                "category": 1,
                "src": "/giay_nam_08.png",
                "Description": "Giay bao dep sai 1 ngay hung lien nen dung mua",
                "Content": "Khong biet ghi gi trong nay het a",
                "price": 1000,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 5,
                "size": [21, 22, 23, 24, 25]

            },
            {
                "_id": "9",
                "title": "Shoes 09",
                "category": 1,
                "src": "/giay_nam_09.png",
                "Description": "Giay bao dep sai 1 ngay hung lien nen dung mua",
                "Content": "Khong biet ghi gi trong nay het a",
                "price": 5400,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 3,
                "size": [21, 22, 23, 24, 25]

            },
            {
                "_id": "10",
                "title": "Shoes 010",
                "category": 1,
                "src": "/giay_nam_010.png",
                "Description": "Giay bao dep sai 1 ngay hung lien nen dung mua",
                "Content": "Khong biet ghi gi trong nay het a",
                "price": 3000,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 4,
                "size": [21, 22, 23, 24, 25]

            },
            {
                "_id": "11",
                "title": "Shoes 011",
                "category": 2,
                "src": "/giay_nu_01.png",
                "Description": "Giay bao dep sai 1 ngay hung lien nen dung mua",
                "Content": "Khong biet ghi gi trong nay het a",
                "price": 5000,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 10,
                "size": [21, 22, 23, 24, 25]

            },
            {
                "_id": "12",
                "title": "Shoes 012",
                "category": 2,
                "src": "/giay_nu_02.png",
                "Description": "Giay bao dep sai 1 ngay hung lien nen dung mua",
                "Content": "Khong biet ghi gi trong nay het a",
                "price": 2700,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 5,
                "size": [21, 22, 23, 24, 25]

            },
            {
                "_id": "13",
                "title": "Shoes 013",
                "category": 2,
                "src": "/giay_nu_03.png",
                "Description": "Giay bao dep sai 1 ngay hung lien nen dung mua",
                "Content": "Khong biet ghi gi trong nay het a",
                "price": 5000,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 9,
                "size": [21, 22, 23, 24, 25]

            },
            {
                "_id": "14",
                "title": "Shoes 014",
                "category": 2,
                "src": "/giay_nu_04.png",
                "Description": "Giay bao dep sai 1 ngay hung lien nen dung mua",
                "Content": "Khong biet ghi gi trong nay het a",
                "price": 4000,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 8,
                "size": [21, 22, 23, 24, 25]

            },
            {
                "_id": "15",
                "title": "Shoes 015",
                "category": 2,
                "src": "/giay_nu_05.png",
                "Description": "Giay bao dep sai 1 ngay hung lien nen dung mua",
                "Content": "Khong biet ghi gi trong nay het a",
                "price": 3600,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 6,
                "size": [21, 22, 23, 24, 25]

            },
            {
                "_id": "16",
                "title": "Shoes 016",
                "category": 2,
                "src": "/giay_nu_06.png",
                "Description": "Giay bao dep sai 1 ngay hung lien nen dung mua",
                "Content": "Khong biet ghi gi trong nay het a",
                "price": 6000,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 7,
                "size": [21, 22, 23, 24, 25]

            },
            {
                "_id": "17",
                "title": "Shoes 017",
                "category": 2,
                "src": "/giay_nu_07.png",
                "Description": "Giay bao dep sai 1 ngay hung lien nen dung mua",
                "Content": "Khong biet ghi gi trong nay het a",
                "price": 2300,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 4,
                "size": [21, 22, 23, 24, 25]

            },
            {
                "_id": "18",
                "title": "Shoes 018",
                "category": 2,
                "src": "/giay_nu_08.png",
                "Description": "Giay bao dep sai 1 ngay hung lien nen dung mua",
                "Content": "Khong biet ghi gi trong nay het a",
                "price": 1000,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 5

            },
            {
                "_id": "19",
                "title": "Shoes 019",
                "category": 2,
                "src": "/giay_nu_09.png",
                "Description": "Giay bao dep sai 1 ngay hung lien nen dung mua",
                "Content": "Khong biet ghi gi trong nay het a",
                "price": 5400,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 3,
                "size": [21, 22, 23, 24, 25]

            },
            {
                "_id": "20",
                "title": "Shoes 020",
                "category": 2,
                "src": "/giay_nu_010.png",
                "Description": "Giay bao dep sai 1 ngay hung lien nen dung mua",
                "Content": "Khong biet ghi gi trong nay het a",
                "price": 3000,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 4,
                "size": [21, 22, 23, 24, 25]

            }
        ],
        cart: [],
        selectd_quantity: "",
        selectd_size: "",
        selectd_color: "",
        count_cart: 0,
    }

    addCart = (id) => {
        const { products, cart } = this.state;
        const selec_size = this.state.selectd_size;
        const selec_quantity = this.state.selectd_quantity;
        const count = this.state.count_cart;
        const check = cart.every(item => {
            return item._id !== id

        })



        if (selec_size != "" && selec_quantity != "") {
            const data1 = products.filter(products => {
                return products._id === id
            })
            //console.log("data1", data1)
            //const temp = Object.assign(data1)
            
            const obj_yourcart = {}
            for (const [key, value] of Object.entries(data1)){
                //var temp_obj = {}
                for (const [key1, value1] of Object.entries(value)){
                    //console.log("key: ", key1, " value: ", value1)
                    if(key1 == "size" || key1 == "count"){
                        if(key1 == "size"){
                            //console.log("key size ",key1)
                            obj_yourcart[key1] = selec_size
                            //console.log("thay doi size: temp_obj",[key1] , "value", value1)
                        }
                        else{
                            obj_yourcart[key1] = selec_quantity
                            //console.log("thay doi count: temp_obj",[key1] , "value", value1)
                        }
                    }
                    else{
                        obj_yourcart[key1] = value1
                    }
                }
                //console.log("temp ",temp_obj)
                //obj_yourcart[key] = temp_obj
            }
            //console.log("obj_yourcart: ",obj_yourcart)
            //var select_size = {"select_Size": selec_size}

            //const temp = Object.assign(products[id-1])
            
            //temp[0].size = selec_size


            //this.setState({cart: [...obj_yourcart]})
            this.setState(i => ({
                cart: [...i.cart, obj_yourcart]
            }))

            //this.setState({count_cart: count+1})
            //console.log("Cart: ", cart[count])
            //this.setState({ cart: [...cart, ...obj_yourcart] })

            // this.setState(i => ({
            //     cart: [...i.cart, temp]
            // }))






            //this.setState(cart.push(temp))

            //this.setState({cart: [...data,]})
            //console.log(cart)
            //this.addSize("")

        } else {
            alert("Vui lòng chọn đầy đủ Size và Số lượng!")
        }
        // if(check){
        //     const data = products.filter(products =>{
        //         return products._id === id
        //     })
        //     this.setState({cart: [...cart, ...data]})


        //     console.log(data)
        // }else{
        //     alert("Đã có trong giỏ hàng!")
        // }

    };
    addSize = (size) => {
        //cho bien selectd_size trong state
        const sizee = this.state.selectd_size;
        this.setState({ selectd_size: size })
    };
    addQuantity = (quantity) => {
        
        this.setState({ selectd_quantity: quantity })
        
    }
    removeProduct = (id) => {
        if (window.confirm("Bạn có chắc là xóa sản phẩm này ra khỏi giỏ hàng không.")) {
            const { cart } = this.state;
            cart.forEach((item, index) => {
                if (item._id === id) {
                    cart.splice(index, 1)
                }
            })
            this.setState({ cart: cart })
        }
    };



    render() {
        const { products, cart, selectd_quantity, selectd_size, selectd_color, count_cart } = this.state;
        const { addCart, addSize, addQuantity, removeProduct } = this;
        // const {check_selectsize} = this;
        console.log(products)
        console.log("Cart: ",cart)
        return (
            <DataContext.Provider value={{ products, cart, selectd_size, addCart, addSize, addQuantity, removeProduct }}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

