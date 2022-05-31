import { Button, Card, Container, Grid, Text } from "@nextui-org/react";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts";
import { Pokemon, PokemonListResponse } from "../../interfaces";
import { getPokemonInfo, localFavotires } from "../../utils ";

import confetti from 'canvas-confetti';

interface Props {
    pokemon: Pokemon
}

const PokemonByNamePage: NextPage<Props> = ({pokemon}) => {

    const [isInFavorites, setIsInFavorites] = useState(false);

    useEffect(
        ()=> {
            setIsInFavorites(localFavotires.existInFavorites(pokemon.id));
        }, []
    )

    const onToggleFavorite = () => {
        
        if (!isInFavorites) {
            confetti({
                zIndex:99,
                particleCount:100,
                spread:160,
                angle:-100,
                origin:{
                    x:1,
                    y:0
                }
        })?.then(
            () => ''
        )
        }

        localFavotires.toggleFavorite(pokemon.id);

    }

    return (
        <Layout title={pokemon.name}>
            <h1>{pokemon.name}</h1>

            <Grid.Container css={{marginTop:'5px'}} gap={2}>
                <Grid xs={12} sm={4}>
                    <Card hoverable css={{padding:'30px'}}>
                        <Card.Body>
                            <Card.Image
                            src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                            alt={pokemon.name}
                            width="100%"
                            height={200}
                            />
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header css={{display:'flex', justifyContent:'space-between'}}>
                            <Grid.Container gap={2}>
                                <Grid xs={12} md={6}  css={{display:'flex', alignItems:'center' , justifyContent:'center'}}>
                                <Text h1 transform="capitalize">
                                    {pokemon.name}
                                </Text>
                                </Grid>
                                <Grid xs={12} md={6} css={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                                <Button
                                    color="gradient"
                                    ghost={!isInFavorites}
                                    onClick={() => {
                                        onToggleFavorite();
                                        setIsInFavorites(!isInFavorites)
                                    }}
                                    >
                                        {isInFavorites ? 'En favoritos' : 'Guardar en favoritos'}
                                    </Button>
                                </Grid>
                            </Grid.Container>
                        </Card.Header>

                        <Card.Body>
                            <Text size={30}>Sprites</Text>

                            <Container direction="row" display="flex">
                                <Image
                                src={pokemon.sprites.front_default}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                                />
                                <Image
                                src={pokemon.sprites.back_default}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                                />
                                <Image
                                src={pokemon.sprites.front_shiny}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                                />
                                <Image
                                src={pokemon.sprites.back_shiny}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                                />
                            </Container>

                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>

            
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async(ctx) => {

    const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

    const pokemon151 = data.results.map(pokemon=> pokemon.name);

    return {
        paths: pokemon151.map((name) => ({
            params: {name}
        })),
        fallback:'blocking'
    }
}

export const getStaticProps : GetStaticProps = async({params}) => {

    

    const {name} = params as {name:string;};

    const pokemon = await getPokemonInfo(name);
    
    if (pokemon === null) {
        return {
            redirect:{
                destination:'/',
                permanent: false
            }
        }
    }



    return {
        props: {
           pokemon
        }
    }
}



export default PokemonByNamePage