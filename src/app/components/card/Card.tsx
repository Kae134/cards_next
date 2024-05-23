import style from './Card.module.css'
import Image from 'next/image'
import Pedro from '@/public/images/pedro.jpeg'

function BottomTopCard() {
    return (
        <div className={style.bottom_top_card}>
            <div className={style.top}>
                <h3 className='type'>type</h3>
                <h1 className='cost'>cost</h1>
            </div>
                <h1 className='name'>nom</h1>
        </div>
    )
}

function Description() {
    return (
        <div className={style.description}>
            description
        </div>
    )
}

function Card() {

    const style_image = {
        borderRadius: "16px",
        height: "20rem",
        width: "20rem",
    };

    return (
        <div className={style.card}>
            <Image 
                src={Pedro}
                style={style_image}
                alt='pedro'
            ></Image>
            <div className={style.bottom}>
                <BottomTopCard />
                <Description /> 
            </div>
        </div>
    )
}


export default Card