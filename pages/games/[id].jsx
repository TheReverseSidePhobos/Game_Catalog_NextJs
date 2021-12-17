import { useRouter } from "next/router";
import Head from 'next/head';

const Game = ({game}) => {
    const router =  useRouter();
    const id = router.query.id;
debugger
    console.log(game);
    const {description, genre, developer, release_date, platform, minimum_system_requirements} = game;

    return (
        <>
            <Head>
                <title>{game.title}</title>
            </Head>
            <div className="game_wrapper">
                <div className="container game">
                    <div className='game_pic'>
                        <img src={game.thumbnail} alt={game.title}/>
                    </div>
                    <div className='description'>
                        <h1>{game.title}</h1>
                        <p>{description}</p>
                        <p>Genre: {genre}</p>
                        <p>Game was developped by: {developer} in {release_date}</p>
                        <p>This game for {platform} platform</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Game;

export async function getServerSideProps({params}){

    const response = await fetch(`https://www.freetogame.com/api/game?id=${params.id}`);
    const game = await response.json();

    return{
        props: {game}
    }
}