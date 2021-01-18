const express = require("express");

//Socket
const hostname = 'localhost';
const port = 3000;

//Oggetto express
const app = express();

/*
    Provare a strutturare un webservice con express.js che ritorni informazioni su libri e autori di una certa collezione 
    (salvati in un oggetto javascript). 
    Mi aspetto di poter leggere l'elenco dei libri, l'elenco degli autori, quanti libri ha scritto un autore.
*/

const obj = {
    books: ["Anna","Nel nome del figlio","Il momento è delicato","Giochiamo","Io non ho paura",
    "Il sergente nella neve","Racconti di caccia","Amore di confine","Storia di Tonle","Le stagioni di Giacomo"],
    authors: ["Niccolò Ammaniti","Mario Rigoni Stern"],
    data: [{
        author: "Niccolò Ammaniti",
        books: ["Anna","Nel nome del figlio","Il momento è delicato","Giochiamo","Io non ho paura"]
    },
    {
        author: "Mario Rigoni Stern",
        books: ["Il sergente nella neve","Racconti di caccia","Amore di confine","Storia di Tonle","Le stagioni di Giacomo"]
    }]
}

//Richiesta senza parametri
app.get("/", (req, res) => {
    res.send("Buongiorno per tutto il giorno!!");
});

//Richiesta di tutti gli autori
app.get("/authors", (req, res)=> {
    res.send({authors: obj.authors});
})

//Richiesta di tutti i libri
app.get("/books", (req, res)=> {
    res.send({books: obj.books});
})

//Richiesta dei libri scritti da un autore
app.get("/authors/:author", (req, res)=> {
    let info = obj.data.filter((x) => {
        return x.author === req.params.author;
    })
    res.send(...info);
})

//Server in ascolto...
app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});