const save = require('./webSave').saveAsPdf;
const cron = require('node-cron');
const express = require('express');
const app = express();

/** config */
const config = require('./config');

/** run cron job twice a day */
cron.schedule(config.cron, () => {
    save(config.page_url, config.name, config.dir).then(paths => {
        console.log(`🟢 Saved files: ${paths}`)
    })
});

module.exports = app;