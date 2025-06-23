import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAutorisacion from "../hook/useAutorisacion";
import { Form, Button, Card, Alert, Modal } from "react-bootstrap";

const LoginHome = () => {

  console.log("LoginHome component is rendering");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const { login, isAuthenticat, user } = useAutorisacion();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Authenticat:", isAuthenticat)
    console.log("user:", user);

    if (isAuthenticat) {
      const rol = user?.rol?.trim();
      console.log("Redirigiendo con rol:", rol);

      if (user?.rol === "ADMINISTRATIVO" || user?.rol === "USUARIOCOMUN") {
        navigate("/home", { replace: true });

      }
    } else {
      navigate("", { replace: true });
    }
  }, [isAuthenticat, navigate, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError(""); //limpia los anteriores errores

    if (!username || !password) {
      setLoginError("Error, Ingrese un usuario y contraseña.");
      return;
    }
    const result = await login({ username, password });
    console.log("Resultado del login:", result);
    if (!result.success) {
      setLoginError(result.message || "Error de autenticacion usuario desconocido.");
    }
  };

  console.log("About to return JSX");

	return (
		<div fluid className="itemcontraseña flex justify-content-fex-end align-items-center">

			<Card className="tamaño">
				<Card.Body className="p-4">
					<Modal.Title as="h2" className="text-center mb-4">
						Iniciar Sesion
					</Modal.Title>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="ingresa tu usuario"
                value={username} onChange={(e) => setUsername(e.target.value)}
                required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="Password"
                placeholder="Contraseña"
                value={password} onChange={(e) => setPassword(e.target.value)}
                required />
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

    </div>
  )

}
export default LoginHome;
