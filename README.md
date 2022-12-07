# AWS-presigner-url
this is a repository that contains a POC for demonstrating how to use the AWS SDK to create presigned urls for objects in a private butcket


install dependences

```bash
yarn add aws-sdk mocha chai

```


```bash
 npm run test
```

or 

```bash
yarn test
```


```js

const singed = new Singed(AWS, 'BUCKET-name')
const url = await singed.getSingedUrl('file-name.pdf');
console.log(url)
```
