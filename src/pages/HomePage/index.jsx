import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { api } from "../../services/api";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState([]);
   const [filter, setFilter] = useState("");
   const [filteredList, setFilteredList] = useState("");

   const cleanFilter = () => {
      setFilter("");
      setFilteredList("")
   }
   
   useEffect(() => {
      const filteredProducts = productList.filter(product => product.name.toLowerCase().includes(filter.toLowerCase()) || 
      product.category.toLowerCase().includes(filter.toLowerCase()));

      filter ? setFilteredList(filteredProducts) : null
   }, [filter])

   useEffect(() => {
      const getProducts = async () => {
         try {
            const {data} = await api.get();
            
            setProductList(data);
         } catch(error) {
            console.log(error)
         }
      }
      
      getProducts()
   }, [])

   // useEffect montagem - carrega os produtos da API e joga em productList - FEITO
   // filtro de busca - FEITO
   
   // useEffect atualização - salva os produtos no localStorage (carregar no estado)
   // adição, exclusão, e exclusão geral do carrinho
   // renderizações condições e o estado para exibir ou não o carrinho
   // estilizar tudo com sass de forma responsiva

   const products = filteredList ? filteredList : productList
   
   return (
      <>
         <Header setFilter={setFilter}/>
         <main>
            <ProductList productList={products} filter={filter} cleanFilter={cleanFilter} />
            <CartModal cartList={cartList} />
         </main>
      </>
   );
};
