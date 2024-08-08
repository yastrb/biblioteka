import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
<<<<<<< HEAD
import CustomLeftArrow from '../../assets/icons/ArrowCustomLeft.jsx'
import CustomRightArrow from '../../assets/icons/ArrowCustomRight.jsx'
import BookCard from '../product/BookCard.jsx'

const FeaturedCarouselSection = ({ title, data }) => {
=======
import styles from '../../style.js'
import BookCard from '../product/BookCard.jsx'
import CustomLeftArrow from './ArrowCustomLeft.jsx'
import CustomRightArrow from './ArrowCustomRight.jsx'

const FeaturedCarouselSection = ({ title, data }) => {
	// console.log(data)

>>>>>>> dd4605baa5658e0dc84ecec4f7e1351e7b253354
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 1280 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 1280, min: 1024 },
			items: 4,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 3,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
<<<<<<< HEAD
			items: 1,
		},
	}

	return (
		<section className={` my-14 `}>
=======
			items: 2,
		},
	}
	return (
		<section className={`${styles.boxWidth} my-14 `}>
>>>>>>> dd4605baa5658e0dc84ecec4f7e1351e7b253354
			<div className='flex justify-between'>
				<h2 className='text-2xl font-semibold bg-main py-2 pr-4 pl-6 rounded-br-lg rounded-bl-lg rounded-tr-lg'>
					{title}
				</h2>
				<button className='text-base hover:cursor-pointer hover:text-blue-500 focus:text-blue-500 border-b-2 border-black hover:border-blue-500'>
					Переглянути повністю
				</button>
			</div>

			<Carousel
<<<<<<< HEAD
				className={`overflow-hidden my-14 relative`}
				responsive={responsive}
				// removeArrowOnDeviceType={['tablet', 'mobile']}
=======
				className={`overflow-hidden  my-14 relative`}
				responsive={responsive}
				removeArrowOnDeviceType={['tablet', 'mobile']}
>>>>>>> dd4605baa5658e0dc84ecec4f7e1351e7b253354
				infinite={true}
				customLeftArrow={<CustomLeftArrow />}
				customRightArrow={<CustomRightArrow />}
			>
<<<<<<< HEAD
				{data.map(el => (
					<div key={el._id} className=' flex justify-center'>
						<BookCard book={el} />
					</div>
				))}
=======
				{data.map(el => {
					// console.log(`${title}`, el)
					return <BookCard key={el._id} book={el} />
				})}
>>>>>>> dd4605baa5658e0dc84ecec4f7e1351e7b253354
			</Carousel>
		</section>
	)
}

export default FeaturedCarouselSection
