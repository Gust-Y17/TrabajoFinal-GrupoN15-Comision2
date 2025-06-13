import { Row,Col,Card,Button } from "react-bootstrap"

const Home = ({productos}) => {

    return(
        <>
        <h1>PAGINA HOME</h1>
        {productos.lenght === 0 ? (
        <h2>NO HAY PRODUCTOS DISPONIBLES...</h2>) :
        <Row>
            {productos.map((prod) => (
                <Col>
                    <Card.Title>{prod.title}</Card.Title>
                    <Button variant="warning">Eliminar</Button>
                </Col>
            ))}
        </Row>
        }
    
    
             


        </>
    )
    
}
export default Home