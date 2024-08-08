import trash from './../../../assets/trash.svg';
import stock from './../../../assets/stock.svg';
import styles from '../../../style';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, increase, decrease } from '../../../redux/cartSlice';

<<<<<<< HEAD
const CartItem = ({ _id, title, author_id, coverImageLink, isbn, price_id }) => {
=======
const CartItem = ({ _id, title, author, coverImageLink = [], price }) => {
>>>>>>> dd4605baa5658e0dc84ecec4f7e1351e7b253354
    const dispatch = useDispatch();

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(_id));
    };

    const cartItem = useSelector((state) =>
        state.cart.cartItems.find((item) => item._id === _id)
    );

    const qty = cartItem ? cartItem.qty : 1;

<<<<<<< HEAD
    return (
        <div className="cart-item relative py-6  after:absolute after:content-[''] after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-grey">
            {/* image */}
            <img className=' cart-image h-32 md:h-60 xl:flex xl:w-[180px] xl:h-[240px] rounded-xl' src={coverImageLink} alt={title} />
=======
    const bookPrice = price && price.original_price ? price.original_price : 0;

    return (
        <div className="cart-item w-full relative py-6  after:absolute after:content-[''] after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-grey">
            {/* image */}
            <img className=' cart-image h-full w-full bg-cover md:h-60 xl:flex xl:w-[180px] xl:h-[240px] rounded-xl' src={coverImageLink[0]} alt={title} />
>>>>>>> dd4605baa5658e0dc84ecec4f7e1351e7b253354

            {/* info */}
            <div className=' cart-data flex items-start justify-between'>
                <div>
                    <h4 className={`${styles.subtitleMedium} mb-2`}>{title}</h4>
<<<<<<< HEAD
                    <p className={`${styles.bodyRegular} mb-4`}>Автор: {author_id.map(author => `${author.name_ukr} ${author.surname_ukr}`).join(', ')}</p>
=======
                    <p className={`${styles.bodyRegular} mb-4`}>Автор: {author.map(author => `${author.name_ukr} ${author.surname_ukr}`).join(', ')}</p>
>>>>>>> dd4605baa5658e0dc84ecec4f7e1351e7b253354
                    <p className={`${styles.bodyRegular} mb-4 p-2 bg-[#e4e5e5] rounded-xl`}>Код товару: 1234</p>
                    <p className='flex gap-2 items-center'>
                        <img src={stock} alt="in stock" />
                        <span className={`${styles.bodyRegular} text-green`}>В наявності</span>
                    </p>
                </div>

                <button onClick={handleRemoveFromCart}>
                    <img src={trash} alt="remove item" />
                </button>
            </div>

            {/* price */}
<<<<<<< HEAD
            <div className='cart-price flex gap-8 justify-between'>

                <div className={`${styles.flexCenter}`}>
                    <button onClick={() => {
                        if (qty === 1) {
                            dispatch(removeFromCart(_id));
                        } else {
                            dispatch(decrease({ _id }));
                        }
                    }} className='flex items-center justify-center w-12 h-12'>-</button>
                    <div className='flex items-center justify-center w-8 h-8 md:w-12 md:h-12 border-solid border-[1px] border-grey rounded-lg'>{qty}</div>
=======
            <div className='cart-price flex gap-8 justify-between xl:justify-end'>

                <div className={`${styles.flexCenter}`}>

                    {/* decrease */}
                    <button onClick={() => {
                        if (qty >= 1) {
                            dispatch(decrease({ _id }));
                        } else {
                            cartItem.qty = 0;
                        }
                    }} className='flex items-center justify-center w-12 h-12'>-</button>

                        
                        {/* quantity */}
                    <div className='flex items-center justify-center w-8 h-8 md:w-12 md:h-12 border-solid border-[1px] border-grey rounded-lg'>{qty}</div>
                    
                        {/* increase */}
>>>>>>> dd4605baa5658e0dc84ecec4f7e1351e7b253354
                    <button onClick={() => {
                        dispatch(increase({ _id }));
                    }} className='flex items-center justify-center w-12 h-12'>+</button>
                </div>

<<<<<<< HEAD
                <h4 className={`flex items-center justify-center text-[20px] ${styles.subtitleMedium}`}>{price_id.original_price} грн</h4>
=======
                <h4 className={`flex items-center justify-center text-[20px] ${styles.subtitleMedium}`}>
                    {price[0].discounted_price > 0
					? `${price[0].discounted_price} грн`
					: `${price[0].original_price} грн`}</h4>
>>>>>>> dd4605baa5658e0dc84ecec4f7e1351e7b253354
            </div>

        </div>

    );
};

export default CartItem;
