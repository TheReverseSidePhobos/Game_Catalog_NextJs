import Link from 'next/link';
import Head from 'next/head';

const Layout = ({children}) => {
    const year = new Date();
    return (
        <>
            <Head>
                <meta keywords='next.js'></meta>
            </Head>
            <div className="wrapper">
                <header className='header'>
                    <div className="container">
                        <Link href='/'>
                            <a className='link'>Main Page</a>
                        </Link>
                        <Link href='/about'>
                            <a className='link'>About</a>
                        </Link>
                    </div>
                </header>
                <div className='main_container'>
                    {children}
                </div>
                <footer className='footer'>
                    <div className="container">
                        <p>{year.getFullYear()} All rights reserved</p>                    
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Layout;
