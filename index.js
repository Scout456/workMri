const availableKeywords = ['ADVISA', 'A3SR01', 'ADVISA SR', 'ADVISA DR', 'A2DR01','ENSURA','EN1DR01','EN1SR01','AZURE XT DR','W1DR01','AZURE','W1SR01','W3SR01','W3DR01','PERCUFLEX PLUS','YASARGIL','SUGITA', 'MIZUHO','VIRTUOSO','D154AWG','NEVRO','SENZA','NIPG1000','NIPG1500','NIPG2000','NIPG2500','MICRA VR', 'MICRA','MC1VR01', 'MICRA AV','MC1AVR1','ATTESTA DR','ATDR01','ATTESTA L DR','ATDRL1','ATTESTA S DR','ATTESTA','ATDRS1','ATTESTA SR','ATSR01','MEDTRONIC RESTORE','37712', 'SPHERA SR','SPSR01','SPHERA DR','SPDR01','SPHERA L DR','SPDRL1','SPHERA','ASTRA','REVO','RVDR01','COBALT XT','DVPA2D1','DVPA2D4' ,'DDPA2D1', 'DDPA2D4','DVPB3D1','DVPB3D4','DDPB3D1','COBALT','DDPB3D4','CROME','DVPC3D4','DVPC3D1','DDPC3D4','DDPC3D1', 'PRIMO','DDMD3D1','DDMD3D4','DVMD3D1','DVMDD3D4','MIRRO', 'DVME3D1','DVME3D4','DDME3D1','DDME3D4','VISIA AF','DVFB1D1', 'DVFB1D1','DVFB1D4','DVFC3D1', 'DVFC3D4','EVERA XT','DDMB1D4','DVMB1D4','DDMB1D1','DVMB1D1','DVMB1D1','DDMC3D4','DDMC3D1', 'DVMC3D1','DVMC3D4','CLARIA','DTMA1QQ','DTMA1Q1','DTMA1D4','DTMA1D1','AMPLIA','DTMB1QQ', 'DTMB1Q1','DTMB1D4','DTMB1D1', 'COMPIA','DTMC1QQ','DTMC1D1','DTMCC1D1','PERCEPTA','W4TR01','W1TR01','SERENA', 'W4TR02','W1TR02','SOLARA','W4TR03','W1TR03','LINQ11','LINQ22','LNQ11', 'LNQ22','REVEAL XT','9529','MEDTRONIC ACTIVA PC DBS','MEDTRONIC ACTIVA SC DBS','MEDTRONIC ACTIVA RC DBS','37601','37603','37612','37602','MEDTRONIC SOLETRA DBS','MEDTRONIC KINETRA DBS','7426','MEDTRONIC PRIME ADVANCED NEUROSTIMULATOR','97702','97715', '97716','977005', '977006', '97712','97713','97714','37701','37702','37703','37704','37711','37712', '37713','37714','7479', '7479B','7427','7427V','KINETRA','7428','MEDTRONIC PERCEPT PC DBS','MEDTRONIC PERCEPT RC DBS','B35200','OPTIMA COIL','BARRICADE COIL','PENUMBRA COIL','SPETZLER TITANIUM ANEURYSM CLIP', 'OPTION ELITE','AXONICS','1101','4101','VANTA','977006','MEDTRONIC ITREL 4','37704', '37703', 'MEDTRONIC ITREL 3','7425','MEDTRONIC RESTORE SENSOR','37714',' MEDTRONIC RESTORE ULTRA','97712','MEDTRONIC RESTORE ADVANCED','97713','97714','37711','MEDTRONIC SYNERGY','7427','MEDTRONIC VERSITREL','MEDTRONIC NEUROSTIMULATOR','BOSTON SCIENTIFIC AMS 700','BOSTON SCIENTIFIC AMS 800','MEDTRONIC INTERSTIM','MEDTRONIC INTERSTIM 2','MEDTRONIC INTERSTIM X','MEDTRONIC INTERSTIM TWIN','3023','3058', '97810','97800','7427T','ENITRA','EVITY','ENTICOS','EDORA','INSPIRE','3028','3024','ACTICOR 7 DR-T','ACTICOR 7 VR-T','BIOMONITOR 3M','INVENTRA 7 VR-T DX','RIVACOR 7 VR-T','RIVACOR 7 DR-T','ACTICOR 7','ABBOTT LEADLESS PACEMAKER AVEIR','ASSURITY','LSP112V','LSP202V','LSP201A','PM1272','PM2272','ENDURITY','PM1172','PM2172','ACCENT','PM1224','PM2218','QUADRA ALLURE','PM3542','QUADRA ALLURE MP','PM3562','ELLIPSE','CD1311-36Q','CD1311','ELLIPSE','CD1411-36Q','CD1311','CD1411-36Q','CD1411-36QC','CD1411','CD2311-36Q','CD2311','CD2411-36Q','CD2411-36QC','CD2411','CODMAN HAKIM','CODMAN CERTAS','CODMAN','FORTIFY ASSURA','CD1357-40Q','CD1357-40QC','CD2357-40Q','CD2357-40QC','CD2357','QUADRA ASSURA','CD3365-40Q','CD3365-40QC','CD3365','CD3369-40Q','CD3369-40QC','CD3369','PROCLAIM XR','3660','3662','ESSURE','INGENIO', 'K173','PROCLAIM','3662', 'PROCLAIM DRG','3664','PROTEGE','3771','3772','INFINITY 5','INFINITY 7','LIBERTA RC','62400','6660','6662','GALLANT','CDVRA500Q','CDHFA500Q','VITALIO','K275','K277','L110','L111','L131','L210','ESSENTIO','PROPONENT','L211','L231','ACCOLADE','L310','L311','L331','VALITUDE','U128','VISIONIST','U228','EMBLEM','A219','PRECISION MONTAGE MRI','SC-1200','SC1200','PRECISION SPECTRA','SC-1132','SC1132','SPECTRA WAVEWRITER','SC-1160','SC1160','WAVEWRITER ALPHA IPG','WAVEWRITER ALPHA 16 IPG','WAVEWRITER ALPHA PRIME IPG','WAVEWRITER ALPHA PRIME 16 IPG','SC-1232','SC-1216','SC-1432','SC-1416','ADAPTA','ADDR01','ADDR03','ADDRO6','ADDRS1','VERSA','SENSIA','VEDR01','SEDR01','SEDRL1','SED01','SESR01','SES01','RELIA','REDRO1','RED01','RESR01','RES01','REVDD01','AVANT','NEUTRINO','CDVRA700Q','CDDRA700Q','CDVRA800Q','CDVRA600Q','CDDRA800Q','CDDRA600Q','CDHFA700Q','CDHFA800Q','CDHFA600Q','ENTRANT','CDVRA300Q','CDDRA300Q','CDHFA300Q','WATCHMAN','AMPLATZER AMULET','AMPLATZER VASCULAR PLUG 4','AMPLATZER VASCULAR PLUG 2','AMPLATZER DUCT OCCLUDER 2','AMPLATZER SEPTAL OCCLUDER','AMPLATZER TALISMAN PFO OCCLUDER','AMPLATZER PICCOLO OCCLUDER','UROLIFT','PIPELINE FLEX EMBOLIXATION DEVICE','WAVECREST','VILIGANT','D220','D221','D232','D233','G248','G247','COCHLEAR','MED-EL COCHLEAR SYNCHRONY 2','MI1250','MI1200','MED-EL COCHLEAR CONCERT','MI1000','MED-EL COCHLEAR SONATA','MED-EL COCHLEAR PULSAR','C40+','C40','ASSURANCE HEMOCLIP','RHYTHMLINK','RESOLUTION CLIP','RESOLUTION CLIP 360','RESOLUTION CLIP 360 ULTRA','MIRENA IUD','1001','KURZ MIDDLE EAR IMPLANTS','VIGILANT','G228','G248','G237','G237','G224','G225','AUTOGEN','G166','G168','G160','G161','G168','DYNAGEN','G156', 'G158','G150','G151','INOGEN','G146','G148','G140','G141','MOMENTUM','G128','G138','G124','G125','ORIGEN','G056','G058','G050','G051','RESONATE','G524','G525','G528','G548','G537','G547','G428','G448','G437','G447','G424','G425','D160','D161','D162','D163','D150','D151','D152','D020','D021','D153','D022','D023','D140','D141','D142','D143','G146','G148','G140','D013','D051','D052','D053','D000','G058','G050','D001','D002','D003','PERCIVA','D500','D501','D512','D513','D400','D401','D412','D413','D520','D521','D532','D533','D420','D421','D432','D433','D220','D221','D232','D233','MEDTRONIC STRATA','MEDTRONIC STRATA 2','COCHLEAR IMPLANT','CI632','CI624','CI622','CI612','CI532','CI522','CI512','ABI541','CI422','CI24REH','CI24RECA','CI24REST','ABI24M','CI24R','CI24R','CI24M','CI11+11+2M','CI22M','ADVANCED BIONICS','HIRES ULTRA 3D','NUCLEUS','OSIA','BAHA','VISTAFIX','BOSTON SCIENTIFIC WALLFLEX STENT','PROGAV 2.0','GORE','GORE TAG','GORE VIABIL','GORE CARDIOFORM','GORE EXCLUDER','GORE VIABAHN','GORE VIATORR','GORE BIO-A','GORE TEX','LOCKADO HEMOSTASIS CLIP','DM3500','ST JUDE CONFIRM RX CARDIAC MONITOR','BOSTON SCIENTIFIC SYNERGY XD','BOSTON SCIENTIFIC SYNERGY MONORAIL','BOSTON SCIENTIFIC AXIOS STENT','KYLEENA IUD','GRACE MEDICAL ALTO OTOLOGIC IMPLANT' ,'6XX','612-001L','8637','8626','8627','8615','8616','8617','8616','8472','ABBOTT MITRA CLIP','ABBOTT MITRA CLIP G4','BIOMONITOR 3','436066','6662','6170','6171','6172','6173','6371','6372','IMPULSE DYNAMICS','OPTIMIZER','HYDRUS MICROSTENT','FOOO22','IVANTIS','LIVANOVA','103','105','106','1000','DEMIPULSE','ASPIREHC','ASPIRESR','SENTIVA','102','PULSE DUO','102R','100C','101','100B','COLOPLAST','GENESIS','ACU-FORM','MALLEABLE','TITAN','ALPHA 1','MARK 2','EXCEL','CORDIS PALMAZ GENESIS STENT','PALMAZ GENESIS','PG295P','PG395P','BOSTON SCIENTIFIC WALLSTENT','BOSTON SCIENTIFIC EXPRESS SD RENAL', 'BOSTON SCIENTIFIC EXPRESS LD ILIAC','BOSTON SCIENTIFIC EXPRESS LD BILIARY','BOSTON SCIENTIFIC WALLGRAFT','BOSTON SCIENTIFIC CAROTID WALLSTENT','BOSTON SCIENTIFIC EPIC','BOSTON SCIENTIFIC WALFLEX','BOSTON SCIENTIFIC SENTINOL','BOSTON SCIENTIFIC GREENFIELD','BOSTON SCIENTIFIC TITANIUM GREENFIELD','BOSTON SCIENTIFIC INNOVA','ABBOTT ABSOLUTE PRO','ABBOTT OMNILINK ELITE','BOSTON SCIENTIFIC LUX-DX','BOSTON SCIENTIFIC LUX-DX2','M301','M302','M312','638R','638B','638RL32','638RL','MEDTRONIC ANNULOPLASTY RING','ANGELMED GUARDIAN','MEDTRONIC RESOLUTE INTEGRITY','EDWARDS SAPIEN 3','9600CM20A','9600CM23A','9600CM26A','9600CM29A','9600TFX','BOSTON SCIENTIFIC PROMUS ELITE','BAROSTIM','BAROSTIM NEO','BAROSTIM NEO2','BAROSTIM LEGACY','2100','2102','2104','MEDTRONIC ONYX LIQUID EMBOLIC SYSTEM','ONYX HD-500','ENTERRA','3116','ENTERRA 2','37800','MCA GEM COUPLER','SYNOVIS MICRO COMPANY','MEDTRONIC ONYX FRONTIER STENT','ABBOTT XIENCE SKYPOINT STENT','ABBOTT XIENCE SIERRA STENT','ABBOTT XIENCE PRIME STENT','ALIZEA DR','ALIZEA SR','CELEA DR','CELEA SR','COSMOS PLATINUM COILS','HYDROFRAME COIL','MICROPLEX  COIL','HYDRO COIL','MICROPORT PACEMAKERS','MEDTRONIC RESOLUTE ONYX','BIOMONITOR 2','BIOMONITOR 4','BIOMONITOR','LP COIL','RUBY COIL','PENUMBRA POD SYSTEM','BOSTON SCIENTIFIC VENOUS WALLSTENT','BOSTON SCIENTIFIC CAROTID WALLSTENT','Carpentier-Edwards aortic and mitral bioprostheses','2625','6625','2650','6625LP','6625-ESR-LP','4300','2700','2700TFX','2700','2800TFX','3000','3000TFX','3300TFX','6900','6900P','6900PTFX','7000','7000TFX','7200TFX','7300TFX','8300AB','11500A','11060A','11400M','9000','9000TFX','9000PHV','9300TFX','9600TFX','9750TFX','9755RSL','14000RSL','TMV3040B','9650TMV','BOSTON SCIENTIFIC VERCISE GENUS','DB‑1408','DB‑1416','DB‑1432','DB‑1216','DB‑1232','DB-1200-S','CG FUTURE','9850TMV','9850EV44','9850EV48','9850EV52','9850EV56','20000IS','20000ISM','9551S','29AP4045','9600TFX','9770DDS','9780DDS','9680DSC','9680TFX29M','9880DDS','9880TFX29M','CDVRA500Q','CDDRA500Q','CDHFA500Q','BRAVO PH CAPSULE',' 2','SYNCHROMED 2','SYNCHROMED 3','SYNCHROMED EL','SYNCHROMED','8667','CODMAN CERELINK ICP','CODMAN MICROSENSOR ICP','ABBOTT AMULET LEFT ATRIAL APPENDAGE OCCLUDER','REMUNITY PUMP FOR REMODULIN','B35300','EV3 EVERFLEX PERIPHERAL STENT','EV3 PROTEGE EVERFLEX  BILIARY STENT','EV3 PROTEGE EVERFLEX PERIPHERAL STENT','ABBOTT SJM REGENT MECHANICAL HEART VALVES','ABBOTT SJM STANDARD AND MASTERS SERIES MECHANICAL HEART VALVES','ABBOTT BIOCOR STENTED TISSUE VALVES','ABBOTT EPIC STENTED TISSUE VALVES','ABBOTT TRIFECTA TISSUE VALVES','ABBOTT SJM RIGID SADDLE ANNULOPLASTY RINGS','ABBOTT SJM SEMI-RIGID ANNULOPLASTY RINGS','ABBOTT ATTUNE FLEXIABLE ADJUSTABLE ANNULOPLASTY RINGS','ABBOTT SJM TAILOR FLEXIBLE ANNULOPLASTY RINGS', 'ABBOTT SJM TAILOR FLEXIABLE ANNULOPLASTY BAND','977117','977118','977119', 'ETERNA','32400','NEXPLANON CONTRACEPTIVE IMPLANT','BOSTON SCIENTIFIC ADVANIX BILIARY STENT','SCLERAL BUCKLE','BOSTON SCIENTIFIC FIBERED IDC','BOSTON SCIENTIFIC INTERLOCKING DETACHABLE COIL','BOSTON SCIENTIFIC VORTX COIL','BOSTON SCIENTIFIC VORTX DIAMOND COIL','BOSTON SCIENTIFIC MULTILOOP COIL','BOSTON SCIENTIFIC COMPLEX HELICAL COIL','BOSTON SCIENTIFIC 2D HELICAL COIL','BOSTON SCIENTIFIC FIBERED PLATINUM COIL','STRYKER HOFFMANN 2','STRYKER HOFFMANN 3','STRYKER HOFFMANN LRF','PARAGARD IUD','MEDTRONIC EVOLUT FX TAVR','MEDTRONIC EVOLUT COREVALUE TAVR','MEDTRONIC EVOLUT R TAVR','MEDTRONIC EVOLUT PRO TAVR','MEDTRONIC EVOLUT FX+ TAVR','PENUMBRA SMART COIL','SWIFT COIL SYSTEM','VIVISTIM NEUROSTIMULATOR','GORE DUALMESH','GORE SEAMGUARD','GORE SYNECOR','GRACE MEDICAL 400-XXX, 401-XXX, 402-XXX, 403-XXX, 406-XXX, 408-XXX, 436-XXX','GRACE MEDICAL 1XX, 190-XXX, 749-XXX','GRACE MEDICAL 209, 210, 259, 260, 270, 271, 272, 273, 293, 293A','650-075','655-075','GRACE MEDICAL 756-XXX, 757-XXX','GRACE MEDICAL K-HELIX OTOLOGIC IMPLANT','GRACE MEDICAL STRASNICK OTOLOGIC IMPLANT','GRACE MEDICAL 220-XXX, 270-XXX','GRACE MEDICAL 200 THROUGH 208-250 THROUGH 258, 220-800','104','BOSTON SCIENTIFIC EMBOLD FIBERED COIL','AVANOS ON-Q PUMP','MAGNETIC BLACK STAR URETERAL STENT','GLAUKOS ISTENT','GTS100L','GTS100R','GLAUKOS ISTENT INJECT','G2-M-IS','GLAUKOS ISTENT INJECT W','G2-W','GLAUKOS ISTENT INFINITE', 'IS3','SOPHYSA POLARIS SHUNT','SOPHYSA SM8 SHUNT','SOPHYSA SM1 SHUNT','MEDTRONIC AURORA EV-ICD','VESPER DUO-HYBRID VENOUS STENT','VESPER DUO-EXTEND VENOUS STENT','CORDIS PALMAZ MULLINS XD STENT','DVEA3E4','ATTESTA SR DR','ZILVER VASCULAR STENT', 'SUPERA PERIPHERAL STENT','DENALI VENA CAVA FILTER','OTICON MEDICAL PONTO IMPLANT','STRYKER GDC 360 COIL NEUROVASCULAR USE', 'STRYKER GDC 360 COIL PERIPHERAL USE', 'STRYKER NEUROFORM STENT','STRYKER WINGSPAN STENT', 'STRYKER TARGET COIL PERIPHERAL USE', 'STRYKER TARGET COIL NEUROVASCULAR USE'];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("implant");

