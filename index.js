const app = require('./src/app');

const port = process.env.PORT || 3412;
app.listen(port, () => 
    console.log(`🚀 started service [on port ${port}]`)
);