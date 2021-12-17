import Link from 'next/link';
import Head from 'next/head';

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <meta keywords='next.js'></meta>
            </Head>
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
            <div>
                {children}
            </div>
        </>
    )
}

export default Layout;
