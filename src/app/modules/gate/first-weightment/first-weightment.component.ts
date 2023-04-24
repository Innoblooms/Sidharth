import { Component } from '@angular/core';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-first-weightment',
  templateUrl: './first-weightment.component.html',
  styleUrls: ['./first-weightment.component.scss']
})
export class FirstWeightmentComponent {
  firstForm: any = FormGroup;
  Vehicle: any = ['Weighment Entry', 'Entry'];
  Gate: any = ['01', '02', '03'];
  todate = new Date();
  datepickerConfig: Partial<BsDatepickerConfig>


  constructor() {
    this.datepickerConfig = Object.assign({}, { showTodayButton: true }, { dateInputFormat: 'DD/MM/YYYY' });
  }


  public showWebcam = true;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId: any;
  public videoOptions: MediaTrackConstraints = {
    width: { ideal: 100 },
    height: { ideal: 100 }
  };
  public errors: WebcamInitError[] = [];

  // latest snapshot
  public webcamImage: any = null;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();

  public ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });


    this.firstForm = new FormGroup({
      Vehicle: new FormControl(''),
      Gate: new FormControl(''),
      date: new FormControl(''),
      time: new FormControl(''),
      Weighmentno: new FormControl(''),
      Refno: new FormControl(''),
      Grossweight: new FormControl(''),
      purpose: new FormControl(''),
      partyName: new FormControl(''),
      tareweight: new FormControl(''),
      vehicleNo: new FormControl(''),
      remark: new FormControl(''),
      weight: new FormControl(''),
      netweight: new FormControl(''),
      Prepared: new FormControl(''),
      Modified: new FormControl(''),
      gateout: new FormControl(''),

    });

  }

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public showNextWebcam(directionOrDeviceId: boolean | string): void {
    // true => move forward through devices
    // false => move backwards through devices
    // string => move to device with given deviceId
    this.nextWebcam.next(directionOrDeviceId);
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
  }

  public cameraWasSwitched(deviceId: string): void {
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }


  submit() {

  }

  onAdd() {

    alert('hello world');
  }
  onSave() {
    alert('hello world');
  }
  onDelete() {

    alert('hello world');
  }

  onedit() {

    alert('hello world');
  }
  onForward() {

    alert('hello world');
  }
  onBackward() {

    alert('hello world');
  }
  onPrint() {

    window.print();
  }


}
