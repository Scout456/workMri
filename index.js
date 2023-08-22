/* Open when someone clicks on the span element */

/*function openNav() {
document.getElementById("myNav").style.width = "70%";
}*/

function openNav(){
   var nav = document.getElementById('myNav');
   if(window.innerWidth > 700){
      nav.style.width="50%";
   }else{
      window.innerWidth < 700;
      nav.style.width="70%";
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
  


  if(pacerValue.toUpperCase() === 'ADVISA SR' || pacerValue.toUpperCase() === 'A3SR01' || pacerValue.toUpperCase() === 'ADVISA'){
     
 window.open('https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_235435.pdf', '_blank' );

 }else if(pacerValue.toUpperCase() === 'ADVISA DR' || pacerValue.toUpperCase() === 'A2DR01'){ 
   
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

    

 }else if(pacerValue.toUpperCase() === 'NEVRO' || pacerValue.toUpperCase() === 'SENZA'){

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

}else if(pacerValue.toUpperCase() === 'COBALT XT' || pacerValue.toUpperCase() === 'DVPA2D1'  || pacerValue.toUpperCase() === 'DVPA2D4'  || pacerValue.toUpperCase() === 'DDPA2D1' || pacerValue.toUpperCase() === 'DDPA2D4' || pacerValue.toUpperCase() === 'DVPB3D1'  || pacerValue.toUpperCase() === 'DVPB3D4' || pacerValue.toUpperCase() === 'DDPB3D1' || pacerValue.toUpperCase() === 'COBALT' || pacerValue.toUpperCase() === 'DDPB3D4'){

   window.open('https://www.medtronic.com/content/dam/emanuals/crdm/M988007A001B_view.pdf', '_blank');


}else if(pacerValue.toUpperCase() === 'CROME' || pacerValue.toUpperCase() === 'DVPC3D4' || pacerValue.toUpperCase() === 'DVPC3D1' || pacerValue.toUpperCase() === 'DDPC3D4' || pacerValue.toUpperCase() === 'DDPC3D1'){

   window.open('https://www.medtronic.com/content/dam/emanuals/crdm/M988007A001B_view.pdf', '_blank');


   
}else if(pacerValue.toUpperCase() === 'PRIMO' || pacerValue.toUpperCase() === 'DDMD3D1' || pacerValue.toUpperCase() === 'DDMD3D4'  || pacerValue.toUpperCase() === 'DVMD3D1'  || pacerValue.toUpperCase() === 'DVMDD3D4'){

   window.open('https://www.medtronic.com/content/dam/emanuals/crdm/M976736A001B_view.pdf', '_blank');


}else if(pacerValue.toUpperCase() === 'MIRRO' || pacerValue.toUpperCase() === 'DVME3D1' || pacerValue.toUpperCase() === 'DVME3D4' || pacerValue.toUpperCase() === 'DDME3D1' || pacerValue.toUpperCase() === 'DDME3D4'){

   window.open('https://www.medtronic.com/content/dam/emanuals/crdm/M976736A001B_view.pdf', '_blank');
   
   
   
}else if(pacerValue.toUpperCase() === 'VISIA AF' || pacerValue.toUpperCase() === 'DVFB1D1'  || pacerValue.toUpperCase() === 'DVFB1D1'  || pacerValue.toUpperCase() === 'DVFB1D4' || pacerValue.toUpperCase() === 'DVFC3D1'  || pacerValue.toUpperCase() === 'DVFC3D4'  || pacerValue.toUpperCase() === 'DVFC3D4'  || pacerValue.toUpperCase() === 'VISIA'){

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



}else if(pacerValue.toUpperCase() === 'TAVR'){
   window.open('http://www.mrisafety.com/TMDL_list.php?goto=48', '_blank');



}else if(pacerValue.toUpperCase() === 'LINQ11' || pacerValue.toUpperCase() === 'LNQ11' || pacerValue.toUpperCase() === 'LNQ22 ' || pacerValue.toUpperCase() === 'LINQ'){
   window.open('https://www.medtronic.com/content/dam/emanuals/crdm/CONTRIB_188127.pdf', '_blank');

/*Implant alert page----------------------------------------------------*/
}else if(pacerValue.toUpperCase() === 'REVEAL' || pacerValue.toUpperCase() === '9529'){

   window.open('../implantGuides/reveal.html', '_blank');
   

}else if(pacerValue.toUpperCase() === 'ACTIVA' || pacerValue.toUpperCase() === '37601'  || pacerValue.toUpperCase() === '37603' || pacerValue.toUpperCase() === '37612' || pacerValue.toUpperCase() === '37602'){
   window.open('https://www.medtronic.com/content/dam/emanuals/neuro/M929535A_b_074_view.pdf', '_blank');



}else if(pacerValue.toUpperCase() === 'SOLETRA' || pacerValue.toUpperCase() === '7426'){
   window.open('https://www.medtronic.com/content/dam/emanuals/neuro/CONTRIB_228155.pdf', '_blank');


}else if(pacerValue.toUpperCase() === 'PRIMEADVANCED' || pacerValue.toUpperCase() === 'PRIME ADVANCED'|| pacerValue.toUpperCase() === '97702' || pacerValue.toUpperCase() === '97715' || pacerValue.toUpperCase() === '97716' || pacerValue.toUpperCase() === '977005' || pacerValue.toUpperCase() === '977006' || pacerValue.toUpperCase() === '97712' || pacerValue.toUpperCase() === '97713' || pacerValue.toUpperCase() === '97714' || pacerValue.toUpperCase() === '37701'  || pacerValue.toUpperCase() === '37702'  || pacerValue.toUpperCase() === '37703'  || pacerValue.toUpperCase() === '37704'  || pacerValue.toUpperCase() === '37711'  || pacerValue.toUpperCase() === '37712'  || pacerValue.toUpperCase() === '37713'  || pacerValue.toUpperCase() === '37714'  || pacerValue.toUpperCase() === '7479'  || pacerValue.toUpperCase() === '7479B'  || pacerValue.toUpperCase() === '7427'  || pacerValue.toUpperCase() === '7427V'){
   window.open('https://www.medtronic.com/content/dam/emanuals/neuro/M939858A_b_027_view.pdf', '_blank');


   }else if(pacerValue.toUpperCase() === 'KINETRA' || pacerValue.toUpperCase() === '7428'){
   window.open('https://www.medtronic.com/content/dam/emanuals/neuro/CONTRIB_228155.pdf', '_blank');


   }else if(pacerValue.toUpperCase() === 'PERCEPT PC' || pacerValue.toUpperCase() === 'B35200' || pacerValue.toUpperCase() === 'PERCEPT'){
   window.open('https://www.medtronic.com/content/dam/emanuals/neuro/M929535A_b_074_view.pdf', '_blank');

  /*Implant alert page----------------------------------------------------*/
   }else if(pacerValue.toUpperCase() === 'OPTIMA' || pacerValue.toUpperCase() === 'OPTIMA COIL'){
   window.open('../implantGuides/optima.html', '_blank');

   /*Implant alert page------------------------------------------------------------*/
    }else if (pacerValue.toUpperCase() === 'BARRICADE' ||  pacerValue.toUpperCase() === 'BARRICADE COIL'){
    window.open('../implantGuides/barricade.html', '_blank');

   
   }else if(pacerValue.toUpperCase() === 'PENUMBRA' || pacerValue.toUpperCase() === 'PENUMBRA COIL'){
    window.open('https://www.penumbrainc.com/nl/mri-compatibility/', '_blank'); 

    /*Implant alert page---------------------------------------------------*/
   }else if(pacerValue.toUpperCase() === 'SPETZLER' || pacerValue.toUpperCase() === 'SPETZLER TITANIUM ANEURYSM CLIP'){
    window.open('../implantGuides/spetzler.html', '_blank'); 
   

    }else if(pacerValue.toUpperCase() === 'OPTION' || pacerValue.toUpperCase() === 'OPTION ELITE'|| pacerValue.toUpperCase() === 'OPTIONELITE' || pacerValue.toUpperCase() === 'ELITE'){
   window.open('https://www.argonmedical.com/wp-content/uploads/2022/09/OptionELITE-70cm-IFU.pdf', '_blank');
   
    }else if(pacerValue.toUpperCase() === 'AXONICS' || pacerValue.toUpperCase() === '1101' ||pacerValue.toUpperCase() === '4101'){
   window.open('https://www.axonics.com/images/hcp/resources/03-16-2022/110-0093-001rY_-_MRI_Patient_Guidelines_Axonics_SNM_System_US_English.pdf', '_blank'); 
 

   
    }else if(pacerValue.toUpperCase() === 'VANTA' || pacerValue.toUpperCase() === '977006'){
   window.open('https://www.medtronic.com/content/dam/emanuals/neuro/M939858A_b_027_view.pdf', '_blank');

    }else if(pacerValue.toUpperCase() === 'ITREL 4' || pacerValue.toUpperCase() === '37704'){
   window.open('https://www.medtronic.com/content/dam/emanuals/neuro/M939858A_b_027_view.pdf', '_blank');

    }else if(pacerValue.toUpperCase() === 'ITREL 4' || pacerValue.toUpperCase() === '37703'){
   window.open('https://www.medtronic.com/content/dam/emanuals/neuro/M939858A_b_027_view.pdf', '_blank');

    }else if(pacerValue.toUpperCase() === 'ITREL 3' || pacerValue.toUpperCase() === '7425'){
   window.open('https://www.medtronic.com/content/dam/emanuals/neuro/M939858A_b_027_view.pdf', '_blank');


}else if(pacerValue.toUpperCase() === 'RESTORESENSOR' || pacerValue.toUpperCase() === '37714'  || pacerValue.toUpperCase() === 'RESTORE SENSOR'){
   window.open('https://www.medtronic.com/content/dam/emanuals/neuro/M939858A_b_027_view.pdf', '_blank');


}else if(pacerValue.toUpperCase() === 'RESTOREULTRA' || pacerValue.toUpperCase() === '97712'  || pacerValue.toUpperCase() === 'RESTORE ULTRA'){
   window.open('https://www.medtronic.com/content/dam/emanuals/neuro/M939858A_b_027_view.pdf', '_blank');


}else if(pacerValue.toUpperCase() === 'RESTOREADVANCED' || pacerValue.toUpperCase() === '97713'  || pacerValue.toUpperCase() === 'RESTORE ADVANCED'){
   window.open('https://www.medtronic.com/content/dam/emanuals/neuro/M939858A_b_027_view.pdf', '_blank');


}else if(pacerValue.toUpperCase() === 'RESTORESENSOR' || pacerValue.toUpperCase() === '97714' || pacerValue.toUpperCase() === 'RESTORE SENSOR' ){
   window.open('https://www.medtronic.com/content/dam/emanuals/neuro/M939858A_b_027_view.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'RESTORE' || pacerValue.toUpperCase() === '37711'){
   window.open('https://www.medtronic.com/content/dam/emanuals/neuro/M939858A_b_027_view.pdf', '_blank');


}else if(pacerValue.toUpperCase() === 'SYNERGY' || pacerValue.toUpperCase() === '7427'){
   window.open('https://www.medtronic.com/content/dam/emanuals/neuro/M939858A_b_027_view.pdf', '_blank');


}else if(pacerValue.toUpperCase() === 'VERSITREL' || pacerValue.toUpperCase() === '7427V'){
   window.open('https://www.medtronic.com/content/dam/emanuals/neuro/M939858A_b_027_view.pdf', '_blank');


}else if(pacerValue.toUpperCase() === 'MEDTRONIC NEUROSTIMULATOR' || pacerValue.toUpperCase() === '7427V'){
   window.open('https://www.medtronic.com/content/dam/emanuals/neuro/M939858A_b_027_view.pdf', '_blank');


}else if(pacerValue.toUpperCase() === 'SYNCHROMED II' || pacerValue.toUpperCase() === '8637'  || pacerValue.toUpperCase() === 'SYNCHROMED'  || pacerValue.toUpperCase() === 'SYNCHROMED2'  || pacerValue.toUpperCase() === 'SYNCHROMED 2' || pacerValue.toUpperCase() === '8626'  || pacerValue.toUpperCase() === '8627'  || pacerValue.toUpperCase() === '8615'  || pacerValue.toUpperCase() === '8616'  || pacerValue.toUpperCase() === '8617'  || pacerValue.toUpperCase() === '8616'  || pacerValue.toUpperCase() === 'ISOMED'  || pacerValue.toUpperCase() === '8472'){
   window.open('https://www.medtronic.com/content/dam/emanuals/neuro/M005186C_a_001_view.pdf', '_blank');


}else if(pacerValue.toUpperCase() === 'AMS 700'){
   window.open('https://www.bostonscientific.com/content/dam/elabeling/uro-ph/ams700-ms-pump/50654574-01A_AMS700_MSPump_IFU_multi_s.pdf', '_blank');


}else if(pacerValue.toUpperCase() === 'ISOMED' || pacerValue.toUpperCase() === '8472' || pacerValue.toUpperCase() === '8637'){
   window.open('https://www.medtronic.com/content/dam/emanuals/neuro/M005186C_a_001_view.pdf', '_blank');


/*Medtronic InterStim------------------------------------------------------*/
}else if(pacerValue.toUpperCase() === 'INTERSTIM' || pacerValue.toUpperCase() === '3023'  || pacerValue.toUpperCase() === 'INTERSTIM II' || pacerValue.toUpperCase() === '3058' || pacerValue.toUpperCase() === 'INTERSTIM MICRO' || pacerValue.toUpperCase() === '97810'|| pacerValue.toUpperCase() === 'INTERSTIM X' || pacerValue.toUpperCase() === '97800' || pacerValue.toUpperCase() === 'INTERSTIM TWIN' || pacerValue.toUpperCase() === '7427T'  ){
   window.open('../implantGuides/InterStim.html', '_blank');

/*Implant guide alert page-----------------------------------------*/
}else if(pacerValue.toUpperCase() === 'ENTERRA' || pacerValue.toUpperCase() === '3116'){
    window.open('../implantGuides/enterra.html', '_blank'); 
/*Implant guide alert page-----------------------------------------*/
}else if(pacerValue.toUpperCase() === 'ENTERRA II' || pacerValue.toUpperCase() === '37800'){
    window.open('../implantGuides/enterra.html', '_blank'); 

}else if(pacerValue.toUpperCase() === 'ENITRA'){
   window.open('https://www.promricheck.com/spring/welcome?execution=e11s1', '_blank');

   
 }else if(pacerValue.toUpperCase() === 'EVITY'){
   window.open('https://www.promricheck.com/spring/welcome?execution=e11s1', '_blank');

}else if(pacerValue.toUpperCase() === 'ENTICOS'){
   window.open('https://www.promricheck.com/spring/welcome?execution=e11s1', '_blank');

}else if(pacerValue.toUpperCase() === 'EDORA'){
   window.open('https://www.promricheck.com/spring/welcome?execution=e11s1', '_blank');

 
}else if(pacerValue.toUpperCase() === 'INSPIRE' || pacerValue.toUpperCase() === '3028' || pacerValue.toUpperCase() === '3024'){
   window.open('https://manuals.inspiresleep.com/content/widgets/manual.php?NTAwfDF8MQ==', '_blank');

}else if(pacerValue.toUpperCase() === 'ACTICOR 7 DR-T'){
   window.open('https://www.biotronik.com/en-de/products/tachycardia/acticor_7_dr-t_vr-t', '_blank');

}else if(pacerValue.toUpperCase() === 'ACTICOR 7 VR-T'){
   window.open('https://www.biotronik.com/en-de/products/tachycardia/acticor_7_dr-t_vr-t', '_blank');

}else if(pacerValue.toUpperCase() === 'BIOMONITOR IIIM'){
   window.open('https://www.biotronik.com/en-us/en-us/products/crm/arrhythmia-monitoring/biomonitorIIIm', '_blank');

}else if(pacerValue.toUpperCase() === 'INVENTRA 7 VR-T DX'){
   window.open('https://www.biotronik.com/en-us/products/crm/tachycardia/inventra-7-vr-t-dx', '_blank');

}else if(pacerValue.toUpperCase() === 'RIVACOR 7 VR-T'){
   window.open('https://www.biotronik.com/en-us/products/crm/tachycardia/rivacor', '_blank');

}else if(pacerValue.toUpperCase() === 'RIVACOR 7 DR-T'){
   window.open('https://www.biotronik.com/en-us/products/crm/tachycardia/rivacor', '_blank');

}else if(pacerValue.toUpperCase() === 'ACTICOR 7'){
   window.open('https://www.biotronik.com/en-us/products/crm/cardiac-resynchronization/acticor-7-hf-t-qp', '_blank');

}else if(pacerValue.toUpperCase() === 'AVEIR' || pacerValue.toUpperCase() === 'LSP112V' ){
   window.open('abbottImplants/aveir.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'ASSURITY' || pacerValue.toUpperCase() === 'PM1272' || pacerValue.toUpperCase() === 'PM2272' ){
   window.open('abbottImplants/assurity.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'ENDURITY' || pacerValue.toUpperCase() === 'PM1172'|| pacerValue.toUpperCase() === 'PM2172'  ){
   window.open('abbottImplants/assurity.pdf', '_blank');

    
}else if(pacerValue.toUpperCase() === 'ACCENT' || pacerValue.toUpperCase() === 'PM1224' || pacerValue.toUpperCase() === 'PM2218'  ){
   window.open('abbottImplants/assurity.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'QUADRA ALLURE' || pacerValue.toUpperCase() === 'PM3542' ){
   window.open('abbottImplants/assurity.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'QUADRA ALLURE MP' || pacerValue.toUpperCase() === 'PM3562' ){
   window.open('abbottImplants/assurity.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'ELLIPSE' || pacerValue.toUpperCase() === 'CD1311-36Q' ){
   window.open('abbottImplants/assurity.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'ELLIPSE' || pacerValue.toUpperCase() === 'CD1411-36Q' ){
   window.open('abbottImplants/assurity.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'ELLIPSE' || pacerValue.toUpperCase() === 'CD1411-36QC' ){
   window.open('abbottImplants/assurity.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'ELLIPSE' || pacerValue.toUpperCase() === 'CD2311-36Q' ){
   window.open('abbottImplants/assurity.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'ELLIPSE' || pacerValue.toUpperCase() === 'CD2411-36Q' ){
   window.open('abbottImplants/assurity.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'ELLIPSE' || pacerValue.toUpperCase() === 'CD2411-36QC' ){
   window.open('abbottImplants/assurity.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'CERTAS'){
   window.open('https://www.integralife.com/file/general/1547128541.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'CODMAN HAKIM' || pacerValue.toUpperCase() === 'HAKIM'){
   window.open('Docs/CODMAN-hakim.png', '_blank'); 

}else if(pacerValue.toUpperCase() === 'CODMAN'){
   window.open('implantGuides/codman.html', '_blank'); 

}else if(pacerValue.toUpperCase() === 'FORTIFY ASSURA' || pacerValue.toUpperCase() === 'CD1357-40Q' ){
   window.open('abbottImplants/assurity.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'FORTIFY ASSURA' || pacerValue.toUpperCase() === 'CD1357-40QC' ){
   window.open('abbottImplants/assurity.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'FORTIFY ASSURA' || pacerValue.toUpperCase() === 'CD2357-40Q' ){
   window.open('abbottImplants/assurity.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'FORTIFY ASSURA' || pacerValue.toUpperCase() === 'CD2357-40QC' ){
  window.open('abbottImplants/assurity.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'QUADRA ASSURA' || pacerValue.toUpperCase() === 'CD3365-40Q' ){
   window.open('abbottImplants/assurity.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'QUADRA ASSURA' || pacerValue.toUpperCase() === 'CD3365-40QC' ){
   window.open('abbottImplants/assurity.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'QUADRA ASSURA' || pacerValue.toUpperCase() === 'CD3369-40Q' ){
   window.open('abbottImplants/assurity.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'QUADRA ASSURA' || pacerValue.toUpperCase() === 'CD3369-40QC' ){
   window.open('abbottImplants/assurity.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'PROCLAIM XR' || pacerValue.toUpperCase() === '3660' ){
   window.open('abbottImplants/neurostimulation.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'PROCLAIM XR' || pacerValue.toUpperCase() === '3662' ){
   window.open('abbottImplants/neurostimulation.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'ESSURE' ){
   window.open('https://labeling.bayerhealthcare.com/html/products/pi/essure_ifu.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'INGENIO' || pacerValue.toUpperCase() === 'K173' ){
    alert('Not MR-Conditional');

}else if(pacerValue.toUpperCase() === 'PROCLAIM' || pacerValue.toUpperCase() === '3662' ){
   window.open('abbottImplants/neurostimulation.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'LIVANOVA' || pacerValue.toUpperCase() === '103' || pacerValue.toUpperCase() === '105' || pacerValue.toUpperCase() === '106' || pacerValue.toUpperCase() === '1000' || pacerValue.toUpperCase() === 'DEMIPULSE' || pacerValue.toUpperCase() === 'ASPIREHC' || pacerValue.toUpperCase() === 'ASPIRESR' || pacerValue.toUpperCase() === 'SENTIVA' || pacerValue.toUpperCase() === '102' || pacerValue.toUpperCase() === 'PULSE DUO' || pacerValue.toUpperCase() === '102R' || pacerValue.toUpperCase() === 'DEMIPULSE DUO'){
   window.open('https://www.livanova.com/epilepsy-vnstherapy/getmedia/7a696c39-8777-4d24-afdf-fea7d54b7475/im-7601036-epi-mri-guidelines-digital_5.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'PROCLAIM DRG' || pacerValue.toUpperCase() === '3664' ){
   window.open('abbottImplants/neurostimulation.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'PROTEGE' || pacerValue.toUpperCase() === '3771' ){
   window.open('abbottImplants/neurostimulation.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'PROTEGE' || pacerValue.toUpperCase() === '3772' ){
   window.open('abbottImplants/neurostimulation.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'INFINITY 5' || pacerValue.toUpperCase() === '6660' ){
   window.open('abbottImplants/infinity.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'INFINITY 7' || pacerValue.toUpperCase() === '6662' ){
   window.open('abbottImplants/infinity.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'GALLANT' || pacerValue.toUpperCase() === 'CDVRA500Q' || pacerValue.toUpperCase() === 'CDDRA500Q' || pacerValue.toUpperCase() === 'CDHFA500Q' ){
   window.open('abbottImplants/STjude.pdf', '_blank');

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


}else if(pacerValue.toUpperCase() === 'PRECISION MONTAGE MRI' || pacerValue.toUpperCase() === 'SC-1200'|| pacerValue.toUpperCase() === 'SC1200'|| pacerValue.toUpperCase() === 'MONTAGE' ){
   window.open('https://www.bostonscientific.com/content/dam/elabeling/nm/91035972-02_RevA_ImageReady_MRI_Full_Body_Guidelines_for_Precision_Montage_MRI_Spinal_Cord_Stimulator_System_MRI_en-US_S.pdf', '_blank');


}else if(pacerValue.toUpperCase() === 'PRECISION SPECTRA' || pacerValue.toUpperCase() === 'SC-1132' || pacerValue.toUpperCase() === 'SC1132'){
   window.open('https://www.bostonscientific.com/content/dam/elabeling/nm/91057049-04_ImageReady%E2%84%A2_MRI_Head_Only_Guidelines_for_Precision_Spectra%E2%84%A2_Spinal_Cord_Stimulator_System_s.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'SPECTRA WAVEWRITER' || pacerValue.toUpperCase() === 'SC-1160'|| pacerValue.toUpperCase() === 'SC1160' ){
     window.open('https://www.bostonscientific.com/content/dam/elabeling/nm/91171762-02_ImageReady%E2%84%A2_MRI_Head_Only_Guidelines_for_Spectra_WaveWriter%E2%84%A2_Spinal_Cord_Stimulator_System_s.pdf', '_blank');

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

}else if(pacerValue.toUpperCase() === 'WATCHMAN'){
   window.open('https://www.bostonscientific.com/content/dam/elabeling/ic/watchman/51221705-01A_WATCHMAN_IFU_en_s.pdf', '_blank');
   
}else if(pacerValue.toUpperCase() === 'AMPLATZER' || pacerValue.toUpperCase() === 'PFO OCCLUDER' ){
   window.open('https://www.myamplatzer.com/media/resources/MAT-2002608-v1.0_PFO_Spec_Sheet_US_FINAL.PDF', '_blank');  

 

}else if(pacerValue.toUpperCase() === 'UROLIFT'){
   window.open('https://cdn2.hubspot.net/hubfs/2618738/L00135-01_RevA%20Patient%20Implant%20Card.pdf', '_blank');  

/*Implant alert page--------------------------------------*/
}else if(pacerValue.toUpperCase() === 'PIPELINE'){
   window.open('../implantGuides/pipeLine.html', '_blank');  

}else if(pacerValue.toUpperCase() === 'WAVECREST'){
   window.open('http://www.mrisafety.com/OBJ_STATUS_view.php?editid1=11', '_blank');  

}else if(pacerValue.toUpperCase() === 'VILIGANT'|| pacerValue.toUpperCase() === 'D220' || pacerValue.toUpperCase() === 'D221' || pacerValue.toUpperCase() === 'D232' || pacerValue.toUpperCase() === 'D233' || pacerValue.toUpperCase() === 'G248' || pacerValue.toUpperCase() === 'G247'){
   window.open('https://www.bostonscientific.com/content/dam/elabeling/crm/359450-007_Tachy_MRI_TG_us_s.pdf', '_blank');  

}else if(pacerValue.toUpperCase() === 'LUX-DX' || pacerValue.toUpperCase() === 'M301'){
   window.open('https://www.bostonscientific.com/content/dam/elabeling/crm/92216906-001_IMAGEREADY_MRITG_en_S.pdf', '_blank');  

   
}else if(pacerValue.toUpperCase() === 'SYNCHRONY2' || pacerValue.toUpperCase() === 'SYNCHRONY 2' || pacerValue.toUpperCase() === 'MI1250' || pacerValue.toUpperCase() === 'SYNCHRONY' || pacerValue.toUpperCase() === 'MI1200'  || pacerValue.toUpperCase() === 'MED-EL CONCERT'  || pacerValue.toUpperCase() === 'CONCERT'  || pacerValue.toUpperCase() === 'MI1000' || pacerValue.toUpperCase() === 'SONATA' || pacerValue.toUpperCase() === 'PULSAR' || pacerValue.toUpperCase() === 'C40+' || pacerValue.toUpperCase() === 'C40')  {
     window.open('https://www.medel.com/docs/default-source/isi-important-safety-information/languages/en-us-english-usa/ci-cochlear-implants/aw33290_80_manual-medical-procedures-ci-systems-en-english-us_web.pdf?auto=format&sfvrsn=b5299142_4', '_blank');  


 }else if(pacerValue.toUpperCase() === 'ASSURANCE' || pacerValue.toUpperCase() === 'ASSURANCE CLIP'){
   window.open('https://ww1.steris.com/onbDocs/V517/0/4101648.pdf', '_blank');      

 }else if(pacerValue.toUpperCase() === 'RHYTHMLINK'){
   window.open('../implantGuides/eeg.html', '_blank');   

 }else if(pacerValue.toUpperCase() === 'RESOLUTION' || pacerValue.toUpperCase() === 'RESOLUTION CLIP'){
   window.open('https://www.bostonscientific.com/content/dam/bostonscientific/endo/portfolio-group/resolution-clip/bsci-sheet-dfu-resolutionclip.pdf', '_blank');  
   
 }else if(pacerValue.toUpperCase() === 'MIRENA'){
   window.open('https://www.mrisafety.com/SafetyInformation_view.php?editid1=181', '_blank'); 

 }else if(pacerValue.toUpperCase() === 'VIVISTIM'|| pacerValue.toUpperCase() === '1001'){
   window.open('Docs/Vivistim.pdf', '_blank'); 

 }else if(pacerValue.toUpperCase() === 'KURZ'){
   window.open('https://www.ccmed.co.uk/wp-content/uploads/2019/10/MR_Information_en_Rev_06.pdf', '_blank'); 

 }else if(pacerValue.toUpperCase() === 'HYDROFRAME'|| pacerValue.toUpperCase() === 'MICROPLEX' || pacerValue.toUpperCase() === 'HYDROCOIL'){
   window.open('https://www.microvention.com/product/hydroframe/instructions-for-use/mri-safety-information-hydrocoil', '_blank'); 

 }else if(pacerValue.toUpperCase() === 'VIGILANT' || pacerValue.toUpperCase() === 'G228' || pacerValue.toUpperCase() === 'G248' || pacerValue.toUpperCase() === 'G237' || pacerValue.toUpperCase() === 'G247'  || pacerValue.toUpperCase() === 'G224'  || pacerValue.toUpperCase() === 'G225'  || pacerValue.toUpperCase() === 'AUTOGEN' || pacerValue.toUpperCase() === 'G166' || pacerValue.toUpperCase() === 'G168' || pacerValue.toUpperCase() === 'G160' || pacerValue.toUpperCase() === 'G161' || pacerValue.toUpperCase() === 'G168' || pacerValue.toUpperCase() === 'DYNAGEN' || pacerValue.toUpperCase() === 'G156' || pacerValue.toUpperCase() === 'G158'  || pacerValue.toUpperCase() === 'G150' || pacerValue.toUpperCase() === 'G151' || pacerValue.toUpperCase() === 'INOGEN'  || pacerValue.toUpperCase() === 'G146' || pacerValue.toUpperCase() === 'G148' || pacerValue.toUpperCase() === 'G140'  || pacerValue.toUpperCase() === 'G141' || pacerValue.toUpperCase() === 'MOMENTUM' || pacerValue.toUpperCase() === 'G128'  || pacerValue.toUpperCase() === 'G138' || pacerValue.toUpperCase() === 'G124' || pacerValue.toUpperCase() === 'G125'  || pacerValue.toUpperCase() === 'ORIGEN' || pacerValue.toUpperCase() === 'G056' || pacerValue.toUpperCase() === 'G058'  || pacerValue.toUpperCase() === 'G050' || pacerValue.toUpperCase() === 'G051' || pacerValue.toUpperCase() === 'RESONATE'  || pacerValue.toUpperCase() === 'G524' || pacerValue.toUpperCase() === 'G525' || pacerValue.toUpperCase() === 'G528'  || pacerValue.toUpperCase() === 'G548' || pacerValue.toUpperCase() === 'G537' || pacerValue.toUpperCase() === 'G547'  || pacerValue.toUpperCase() === 'G428' || pacerValue.toUpperCase() === 'G448' || pacerValue.toUpperCase() === 'G437'  || pacerValue.toUpperCase() === 'G447' || pacerValue.toUpperCase() === 'G424' || pacerValue.toUpperCase() === 'G425'){
     window.open('https://www.bostonscientific.com/content/dam/elabeling/crm/51114094-001A_IMAGEREADY_MRITG_en_S.pdf', '_blank');   


  }else if(pacerValue.toUpperCase() === 'D160' || pacerValue.toUpperCase() === 'D161' || pacerValue.toUpperCase() === 'D162' || pacerValue.toUpperCase() === 'D163' || pacerValue.toUpperCase() === 'D150'  || pacerValue.toUpperCase() === 'D151'  || pacerValue.toUpperCase() === 'D152'  || pacerValue.toUpperCase() === 'D020' || pacerValue.toUpperCase() === 'D021' || pacerValue.toUpperCase() === 'D153' || pacerValue.toUpperCase() === 'D022' || pacerValue.toUpperCase() === 'D023' || pacerValue.toUpperCase() === 'D140' || pacerValue.toUpperCase() === 'D141' || pacerValue.toUpperCase() === 'D142' || pacerValue.toUpperCase() === 'D143'  || pacerValue.toUpperCase() === 'D010' || pacerValue.toUpperCase() === 'D011' || pacerValue.toUpperCase() === 'D012'  || pacerValue.toUpperCase() === 'G146' || pacerValue.toUpperCase() === 'G148' || pacerValue.toUpperCase() === 'G140'  || pacerValue.toUpperCase() === 'D013' || pacerValue.toUpperCase() === 'D120' || pacerValue.toUpperCase() === 'D121'  || pacerValue.toUpperCase() === 'D050' || pacerValue.toUpperCase() === 'D051' || pacerValue.toUpperCase() === 'D052'  || pacerValue.toUpperCase() === 'D053' || pacerValue.toUpperCase() === 'D000' || pacerValue.toUpperCase() === 'G058'  || pacerValue.toUpperCase() === 'G050' || pacerValue.toUpperCase() === 'D001' || pacerValue.toUpperCase() === 'D002'  || pacerValue.toUpperCase() === 'D003' || pacerValue.toUpperCase() === 'PERCIVA' || pacerValue.toUpperCase() === 'D500'  || pacerValue.toUpperCase() === 'D501' || pacerValue.toUpperCase() === 'D512' || pacerValue.toUpperCase() === 'D513'  || pacerValue.toUpperCase() === 'D400' || pacerValue.toUpperCase() === 'D401' || pacerValue.toUpperCase() === 'D412'  || pacerValue.toUpperCase() === 'D413'){
     window.open('https://www.bostonscientific.com/content/dam/elabeling/crm/51114094-001A_IMAGEREADY_MRITG_en_S.pdf', '_blank');      

  }else if(pacerValue.toUpperCase() === 'D520' || pacerValue.toUpperCase() === 'D521' || pacerValue.toUpperCase() === 'D532' || pacerValue.toUpperCase() === 'D533' || pacerValue.toUpperCase() === 'D420'  || pacerValue.toUpperCase() === 'D421'  || pacerValue.toUpperCase() === 'D432'  || pacerValue.toUpperCase() === 'D433' || pacerValue.toUpperCase() === 'D220' || pacerValue.toUpperCase() === 'D221' || pacerValue.toUpperCase() === 'D232' || pacerValue.toUpperCase() === 'D233'){
     window.open('https://www.bostonscientific.com/content/dam/elabeling/crm/51114094-001A_IMAGEREADY_MRITG_en_S.pdf', '_blank');     


  /*Implant guide alert page-----------------------------------------*/
  }else if(pacerValue.toUpperCase() === 'STRATA'|| pacerValue.toUpperCase() === 'STRATAMR'){
   window.open('../implantGuides/strata.html', '_blank'); 


   /*Cochlear implants--------------------------------------------------*/

    }else if(pacerValue.toUpperCase() === 'COCHLEAR' || pacerValue.toUpperCase() === 'COCHLEAR IMPLANT'){
   window.open('../implantGuides/cochlear.html', '_blank');

  }else if(pacerValue.toUpperCase() === 'ADVANCED BIONICS'|| pacerValue.toUpperCase() === 'HIRES ULTRA 3D' || pacerValue.toUpperCase() === 'CI-1601-04'){
   window.open('https://www.advancedbionics.com/content/dam/advancedbionics/Documents/Regional/en-us/Professionals/hires-ultra-3d-mri-safety-information.pdf', '_blank'); 

   }else if(pacerValue.toUpperCase() === 'NUCLEUS'){
   window.open('https://www.cochlear.com/us/en/professionals/resources-and-training/mri-guidelines', '_blank');

}else if(pacerValue.toUpperCase() === 'OSIA'){
   window.open('https://www.cochlear.com/us/en/professionals/resources-and-training/mri-guidelines', '_blank');

}else if(pacerValue.toUpperCase() === 'BAHA'){
   window.open('https://www.cochlear.com/us/en/professionals/resources-and-training/mri-guidelines', '_blank');

}else if(pacerValue.toUpperCase() === 'VISTAFIX'){
   window.open('https://www.cochlear.com/us/en/professionals/resources-and-training/mri-guidelines', '_blank');


  }else if(pacerValue.toUpperCase() === 'WALLFLEX'|| pacerValue.toUpperCase() === 'COLONIC AND DUODENAL SOFT STENT'){
   window.open('https://www.bostonscientific.com/content/dam/bostonscientific/endo/portfolio-group/wallflex-colonic-and-duodenal/Wallflex_Soft_Abbreviated_DFU_FINAL.pdf', '_blank');  


  }else if(pacerValue.toUpperCase() === 'PROGAV 2.0'|| pacerValue.toUpperCase() === 'PROGAV'){
   window.open('Docs/proGav.pdf', '_blank');  

  }else if(pacerValue.toUpperCase() === 'AVEIR'|| pacerValue.toUpperCase() === 'LSP112V'){
   window.open('Docs/aveirPacemaker.pdf', '_blank');  

  }else if(pacerValue.toUpperCase() === 'GORE'|| pacerValue.toUpperCase() === 'GORE TAG' || pacerValue.toUpperCase() === 'GORE VIABIL' || pacerValue.toUpperCase() === 'GORE CARDIOFORM' || pacerValue.toUpperCase() === 'GORE EXCLUDER' || pacerValue.toUpperCase() === 'GORE VIABAHN' || pacerValue.toUpperCase() === 'GORE VIATORR'){
   window.open('https://www.goremedical.com/support/mri-safety-information', '_blank');  

  }else if(pacerValue.toUpperCase() === 'LOCKADO'){
   window.open('https://mtendoscopy.com/wp-content/uploads/2023/01/Lockado-MRI_Card_1-0027609-REV-5-2.pdf', '_blank');   

   
  }else if(pacerValue.toUpperCase() === 'DM3500'|| pacerValue.toUpperCase() === 'CONFIRM RX' || pacerValue.toUpperCase() === 'CONFIRMRX' || pacerValue.toUpperCase() === 'CONFIRM' || pacerValue.toUpperCase() === '3500' ){
   window.open('Docs/dm3500.pdf', '_blank');  

  }else if(pacerValue.toUpperCase() === 'SYNERGYXD'|| pacerValue.toUpperCase() === 'SYNERGY XD'){
   window.open('https://www.bostonscientific.com/content/dam/elabeling/ic/synergy_xd/51266501-02A_SYNERGYXD_PatientGuide_US_EN_s.pdf', '_blank');  

  }else if(pacerValue.toUpperCase() === 'AXIOS'){
   window.open('https://www.bostonscientific.com/content/dam/bostonscientific/endo/portfolio-group/AXIOS/dfu_AXIOS-stent-and%20delivery-system.pdf', '_blank');  

  


}else{
      alert("Something went wrong please try again. If that doesn't work use slideout/hamburger menu(UPPER LEFT CORNER OF WEBPAGE 3 Horizontal lines) for manufactures website search."
      );
     }     
}
        




document.getElementById('pacerSubmit').onclick = function(){
  var implantInput = document.getElementById('implant');
implantInput.addEventListener('keyup', function(event){
  if(event.key === "13"){
    event.preventDefault();
    document.getElementById('pacerSubmit').click();
  }
});
  implantLookup();
}






