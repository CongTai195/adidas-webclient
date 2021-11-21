import React, { Component } from 'react';
import axios from 'axios';

export const DataContext = React.createContext();

export class DataProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // products: [
            //     {
            //         // E:/4 (Ky 1 Nam 4)/PBL6/web_client/src/components
            //         "_id": "001",
            //         "title": "Shoes 0011",
            //         "category": 1,
            //         "src": "/giay_nam_01.png",
            //         "Description": "Giay bao dep sai 1 ngay hung lien nen dung mua",
            //         "Content": "Khong biet ghi gi trong nay het a",
            //         "price": 5000,
            //         "colors": ["red", "black", "crimson", "teal"],
            //         "count": 10,
            //         "size": [1, 2, 3, 4, 21, 22, 23, 24, 25],
            //         "warehouse": [
            //             {
            //                 "id": 1,
            //                 "product_id": 1,
            //                 "size": 3,
            //                 "color": "red",
            //                 "quantity": 2,
            //                 "src": "/giay_nam_01.png",
            //             },
            //             {
            //                 "id": 2,
            //                 "product_id": 1,
            //                 "size": 4,
            //                 "color": "black",
            //                 "quantity": 3,
            //                 "src": "/giay_nam_02.png",
            //             },
            //             {
            //                 "id": 3,
            //                 "product_id": 2,
            //                 "size": 3,
            //                 "color": "crimson",
            //                 "quantity": 2,
            //                 "src": "/giay_nam_03.png",
            //             },
            //             {
            //                 "id": 3,
            //                 "product_id": 2,
            //                 "size": 3,
            //                 "color": "teal",
            //                 "quantity": 2,
            //                 "src": "/giay_nam_04.png",
            //             },
            //         ]


            //     },
            //     {
            //         // E:/4 (Ky 1 Nam 4)/PBL6/web_client/src/components
            //         "_id": "1",
            //         "title": "Shoes 01",
            //         "category": 1,
            //         "src": "/giay_nam_02.png",
            //         "Description": "Giay bao dep sai 1 ngay hung lien nen dung mua",
            //         "Content": "Khong biet ghi gi trong nay het a",
            //         "price": 5000,
            //         "colors": ["red", "black", "crimson", "teal"],
            //         "count": 10,
            //         "size": [1, 2, 3, 4, 21, 22, 23, 24, 25],

            //     },
            //     {
            //         "_id": "2",
            //         "title": "Shoes 02",
            //         "category": 1,
            //         "src": "/giay_nam_02.png",
            //         "Description": "Giay bao dep sai 1 ngay hung lien nen dung mua",
            //         "Content": "Khong biet ghi gi trong nay het a",
            //         "price": 2700,
            //         "colors": ["red", "black", "crimson", "teal"],
            //         "count": 5,
            //         "size": [21, 22, 23, 24, 25],
            //         "quantity": [{
            //             21: 4,
            //             22: 2,
            //             23: 3,
            //             24: 1,
            //             25: 5
            //         }]

            //     },
            //     {
            //         "_id": "3",
            //         "title": "Shoes 03",
            //         "category": 1,
            //         "src": "/giay_nam_03.png",
            //         "Description": "Giay bao dep sai 1 ngay hung lien nen dung mua",
            //         "Content": "Khong biet ghi gi trong nay het a",
            //         "price": 5000,
            //         "colors": ["red", "black", "crimson", "teal"],
            //         "count": 9,
            //         "size": [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

            //     },
            //     {
            //         "_id": "4",
            //         "title": "Shoes 04",
            //         "category": 1,
            //         "src": "/giay_nam_04.png",
            //         "Description": "Giay bao dep sai 1 ngay hung lien nen dung mua",
            //         "Content": "Khong biet ghi gi trong nay het a",
            //         "price": 4000,
            //         "colors": ["red", "black", "crimson", "teal"],
            //         "count": 8,
            //         "size": [21, 22, 23, 24, 25]

            //     },
            //     {
            //         "_id": "5",
            //         "title": "Shoes 05",
            //         "category": 1,
            //         "src": "/giay_nam_05.png",
            //         "Description": "Giay bao dep sai 1 ngay hung lien nen dung mua",
            //         "Content": "Khong biet ghi gi trong nay het a",
            //         "price": 3600,
            //         "colors": ["red", "black", "crimson", "teal"],
            //         "count": 6,
            //         "size": [21, 22, 23, 24, 25]

            //     },
            //     {
            //         "_id": "6",
            //         "title": "Shoes 06",
            //         "category": 1,
            //         "src": "/giay_nam_06.png",
            //         "Description": "Giay bao dep sai 1 ngay hung lien nen dung mua",
            //         "Content": "Khong biet ghi gi trong nay het a",
            //         "price": 6000,
            //         "colors": ["red", "black", "crimson", "teal"],
            //         "count": 7,
            //         "size": [21, 22, 23, 24, 25]

            //     },
            //     {
            //         "_id": "7",
            //         "title": "Shoes 07",
            //         "category": 1,
            //         "src": "/giay_nam_07.png",
            //         "Description": "Giay bao dep sai 1 ngay hung lien nen dung mua",
            //         "Content": "Khong biet ghi gi trong nay het a",
            //         "price": 2300,
            //         "colors": ["red", "black", "crimson", "teal"],
            //         "count": 4,
            //         "size": [21, 22, 23, 24, 25]

            //     },
            //     {
            //         "_id": "8",
            //         "title": "Shoes 08",
            //         "category": 1,
            //         "src": "/giay_nam_08.png",
            //         "Description": "Giay bao dep sai 1 ngay hung lien nen dung mua",
            //         "Content": "Khong biet ghi gi trong nay het a",
            //         "price": 1000,
            //         "colors": ["red", "black", "crimson", "teal"],
            //         "count": 5,
            //         "size": [21, 22, 23, 24, 25]

            //     },
            //     {
            //         "_id": "9",
            //         "title": "Shoes 09",
            //         "category": 1,
            //         "src": "/giay_nam_09.png",
            //         "Description": "Giay bao dep sai 1 ngay hung lien nen dung mua",
            //         "Content": "Khong biet ghi gi trong nay het a",
            //         "price": 5400,
            //         "colors": ["red", "black", "crimson", "teal"],
            //         "count": 3,
            //         "size": [21, 22, 23, 24, 25]

            //     },
            //     {
            //         "_id": "10",
            //         "title": "Shoes 010",
            //         "category": 1,
            //         "src": "/giay_nam_010.png",
            //         "Description": "Giay bao dep sai 1 ngay hung lien nen dung mua",
            //         "Content": "Khong biet ghi gi trong nay het a",
            //         "price": 3000,
            //         "colors": ["red", "black", "crimson", "teal"],
            //         "count": 4,
            //         "size": [21, 22, 23, 24, 25]

            //     },
            //     {
            //         "_id": "11",
            //         "title": "Shoes 011",
            //         "category": 2,
            //         "src": "/giay_nu_01.png",
            //         "Description": "Giay bao dep sai 1 ngay hung lien nen dung mua",
            //         "Content": "Khong biet ghi gi trong nay het a",
            //         "price": 5000,
            //         "colors": ["red", "black", "crimson", "teal"],
            //         "count": 10,
            //         "size": [21, 22, 23, 24, 25]

            //     },
            //     {
            //         "_id": "12",
            //         "title": "Shoes 012",
            //         "category": 2,
            //         "src": "/giay_nu_02.png",
            //         "Description": "Giay bao dep sai 1 ngay hung lien nen dung mua",
            //         "Content": "Khong biet ghi gi trong nay het a",
            //         "price": 2700,
            //         "colors": ["red", "black", "crimson", "teal"],
            //         "count": 5,
            //         "size": [21, 22, 23, 24, 25]

            //     },
            //     {
            //         "_id": "13",
            //         "title": "Shoes 013",
            //         "category": 2,
            //         "src": "/giay_nu_03.png",
            //         "Description": "Giay bao dep sai 1 ngay hung lien nen dung mua",
            //         "Content": "Khong biet ghi gi trong nay het a",
            //         "price": 5000,
            //         "colors": ["red", "black", "crimson", "teal"],
            //         "count": 9,
            //         "size": [21, 22, 23, 24, 25]

            //     },
            //     {
            //         "_id": "14",
            //         "title": "Shoes 014",
            //         "category": 2,
            //         "src": "/giay_nu_04.png",
            //         "Description": "Giay bao dep sai 1 ngay hung lien nen dung mua",
            //         "Content": "Khong biet ghi gi trong nay het a",
            //         "price": 4000,
            //         "colors": ["red", "black", "crimson", "teal"],
            //         "count": 8,
            //         "size": [21, 22, 23, 24, 25]

            //     },
            //     {
            //         "_id": "15",
            //         "title": "Shoes 015",
            //         "category": 2,
            //         "src": "/giay_nu_05.png",
            //         "Description": "Giay bao dep sai 1 ngay hung lien nen dung mua",
            //         "Content": "Khong biet ghi gi trong nay het a",
            //         "price": 3600,
            //         "colors": ["red", "black", "crimson", "teal"],
            //         "count": 6,
            //         "size": [21, 22, 23, 24, 25]

            //     },
            //     {
            //         "_id": "16",
            //         "title": "Shoes 016",
            //         "category": 2,
            //         "src": "/giay_nu_06.png",
            //         "Description": "Giay bao dep sai 1 ngay hung lien nen dung mua",
            //         "Content": "Khong biet ghi gi trong nay het a",
            //         "price": 6000,
            //         "colors": ["red", "black", "crimson", "teal"],
            //         "count": 7,
            //         "size": [21, 22, 23, 24, 25]

            //     },
            //     {
            //         "_id": "17",
            //         "title": "Shoes 017",
            //         "category": 2,
            //         "src": "/giay_nu_07.png",
            //         "Description": "Giay bao dep sai 1 ngay hung lien nen dung mua",
            //         "Content": "Khong biet ghi gi trong nay het a",
            //         "price": 2300,
            //         "colors": ["red", "black", "crimson", "teal"],
            //         "count": 4,
            //         "size": [21, 22, 23, 24, 25]

            //     },
            //     {
            //         "_id": "18",
            //         "title": "Shoes 018",
            //         "category": 2,
            //         "src": "/giay_nu_08.png",
            //         "Description": "Giay bao dep sai 1 ngay hung lien nen dung mua",
            //         "Content": "Khong biet ghi gi trong nay het a",
            //         "price": 1000,
            //         "colors": ["red", "black", "crimson", "teal"],
            //         "count": 5

            //     },
            //     {
            //         "_id": "19",
            //         "title": "Shoes 019",
            //         "category": 2,
            //         "src": "/giay_nu_09.png",
            //         "Description": "Giay bao dep sai 1 ngay hung lien nen dung mua",
            //         "Content": "Khong biet ghi gi trong nay het a",
            //         "price": 5400,
            //         "colors": ["red", "black", "crimson", "teal"],
            //         "count": 3,
            //         "size": [21, 22, 23, 24, 25]

            //     },
            //     {
            //         "_id": "20",
            //         "title": "Shoes 020",
            //         "category": 2,
            //         "src": "/giay_nu_010.png",
            //         "Description": "Giay bao dep sai 1 ngay hung lien nen dung mua",
            //         "Content": "Khong biet ghi gi trong nay het a",
            //         "price": 3000,
            //         "colors": ["red", "black", "crimson", "teal"],
            //         "count": 4,
            //         "size": [21, 22, 23, 24, 25]

            //     }
            // ],
            products: [],
            cart: [],
            total: 0,
            category_product: [],
            user: [],
        }
    }
    componentDidMount() {
        this.getAllproducts()

    };
    getAllproducts = () => {
        //http://127.0.0.1:8000/api/category/10/product
        //http://127.0.0.1:8000/api/product
        axios.get('product')
            .then(res => {
                // console.log("Data: ", res.length)
                this.setState({
                    products: res.data.results
                });
                //console.log("data: ", res.data.results)
            }).catch(err => {
                console.log("Err: ", err)
            });
    }
    resultProductCategory = (id) => {
        const { products } = this.state;
        const temp = []
        for (const [key, value] of Object.entries(products)) {
            for (const [key1, value1] of Object.entries(value)) {
                if (key1 == "category_id" && value1 == id) {
                    temp.push(value)
                }
            }
        }
        //console.log("data: ", temp)
        this.setState({ category_product: temp })
    }
    querydb = (id) => {
        //http://127.0.0.1:8000/api/category/10/product
        //http://127.0.0.1:8000/api/product
        axios.get('http://127.0.0.1:8000/api/category/' + id + '/product')
            .then(res => {
                // console.log("Data: ", res.length)
                this.setState({
                    products: res.data.results
                });

            }).catch(err => {
                console.log("Err: ", err)
            });
    }
    addProductsforCate = (product) => {
        this.setState({ products: product })
    }

    // -------------------------------Cart----------------------------------------
    getCartuser = () => {

        const products = this.state.products
        //if(user != 0){
        const authAxios = axios.create({
            baseURL: "http://127.0.0.1:8000/api",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
        });
        authAxios.get('/cart')
            .then(res => {
                console.log("detail cart: ", res.data.results)
                const cart_user = res.data.results
                //Tìm trong list products có id == với prduct_id của cartuser rồi lấy các key tương ứng qua bỏ vào giỏ hàng
                for (const [key, value] of Object.entries(cart_user)) {
                    for (const [key1, value1] of Object.entries(value)) {
                        if (key1 == "product_id") {
                            //console.log("key1:  ", key1, "  value1:  ", value1)
                            const data = products.filter(product => {
                                return product.id == value1
                            })

                            for (const [key_product, val_product] of Object.entries(data)) {
                                for (const [key_product1, val_product1] of Object.entries(val_product)) {
                                    if (key_product1 == "name" || key_product1 == "category_id" ||
                                        key_product1 == "price" || key_product1 == "description" ||
                                        key_product1 == "image" || key_product1 == "image_list") {

                                        //console.log("key_prod:  ", key_produc1t, "  val:  ", val_product1)
                                        value[key_product1] = val_product1

                                    }
                                }
                            }
                        }
                    }
                    console.log("cartuser: ", value)
                    this.setState(i => ({
                        cart: [...i.cart, value]
                    }))
                }


            })
            .catch(err => {
                console.log("detail cart THAT BAI")
            });
        //}
    }

    addCartforUser = (data) => {
        const authAxios = axios.create({
            baseURL: "http://127.0.0.1:8000/api/",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
        });
        console.log("cart data: ", data)
        authAxios.post('/cart', data)
            .then(res => {
                if (res.data.status == "OK") {

                    console.log("post_cart THANH CONG")
                }
                //console.log("login:", res.data.results.info)
            })
            .catch(err => {

                console.log("post_cart THAT BAI")
            });
    }
    addCart = (id, size, quantity) => {
        const { products, cart } = this.state;
        const user = this.state.user;
        //const selec_size = this.state.selectd_size;
        //const selec_quantity = this.state.selectd_quantity;

        // const check = cart.every(item => {
        //     return item._id !== id

        // })
        if (size != 0 && quantity != 0) {
            const data1 = products.filter(products => {
                return products.id == id
            })
            //const temp = Object.assign(data1)
            const obj_yourcart = {}
            for (const [key, value] of Object.entries(data1)) {
                //var temp_obj = {}
                for (const [key1, value1] of Object.entries(value)) {
                    //console.log("key: ", key1, " value: ", value1)
                    if (key1 == "detail_products") {
                        obj_yourcart.size = size
                        obj_yourcart.quantity = quantity
                        // if (key1 == "size") {
                        //     //console.log("key size ",key1)
                        //     obj_yourcart[key1] = size
                        //     //console.log("thay doi size: temp_obj",[key1] , "value", value1)
                        // }
                        // else {
                        //     obj_yourcart[key1] = quantity
                        //     //console.log("thay doi count: temp_obj",[key1] , "value", value1)
                        // }
                    }
                    else {
                        obj_yourcart[key1] = value1
                    }
                }

            }
            this.setState(i => ({
                cart: [...i.cart, obj_yourcart]
            }))
            // -----------------------user---------------------------
            if (user.length != 0) {
                //console.log("user: ", user)
                const user_id = user.id
                const product_id = id
                const data = { user_id, product_id, quantity, size }

                this.addCartforUser(data)
                this.resetCart("OK")
                this.getCartuser()
            }

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
    resetCart = (string) => {
        if (string == "OK") {
            //console.log("resetCart file context Okee")
            this.setState({ cart: [] })
            this.setState({ total: 0 })
            //console.log("clear cart: ", this.state.cart)
            this.getAllproducts()
        }
    }
    delete_cartuser = (data) => {

        const authAxios = axios.create({
            baseURL: "http://127.0.0.1:8000/api/",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
        });
        //console.log('cart/' + data)
        authAxios.delete('cart/' + data)
            .then(res => {
                if (res.data.status == "OK") {

                    console.log("delete cart THANH CONG")
                }
                //console.log("login:", res.data.results.info)
            })
            .catch(err => {

                console.log("delete cart THAT BAI")
            });
    }

    removeProductinCart = (id) => {
        //console.log("removeProductinCart: ", id)
        const user = this.state.user
        if (window.confirm("Bạn có chắc là xóa sản phẩm này ra khỏi giỏ hàng không.")) {
            if (user.length == 0) {
                const { cart } = this.state;
                cart.forEach((item, index) => {
                    if (item.id == id) {
                        cart.splice(index, 1)
                    }
                })
                this.setState({ cart: cart })
                this.getTotal()
            }
            else {
                this.delete_cartuser(id)
                const { cart } = this.state;
                cart.forEach((item, index) => {
                    if (item.id == id) {
                        cart.splice(index, 1)
                    }
                })
                this.setState({ cart: cart })
                this.getTotal()
            }
        }
    };
    // -------------------------End Cart--------------------------------------

    addSize = (size) => {
        //cho bien selectd_size trong state
        //const sizee = this.state.selectd_size;
        this.setState({ selectd_size: size })

    };
    addQuantity = (quantity) => {

        this.setState({ selectd_quantity: quantity })

    }

    getTotal = () => {
        const { cart } = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.quantity)
        }, 0)

        this.setState({ total: res })
    }
    addUser = (user) => {
        this.setState({ user: user });

    }




    render() {
        const { products, cart, total, category_product, user, } = this.state;
        const { getAllproducts, addProductsforCate, addCart, resetCart, addSize, addQuantity,
            removeProductinCart, getTotal, resultProductCategory, addUser, getCartuser,
            addCartforUser, delete_cartuser } = this;
        // const {check_selectsize} = this;
        //console.log("Context Cart: ", cart)
        // console.log("Context total: ", total)
        // add_detail_product();

        //console.log("catego ", category_product)
        return (
            //</DataContext.Provider><DataContext.Provider value={{ state: this.state }}>
            <DataContext.Provider value={{
                products, cart, total, category_product, user,
                getAllproducts, addProductsforCate, addCart, addSize, resetCart, addQuantity,
                removeProductinCart, getTotal, resultProductCategory, addUser, getCartuser,
                addCartforUser, delete_cartuser,
            }}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

