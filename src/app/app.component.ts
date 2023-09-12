import { Component } from '@angular/core';
import * as minio from "minio"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'minio-js-angular';
  file: any;

  onFilechange(event: any) {
    console.log(event.target.files[0])
    this.file = event.target.files[0]
  }

  upload() {

    const filea = this.file
    if (filea) {


      const mc: any = new minio.Client({
        endPoint: "play.min.io",
        port: 9000,
        useSSL: true,
        accessKey: "Q3AM3UQ867SPQQA43P2F",
        secretKey: "zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG"
      })

      //@ts-ignore
      mc.listBuckets().then((e: any, res: any) => {
        console.log(e, res)
      })


      function uploadFile() {

        const fileReader = new FileReader();
        fileReader.onload = async function (evt: any) {
          if (evt.target.readyState === FileReader.DONE) {
            // Get the unsigned 8 bit int8Array (ie Uint8Array) of the 600 bytes (this looks like '[119,80,78,71...]'):
            const uint = new Uint8Array(evt.target.result);
            await mc.putObject("test-public-bucket", filea.name, Buffer.from(uint), {
              "Content-Type": filea.type,
              "X-Amz-Meta-App": "SPH-REACT-JS"
            });
          }
        };
        fileReader.onerror = function () {
          fileReader.abort();
        };
        fileReader.readAsArrayBuffer(filea);

      }

      uploadFile()



      console.log("File Selected...")
    } else {
      alert("Please select a file first")
    }


  }
}

export default AppComponent