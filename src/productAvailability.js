const request = require('request-promise-native');

const isProductAvailable = async (url) => {

    return new Promise((resolve, reject) => {
        request(url, {json: true}).then( (result) => {
            const available = result && result.ADD ? true : false;
            resolve( available );
        }).catch((error) => {
            reject(error);
        });
    });

};

module.exports = isProductAvailable;
