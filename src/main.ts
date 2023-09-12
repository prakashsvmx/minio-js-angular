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

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
