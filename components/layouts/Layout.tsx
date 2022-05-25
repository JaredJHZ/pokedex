import Head from "next/head"
import { ReactNode } from "react"
import {Navbar} from '../ui';

export const Layout : React.FC<{children: ReactNode, title: string}> = ({children, title}) => {
    
    const origin = (typeof window === 'undefined') ? '' : window.location.origin;
    
    
    return (
        <>



            <Head>
                <title>{title || "Pokemon App"}</title>
                <meta name="author" content="Jared Zuniga" />
                <meta name="description" content={`Informacion sobre el pokemon ${title || "xxxx"}`}/>
                <meta name="keywords" content={`${title || "xxxx"}, pokemon, pokedex`} />
            
                <meta property="og:title" content={"Informacion sobre "+title} />
                <meta property="og:description" content={"Esta es la pagina sobre " + title} />
                <meta property="og:image" content={origin+"/img/banner.png"} />

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