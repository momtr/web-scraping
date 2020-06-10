# web-scraping
## 🚀web scraping with cron jobs (every minute) using pupeteer

Every minute the cron job is executed and the website is saved in pdf format.

## NPM Packages
- puppeteer (for web scraping) 
- express (for server)
- node-cron (for cron jobs)

## Install

Clone this repo:
```
$ git clone https://github.com/moritzmitterdorfer/web-scraping.git
```

Install NPM packages:
```
$ npm install
```

Configuration: Open the config.js file and specify:
- *page_url* - the url of the website you want to save
- *name* - the name of the file
- *cron* - when the cron job is executed (see https://www.npmjs.com/package/node-cron)
```
const config = {
    page_url: 'PAGE_URL',
    dir: 'savedData',
    name: 'FILE_NAME_BASIC',
    cron: 'CRON_CONDITION {example: * * * * *}'
};
```

Now, you can start the service:
```
npm start
```