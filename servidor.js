const express = repared('express');
const app = express();

app.use(express.static('public'));
app.listen(3000,()=>console.log('servidor web rodando na porta 3000'));