import { useForm } from "react-hook-form";

export default function NuevoLugar() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Nuevo lugar registrado:", data);
    alert("Lugar de recolección guardado");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
      <h2>Agregar nuevo lugar de recolección</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nombre del lugar</label>
        <input
          {...register("nombre", { required: "Campo obligatorio" })}
          placeholder="Ej: Clínica Zapopan"
          style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
        />
        {errors.nombre && <span style={{ color: "red" }}>{errors.nombre.message}</span>}

        <label>Dirección</label>
        <input
          {...register("direccion", { required: "Campo obligatorio" })}
          placeholder="Calle, número, ciudad"
          style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
        />
        {errors.direccion && <span style={{ color: "red" }}>{errors.direccion.message}</span>}

        <button type="submit"
          style={{ width: "100%", padding: "0.75rem", backgroundColor: "#2e7d32", color: "white", border: "none" }}>
          Guardar lugar
        </button>
      </form>
    </div>
  );
}