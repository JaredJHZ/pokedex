import { Link, Spacer, Text, useTheme } from "@nextui-org/react"
import NextLink from "next/link";

export const Navbar = () => {
 
    const {theme} = useTheme();

    return (
        <div style={{
            display:'flex',
            width:'100%',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'start',
            padding:'0x 20px',
            backgroundColor: theme?.colors.gray50.value
        }}>

            <NextLink href={"/"} passHref>
                <Link>
                <Text color="white" h2>P</Text>
                <Text color="white" h3>okemon</Text>
                </Link>
            </ NextLink>


            <Spacer css={{flex:1}} />

            <NextLink href={"/favorites"} passHref>
                <Link css={{marginRight:"10px"}}>
                <Text color="white">Favoritos</Text>
                </Link>
            </NextLink>

            
        </div>
    )
}