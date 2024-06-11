
let availableKeywords = [
'ADVISA', 'A3SR01', 'ADVISA SR', 'ADVISA DR', 'A2DR01','ENSURA','EN1DR01','EN1SR01','AZURE XT DR','W1DR01','AZURE','W1SR01','W3SR01','W3DR01','PERCUFLEX PLUS','PERCUFLEX','YASARGIL','SUGITA', 'MIZUHO','VIRTUOSO','D154AWG','NEVRO','SENZA','NIPG1000','NIPG1500','NIPG2000','NIPG2500','1000','1500','2000','2500','MICRA VR', 'MICRA','MC1VR01', 'MICRA AV','MC1AVR1','ATTESTA DR','ATDR01','ATTESTA L DR','ATDRL1','ATTESTA S DR', 'ATDRS1','ATTESTA SR','ATSR01','RESTORE','37712', 'SPHERA SR','SPSR01','SPHERA DR','SPDR01','SPHERA L DR','SPDRL1','SPDRL1','SPHERA','ASTRA','REVO','RVDR01','COBALT XT','DVPA2D1','DVPA2D4' ,'DDPA2D1', 'DDPA2D4','DVPB3D1','DVPB3D4','DDPB3D1','COBALT','DDPB3D4','CROME','DVPC3D4','DVPC3D1','DDPC3D4','DDPC3D1', 'PRIMO','DDMD3D1','DDMD3D4','DVMD3D1','DVMDD3D4','MIRRO', 'DVME3D1','DVME3D4','DDME3D1','DDME3D4','VISIA AF','DVFB1D1', 'DVFB1D1','DVFB1D4','DVFC3D1', 'DVFC3D4','VISIA','EVERA XT','DDMB1D4','DVMB1D4','DDMB1D1','DVMB1D1','DVMB1D1','DDMC3D4','DDMC3D1', 'DVMC3D1','DVMC3D4','CLARIA','DTMA1QQ','DTMA1Q1','DTMA1D4','DTMA1D1','AMPLIA','DTMB1QQ', 'DTMB1Q1','DTMB1D4','DTMB1D1', 'COMPIA','DTMC1QQ','DTMC1D1','DTMCC1D1','PERCEPTA','W4TR01','W1TR01','SERENA', 'W4TR02','W1TR02','SOLARA','W4TR03','W1TR03','LINQ11','LINQ22','LNQ11', 'LNQ22','REVEAL','9529','ACTIVA','37601','37603','37612','37602','SOLETRA','7426','PRIME ADVANCED','97702','97715', '97716','977005', '977006', '97712','97713','97714','37701','37702','37703','37704','37711','37712', '37713','37714','7479', '7479B','7427','7427V','KINETRA','7428','PERCEPT PC','B35200','OPTIMA COIL','BARRICADE COIL','PENUMBRA COIL','SPETZLER TITANIUM ANEURYSM CLIP', 'OPTION ELITE','AXONICS','1101','4101','VANTA','977006','ITREL 4','37704', '37703', 'ITREL 3','7425','RESTORE SENSOR','37714','RESTORE ULTRA','97712','RESTORE ADVANCED','97713','97714','37711', 'RESTORE','MEDTRONIC SYNERGY','7427','VERSITREL','7427V','MEDTRONIC NEUROSTIMULATOR','7427V','AMS 800','AMS 700','INTERSTIM','3023','3058', '97810','97800','7427T','ENITRA','EVITY','ENTICOS','EDORA','INSPIRE','3028','3024','ACTICOR 7 DR-T','ACTICOR 7 VR-T','BIOMONITOR 3M','INVENTRA 7 VR-T DX','RIVACOR 7 VR-T','RIVACOR 7 DR-T','ACTICOR 7','AVEIR','ASSURITY','LSP112V','LSP202V','LSP201A','PM1272','PM2272','ENDURITY','PM1172','PM2172','ACCENT','PM1224','PM2218','QUADRA ALLURE','PM3542','QUADRA ALLURE MP','PM3562','ELLIPSE','CD1311-36Q','CD1311','ELLIPSE','CD1411-36Q','CD1311','CD1411-36Q','CD1411-36QC','CD1411','CD2311-36Q','CD2311','CD2411-36Q','CD2411-36QC','CD2411','CODMAN CERTAS','CODMAN HAKIM','CODMAN','FORTIFY ASSURA','CD1357-40Q','CD1357-40QC','CD2357-40Q','CD2357-40QC','CD2357','QUADRA ASSURA','CD3365-40Q','CD3365-40QC','CD3365','CD3369-40Q','CD3369-40QC','CD3369','PROCLAIM XR','3660','3662','ESSURE','INGENIO', 'K173','PROCLAIM','3662', 'PROCLAIM DRG','3664','PROTEGE','3771','3772','INFINITY 5','INFINITY 7','LIBERTA RC','62400','6660',' 7','6662','GALLANT','CDVRA500Q','CDHFA500Q','VITALIO','K275','K277','L110','L111','L131','L210','ESSENTIO','PROPONENT','L211','L231','ACCOLADE','L310','L311','L331','VALITUDE','U128','VISIONIST','U228','EMBLEM','A219','PRECISION MONTAGE MRI','SC-1200','SC1200','PRECISION SPECTRA','SC-1132','SC1132','SPECTRA WAVEWRITER','SC-1160','SC1160','WAVEWRITER','SC-1232','SC-1216','SC-1432','SC-1416','ADAPTA','ADDR01','ADDR03','ADDRO6','ADDRS1','VERSA','SENSIA','VEDR01','SEDR01','SEDRL1','SED01','SESR01','SES01','RELIA','REDRO1','RED01','RESR01','RES01','REVDD01','AVANT','NEUTRINO','CDVRA700Q','CDDRA700Q','CDVRA800Q','CDVRA600Q','CDDRA800Q','CDDRA600Q','CDHFA700Q','CDHFA800Q','CDHFA600Q','ENTRANT','CDVRA300Q','CDDRA300Q','CDHFA300Q','WATCHMAN','AMPLATZER','PFO OCCLUDER','UROLIFT','PIPELINE','WAVECREST','VILIGANT','D220','D221','D232','D233','G248','G247','SYNCHRONY 2','MI1250','MI1200','MED-EL CONCERT','MI1000','SONATA','PULSAR','C40+','C40','ASSURANCE CLIP','RHYTHMLINK','RESOLUTION CLIP','MIRENA','VIVISTIM','1001','KURZ','VIGILANT','G228','G248','G237','G237','G224','G225','AUTOGEN','G166','G168','G160','G161','G168','DYNAGEN','G156', 'G158','G150','G151','INOGEN','G146','G148','G140','G141','MOMENTUM','G128','G138','G124','G125','ORIGEN','G056','G058','G050','G051','RESONATE','G524','G525','G528','G548','G537','G547','G428','G448','G437','G447','G424','G425','D160','D161','D162','D163','D150','D151','D152','D020','D021','D153','D022','D023','D140','D141','D142','D143','G146','G148','G140','D013','D051','D052','D053','D000','G058','G050','D001','D002','D003','PERCIVA','D500','D501','D512','D513','D400','D401','D412','D413','D520','D521','D532','D533','D420','D421','D432','D433','D220','D221','D232','D233','MEDTRONIC STRATA','MEDTRONIC STRATA 2','COCHLEAR','CI632','C1632','CI624','C1624','CI622','C1622','CI612','C1612','CI532','C1532','CI522','C1522','CI512','C1512','ABI541','AB1541','CI422','C1422','CI24REH','CI24RECA','C124REH','C124RECA','CI24REST','C124REST','ABI24M','AB124M','CI24R','C124R','CI24M','C124M','CI11+11+2M','CI22M','C122M','ADVANCED BIONICS','HIRES ULTRA 3D','NUCLEUS','OSIA','BAHA','VISTAFIX','BOSTON SCIENTIFIC WALLFLEX','PROGAV 2.0','GORE','GORE TAG','GORE VIABIL','GORE CARDIOFORM','GORE EXCLUDER','GORE VIABAHN','GORE VIATORR','GORE BIO-A','GORE TEX','LOCKADO','DM3500','CONFIRM RX','BOSTON SCIENTIFIC SYNERGY XD','BOSTON SCIENTIFIC SYNERGY MONORAIL','AXIOS','KYLEENA','ALTO','6XX','612-001L','GRACE MEDICAL','8637','8626','8627','8615','8616','8617','8616','8472','ABBOTT MITRA CLIP','ABBOTT MITRA CLIP G4','BIOMONITOR 3','436066','6660','6662','6170','6171','6172','6173','6371','6372','IMPULSE DYNAMICS','OPTIMIZER','HYDRUS MICROSTENT','FOOO22','LIVANOVA','103','105','106','1000','DEMIPULSE','ASPIREHC','ASPIRESR','SENTIVA','102','PULSE DUO','102R','100C','101','100B','COLOPLAST','GENESIS','ACU-FORM','MALLEABLE','TITAN','ALPHA 1','MARK 2','EXCEL','CORDIS','PALMAZ GENESIS','PG295P','PG395P','BOSTON SCIENTIFIC WALLSTENT','BOSTON SCIENTIFIC EXPRESS SD RENAL', 'BOSTON SCIENTIFIC EXPRESS LD ILIAC','BOSTON SCIENTIFIC EXPRESS LD BILIARY','BOSTON SCIENTIFIC WALLGRAFT','BOSTON SCIENTIFIC CAROTID WALLSTENT','BOSTON SCIENTIFIC EPIC','BOSTON SCIENTIFIC WALFLEX','BOSTON SCIENTIFIC SENTINOL','BOSTON SCIENTIFIC GREENFIELD','BOSTON SCIENTIFIC TITANIUM GREENFIELD','BOSTON SCIENTIFIC INNOVA','ABSOLUTE PRO','OMNILINK ELITE','LUX-DX','LUX-DX 2','M301','M302','M312','638R','638B','638RL32','638RL','MEDTRONIC ANNULOPLASTY RING','ANGELMED GUARDIAN','RESOLUTE INTEGRITY','EDWARDS SAPIEN 3','9600CM20A','9600CM23A','9600CM26A','9600CM29A','9600TFX','PROMUS ELITE','BAROSTIM','2100','2102','2104','ONYX','ONYX HD-500','ENTERRA','3116','ENTERRA II','37800','MCA GEM COUPLER','SYNOVIS MICRO COMPANY','ONYX FRONTIER','XIENCE SKYPOINT','XIENCE SIERRA','XIENCE PRIME','ALIZEA DR','ALIZEA SR','CELEA DR','CELEA SR','COSMOS PLATINUM COILS','HYDROFRAME COIL','MICROPLEX COIL','HYDRO COIL','MICROPORT','MEDTRONIC RESOLUTE ONYX','BIOMONITOR 2','BIOMONITOR 4','BIOMONITOR','LP COIL','RUBY COIL','PENUMBRA POD SYSTEM','MEDTRONIC EVOLUT TAVR','BOSTON SCIENTIFIC VENOUS WALLSTENT','BOSTON SCIENTIFIC CAROTID WALLSTENT','Carpentier-Edwards aortic and mitral bioprostheses','2625','6625','2650','6625LP','6625-ESR-LP','4300','2700','2700TFX','2700','2800TFX','3000','3000TFX','3300TFX','6900','6900P','6900PTFX','7000','7000TFX','7200TFX','7300TFX','8300AB','11500A','11060A','11400M','9000','9000TFX','9000PHV','9300TFX','9600TFX','9750TFX','9755RSL','14000RSL','TMV3040B','9650TMV','BOSTON SCIENTIFIC VERCISE GENUS','DB‑1408','DB‑1416','DB‑1432','DB‑1216','DB‑1232','DB-1200-S','CG FUTURE','9850TMV','9850EV44','9850EV48','9850EV52','9850EV56','20000IS','20000ISM','9551S','29AP4045','9600TFX','9770DDS','9780DDS','9680DSC','9680TFX29M','9880DDS','9880TFX29M','CDVRA500Q','CDDRA500Q','CDHFA500Q','BRAVO',' 2','SYNCHROMED 2','SYNCHROMED 3','8667','CODMAN CERELINK ICP','CODMAN MICROSENSOR ICP','ABBOTT AMULET LEFT ATRIAL APPENDAGE OCCLUDER','REMUNITY PUMP FOR REMODULIN','B35300','EV3 EVERFLEX PERIPHERAL STENT','EV3 PROTEGE EVERFLEX  BILIARY STENT','EV3 PROTEGE EVERFLEX PERIPHERAL STENT','ABBOTT SJM REGENT MECHANICAL HEART VALVES','ABBOTT SJM STANDARD AND MASTERS SERIES MECHANICAL HEART VALVES','ABBOTT BIOCOR STENTED TISSUE VALVES','ABBOTT EPIC STENTED TISSUE VALVES','ABBOTT TRIFECTA TISSUE VALVES','ABBOTT SJM RIGID SADDLE ANNULOPLASTY RINGS','ABBOTT SJM SEMI-RIGID ANNULOPLASTY RINGS','ABBOTT ATTUNE FLEXIABLE ADJUSTABLE ANNULOPLASTY RINGS','ABBOTT SJM TAILOR FLEXIBLE ANNULOPLASTY RINGS', 'ABBOTT SJM TAILOR FLEXIABLE ANNULOPLASTY BAND','977117','977118','977119','ETERNA','32400','NEXPLANON CONTRACEPTIVE IMPLANT','BOSTON SCIENTIFIC ADVANIX BILIARY STENT','SCLERAL BUCKLE','BOSTON SCIENTIFIC FIBERED IDC','BOSTON SCIENTIFIC INTERLOCKING DETACHABLE COIL','BOSTON SCIENTIFIC VORTX COIL','BOSTON SCIENTIFIC VORTX DIAMOND COIL','BOSTON SCIENTIFIC MULTILOOP COIL','BOSTON SCIENTIFIC COMPLEX HELICAL COIL','BOSTON SCIENTIFIC 2D HELICAL COIL','BOSTON SCIENTIFIC FIBERED PLATINUM COIL','STRYKER HOFFMANN 2','STRYKER HOFFMANN 3','STRYKER HOFFMANN LRF','PARAGARD IUD'
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("implant");

inputBox.onkeyup = function(){
  let result = [];
  let input = inputBox.value;
  if(input.length){
    result = availableKeywords.filter((keyword)=>{
     return keyword.toLowerCase().includes(input.toLowerCase());
    });

}
display(result);

if(!result.length){
  resultsBox.innerHTML = '';
}
}

function display(result){
  const content = result.map((list)=>{
    return "<li onclick=selectInput(this)>" + list.toLowerCase() + "</li>";
  });

   resultsBox.innerHTML = "<ul>" + content.join('') + "<ul>";
}


function selectInput(list){
  inputBox.value = list.innerHTML; 
  resultsBox.innerHTML = '';
}

/*End of auto search---------------------------------------*/


/* Open when someone clicks on the span element */

/*function openNav() {
document.getElementById("myNav").style.width = "70%";
}*/

function openNav(){
   var nav = document.getElementById('myNav');
   if(window.innerWidth > 700){
      nav.style.width="40%";
   }else{
      window.innerWidth < 700;
      nav.style.width="80%";
   }
}

window.addEventListener('onclick', openNav);
  


/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}



