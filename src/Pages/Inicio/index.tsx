import styles from './styles.module.css'
import { TypeAnimation } from 'react-type-animation'
import image1 from "../../assets/image1.jpeg"
import image2 from "../../assets/image2.jpeg"

import {Swiper, SwiperSlide} from "swiper/react"


const images = [image1, image2]

const games = [
    {
      "id": 1,
      "coverImage": "https://i.pinimg.com/originals/d0/8b/bd/d08bbd23315fa7a430d2d6ff2575339e.jpg",
      "title": "Super Mario Bros",
      "releaseYear": 1985,
      "description": "A classic platformer game.",
      "preco" : 10.00,
      "categporia": "teste"
    },
    {
      "id": 2,
      "coverImage": "https://cdn.mobygames.com/covers/4857336-the-legend-of-zelda-nes-front-cover.jpg",
      "title": "The Legend of Zelda",
      "releaseYear": 1986,
      "description": "A top-down adventure game.",
      "preco" : 10.00,
      "categporia": "teste"
    },
    {
      "id": 3,
      "coverImage": "https://www.hellandheavennet.com/files/final-fantasy/box-nes-us-1.jpg",
      "title": "Final Fantasy",
      "releaseYear": 1987,
      "description": "A classic role-playing game.",
      "preco" : 10.00,
      "categporia": "teste"
    },
    {
      "id": 4,
      "coverImage": "https://gamefaqs.gamespot.com/a/box/0/3/4/3034_front.jpg",
      "title": "Doom",
      "releaseYear": 1993,
      "description": "A first-person shooter game.",
      "preco" : 10.00,
      "categporia": "teste"
    },
    {
      "id": 5,
      "coverImage": "https://cdn.mobygames.com/covers/4056006-warcraft-orcs-humans-dos-front-cover.jpg",
      "title": "Warcraft",
      "releaseYear": 1994,
      "description": "A real-time strategy game.",
      "preco" : 10.00,
      "categporia": "teste"
    },
    {
      "id": 6,
      "coverImage": "https://cdn.mobygames.com/covers/5346152-starcraft-windows-front-cover.jpg",
      "title": "Starcraft",
      "releaseYear": 1998,
      "description": "A military science fiction game.",
      "preco" : 10.00,
      "categporia": "teste"
    },
    {
      "id": 7,
      "coverImage": "https://i.pinimg.com/originals/a0/d0/9c/a0d09c9cd3eb770f8f83e23744da72fc.jpg",
      "title": "Half-Life",
      "releaseYear": 1998,
      "description": "A first-person shooter game.",
      "preco" : 10.00,
      "categporia": "teste"
    },
    {
      "id": 8,
      "coverImage": "http://media.ign.com/games/image/object/002/002226/Gran-Turismo-1_PS1_US_BOX.jpg",
      "title": "Gran Turismo",
      "releaseYear": 1998,
      "description": "A driving/racing simulator game.",
      "preco" : 10.00,
      "categporia": "teste"
    },
    {
      "id": 9,
      "coverImage": "https://cdn.mobygames.com/covers/3966925-halo-combat-evolved-xbox-front-cover.jpg",
      "title": "Halo",
      "releaseYear": 2001,
      "description": "A military science fiction shooter game.",
      "preco" : 10.00,
      "categporia": "teste"
    },
    {
      "id": 10,
      "coverImage": "http://s.emuparadise.org/fup/up/150757-Kingdom_Hearts_(USA)-1.jpg",
      "title": "Kingdom Hearts",
      "releaseYear": 2002,
      "description": "An action-based role-playing game with Disney and Final Fantasy characters.",
      "preco" : 10.00,
      "categporia": "teste"
    }
  ]

export default function Inicio(){

  const precoFormatado = (preco: number) => {
    return preco.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  }
  
  return(
      <section className={styles.inicioSection}>
                
        <div className={styles.title}>
            <h2>Bem vindo à Binha Acessórios!</h2>
            <div>
              <h2 >
                <TypeAnimation
                          sequence={[
                              " Pulseiras.", 
                              1000,
                              " Colares.",
                              1000,
                              " Chaveiros.",
                              1000,
                              " Puxadores.",
                              1000,
                              " Canetas personalizadas.",
                              1000,
                              " E muito mais!",
                              1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                      />                        
              </h2>
            </div>
          <Swiper
            slidesPerView={1}
            pagination={{clickable: true}}
            navigation          
          >
           {images.map( item => (
            <SwiperSlide key={item}>
              <img
                className={styles.slideItem}
                src={item} 
                alt="Slider" />                           
            </SwiperSlide>
           ))}
          </Swiper>
                        
        </div>
        <div>
            <div className={styles.cardProdutos}>
                {games.map((game) => (
                    <div key={game.id}>
                        <img
                            className={styles.cardImage} 
                            src={game.coverImage} 
                            alt="" 
                        />
                        <h2>{game.title}</h2>
                        <p>{game.description}</p>
                        <p>{precoFormatado(game.preco)}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
  )
}