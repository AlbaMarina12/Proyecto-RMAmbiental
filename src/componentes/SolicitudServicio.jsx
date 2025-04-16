import { useForm } from "react-hook-form";

export default function SolicitudServicio() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Solicitud enviada:", data);
    alert("Solicitud enviada con éxito");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
      <h2>Solicitud de Recolección</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Lugar de recolección</label>
        <input
          {...register("lugar", { required: "Campo obligatorio" })}
          placeholder="Ej: Clínica Zapopan"
          style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
        />
        {errors.lugar && <span style={{ color: "red" }}>{errors.lugar.message}</span>}

        <label>Tipo de residuos</label>
        <select {...register("tipoResiduos", { required: true })}
          style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}>
          <option value="">Selecciona</option>
          <option value="biologicos">Biológicos</option>
          <option value="quimicos">Químicos</option>
          <option value="punzocortantes">Punzocortantes</option>
        </select>
        {errors.tipoResiduos && <span style={{ color: "red" }}>Campo obligatorio</span>}

        <label>Fecha solicitada</label>
        <input type="date"
          {...register("fecha", { required: true })}
          style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }} />
        {errors.fecha && <span style={{ color: "red" }}>Campo obligatorio</span>}

        <label>Comentarios</label>
        <textarea
          {...register("comentarios")}
          placeholder="Observaciones o instrucciones"
          style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
        />

        <button type="submit"
          style={{ width: "100%", padding: "0.75rem", backgroundColor: "#2e7d32", color: "white", border: "none" }}>
          Enviar solicitud
        </button>
      </form>
    </div>
  );
}