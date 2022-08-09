/**
 * Get all databases
 */

const { CloudantV1 } = require('@ibm-cloud/cloudant');
const { IamAuthenticator } = require('ibm-cloud-sdk-core');

function main(params) {

  const authenticator = new IamAuthenticator({ apikey: params.IAM_API_KEY })
  const cloudant = CloudantV1.newInstance({
      authenticator: authenticator
  });
  cloudant.setServiceUrl(params.COUCH_URL);

  let dbList = getDbs(cloudant);
  return { dbs: dbList };
}

function getDbs(cloudant) {
    return new Promise((resolve, reject) => {
        cloudant.getAllDbs()
            .then(body => {
                resolve({ dbs: body.result });
            })
            .catch(err => {
                 console.log(err);
                reject({ err: err });
            });
    });
}
