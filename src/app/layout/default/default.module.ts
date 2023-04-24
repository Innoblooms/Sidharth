import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { DashboardService } from 'src/app/modules/dashboard.service';
import { ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';

import { GateComponent } from 'src/app/modules/gate/gate.component';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';

import { SalesComponent } from 'src/app/modules/sales/sales.component';
import { StoreComponent } from 'src/app/modules/store/store.component';

import { GateEntryComponent } from 'src/app/modules/gate/gate-entry/gate-entry.component';
import { PurchasesComponent } from 'src/app/modules/purchases/purchases.component';
import { GateOutEntryComponent } from 'src/app/modules/gate/gate-out-entry/gate-out-entry.component';
import { FirstWeightmentComponent } from 'src/app/modules/gate/first-weightment/first-weightment.component';
import { SecondWeightmentComponent } from 'src/app/modules/gate/second-weightment/second-weightment.component';
import { UnloadingComponent } from 'src/app/modules/gate/unloading/unloading.component';
import { VisitorGatePassComponent } from 'src/app/modules/gate/visitor-gate-pass/visitor-gate-pass.component';
import { RequisitionComponent } from 'src/app/modules/store/requisition/requisition.component';
import { ItemIssueAndReceiveComponent } from 'src/app/modules/store/item-receive/item-issue-and-receive.component';


import { PurchaseReturnComponent } from 'src/app/modules/purchases/purchase-return/purchase-return.component';
import { PurchaseOrderComponent } from 'src/app/modules/purchases/purchase-order/purchase-order.component';
import { PurchaseBillComponent } from 'src/app/modules/purchases/purchase-bill/purchase-bill.component';
import { IndentComponent } from 'src/app/modules/purchases/indent/indent.component';
import { GrnEntryComponent } from 'src/app/modules/purchases/grn-entry/grn-entry.component';
import { SalesOrderComponent } from 'src/app/modules/sales/sales-order/sales-order.component';
import { WorkOrderComponent } from 'src/app/modules/sales/work-order/work-order.component';
import { DailyProductionComponent } from 'src/app/modules/sales/daily-production/daily-production.component';
import { SalesInvoiceComponent } from 'src/app/modules/sales/sales-invoice/sales-invoice.component';
import { LoadingComponent } from 'src/app/modules/sales/loading/loading.component';

import { WebcamModule } from 'ngx-webcam';

import { FormsModule } from '@angular/forms';


import { ItemOpeningComponent } from 'src/app/modules/store/item-opening/item-opening.component';
import { ItemTransferComponent } from 'src/app/modules/store/item-transfer/item-transfer.component';
import { FinancialAccountingComponent } from 'src/app/modules/financial-accounting/financial-accounting.component';
import { AccountOpeningComponent } from 'src/app/modules/financial-accounting/account-opening/account-opening.component';
import { PaymentVoucherComponent } from 'src/app/modules/financial-accounting/payment-voucher/payment-voucher.component';
import { ReceiptVoucherComponent } from 'src/app/modules/financial-accounting/receipt-voucher/receipt-voucher.component';
import { JournalVoucherComponent } from 'src/app/modules/financial-accounting/journal-voucher/journal-voucher.component';
import { ContraVoucherComponent } from 'src/app/modules/financial-accounting/contra-voucher/contra-voucher.component';
import { GstVoucherComponent } from 'src/app/modules/financial-accounting/gst-voucher/gst-voucher.component';
import { BankReconciliationComponent } from 'src/app/modules/financial-accounting/bank-reconciliation/bank-reconciliation.component';
import { VoucherAdjustmentEntryComponent } from 'src/app/modules/financial-accounting/voucher-adjustment-entry/voucher-adjustment-entry.component';
import { LabTestEntryComponent } from 'src/app/modules/financial-accounting/lab-test-entry/lab-test-entry.component';
import { ItemConsumptionComponent } from 'src/app/modules/store/item-consumption/item-consumption.component';
import { QualityComponent } from 'src/app/modules/financial-accounting/quality/quality.component';

import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PurchasesComponent,
    SalesComponent,
    StoreComponent,

    GateComponent,
    GateEntryComponent,

    GateOutEntryComponent,
    FirstWeightmentComponent,
    SecondWeightmentComponent,
    UnloadingComponent,
    VisitorGatePassComponent,
    RequisitionComponent,
    ItemIssueAndReceiveComponent,
    PurchaseReturnComponent,
    PurchaseBillComponent,
    PurchaseOrderComponent,
    IndentComponent,
    GrnEntryComponent,
    SalesOrderComponent,
    WorkOrderComponent,
    DailyProductionComponent,
    SalesInvoiceComponent,
    LoadingComponent,
    ItemOpeningComponent,
    ItemTransferComponent,
    FinancialAccountingComponent,
    AccountOpeningComponent,
    PaymentVoucherComponent,
    ReceiptVoucherComponent,
    JournalVoucherComponent,
    ContraVoucherComponent,
    GstVoucherComponent,
    BankReconciliationComponent,
    VoucherAdjustmentEntryComponent,
    LabTestEntryComponent,
    ItemConsumptionComponent,
    QualityComponent


  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatIconModule,
    FlexLayoutModule,
    MatTableModule,
    MatListModule,
    MatRadioModule,
    ReactiveFormsModule,
    WebcamModule,
    FormsModule,
    BsDatepickerModule
  ],
  providers: [
    DashboardService, BsDatepickerConfig,

  ]
})
export class DefaultModule { }
