import { Component, OnInit ,OnDestroy, ChangeDetectorRef, AfterViewInit, ViewChild } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import {  takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { clients } from '../Models/clients'; 
import { ClientService } from '../Services/client.service';

import {MatDialog } from '@angular/material/dialog';
import { PrimeNGConfig } from 'primeng/api';
import { DynamicTableComponent, ITableHeader } from '../dynamic-table/dynamic-table.component';
import { ClientToolbarComponent } from '../client-toolbar/client-toolbar.component';
 


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit  , AfterViewInit  {
  opened: boolean = false;
  searchText: any;
  public Clients!: clients[];
 
  

  @ViewChild('dyntab') table!: DynamicTableComponent;
  
  constructor(private clientservice: ClientService , private matDialog: MatDialog , private primengConfig: PrimeNGConfig ) {}
  ngAfterViewInit(): void {
  console.log("data",this.Clients)
    const headers = ['KUNDENID','BEZEICHNUNG', 'KUNDESEIT','VERTRAGSPARTEI_CD','LOESCH_CD','LOESCHDATUM','CRTDATUM', 'CRTUSER',
    'MUTDATUM','MUTUSER', 'PSEUDOACCOUNT_CD', 'KUNDEBESUCH','VERTRAG','PSEUDONYM','RECHTSDOMIZIL_CD',
    'KORRESPONDENZSPRACH_CD','MIT_PROFIL_CD','GEMEINSCHAFTSKONTO_CD','PIN','VERWENDUNGSZWECK',
    'IDENTIFIKATIONSART_CD','VERMOEGENSURSPRUNG_CD','VERMOEGENSURSPRUNG', 'GELDVONKONTO','BISHERIGEBETREUUNG',
    'BISHERIGEBETREUUNGSEIT', 'MANUALOPEN_CD', 'EIN_VERMOEGEN_CD','REGIONZAHLUNG_CD','EIN_VERMOEGENART_CD','SPEZ_WUENSCHE_CD','MANAGER_CD', 'RISKINDEX' , 'RISKINDEX_GUELTISEIT', 'RISKINDEX_LETZTEBERECHNUNG', 'KONTOEROEFFNUNGSART_CD',
    'RISKINDEXBERECHNEN_CD','KUNDENNATUR_CD', 'RISIKOKATEGORIE_CD', 'PEP_CD', 'SPEZIALKATEGORIE_CD',
    'NATURE_CD','NAME', 'LEDIGERNAME','VORNAME','CDPARTC', 'NATIONALITAET_CD','RISIKOLAND_CD','PERSOENLICHBEKANNT_CD','RISIKOTAETIGKEIT_CD','STEUERDOMIZIL_CD','EU_TAXSTATUS_CD','TIN','APSYS_CDROLPERSI','VERTRAGSPRACH_CD',
    'VERMOEGENSKATEGORIE_IHAG_CD', 'APSYS_INTISHS', 'APSYS_INTILGS','GESAMTVERMOEGEN_CD','COMPLIANCE_OK_CD','COMPLIANCE_OK_BEMERKUNG','COMPLIANCE_OK_DATUM','COMPLIANCE_OK_USERID','EIN_VERMOEGEN',
    'SEGMENTIERUNG_CD', 'AKTID','VALIDID','VALID_CD','VALIDUSER','ENC_SALT','BEZEICHNUNG_ENC' , 'APSYS_CDMOTIFPARTS','APSYS_CDINDUS0S','APSYS_FLAGPREAVISEXEC','APSYS_CDAVIOBISPECC',
    'APSYS_FLAGHISPERC', 'APSYS_REPAMANUC', 'APSYS_PERDEVCALC','APSYS_FLAGUKTAXC','APSYS_CDNOGAS','APSYS_STATFISCC','APSYS_FLAGFWTI','APSYS_FLAGFWTUKNRSDI', 'APSYS_FLAGFWTTAXSPEGEI','APSYS_CDFWTOPTREGULFISCANCC',
    'APSYS_CDFWTSTATREGULFISCANCC','APSYS_CDFWTOPTREGULFISCFUTC','STEUERLAND_ABGST_CD','APSYS_CDNATURES','APSYS_SHNAS','APSYS_CDPYHQDOMIS','APSYS_CDPERMI' ,'APSYS_IDRCIS','APSYS_FLAGISTTC','APSYS_DEVEVALS','APSYS_IDSTRUCS',
    'APSYS_SUIVIAGTS','APSYS_CDINDUSCSSFS','APSYS_CDINDUSBLUXS','APSYS_CDINDUSSBUBA','APSYS_CDINDUSSBNS','APSYS_GRMTEVALS','APSYS_IDPOCS','APSYS_INFO','APSYS_IDENTS','APSYS_STATUS_OPEC', 'APSYS_ERRI' , 'NATIONALITAET2_CD','NATIONALITAET3_CD',
    'VERMOEGENSURSPRUNG2_CD','VERMOEGENSURSPRUNG2', 'APPROVAL_STEP1_CD','APPROVAL_STEP1_USER','APPROVAL_STEP1_DATE','APPROVAL_STEP2_CD','APPROVAL_STEP2_USER','APPROVAL_STEP2_DATE',
    'APPROVAL_STEP3_CD','APPROVAL_STEP3_USER','APPROVAL_STEP3_DATE','APPROVAL_STEP4_CD','APPROVAL_STEP4_USER',
    'APPROVAL_STEP4_DATE','APPROVAL_STEP5_CD', 'APPROVAL_STEP5_USER','APPROVAL_STEP5_DATE','APPROVAL_STEP1_BEM','APPROVAL_STEP2_BEM',
    'APPROVAL_STEP3_BEM', 'APPROVAL_STEP4_BEM','APPROVAL_STEP5_BEM', 'APPROVAL_STEP1_ASSES_CD' ,'APPROVAL_STEP2_ASSES_CD' , 'APPROVAL_STEP3_ASSES_CD' ,'APPROVAL_STEP4_ASSES_CD' ,'APPROVAL_STEP5_ASSES_CD' ,'APPROVAL_STATUS_CD' ,'CLIENT_STATUS_CD','DISCHARGE_ORDERS_CD',
    'PRINT_SUMMARY_HOLDMAIL_ONLY_CD','EBANKING_CONTRACT_CD','EBANKING_CONTRACT_LANGUAGE_CD','APSYS_DTECHDIARYL','APSYS_MOTDIARYS','APSYS_IDTYPCLIIRSS',
    'APSYS_IDRCIQIS','APSYS_IDRCIFATCAS', 'MAILING_TARIF_TYPE_CD' ,'REGISTERED_CD','REGISTERED_MAIL_CD', 'APSYS_NBPERSCPARTIEL' ,
    'ASSET_VALUE_TIER_CD','RELATIONSHIP_TYPE_AML_CD','CB_ASSET_VALUE_TIER_CD','APPROVAL_SCORE' , 'APPROVAL_SCORE_STEPS' , 'APSYS_DTDEBPARTL','APSYS_DTFINPARTL',
    'APSYS_CDMOTIFCLOS','APSYS_CDNATURECPARTIEEMIRC','APSYS_FLAGOTHEREMIRC','APSYS_CDINDUSEMIRS','OPENED_IN_APSYS_DATE','APSYS_CDNATURECPARTIEFMIAC', 'EBANKING_CLOSED_CD','EBANKING_CLOSINGDATE','KYC_REVIEW_PROCESS_START_DATE','REMARKS' , 'TRANSACTION_BL_COUNTRY_CD' ,'CLIENTGROUP_CD' ,'RISKINDEX_CALC' ,'LAST_CALC_CRI_MUTDATUM','RISIKOKATEGORIE_CALC_CD','RISKINDEX_GROUP' ,'EST_AMOUNT_REM_WITH_MUTDATUM','GESAMTVERMOEGEN_MUTDATUM',
    'TRANSACT_BL_COUNTRY_MUTDATUM','ACCOUNTPURPOSE_MUTDATUM','APSYS_FLAGDELDATAPERSI','APSYS_DTWAITDELDATAPERSL','NAME_ENC','IN_APSYS_TEMP_ENTSPERREN_CD',
    'IN_APSYS_TEMP_ENTSP_USERID','IN_APSYS_TEMP_ENTSP_DATUM','APSYS_CDREGS','RETENTION_ON_HOLD','RETENTION_ON_HOLD_DATE',
    'RETENTION_ON_HOLD_REASON','LOGICAL_ERASURE','LOGICAL_ERASURE_DATE','LOGICAL_ERASURE_REASON','COMPLIANCE_MIN_RISK_CATEGORY',
    'COMPLIANCE_MIN_RISK_COMMENT','CLIENT_STRUCTURE_CD',
    'CLIENT_SUBSTRUCTURE_CD'].map((x,i) => ({key: x , index: i , isSelected: false} as ITableHeader))
      const data = this.Clients ;
      this.table.render(headers , data)

  }

  
  

  ngOnInit(): void { 
    this.primengConfig.ripple = true;
    this.clientservice.findAllClients().subscribe((res: clients [])=>{
      this.Clients = res;
      this.ngAfterViewInit()
    })
    console.log(this.Clients)

  }
 

transform(obj: any) {
  let result = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(obj[key]);
    }
  }
  return result;
}



}
