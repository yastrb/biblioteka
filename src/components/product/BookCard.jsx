<<<<<<< HEAD
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../../redux/cartSlice';
import { useNavigate } from 'react-router-dom'
const BookCard = ({ book }) => {
	// const dispatch = useDispatch();

	// const handleAddToCart = () => {
	//   dispatch(addToCart(book));
	// };
	const navigate = useNavigate()

	const handleClick = () => {
		navigate('/productpage', { state: { id: book.price[0].book_id } })
	}

	return (
		<div className='border-solid w-44'>
			<img
				className='rounded-xl w-44 h-60 cursor-pointer'
				src={book.coverImageLink_ukr}
				alt={book.title_ukr}
				onClick={handleClick}
			/>

			<h2 className=' ml-1 font-medium font-montserrat my-4 w-44 truncate'>
				{book.title_ukr}
			</h2>
			<p className='font-montserrat ml-1 truncate'>
=======
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

const BookCard = ({ book }) => {
	const dispatch = useDispatch();

	const handleAddToCart = () => {
	  dispatch(addToCart(book));
	};
	return (
		<div className='book-card mx-8 border-solid w-44'>
			<img
				className='rounded-xl w-44 h-60'
				src={book.coverImageLink_ukr}
				alt={book.title_ukr}
			/>

			<h2 className='font-medium font-montserrat my-4 w-44 truncate'>
				{book.title_ukr}
			</h2>
			<p className='font-montserrat truncate'>
>>>>>>> dd4605baa5658e0dc84ecec4f7e1351e7b253354
				{book.author
					.map(author => `${author.name_ukr} ${author.surname_ukr}`)
					.join(', ')}
			</p>
<<<<<<< HEAD
			<p className='font-montserrat ml-1 my-4 font-medium '>
=======
			<p className='font-montserrat my-4 font-medium '>
>>>>>>> dd4605baa5658e0dc84ecec4f7e1351e7b253354
				{book.price[0].discounted_price > 0
					? `${book.price[0].discounted_price} грн`
					: `${book.price[0].original_price} грн`}
			</p>

			<button
<<<<<<< HEAD
				className=' bg-button rounded-lg w-full py-2 hover:bg-hover font-montserrat duration-300'
				// onClick={handleAddToCart}
			>
				В кошик
=======
				className=' bg-button rounded-lg p-2 hover:bg-hover font-montserrat duration-300'
				onClick={handleAddToCart}
			>
				Add to Cart
>>>>>>> dd4605baa5658e0dc84ecec4f7e1351e7b253354
			</button>
		</div>
	)
}

export default BookCard
