import AWS from "aws-sdk";

const getSingedUrl = async () => {    
  const params = {
    Bucket: 'bucket_name',
    Key: 'file-name.pdf',
    Expires: 60 * 5
  };

  try {
    const url = await new Promise((resolve, reject) => {
      s3.getSignedUrl('getObject', params, (err, url) => {
        err ? reject(err) : resolve(url);
      });
    });
    console.log(url)
  } catch (err) {
    if (err) {
      console.log(err)
    }
  }
}
getSingedUrl()