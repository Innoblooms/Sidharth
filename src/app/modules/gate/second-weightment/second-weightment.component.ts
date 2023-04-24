import { Component } from '@angular/core';
import {FormBuilder,FormControl, FormGroup } from '@angular/forms';
import {FloatLabelType} from '@angular/material/form-field';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import {Subject, Observable} from 'rxjs';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-second-weightment',
  templateUrl: './second-weightment.component.html',
  styleUrls: ['./second-weightment.component.scss']
})
export class SecondWeightmentComponent {
  formGroup: FormGroup | any;
  todate = new Date();
  datepickerConfig: Partial<BsDatepickerConfig>

  Weighment:any=['1','2'];

  onAdd() {
    
    alert('hello world');
  }
 
  onDelete() {
    
    alert('hello world');
  }
  onSave() {
    
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


  callingFunction(){}

  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  constructor(private _formBuilder: FormBuilder ) {
    this.datepickerConfig = Object.assign({}, { showTodayButton: true }, { dateInputFormat: 'DD/MM/YYYY' });
  }

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

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


  onSubmit(){

  }

}
