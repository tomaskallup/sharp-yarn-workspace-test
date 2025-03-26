import { Storage, StorageOptions, Bucket } from '@google-cloud/storage';
import { File as MulterFile } from '@koa/multer';
import { File as FormidableFile } from 'formidable';
import { createReadStream } from 'fs';
import sharp from 'sharp';

let storageClient: Storage;
let bucket: Bucket;

export const imageStorage = {
  /**
   * init procedure
   */
  async init() {
    if (bucket) return;
    // factory storage client
    const options: StorageOptions = {
      projectId: 'my-project',
    };
    storageClient = new Storage(options);
    bucket = storageClient.bucket('my-bucket');

    console.log('Image storage initialized!');
  },

  async getImageInfo(file: FormidableFile | MulterFile) {
    const imageReadStream = createReadStream(file.path);
    return await imageReadStream.pipe(sharp()).metadata();
  },
};
