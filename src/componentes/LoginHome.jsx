import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAutorisacion from "../hook/useAutorisacion";
import { Container,Form,Button,Card,Alert } from "react-bootstrap";

const LoginHome = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");

    const {login,  Authenticat,user} = useAutorisacion();
    const navigate = useNavigate();

    useEffect(() => {
            console.log("Authenticat:", Authenticat)
        console.log("user:", user);

        if (Authenticat) {
            if (user?.rol === "ADMINISTRATIVO") {
                navigate("/home", {replace:true});
                if (resultado.success) {
                 console.log("Redirigiendo al home");
                 navigate("/");
                }
            } else if (user?.rol === "USUARIO  ") {
                navigate("/home", {replace:true});
            } else{
                navigate("*", {replace: true});
            }
        }
    }, [Authenticat, navigate,user ]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoginError(""); //limpia los anteriores errores

        if (!username || !password) {
            setLoginError("Error, Ingrese un usuario y contraseña.");
            return;
        }
        const result = await login({username,password});
        console.log("Resultado del login:", result);
        if (!result.success) {
            setLoginError(result.message || "Error de autenticacion usuario desconocido.");
        }
    };

    return(
        <Container
            fluid className="flex justify-content-center align-items-center"
            style={{minHeight: "100vh", backgroundColor:"#f8f9fa"}}>

                <Card style={{whidth:"100%", maxwidth: "400px"}} className="tamaño">
                    <Card.Body className="p-4">
                        <Card.Title as="h2" className="text-center mb-4">
                            Iniciar Sesion
                        </Card.Title>
                        
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicUsername">
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="ingresa tu usuario"
                                    value={username} onChange={(e) => setUsername(e.target.value)}
                                    required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control
                                    type="Password"
                                    placeholder="Contraseña"
                                    value={password} onChange={(e) => setPassword(e.target.value)}
                                    required/>
                            </Form.Group>

                            {loginError && (
                                <Alert variant="danger" className="mt-3">
                                    {loginError}
                                </Alert>
                            )}

                            <Button variant="primary" type="submit" className="mt-3">
                                Iniciar Sesión
                            </Button>
                        </Form>
                    </Card.Body>

                </Card>

            </Container>
    )

}
export default LoginHome;
