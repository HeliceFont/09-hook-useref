import { useRef } from "react"


export const Formulario = () => {
    const nombreValue = useRef()
    const apellidoValue = useRef()
    const emailValue = useRef()
    const miCaja = useRef()

    const mostrar = e =>{
        // prevent defautl para que no recarge la página web al enviar el formulario
        e.preventDefault()
        console.log(nombreValue.current.value)
        console.log(apellidoValue.current.value)
        console.log(emailValue.current.value)

        //mi caja
        console.log(miCaja)
        let {current: caja }= miCaja
        caja.classList.add("fondoVerde")
        caja.innerHTML= "Formulario Enviado!"
    }
return (
    <div>
        <h1>Formulario</h1>

        <div ref={miCaja} className="miCaja">
            <h2>Pruebas con useRef</h2>
        </div>

        <form onSubmit={mostrar} >
            <input type="text" placeholder="Nombre" ref={nombreValue} /> <br />
            <input type="text" placeholder="Apellidos" ref={apellidoValue} /> <br />
            <input type="email" placeholder="Email" ref={emailValue} /> <br />
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}
