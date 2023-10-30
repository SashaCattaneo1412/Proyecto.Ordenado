import React from 'react'

function Usuario() {
  return (
    <div>
      <h1>MI PERFIL</h1>
      <label className={style.labels}>
      MAIL/USUARIO <input type="name" className="form-control" id="nombre" placeholder="nombre"  onChange={(event) => s()} />;
      NOMBRE DEL RESPONSABLE<input type="name" className="form-control" id="nombre" placeholder="nombre"  onChange={(event) => s()} />;
      TELEFONO DEL RESPONSABLE<input type="name" className="form-control" id="nombre" placeholder="nombre"  onChange={(event) => s()} />;
      CONTRASEÑA<input type="name" className="form-control" id="nombre" placeholder="nombre"  onChange={(event) => s()} />;
      </label>
           <div className={style.seguimiento}>
              <label className={style.cuenta}>
                ¿Olvidaste tu contraseña?
              </label>
              <Link href="/RecuperarContraseña">Recupérala</Link> {/* Corregir la ruta */}
            </div>

        <button className={style.IR} onClick={iniciosesion}>
         Editar
        </button>
    </div>
  )
}

export default Usuario
