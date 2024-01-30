import { useEffect, useRef, useState } from "react";


export const Ejemplo = () => {
    const [numeroSaludos, setNumeroSaludos] = useState(0);
    const saludosEnCola= useRef(numeroSaludos)

    useEffect(()=>{
        saludosEnCola.current = numeroSaludos
        setTimeout(() =>{
            console.log("Saludos en cola: " +saludosEnCola.current)
        }, 2000)
        
    }, [numeroSaludos])
    //evento
    const enviarSaludos = () =>{
        setNumeroSaludos(numeroSaludos+1);
        
    }
return (
    <div>
        <h1>Ejemplo con useRef</h1>

        <h2>Saludos enviados: {numeroSaludos}</h2>
        <button onClick={enviarSaludos}>Enviar Saludo</button>
    </div>
)
}
