import { Card,Row,Col,Container} from "react-bootstrap"
import "../estilos/About-US.css" 
const About = () => {
    return (

        <Container>
            <h1>INTEGRANTES GRUPO 15</h1>
    
       <Row>
           <Col md={3}>
               <Card  className="cardt" >
                        <Card.Img variant="top" src="../public/estudiante.png" />
                       <Card.Title>URIEL ZAMBRANO</Card.Title>
                       <Card.Link href="https://github.com/Zamu-ai">GIT: Zamu-ai</Card.Link>
               </Card>
           </Col>
            <Col md={3}>
               <Card className="cardt" >
                     <Card.Img variant="top" src="../public/estudiante.png" />
                       <Card.Title>FELIPE QUIROGA </Card.Title>
                       <Card.Link href="https://github.com/ElFelixxx">GIT: FelixxxDogg</Card.Link>
                </Card> 
             </Col>
            <Col md={3}>
               <Card className="cardt" >
                         <Card.Img variant="top" src="../public/estudiante.png" />
                       <Card.Title>GUSTAVO GRABIEL</Card.Title>
                       <Card.Link href="https://github.com/Gust-Y17">GIT: Gust-Y17</Card.Link>
               </Card>
           </Col>
           <Col md={3}>
               <Card className="cardt" >
                         <Card.Img variant="top" src="../public/estudiante.png" />
                       <Card.Title>JUAN PONZETTI</Card.Title>
                       <Card.Link href="https://github.com/JuanPoNZEtti">GIT: JuanPoNZEtti </Card.Link>
               </Card>
           </Col>
           
       </Row>
        </Container>
       
    )
}
export default About
