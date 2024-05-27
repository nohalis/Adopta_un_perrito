import MyCard from "./MyCard";
import Tags from "./Tags";

const Grilla = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <MyCard
            img="https://content.nationalgeographic.com.es/medio/2023/10/25/doberman-1_f3e49bcc_231025192836_800x800.jpg"
            title="Pepe"
            description="Tengo 1 año, soy amoroso, me gusta jugar y dormir."
            raza="Dobermann"
          />
        </div>
        <div className="col-md-4">
          <MyCard
            img="https://content.nationalgeographic.com.es/medio/2023/11/29/golden-retriever-corriendo_7a50f15e_231129131211_800x800.jpg"
            title="Lolita"
            description="Tengo 3 años, me gusta correr en el parque y jugar"
            raza="Golden retriever"
          />
        </div>
        <div className="col-md-4">
          <MyCard
            img="https://content.nationalgeographic.com.es/medio/2023/08/25/perro_adf93861_1412331876_230825124420_800x800.jpg"
            title="Rocky"
            description="Tengo 4 años, listo para llenar de alegría mi hogar."
            raza="Husky siberiano"
          />
        </div>
      </div>
    </div>
  );
};

export default Grilla;
