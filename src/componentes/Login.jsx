import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true);
        console.log("Datos enviados:", data);

        // Simulación de envío de datos con alerta
        setTimeout(() => {
            setLoading(false);
            alert("Inicio de sesión exitoso");
        }, 2000);
    };

    return (
        <div style={{ maxWidth: "500px", margin: "0 auto", padding: "2rem" }}>
            <h2>Iniciar sesión <br /> para solicitar un servicio</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="correo" style={{ display: "block", marginBottom: "0.5rem" }}>
                    Correo
                </label>
                <input
                    id="correo"
                    {...register("correo", { required: "El correo es obligatorio" })}
                    type="email"
                    placeholder="Ingresa tu correo"
                    style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
                />
                {errors.correo && <span style={{ color: "red", display: "block", marginBottom: "1rem" }}>{errors.correo.message}</span>}
                
                <label htmlFor="password" style={{ display: "block", marginBottom: "0.5rem" }}>
                    Contraseña
                </label>
                <input
                    id="password"
                    {...register("password", { required: "La contraseña es obligatoria" })}
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
                />
                {errors.password && <span style={{ color: "red", display: "block", marginBottom: "1rem" }}>{errors.password.message}</span>}
                
                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        width: "100%",
                        padding: "0.75rem",
                        backgroundColor: loading ? "#9e9e9e" : "#2e7d32",
                        color: "white",
                        border: "none",
                        cursor: loading ? "not-allowed" : "pointer",
                    }}
                >
                    {loading ? "Enviando..." : "Enviar"}
                </button>
            </form>
        </div>
    );
}