/*---------------------------------------------------------------------------*/

function implantLookup(){
  let implantInput = document.getElementById('implant');
  let pacerValue = implantInput.value;
  


  if(pacerValue.toUpperCase() === 'ADVISA SR' || pacerValue.toUpperCase() === 'A3SR01' || pacerValue.toUpperCase() === 'ADVISA' || pacerValue.toUpperCase() === 'ADVISA DR' || pacerValue.toUpperCase() === 'A2DR01'){
     
 window.open('https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_235435.pdf', '_blank' );



/*Implant alert page----------------------------------------------*/
 }else if(pacerValue.toUpperCase() === 'ENSURA' || pacerValue.toUpperCase() === 'EN1DR01'|| pacerValue.toUpperCase() === 'EN1SR01'){ 
  window.open('../implantGuides/ensura.html', '_blank');




 }else if(pacerValue.toUpperCase() === 'AZURE XT DR' || pacerValue.toUpperCase() === 'W1DR01' || pacerValue.toUpperCase() === 'AZURE' || pacerValue.toUpperCase() === 'W1SR01' || pacerValue.toUpperCase() === 'W3SR01' || pacerValue.toUpperCase() === 'W3DR01'){

   window.open('https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_260118.pdf', '_blank' );
   

 }else if(pacerValue.toUpperCase() === 'PERCUFLEX PLUS' || pacerValue.toUpperCase() === 'PERCUFLEX'){

  window.open('http://www.mrisafety.com/TMDL_view.php?editid1=6058', '_blank' );


 }else if(pacerValue.toUpperCase() === 'YASARGIL'){

  window.open('Docs/MRI-Safety-Information-Yasargil-Titanium-and-Phynox-Aneurysm-Clips.pdf', '_blank' );

 }else if(pacerValue.toUpperCase() === 'SUGITA' || pacerValue.toUpperCase() === 'MIZUHO'){

  window.open('https://www.mrisafety.com/TMDL_list.php?goto=201', '_blank' );


/*Implant alert page-----------------------------------------------------*/
 }else if(pacerValue.toUpperCase() === 'VIRTUOSO' || pacerValue.toUpperCase() === 'D154AWG'){

alert("NOT MR-CONDITIONAL");

    

 }else if(pacerValue.toUpperCase() === 'NEVRO' || pacerValue.toUpperCase() === 'SENZA' || pacerValue.toUpperCase() === 'NIPG1000' || pacerValue.toUpperCase() === 'NIPG1500' || pacerValue.toUpperCase() === 'NIPG2000' || pacerValue.toUpperCase() === 'NIPG2500'){

   window.open('https://s28.q4cdn.com/260621474/files/doc_downloads/2022/05/1.5T-and-3T-MRI-Guidelines-for-the-Senza-Neuromodulation-Systems-(11096)-Rev-P.pdf', '_blank' );



}else if(pacerValue.toUpperCase() === 'MICRA VR' || pacerValue.toUpperCase() === 'MICRA' || pacerValue.toUpperCase() === 'MC1VR01' ){

   window.open('https://www.medtronic.com/content/dam/emanuals/crdm/M992497A001A_view.pdf', '_blank' );
  
}else if(pacerValue.toUpperCase() === 'MICRA AV' || pacerValue.toUpperCase() === 'MC1AVR1'){

   window.open('https://www.medtronic.com/content/dam/emanuals/crdm/M995149A001A_view.pdf', '_blank' );

  
}else if(pacerValue.toUpperCase() === 'ATTESTA DR' || pacerValue.toUpperCase() === 'ATDR01'){

   window.open('https://www.medtronic.com/content/dam/emanuals/crdm/M967434A001B_view.pdf', '_blank' );

}else if(pacerValue.toUpperCase() === 'ATTESTA L DR' || pacerValue.toUpperCase() === 'ATDRL1'){

   window.open('https://www.medtronic.com/content/dam/emanuals/crdm/M967434A001B_view.pdf', '_blank' );


}else if(pacerValue.toUpperCase() === 'ATTESTA S DR' || pacerValue.toUpperCase() === 'ATDRS1'){

   window.open('https://www.medtronic.com/content/dam/emanuals/crdm/M967434A001B_view.pdf', '_blank' );


}else if(pacerValue.toUpperCase() === 'ATTESTA SR' || pacerValue.toUpperCase() === 'ATSR01'){

  window.open('https://www.medtronic.com/content/dam/emanuals/crdm/M967434A001B_view.pdf', '_blank' );

}else if(pacerValue.toUpperCase() === 'RESTORE' || pacerValue.toUpperCase() === '37712'){

   window.open('https://www.medtronic.com/content/dam/emanuals/neuro/CONTRIB_171957.pdf', '_blank' );

}else if(pacerValue.toUpperCase() === 'SPHERA SR' || pacerValue.toUpperCase() === 'SPSR01'){

   window.open('https://www.medtronic.com/content/dam/emanuals/crdm/M967434A001B_view.pdf', '_blank' );

}else if(pacerValue.toUpperCase() === 'SPHERA DR' || pacerValue.toUpperCase() === 'SPDR01'){

   window.open('https://www.medtronic.com/content/dam/emanuals/crdm/M967434A001B_view.pdf', '_blank' );

}else if(pacerValue.toUpperCase() === 'SPHERA L DR' || pacerValue.toUpperCase() === 'SPDRL1'){

   window.open('https://www.medtronic.com/content/dam/emanuals/crdm/M967434A001B_view.pdf', '_blank' );

}else if(pacerValue.toUpperCase() === 'ATTESTA' || pacerValue.toUpperCase() === 'ATDRL1'){

   window.open('https://www.medtronic.com/content/dam/emanuals/crdm/M967434A001B_view.pdf', '_blank' );

}else if(pacerValue.toUpperCase() === 'SPHERA' || pacerValue.toUpperCase() === 'ATDRL1'){

   window.open('https://www.medtronic.com/content/dam/emanuals/crdm/M967434A001B_view.pdf', '_blank' );


}else if(pacerValue.toUpperCase() === 'ASTRA'){

   window.open('https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_260118.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'REVO' || pacerValue.toUpperCase() === 'RVDR01'){

   window.open('https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_184935.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'COBALT XT' || pacerValue.toUpperCase() === 'DVPA2D1'  || pacerValue.toUpperCase() === 'DVPA2D4'  || pacerValue.toUpperCase() === 'DDPA2D1' || pacerValue.toUpperCase() === 'DDPA2D4' || pacerValue.toUpperCase() === 'DVPB3D1'  || pacerValue.toUpperCase() === 'DVPB3D4' || pacerValue.toUpperCase() === 'DVPB3D4' || pacerValue.toUpperCase() === 'COBALT' || pacerValue.toUpperCase() === 'DDPB3D4'){

   window.open('https://www.medtronic.com/content/dam/emanuals/crdm/M988007A001B_view.pdf', '_blank');


}else if(pacerValue.toUpperCase() === 'CROME' || pacerValue.toUpperCase() === 'DVPC3D4' || pacerValue.toUpperCase() === 'DVPC3D1' || pacerValue.toUpperCase() === 'DDPC3D4' || pacerValue.toUpperCase() === 'DDPC3D1'){

   window.open('https://www.medtronic.com/content/dam/emanuals/crdm/M988007A001B_view.pdf', '_blank');


   
}else if(pacerValue.toUpperCase() === 'PRIMO' || pacerValue.toUpperCase() === 'DDMD3D1' || pacerValue.toUpperCase() === 'DDMD3D4'  || pacerValue.toUpperCase() === 'DVMD3D1'  || pacerValue.toUpperCase() === 'DVMDD3D4'){

   window.open('https://www.medtronic.com/content/dam/emanuals/crdm/M976736A001B_view.pdf', '_blank');


}else if(pacerValue.toUpperCase() === 'MIRRO' || pacerValue.toUpperCase() === 'DVME3D1' || pacerValue.toUpperCase() === 'DVME3D4' || pacerValue.toUpperCase() === 'DDME3D1' || pacerValue.toUpperCase() === 'DDME3D4'){

   window.open('https://www.medtronic.com/content/dam/emanuals/crdm/M976736A001B_view.pdf', '_blank');
   
   
   
}else if(pacerValue.toUpperCase() === 'VISIA AF' || pacerValue.toUpperCase() === 'DVFB1D1'  || pacerValue.toUpperCase() === 'DVFB1D1'  || pacerValue.toUpperCase() === 'DVFB1D4' || pacerValue.toUpperCase() === 'DVFC3D1'  || pacerValue.toUpperCase() === 'DVFC3D4'|| pacerValue.toUpperCase() === 'VISIA'){

   window.open('https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_235962.pdf', '_blank');

   

   
}else if(pacerValue.toUpperCase() === 'EVERA XT' || pacerValue.toUpperCase() === 'DDMB1D4'  || pacerValue.toUpperCase() === 'DVMB1D4'  || pacerValue.toUpperCase() === 'DDMB1D1' || pacerValue.toUpperCase() === 'DVMB1D1' || pacerValue.toUpperCase() === 'EVERA' || pacerValue.toUpperCase() === 'DDMC3D4'  || pacerValue.toUpperCase() === 'DDMC3D1'  || pacerValue.toUpperCase() === 'DVMC3D1' || pacerValue.toUpperCase() === 'DVMC3D4'){

   window.open('https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_235453.pdf', '_blank');

   
  
}else if(pacerValue.toUpperCase() === 'CLARIA' || pacerValue.toUpperCase() === 'DTMA1QQ' || pacerValue.toUpperCase() === 'DTMA1Q1' || pacerValue.toUpperCase() === 'DTMA1D4'  || pacerValue.toUpperCase() === 'DTMA1D1'){

   window.open('https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_242350.pdf', '_blank');

   


   
}else if(pacerValue.toUpperCase() === 'AMPLIA' || pacerValue.toUpperCase() === 'DTMB1QQ' || pacerValue.toUpperCase() === 'DTMB1Q1' || pacerValue.toUpperCase() === 'DTMB1D4' || pacerValue.toUpperCase() === 'DTMB1D1'){

   window.open('https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_241677.pdf', '_blank');

   
   

   
}else if(pacerValue.toUpperCase() === 'COMPIA' || pacerValue.toUpperCase() === 'DTMC1QQ' || pacerValue.toUpperCase() === 'DTMC1D1'  || pacerValue.toUpperCase() === 'DTMCC1D1'){

   window.open('https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_241677.pdf', '_blank');

   
   
   
}else if(pacerValue.toUpperCase() === 'PERCEPTA' || pacerValue.toUpperCase() === 'W4TR01' || pacerValue.toUpperCase() === 'W1TR01'){

   window.open('https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_254285.pdf', '_blank');




}else if(pacerValue.toUpperCase() === 'SERENA' || pacerValue.toUpperCase() === 'W4TR02' || pacerValue.toUpperCase() === 'W1TR02'){
   window.open('https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_254285.pdf', '_blank');





}else if(pacerValue.toUpperCase() === 'SOLARA' || pacerValue.toUpperCase() === 'W4TR03'  || pacerValue.toUpperCase() === 'W1TR03'){
   window.open('https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_254285.pdf', '_blank');


}else if(pacerValue.toUpperCase() === 'MEDTRONIC EVOLUT TAVR'){
   window.open('https://www.medtronic.com/content/dam/emanuals/cardio/M004015C001DOC1_RevD_view.pdf', '_blank');







}else if(pacerValue.toUpperCase() === 'LINQ11' || pacerValue.toUpperCase() === 'LNQ11' || pacerValue.toUpperCase() === 'LNQ22' || pacerValue.toUpperCase() === 'LINQ' || pacerValue.toUpperCase() === 'LINQ22' || pacerValue.toUpperCase() === 'LNQ'){
   window.open('../implantGuides/linq.html', '_blank');

/*Implant alert page----------------------------------------------------*/
}else if(pacerValue.toUpperCase() === 'REVEAL' || pacerValue.toUpperCase() === '9529'){

   window.open('../implantGuides/reveal.html', '_blank');
   
 
}else if(pacerValue.toUpperCase() === 'ACTIVA' || pacerValue.toUpperCase() === '37601'  || pacerValue.toUpperCase() === '37603' || pacerValue.toUpperCase() === '37612' || pacerValue.toUpperCase() === '37602' || pacerValue.toUpperCase() === 'PERCEPT PC' || pacerValue.toUpperCase() === 'B35200' || pacerValue.toUpperCase() === 'B35300'){
   window.open('medtronicImplants/medtronicDBS.pdf', '_blank');




}else if(pacerValue.toUpperCase() === 'SOLETRA' || pacerValue.toUpperCase() === '7426'){
   window.open('https://www.medtronic.com/content/dam/emanuals/neuro/CONTRIB_228155.pdf', '_blank');


}else if(pacerValue.toUpperCase() === 'PRIME ADVANCED'|| pacerValue.toUpperCase() === '97702' || pacerValue.toUpperCase() === '97715' || pacerValue.toUpperCase() === '97716' || pacerValue.toUpperCase() === '977005' || pacerValue.toUpperCase() === '977006' || pacerValue.toUpperCase() === '97712' || pacerValue.toUpperCase() === '97713' || pacerValue.toUpperCase() === '97714' || pacerValue.toUpperCase() === '37701'  || pacerValue.toUpperCase() === '37702'  || pacerValue.toUpperCase() === '37703'  || pacerValue.toUpperCase() === '37704'  || pacerValue.toUpperCase() === '37711'  || pacerValue.toUpperCase() === '37712'  || pacerValue.toUpperCase() === '37713'  || pacerValue.toUpperCase() === '37714'  || pacerValue.toUpperCase() === '7479'  || pacerValue.toUpperCase() === '7479B'  || pacerValue.toUpperCase() === '7427'  || pacerValue.toUpperCase() === '7427V' || pacerValue.toUpperCase() ===  'MEDTRONIC SYNERGY' || pacerValue.toUpperCase() ===  '977117' || pacerValue.toUpperCase() ===  '977118' || pacerValue.toUpperCase() ===  '977119' || pacerValue.toUpperCase() ===  '7425' || pacerValue.toUpperCase() ===  'MEDTRONIC NEUROSTIMULATOR'){
   window.open('medtronicImplants/medtronicNeuroStim.pdf', '_blank');


   }else if(pacerValue.toUpperCase() === 'KINETRA' || pacerValue.toUpperCase() === '7428'){
   window.open('https://www.medtronic.com/content/dam/emanuals/neuro/CONTRIB_228155.pdf', '_blank');


  

  /*Implant alert page----------------------------------------------------*/
   }else if(pacerValue.toUpperCase() === 'OPTIMA' || pacerValue.toUpperCase() === 'OPTIMA COIL'){
   window.open('../implantGuides/optima.html', '_blank');

   /*Implant alert page------------------------------------------------------------*/
    }else if (pacerValue.toUpperCase() === 'BARRICADE' ||  pacerValue.toUpperCase() === 'BARRICADE COIL'){
    window.open('../implantGuides/barricade.html', '_blank');

   
   }else if(pacerValue.toUpperCase() === 'PENUMBRA' || pacerValue.toUpperCase() === 'PENUMBRA COIL'  || pacerValue.toUpperCase() === 'LP COIL'  || pacerValue.toUpperCase() === 'RUBY COIL'  || pacerValue.toUpperCase() === 'PENUMBRA POD SYSTEM'){
    window.open('https://www.penumbrainc.com/mri-compatibility/', '_blank'); 

    /*Implant alert page---------------------------------------------------*/
   }else if(pacerValue.toUpperCase() === 'SPETZLER' || pacerValue.toUpperCase() === 'SPETZLER TITANIUM ANEURYSM CLIP'){
    window.open('../implantGuides/spetzler.html', '_blank'); 
   

    }else if(pacerValue.toUpperCase() === 'OPTION' || pacerValue.toUpperCase() === 'OPTION ELITE'|| pacerValue.toUpperCase() === 'OPTIONELITE' || pacerValue.toUpperCase() === 'ELITE'){
   window.open('https://www.argonmedical.com/wp-content/uploads/2022/09/OptionELITE-70cm-IFU.pdf', '_blank');
   
    }else if(pacerValue.toUpperCase() === 'AXONICS' || pacerValue.toUpperCase() === '1101' ||pacerValue.toUpperCase() === '4101'){
   window.open('https://www.axonics.com/images/hcp/resources/03-16-2022/110-0093-001rY_-_MRI_Patient_Guidelines_Axonics_SNM_System_US_English.pdf', '_blank'); 
 

   
    }else if(pacerValue.toUpperCase() === 'VANTA' || pacerValue.toUpperCase() === '977006'){
   window.open('https://www.medtronic.com/content/dam/emanuals/neuro/M939858A_a_028_view.pdf',  '_blank');

    }else if(pacerValue.toUpperCase() === 'ITREL 4' || pacerValue.toUpperCase() === '37704'){
   window.open('https://www.medtronic.com/content/dam/emanuals/neuro/M939858A_a_028_view.pdf',  '_blank');

    }else if(pacerValue.toUpperCase() === 'ITREL 4' || pacerValue.toUpperCase() === '37703'){
   window.open('https://www.medtronic.com/content/dam/emanuals/neuro/M939858A_a_028_view.pdf',  '_blank');

    }else if(pacerValue.toUpperCase() === 'ITREL 3' || pacerValue.toUpperCase() === '7425'){
   window.open('https://www.medtronic.com/content/dam/emanuals/neuro/M939858A_a_028_view.pdf',  '_blank');


}else if(pacerValue.toUpperCase() === 'RESTORESENSOR' || pacerValue.toUpperCase() === '37714'  || pacerValue.toUpperCase() === 'RESTORE SENSOR'){
   window.open('https://www.medtronic.com/content/dam/emanuals/neuro/M939858A_a_028_view.pdf',  '_blank');


}else if(pacerValue.toUpperCase() === 'RESTOREULTRA' || pacerValue.toUpperCase() === '97712'  || pacerValue.toUpperCase() === 'RESTORE ULTRA'){
   window.open('https://www.medtronic.com/content/dam/emanuals/neuro/M939858A_a_028_view.pdf',  '_blank');


}else if(pacerValue.toUpperCase() === 'RESTOREADVANCED' || pacerValue.toUpperCase() === '97713'  || pacerValue.toUpperCase() === 'RESTORE ADVANCED'){
   window.open('https://www.medtronic.com/content/dam/emanuals/neuro/M939858A_a_028_view.pdf',  '_blank');


}else if(pacerValue.toUpperCase() === 'RESTORESENSOR' || pacerValue.toUpperCase() === '97714' || pacerValue.toUpperCase() === 'RESTORE SENSOR' ){
   window.open('https://www.medtronic.com/content/dam/emanuals/neuro/M939858A_a_028_view.pdf',  '_blank');

}else if(pacerValue.toUpperCase() === 'RESTORE' || pacerValue.toUpperCase() === '37711'){
   window.open('https://www.medtronic.com/content/dam/emanuals/neuro/M939858A_a_028_view.pdf',  '_blank');



}else if(pacerValue.toUpperCase() === 'VERSITREL' || pacerValue.toUpperCase() === '7427V'){
   window.open('https://www.medtronic.com/content/dam/emanuals/neuro/M939858A_a_028_view.pdf',  '_blank');





}else if(pacerValue.toUpperCase() === 'AMS 700'){
   window.open('../bostonImplants/ams700.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'AMS 800'){
   window.open('../bostonImplants/ams800.pdf', '_blank');




/*Medtronic InterStim------------------------------------------------------*/
}else if(pacerValue.toUpperCase() === 'INTERSTIM' || pacerValue.toUpperCase() === '3023'  || pacerValue.toUpperCase() === 'INTERSTIM II' || pacerValue.toUpperCase() === '3058' || pacerValue.toUpperCase() === 'INTERSTIM MICRO' || pacerValue.toUpperCase() === '97810'|| pacerValue.toUpperCase() === 'INTERSTIM X' || pacerValue.toUpperCase() === '97800' || pacerValue.toUpperCase() === 'INTERSTIM TWIN' || pacerValue.toUpperCase() === '7427T'  ){
   window.open('../implantGuides/InterStim.html', '_blank');


//Biotronik pacemakers/ICDs
}else if(pacerValue.toUpperCase() === 'ENITRA'){
   window.open('https://www.promricheck.com/spring/welcome?execution=e11s1', '_blank');
 
}else if(pacerValue.toUpperCase() === 'EVITY'){
   window.open('https://www.promricheck.com/spring/welcome?execution=e11s1', '_blank');

}else if(pacerValue.toUpperCase() === 'ENTICOS'){
   window.open('https://www.promricheck.com/spring/welcome?execution=e11s1', '_blank');

}else if(pacerValue.toUpperCase() === 'EDORA'){
   window.open('https://www.promricheck.com/spring/welcome?execution=e11s1', '_blank');


//Biotronik pacemakers/ICDs
}else if(pacerValue.toUpperCase() === 'ACTICOR 7 DR-T'){
   window.open('https://www.promricheck.com/spring/welcome?execution=e11s1', '_blank');

}else if(pacerValue.toUpperCase() === 'ACTICOR 7 VR-T'){
   window.open('https://www.promricheck.com/spring/welcome?execution=e11s1', '_blank');

}else if(pacerValue.toUpperCase() === 'INVENTRA 7 VR-T DX'){
   window.open('https://www.promricheck.com/spring/welcome?execution=e11s1', '_blank');

}else if(pacerValue.toUpperCase() === 'RIVACOR 7 VR-T'){
   window.open('https://www.promricheck.com/spring/welcome?execution=e11s1', '_blank');

}else if(pacerValue.toUpperCase() === 'RIVACOR 7 DR-T'){
   window.open('https://www.promricheck.com/spring/welcome?execution=e11s1', '_blank');

}else if(pacerValue.toUpperCase() === 'ACTICOR 7'){
   window.open('https://www.promricheck.com/spring/welcome?execution=e11s1', '_blank');


}else if(pacerValue.toUpperCase() === 'AVEIR' || pacerValue.toUpperCase() === 'LSP112V' || pacerValue.toUpperCase() === 'LSP202V' || pacerValue.toUpperCase() === 'LSP201A' ){
   window.open('abbottImplants/aveir.pdf', '_blank');


}else if(pacerValue.toUpperCase() === 'BIOMONITOR 3M'){
   window.open('../biotronikImplants/biomonitor3m.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'BIOMONITOR 3'){
   window.open('../biotronikImplants/biomonitor3.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'BIOMONITOR 2'){
   window.open('../biotronikImplants/biomonitor2.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'BIOMONITOR 4'){
   window.open('../biotronikImplants/biomonitor4.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'BIOMONITOR'){
   window.open('../biotronikImplants/biomonitor.pdf', '_blank');



}else if(pacerValue.toUpperCase() === 'CODMAN CERTAS' || pacerValue.toUpperCase() === 'CODMAN HAKIM'  || pacerValue.toUpperCase() === 'CODMAN'){
   window.open('implantGuides/codman.html', '_blank');


}else if(pacerValue.toUpperCase() === 'INSPIRE' || pacerValue.toUpperCase() === '3028' || pacerValue.toUpperCase() === '3024'){
   window.open('implantGuides/inspire.pdf', '_blank');




   }else if(pacerValue.toUpperCase() === 'ASSURITY' || pacerValue.toUpperCase() === 'PM1272' || pacerValue.toUpperCase() === 'PM2272' || pacerValue.toUpperCase() === 'PM1172' || pacerValue.toUpperCase() === 'PM2172'  || pacerValue.toUpperCase() === 'ENDURITY'  || pacerValue.toUpperCase() === 'ACCENT' || pacerValue.toUpperCase() === 'PM1224' || pacerValue.toUpperCase() === 'PM2218' || pacerValue.toUpperCase() === 'PM3542' || pacerValue.toUpperCase() === 'QUADRA ALLURE' || pacerValue.toUpperCase() === 'PM3562' || pacerValue.toUpperCase() === 'QUADRA ALLURE MP' || pacerValue.toUpperCase() === 'CD1311-36Q'|| pacerValue.toUpperCase() === 'CD1311'  || pacerValue.toUpperCase() === 'ELLIPSE' || pacerValue.toUpperCase() === 'CD1411-36Q' || pacerValue.toUpperCase() === 'CD1411-36QC'  || pacerValue.toUpperCase() === 'CD1411'  || pacerValue.toUpperCase() === 'CD1411-36QC'  || pacerValue.toUpperCase() === 'CD1411' || pacerValue.toUpperCase() === 'CD2411-36Q' || pacerValue.toUpperCase() === 'CD2411-36QC' || pacerValue.toUpperCase() === 'CD2411'  || pacerValue.toUpperCase() === 'CD1357-40Q' || pacerValue.toUpperCase() === 'FORTIFY ASSURA' || pacerValue.toUpperCase() === 'CD1357-40QC'  || pacerValue.toUpperCase() === 'CD1357' || pacerValue.toUpperCase() === 'CD2357-40Q' || pacerValue.toUpperCase() === 'CD2357-40QC'|| pacerValue.toUpperCase() === 'CD2357' || pacerValue.toUpperCase() === 'CD3365-40Q' || pacerValue.toUpperCase() === 'QUADRA ASSURA' || pacerValue.toUpperCase() === 'CD3365-40QC'|| pacerValue.toUpperCase() === 'CD3365'|| pacerValue.toUpperCase() === 'CD3369-40Q'|| pacerValue.toUpperCase() === 'CD3369-40QC'|| pacerValue.toUpperCase() === 'CD3369' ){
   window.open('abbottImplants/abbottPacemakerIcd.pdf', '_blank');



}else if(pacerValue.toUpperCase() === 'PROCLAIM XR' || pacerValue.toUpperCase() === '3660' ){
   window.open('abbottImplants/neurostimulation.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'PROCLAIM XR' || pacerValue.toUpperCase() === '3662' ){
   window.open('abbottImplants/neurostimulation.pdf', '_blank')

}else if(pacerValue.toUpperCase() === 'PROCLAIM DRG' || pacerValue.toUpperCase() === '3664' ){
   window.open('abbottImplants/newAbbottProclaimMRIsettings.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'PROTEGE' || pacerValue.toUpperCase() === '3771' ){
   window.open('abbottImplants/neurostimulation.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'PROTEGE' || pacerValue.toUpperCase() === '3772' ){
   window.open('abbottImplants/neurostimulation.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'ETERNA' || pacerValue.toUpperCase() === '32400'){
    window.open('abbottImplants/abbottEterna.pdf', '_blank');


}else if(pacerValue.toUpperCase() === 'INFINITY 5' || pacerValue.toUpperCase() === '6660'  || pacerValue.toUpperCase() === 'INFINITY 7'  || pacerValue.toUpperCase() === '6662'  || pacerValue.toUpperCase() === 'LIBERTA RC'  || pacerValue.toUpperCase() === '62400'){
   window.open('abbottImplants/infinity.pdf', '_blank');



}else if(pacerValue.toUpperCase() === 'ESSURE' ){
   window.open('https://labeling.bayerhealthcare.com/html/products/pi/essure_ifu.pdf', '_blank');

/*else if(pacerValue.toUpperCase() === 'INGENIO' || pacerValue.toUpperCase() === 'K173' ){
    alert('Not MR-Conditional');*/


}else if(pacerValue.toUpperCase() === 'VITALIO' || pacerValue.toUpperCase() === 'K275' ){
   window.open('https://www.bostonscientific.com/content/dam/elabeling/crm/360167-003_Brady_MRI_TG_us_s.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'VITALIO' || pacerValue.toUpperCase() === 'K277' ){
   window.open('https://www.bostonscientific.com/content/dam/elabeling/crm/360167-003_Brady_MRI_TG_us_s.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'ESSENTIO' || pacerValue.toUpperCase() === 'L110' ){
   window.open('https://www.bostonscientific.com/content/dam/elabeling/crm/360167-003_Brady_MRI_TG_us_s.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'ESSENTIO' || pacerValue.toUpperCase() === 'L111' ){
   window.open('https://www.bostonscientific.com/content/dam/elabeling/crm/360167-003_Brady_MRI_TG_us_s.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'ESSENTIO' || pacerValue.toUpperCase() === 'L131' ){
   window.open('https://www.bostonscientific.com/content/dam/elabeling/crm/360167-003_Brady_MRI_TG_us_s.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'PROPONENT' || pacerValue.toUpperCase() === 'L210' ){
   window.open('https://www.bostonscientific.com/content/dam/elabeling/crm/360167-003_Brady_MRI_TG_us_s.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'PROPONENT' || pacerValue.toUpperCase() === 'L211' ){
   window.open('https://www.bostonscientific.com/content/dam/elabeling/crm/360167-003_Brady_MRI_TG_us_s.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'PROPONENT' || pacerValue.toUpperCase() === 'L231' ){
   window.open('https://www.bostonscientific.com/content/dam/elabeling/crm/360167-003_Brady_MRI_TG_us_s.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'ACCOLADE' || pacerValue.toUpperCase() === 'L310' ){
   window.open('https://www.bostonscientific.com/content/dam/elabeling/crm/360167-003_Brady_MRI_TG_us_s.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'ACCOLADE' || pacerValue.toUpperCase() === 'L311' ){
   window.open('https://www.bostonscientific.com/content/dam/elabeling/crm/360167-003_Brady_MRI_TG_us_s.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'ACCOLADE' || pacerValue.toUpperCase() === 'L331' ){
   window.open('https://www.bostonscientific.com/content/dam/elabeling/crm/360167-003_Brady_MRI_TG_us_s.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'VALITUDE' || pacerValue.toUpperCase() === 'U128' ){
   window.open('https://www.bostonscientific.com/content/dam/elabeling/crm/360167-003_Brady_MRI_TG_us_s.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'VISIONIST' || pacerValue.toUpperCase() === 'U228' ){
   window.open('https://www.bostonscientific.com/content/dam/elabeling/crm/360167-003_Brady_MRI_TG_us_s.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'EMBLEM' || pacerValue.toUpperCase() === 'A209' ){
   window.open('https://www.bostonscientific.com/content/dam/elabeling/crm/92346926-001_IMAGEREADY_MRITG_en-USA_S.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'EMBLEM' || pacerValue.toUpperCase() === 'A219' ){
   window.open('https://www.bostonscientific.com/content/dam/elabeling/crm/92346926-001_IMAGEREADY_MRITG_en-USA_S.pdf', '_blank');


}else if(pacerValue.toUpperCase() === 'PRECISION MONTAGE MRI' || pacerValue.toUpperCase() === 'SC-1200' || pacerValue.toUpperCase() === 'SC1200'|| pacerValue.toUpperCase() === 'MONTAGE' ){
   window.open('https://www.bostonscientific.com/content/dam/elabeling/nm/91035972-02_RevA_ImageReady_MRI_Full_Body_Guidelines_for_Precision_Montage_MRI_Spinal_Cord_Stimulator_System_MRI_en-US_S.pdf', '_blank');


}else if(pacerValue.toUpperCase() === 'PRECISION SPECTRA' || pacerValue.toUpperCase() === 'SC-1132' || pacerValue.toUpperCase() === 'SC1132'){
   window.open('https://www.bostonscientific.com/content/dam/elabeling/nm/91057049-04_ImageReady%E2%84%A2_MRI_Head_Only_Guidelines_for_Precision_Spectra%E2%84%A2_Spinal_Cord_Stimulator_System_s.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'SPECTRA WAVEWRITER' || pacerValue.toUpperCase() === 'SC-1160'|| pacerValue.toUpperCase() === 'SC1160' ){
     window.open('https://www.bostonscientific.com/content/dam/elabeling/nm/91171762-02_ImageReady%E2%84%A2_MRI_Head_Only_Guidelines_for_Spectra_WaveWriter%E2%84%A2_Spinal_Cord_Stimulator_System_s.pdf', '_blank');

/*Wavewriter spinal stimulator------------------------------------*/
}else if(pacerValue.toUpperCase() === 'WAVEWRITER' || pacerValue.toUpperCase() === 'SC-1232' || pacerValue.toUpperCase() === 'SC-1216' || pacerValue.toUpperCase() === 'SC-1432' || pacerValue.toUpperCase() === 'SC-1416'){
     window.open('https://www.bostonscientific.com/content/dam/elabeling/nm/92395569-01_B_ImageReady_MRI_Full_Body_Guidelines_for_WaveWriter_Alpha_and_WaveWriter_Alpha_Prime_Spinal_Cord_Stimulator_Systems_en-US_s.pdf', '_blank');


}else if(pacerValue.toUpperCase() === 'ADAPTA' || pacerValue.toUpperCase() === 'ADDR01' || pacerValue.toUpperCase() === 'ADDR03' || pacerValue.toUpperCase() === 'ADDRO6' || pacerValue.toUpperCase() === 'ADDRS1'){
     window.open('Docs/medtronic-non-mriConditional-devices.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'VERSA' || pacerValue.toUpperCase() === 'SENSIA' || pacerValue.toUpperCase() === 'VEDR01' || pacerValue.toUpperCase() === 'SEDR01' || pacerValue.toUpperCase() === 'SEDRL1' || pacerValue.toUpperCase() === 'SED01' || pacerValue.toUpperCase() === 'SESR01' || pacerValue.toUpperCase() === 'SES01'){
     window.open('Docs/medtronic-non-mriConditional-devices.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'RELIA' || pacerValue.toUpperCase() === 'REDRO1' || pacerValue.toUpperCase() === 'RED01' || pacerValue.toUpperCase() === 'RESR01' || pacerValue.toUpperCase() === 'RES01' || pacerValue.toUpperCase() === 'REVDD01'){
     window.open('Docs/medtronic-non-mriConditional-devices.pdf', '_blank');


}else if(pacerValue.toUpperCase() === 'AVANT' || pacerValue.toUpperCase() === 'NEUTRINO' || pacerValue.toUpperCase() === 'CDVRA700Q' || pacerValue.toUpperCase() === 'CDDRA700Q' || pacerValue.toUpperCase() === 'CDVRA800Q'  || pacerValue.toUpperCase() === 'CDVRA600Q'  || pacerValue.toUpperCase() === 'CDDRA800Q'  || pacerValue.toUpperCase() === 'CDDRA600Q' || pacerValue.toUpperCase() === 'CDHFA700Q' || pacerValue.toUpperCase() === 'CDHFA800Q' || pacerValue.toUpperCase() === 'CDHFA600Q'){
     window.open('abbottImplants/STjude.pdf', '_blank');    

}else if(pacerValue.toUpperCase() === 'ENTRANT' || pacerValue.toUpperCase() === 'CDVRA300Q' || pacerValue.toUpperCase() === 'CDDRA300Q' || pacerValue.toUpperCase() === 'CDHFA300Q'){
   window.open('abbottImplants/STjude.pdf', '_blank');     

}else if(pacerValue.toUpperCase() === 'GALLANT' || pacerValue.toUpperCase() === 'CDVRA500Q' || pacerValue.toUpperCase() === 'CDDRA500Q' || pacerValue.toUpperCase() === 'CDHFA500Q' ){
   window.open('abbottImplants/STjude.pdf', '_blank'); 


}else if(pacerValue.toUpperCase() === 'WATCHMAN'){
   window.open('https://www.bostonscientific.com/content/dam/elabeling/ic/watchman/51221705-01A_WATCHMAN_IFU_en_s.pdf', '_blank');
   
}else if(pacerValue.toUpperCase() === 'AMPLATZER' || pacerValue.toUpperCase() === 'PFO OCCLUDER' ){
   window.open('abbottImplants/amplatzerAmulet.pdf', '_blank');  

 

}else if(pacerValue.toUpperCase() === 'UROLIFT'){
   window.open('https://cdn2.hubspot.net/hubfs/2618738/L00135-01_RevA%20Patient%20Implant%20Card.pdf', '_blank');  

/*Implant alert page--------------------------------------*/
}else if(pacerValue.toUpperCase() === 'PIPELINE'){
   window.open('../implantGuides/pipeLine.html', '_blank');  

}else if(pacerValue.toUpperCase() === 'WAVECREST'){
   window.open('http://www.mrisafety.com/OBJ_STATUS_view.php?editid1=11', '_blank');  
 


   
}else if(pacerValue.toUpperCase() === 'SYNCHRONY2' || pacerValue.toUpperCase() === 'SYNCHRONY 2' || pacerValue.toUpperCase() === 'MI1250' || pacerValue.toUpperCase() === 'SYNCHRONY' || pacerValue.toUpperCase() === 'MI1200'  || pacerValue.toUpperCase() === 'MED-EL CONCERT'  || pacerValue.toUpperCase() === 'CONCERT'  || pacerValue.toUpperCase() === 'MI1000' || pacerValue.toUpperCase() === 'SONATA' || pacerValue.toUpperCase() === 'PULSAR' || pacerValue.toUpperCase() === 'C40+' || pacerValue.toUpperCase() === 'C40')  {
     window.open('https://www.medel.com/docs/default-source/isi-important-safety-information/languages/en-us-english-usa/ci-cochlear-implants/aw33290_80_manual-medical-procedures-ci-systems-en-english-us_web.pdf?auto=format&sfvrsn=b5299142_4', '_blank'); 

 

 }else if(pacerValue.toUpperCase() === 'ASSURANCE' || pacerValue.toUpperCase() === 'ASSURANCE CLIP'){
   window.open('https://ww1.steris.com/onbDocs/V517/0/4101648.pdf', '_blank');      

 }else if(pacerValue.toUpperCase() === 'RHYTHMLINK'){
   window.open('../implantGuides/eeg.html', '_blank');   

 }else if(pacerValue.toUpperCase() === 'RESOLUTION' || pacerValue.toUpperCase() === 'RESOLUTION CLIP'){
   window.open('BostonImplants/resolutionClip.pdf','_blank');  
   
 }else if(pacerValue.toUpperCase() === 'MIRENA'){
   window.open('https://www.mrisafety.com/SafetyInformation_view.php?editid1=181', '_blank'); 

 }else if(pacerValue.toUpperCase() === 'VIVISTIM'|| pacerValue.toUpperCase() === '1001'){
   window.open('Docs/Vivistim.pdf', '_blank'); 

 }else if(pacerValue.toUpperCase() === 'KURZ'){
   window.open('https://www.ccmed.co.uk/wp-content/uploads/2019/10/MR_Information_en_Rev_06.pdf', '_blank'); 


 }else if(pacerValue.toUpperCase() === 'HYDROFRAME COIL' || pacerValue.toUpperCase() === 'MICROPLEX COIL' || pacerValue.toUpperCase() === 'HYDRO COIL'){
   window.open('https://www.microvention.com/products/hydrosoft3d/additional-information/mri-safety-information#content','_blank'); 

 }else if(pacerValue.toUpperCase() === 'COSMOS PLATINUM COILS'){
   window.open('https://www.microvention.com/products/cosmos/additional-information/mri-safety-information', '_blank'); 


 }else if(pacerValue.toUpperCase() === 'MICROPORT'){
   window.open('https://www.crm.microport.com/automri/en/radiologist/tool/device-type#device-type', '_blank');
   


 }else if(pacerValue.toUpperCase() === 'VIGILANT'|| pacerValue.toUpperCase() === 'D220' || pacerValue.toUpperCase() === 'D221' || pacerValue.toUpperCase() === 'D232' || pacerValue.toUpperCase() === 'D233' || pacerValue.toUpperCase() === 'G248' || pacerValue.toUpperCase() === 'G247'){
   window.open('https://www.bostonscientific.com/content/dam/elabeling/crm/359450-007_Tachy_MRI_TG_us_s.pdf', '_blank'); 


 }else if(pacerValue.toUpperCase() === 'VIGILANT' || pacerValue.toUpperCase() === 'G228' || pacerValue.toUpperCase() === 'G248' || pacerValue.toUpperCase() === 'G237' || pacerValue.toUpperCase() === 'G224'  || pacerValue.toUpperCase() === 'G225'  || pacerValue.toUpperCase() === 'AUTOGEN' || pacerValue.toUpperCase() === 'G166' || pacerValue.toUpperCase() === 'G168' || pacerValue.toUpperCase() === 'G160' || pacerValue.toUpperCase() === 'G161' || pacerValue.toUpperCase() === 'G168' || pacerValue.toUpperCase() === 'DYNAGEN' || pacerValue.toUpperCase() === 'G156' || pacerValue.toUpperCase() === 'G158'  || pacerValue.toUpperCase() === 'G150' || pacerValue.toUpperCase() === 'G151' || pacerValue.toUpperCase() === 'INOGEN'  || pacerValue.toUpperCase() === 'G146' || pacerValue.toUpperCase() === 'G148' || pacerValue.toUpperCase() === 'G140'  || pacerValue.toUpperCase() === 'G141' || pacerValue.toUpperCase() === 'MOMENTUM' || pacerValue.toUpperCase() === 'G128'  || pacerValue.toUpperCase() === 'G138' || pacerValue.toUpperCase() === 'G124' || pacerValue.toUpperCase() === 'G125'  || pacerValue.toUpperCase() === 'ORIGEN' || pacerValue.toUpperCase() === 'G056' || pacerValue.toUpperCase() === 'G058'  || pacerValue.toUpperCase() === 'G050' || pacerValue.toUpperCase() === 'G051' || pacerValue.toUpperCase() === 'RESONATE'  || pacerValue.toUpperCase() === 'G524' || pacerValue.toUpperCase() === 'G525' || pacerValue.toUpperCase() === 'G528'  || pacerValue.toUpperCase() === 'G548' || pacerValue.toUpperCase() === 'G537' || pacerValue.toUpperCase() === 'G547'  || pacerValue.toUpperCase() === 'G428' || pacerValue.toUpperCase() === 'G448' || pacerValue.toUpperCase() === 'G437'  || pacerValue.toUpperCase() === 'G447' || pacerValue.toUpperCase() === 'G424' || pacerValue.toUpperCase() === 'G425'){
     window.open('https://www.bostonscientific.com/content/dam/elabeling/crm/51114094-001A_IMAGEREADY_MRITG_en_S.pdf', '_blank');   


  }else if(pacerValue.toUpperCase() === 'D160' || pacerValue.toUpperCase() === 'D161' || pacerValue.toUpperCase() === 'D162' || pacerValue.toUpperCase() === 'D163' || pacerValue.toUpperCase() === 'D150'  || pacerValue.toUpperCase() === 'D151'  || pacerValue.toUpperCase() === 'D152'  || pacerValue.toUpperCase() === 'D020' || pacerValue.toUpperCase() === 'D021' || pacerValue.toUpperCase() === 'D153' || pacerValue.toUpperCase() === 'D022' || pacerValue.toUpperCase() === 'D022' || pacerValue.toUpperCase() === 'D140' || pacerValue.toUpperCase() === 'D141' || pacerValue.toUpperCase() === 'D142' || pacerValue.toUpperCase() === 'D143'  || pacerValue.toUpperCase() === 'D010' || pacerValue.toUpperCase() === 'D011' || pacerValue.toUpperCase() === 'D012'  || pacerValue.toUpperCase() === 'G146' || pacerValue.toUpperCase() === 'G148' || pacerValue.toUpperCase() === 'G140'  || pacerValue.toUpperCase() === 'D013' || pacerValue.toUpperCase() === 'D120' || pacerValue.toUpperCase() === 'D121'  || pacerValue.toUpperCase() === 'D050' || pacerValue.toUpperCase() === 'D051' || pacerValue.toUpperCase() === 'D052'  || pacerValue.toUpperCase() === 'D053' || pacerValue.toUpperCase() === 'D000' || pacerValue.toUpperCase() === 'G058'  || pacerValue.toUpperCase() === 'G050' || pacerValue.toUpperCase() === 'D001' || pacerValue.toUpperCase() === 'D002'  || pacerValue.toUpperCase() === 'D003' || pacerValue.toUpperCase() === 'PERCIVA' || pacerValue.toUpperCase() === 'D500'  || pacerValue.toUpperCase() === 'D501' || pacerValue.toUpperCase() === 'D512' || pacerValue.toUpperCase() === 'D513'  || pacerValue.toUpperCase() === 'D400' || pacerValue.toUpperCase() === 'D401' || pacerValue.toUpperCase() === 'D412'  || pacerValue.toUpperCase() === 'D413'){
     window.open('https://www.bostonscientific.com/content/dam/elabeling/crm/51114094-001A_IMAGEREADY_MRITG_en_S.pdf', '_blank');      

  }else if(pacerValue.toUpperCase() === 'D520' || pacerValue.toUpperCase() === 'D521' || pacerValue.toUpperCase() === 'D532' || pacerValue.toUpperCase() === 'D533' || pacerValue.toUpperCase() === 'D420'  || pacerValue.toUpperCase() === 'D421'  || pacerValue.toUpperCase() === 'D432'  || pacerValue.toUpperCase() === 'D433' || pacerValue.toUpperCase() === 'D220' || pacerValue.toUpperCase() === 'D221' || pacerValue.toUpperCase() === 'D232' || pacerValue.toUpperCase() === 'D233'){
     window.open('https://www.bostonscientific.com/content/dam/elabeling/crm/51114094-001A_IMAGEREADY_MRITG_en_S.pdf', '_blank');     


  /*Implant guide alert page-----------------------------------------*/
  }else if(pacerValue.toUpperCase() === 'MEDTRONIC STRATA'|| pacerValue.toUpperCase() === 'STRATAMR'){
   window.open('../implantGuides/strata.html', '_blank'); 

   }else if(pacerValue.toUpperCase() === 'MEDTRONIC STRATA 2'){
   window.open('https://www.medtronic.com/content/dam/emanuals/st/M972504A001B.pdf', '_blank'); 


   /*Cochlear implants--------------------------------------------------*/

    }else if(pacerValue.toUpperCase() === 'COCHLEAR' || pacerValue.toUpperCase() === 'COCHLEAR IMPLANT' || pacerValue.toUpperCase() === 'CI632' || pacerValue.toUpperCase() === 'C1632' || pacerValue.toUpperCase() === 'CI624' || pacerValue.toUpperCase() === 'C1624'|| pacerValue.toUpperCase() === 'CI622'|| pacerValue.toUpperCase() === 'C1622' || pacerValue.toUpperCase() === 'CI612' || pacerValue.toUpperCase() === 'C1612' || pacerValue.toUpperCase() === 'CI532'|| pacerValue.toUpperCase() === 'C1532' || pacerValue.toUpperCase() === 'CI522' || pacerValue.toUpperCase() === 'C1522'|| pacerValue.toUpperCase() === 'CI512' || pacerValue.toUpperCase() === 'C1512' || pacerValue.toUpperCase() === 'ABI541'|| pacerValue.toUpperCase() === 'AB1541' || pacerValue.toUpperCase() === 'CI422' || pacerValue.toUpperCase() === 'C1422' || pacerValue.toUpperCase() === 'CI24REH' || pacerValue.toUpperCase() === 'CI24RECA' || pacerValue.toUpperCase() === 'C124REH'|| pacerValue.toUpperCase() === 'C124RECA' || pacerValue.toUpperCase() === 'CI24REST'|| pacerValue.toUpperCase() === 'C124REST' || pacerValue.toUpperCase() === 'ABI24M' || pacerValue.toUpperCase() === 'AB124M' || pacerValue.toUpperCase() === 'CI24R' || pacerValue.toUpperCase() === 'C124R'|| pacerValue.toUpperCase() === 'CI24M' || pacerValue.toUpperCase() === 'C124M' || pacerValue.toUpperCase() === 'CI11+11+2M' || pacerValue.toUpperCase() === 'CI22M' || pacerValue.toUpperCase() === 'C122M'){
   window.open('../implantGuides/cochlear.html', '_blank');

  }else if(pacerValue.toUpperCase() === 'ADVANCED BIONICS'|| pacerValue.toUpperCase() === 'HIRES ULTRA 3D' || pacerValue.toUpperCase() === 'CI-1601-04'){
   window.open('../implantGuides/cochlearAdvancedBionics.html', '_blank'); 

   }else if(pacerValue.toUpperCase() === 'NUCLEUS'){
   window.open('https://www.cochlear.com/us/en/professionals/resources-and-training/mri-guidelines', '_blank');

}else if(pacerValue.toUpperCase() === 'OSIA'){
   window.open('https://www.cochlear.com/us/en/professionals/resources-and-training/mri-guidelines', '_blank');

}else if(pacerValue.toUpperCase() === 'BAHA'){
   window.open('https://www.cochlear.com/us/en/professionals/resources-and-training/mri-guidelines', '_blank');

}else if(pacerValue.toUpperCase() === 'VISTAFIX'){
   window.open('https://www.cochlear.com/us/en/professionals/resources-and-training/mri-guidelines', '_blank');

  /*End of cochlear implant----------------------------------------*/


  }else if(pacerValue.toUpperCase() === 'BOSTON SCIENTIFIC WALLFLEX'|| pacerValue.toUpperCase() === 'COLONIC AND DUODENAL SOFT STENT'){
   window.open('https://www.bostonscientific.com/content/dam/bostonscientific/endo/portfolio-group/wallflex-colonic-and-duodenal/Wallflex_Soft_Abbreviated_DFU_FINAL.pdf', '_blank');  



  }else if(pacerValue.toUpperCase() === 'PROGAV 2.0'|| pacerValue.toUpperCase() === 'PROGAV'){
   window.open('Docs/proGav.pdf', '_blank');  

  }else if(pacerValue.toUpperCase() === 'AVEIR'|| pacerValue.toUpperCase() === 'LSP112V'){
   window.open('Docs/aveirPacemaker.pdf', '_blank');  

  }else if(pacerValue.toUpperCase() === 'GORE'|| pacerValue.toUpperCase() === 'GORE TAG' || pacerValue.toUpperCase() === 'GORE VIABIL' || pacerValue.toUpperCase() === 'GORE CARDIOFORM' || pacerValue.toUpperCase() === 'GORE EXCLUDER' || pacerValue.toUpperCase() === 'GORE VIABAHN' || pacerValue.toUpperCase() === 'GORE VIATORR' || pacerValue.toUpperCase() === 'GORE BIO-A' || pacerValue.toUpperCase() === 'CARDIOFORM' || pacerValue.toUpperCase() === 'DUALMESH' || pacerValue.toUpperCase() === 'EXCLUDER' || pacerValue.toUpperCase() === 'SEAMGUARD' || pacerValue.toUpperCase() === 'GORE TEX' || pacerValue.toUpperCase() === 'SYNECOR' || pacerValue.toUpperCase() === 'TAG' || pacerValue.toUpperCase() === 'VIABAHN'|| pacerValue.toUpperCase() === 'VIABIL' || pacerValue.toUpperCase() === 'VIATORR'){
   window.open('https://www.goremedical.com/support/mri-safety-information', '_blank');  

  }else if(pacerValue.toUpperCase() === 'LOCKADO'){
   window.open('https://mtendoscopy.com/wp-content/uploads/2023/01/Lockado-MRI_Card_1-0027609-REV-5-2.pdf', '_blank');   

   
  }else if(pacerValue.toUpperCase() === 'DM3500'|| pacerValue.toUpperCase() === 'CONFIRM RX' || pacerValue.toUpperCase() === 'CONFIRMRX' || pacerValue.toUpperCase() === 'CONFIRM' || pacerValue.toUpperCase() === '3500' ){
   window.open('Docs/dm3500.pdf', '_blank');  

  }else if(pacerValue.toUpperCase() === 'BOSTON SCIENTIFIC SYNERGY XD'){
   window.open('https://www.bostonscientific.com/content/dam/elabeling/ic/synergy_xd/51266501-02A_SYNERGYXD_PatientGuide_US_EN_s.pdf', '_blank');  

  }else if(pacerValue.toUpperCase() === 'BOSTON SCIENTIFIC SYNERGY MONORAIL'){
   window.open('https://www.bostonscientific.com/content/dam/elabeling/ic/50984864-01A_Synergy_IFU_en_s.pdf', '_blank'); 

  }else if(pacerValue.toUpperCase() === 'AXIOS'){
   window.open('https://www.bostonscientific.com/content/dam/bostonscientific/endo/portfolio-group/AXIOS/dfu_AXIOS-stent-and%20delivery-system.pdf', '_blank');  


   }else if(pacerValue.toUpperCase() === 'KYLEENA'){
   window.open('implantGuides/kyleena.html', '_blank');
   
   }else if(pacerValue.toUpperCase() === 'ALTO'|| pacerValue.toUpperCase() === '6XX' || pacerValue.toUpperCase() === 'GRACE MEDICAL' || pacerValue.toUpperCase() === 'GRACE MEDICAL OTOLOGIC IMPLANTS' || pacerValue.toUpperCase() === '612-001L' ){
   window.open('https://www.gracemedical.com/mri-info/', '_blank');  




  }else if(pacerValue.toUpperCase() === '8637'  || pacerValue.toUpperCase() === 'SYNCHROMED'  || pacerValue.toUpperCase() === 'SYNCHROMED2'  || pacerValue.toUpperCase() === 'SYNCHROMED 2' || pacerValue.toUpperCase() === '8626'  || pacerValue.toUpperCase() === '8627'  || pacerValue.toUpperCase() === '8615'  || pacerValue.toUpperCase() === '8616'  || pacerValue.toUpperCase() === '8617'  || pacerValue.toUpperCase() === '8618'  || pacerValue.toUpperCase() === 'ISOMED' || pacerValue.toUpperCase() === '8472' || pacerValue.toUpperCase() === 'SYNCHROMED 3' || pacerValue.toUpperCase() === '8667'){
   window.open('../implantGuides/synchromed.html', '_blank');

  }else if(pacerValue.toUpperCase() === 'ABBOTT MITRA CLIP'){
   window.open('Docs/mitraClip.pdf', '_blank');  

   
  }else if(pacerValue.toUpperCase() === 'ABBOTT MITRA CLIP G4'){
   window.open('abbottImplants/mitraClipG4.pdf', '_blank'); 


  }else if(pacerValue.toUpperCase() === 'BIOMONITOR 3'|| pacerValue.toUpperCase() === 'BIOMONITOR3' || pacerValue.toUpperCase() === 'BIOMONITOR III' || pacerValue.toUpperCase() === '436066'){
   window.open('biotronikImplants/biomonitor3.html', '_blank');  

  }else if(pacerValue.toUpperCase() === '6660'|| pacerValue.toUpperCase() === '6662' || pacerValue.toUpperCase() === '6170' || pacerValue.toUpperCase() === '6171' || pacerValue.toUpperCase() === '6172' || pacerValue.toUpperCase() === '6173' || pacerValue.toUpperCase() === '6371' || pacerValue.toUpperCase() === '6372' || pacerValue.toUpperCase() === 'INFINITY'){
   window.open('abbottImplants/dbs.pdf', '_blank');  

   
  }else if(pacerValue.toUpperCase() === 'IMPULSE'|| pacerValue.toUpperCase() === 'OPTIMIZER' || pacerValue.toUpperCase() === 'IMPULSE DYNAMICS'){
   window.open('Docs/impulseOptimizer.pdf', '_blank');  

  }else if(pacerValue.toUpperCase() === 'HYDRUS MICROSTENT'|| pacerValue.toUpperCase() === 'HYDRUS' || pacerValue.toUpperCase() === 'IVANTIS' || pacerValue.toUpperCase() === 'FOOO22'){
   window.open('https://www.accessdata.fda.gov/cdrh_docs/pdf17/P170034D.pdf', '_blank'); 

  /*LivaNova----------------------------------------------*/
   
   }else if(pacerValue.toUpperCase() === 'LIVANOVA' || pacerValue.toUpperCase() === '103' || pacerValue.toUpperCase() === '105' || pacerValue.toUpperCase() === '106' || pacerValue.toUpperCase() === '1000' || pacerValue.toUpperCase() === 'DEMIPULSE' || pacerValue.toUpperCase() === 'ASPIREHC' || pacerValue.toUpperCase() === 'ASPIRESR' || pacerValue.toUpperCase() === 'SENTIVA' || pacerValue.toUpperCase() === '102' || pacerValue.toUpperCase() === 'PULSE DUO' || pacerValue.toUpperCase() === '102R' || pacerValue.toUpperCase() === 'DEMIPULSE DUO'){
   window.open('https://www.livanova.com/epilepsy-vnstherapy/getmedia/7a696c39-8777-4d24-afdf-fea7d54b7475/im-7601036-epi-mri-guidelines-digital_5.pdf', '_blank');

   }else if(pacerValue.toUpperCase() === '100C' || pacerValue.toUpperCase() === '101') {
   window.open('https://www.livanova.com/epilepsy-vnstherapy/en-us/hcp/mri-safety/q2/b', '_blank'); 

  /*End of LivaNova-----------------------------------------------------*/

   }else if(pacerValue.toUpperCase() === '100B' || pacerValue.toUpperCase() === 'COLOPLAST'|| pacerValue.toUpperCase() === 'GENESIS' || pacerValue.toUpperCase() === 'ACU-FORM'|| pacerValue.toUpperCase() === 'ACUFORM' || pacerValue.toUpperCase() === 'MALLEABLE'|| pacerValue.toUpperCase() === 'TITAN'|| pacerValue.toUpperCase() === 'ALPHA 1'|| pacerValue.toUpperCase() === 'ALPHA1'|| pacerValue.toUpperCase() === 'MARK 2'|| pacerValue.toUpperCase() === 'MARK2'|| pacerValue.toUpperCase() === 'EXCEL') {
   window.open('https://iu.coloplast.us/wp-content/uploads/2022/02/MRI-Compatibility-and-Latex-Content-Memo-Penile-Prostheses.pdf', '_blank'); 


   }else if(pacerValue.toUpperCase() === 'CORDIS' || pacerValue.toUpperCase() === 'PALMAZ'|| pacerValue.toUpperCase() === 'PALMAZ GENESIS'|| pacerValue.toUpperCase() === 'PG295P'|| pacerValue.toUpperCase() === 'PG395P') {
   window.open('https://www.rad.pitt.edu/sites/rad_docs/mrrc-docs/Cordis_Palmaz_stent.pdf', '_blank'); 

   }else if(pacerValue.toUpperCase() === 'BOSTON SCIENTIFIC WALLSTENT' || pacerValue.toUpperCase() === 'BOSTON SCIENTIFIC EXPRESS SD RENAL'|| pacerValue.toUpperCase() === 'WALLGRAFT' || pacerValue.toUpperCase() === 'BOSTON SCIENTIFIC CAROTID WALLSTENT'|| pacerValue.toUpperCase() === 'BOSTON SCIENTIFIC EPIC' || pacerValue.toUpperCase() === 'BOSTON SCIENTIFIC WALFLEX'|| pacerValue.toUpperCase() === 'BOSTON SCIENTIFIC SENTINOL'|| pacerValue.toUpperCase() === 'BOSTON SCIENTIFIC GREENFIELD'|| pacerValue.toUpperCase() === 'BOSTON SCIENTIFIC TITANIUM GREENFIELD'|| pacerValue.toUpperCase() === 'BOSTON SCIENTIFIC INNOVA' || pacerValue.toUpperCase() === 'BOSTON SCIENTIFIC EXPRESS LD ILIAC' || pacerValue.toUpperCase() === 'BOSTON SCIENTIFIC EXPRESS LD BILIARY') {
   window.open('https://www.bostonscientific.com/content/dam/bostonscientific/pi/portfolio-group/resources/MRI%20Compatibility%20for%20PI%20Products.pdf', '_blank'); 

   
   }else if(pacerValue.toUpperCase() === 'ABSOLUTE PRO' || pacerValue.toUpperCase() === 'ABSOLUTE'|| pacerValue.toUpperCase() === 'OMNILINK ELITE'|| pacerValue.toUpperCase() === 'OMNILINK') {
   window.open('https://www.accessdata.fda.gov/cdrh_docs/pdf11/P110043c.pdf', '_blank'); 

   }else if(pacerValue.toUpperCase() === 'LUX-DX' || pacerValue.toUpperCase() === 'LUX-DX2'|| pacerValue.toUpperCase() === 'LUX-DX 2'|| pacerValue.toUpperCase() === 'M301' || pacerValue.toUpperCase() === 'M302' || pacerValue.toUpperCase() === 'M312') {
   window.open('bostonImplants/lux-dx.pdf', "_blank");


   }else if(pacerValue.toUpperCase() === '638R' || pacerValue.toUpperCase() === '638B'|| pacerValue.toUpperCase() === '638RL32'|| pacerValue.toUpperCase() === '638RL' || pacerValue.toUpperCase() === 'MEDTRONIC ANNULOPLASTY RING' || pacerValue.toUpperCase() === 'MEDTRONIC ANNULOPLASTY' || pacerValue.toUpperCase() === 'CG FUTURE') {
   window.open('medtronicImplants/medtronicAnnuloplastyRing.pdf', '_blank');


   }else if(pacerValue.toUpperCase() === 'ANGELMED GUARDIAN' || pacerValue.toUpperCase() === 'GUARDIAN'|| pacerValue.toUpperCase() === 'ANGEL MED GUARDIAN'|| pacerValue.toUpperCase() === 'ANGELMED') {
   window.open('https://www.mrisafety.com/TMDL_view.php?editid1=5114', '_blank'); 

   }else if(pacerValue.toUpperCase() === 'RESOLUTE INTEGRITY' || pacerValue.toUpperCase() === 'RESOLUTE' || pacerValue.toUpperCase() === 'INTEGRITY'){
   window.open('https://www.medtronic.com/content/dam/emanuals/cardio/M724130B001DOC1_AA_view_color.pdf', '_blank'); 

     /*Implant guide alert page--------------------------------------*/
   }else if(pacerValue.toUpperCase() === 'SAPIEN 3' || pacerValue.toUpperCase() === 'SAPIEN3' || pacerValue.toUpperCase() === 'EDWARDS SAPIEN 3' || pacerValue.toUpperCase() === 'SAPIEN' || pacerValue.toUpperCase() === '9600CM20A' || pacerValue.toUpperCase() === '9600CM23A'|| pacerValue.toUpperCase() === '9600CM26A'|| pacerValue.toUpperCase() === '9600CM29A' || pacerValue.toUpperCase() === '9600TFX'){
   window.open('../implantGuides/sapien.html', '_blank'); 

   }else if(pacerValue.toUpperCase() === 'PROMUS ELITE' || pacerValue.toUpperCase() === 'PROMUS'|| pacerValue.toUpperCase() === 'MONORAIL') {
   window.open('https://www.bostonscientific.com/content/dam/elabeling/ic/50920154-01A_Promus%20Elite_DFU_en_s.pdf', '_blank'); 

   }else if(pacerValue.toUpperCase() === 'BAROSTIM' || pacerValue.toUpperCase() === 'BAROSTIM NEO'|| pacerValue.toUpperCase() === 'BAROSTIMNEO' || pacerValue.toUpperCase() === 'BAROSTIMNEO2'|| pacerValue.toUpperCase() === 'BAROSTIM NEO2' || pacerValue.toUpperCase() === 'BAROSTIM LEGACY' || pacerValue.toUpperCase() === '2100' || pacerValue.toUpperCase() === '2102' || pacerValue.toUpperCase() === '2104') {
   window.open('https://www.cvrx.com/wp-content/uploads/2022/04/900133-004B_IFU_MRI.pdf', '_blank'); 


   
   }else if(pacerValue.toUpperCase() === 'ONYX' || pacerValue.toUpperCase() === 'LIQUID EMBOLIC SYSTEM'  || pacerValue.toUpperCase() === 'ONYX HD-500'  || pacerValue.toUpperCase() === 'HD-500'  || pacerValue.toUpperCase() === 'HD500') {
   window.open('https://www.mrisafety.com/TMDL_list.php?qs=Onyx', '_blank'); 

   }else if(pacerValue.toUpperCase() === 'ENTERRA' || pacerValue.toUpperCase() === '3116'){
    window.open('../implantGuides/enterra.html', '_blank'); 



   }else if(pacerValue.toUpperCase() === 'ENTERRA 2' || pacerValue.toUpperCase() === 'ENTERRA2'  || pacerValue.toUpperCase() === 'ENTERRA II'  || pacerValue.toUpperCase() === 'ENTERRAII'  || pacerValue.toUpperCase() === '37800') {
   window.open('https://enterramedical.com/wp-content/uploads/169-MRI-Guidelines-Physicians-Manual_r6a_FNL-interactive.pdf', '_blank'); 

   }else if(pacerValue.toUpperCase() === 'MCA GEM COUPLER' || pacerValue.toUpperCase() === 'COUPLER RING'
   || pacerValue.toUpperCase() === 'SYNOVIS MICRO COMPANY' || pacerValue.toUpperCase() === 'SYNOVIS'|| pacerValue.toUpperCase() === 'GEM COUPLER' || pacerValue.toUpperCase() === 'COUPLER' || pacerValue.toUpperCase() === 'COUPLER RINGS'){
    window.open('Docs/MriCoupler.pdf', '_blank'); 

   }else if(pacerValue.toUpperCase() === 'ONYX STENT' || pacerValue.toUpperCase() === 'ONYX FRONTIER'|| pacerValue.toUpperCase() === 'FRONTIER') {
   window.open('https://www.medtronic.com/content/dam/emanuals/cardio/M016449C001DOC1-D_view.pdf', '_blank');
   
   }else if(pacerValue.toUpperCase() === 'XIENCE SKYPOINT' || pacerValue.toUpperCase() === 'SKYPOINT'|| pacerValue.toUpperCase() === 'SKYPOINT STENT') {
   window.open('abbottImplants/skypoint.pdf', '_blank');

   }else if(pacerValue.toUpperCase() === 'XIENCE SIERRA' || pacerValue.toUpperCase() === 'SIERRA'|| pacerValue.toUpperCase() === 'SIERRA STENT') {
   window.open('abbottImplants/Sierra.pdf', '_blank');

   
   }else if(pacerValue.toUpperCase() === 'XIENCE PRIME' || pacerValue.toUpperCase() === 'PRIME'|| pacerValue.toUpperCase() === 'PRIME STENT') {
   window.open('abbottImplants/prime.pdf', '_blank');

   }else if(pacerValue.toUpperCase() === 'ALIZEA DR' || pacerValue.toUpperCase() === 'ALIZEA SR'|| pacerValue.toUpperCase() === 'CELEA DR' || pacerValue.toUpperCase() === 'CELEA SR') {
   window.open('https://www.crm.microport.com/automri/en/radiologist/tool/result/1-5-3t-fb-brady-step-1#device', '_blank');

   }else if(pacerValue.toUpperCase() === 'BOSTON SCIENTIFIC VENOUS WALLSTENT') {
   window.open('https://www.bostonscientific.com/content/dam/elabeling/pi/50607601-01B_Venous%20Wallstent_eDFU_US_s.pdf', '_blank');

   }else if(pacerValue.toUpperCase() === 'BOSTON SCIENTIFIC CAROTID WALLSTENT') {
   window.open('https://www.bostonscientific.com/content/dam/elabeling/pi/91018684-01A_Carotid%20Wallstent%20MR_DFU_en-US_s.pdf', '_blank');

   }else if(pacerValue.toUpperCase() === 'CARPENTIER-EDWARDS AORTIC AND MITRAL BIOPROSTHESES' || pacerValue.toUpperCase() === '2625'|| pacerValue.toUpperCase() === '6625' || pacerValue.toUpperCase() === '2650' || pacerValue.toUpperCase() === '6625LP'  || pacerValue.toUpperCase() === '6625-ESR-LP' || pacerValue.toUpperCase() === '2700'  || pacerValue.toUpperCase() === '2700TFX' || pacerValue.toUpperCase() === '2800' || pacerValue.toUpperCase() === '2800TFX' || pacerValue.toUpperCase() === '3000' || pacerValue.toUpperCase() === '3000TFX' || pacerValue.toUpperCase() === '3300TFX' || pacerValue.toUpperCase() === '6900' || pacerValue.toUpperCase() === '6900P' || pacerValue.toUpperCase() === '6900PTFX' || pacerValue.toUpperCase() === '7000' || pacerValue.toUpperCase() === '7000TFX' || pacerValue.toUpperCase() === '8300AB' || pacerValue.toUpperCase() === '9000PHV' || pacerValue.toUpperCase() === '11500A' || pacerValue.toUpperCase() === '11060A' || pacerValue.toUpperCase() === '11400M' || pacerValue.toUpperCase() === '9000'  || pacerValue.toUpperCase() === '9000TFX'  || pacerValue.toUpperCase() === '9300TFX'  || pacerValue.toUpperCase() === '9600TFX'  || pacerValue.toUpperCase() === '9750TFX' || pacerValue.toUpperCase() === '9755RSL' || pacerValue.toUpperCase() === '14000RSL' || pacerValue.toUpperCase() === 'TMV3040B' || pacerValue.toUpperCase() === '9650TMV' || pacerValue.toUpperCase() === '9850TMV' || pacerValue.toUpperCase() === '9850EV44' || pacerValue.toUpperCase() === '9850EV48' || pacerValue.toUpperCase() === '9850EV52' || pacerValue.toUpperCase() === '9850EV56' || pacerValue.toUpperCase() === '20000IS' || pacerValue.toUpperCase() === '20000ISM' || pacerValue.toUpperCase() === '9551S' || pacerValue.toUpperCase() === '29AP4045' || pacerValue.toUpperCase() === '9600TFX' || pacerValue.toUpperCase() === '9770DDS' || pacerValue.toUpperCase() === '9780DDS'|| pacerValue.toUpperCase() === '9680DSC' || pacerValue.toUpperCase() === '9680TFX29M' || pacerValue.toUpperCase() === '9880DDS' || pacerValue.toUpperCase() === '9880TFX29M' ) {
   window.open('https://assets-us-01.kc-usercontent.com/6239a81e-8f0f-0040-a1df-b4932a10f6ae/c1db6423-2795-4037-be0a-c6f7cb58d10a/US_MRI_Letter%20v12.pdf', '_blank');


   }else if(pacerValue.toUpperCase() ===  'BOSTON SCIENTIFIC VERCISE GENUS'
   || pacerValue.toUpperCase() === 'DB‑1408' || pacerValue.toUpperCase() === 'DB‑1416' || pacerValue.toUpperCase() === 'DB‑1432' || pacerValue.toUpperCase() === 'DB‑1216' || pacerValue.toUpperCase() === 'DB‑1232' || pacerValue.toUpperCase() === 'DB-1200-S'){
    window.open('https://www.bostonscientific.com/content/dam/bostonscientific/neuro/portfolio-group/vercise-genus-dbs-system/NM-630016-AB%20US_DBS-Vercise-Directional-Systems-MRI-Conditions-Chart_Final.pdf', '_blank'); 

   
   }else if(pacerValue.toUpperCase() === 'MEDTRONIC RESOLUTE ONYX'){
    window.open('medtronic/medtronicResoluteOnyx.pdf', '_blank'); 


    }else if(pacerValue.toUpperCase() === 'BRAVO'){
    window.open('../implantGuides/medtronicBravo.html', '_blank'); 

    }else if(pacerValue.toUpperCase() === 'CODMAN CERELINK ICP'){
    window.open('Docs/cereLinkIcp.pdf', '_blank'); 

   }else if(pacerValue.toUpperCase() === 'CODMAN MICROSENSOR ICP'){
    window.open('Docs/codmanMicroSensorIcp.pdf', '_blank');
    
    
   }else if(pacerValue.toUpperCase() === 'ABBOTT AMULET LEFT ATRIAL APPENDAGE OCCLUDER'){
    window.open('abbottImplants/abbottAmulet.pdf', '_blank'); 


   }else if(pacerValue.toUpperCase() === 'REMUNITY PUMP FOR REMODULIN'){
    window.open('implantGuides/remunityPump.html', '_blank'); 

   }else if(pacerValue.toUpperCase() === 'EV3 EVERFLEX PERIPHERAL STENT' || pacerValue.toUpperCase() === 'EV3 PROTEGE EVERFLEX  BILIARY STENT' ){
    window.open('/implantGuides/everFlexStent.html', '_blank');

   }else if(pacerValue.toUpperCase() === 'EV3 PROTEGE EVERFLEX PERIPHERAL STENT' ){
    window.open('Docs/protegeEverflexPeripheralStent.pdf', '_blank');

    
    }else if(pacerValue.toUpperCase() === 'ABBOTT SJM REGENT MECHANICAL HEART VALVES' || pacerValue.toUpperCase() ===  'ABBOTT SJM STANDARD AND MASTERS SERIES MECHANICAL HEART VALVES' || pacerValue.toUpperCase() === 'ABBOTT BIOCOR STENTED TISSUE VALVES' || pacerValue.toUpperCase() === 'ABBOTT EPIC STENTED TISSUE VALVES'  || pacerValue.toUpperCase() === 'ABBOTT TRIFECTA TISSUE VALVES'|| pacerValue.toUpperCase()  === 'ABBOTT SJM RIGID SADDLE ANNULOPLASTY RINGS' || pacerValue.toUpperCase() === 'ABBOTT SJM SEMI-RIGID ANNULOPLASTY RINGS' || pacerValue.toUpperCase()  === 'ABBOTT ATTUNE FLEXIABLE ADJUSTABLE ANNULOPLASTY RINGS' || pacerValue.toUpperCase() === 'ABBOTT SJM TAILOR FLEXIBLE ANNULOPLASTY RINGS' || pacerValue.toUpperCase()  === 'ABBOTT SJM TAILOR FLEXIABLE ANNULOPLASTY BAND'){
    window.open('abbottImplants/abbottHeartValves.pdf', '_blank');


  

    
   }else if(pacerValue.toUpperCase() === 'NEXPLANON CONTRACEPTIVE IMPLANT'){
    window.open('https://www.mrisafety.com/TMDL_view.php?editid1=7412', '_blank');

   }else if(pacerValue.toUpperCase() === 'BOSTON SCIENTIFIC ADVANIX BILIARY STENT'){
    window.open('implantGuides/advanixBiliaryStent.html', '_blank');

   }else if(pacerValue.toUpperCase() === 'SCLERAL BUCKLE'){
    window.open('Docs/scleralBuckle.html', '_blank');

    }else if(pacerValue.toUpperCase() === 'BOSTON SCIENTIFIC FIBERED IDC' || pacerValue.toUpperCase() === 'BOSTON SCIENTIFIC INTERLOCKING DETACHABLE COIL' || pacerValue.toUpperCase() === 'BOSTON SCIENTIFIC VORTX COIL' || pacerValue.toUpperCase() === 'BOSTON SCIENTIFIC VORTX DIAMOND COIL' || pacerValue.toUpperCase() === 'BOSTON SCIENTIFIC VORTX MULTILOOP COIL' || pacerValue.toUpperCase() === 'BOSTON SCIENTIFIC COMPLEX HELICAL COIL' || pacerValue.toUpperCase() === 'BOSTON SCIENTIFIC 2D HELICAL COIL'  || pacerValue.toUpperCase() === 'BOSTON SCIENTIFIC FIBERED PLATINUM COIL' ){
    window.open('bostonImplants/bostonInterlockCoil.pdf', '_blank');

   }else if(pacerValue.toUpperCase() === 'STRYKER HOFFMANN 2'){
    window.open('Docs/Hoffmann2.pdf', '_blank');

   }else if(pacerValue.toUpperCase() === 'STRYKER HOFFMANN 3'){
    window.open('Docs/Hoffmann3.pdf', '_blank');

    
   }else if(pacerValue.toUpperCase() === 'STRYKER HOFFMANN LRF'){
    window.open('Docs/HoffmannLRF.pdf', '_blank');

   }else if(pacerValue.toUpperCase() === 'PARAGARD IUD'){
    window.open('Docs/paragardIud.pdf', '_blank');

    
   



   /*  window.open('bostonImplants/lux-dx.pdf', "_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=50,left=0,right=0,width=300,height=300");*/
   
   

  


}else{
      alert("Something went wrong please try again. If that doesn't work use slideout/hamburger menu(UPPER LEFT CORNER OF WEBPAGE 3 Horizontal lines) for manufactures website search."
      );
     }     
}
        




document.getElementById('resultBoxId').onclick = function(){
  var implantInput = document.getElementById('implant');
implantInput.addEventListener('keyup', function(event){
  if(event.key === "13"){
    event.preventDefault();
    document.getElementById('pacerSubmit').click();
  }
});
  implantLookup();
}






