// import React from 'react'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
<<<<<<< HEAD
import ProductPage from '../../pages/ProductPage/productPage'
=======
>>>>>>> dd4605baa5658e0dc84ecec4f7e1351e7b253354
import AboutUs from '../../pages/aboutUs/aboutUs'
import Catalog from '../../pages/catalog/catalog'
import Home from '../../pages/home/home'
import Sales from '../../pages/sales/sales'
import TopBooks from '../../pages/topBooks/topBooks'
import styles from '../../style'
import Footer from './Footer'
import Header from './Header'

const AppWrapper = () => {
	let routes = useRoutes([
		{ path: '/', element: <Home /> },
		{ path: '/about', element: <AboutUs /> },
		{ path: '/catalog', element: <Catalog /> },
		{ path: '/top-books', element: <TopBooks /> },
		{ path: '/sales', element: <Sales /> },
<<<<<<< HEAD
		{ path: '/productPage', element: <ProductPage /> },
=======
>>>>>>> dd4605baa5658e0dc84ecec4f7e1351e7b253354
	])
	return routes
}

const Layout = () => {
	return (
		<Router>
<<<<<<< HEAD
			<div className='overflow-x-hidden mx-auto min-h-[100vh] flex flex-col'>
=======
			<div className=' mx-auto min-h-[100vh] flex flex-col font-montserrat'>
>>>>>>> dd4605baa5658e0dc84ecec4f7e1351e7b253354
				<div className={`${styles.flexCenter} `}>
					<Header />
				</div>

				<AppWrapper />

				<div
					className={`${styles.paddingX} ${styles.flexStart}  ${styles.footerHeader} static shrink-0`}
				>
					<div className={`${styles.boxWidth}`}>
						<Footer />
					</div>
				</div>
			</div>
		</Router>
	)
}

export default Layout
