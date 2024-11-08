import conn from "../config/conn";

const tableObjetoImages = /*sql*/`
    CREATE TABLE IF NOT EXISTS objeto_images(
        image_id VARCHAR(60) PRIMARY KEY,
        image_path VARCHAR(255) NOT NULL,
        objeto_id VARCHAR(60) NOT NULL,
        created_at TIMESTAMP DEFAULT VALUE CURRENT_TIMESTAMP,
        updated_at  TIMESTAMP DEFAULT VALUE CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (objeto_id) REFERENCES objetos(objeto_id)
    )
`
conn.query(tableObjetoImages, (err)=>{
    if(err){
        console.error(err);
        return
    }
    console.log("Tabela [ObjetoImage] criada com sucesso!");
})