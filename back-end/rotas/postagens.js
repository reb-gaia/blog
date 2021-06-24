const express = require('express');
const router = express.Router();
const ibmdb = require('ibm_db');

router.get('/postagens', (req, res) => {
    ibmdb.open("DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-04.services.dal.bluemix.net;UID=qtt92811;PWD=wj6dwpn8x-l4rd9f;PORT=50000;PROTOCOL=TCPIP", (err, conn) => {
        if(err) {
            return console.log(err);
        }

        conn.query('select * from QTT92811.POSTAGENS', (err, data) => {
            if(err) {
                console.log({ erro: err });
            } else {
                console.log(data);
                res.send(data);
            }
        })

        conn.close(() => {
            console.log('conexao encerrada');
        })
    });
        
});

router.get('/postagens/nova', (req, res) => {
    ibmdb.open("DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-04.services.dal.bluemix.net;UID=qtt92811;PWD=wj6dwpn8x-l4rd9f;PORT=50000;PROTOCOL=TCPIP", (err, conn) => {
        if(err) {
            return console.log({ erro: err, mensage: 'conexao falhou' });
        }

        conn.query(`INSERT INTO QTT92811.POSTAGENS (TITULO, CONTEUDO, AUTOR) values ('${req.query.titulo}', '${req.query.conteudo}', '${req.query.autor}')`, (err, data) => {
            if(err) {
                console.log({ erro: err, mensage: 'insert falhou' });
            } else {
                console.log(data);
                res.send(data);
            }
        })

        conn.close(() => {
            console.log('conexao encerrada');
        })
    });
});

module.exports = router;