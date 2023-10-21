import { 
    Card, 
    CardHeader, 
    CardBody, 
    Heading, 
    Text, 
    Stack, 
    Box, 
    UnorderedList, 
    ListItem, 
    Center,
    Container,
 } from '@chakra-ui/react'

export default function AboutUsPage() {
    return (
        <Container marginTop={6}>
            <Card >
                <CardHeader>
                    <Heading size='md' marginBottom={6}>Sobre la app</Heading>
                    <Heading size='xs' textTransform='uppercase'>Descripción</Heading>
                    <Text>Esta aplicacion te permita llevar un listado de tareas pendientes por realizar</Text>
                </CardHeader>
            </Card>
            <Card marginTop={6} >
                <CardBody>
                    <Stack>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>Funcionalidades:</Heading>
                            <UnorderedList>
                                <ListItem>
                                    Agregar tareas
                                </ListItem>
                                <ListItem>
                                    Eliminar tareas
                                </ListItem>
                                <ListItem>
                                    Actualizar tareas
                                </ListItem>
                                <ListItem>
                                    Cambiar el estado de las tareas
                                </ListItem>
                            </UnorderedList>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>Tecnologias usadas:</Heading>
                            <UnorderedList>
                                <ListItem>
                                    React.JS
                                </ListItem>
                                <ListItem>
                                    CSS
                                </ListItem>
                                <ListItem>
                                    VITE
                                </ListItem>
                                <ListItem>
                                    Chakra UI
                                </ListItem>
                            </UnorderedList>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </Container>
    )
}