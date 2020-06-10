# web-scraping
## 🚀web scraping with cron jobs (every minute) using pupeteer

Every minute the cron job is executed and the website is saved in pdf format.

## NPM Packages
- pupeteer (for web scraping) 
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
- the url of the website you want to save
- the name of the file
```
let config = {
    page_url: 'YOUR_PAGE_URL',
    dir: 'savedData',
    name: 'FILE_NAME_BASIC'
};
```

Now, you can start the service:
```
npm start
```