import Signed from "../index.js"
import AWS from "aws-sdk";
import {expect} from "chai"


describe('Signed', () => {
    let singedInstance;
    const bucket_name = 'BUCKET-name'
    const file_name = 'file-name.pdf'
    
    before('Instanced S3', async () => {
        const singed = new Signed(AWS, bucket_name)
        singedInstance = singed;
    })

    it('Check AWS domain' , async () => {

        const url = await singedInstance.getSingedUrl(file_name)

        const haves = [
            'https',
            's3.amazonaws.com',
            'https://s3.amazonaws.com/',
            `https://s3.amazonaws.com/${bucket_name}`,
            `https://s3.amazonaws.com/${bucket_name}/${file_name}`,
        ];
        haves.map((have) => expect(url).to.have.string(have))

    });


    it('Check butcket name and filename' , async () => {

        const url = await singedInstance.getSingedUrl(file_name)

        const haves = [
            bucket_name,
            file_name
        ];
        haves.map((have) => expect(url).to.have.string(have))

    });


    it('Check others params' , async () => {

        const url = await singedInstance.getSingedUrl(file_name)

        const haves = [
            'Expires=',
            'Signature='
        ];
        haves.map((have) => expect(url).to.have.string(have))

    });
 


    it('Check all url presigned' , async () => {

        const url = await singedInstance.getSingedUrl(file_name)

        const haves = [
            'https',
            's3.amazonaws.com',
            'https://s3.amazonaws.com/',
            `https://s3.amazonaws.com/${bucket_name}`,
            `https://s3.amazonaws.com/${bucket_name}/${file_name}`,
            bucket_name,
            file_name,
            'Expires=',
            'Signature='
        ];
        haves.map((have) => expect(url).to.have.string(have))

    });


});