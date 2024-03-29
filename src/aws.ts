import AWS = require('aws-sdk');
import { config } from './config/config';

const c = config.dev;

let awsMainConfig = {
  signatureVersion: 'v4',
  region: c.aws_region,
  params: {Bucket: c.aws_media_bucket}
}

console.log(`Here's the AWS config I'm using -> ${awsMainConfig}`)

export const s3 = new AWS.S3(awsMainConfig);

/* getGetSignedUrl generates an aws signed url to retreive an item
 * @Params
 *    key: string - the filename to be put into the s3 bucket
 * @Returns:
 *    a url as a string
 */
export function getGetSignedUrl( key: string ): string{

  const signedUrlExpireSeconds = 60 * 5

    const url = s3.getSignedUrl('getObject', {
        Bucket: c.aws_media_bucket,
        Key: key,
        Expires: signedUrlExpireSeconds
      });

    return url;
}

/* getPutSignedUrl generates an aws signed url to put an item
 * @Params
 *    key: string - the filename to be retreived from s3 bucket
 * @Returns:
 *    a url as a string
 */
export function getPutSignedUrl( key: string ){

    const signedUrlExpireSeconds = 60 * 5

    let putSignedUrlConfig = {
      Bucket: c.aws_media_bucket,
      Key: key,
      Expires: signedUrlExpireSeconds
    }

    console.log(`Here's the config I'm using when getting the PUT URL -> 
    ${JSON.stringify(putSignedUrlConfig)}`)

    const url = s3.getSignedUrl('putObject', putSignedUrlConfig);

    return url;
}