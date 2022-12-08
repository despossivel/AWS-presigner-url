class Singed {
    #AWS; 
    #accessKeyId;
    #secretAccessKey;
    #Bucket;
    #Expires;

    constructor(AWS, Bucket){
        this.#accessKeyId = 'AK--------------6U';
        this.#secretAccessKey = 'kz---------------------------oGp';
        this.#Bucket = Bucket;
        this.#Expires = 60 * 5;
        this.#setAccess(AWS)
    }

    #setAccess(AWS){
        this.#AWS = new AWS.S3({
            accessKeyId: this.#accessKeyId,
            secretAccessKey: this.#secretAccessKey,
            Bucket:  this.#Bucket
          })
    }

    async getSingedUrl(filekey){
          try {
            return await new Promise((resolve, reject) => 
                this.#AWS.getSignedUrl('getObject', {
                    Bucket: this.#Bucket,
                    Key: filekey,
                    Expires: this.#Expires
                }, (err, url) =>  err ? reject(err) : resolve(url)));
          } catch (err) {
            if (err)   console.log(err)
          }
        
    }

}

export default Singed;