inputBox.addEventListener("keyup", () => {
  const input = inputBox.value.toLowerCase();
  const result = input.length
    ? availableKeywords.filter(keyword => keyword.toLowerCase().includes(input))
    : [];

  display(result);

  if (!result.length) {
    resultsBox.innerHTML = '';
  }
});

function display(result) {
  const content = result.map(list => `<li>${list.toLowerCase()}</li>`).join('');
  resultsBox.innerHTML = `<ul>${content}</ul>`;
}

resultsBox.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    selectInput(event.target);
  }
});



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


function selectInput(list) {
  inputBox.value = list.textContent;
  resultsBox.innerHTML = '';
}

const implantMapping = {
   //Medtronic pacemakers
  'ADVISA SR': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_235435.pdf',
  'A3SR01': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_235435.pdf',
  'ADVISA': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_235435.pdf',
  'ADVISA DR': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_235435.pdf',
  'A2DR01': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_235435.pdf',

  //Not FDA approved but MR-conditional Medtronic pacemaker
  'ENSURA': '../implantGuides/ensura.html',
  'EN1DR01': '../implantGuides/ensura.html',
  'EN1SR01': '../implantGuides/ensura.html',

   //Medtronic pacemakers
  'AZURE XT DR': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_260118.pdf',
  'W1DR01': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_260118.pdf',
  'AZURE': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_260118.pdf',
  'W1SR01': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_260118.pdf',
  'W3SR01': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_260118.pdf',
  'W3DR01': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_260118.pdf',

  //Boston Scientific Ureteral Stent
  'PERCUFLEX PLUS': 'http://www.mrisafety.com/TMDL_view.php?editid1=6058',
  

 //Aneurysm Clips
  'YASARGIL': 'Docs/MRI-Safety-Information-Yasargil-Titanium-and-Phynox-Aneurysm-Clips.pdf',
  'SUGITA': 'https://www.mrisafety.com/TMDL_list.php?goto=201',
  'MIZUHO': 'https://www.mrisafety.com/TMDL_list.php?goto=201',//
  'SPETZLER TITANIUM ANEURYSM CLIP': '../implantGuides/spetzler.html',

  //Medtronic ICD
  'VIRTUOSO': 'https://www.mrisafety.com/TMDL_list.php?goto=226',
  'D154AWG':  'https://www.mrisafety.com/TMDL_view.php?editid1=7027',

  //Medtronic Aurora EV-ICD
  'MEDTRONIC AURORA EV-ICD':  'medtronicImplants/medtronicAuroraIcd.pdf',
  'DVEA3E4':  'medtronicImplants/medtronicAuroraIcd.pdf',

  //NEVRO Spinal Cord Stimulation (SCS)
  'NEVRO':  'https://s28.q4cdn.com/260621474/files/doc_downloads/2022/05/1.5T-and-3T-MRI-Guidelines-for-the-Senza-Neuromodulation-Systems-(11096)-Rev-P.pdf',

  'SENZA': 'https://s28.q4cdn.com/260621474/files/doc_downloads/2022/05/1.5T-and-3T-MRI-Guidelines-for-the-Senza-Neuromodulation-Systems-(11096)-Rev-P.pdf',

  'NIPG1000': 'https://s28.q4cdn.com/260621474/files/doc_downloads/2022/05/1.5T-and-3T-MRI-Guidelines-for-the-Senza-Neuromodulation-Systems-(11096)-Rev-P.pdf',

  'NIPG1500': 'https://s28.q4cdn.com/260621474/files/doc_downloads/2022/05/1.5T-and-3T-MRI-Guidelines-for-the-Senza-Neuromodulation-Systems-(11096)-Rev-P.pdf',

  'NIPG2000': 'https://s28.q4cdn.com/260621474/files/doc_downloads/2022/05/1.5T-and-3T-MRI-Guidelines-for-the-Senza-Neuromodulation-Systems-(11096)-Rev-P.pdf',

  'NIPG2500' : 'https://s28.q4cdn.com/260621474/files/doc_downloads/2022/05/1.5T-and-3T-MRI-Guidelines-for-the-Senza-Neuromodulation-Systems-(11096)-Rev-P.pdf',

//Medtronic pacemakers
 'MICRA VR': 'https://www.medtronic.com/content/dam/emanuals/crdm/M992497A001A_view.pdf',
 'MICRA': 'https://www.medtronic.com/content/dam/emanuals/crdm/M992497A001A_view.pdf',
 'MC1VR01': 'https://www.medtronic.com/content/dam/emanuals/crdm/M992497A001A_view.pdf',
 'MICRA AV': 'https://www.medtronic.com/content/dam/emanuals/crdm/M995149A001A_view.pdf', 
 'MC1AVR1': 'https://www.medtronic.com/content/dam/emanuals/crdm/M995149A001A_view.pdf', 

 'ATTESTA DR': 'https://www.medtronic.com/content/dam/emanuals/crdm/M967434A001B_view.pdf', 
 'ATDR01': 'https://www.medtronic.com/content/dam/emanuals/crdm/M967434A001B_view.pdf',  
 'ATTESTA L DR': 'https://www.medtronic.com/content/dam/emanuals/crdm/M967434A001B_view.pdf', 
 'ATDRL1': 'https://www.medtronic.com/content/dam/emanuals/crdm/M967434A001B_view.pdf',   
 'ATTESTA SR DR': 'https://www.medtronic.com/content/dam/emanuals/crdm/M967434A001B_view.pdf', 
 'ATDRS1': 'https://www.medtronic.com/content/dam/emanuals/crdm/M967434A001B_view.pdf',  
 'ATTESTA SR' : 'https://www.medtronic.com/content/dam/emanuals/crdm/M967434A001B_view.pdf', 
 'ATSR01': 'https://www.medtronic.com/content/dam/emanuals/crdm/M967434A001B_view.pdf',
  

 //Medtronic pacemakers
 'SPHERA SR': 'https://www.medtronic.com/content/dam/emanuals/crdm/M967434A001B_view.pdf', 
 'SPSR01': 'https://www.medtronic.com/content/dam/emanuals/crdm/M967434A001B_view.pdf',  
 'SPHERA DR': 'https://www.medtronic.com/content/dam/emanuals/crdm/M967434A001B_view.pdf', 
 'SPDR01': 'https://www.medtronic.com/content/dam/emanuals/crdm/M967434A001B_view.pdf',  
 'SPHERA L DR': 'https://www.medtronic.com/content/dam/emanuals/crdm/M967434A001B_view.pdf', 
 'SPDRL1': 'https://www.medtronic.com/content/dam/emanuals/crdm/M967434A001B_view.pdf', 
 'ATTESTA': 'https://www.medtronic.com/content/dam/emanuals/crdm/M967434A001B_view.pdf', 
 'ATDRL1': 'https://www.medtronic.com/content/dam/emanuals/crdm/M967434A001B_view.pdf', 
 'SPHERA': 'https://www.medtronic.com/content/dam/emanuals/crdm/M967434A001B_view.pdf', 
 'ASTRA': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_260118.pdf',

 'REVO': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_184935.pdf',
 'RVDR01': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_184935.pdf', 

 //Medtronic defibrillators
 'COBALT XT': 'https://www.medtronic.com/content/dam/emanuals/crdm/M988007A001B_view.pdf', 
 'DVPA2D1': 'https://www.medtronic.com/content/dam/emanuals/crdm/M988007A001B_view.pdf',  
 'DVPA2D4': 'https://www.medtronic.com/content/dam/emanuals/crdm/M988007A001B_view.pdf',
 'DDPA2D1': 'https://www.medtronic.com/content/dam/emanuals/crdm/M988007A001B_view.pdf',
 'DDPA2D4': 'https://www.medtronic.com/content/dam/emanuals/crdm/M988007A001B_view.pdf', 
 'DVPB3D1': 'https://www.medtronic.com/content/dam/emanuals/crdm/M988007A001B_view.pdf',
 'DVPB3D4': 'https://www.medtronic.com/content/dam/emanuals/crdm/M988007A001B_view.pdf',
 'COBALT': 'https://www.medtronic.com/content/dam/emanuals/crdm/M988007A001B_view.pdf',
 'DDPB3D4': 'https://www.medtronic.com/content/dam/emanuals/crdm/M988007A001B_view.pdf',
 'DDPB3D1': 'https://www.medtronic.com/content/dam/emanuals/crdm/M988007A001B_view.pdf',

 //Medtronic defibrillators
 'CROME'  : 'https://www.medtronic.com/content/dam/emanuals/crdm/M988007A001B_view.pdf',
 'DVPC3D4': 'https://www.medtronic.com/content/dam/emanuals/crdm/M988007A001B_view.pdf',
 'DVPC3D1': 'https://www.medtronic.com/content/dam/emanuals/crdm/M988007A001B_view.pdf',
 'DDPC3D4': 'https://www.medtronic.com/content/dam/emanuals/crdm/M988007A001B_view.pdf',
 'DDPC3D1': 'https://www.medtronic.com/content/dam/emanuals/crdm/M988007A001B_view.pdf',

 //Medtronic defibrillators
 'PRIMO': 'https://www.medtronic.com/content/dam/emanuals/crdm/M976736A001B_view.pdf',
 'DDMD3D1': 'https://www.medtronic.com/content/dam/emanuals/crdm/M976736A001B_view.pdf',
 'DDMD3D4': 'https://www.medtronic.com/content/dam/emanuals/crdm/M976736A001B_view.pdf',
 'DVMD3D1': 'https://www.medtronic.com/content/dam/emanuals/crdm/M976736A001B_view.pdf',
 'DVMDD3D4': 'https://www.medtronic.com/content/dam/emanuals/crdm/M976736A001B_view.pdf',
 'MIRRO': 'https://www.medtronic.com/content/dam/emanuals/crdm/M976736A001B_view.pdf',
 'DVME3D1': 'https://www.medtronic.com/content/dam/emanuals/crdm/M976736A001B_view.pdf',
 'DVME3D4': 'https://www.medtronic.com/content/dam/emanuals/crdm/M976736A001B_view.pdf',
 'DDME3D1': 'https://www.medtronic.com/content/dam/emanuals/crdm/M976736A001B_view.pdf',
 'DDME3D4': 'https://www.medtronic.com/content/dam/emanuals/crdm/M976736A001B_view.pdf',

 //Medtronic defibrillators
 'VISIA AF': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_235962.pdf',
 'DVFB1D1': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_235962.pdf', 
 'DVFB1D4': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_235962.pdf',
 'DVFC3D1': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_235962.pdf',
 'DVFC3D4': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_235962.pdf',  

 //Medtronic defibrillators
 'EVERA XT': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_235453.pdf',
 'DDMB1D4': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_235453.pdf', 
 'DVMB1D4': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_235453.pdf',
 'DDMB1D1': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_235453.pdf', 
 'DVMB1D1': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_235453.pdf',
 'DDMC3D4': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_235453.pdf', 
 'DDMC3D1': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_235453.pdf',
 'DVMC3D1': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_235453.pdf',  
 'DVMC3D4': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_235453.pdf',  
 'EVERA': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_235453.pdf', 

 //Medtronic defibrillators
 'CLARIA': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_242350.pdf', 
 'DTMA1QQ': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_242350.pdf', 
 'DTMA1Q1': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_242350.pdf', 
 'DTMA1D4': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_242350.pdf', 
 'DTMA1D1': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_242350.pdf', 

 //Medtronic defibrillators
 'AMPLIA': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_241677.pdf', 
 'DTMB1QQ': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_241677.pdf', 
 'DTMB1Q1': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_241677.pdf', 
 'DTMB1D4': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_241677.pdf', 
 'DTMB1D1': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_241677.pdf', 

 //Medtronic defibrillators
 'COMPIA': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_241677.pdf', 
 'DTMC1QQ': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_241677.pdf', 
 'DTMC1D1': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_241677.pdf', 
 'DTMCC1D1': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_241677.pdf', 

 //Medtronic pacemaker
'PERCEPTA': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_254285.pdf', 
'W4TR01': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_254285.pdf', 
'W1TR01': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_254285.pdf', 

//Medtronic pacemaker
'SERENA': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_254285.pdf', 
'W4TR02': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_254285.pdf', 
'W1TR02': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_254285.pdf', 


 //Medtronic pacemaker
'SOLARA': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_254285.pdf', 
'W4TR03': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_254285.pdf', 
'W1TR03': 'https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_254285.pdf', 

 //Medtronic Tavr
'MEDTRONIC EVOLUT FX TAVR': 'https://www.medtronic.com/content/dam/emanuals/cardio/M004015C001DOC1_RevD_view.pdf', 

'MEDTRONIC EVOLUT PRO TAVR': 'https://www.medtronic.com/content/dam/emanuals/cardio/M058433T001DOC1_Rev1D_EN_view.pdf',
'MEDTRONIC EVOLUT R TAVR': 'https://www.medtronic.com/content/dam/emanuals/cardio/CONTRIB_198083.pdf',

'MEDTRONIC EVOLUT COREVALUE TAVR': 'https://www.medtronic.com/content/dam/emanuals/cardio/CONTRIB_192454.pdf',
'MEDTRONIC EVOLUT FX+ TAVR': 'https://www.medtronic.com/content/dam/emanuals/cardio/CONTRIB_192454.pdf',

//Medtronic loop recorders
'LINQ11': '../implantGuides/linq.html',
'LNQ11': '../implantGuides/linq.html',
'LNQ22': '../implantGuides/linq.html',
'LINQ22': '../implantGuides/linq.html',

'REVEAL XT': '../implantGuides/reveal.html', 
'9529': '../implantGuides/reveal.html', 

////Medtronic DBS
'MEDTRONIC ACTIVA PC DBS': 'medtronicImplants/medtronicDBS.pdf', 
'MEDTRONIC ACTIVA SC DBS': 'medtronicImplants/medtronicDBS.pdf',
'MEDTRONIC ACTIVA RC DBS': 'medtronicImplants/medtronicDBS.pdf',
'37601': 'medtronicImplants/medtronicDBS.pdf', 
'37603' : 'medtronicImplants/medtronicDBS.pdf', 
'37612' : 'medtronicImplants/medtronicDBS.pdf', 
'37602' : 'medtronicImplants/medtronicDBS.pdf', 
'MEDTRONIC PERCEPT PC DBS' : 'medtronicImplants/medtronicDBS.pdf', 
'MEDTRONIC PERCEPT RC DBS' : 'medtronicImplants/medtronicDBS.pdf', 
'B35200': 'medtronicImplants/medtronicDBS.pdf', 
'B35300': 'medtronicImplants/medtronicDBS.pdf', 

'MEDTRONIC SOLETRA DBS': 'medtronicImplants/medtronicDBS2.pdf', 
'7426': 'medtronicImplants/medtronicDBS2.pdf', 
'MEDTRONIC KINETRA DBS': 'medtronicImplants/medtronicDBS2.pdf', 
'7428': 'medtronicImplants/medtronicDBS2.pdf', 

//Medtronic Neurostimulator
'MEDTRONIC PRIME ADVANCED NEUROSTIMULATOR': 'medtronicImplants/medtronicNeuroStim.pdf', 
'97702': 'medtronicImplants/medtronicNeuroStim.pdf', 
'97715': 'medtronicImplants/medtronicNeuroStim.pdf', 
'97716': 'medtronicImplants/medtronicNeuroStim.pdf', 
'977005': 'medtronicImplants/medtronicNeuroStim.pdf', 
'977006': 'medtronicImplants/medtronicNeuroStim.pdf', 
'97714': 'medtronicImplants/medtronicNeuroStim.pdf', 
'97713': 'medtronicImplants/medtronicNeuroStim.pdf', 
'97712': 'medtronicImplants/medtronicNeuroStim.pdf', 
'37701': 'medtronicImplants/medtronicNeuroStim.pdf', 
'37702': 'medtronicImplants/medtronicNeuroStim.pdf', 
'37703': 'medtronicImplants/medtronicNeuroStim.pdf', 
'37712': 'medtronicImplants/medtronicNeuroStim.pdf', 
'37711': 'medtronicImplants/medtronicNeuroStim.pdf', 
'37711': 'medtronicImplants/medtronicNeuroStim.pdf', 
'37712': 'medtronicImplants/medtronicNeuroStim.pdf', 
'37713': 'medtronicImplants/medtronicNeuroStim.pdf',
'37714': 'medtronicImplants/medtronicNeuroStim.pdf', 
'7479': 'medtronicImplants/medtronicNeuroStim.pdf', 
'7479B': 'medtronicImplants/medtronicNeuroStim.pdf', 
'7427V': 'medtronicImplants/medtronicNeuroStim.pdf', 
'7427': 'medtronicImplants/medtronicNeuroStim.pdf', 
'977117': 'medtronicImplants/medtronicNeuroStim.pdf', 
'977118': 'medtronicImplants/medtronicNeuroStim.pdf', 
'977119': 'medtronicImplants/medtronicNeuroStim.pdf', 
'7425': 'medtronicImplants/medtronicNeuroStim.pdf', 

//Coils
'OPTIMA COIL': '../implantGuides/optima.html', 
'BARRICADE COIL': '../implantGuides/barricade.html',
'PENUMBRA COIL': 'https://www.penumbrainc.com/mri-compatibility/', 
'LP COIL': 'https://www.penumbrainc.com/mri-compatibility/', 
'RUBY COIL'  : 'https://www.penumbrainc.com/mri-compatibility/', 
'PENUMBRA POD SYSTEM': 'https://www.penumbrainc.com/mri-compatibility/', 
'PENUMBRA SMART COIL': 'https://www.penumbrainc.com/mri-compatibility/', 
'SWIFT COIL SYSTEM': 'https://www.penumbrainc.com/mri-compatibility/', 
//MicroVention coils
'HYDROFRAME COIL': 'https://www.microvention.com/products/hydrosoft3d/additional-information/mri-safety-information#content',
'MICROPLEX  COIL': 'https://www.microvention.com/products/hydrosoft3d/additional-information/mri-safety-information#content',
'HYDRO COIL': 'https://www.microvention.com/products/hydrosoft3d/additional-information/mri-safety-information#content',
'COSMOS PLATINUM COILS': 'https://www.microvention.com/products/cosmos/additional-information/mri-safety-information',


//IVC filter
'OPTION ELITE': 'https://www.argonmedical.com/wp-content/uploads/2022/09/OptionELITE-70cm-IFU.pdf',

//Sacral Neuromodulation (SNM) 
 'AXONICS': 'https://www.axonics.com/images/hcp/resources/03-16-2022/110-0093-001rY_-_MRI_Patient_Guidelines_Axonics_SNM_System_US_English.pdf',
 '1101' : 'https://www.axonics.com/images/hcp/resources/03-16-2022/110-0093-001rY_-_MRI_Patient_Guidelines_Axonics_SNM_System_US_English.pdf',
 '4101': 'https://www.axonics.com/images/hcp/resources/03-16-2022/110-0093-001rY_-_MRI_Patient_Guidelines_Axonics_SNM_System_US_English.pdf',


 //Medtronic Neurostimulator
'MEDTRONIC RESTORE': 'https://www.medtronic.com/content/dam/emanuals/neuro/M939858A_a_028_view.pdf', 
'37712': 'https://www.medtronic.com/content/dam/emanuals/neuro/M939858A_a_028_view.pdf', 
'VANTA': 'https://www.medtronic.com/content/dam/emanuals/neuro/M939858A_a_028_view.pdf', 
'977006': 'https://www.medtronic.com/content/dam/emanuals/neuro/M939858A_a_028_view.pdf', 
'MEDTRONIC ITREL 4' : 'https://www.medtronic.com/content/dam/emanuals/neuro/M939858A_a_028_view.pdf', 
'37704': 'https://www.medtronic.com/content/dam/emanuals/neuro/M939858A_a_028_view.pdf', 
'37703': 'https://www.medtronic.com/content/dam/emanuals/neuro/M939858A_a_028_view.pdf', 
'ITREL 3': 'https://www.medtronic.com/content/dam/emanuals/neuro/M939858A_a_028_view.pdf', 
'7425': 'https://www.medtronic.com/content/dam/emanuals/neuro/M939858A_a_028_view.pdf',
'MEDTRONIC RESTORE SENSOR': 'https://www.medtronic.com/content/dam/emanuals/neuro/M939858A_a_028_view.pdf',
'37714': 'https://www.medtronic.com/content/dam/emanuals/neuro/M939858A_a_028_view.pdf',
'RESTORE ULTRA': 'https://www.medtronic.com/content/dam/emanuals/neuro/M939858A_a_028_view.pdf',
'97712': 'https://www.medtronic.com/content/dam/emanuals/neuro/M939858A_a_028_view.pdf',
'MEDTRONIC RESTORE ADVANCED': 'https://www.medtronic.com/content/dam/emanuals/neuro/M939858A_a_028_view.pdf',
'97713': 'https://www.medtronic.com/content/dam/emanuals/neuro/M939858A_a_028_view.pdf',
'97714': 'https://www.medtronic.com/content/dam/emanuals/neuro/M939858A_a_028_view.pdf',
'37711': 'https://www.medtronic.com/content/dam/emanuals/neuro/M939858A_a_028_view.pdf',
'MEDTRONIC VERSITREL': 'https://www.medtronic.com/content/dam/emanuals/neuro/M939858A_a_028_view.pdf',
'7427V': 'https://www.medtronic.com/content/dam/emanuals/neuro/M939858A_a_028_view.pdf',

//Boston Scientific penile implants
'BOSTON SCIENTIFIC AMS 700': '../bostonImplants/AMS700.pdf',
'BOSTON SCIENTIFIC AMS 800': '../bostonImplants/AMS800.pdf',

//Medtronic interstim
'MEDTRONIC INTERSTIM': '../implantGuides/InterStim.html',
'MEDTRONIC INTERSTIM 2': '../implantGuides/InterStim.html',
'MEDTRONIC INTERSTIM X': '../implantGuides/InterStim.html',
'MEDTRONIC INTERSTIM TWIN': '../implantGuides/InterStim.html',
'3023': '../implantGuides/InterStim.html',
'3058' : '../implantGuides/InterStim.html',
'97810': '../implantGuides/InterStim.html',
'97800': '../implantGuides/InterStim.html',
'7427T' : '../implantGuides/InterStim.html',

//Biotronik pacemakers/ICDs
'ENITRA': 'https://www.promricheck.com/spring/welcome?execution=e11s1',
'EVITY': 'https://www.promricheck.com/spring/welcome?execution=e11s1',
'ENTICOS': 'https://www.promricheck.com/spring/welcome?execution=e11s1',
'EDORA': 'https://www.promricheck.com/spring/welcome?execution=e11s1',
'ACTICOR 7 DR-T': 'https://www.promricheck.com/spring/welcome?execution=e11s1',
'ACTICOR 7 VR-T': 'https://www.promricheck.com/spring/welcome?execution=e11s1',
'INVENTRA 7 VR-T DX': 'https://www.promricheck.com/spring/welcome?execution=e11s1',
'RIVACOR 7 VR-T': 'https://www.promricheck.com/spring/welcome?execution=e11s1',
'RIVACOR 7 DR-T': 'https://www.promricheck.com/spring/welcome?execution=e11s1',
'ACTICOR 7': 'https://www.promricheck.com/spring/welcome?execution=e11s1',

//Abbott leadless pacemaker
'ABBOTT LEADLESS PACEMAKER AVEIR': 'abbottImplants/aveirPacemaker.pdf',
'LSP112V' : 'abbottImplants/aveirPacemaker.pdf',
'LSP202V':  'abbottImplants/aveirPacemaker.pdf',
'LSP201A':  'abbottImplants/aveirPacemaker.pdf',

//Biotronik cardiac monitor
'BIOMONITOR': '../biotronikImplants/biomonitor.pdf',
'BIOMONITOR 2': '../biotronikImplants/biomonitor.pdf',
'BIOMONITOR 3': '../biotronikImplants/biomonitor.pdf',
'BIOMONITOR 3M': '../biotronikImplants/biomonitor.pdf',
'BIOMONITOR 4': '../biotronikImplants/biomonitor.pdf',

//Codman programmable shunts
'CODMAN CERTAS': 'implantGuides/codman.html',
'CODMAN HAKIM': 'implantGuides/codman.html',
'CODMAN': 'implantGuides/codman.html',

//Inspire sleep apnea implant
'INSPIRE': 'implantGuides/inspire.pdf',
'3028': 'implantGuides/inspire.pdf',
'3024': 'implantGuides/inspire.pdf',

//Abbott pacemakers and 
'ASSURITY': 'abbottImplants/abbottPacemakerIcd.pdf', 
'PM1272': 'abbottImplants/abbottPacemakerIcd.pdf', 
'PM2272': 'abbottImplants/abbottPacemakerIcd.pdf', 
'PM1172': 'abbottImplants/abbottPacemakerIcd.pdf', 
'PM2172': 'abbottImplants/abbottPacemakerIcd.pdf', 
'ENDURITY': 'abbottImplants/abbottPacemakerIcd.pdf', 
'ACCENT': 'abbottImplants/abbottPacemakerIcd.pdf', 
'PM1224': 'abbottImplants/abbottPacemakerIcd.pdf', 
'PM2218': 'abbottImplants/abbottPacemakerIcd.pdf', 
'PM3542': 'abbottImplants/abbottPacemakerIcd.pdf', 
'QUADRA ALLURE': 'abbottImplants/abbottPacemakerIcd.pdf', 
'PM3562' : 'abbottImplants/abbottPacemakerIcd.pdf', 
'QUADRA ALLURE MP': 'abbottImplants/abbottPacemakerIcd.pdf', 
'CD1311-36Q': 'abbottImplants/abbottPacemakerIcd.pdf', 
'CD1311' : 'abbottImplants/abbottPacemakerIcd.pdf', 
'ELLIPSE': 'abbottImplants/abbottPacemakerIcd.pdf', 
'CD1411-36Q' : 'abbottImplants/abbottPacemakerIcd.pdf', 
'CD1411-36QC' : 'abbottImplants/abbottPacemakerIcd.pdf', 
'CD1411': 'abbottImplants/abbottPacemakerIcd.pdf', 
'CD1411-36QC' : 'abbottImplants/abbottPacemakerIcd.pdf', 
'CD1411' : 'abbottImplants/abbottPacemakerIcd.pdf', 
'CD2411-36Q': 'abbottImplants/abbottPacemakerIcd.pdf',
'CD2411-36QC': 'abbottImplants/abbottPacemakerIcd.pdf', 
'CD2411'  : 'abbottImplants/abbottPacemakerIcd.pdf',
'CD1357-40Q': 'abbottImplants/abbottPacemakerIcd.pdf', 
'FORTIFY ASSURA': 'abbottImplants/abbottPacemakerIcd.pdf',
 'CD1357-40QC'  : 'abbottImplants/abbottPacemakerIcd.pdf', 
'CD1357': 'abbottImplants/abbottPacemakerIcd.pdf',
'CD2357-40Q': 'abbottImplants/abbottPacemakerIcd.pdf', 
'CD2357-40QC': 'abbottImplants/abbottPacemakerIcd.pdf',
'CD2357': 'abbottImplants/abbottPacemakerIcd.pdf', 
'CD3365-40Q': 'abbottImplants/abbottPacemakerIcd.pdf',
'QUADRA ASSURA': 'abbottImplants/abbottPacemakerIcd.pdf', 
'CD3365-40QC': 'abbottImplants/abbottPacemakerIcd.pdf',
'CD3365': 'abbottImplants/abbottPacemakerIcd.pdf', 
'CD3369-40Q': 'abbottImplants/abbottPacemakerIcd.pdf',
'CD3369-40QC': 'abbottImplants/abbottPacemakerIcd.pdf', 
'CD3369': 'abbottImplants/abbottPacemakerIcd.pdf',


//Abbott neurostimulators
'PROCLAIM XR': 'abbottImplants/neurostimulation.pdf', 
'3660': 'abbottImplants/neurostimulation.pdf', 
'3662': 'abbottImplants/neurostimulation.pdf', 
'PROCLAIM DRG': 'abbottImplants/newAbbottProclaimMRIsettings.pdf',
'3664': 'abbottImplants/newAbbottProclaimMRIsettings.pdf',
'PROTEGE': 'abbottImplants/neurostimulation.pdf', 
'3771': 'abbottImplants/neurostimulation.pdf', 
'3772': 'abbottImplants/neurostimulation.pdf', 
'ETERNA' : 'abbottImplants/abbottEterna.pdf',

//Abbott DBS
'INFINITY 5': 'abbottImplants/infinity.pdf',
'6660': 'abbottImplants/infinity.pdf',
'INFINITY 5': 'abbottImplants/infinity.pdf',
'INFINITY 7': 'abbottImplants/infinity.pdf',
'6662'  : 'abbottImplants/infinity.pdf',
'LIBERTA RC': 'abbottImplants/infinity.pdf',
'62400': 'abbottImplants/infinity.pdf',


 //Boston scientific pacemakers
 'VITALIO': 'bostonImplants/bostonScientificPacemakers.pdf', 
 'K275': 'bostonImplants/bostonScientificPacemakers.pdf', 
 'ESSENTIO': 'bostonImplants/bostonScientificPacemakers.pdf', 
 'L110': 'bostonImplants/bostonScientificPacemakers.pdf', 
 'L111': 'bostonImplants/bostonScientificPacemakers.pdf', 
 'L131': 'bostonImplants/bostonScientificPacemakers.pdf', 
 'PROPONENT': 'bostonImplants/bostonScientificPacemakers.pdf', 
 'L210': 'bostonImplants/bostonScientificPacemakers.pdf', 
 'L211': 'bostonImplants/bostonScientificPacemakers.pdf', 
 'L231': 'bostonImplants/bostonScientificPacemakers.pdf', 
 'ACCOLADE' : 'bostonImplants/bostonScientificPacemakers.pdf', 
 'L310': 'bostonImplants/bostonScientificPacemakers.pdf', 
 'L311': 'bostonImplants/bostonScientificPacemakers.pdf', 
 'L331': 'bostonImplants/bostonScientificPacemakers.pdf', 
'VALITUDE': 'bostonImplants/bostonScientificPacemakers.pdf', 
 'U128': 'bostonImplants/bostonScientificPacemakers.pdf', 
 'VISIONIST': 'bostonImplants/bostonScientificPacemakers.pdf', 
 'U228': 'bostonImplants/bostonScientificPacemakers.pdf', 
 'EMBLEM': 'bostonImplants/bostonScientificPacemakers.pdf', 
 'A209': 'bostonImplants/bostonScientificPacemakers.pdf', 
 'A219': 'bostonImplants/bostonScientificPacemakers.pdf', 
 
//Boston scientific spinal cord stimulator
'PRECISION MONTAGE MRI': 'bostonImplants/precisionMontageSCS.pdf', 
'SC-1200': 'bostonImplants/precisionMontageSCS.pdf', 
'PRECISION SPECTRA' : 'bostonImplants/precisionSpectraSCS.pdf', 
'SC-1132': 'bostonImplants/precisionSpectraSCS.pdf', 
'SPECTRA WAVEWRITER' : 'bostonImplants/spectraWavewriterSCS.pdf', 
'SC-1160' : 'bostonImplants/spectraWavewriterSCS.pdf', 
'WAVEWRITER ALPHA IPG': 'bostonImplants/wavewriterAlphaSCS.pdf', 
'WAVEWRITER ALPHA 16 IPG': 'bostonImplants/wavewriterAlphaSCS.pdf', 
'WAVEWRITER ALPHA PRIME IPG': 'bostonImplants/wavewriterAlphaSCS.pdf', 
'WAVEWRITER ALPHA PRIME 16 IPG': 'bostonImplants/wavewriterAlphaSCS.pdf', 
'SC-1232': 'bostonImplants/wavewriterAlphaSCS.pdf', 
'SC-1216' : 'bostonImplants/wavewriterAlphaSCS.pdf', 
'SC-1432' : 'bostonImplants/wavewriterAlphaSCS.pdf', 
'SC-1416': 'bostonImplants/wavewriterAlphaSCS.pdf', 

//Medtronic Non-MRI Conditional devices
'ADAPTA': 'Docs/medtronic-non-mriConditional-devices.pdf',
'ADDR01': 'Docs/medtronic-non-mriConditional-devices.pdf',
'ADDR03': 'Docs/medtronic-non-mriConditional-devices.pdf',
'ADDRO6': 'Docs/medtronic-non-mriConditional-devices.pdf',
'ADDRS1': 'Docs/medtronic-non-mriConditional-devices.pdf',
'VERSA': 'Docs/medtronic-non-mriConditional-devices.pdf',
'SENSIA': 'Docs/medtronic-non-mriConditional-devices.pdf',
'VEDR01': 'Docs/medtronic-non-mriConditional-devices.pdf',
'SEDR01': 'Docs/medtronic-non-mriConditional-devices.pdf',
'SEDRL1': 'Docs/medtronic-non-mriConditional-devices.pdf',
'SED01': 'Docs/medtronic-non-mriConditional-devices.pdf',
'SESR01': 'Docs/medtronic-non-mriConditional-devices.pdf',
'SES01': 'Docs/medtronic-non-mriConditional-devices.pdf',
'RELIA' : 'Docs/medtronic-non-mriConditional-devices.pdf',
'REDRO1': 'Docs/medtronic-non-mriConditional-devices.pdf',
'RED01': 'Docs/medtronic-non-mriConditional-devices.pdf',
'RESR01' : 'Docs/medtronic-non-mriConditional-devices.pdf',
'RES01': 'Docs/medtronic-non-mriConditional-devices.pdf',
'REVDD01': 'Docs/medtronic-non-mriConditional-devices.pdf',

 //ST Jude/Abbott pacemakers and ICDs
'AVANT': 'abbottImplants/STjude.pdf',
'NEUTRINO': 'abbottImplants/STjude.pdf',
'CDVRA700Q': 'abbottImplants/STjude.pdf',
'CDDRA700Q': 'abbottImplants/STjude.pdf',
'CDVRA800Q': 'abbottImplants/STjude.pdf',
'CDVRA600Q': 'abbottImplants/STjude.pdf',
'CDDRA800Q': 'abbottImplants/STjude.pdf',
'CDDRA600Q' : 'abbottImplants/STjude.pdf',
'CDHFA700Q': 'abbottImplants/STjude.pdf',
'CDHFA800Q': 'abbottImplants/STjude.pdf',
'CDHFA600Q': 'abbottImplants/STjude.pdf',
'ENTRANT': 'abbottImplants/STjude.pdf',
'CDVRA300Q': 'abbottImplants/STjude.pdf',
'CDDRA300Q': 'abbottImplants/STjude.pdf',
'CDHFA300Q': 'abbottImplants/STjude.pdf',
'GALLANT' : 'abbottImplants/STjude.pdf',
'CDVRA500Q': 'abbottImplants/STjude.pdf',
'CDDRA500Q': 'abbottImplants/STjude.pdf',
'CDHFA500Q': 'abbottImplants/STjude.pdf',

//Boston Scientific Watchman
'WATCHMAN': 'bostonImplants/bostonWatchman.pdf',
 
//Abbott Amplatzer
'AMPLATZER AMULET': 'abbottImplants/amplatzerAmulet.pdf',
'AMPLATZER VASCULAR PLUG 4': 'abbottImplants/amplatzerPlug4.pdf',
'AMPLATZER VASCULAR PLUG 2': 'abbottImplants/amplatzerPlug2.pdf',
'AMPLATZER DUCT OCCLUDER 2': 'abbottImplants/amplatzerDuctOccluder2.pdf',
'AMPLATZER SEPTAL OCCLUDER': 'abbottImplants/amplatzerSeptalOccluder.pdf',
'AMPLATZER TALISMAN PFO OCCLUDER': 'abbottImplants/amplatzerTalisman.pdf',
'AMPLATZER PICCOLO OCCLUDER': 'abbottImplants/amplatzerPiccolo.pdf',

//Urolift
'UROLIFT': 'Docs/urolift.pdf',

//Pipeline
'PIPELINE FLEX EMBOLIXATION DEVICE': '../implantGuides/pipeLine.html',

//WaveCrest Left Atrial Appendage Occlusion Device#
'WAVECREST': 'http://www.mrisafety.com/OBJ_STATUS_view.php?editid1=11', 

//Assurance Hemoclip
'ASSURANCE HEMOCLIP': 'Docs/assuranceHemoclip.pdf', 

//Rhythmlink
'RHYTHMLINK': '../implantGuides/eeg.html',

//Resolution clip
'RESOLUTION CLIP': 'BostonImplants/resolutionClip.pdf',
'RESOLUTION CLIP 360': 'BostonImplants/resolutionClip.pdf',
'RESOLUTION CLIP 360 ULTRA': 'BostonImplants/resolutionClip.pdf',

//Mirena IUD
'MIRENA IUD': 'https://www.mrisafety.com/SafetyInformation_view.php?editid1=181', 

//Essure permanent birth control
 'ESSURE': 'https://labeling.bayerhealthcare.com/html/products/pi/essure_ifu.pdf', 

//Vivistim neurostimulator
 'VIVISTIM NEUROSTIMULATOR': 'Docs/Vivistim.pdf',

//KURZ Passive Middle Ear Implants
 'KURZ MIDDLE EAR IMPLANTS': 'Docs/kurzEarImplants.pdf',

//MicroPort pacemakers
'MICROPORT PACEMAKERS': 'https://www.crm.microport.com/automri/en/radiologist/tool/device-type#device-type', 

'ALIZEA DR': 'https://www.crm.microport.com/automri/en/radiologist/tool/device-type#device-type', 
'ALIZEA SR': 'https://www.crm.microport.com/automri/en/radiologist/tool/device-type#device-type', 
'CELEA DR': 'https://www.crm.microport.com/automri/en/radiologist/tool/device-type#device-type', 
'CELEA SR': 'https://www.crm.microport.com/automri/en/radiologist/tool/device-type#device-type', 



//Boston Scientific ICDs
'VIGILANT': 'BostonImplants/bostonICDs.pdf',
'D220': 'BostonImplants/bostonICDs.pdf',
'D221' : 'BostonImplants/bostonICDs.pdf',
'D232': 'BostonImplants/bostonICDs.pdf',
'D233': 'BostonImplants/bostonICDs.pdf',
'G247': 'BostonImplants/bostonICDs.pdf',
'G228': 'BostonImplants/bostonICDs.pdf',
'G248': 'BostonImplants/bostonICDs.pdf',
'G237': 'BostonImplants/bostonICDs.pdf',
'G224': 'BostonImplants/bostonICDs.pdf',
'G225': 'BostonImplants/bostonICDs.pdf',
'G166': 'BostonImplants/bostonICDs.pdf',
'G168': 'BostonImplants/bostonICDs.pdf',
'G156': 'BostonImplants/bostonICDs.pdf',
'G158': 'BostonImplants/bostonICDs.pdf',
'G150': 'BostonImplants/bostonICDs.pdf',
'G151': 'BostonImplants/bostonICDs.pdf',
'INOGEN': 'BostonImplants/bostonICDs.pdf',
'G146': 'BostonImplants/bostonICDs.pdf',
'G148': 'BostonImplants/bostonICDs.pdf',
'G140': 'BostonImplants/bostonICDs.pdf',
'G141': 'BostonImplants/bostonICDs.pdf',
'MOMENTUM': 'BostonImplants/bostonICDs.pdf',
'G128': 'BostonImplants/bostonICDs.pdf',
'G138': 'BostonImplants/bostonICDs.pdf',
'G124': 'BostonImplants/bostonICDs.pdf',
'G125' : 'BostonImplants/bostonICDs.pdf',
'ORIGEN': 'BostonImplants/bostonICDs.pdf',
'G056': 'BostonImplants/bostonICDs.pdf',
'G058': 'BostonImplants/bostonICDs.pdf',
'G050': 'BostonImplants/bostonICDs.pdf',
'G051' : 'BostonImplants/bostonICDs.pdf',
'RESONATE': 'BostonImplants/bostonICDs.pdf',
'G524': 'BostonImplants/bostonICDs.pdf',
'G525': 'BostonImplants/bostonICDs.pdf',
'G528': 'BostonImplants/bostonICDs.pdf',
'G548': 'BostonImplants/bostonICDs.pdf',
'G537': 'BostonImplants/bostonICDs.pdf',
'G547': 'BostonImplants/bostonICDs.pdf',
'G428': 'BostonImplants/bostonICDs.pdf',
'G448': 'BostonImplants/bostonICDs.pdf',
'G437': 'BostonImplants/bostonICDs.pdf',
'G447': 'BostonImplants/bostonICDs.pdf',
'G424': 'BostonImplants/bostonICDs.pdf',
'G425': 'BostonImplants/bostonICDs.pdf',
'D160': 'BostonImplants/bostonICDs.pdf',
'D161': 'BostonImplants/bostonICDs.pdf',
'D162': 'BostonImplants/bostonICDs.pdf',
'D163': 'BostonImplants/bostonICDs.pdf',
'D150': 'BostonImplants/bostonICDs.pdf',
'D151': 'BostonImplants/bostonICDs.pdf',
'D152': 'BostonImplants/bostonICDs.pdf',
'D020': 'BostonImplants/bostonICDs.pdf',
'D021': 'BostonImplants/bostonICDs.pdf',
'D153': 'BostonImplants/bostonICDs.pdf',
'D022': 'BostonImplants/bostonICDs.pdf',
'D022': 'BostonImplants/bostonICDs.pdf',
'D140': 'BostonImplants/bostonICDs.pdf',
'D141': 'BostonImplants/bostonICDs.pdf',
'D142': 'BostonImplants/bostonICDs.pdf',
'D143': 'BostonImplants/bostonICDs.pdf',
'D010': 'BostonImplants/bostonICDs.pdf',
'D011': 'BostonImplants/bostonICDs.pdf',
'D012': 'BostonImplants/bostonICDs.pdf',
'G146': 'BostonImplants/bostonICDs.pdf',
'G148': 'BostonImplants/bostonICDs.pdf',
'G140': 'BostonImplants/bostonICDs.pdf',
'D013': 'BostonImplants/bostonICDs.pdf',
'D120': 'BostonImplants/bostonICDs.pdf',
'D121': 'BostonImplants/bostonICDs.pdf',
'D050': 'BostonImplants/bostonICDs.pdf',
'D051': 'BostonImplants/bostonICDs.pdf',
'D052': 'BostonImplants/bostonICDs.pdf',
'D053': 'BostonImplants/bostonICDs.pdf',
'D000': 'BostonImplants/bostonICDs.pdf',
'G058': 'BostonImplants/bostonICDs.pdf',
'G050': 'BostonImplants/bostonICDs.pdf',
'D001': 'BostonImplants/bostonICDs.pdf',
'D002': 'BostonImplants/bostonICDs.pdf',
'D003': 'BostonImplants/bostonICDs.pdf',
'PERCIVA' : 'BostonImplants/bostonICDs.pdf',
'D500': 'BostonImplants/bostonICDs.pdf',
'D501': 'BostonImplants/bostonICDs.pdf',
'D512': 'BostonImplants/bostonICDs.pdf',
'D513': 'BostonImplants/bostonICDs.pdf',
'D400': 'BostonImplants/bostonICDs.pdf',
'D401': 'BostonImplants/bostonICDs.pdf',
'D412': 'BostonImplants/bostonICDs.pdf',
'D413': 'BostonImplants/bostonICDs.pdf',
'D520': 'BostonImplants/bostonICDs.pdf',
'D521': 'BostonImplants/bostonICDs.pdf',
'D532': 'BostonImplants/bostonICDs.pdf',
'D533': 'BostonImplants/bostonICDs.pdf',
'D420': 'BostonImplants/bostonICDs.pdf',
'D421': 'BostonImplants/bostonICDs.pdf',
'D432': 'BostonImplants/bostonICDs.pdf',
'D433': 'BostonImplants/bostonICDs.pdf',

//Medtronic Strata shunt
'MEDTRONIC STRATA': '../implantGuides/strata.html',
'MEDTRONIC STRATA 2':'../implantGuides/strata2.html',

//ProGAV 2.0 shunt
 'PROGAV 2.0': 'Docs/proGav.pdf',


//Cochlear implants Advanced Bionics and Cochlear
'COCHLEAR': '../implantGuides/cochlear.html',
'ADVANCED BIONICS': '../implantGuides/cochlear.html',
'OSIA': '../implantGuides/cochlear.html',
'BAHA': '../implantGuides/cochlear.html',
'CI632': '../implantGuides/cochlear.html',
'CI624': '../implantGuides/cochlear.html',
'CI622': '../implantGuides/cochlear.html',
'CI612': '../implantGuides/cochlear.html',
'CI532': '../implantGuides/cochlear.html',
'CI522': '../implantGuides/cochlear.html',
'CI512': '../implantGuides/cochlear.html',
'ABI541': '../implantGuides/cochlear.html',
'CI422': '../implantGuides/cochlear.html',
'CI24RECA': '../implantGuides/cochlear.html',
'CI24REH': '../implantGuides/cochlear.html',
'CI24REST': '../implantGuides/cochlear.html',
'ABI24M': '../implantGuides/cochlear.html',
'CI24R': '../implantGuides/cochlear.html',
'CI24M': '../implantGuides/cochlear.html',
'CI11+11+2M': '../implantGuides/cochlear.html',
'CI22M': '../implantGuides/cochlear.html',
'HIRES ULTRA 3D': '../implantGuides/cochlear.html',

//MED-EL Cochlear Implants
'MED-EL COCHLEAR SYNCHRONY 2': 'Docs/MED-ELCochlearImplant.pdf', 
'MI1250': 'Docs/MED-ELCochlearImplant.pdf', 
'MI1200': 'Docs/MED-ELCochlearImplant.pdf', 
'MED-EL COCHLEAR CONCERT': 'Docs/MED-ELCochlearImplant.pdf', 
'MI1000': 'Docs/MED-ELCochlearImplant.pdf', 
'MED-EL COCHLEAR SONATA': 'Docs/MED-ELCochlearImplant.pdf', 
'MED-EL COCHLEAR PULSAR': 'Docs/MED-ELCochlearImplant.pdf', 
'C40+': 'Docs/MED-ELCochlearImplant.pdf', 
'C40': 'Docs/MED-ELCochlearImplant.pdf', 

//BOSTON SCIENTIFIC WALLFLEX STENT
'BOSTON SCIENTIFIC WALLFLEX STENT': 'bostonImplants/wallflexStent.pdf',
'COLONIC AND DUODENAL SOFT STENT': 'bostonImplants/wallflexStent.pdf',

//GORE occluders
'GORE TAG': 'https://www.goremedical.com/support/mri-safety-information',
'GORE VIABIL': 'https://www.goremedical.com/support/mri-safety-information',
'GORE': 'https://www.goremedical.com/support/mri-safety-information',
'GORE CARDIOFORM': 'https://www.goremedical.com/support/mri-safety-information',
'GORE EXCLUDER': 'https://www.goremedical.com/support/mri-safety-information',
'GORE VIABAHN': 'https://www.goremedical.com/support/mri-safety-information',
'GORE VIATORR': 'https://www.goremedical.com/support/mri-safety-information',
'GORE BIO-A' : 'https://www.goremedical.com/support/mri-safety-information',
'GORE DUALMESH': 'https://www.goremedical.com/support/mri-safety-information',
'GORE SEAMGUARD': 'https://www.goremedical.com/support/mri-safety-information',
'GORE TEX': 'https://www.goremedical.com/support/mri-safety-information',
'GORE SYNECOR': 'https://www.goremedical.com/support/mri-safety-information',

//Lockado hemostasis clip
'LOCKADO HEMOSTASIS CLIP': 'Docs/LockadoClip.pdf',

//ST Jude cardiac monitor
'ST JUDE CONFIRM RX CARDIAC MONITOR': 'Docs/dm3500.pdf',
'DM3500': 'Docs/dm3500.pdf',

//Boston scientific coronary stent
'BOSTON SCIENTIFIC SYNERGY XD': 'bostonImplants/synergyStent.pdf',
'BOSTON SCIENTIFIC SYNERGY MONORAIL': 'bostonImplants/monorailStent.pdf',
'BOSTON SCIENTIFIC AXIOS STENT': 'bostonImplants/axiosStent.pdf',

//Kyleena IUD
'KYLEENA IUD': 'implantGuides/kyleena.html',

// Grace Medical Otologic Implants
'GRACE MEDICAL OTOLOGIC IMPLANTS': 'https://www.gracemedical.com/mri-info/',
'GRACE MEDICAL ALTO OTOLOGIC IMPLANT': 'https://www.gracemedical.com/mri-info/',
'612-001L': 'https://www.gracemedical.com/mri-info/',
'6XX': 'https://www.gracemedical.com/mri-info/',
'612-002R': 'https://www.gracemedical.com/mri-info/',
'GRACE MEDICAL 400-XXX, 401-XXX, 402-XXX, 403-XXX, 406-XXX, 408-XXX, 436-XXX' : 'https://www.gracemedical.com/mri-info/',
'GRACE MEDICAL 1XX, 190-XXX, 749-XXX': 'https://www.gracemedical.com/mri-info/',
'GRACE MEDICAL 209, 210, 259, 260, 270, 271, 272, 273, 293, 293A' : 'https://www.gracemedical.com/mri-info/',
'650-075': 'https://www.gracemedical.com/mri-info/',
'655-075': 'https://www.gracemedical.com/mri-info/',
'GRACE MEDICAL 756-XXX, 757-XXX' : 'https://www.gracemedical.com/mri-info/',
'GRACE MEDICAL K-HELIX OTOLOGIC IMPLANT' : 'https://www.gracemedical.com/mri-info/',
'GRACE MEDICAL STRASNICK OTOLOGIC IMPLANT': 'https://www.gracemedical.com/mri-info/',
'GRACE MEDICAL 220-XXX, 270-XXX': 'https://www.gracemedical.com/mri-info/',
'GRACE MEDICAL 200 THROUGH 208-250 THROUGH 258, 220-800': 'https://www.gracemedical.com/mri-info/',

//Medtronic SynchroMed pump
'SYNCHROMED 2': '../implantGuides/synchromed.html',
'SYNCHROMED 3': '../implantGuides/synchromed.html',
 '8637': '../implantGuides/synchromed.html',
 '8626': '../implantGuides/synchromed.html',
'8627': '../implantGuides/synchromed.html',
'8615': '../implantGuides/synchromed.html',
'8616': '../implantGuides/synchromed.html',
'8617': '../implantGuides/synchromed.html',
'8618': '../implantGuides/synchromed.html',
'ISOMED': '../implantGuides/synchromed.html',
'8472': '../implantGuides/synchromed.html',
'8667': '../implantGuides/synchromed.html',
'SYNCHROMED': '../implantGuides/synchromed.html',
'SYNCHROMED EL': '../implantGuides/synchromed.html',

//Abbott MitraClip
'ABBOTT MITRA CLIP':  'abbottImplants/mitraClip.pdf',
//Abbott MitraClip G4
'ABBOTT MITRA CLIP G4': 'abbottImplants/mitraClipG4.pdf',

//Impulse Optimizer smart mini pulse generator
'IMPULSE DYNAMICS': 'Docs/impulseOptimizer.pdf',
'OPTIMIZER': 'Docs/impulseOptimizer.pdf',

//Ivantis Hydrus Microstent
'HYDRUS MICROSTENT': 'Docs/hydrusMicrostent.pdf',
'FOOO22': 'Docs/hydrusMicrostent.pdf',
'IVANTIS': 'Docs/hydrusMicrostent.pdf',

//VNS Therapy Livanova
'LIVANOVA': 'Docs/livanovaVns.pdf',
'103': 'Docs/livanovaVns.pdf',
'105': 'Docs/livanovaVns.pdf',
'106': 'Docs/livanovaVns.pdf',
'1000': 'Docs/livanovaVns.pdf',
'ASPIREHC': 'Docs/livanovaVns.pdf',
'ASPIRESR': 'Docs/livanovaVns.pdf',
'SENTIVA' : 'Docs/livanovaVns.pdf',
'102': 'Docs/livanovaVns.pdf',
'PULSE DUO' : 'Docs/livanovaVns.pdf',
'102R': 'Docs/livanovaVns.pdf',
'DEMIPULSE DUO': 'Docs/livanovaVns.pdf',
'104': 'Docs/livanovaVns.pdf',
'100C': 'Docs/livanovaVns.pdf',
'101': 'Docs/livanovaVns.pdf',

//Coloplast penile implant
'100B': 'Docs/coloplastPenileImplant.pdf',
'COLOPLAST': 'Docs/coloplastPenileImplant.pdf',
'GENESIS': 'Docs/coloplastPenileImplant.pdf',
'ACU-FORM': 'Docs/coloplastPenileImplant.pdf',
'MALLEABLE': 'Docs/coloplastPenileImplant.pdf',
'TITAN': 'Docs/coloplastPenileImplant.pdf',
'ALPHA 1': 'Docs/coloplastPenileImplant.pdf',
'MARK 2': 'Docs/coloplastPenileImplant.pdf',
'EXCEL': 'Docs/coloplastPenileImplant.pdf',

//Cordis Genesis peripheral stent
'CORDIS PALMAZ GENESIS STENT': 'Docs/cordisStent.pdf',
'PALMAZ GENESIS': 'Docs/cordisStent.pdf',
'PG395P': 'Docs/cordisStent.pdf',
'PG295P': 'Docs/cordisStent.pdf',

//Boston Scientific WallStent
'BOSTON SCIENTIFIC WALLSTENT': 'bostonImplants/bostonScientificWallstent.pdf',
'BOSTON SCIENTIFIC EXPRESS SD RENAL': 'bostonImplants/bostonScientificWallstent.pdf',
'BOSTON SCIENTIFIC WALLGRAFT': 'bostonImplants/bostonScientificWallstent.pdf',
'BOSTON SCIENTIFIC CAROTID WALLSTENT': 'bostonImplants/bostonScientificWallstent.pdf',
'BOSTON SCIENTIFIC EPIC': 'bostonImplants/bostonScientificWallstent.pdf',
'BOSTON SCIENTIFIC WALFLEX': 'bostonImplants/bostonScientificWallstent.pdf',
'BOSTON SCIENTIFIC SENTINOL': 'bostonImplants/bostonScientificWallstent.pdf',
'BOSTON SCIENTIFIC GREENFIELD': 'bostonImplants/bostonScientificWallstent.pdf',
'BOSTON SCIENTIFIC TITANIUM GREENFIELD': 'bostonImplants/bostonScientificWallstent.pdf',
'BOSTON SCIENTIFIC INNOVA': 'bostonImplants/bostonScientificWallstent.pdf',
'BOSTON SCIENTIFIC TITANIUM GREENFIELD': 'bostonImplants/bostonScientificWallstent.pdf',
'BOSTON SCIENTIFIC INNOVA': 'bostonImplants/bostonScientificWallstent.pdf',
'BOSTON SCIENTIFIC EXPRESS LD ILIAC': 'bostonImplants/bostonScientificWallstent.pdf',
'BOSTON SCIENTIFIC EXPRESS LD BILIARY': 'bostonImplants/bostonScientificWallstent.pdf',

//Abbott Absolute and Omnilink stents
'ABBOTT ABSOLUTE PRO':  'abbottImplants/abbottAbsoluteOmnilinkStents.pdf',
'ABBOTT OMNILINK ELITE':  'abbottImplants/abbottAbsoluteOmnilinkStents.pdf',

//Boston Scientific Insertable Cardiac Monitor(ICM)
'BOSTON SCIENTIFIC LUX-DX': 'bostonImplants/lux-dx.pdf',
'BOSTON SCIENTIFIC LUX-DX2': 'bostonImplants/lux-dx.pdf',
'M301': 'bostonImplants/lux-dx.pdf',
'M302': 'bostonImplants/lux-dx.pdf',
'M312': 'bostonImplants/lux-dx.pdf',

//Medtronic annuloplasty ring
'638R':  'medtronicImplants/medtronicAnnuloplastyRing.pdf',
'638B':  'medtronicImplants/medtronicAnnuloplastyRing.pdf', 
'638RL32':  'medtronicImplants/medtronicAnnuloplastyRing.pdf', 
'MEDTRONIC ANNULOPLASTY RING':  'medtronicImplants/medtronicAnnuloplastyRing.pdf',
'CG FUTURE':  'medtronicImplants/medtronicAnnuloplastyRing.pdf', 

//AngelMed guardian Implanted Medical Device(IMD)
'ANGELMED GUARDIAN': 'Docs/angelMedImd.pdf',

//Medtronic Resolute Integrity heart stent
'MEDTRONIC RESOLUTE INTEGRITY':  'medtronicImplants/medtronicResoluteStent.pdf', 

//Edwards Lifesciences TAVR
'EDWARDS SAPIEN 3': '../implantGuides/sapien.html',
'9600CM20A': '../implantGuides/sapien.html',
'9600CM23A': '../implantGuides/sapien.html',
'9600CM26A': '../implantGuides/sapien.html',
'9600CM29A': '../implantGuides/sapien.html',
'9600TFX': '../implantGuides/sapien.html',

//Boston Scientific Promus Elite heart stent
'BOSTON SCIENTIFIC PROMUS ELITE': 'bostonImplants/bostonScientificPromusEliteStent.pdf',

//CVRx Barostim implantable pulse generator (IPG)
'BAROSTIM': 'Docs/barostimIpg.pdf',
'BAROSTIM NEO': 'Docs/barostimIpg.pdf',
'BAROSTIM NEO2': 'Docs/barostimIpg.pdf',
'BAROSTIM LEGACY': 'Docs/barostimIpg.pdf',
'2100': 'Docs/barostimIpg.pdf',
'2102': 'Docs/barostimIpg.pdf',
'2104': 'Docs/barostimIpg.pdf',

//Medtronic Onyx liquid embolic system
'MEDTRONIC ONYX LIQUID EMBOLIC SYSTEM': 'https://www.mrisafety.com/TMDL_list.php?qs=Onyx', 
'ONYX HD-500': 'https://www.mrisafety.com/TMDL_list.php?qs=Onyx', 

//Enterra Medical Gastric Electrical Stimulation System
'ENTERRA': '../implantGuides/enterra.html',
'ENTERRA 2': '../implantGuides/enterra.html',
'37800': '../implantGuides/enterra.html',
'3116': '../implantGuides/enterra.html',

//Synovis Micro Company Coupler ring
'MCA GEM COUPLER': 'Docs/MriCoupler.pdf', 
'SYNOVIS MICRO COMPANY': 'Docs/MriCoupler.pdf', 

//Medtronic Onyx Frontier heart stent
 'MEDTRONIC ONYX FRONTIER STENT':  'medtronicImplants/medtronicFrontierStent.pdf', 

//Abbott Skypoint heart stent
'ABBOTT XIENCE SKYPOINT STENT': 'abbottImplants/skypoint.pdf',

//Abbott SIERRA heart stent
'ABBOTT XIENCE SIERRA STENT': 'abbottImplants/Sierra.pdf',

//Abbott PRIME heart stent
'ABBOTT XIENCE PRIME STENT': 'abbottImplants/prime.pdf', 

//Boston Scientific Venous Wallstent
'BOSTON SCIENTIFIC VENOUS WALLSTENT': 'bostonImplants/bostonScientificVenousWallstent.pdf',

//Carpentier-Edwards Lifesciences implants
'CARPENTIER-EDWARDS AORTIC AND MITRAL BIOPROSTHESES': 'Docs/carpentierEdwardsImplants.pdf', 
'2625': 'Docs/carpentierEdwardsImplants.pdf', 
'6625': 'Docs/carpentierEdwardsImplants.pdf', 
'2650': 'Docs/carpentierEdwardsImplants.pdf', 
'6625LP': 'Docs/carpentierEdwardsImplants.pdf', 
'6625-ESR-LP': 'Docs/carpentierEdwardsImplants.pdf', 
'2700': 'Docs/carpentierEdwardsImplants.pdf', 
'2700TFX': 'Docs/carpentierEdwardsImplants.pdf', 
'2800': 'Docs/carpentierEdwardsImplants.pdf', 
'2800TFX': 'Docs/carpentierEdwardsImplants.pdf', 
'3000': 'Docs/carpentierEdwardsImplants.pdf', 
'3000TFX': 'Docs/carpentierEdwardsImplants.pdf', 
'3300TFX': 'Docs/carpentierEdwardsImplants.pdf', 
'6900': 'Docs/carpentierEdwardsImplants.pdf', 
'6900P': 'Docs/carpentierEdwardsImplants.pdf', 
'6900PTFX': 'Docs/carpentierEdwardsImplants.pdf', 
'7000': 'Docs/carpentierEdwardsImplants.pdf', 
'7000TFX': 'Docs/carpentierEdwardsImplants.pdf', 
'8300AB': 'Docs/carpentierEdwardsImplants.pdf', 
'9000PHV': 'Docs/carpentierEdwardsImplants.pdf', 
'11500A': 'Docs/carpentierEdwardsImplants.pdf', 
'11060A': 'Docs/carpentierEdwardsImplants.pdf', 
'11400M': 'Docs/carpentierEdwardsImplants.pdf', 
'9000': 'Docs/carpentierEdwardsImplants.pdf', 
'9000TFX': 'Docs/carpentierEdwardsImplants.pdf', 
 '9300TFX': 'Docs/carpentierEdwardsImplants.pdf', 
'9600TFX': 'Docs/carpentierEdwardsImplants.pdf',
'9750TFX': 'Docs/carpentierEdwardsImplants.pdf', 
'9755RSL': 'Docs/carpentierEdwardsImplants.pdf', 
'14000RSL': 'Docs/carpentierEdwardsImplants.pdf', 
'TMV3040B': 'Docs/carpentierEdwardsImplants.pdf', 
'9650TMV': 'Docs/carpentierEdwardsImplants.pdf', 
'9850TMV': 'Docs/carpentierEdwardsImplants.pdf', 
'9850EV44': 'Docs/carpentierEdwardsImplants.pdf', 
'9850EV48': 'Docs/carpentierEdwardsImplants.pdf', 
'9850EV52': 'Docs/carpentierEdwardsImplants.pdf',
'9850EV44': 'Docs/carpentierEdwardsImplants.pdf', 
'9850EV48': 'Docs/carpentierEdwardsImplants.pdf', 
'9850EV52': 'Docs/carpentierEdwardsImplants.pdf', 
'9850EV56': 'Docs/carpentierEdwardsImplants.pdf', 
'20000IS': 'Docs/carpentierEdwardsImplants.pdf', 
'20000ISM': 'Docs/carpentierEdwardsImplants.pdf', 
'9551S': 'Docs/carpentierEdwardsImplants.pdf', 
'29AP4045': 'Docs/carpentierEdwardsImplants.pdf', 
'9770DDS': 'Docs/carpentierEdwardsImplants.pdf', 
'9780DDS': 'Docs/carpentierEdwardsImplants.pdf', 
'9680DSC': 'Docs/carpentierEdwardsImplants.pdf', 
'9680TFX29M': 'Docs/carpentierEdwardsImplants.pdf', 
'9880DDS': 'Docs/carpentierEdwardsImplants.pdf', 
'9880TFX29M': 'Docs/carpentierEdwardsImplants.pdf', 

//Boston Scientific Vercise Genus DBS
'BOSTON SCIENTIFIC VERCISE GENUS': 'bostonImplants/bostonScientificVerviseGenusDbs.pdf',
'DB‑1408': 'bostonImplants/bostonScientificVerviseGenusDbs.pdf',
'DB‑1416': 'bostonImplants/bostonScientificVerviseGenusDbs.pdf',
'DB‑1432': 'bostonImplants/bostonScientificVerviseGenusDbs.pdf',
'DB‑1216': 'bostonImplants/bostonScientificVerviseGenusDbs.pdf',
'DB‑1232': 'bostonImplants/bostonScientificVerviseGenusDbs.pdf',
'DB-1200-S': 'bostonImplants/bostonScientificVerviseGenusDbs.pdf',

//Medtronic Resolute Onyx stent
'MEDTRONIC RESOLUTE ONYX': 'medtronicImplants/medtronicResoluteOnyx.pdf',

//Bravo PH capsule
'BRAVO PH CAPSULE': '../implantGuides/medtronicBravo.html',

//Codman CereLink ICP
'CODMAN CERELINK ICP': 'Docs/cereLinkIcp.pdf',

//Codman Microsensor ICP
'CODMAN MICROSENSOR ICP': 'Docs/codmanMicroSensorIcp.pdf',

//Abbott Amulet LEFT ATRIAL APPENDAGE OCCLUDER
'ABBOTT AMULET LEFT ATRIAL APPENDAGE OCCLUDER': 'abbottImplants/abbottAmulet.pdf',

//REMUNITY PUMP FOR REMODULIN
'REMUNITY PUMP FOR REMODULIN': 'implantGuides/remunityPump.html', 

//EV3 EverFlex stent
'EV3 EVERFLEX PERIPHERAL STENT': '/implantGuides/everFlexStent.html',
'EV3 PROTEGE EVERFLEX  BILIARY STENT': '/implantGuides/everFlexStent.html',

//EV3 Protege stent
'EV3 PROTEGE EVERFLEX PERIPHERAL STENT': 'Docs/protegeEverflexPeripheralStent.pdf',

//Abbott mechanical heart valve
'ABBOTT SJM REGENT MECHANICAL HEART VALVES': 'abbottImplants/abbottHeartValves.pdf',
'ABBOTT SJM STANDARD AND MASTERS SERIES MECHANICAL HEART VALVES': 'abbottImplants/abbottHeartValves.pdf',
'ABBOTT BIOCOR STENTED TISSUE VALVES': 'abbottImplants/abbottHeartValves.pdf',
'ABBOTT EPIC STENTED TISSUE VALVES': 'abbottImplants/abbottHeartValves.pdf',
'ABBOTT TRIFECTA TISSUE VALVES': 'abbottImplants/abbottHeartValves.pdf',
'ABBOTT SJM RIGID SADDLE ANNULOPLASTY RINGS': 'abbottImplants/abbottHeartValves.pdf',
'ABBOTT SJM SEMI-RIGID ANNULOPLASTY RINGS': 'abbottImplants/abbottHeartValves.pdf',
'ABBOTT ATTUNE FLEXIABLE ADJUSTABLE ANNULOPLASTY RINGS': 'abbottImplants/abbottHeartValves.pdf',
'ABBOTT SJM TAILOR FLEXIBLE ANNULOPLASTY RINGS': 'abbottImplants/abbottHeartValves.pdf',
'ABBOTT SJM TAILOR FLEXIABLE ANNULOPLASTY BAND': 'abbottImplants/abbottHeartValves.pdf',

//Nexplanon Contraceptive Implant
'NEXPLANON CONTRACEPTIVE IMPLANT': 'https://www.mrisafety.com/TMDL_view.php?editid1=7412',

//Boston Scientific Advanix stent
'BOSTON SCIENTIFIC ADVANIX BILIARY STENT': 'implantGuides/advanixBiliaryStent.html',

//Scleral buckle
'SCLERAL BUCKLE': 'Docs/scleralBuckle.html', 

//Boston Scientific Fibered ICD Occlusion system
'BOSTON SCIENTIFIC FIBERED IDC': 'bostonImplants/bostonInterlockCoil.pdf',
'BOSTON SCIENTIFIC INTERLOCKING DETACHABLE COIL': 'bostonImplants/bostonInterlockCoil.pdf',
'BOSTON SCIENTIFIC VORTX COIL' : 'bostonImplants/bostonInterlockCoil.pdf',
'BOSTON SCIENTIFIC VORTX DIAMOND COIL': 'bostonImplants/bostonInterlockCoil.pdf',
'BOSTON SCIENTIFIC VORTX MULTILOOP COIL': 'bostonImplants/bostonInterlockCoil.pdf',
'BOSTON SCIENTIFIC COMPLEX HELICAL COIL': 'bostonImplants/bostonInterlockCoil.pdf',
'BOSTON SCIENTIFIC 2D HELICAL COIL': 'bostonImplants/bostonInterlockCoil.pdf',
'BOSTON SCIENTIFIC FIBERED PLATINUM COIL': 'bostonImplants/bostonInterlockCoil.pdf',

//Stryker Hoffman 2
 'STRYKER HOFFMANN 2': 'Docs/Hoffmann2.pdf',

//Stryker Hoffman 3
 'STRYKER HOFFMANN 3': 'Docs/Hoffmann3.pdf', 

//Stryker Hoffman LRF
 'STRYKER HOFFMANN LRF': 'Docs/HoffmannLRF.pdf',

//Paragard IUD
 'PARAGARD IUD': 'Docs/paragardIud.pdf',

//Boston Scientific Embold coil
'BOSTON SCIENTIFIC EMBOLD FIBERED COIL': 'bostonImplants/bostonScientificEmboldCoil.pdf',

//Avanos ON-Q pain management system pump
 'AVANOS ON-Q PUMP': 'Docs/avanosOn-qPump.pdf',

//Magnetic Black-Star Ureteral Stent
 'MAGNETIC BLACK STAR URETERAL STENT': 'Docs/magneticBlackStarStent.html',

//Glaukos iStent
 'GLAUKOS ISTENT': 'https://www.glaukos.com/mri-information/',
 'GTS100L': 'https://www.glaukos.com/mri-information/',
 'GTS100R': 'https://www.glaukos.com/mri-information/',
 'GLAUKOS ISTENT INJECT': 'https://www.glaukos.com/mri-information/',
 'G2-M-IS': 'https://www.glaukos.com/mri-information/',
 'GLAUKOS ISTENT INJECT W': 'https://www.glaukos.com/mri-information/',
 'G2-W': 'https://www.glaukos.com/mri-information/',
 'GLAUKOS ISTENT INFINITE': 'https://www.glaukos.com/mri-information/',
 'IS3': 'https://www.glaukos.com/mri-information/',

 //Sophysa 
 'SOPHYSA POLARIS SHUNT': 'Docs/sophysaShunts.pdf',
 'SOPHYSA SM8 SHUNT': 'Docs/sophysaShunts.pdf',
 'SOPHYSA SM1 SHUNT': 'Docs/sophysaShunts.pdf',  

 //Vesper Medical venous stents
 'VESPER DUO-HYBRID VENOUS STENT': 'https://vespermedical.com/duo-venous-stent-system/',  
 'VESPER DUO-EXTEND VENOUS STENT': 'https://vespermedical.com/duo-venous-stent-system/',

 //Cordis Palmaz Mullins XD™ Pulmonary Stent System
 'CORDIS PALMAZ MULLINS XD STENT': 'Docs/cordisPalmazMullinsXdStent.pdf', 
 
 //Cook stents
 'ZILVER VASCULAR STENT': 'Docs/zilverStent.pdf',  

//Abbott peripheral stent
 'SUPERA PERIPHERAL STENT': 'abbottImplants/superaStent.pdf',

 //Denali Vena Cava Filter
  'DENALI VENA CAVA FILTER': 'Docs/denaliVenaCava.png',

  //OTICON MEDICAL PONTO IMPLANT
   'OTICON MEDICAL PONTO IMPLANT': 'Docs/ponto.pdf',

   //STRYKER COILS AND STENTS
  'STRYKER GDC 360 COIL NEUROVASCULAR USE': 'Docs/strykerNeuroCoil.png',
  'STRYKER GDC 360 COIL PERIPHERAL USE': 'Docs/strykerPeripheralCoil.png',
  'STRYKER NEUROFORM STENT': 'Docs/strykerNeuroformStent.png',
  'STRYKER WINGSPAN STENT': 'Docs/strykerWingspanStent.png',
  'STRYKER TARGET COIL NEUROVASCULAR USE': 'Docs/strykerTargetCoil.png',
  'STRYKER TARGET COIL PERIPHERAL USE': 'Docs/strykerTargetCoilPeripheral.png',


};

function implantLookup() {
  const pacerValue = inputBox.value.toUpperCase();
  const url = implantMapping[pacerValue];

  if (url) {
    window.open(url, '_blank');
  } else {
    alert("Something went wrong. Please try again. If that doesn't work, use the slideout/hamburger menu (UPPER LEFT CORNER OF WEBPAGE 3 Horizontal lines) for the manufacturer's website search.");
  }
}



document.getElementById('resultBoxId').onclick = () => {
  inputBox.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById('pacerSubmit').click();
    }
  });
  implantLookup();
};

