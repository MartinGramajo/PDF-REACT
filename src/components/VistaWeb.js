import React from "react";
import { Image } from "react-bootstrap";
import logo from "../assets/logoPosta.png";

const VistaWeb = () => {
  return (
    <div className="container">
      <div className="mt-4 d-flex justify-content-end">
        <Image className="w-25" src={logo} alt="" fluid />
      </div>

      <hr className="container" style={{ color: "blue", height: "6px" }} />
      <h1 className="pt-2 text-center"> PRESUPUESTO DE LA GESTION</h1>
      <div className="px-5">
        <p className="">
          A continuación, detallo el presupuesto de gestión de carpeta que
          incluye: análisis de la documentación, coordinación de armado de
          carpeta, legalizaciones de apostilla de la Haya, traducciones al
          idioma italiano, envío postal DHL de carpeta a Roma y legalización de
          traducciones (asseverazione).
        </p>
        <p className="">
          El pago de presupuesto pueden realizarlo íntegramente por adelantado a
          fin de congelar tarifas y evitar futuros ajustes por actualización de
          honorarios. Si desean abonar fraccionado, le detallo cómo efectuar los
          pagos:
        </p>
        <p className="">
          Su carpeta consta de 20 documentos argentinos, dentro de los cuales
          algunos fueron enviados con apostilla y otros serán apostillados por
          nuestro estudio. Detallo a continuación:
        </p>

        <p className="">
          <b> Documento SIN Apostilla:</b> $5000 <br /> Documentos enviados = 10{" "}
          <br /> Total = 10 x $5000 = <b> $50000</b>
        </p>
        <p className="">
          <b> Documento CON Apostilla:</b> $4500 <br /> Documentos enviados = 10{" "}
          <br /> Total = 10 x $4500 = <b> $45000 </b>
        </p>

        <p className="">
          {" "}
          <b>Legalización de traducciones (asseverazioe):</b> 20 euros por
          documento <br /> Total: 10 x 20 euros =<b> 400 euros</b>
        </p>
        <p className="">
          <b> Envío postal DHL de carpeta a Roma: $9000 </b>
        </p>
        <p className="">
          La partida italiana de nacimiento no requiere legalización ni
          traducción, con lo cual no abona gestiones
        </p>
        <p className="text-center">
          {" "}
          <b>Total de gestión de carpeta $ 104.000 + euros 400</b>
        </p>
      </div>

      {/* <div>
        <Image
          className="mt-4 pt-2"
          src={logo}
          alt=""
          style={{ marginLeft: "900px" }}
        />
      </div> */}
      {/* <div>
        <hr className="container" style={{ color: "blue", height: "6px" }} />
        <h1 className="pt-2 text-center"> PLAN DE PAGOS</h1>
        <div>
          <p className="col-10 pt-2 px-5 fs-5" style={{ marginLeft: "50px" }}>
            <b>PRIMER PAGO: </b> <br />
            JUAN ONDETTI la suma de $40.000
            <br />
            Banco Santander Rio
            <br />
            Juan Eduardo Ondetti
            <br />
            CBU: 0720810088000000960218
            <br />
            CUIL 20332922220
            <br />
          </p>
          <p className="" style={{ marginLeft: "50px" }}>
            <b>SEGUNDO PAGO: </b> <br />
            ANDREA ALTARE la suma de $64.000
            <br />
            avor de contactar a Andrea Altare para coordinar este pago al
            siguiente email <br />
            (pagamentitraduzioni@gmail.com )
          </p>
          <p className="col-10  px-5 fs-5" style={{ marginLeft: "50px" }}>
            <b>TERCER PAGO: </b> <br />
            Por último, deberán abonar al Dr. DROMI la suma de euros 400 que
            contempla la legalización de todas las traducciones en italia
            (asseverazioni). Esto lo deben abonar junto con el pago de la
            primera cuota de juicio
          </p>
        </div>
      </div> */}
    </div>
  );
};
export default VistaWeb;
