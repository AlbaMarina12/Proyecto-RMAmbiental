import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Registro() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true);
        console.log("Datos registrados:", data);

        // Simulación de registro de datos
        setTimeout(() => {
            setLoading(false);
            alert("Usuario registrado con éxito");
        }, 2000);
    };

    return (
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
            <h2 style={{ textAlign: "center" }}>Registrar Usuario</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="nombre" style={{ display: "block", marginBottom: "0.5rem" }}>
                    Nombre
                </label>
                <input
                    id="nombre"
                    {...register("nombre", { required: "El nombre es obligatorio" })}
                    type="text"
                    placeholder="Ingresa tu nombre"
                    style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
                />
                {errors.nombre && <span style={{ color: "red", display: "block", marginBottom: "1rem" }}>{errors.nombre.message}</span>}

                <label htmlFor="empresa" style={{ display: "block", marginBottom: "0.5rem" }}>
                    Nombre de la empresa (opcional)
                </label>
                <input
                    id="empresa"
                    {...register("empresa")}
                    type="text"
                    placeholder="Ingresa el nombre de tu empresa"
                    style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
                />

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

                <label htmlFor="direccion" style={{ display: "block", marginBottom: "0.5rem" }}>
                    Dirección
                </label>
                <input
                    id="direccion"
                    {...register("direccion", { required: "La dirección es obligatoria" })}
                    type="text"
                    placeholder="Ingresa tu dirección"
                    style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
                />
                {errors.direccion && <span style={{ color: "red", display: "block", marginBottom: "1rem" }}>{errors.direccion.message}</span>}

                <label htmlFor="telefono" style={{ display: "block", marginBottom: "0.5rem" }}>
                    Número de teléfono
                </label>
                <input
                    id="telefono"
                    {...register("telefono", { 
                        required: "El número de teléfono es obligatorio", 
                        pattern: { value: /^[0-9]{10}$/, message: "Debe ser un número válido de 10 dígitos" }
                    })}
                    type="tel"
                    placeholder="Ingresa tu número de teléfono"
                    style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
                />
                {errors.telefono && <span style={{ color: "red", display: "block", marginBottom: "1rem" }}>{errors.telefono.message}</span>}

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
                    {loading ? "Registrando..." : "Registrar"}
                </button>
            </form>
        </div>
    );
}