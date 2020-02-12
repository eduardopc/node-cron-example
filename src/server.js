import cron from 'node-cron';
import express from 'express';
import cors from 'cors';
import https from 'https';

const app = express();
app.use(cors());

app.listen(3377);

const options = {
    count: 0,
    seconds: 2,
    url : 'https://teste123.free.beeceptor.com/',
}

cron.schedule(`*/${options.seconds} * * * * *`, async () => {
    const quote = await https.get(options.url, res => {
        res.setEncoding("utf8");
        let body = "";
        res.on("data", data => {
          body = JSON.parse(data);
          console.log(body);
        });
    });
    options.count++;
});