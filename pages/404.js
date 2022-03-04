import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from 'next/head'

const NotFoud = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, [])

    return ( 
        <>
    <Head>
      <title>Ninja List | 404</title>
      <meta name="keywords" content="ninjas"/>
    </Head>
        <div className="not-found">
            <h1>Ooooops...</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the <Link href="/">HomePage</Link> </p>
        </div>
        </>
     );
}
 
export default NotFoud;