import Head from "next/head"
import { ReactNode } from "react"
import {Navbar} from '../ui';

export const Layout : React.FC<{children: ReactNode, title: string}> = ({children, title}) => {
    return (
        <>
            <Head>
                <title>{title || "Pokemon App"}</title>
                <meta name="author" content="Jared Zuniga" />
                <meta name="description" content={`Informacion sobre el pokemon ${title || "xxxx"}`}/>
                <meta name="keywords" content={`${title || "xxxx"}, pokemon, pokedex`} />
            </Head>

            <Navbar />
            

            <main style={{
                padding:'0px 20px'
            }}>
                {children}
            </main>
        </>
    )   
}