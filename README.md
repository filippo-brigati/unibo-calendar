Questo è un semplice script in nodejs che genera un file .CSV contenete l'orario delle lezioni del corso inserito.

## Unibo Calendar

Step per l'uso:

```bash
git clone https://github.com/filippo-brigati/unibo-calendar.git
# 
cd unibo-calendar
# or
node index.js
```

## Come usarlo

Per ora bisogna inserire il file contentente l'array di lezioni in modo manuale.

Per trovarlo si deve caricare la pagina del proprio corso nella sezione "orario delle lezioni" con la pagina Network aperta, una volta caricati i dati si deve cercare una richiesta di questo tipo 

```bash
https://corsi.unibo.it/laurea/InformaticaManagement/orario-lezioni/@@orario_reale_json?anno=2&curricula=&start=2023-09-19&end=2023-10-19

# l'url è composto in questo modo

https://corsi.unibo.it/laurea/{nomeCorso}/orario-lezioni/@@orario_reale_json?anno={annoInNumero}&curricula=&start={dataInizioQuery}&end={dataFineQuery}
```
una volta copiato il link e modificato le date di inizio fine in base alle proprie necessità si può replicare la chiamata su un qualsiasi programma per emulare le chiamate API, ad esempio postman, una volta salvata la risposta basterà rinominarla in 'orario-lezioni.json', inserirla nella stessa path di index.js e far partire il programma usando il comando 'node index.js'.

## Prossime Features

Questo è solamente lo script iniziale, cercherò di aggiungere altre funzioni per renderlo usabile, ad esempio un sito web con la selezione del corso e dell'anno.

Altri progetti sul [mio sito](https://filippobrigati.vercel.app/).