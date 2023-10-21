import { Center, Highlight, Text } from "@chakra-ui/react";

export default function HomePage() {
    return (
        <Center h={"80vh"}>
            <Text fontSize='6xl'>
                <Highlight query={"T'DO"} styles={{ px: '6', py: '1', rounded: 'full', bg: 'teal.100' , textDecoration: 'line-through', }}>
                    Hola tu, bienvenido a T'DO
                </Highlight>
            </Text>
        </Center>
    );
}