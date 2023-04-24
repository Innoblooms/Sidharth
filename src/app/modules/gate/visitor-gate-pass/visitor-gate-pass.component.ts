import { Component } from '@angular/core';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import {Subject, Observable} from 'rxjs';
import {FormBuilder,FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-visitor-gate-pass',
  templateUrl: './visitor-gate-pass.component.html',
  styleUrls: ['./visitor-gate-pass.component.scss']
})
export class VisitorGatePassComponent {


  callingFunction(){}

  hideRequiredControl = new FormControl(false);
  
  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,

  });

  constructor(private _formBuilder: FormBuilder ) {}
  public dateField = new FormControl();

  public showWebcam = true;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId: any;
  public videoOptions: MediaTrackConstraints = {
    width: {ideal: 100},
    height: {ideal: 100}
  };
  public errors: WebcamInitError[] = [];

  // latest snapshot
  public webcamImage:any = null;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();

  public ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
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

  public showNextWebcam(directionOrDeviceId: boolean|string): void {
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

  public get nextWebcamObservable(): Observable<boolean|string> {
    return this.nextWebcam.asObservable();
  }



  
  today = new Date();
  city:any =['Mumbai','Delhi'];
  Vehicale:any =['Cycle','Car'];
  pass:any =['1','2'];
  gate:any =['1','2'];

  onAdd() {
    const value = this.dateField.value;
    alert(value);
  }
  onedit() {
    const value = this.dateField.value;
    alert(value);
  }
  onDelete() {
    const value = this.dateField.value;
    alert(value);
  }
  onSave() {
    const value = this.dateField.value;
    alert(value);
  }

 
  onForward() {
    const value = this.dateField.value;
    alert(value);
  }
  onBackward() {
    const value = this.dateField.value;
    alert(value);
  }
  onPrint() {
    const value = this.dateField.value;
    alert(value);
  }

}
