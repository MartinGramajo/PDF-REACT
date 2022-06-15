import React from "react";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";
import logo from "../assets/logoPosta.png";
import barrita from "../assets/barrita.png";
import { p, p2 } from "./DocuPDFStyle";

const DocuPDF = () => {
  return (
    <Document>
      <Page
        size="A4"
        // style={{
        //   display: "flex",
        //   flexDirection: "column",
        //   justifyContent: "center",
        //   alignItems: "center",
        //   backgroundColor: "white",
        // }}
      >
        <View>
          <Image
            src={logo}
            alt="random image"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
              marginTop: "10px",
              marginLeft: "450px",
              width: "100px",
            }}
          />
        </View>
        <View>
          <Image
            src={barrita}
            alt="random image"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "100%",
              heigth: "auto",
            }}
          />
        </View>
        <View
          style={{
            fontSize: "16px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Helvetica-Bold",
              fontWeight: "bold",
            }}
          >
            PRESUPUESTO DE LA GESTION
          </Text>
        </View>

        <View style={{ marginTop: "10px" }}>
          <Text style={p2}>
            A continuación, detallo el presupuesto de gestión de carpeta que
            incluye: análisis de la documentación, coordinación de armado de
            carpeta, legalizaciones de apostilla de la Haya, traducciones al
            idioma italiano, envío postal DHL de carpeta a Roma y legalización
            de traducciones (asseverazione).
          </Text>
        </View>

        <View style={{ marginTop: "10px" }}>
          <Text style={p2}>
            El pago de presupuesto pueden realizarlo íntegramente por adelantado
            a fin de congelar tarifas y evitar futuros ajustes por actualización
            de honorarios. Si desean abonar fraccionado, le detallo cómo
            efectuar los pagos:
          </Text>
        </View>

        <View style={{ marginTop: "10px" }}>
          <Text style={p2}>
            Su carpeta consta de{" "}
            <Text
              style={{
                fontFamily: "Helvetica-Bold",
                fontWeight: "bold",
              }}
            >
              20
            </Text>{" "}
            documentos argentinos, dentro de los cuales algunos fueron enviados
            con apostilla y otros serán apostillados por nuestro estudio.
            Detallo a continuación:
          </Text>
        </View>
        <View style={{ lineHeight: "2px" }}>
          <View style={{ marginTop: "10px" }}>
            <Text
              style={{
                fontSize: "12px",
                paddingLeft: "14px",
                paddingRight: "14px",
              }}
            >
              <Text
                style={{
                  fontFamily: "Helvetica-Bold",
                  fontWeight: "bold",
                }}
              >
                {" "}
                Documento SIN Apostilla:
              </Text>
              $5000
            </Text>
            <Text
              style={{
                fontSize: "12px",
                paddingLeft: "14px",
                paddingRight: "14px",
              }}
            >
              Documentos enviados = 10
            </Text>
            <Text
              style={{
                fontSize: "12px",
                paddingLeft: "14px",
                paddingRight: "14px",
              }}
            >
              total = 10 x $5000 ={" "}
              <Text
                style={{
                  fontFamily: "Helvetica-Bold",
                  fontWeight: "bold",
                }}
              >
                $50000
              </Text>
            </Text>
          </View>
        </View>

        <View style={{ lineHeight: "2px" }}>
          <View style={{ marginTop: "10px" }}>
            <Text
              style={{
                fontSize: "12px",
                color: "#212529",
                paddingLeft: "14px",
                paddingRight: "14px",
              }}
            >
              <Text
                style={{
                  fontFamily: "Helvetica-Bold",
                  fontWeight: "bold",
                }}
              >
                Documento CON Apostilla:
              </Text>
              $4500
            </Text>
            <Text
              style={{
                fontSize: "12px",
                paddingLeft: "14px",
                paddingRight: "14px",
              }}
            >
              Documentos enviados = 10
            </Text>
            <Text
              style={{
                fontSize: "12px",
                paddingLeft: "14px",
                paddingRight: "14px",
              }}
            >
              total = 10 x $4500 ={" "}
              <Text
                style={{
                  fontFamily: "Helvetica-Bold",
                  fontWeight: "bold",
                }}
              >
                $45000
              </Text>
            </Text>
          </View>
        </View>
        <View style={{ lineHeight: "2px" }}>
          <View style={{ marginTop: "10px" }}>
            <Text
              style={{
                fontSize: "12px",
                color: "#212529",
                paddingLeft: "14px",
                paddingRight: "14px",
              }}
            >
              <Text
                style={{
                  fontFamily: "Helvetica-Bold",
                  fontWeight: "bold",
                }}
              >
                {" "}
                Legalización de traducciones (asseverazioe):
              </Text>
              20 euros por documento
            </Text>
            <Text
              style={{
                fontSize: "12px",
                paddingLeft: "14px",
                paddingRight: "14px",
              }}
            >
              Total: 10 x 20 euros ={" "}
              <Text
                style={{
                  fontFamily: "Helvetica-Bold",
                  fontWeight: "bold",
                }}
              >
                400 euros
              </Text>
            </Text>
          </View>
        </View>
        <View style={{ marginTop: "15px" }}>
          <Text
            style={{
              fontFamily: "Helvetica-Bold",
              fontWeight: "bold",
              fontSize: "12px",
              paddingLeft: "14px",
              paddingRight: "14px",
            }}
          >
            Envío postal DHL de carpeta a Roma: $9000
          </Text>
        </View>

        <View style={{ marginTop: "14px" }}>
          <Text
            style={{
              fontSize: "12px",
              paddingLeft: "14px",
              paddingRight: "14px",
            }}
          >
            La partida italiana de nacimiento no requiere legalización ni
            traducción, con lo cual no abona gestiones.
          </Text>
        </View>

        <View
          style={{
            fontSize: "12px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Helvetica-Bold",
              fontWeight: "bold",
              marginTop: "16px",
            }}
          >
            Total de gestión de carpeta $ 104.000 + euros 400
          </Text>
        </View>
      </Page>

      {/* Pagina 2  */}
      <Page size="A4">
        <View>
          <View>
            <Image
              src={logo}
              alt="random image"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
                marginTop: "10px",
                marginLeft: "450px",
                width: "100px",
              }}
            />
          </View>
          <View>
            <Image
              src={barrita}
              alt="random image"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "100%",
                heigth: "auto",
              }}
            />
          </View>
          <View
            style={{
              fontSize: "16px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Helvetica-Bold",
                fontWeight: "bold",
              }}
            >
              PLAN DE PAGOS
            </Text>
          </View>
          <View style={{ lineHeight: "2px" }}>
            <View
              style={{
                fontSize: "12px",
                Color: "#E4E4E4",
                display: "flex",
                marginLeft: "48px",
                marginTop: "20px",
              }}
            >
              <Text
                style={{
                  fontFamily: "Helvetica-Bold",
                  fontWeight: "bold",
                }}
              >
                PRIMER PAGO:
              </Text>
            </View>

            <View style={{ marginTop: "20px" }}>
              <Text style={p}>JUAN ONDETTI la suma de $40.000</Text>
              <Text style={p}>Banco Santander Rio</Text>
              <Text style={p}>Juan Eduardo Ondetti</Text>
              <Text style={p}>CBU: 0720810088000000960218</Text>
              <Text style={p}>CUIL 20332922220</Text>
            </View>
          </View>
          <View
            style={{
              fontSize: "12px",
              Color: "#E4E4E4",
              display: "flex",
              marginLeft: "48px",
              marginTop: "20px",
            }}
          >
            <Text
              style={{
                fontFamily: "Helvetica-Bold",
                fontWeight: "bold",
              }}
            >
              SEGUNDO PAGO:
            </Text>
          </View>

          <View style={{ marginTop: "20px" }}>
            <Text style={p}>ANDREA ALTARE la suma de $64.000</Text>
            <Text style={p}>
              Favor de contactar a Andrea Altare para coordinar este pago al
              siguiente email
            </Text>
            <Text style={p}>(pagamentitraduzioni@gmail.com )</Text>
          </View>

          <View
            style={{
              fontSize: "12px",
              Color: "#E4E4E4",
              display: "flex",
              marginLeft: "48px",
              marginTop: "20px",
            }}
          >
            <Text
              style={{
                fontFamily: "Helvetica-Bold",
                fontWeight: "bold",
              }}
            >
              TERCER PAGO:
            </Text>
          </View>

          <View style={{ marginTop: "20px" }}>
            <Text style={p}>
              Por último, deberán abonar al Dr. DROMI la suma de euros 400 que
              contempla la legalización de todas las traducciones en italia
              (asseverazioni). Esto lo deben abonar junto con el pago de la
              primera cuota de juicio.
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};
export default DocuPDF;
