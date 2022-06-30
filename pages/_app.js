import getCategories from "../data/navBarData"

import DataContextProvider from "../context/context"
import {useState} from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import '../styles/globals.css'

// import fetchCategories from '../data/categories'


function MyApp({ Component, pageProps  , categories}) {
  
  if (Component.getLayout){
    return Component.getLayout(<Component {...pageProps}/>)
  }

  return (
  <>
      <DataContextProvider>
      <Header/>
      {/* <Header categories= {categories} /> */}
        <Component {...pageProps} />
      </DataContextProvider>
      <Footer/>
  </>
  )
  
}

// MyApp.getInitialProps = async ()=>{
//   const categories = await getCategories()
//   return {
//     categories
//   }
// }
export default MyApp



