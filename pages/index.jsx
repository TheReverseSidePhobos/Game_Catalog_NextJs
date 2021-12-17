import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from './../components/Layout';

export const getServerSideProps = async () => {
  
  const response = await fetch(`https://www.freetogame.com/api/games`);
  const games = await response.json();

  if (!games) {
      return{
          notFound: true,
      }
  }

  return {
      props: {games},
  }
};


export default function Home({games}) {
  const {asPath} = useRouter();

  debugger
  console.log("games: " + games);

  return (
    <Layout>
      <Head>
        <title>Game Catalog</title>
      </Head>
      <main className='main container'>
        <aside className='sidebar'>
          <h3>Collections</h3>
          <hr className='hr'/>
          <ul className='collection__list'>
            <Link href="/all-games" shallow><li className={asPath == "/all-games" ? 'activeLink' : ''}>All Games</li></Link>
            <Link href="/new-releases" shallow><li className={asPath == "/new-releases" ? 'activeLink' : ''}>New Releases</li></Link>
            <Link href="/most-played" shallow><li className={asPath == "/most-played" ? 'activeLink' : ''}>Most Played</li></Link>
          </ul>
            <h3>Filters</h3>
          <form>
            <button className='resetBtn' type='reset'>Cleare Filters</button>
            <hr className='hr'/>
            <details className='details'>
              <summary className='summary'>Available on</summary>
              <div className='summary__item'>
                <input
                  id='pc'
                  type={'checkbox'}
                  name='available-om'
                />
                <label htmlFor="pc">PC</label>
              </div>
              <div className='summary__item'>
                <input
                  id='xOne'
                  type={'checkbox'}
                  name='available-om'
                />
                <label htmlFor="xOne">Xbox One</label>
              </div>
              <div className='summary__item'>
                <input
                  id='x360'
                  type={'checkbox'}
                  name='available-om'
                />
                <label htmlFor="x360">Xbox 360</label>
              </div>
            </details>

          </form>

        </aside>
        <section className="main__section">
          <div className="table">
            <button className='resetBtn mainResetBtn' type='reset'>Cleare Filters</button>
          </div>
          <div className='game__items'>
            {games.map((game, i) => (
              <article key={i}>
                
                <Link href={`/games/${game.id}`}>
                  <a>
                    <Image className='img'
                      src={game.thumbnail}
                      width={'200px'}
                      height={'225px'}
                      alt=''
                      />
                    <h3 className='game__title'>{game.title}</h3>
                  </a>
                </Link>
              </article>
            ))}
          </div>

        </section>
      </main>
    </Layout>
  )
}
