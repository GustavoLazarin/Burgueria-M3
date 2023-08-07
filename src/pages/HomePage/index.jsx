import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { api } from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Skeleton } from "../../components/Skeleton";

export const HomePage = () => {
   const [isLoading, setIsLoading] = useState(false);
   const [productList, setProductList] = useState([]);
   const savedCart = localStorage.getItem("@BurguerKenzie:carrinho");
   const [filter, setFilter] = useState("");
   const [modalOpen, setModalOpen] = useState(false)
   const [cartList, setCartList] = useState(
      savedCart ? JSON.parse(savedCart) : []
   );
   
   const cleanFilter = () => {
      setFilter("");
   }

   useEffect(() => {
      const getProducts = async () => {
         try {
            setIsLoading(true);
            const {data} = await api.get();
            setProductList(data);
         } catch(error) {
            console.log(error)
         }
         finally {
            setIsLoading(false);
         }
      }
      
      getProducts()
   }, [])

   useEffect(() => {
      localStorage.setItem("@BurguerKenzie:carrinho", JSON.stringify(cartList));
   }, [cartList])

   const addItemToCart = (item) => {
      const itemExist = cartList.find(cartItem => cartItem.id == item.id);

      itemExist ? toast.error("Esse item já está no carrinho!",{
         position: "bottom-right",
         autoClose: 3000
      }) : setCartList([item, ...cartList]);
   }

   const removeItemToCart = (itemId) => {
      const newCartList = cartList.filter(item => item.id !== itemId);
      setCartList(newCartList);
   }

   const products = filter ? productList.filter(product => product.name.toLowerCase().includes(filter.toLowerCase()) || 
   product.category.toLowerCase().includes(filter.toLowerCase()))
    : productList
   
   return (
      <>
         <Header cartList={cartList} setFilter={setFilter} handleModal={setModalOpen} />
         <main>
            {!isLoading ? <ProductList productList={products} filter={filter} cleanFilter={cleanFilter} addItemToCart={addItemToCart} /> : <Skeleton />}
            {modalOpen ? <CartModal cartList={cartList} setCartList={setCartList} handleModal={setModalOpen} removeItem={removeItemToCart} /> : null}
         </main>
         <ToastContainer />
      </>
   );
};
