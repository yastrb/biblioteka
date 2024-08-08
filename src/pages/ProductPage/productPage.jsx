import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import FeaturedCarouselSection from '../../components/FeaturedCarouselSection/FeaturedCarouselSection.jsx'
import ImageLightBox from '../../components/ImageLightbox/ImageLightbox'
import img1 from '../../components/ProductImageGallery/imagesPrewiev/img1.webp'
import img2 from '../../components/ProductImageGallery/imagesPrewiev/img2.jpg'
import img3 from '../../components/ProductImageGallery/imagesPrewiev/img3.jpg'
import ProductImageGallery from '../../components/ProductImageGallery/productImageGallery'
import { useGetBookInfoQuery } from '../../redux/productPageSlice'
import styles from '../../style'
import IconStatusFalse from './ProductStatusItemFalse.svg'
import IconStatusTrue from './ProductStatusItemTrue.svg'
import ProductDescription from './productDescription'
import Button from '../../components/common/button/Button.jsx'
import { useEffect } from 'react'

const ProductPage = () => {
	const location = useLocation()
	const id = location.state.id
	const { data, error, isLoading } = useGetBookInfoQuery(id)
	const imageLightBoxStatus = useSelector(
		state => state.imageLightBoxStatus.status
	)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`https://backend-tan-phi.vercel.app/api/${id}`);
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const data = await response.json();
				// перевіряємо структуру даних
				if (!data.bookById) {
					throw new Error('Invalid data format');
				}
				console.log('book', data.bookById);
			} catch (error) {
				console.error('Error fetching book info:', error);
			}
		};

		fetchData();
	}, [id]);


	if (isLoading) return <div className='h-screen'>Loading...</div>
	if (error) return <div>Error: {error.status} {error.data?.message}</div>
	console.log(data)

	const book = data.bookById
	console.log('book', book)

	const {
		publication_year,
		language_id,
		title_ukr,
		author_id,
		category_id,
		price_id,
		summary_ukr,
		coverType,
	} = book

	let PHTArrray = [img1, img2, img3]
	let infoObj = {
		'Мова видання': language_id[0].language,
		'Рік видання': publication_year,
		Видавництво: 'NONE',
		Жанр: category_id[0].category_ukr,
		'Тип обкладинки': coverType,
	}

	let statusIcon = false
	return (
		<div className={` mt-14 ${styles.boxWidth} mx-auto`}>
			{imageLightBoxStatus && <ImageLightBox images={PHTArrray} />}
			<div className='product-item'>

				{/* title */}
				<div className='product-title'>
					<p className='font-semibold text-2xl whitespace-nowrap mb-2 pt-3 px-3'>
						{title_ukr}
					</p>
					<p className='font-normal text-base px-3 mb-5'>
						{author_id[0].name_ukr} {author_id[0].surname_ukr}
					</p>
				</div>

				{/* image */}
				<div className='product-img'>
					{!imageLightBoxStatus && <ProductImageGallery images={PHTArrray} />}
				</div>

				{/* info */}
				<div className='product-info px-3 py-8 mx-auto'>
					{Object.entries(infoObj).map(([key, value]) => (
						<div
							key={key}
							className='flex items-center justify-between w-auto pb-3'
						>
							<p className='text-base leading-5 font-semibold'>{key}:</p>
							<p className='text-base leading-6 font-normal p-3 bg-skyblue rounded-xl'>
								{value}
							</p>
						</div>
					))}
				</div>

				{/* price */}
				<div className='product-price'>
					<p className=' text-hover text-2xl font-semibold'>
						<span className=' text-4xl pr-2'>
							{price_id.discounted_price > 0
								? price_id.discounted_price
								: price_id.original_price}
						</span>
						грн
					</p>
					{statusIcon ? (
						<p className=' text-green flex text-base font-normal  gap-x-2 mt-2'>
							<img src={IconStatusTrue} alt='' /> {'В наявності'}
						</p>
					) : (
						<p className='text-red flex text-base font-normal gap-x-2 mt-2'>
							<img src={IconStatusFalse} alt='' />
							{'Немає в наявності'}
						</p>
					)}
				</div>

				{/* buttons */}
				<div className={`product-btns flex xl:flex-col gap-2  `}>
					<Button
						label="В кошик"
						className="bg-button py-2.5 px-10" />
					<Button
						label="Оплатити"
						className="bg-buttonB border-none py-2.5 px-10" />
				</div>

				{/* summary */}
				<div className='product-summary'>
					<ProductDescription description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aperiam dicta voluptate. Soluta iste earum corporis dolores quae aliquam nisi itaque ratione laboriosam. Ratione libero quo adipisci nobis deserunt debitis.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate repellendus error velit iusto dicta deserunt voluptates praesentium officia ex temporibus dolores totam, aliquid vero nihil, voluptas incidunt eos? Quae, commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quibusdam fugit labore incidunt harum. Exercitationem commodi, perferendis consequatur, omnis officia ducimus beatae consequuntur, fuga repellendus quae iusto. Perspiciatis, debitis corrupti?' />
				</div>
			</div>

			<FeaturedCarouselSection
				title='Вас може зацікавити'
				data={data.recommendation}
			/>
		</div>
	)
}

export default ProductPage
