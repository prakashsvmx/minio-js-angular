import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import {Buffer} from 'buffer';

//@ts-ignore
import * as process from "process";
//@ts-ignore
window.process = process;
//@ts-ignore
window.Buffer = Buffer;
// import "mod-types"


import * as minio from "minio"

const mc:any = new minio.Client({
  endPoint: "play.min.io",
  port: 9000,
  useSSL: true,
  accessKey: "Q3AM3UQ867SPQQA43P2F",
  secretKey: "zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG"
})

//@ts-ignore
mc.listBuckets().then((e:any, res:any)=>{
  console.log(e, res)
})

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
