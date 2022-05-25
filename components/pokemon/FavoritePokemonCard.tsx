import { Card } from "@nextui-org/react"
import { useRouter } from "next/router";

type Props = {
    id: number;
}

export const FavoritePokemonCard = ({id}:Props) => {

    const router = useRouter();

    const onFavoriteClick = () => {
        router.push('/pokemon/'+id);
    }

    return (
        <Card hoverable clickable css={{padding:10}} onClick={onFavoriteClick}>
            <Card.Image 
                src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+id+".svg"}
                width={'100%'}
                height={140}
            />
        </Card>
    )
}