import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialComponent } from './financial/financial.component';
import { DefaultComponent } from './layout/default/default.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AccountOpeningComponent } from './modules/financial-accounting/account-opening/account-opening.component';
import { BankReconciliationComponent } from './modules/financial-accounting/bank-reconciliation/bank-reconciliation.component';
import { ContraVoucherComponent } from './modules/financial-accounting/contra-voucher/contra-voucher.component';
import { FinancialAccountingComponent } from './modules/financial-accounting/financial-accounting.component';
import { GstVoucherComponent } from './modules/financial-accounting/gst-voucher/gst-voucher.component';
import { JournalVoucherComponent } from './modules/financial-accounting/journal-voucher/journal-voucher.component';
import { LabTestEntryComponent } from './modules/financial-accounting/lab-test-entry/lab-test-entry.component';
import { PaymentVoucherComponent } from './modules/financial-accounting/payment-voucher/payment-voucher.component';
import { QualityComponent } from './modules/financial-accounting/quality/quality.component';
import { ReceiptVoucherComponent } from './modules/financial-accounting/receipt-voucher/receipt-voucher.component';
import { VoucherAdjustmentEntryComponent } from './modules/financial-accounting/voucher-adjustment-entry/voucher-adjustment-entry.component';

import { FirstWeightmentComponent } from './modules/gate/first-weightment/first-weightment.component';
import { GateEntryComponent } from './modules/gate/gate-entry/gate-entry.component';
import { GateOutEntryComponent } from './modules/gate/gate-out-entry/gate-out-entry.component';

import { GateComponent } from './modules/gate/gate.component';
import { SecondWeightmentComponent } from './modules/gate/second-weightment/second-weightment.component';
import { UnloadingComponent } from './modules/gate/unloading/unloading.component';
import { VisitorGatePassComponent } from './modules/gate/visitor-gate-pass/visitor-gate-pass.component';
import { GrnEntryComponent } from './modules/purchases/grn-entry/grn-entry.component';
import { IndentComponent } from './modules/purchases/indent/indent.component';
import { PurchaseBillComponent } from './modules/purchases/purchase-bill/purchase-bill.component';
import { PurchaseOrderComponent } from './modules/purchases/purchase-order/purchase-order.component';
import { PurchaseReturnComponent } from './modules/purchases/purchase-return/purchase-return.component';
import { PurchasesComponent } from './modules/purchases/purchases.component';
import { DailyProductionComponent } from './modules/sales/daily-production/daily-production.component';
import { LoadingComponent } from './modules/sales/loading/loading.component';
import { SalesInvoiceComponent } from './modules/sales/sales-invoice/sales-invoice.component';
import { SalesOrderComponent } from './modules/sales/sales-order/sales-order.component';
import { SalesReturnComponent } from './modules/sales/sales-return/sales-return.component';

import { SalesComponent } from './modules/sales/sales.component';
import { WorkOrderComponent } from './modules/sales/work-order/work-order.component';
import { ItemConsumptionComponent } from './modules/store/item-consumption/item-consumption.component';
import { ItemOpeningComponent } from './modules/store/item-opening/item-opening.component';
import { ItemIssueAndReceiveComponent } from './modules/store/item-receive/item-issue-and-receive.component';
import { ItemTransferComponent } from './modules/store/item-transfer/item-transfer.component';
import { RequisitionComponent } from './modules/store/requisition/requisition.component';
import { StoreComponent } from './modules/store/store.component';
import { UtilityComponent } from './modules/utility/utility.component';
import { MasterComponent } from './modules/master/master.component';
import { TermAndConditionComponent } from './term-and-condition/term-and-condition.component';



const routes: Routes = [
 
  
  {
    path: 'login',
    component: LoginComponent
   
  },
  {
    path: 'financial',
    component: FinancialComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: '',
    component: DefaultComponent,


    children: [{
      path: 'dashboard',
      component: DashboardComponent
    },

    {
      path: 'term',
      component:TermAndConditionComponent
    },

    {
      path: 'purchases',
      component: PurchasesComponent
    },

    {
      path: 'purchases/grn',
      component: GrnEntryComponent
    },
    {
      path: 'purchases/indent',
      component: IndentComponent
    },
    {
      path: 'purchases/purcasebill',
      component: PurchaseBillComponent
    },
    {
      path: 'purchases/purchaseorder',
      component: PurchaseOrderComponent
    },
    {
      path: 'purchases/purchasereturn',
      component: PurchaseReturnComponent
    },

    {
      path: 'sales',
      component: SalesComponent
    },

    {
      path: 'sales/loading',
      component: LoadingComponent
    },

    {
      path: 'sales/salesinvoice',
      component: SalesInvoiceComponent
    },
    {
      path: 'sales/salesorder',
      component: SalesOrderComponent
    },

    {
      path: 'sales/salesreturn',
      component: SalesReturnComponent
    },

    {
      path: 'sales/workorder',
      component: WorkOrderComponent
    },

    {
      path: 'sales/dailyproduction',
      component: DailyProductionComponent
    },



    {
      path: 'store',
      component: StoreComponent
    },

    {
      path: 'store/issueandreceive',
      component: ItemIssueAndReceiveComponent
    },

    {
      path: 'store/requisition',
      component: RequisitionComponent
    },

    {
      path: 'store/itemopening',
      component: ItemOpeningComponent
    },

    {
      path: 'store/itemconsumption',
      component: ItemConsumptionComponent
    },

    {
      path: 'store/itemtransfer',
      component: ItemTransferComponent
    },

    //  

    {
      path: 'gate',
      component: GateComponent
    },

    {
      path: 'gate/gateentry',
      component: GateEntryComponent
    },

    {
      path: 'gate/gateoutentry',
      component: GateOutEntryComponent
    },
    {
      path: 'gate/first',
      component: FirstWeightmentComponent
    },
    {
      path: 'gate/second',
      component: SecondWeightmentComponent
    },
    {
      path: 'gate/unloading',
      component: UnloadingComponent
    },
    {
      path: 'gate/visitorpass',
      component: VisitorGatePassComponent
    },

    {
      path: 'financialaccounting',
      component: FinancialAccountingComponent
    },
    {
      path: 'accountopening',
      component: AccountOpeningComponent
    },
    {
      path: 'paymentvoucher',
      component: PaymentVoucherComponent
    },
    {
      path: 'receiptvoucher',
      component: ReceiptVoucherComponent
    },
    {
      path: 'journalvoucher',
      component: JournalVoucherComponent
    },
    {
      path: 'contravoucher',
      component: ContraVoucherComponent
    },
    {
      path: 'gstvoucher',
      component:GstVoucherComponent
    },
    {
      path: 'bankreconciliation',
      component: BankReconciliationComponent
    },
    {
      path: 'voucheradjustmententry',
      component: VoucherAdjustmentEntryComponent
    },
    {
      path: 'quality',
      component: QualityComponent
    },
    {
      path: 'labtestentry',
      component: LabTestEntryComponent
    },
    {
      path: 'utility',
      component: UtilityComponent
    },
    {
      path: 'master',
      component:MasterComponent 
    },

    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
