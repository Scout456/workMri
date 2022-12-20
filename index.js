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
  


  if(pacerValue.toUpperCase() === 'ADVISA SR' || pacerValue.toUpperCase() === 'A3SR01'){
     
 window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_235435.pdf', '_blank' );

 }else if(pacerValue.toUpperCase() === 'ADVISA DR' || pacerValue.toUpperCase() === 'A2DR01'){ 
   
   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_235435.pdf', '_blank' );


 }else if(pacerValue.toUpperCase() === 'ENSURA' || pacerValue.toUpperCase() === 'EN1DR01'|| pacerValue.toUpperCase() === 'EN1SR01'){ 
    alert("Not FDA approved, BUT MRI-CONDITIONAL, need radiologist approval to scan off label.");
    
    window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_231430.pdf', '_blank' );



 }else if(pacerValue.toUpperCase() === 'AZURE XT DR' || pacerValue.toUpperCase() === 'W1DR01'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_260118.pdf', '_blank' );

 }else if(pacerValue.toUpperCase() === 'PERCUFLEX PLUS' || pacerValue.toUpperCase() === 'PERCUFLEX'){

  window.open('http://www.mrisafety.com/TMDL_view.php?editid1=6058', '_blank' );


 }else if(pacerValue.toUpperCase() === 'YASARGIL'){

  window.open('Docs/MRI-Safety-Information-Yasargil-Titanium-and-Phynox-Aneurysm-Clips.pdf', '_blank' );

 }else if(pacerValue.toUpperCase() === 'SUGITA' || pacerValue.toUpperCase() === 'MIZUHO'){

  window.open('https://www.mrisafety.com/TMDL_list.php?goto=201', '_blank' );


}else if(pacerValue.toUpperCase() === 'VIRTUOSO' || pacerValue.toUpperCase() === 'D154AWG'){

alert("NOT MR-CONDITIONAL");

    

 }else if(pacerValue.toUpperCase() === 'NEVRO' || pacerValue.toUpperCase() === 'SENZA'){

   window.open('https://s28.q4cdn.com/260621474/files/doc_downloads/2022/05/1.5T-and-3T-MRI-Guidelines-for-the-Senza-Neuromodulation-Systems-(11096)-Rev-P.pdf', '_blank' );


 }else if(pacerValue.toUpperCase() === 'AZURE XT SR' || pacerValue.toUpperCase() === 'W1SR01'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_260118.pdf', '_blank' );

  }else if(pacerValue.toUpperCase() === 'AZURE S SR' || pacerValue.toUpperCase() === 'W3SR01'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_260118.pdf', '_blank' );

}else if(pacerValue.toUpperCase() === 'AZURE S DR' || pacerValue.toUpperCase() === 'W3DR01'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_260118.pdf', '_blank' );

}else if(pacerValue.toUpperCase() === 'MICRA VR' || pacerValue.toUpperCase() === 'MICRA' || pacerValue.toUpperCase() === 'MC1VR01'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/M992497A001A_view.pdf', '_blank' );
  
}else if(pacerValue.toUpperCase() === 'MICRA AV' || pacerValue.toUpperCase() === 'MC1AVR1'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/M995149A001A_view.pdf', '_blank' );
  
}else if(pacerValue.toUpperCase() === 'ATTESTA DR' || pacerValue.toUpperCase() === 'ATDR01'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/M967434A001B_view.pdf', '_blank' );
}else if(pacerValue.toUpperCase() === 'ATTESTA L DR' || pacerValue.toUpperCase() === 'ATDRL1'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/M967434A001B_view.pdf', '_blank' );
}else if(pacerValue.toUpperCase() === 'ATTESTA S DR' || pacerValue.toUpperCase() === 'ATDRS1'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/M967434A001B_view.pdf', '_blank' );
}else if(pacerValue.toUpperCase() === 'ATTESTA SR' || pacerValue.toUpperCase() === 'ATSR01'){

  window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/M967434A001B_view.pdf', '_blank' );
}else if(pacerValue.toUpperCase() === 'RESTORE' || pacerValue.toUpperCase() === '37712'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/neuro/CONTRIB_171957.pdf', '_blank' );
}else if(pacerValue.toUpperCase() === 'SPHERA SR' || pacerValue.toUpperCase() === 'SPSR01'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/M967434A001B_view.pdf', '_blank' );
}else if(pacerValue.toUpperCase() === 'SPHERA DR' || pacerValue.toUpperCase() === 'SPDR01'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/M967434A001B_view.pdf', '_blank' );
}else if(pacerValue.toUpperCase() === 'SPHERA L DR' || pacerValue.toUpperCase() === 'SPDRL1'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/M967434A001B_view.pdf', '_blank' );
}else if(pacerValue.toUpperCase() === 'ATTESTA' || pacerValue.toUpperCase() === 'ATDRL1'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/M967434A001B_view.pdf', '_blank' );
}else if(pacerValue.toUpperCase() === 'SPHERA' || pacerValue.toUpperCase() === 'ATDRL1'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/M967434A001B_view.pdf', '_blank' );
}else if(pacerValue.toUpperCase() === 'ADVISA' || pacerValue.toUpperCase() === 'A3SR01'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_235435.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'AZURE'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_260118.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'ASTRA'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_260118.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'REVO' || pacerValue.toUpperCase() === 'RVDR01'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_184935.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'COBALT XT' || pacerValue.toUpperCase() === 'DVPA2D1'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/M988007A001B_view.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'COBALT XT' || pacerValue.toUpperCase() === 'DVPA2D4'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/M988007A001B_view.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'COBALT XT' || pacerValue.toUpperCase() === 'DDPA2D1'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/M988007A001B_view.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'COBALT XT' || pacerValue.toUpperCase() === 'DDPA2D4'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/M988007A001B_view.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'COBALT' || pacerValue.toUpperCase() === 'DVPB3D1'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/M988007A001B_view.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'COBALT' || pacerValue.toUpperCase() === 'DVPB3D4'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/M988007A001B_view.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'COBALT' || pacerValue.toUpperCase() === 'DDPB3D1'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/M988007A001B_view.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'COBALT' || pacerValue.toUpperCase() === 'DDPB3D4'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/M988007A001B_view.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'CROME' || pacerValue.toUpperCase() === 'DVPC3D4'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/M988007A001B_view.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'CROME' || pacerValue.toUpperCase() === 'DVPC3D1'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/M988007A001B_view.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'CROME' || pacerValue.toUpperCase() === 'DDPC3D4'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/M988007A001B_view.pdf', '_blank');
   
}else if(pacerValue.toUpperCase() === 'CROME' || pacerValue.toUpperCase() === 'DDPC3D1'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/M988007A001B_view.pdf', '_blank');
   
}else if(pacerValue.toUpperCase() === 'PRIMO' || pacerValue.toUpperCase() === 'DDMD3D1'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/M976736A001B_view.pdf', '_blank');
   
}else if(pacerValue.toUpperCase() === 'PRIMO' || pacerValue.toUpperCase() === 'DDMD3D4'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/M976736A001B_view.pdf', '_blank');
   
}else if(pacerValue.toUpperCase() === 'PRIMO' || pacerValue.toUpperCase() === 'DVMD3D1'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/M976736A001B_view.pdf', '_blank');
   
}else if(pacerValue.toUpperCase() === 'PRIMO' || pacerValue.toUpperCase() === 'DVMDD3D4'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/M976736A001B_view.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'MIRRO' || pacerValue.toUpperCase() === 'DVME3D1'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/M976736A001B_view.pdf', '_blank');
   
}else if(pacerValue.toUpperCase() === 'MIRRO' || pacerValue.toUpperCase() === 'DVME3D4'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/M976736A001B_view.pdf', '_blank');
   
}else if(pacerValue.toUpperCase() === 'MIRRO' || pacerValue.toUpperCase() === 'DDME3D1'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/M976736A001B_view.pdf', '_blank');
   
}else if(pacerValue.toUpperCase() === 'MIRRO' || pacerValue.toUpperCase() === 'DDME3D4'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/M976736A001B_view.pdf', '_blank');
   
}else if(pacerValue.toUpperCase() === 'VISIA AF' || pacerValue.toUpperCase() === 'DVFB1D1'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_235962.pdf', '_blank');
   
}else if(pacerValue.toUpperCase() === 'VISIA AF' || pacerValue.toUpperCase() === 'DVFB1D1'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_235962.pdf', '_blank');
   
}else if(pacerValue.toUpperCase() === 'VISIA AF' || pacerValue.toUpperCase() === 'DVFB1D4'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_235962.pdf', '_blank');
   
}else if(pacerValue.toUpperCase() === 'VISIA AF S' || pacerValue.toUpperCase() === 'DVFC3D1'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_235962.pdf', '_blank');
   
}else if(pacerValue.toUpperCase() === 'VISIA AF S' || pacerValue.toUpperCase() === 'DVFC3D4'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_235962.pdf', '_blank');
   
}else if(pacerValue.toUpperCase() === 'VISIA' || pacerValue.toUpperCase() === 'DVFC3D4'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_235962.pdf', '_blank');
   
}else if(pacerValue.toUpperCase() === 'EVERA XT' || pacerValue.toUpperCase() === 'DDMB1D4'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_235453.pdf', '_blank');
   
}else if(pacerValue.toUpperCase() === 'EVERA XT' || pacerValue.toUpperCase() === 'DVMB1D4'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_235453.pdf', '_blank');
   
}else if(pacerValue.toUpperCase() === 'EVERA XT' || pacerValue.toUpperCase() === 'DDMB1D1'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_235453.pdf', '_blank');
   
}else if(pacerValue.toUpperCase() === 'EVERA XT' || pacerValue.toUpperCase() === 'DVMB1D1'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_235453.pdf', '_blank');
   
}else if(pacerValue.toUpperCase() === 'EVERA'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_235453.pdf', '_blank');
   
}else if(pacerValue.toUpperCase() === 'EVERA S' || pacerValue.toUpperCase() === 'DDMC3D4'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_235453.pdf', '_blank');
   
}else if(pacerValue.toUpperCase() === 'EVERA S' || pacerValue.toUpperCase() === 'DDMC3D1'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_235453.pdf', '_blank');
   
}else if(pacerValue.toUpperCase() === 'EVERA S' || pacerValue.toUpperCase() === 'DVMC3D1'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_235453.pdf', '_blank');
   
}else if(pacerValue.toUpperCase() === 'EVERA S' || pacerValue.toUpperCase() === 'DVMC3D4'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_235453.pdf', '_blank');
   
}else if(pacerValue.toUpperCase() === 'CLARIA QUAD CRT-D' || pacerValue.toUpperCase() === 'DTMA1QQ'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_242350.pdf', '_blank');
   
}else if(pacerValue.toUpperCase() === 'CLARIA QUAD CRT-D' || pacerValue.toUpperCase() === 'DTMA1Q1'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_242350.pdf', '_blank');
   
}else if(pacerValue.toUpperCase() === 'CLARIA CRT-D' || pacerValue.toUpperCase() === 'DTMA1D4'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_242350.pdf', '_blank');
   
}else if(pacerValue.toUpperCase() === 'CLARIA CRT-D' || pacerValue.toUpperCase() === 'DTMA1D1'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_242350.pdf', '_blank');
   
}else if(pacerValue.toUpperCase() === 'CLARIA'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_242350.pdf', '_blank');
   
}else if(pacerValue.toUpperCase() === 'AMPLIA QUAD CRT-D' || pacerValue.toUpperCase() === 'DTMB1QQ'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_241677.pdf', '_blank');
   
}else if(pacerValue.toUpperCase() === 'AMPLIA QUAD CRT-D' || pacerValue.toUpperCase() === 'DTMB1Q1'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_241677.pdf', '_blank');
   
}else if(pacerValue.toUpperCase() === 'AMPLIA CRT-D' || pacerValue.toUpperCase() === 'DTMB1D4'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_241677.pdf', '_blank');
   
}else if(pacerValue.toUpperCase() === 'AMPLIA CRT-D' || pacerValue.toUpperCase() === 'DTMB1D1'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_241677.pdf', '_blank');
   
}else if(pacerValue.toUpperCase() === 'AMPLIA'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_241677.pdf', '_blank');
   
}else if(pacerValue.toUpperCase() === 'COMPIA QUAD CRT-D' || pacerValue.toUpperCase() === 'DTMC1QQ'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_241677.pdf', '_blank');
   
}else if(pacerValue.toUpperCase() === 'COMPIA CRT-D' || pacerValue.toUpperCase() === 'DTMC1D1'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_241677.pdf', '_blank');
   
}else if(pacerValue.toUpperCase() === 'COMPIA CRT-D' || pacerValue.toUpperCase() === 'DTMCC1D1'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_241677.pdf', '_blank');
   
}else if(pacerValue.toUpperCase() === 'COMPIA'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_241677.pdf', '_blank');
   
}else if(pacerValue.toUpperCase() === 'PERCEPTA QUAD CRT-P' || pacerValue.toUpperCase() === 'W4TR01'){

   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_254285.pdf', '_blank');


}else if(pacerValue.toUpperCase() === 'PERCEPTA CRT-P' || pacerValue.toUpperCase() === 'W1TR01'){
   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_254285.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'SERENA QUAD CRT-P' || pacerValue.toUpperCase() === 'W4TR02'){
   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_254285.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'SERENA CRT-P' || pacerValue.toUpperCase() === 'W1TR02'){
   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_254285.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'SOLARA QUAD CRT-P' || pacerValue.toUpperCase() === 'W4TR03'){
   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_254285.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'SOLARA CRT-P' || pacerValue.toUpperCase() === 'W1TR03'){
   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_254285.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'PERCEPTA'){
   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_254285.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'SERENA'){
   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_254285.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'SOLARA'){
   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_254285.pdf', '_blank');


}else if(pacerValue.toUpperCase() === 'LINQ11' || pacerValue.toUpperCase() === 'LNQ11'){
   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_188127.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'REVEAL XT' || pacerValue.toUpperCase() === '9529'){
   alert("Section D: MRI scanning instructions.  Must wait 6 weeks before scanning.")
   window.open('https://manuals.medtronic.com/content/dam/emanuals/crdm/CONTRIB_092102.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'ACTIVA PC' || pacerValue.toUpperCase() === '37601'){
   window.open('https://manuals.medtronic.com/content/dam/emanuals/neuro/M929535A_b_074_view.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'ACTIVA SC' || pacerValue.toUpperCase() === '37603'){
   window.open('https://manuals.medtronic.com/content/dam/emanuals/neuro/M929535A_b_074_view.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'ACTIVA RC' || pacerValue.toUpperCase() === '37612'){
   window.open('https://manuals.medtronic.com/content/dam/emanuals/neuro/M929535A_b_074_view.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'ACTIVA' || pacerValue.toUpperCase() === '37602'){
   window.open('https://manuals.medtronic.com/content/dam/emanuals/neuro/M929535A_b_074_view.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'S0LETRA' || pacerValue.toUpperCase() === '7426'){
   window.open('https://manuals.medtronic.com/content/dam/emanuals/neuro/M929535A_b_074_view.pdf', '_blank');


}else if(pacerValue.toUpperCase() === 'PRIMEADVANCED' || pacerValue.toUpperCase() === '97702'){
   window.open('https://manuals.medtronic.com/content/dam/emanuals/neuro/M939858A_b_027_view.pdf', '_blank');

   }else if(pacerValue.toUpperCase() === 'KINETRA' || pacerValue.toUpperCase() === '7428'){
   window.open('https://manuals.medtronic.com/content/dam/emanuals/neuro/CONTRIB_228155.pdf', '_blank');

   }else if(pacerValue.toUpperCase() === 'PERCEPT PC' || pacerValue.toUpperCase() === 'B35200'){
   window.open('https://manuals.medtronic.com/content/dam/emanuals/neuro/M929535A_b_074_view.pdf', '_blank');

   }else if(pacerValue.toUpperCase() === 'OPTIMA' || pacerValue.toUpperCase() === 'OPTIMA COIL'){
   alert("Page 10 for MRI information.")
   window.open('Docs/optima-coil.pdf', '_blank');

    }else if (pacerValue.toUpperCase() === 'BARRICADE' ||  pacerValue.toUpperCase() === 'BARRICADE COIL'){
    alert("Page 8 for MRI information.")
    window.open('Docs/barricade-coil.pdf', '_blank');

   
   }else if(pacerValue.toUpperCase() === 'PENUMBRA' || pacerValue.toUpperCase() === 'PENUMBRA COIL'){
    window.open('https://www.penumbrainc.com/nl/mri-compatibility/', '_blank'); 

   }else if(pacerValue.toUpperCase() === 'SPETZLER' || pacerValue.toUpperCase() === 'SPETZLER TITANIUM ANEURYSM CLIP'){
    alert("Pages 190 and 191 have Spetzler aneurysm clip information")
    window.open('https://www.mrisafety.com/TMDL_list.php?goto=190', '_blank'); 
   

 }else if(pacerValue.toUpperCase() === 'INTELLIS' || pacerValue.toUpperCase() === '97715'){
   window.open('https://manuals.medtronic.com/content/dam/emanuals/neuro/M939858A_b_027_view.pdf', '_blank');

    }else if(pacerValue.toUpperCase() === 'OPTION' || pacerValue.toUpperCase() === 'OPTION ELITE'){
   window.open('https://www.argonmedical.com/assets/files/m/optionelite-patient-guide.pdf', '_blank');
   
    }else if(pacerValue.toUpperCase() === 'AXONICS' || pacerValue.toUpperCase() === '1101' ||pacerValue.toUpperCase() === '4101'){
   window.open('https://www.axonics.com/images/hcp/resources/03-16-2022/110-0093-001rY_-_MRI_Patient_Guidelines_Axonics_SNM_System_US_English.pdf', '_blank'); 

    }else if(pacerValue.toUpperCase() === 'INTELLIS' || pacerValue.toUpperCase() === '97716'){
   window.open('https://manuals.medtronic.com/content/dam/emanuals/neuro/M939858A_b_027_view.pdf', '_blank'); 

}else if(pacerValue.toUpperCase() === 'PRIMEADVANCED' || pacerValue.toUpperCase() === '37702'){
   window.open('https://manuals.medtronic.com/content/dam/emanuals/neuro/M939858A_b_027_view.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'VANTA' || pacerValue.toUpperCase() === '977006'){
   window.open('https://manuals.medtronic.com/content/dam/emanuals/neuro/M939858A_b_027_view.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'ITREL 4' || pacerValue.toUpperCase() === '37704'){
   window.open('https://manuals.medtronic.com/content/dam/emanuals/neuro/M939858A_b_027_view.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'ITREL 4' || pacerValue.toUpperCase() === '37703'){
   window.open('https://manuals.medtronic.com/content/dam/emanuals/neuro/M939858A_b_027_view.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'ITREL 3' || pacerValue.toUpperCase() === '7425'){
   window.open('https://manuals.medtronic.com/content/dam/emanuals/neuro/M939858A_b_027_view.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'RESTORESENSOR' || pacerValue.toUpperCase() === '37714'){
   window.open('https://manuals.medtronic.com/content/dam/emanuals/neuro/M939858A_b_027_view.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'RESTOREULTRA' || pacerValue.toUpperCase() === '97712'){
   window.open('https://manuals.medtronic.com/content/dam/emanuals/neuro/M939858A_b_027_view.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'RESTOREADVANCED' || pacerValue.toUpperCase() === '97713'){
   window.open('https://manuals.medtronic.com/content/dam/emanuals/neuro/M939858A_b_027_view.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'RESTORESENSOR' || pacerValue.toUpperCase() === '97714'){
   window.open('https://manuals.medtronic.com/content/dam/emanuals/neuro/M939858A_b_027_view.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'RESTORE' || pacerValue.toUpperCase() === '37711'){
   window.open('https://manuals.medtronic.com/content/dam/emanuals/neuro/M939858A_b_027_view.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'SYNERGY' || pacerValue.toUpperCase() === '7427'){
   window.open('https://manuals.medtronic.com/content/dam/emanuals/neuro/M939858A_b_027_view.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'VERSITREL' || pacerValue.toUpperCase() === '7427V'){
   window.open('https://manuals.medtronic.com/content/dam/emanuals/neuro/M939858A_b_027_view.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'MEDTRONIC NEUROSTIMULATOR' || pacerValue.toUpperCase() === '7427V'){
   window.open('https://manuals.medtronic.com/content/dam/emanuals/neuro/M939858A_b_027_view.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'SYNCHROMED II' || pacerValue.toUpperCase() === '8637'  || pacerValue.toUpperCase() === 'SYNCHROMED'  || pacerValue.toUpperCase() === 'SYNCHROMED2'  || pacerValue.toUpperCase() === 'SYNCHROMED 2' || pacerValue.toUpperCase() === '8626'  || pacerValue.toUpperCase() === '8627'  || pacerValue.toUpperCase() === '8615'  || pacerValue.toUpperCase() === '8616'  || pacerValue.toUpperCase() === '8617'  || pacerValue.toUpperCase() === '8616'  || pacerValue.toUpperCase() === 'ISOMED'  || pacerValue.toUpperCase() === '8472'){
   window.open('https://manuals.medtronic.com/content/dam/emanuals/neuro/M005186C_a_001_view.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'AMS 700'){
   window.open('https://www.bostonscientific.com/content/dam/elabeling/uro-ph/ams700-ms-pump/50654574-01A_AMS700_MSPump_IFU_multi_s.pdf', '_blank');


}else if(pacerValue.toUpperCase() === 'ISOMED' || pacerValue.toUpperCase() === '8472'){
   window.open('https://manuals.medtronic.com/content/dam/emanuals/neuro/M005186C_a_001_view.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'INTERSTIM' || pacerValue.toUpperCase() === '3023'){
   window.open('https://manuals.medtronic.com/content/dam/emanuals/neuro/M980291A_a_017_view_color.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'INTERSTIM II' || pacerValue.toUpperCase() === '3058'){
   window.open('https://manuals.medtronic.com/content/dam/emanuals/neuro/M980291A_a_017_view_color.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'INTERSTIM MICRO' || pacerValue.toUpperCase() === '97810'){
   window.open('https://manuals.medtronic.com/content/dam/emanuals/neuro/M980291A_a_017_view_color.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'INTERSTIM X'  || pacerValue.toUpperCase() === '97800'){
   window.open('https://manuals.medtronic.com/content/dam/emanuals/neuro/M980291A_a_017_view_color.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'INTERSTIM TWIN' || pacerValue.toUpperCase() === '7427T'){
   window.open('https://manuals.medtronic.com/content/dam/emanuals/neuro/M980291A_a_017_view_color.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'ENTERRA' || pacerValue.toUpperCase() === '3116'){
        alert("NOT COMPATIBLE FOR MRI!!!!!");

}else if(pacerValue.toUpperCase() === 'ENTERRA II' || pacerValue.toUpperCase() === '37800'){
        alert("NOT COMPATIBLE FOR MRI!!!!!");

}else if(pacerValue.toUpperCase() === 'ENITRA'){
   window.open('https://www.promricheck.com/spring/welcome?execution=e11s1', '_blank');

   
 }else if(pacerValue.toUpperCase() === 'EVITY'){
   window.open('https://www.promricheck.com/spring/welcome?execution=e11s1', '_blank');

}else if(pacerValue.toUpperCase() === 'ENTICOS'){
   window.open('https://www.promricheck.com/spring/welcome?execution=e11s1', '_blank');

}else if(pacerValue.toUpperCase() === 'EDORA'){
   window.open('https://www.promricheck.com/spring/welcome?execution=e11s1', '_blank');


}else if(pacerValue.toUpperCase() === 'NUCLEUS'){
   window.open('https://www.cochlear.com/us/en/professionals/resources-and-training/mri-guidelines', '_blank');

}else if(pacerValue.toUpperCase() === 'OSIA'){
   window.open('https://www.cochlear.com/us/en/professionals/resources-and-training/mri-guidelines', '_blank');

}else if(pacerValue.toUpperCase() === 'BAHA'){
   window.open('https://www.cochlear.com/us/en/professionals/resources-and-training/mri-guidelines', '_blank');
 
}else if(pacerValue.toUpperCase() === 'INSPIRE'){
   window.open('https://manuals.inspiresleep.com/content/widgets/manual.php?NDg5fDF8MQ==', '_blank');

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

}else if(pacerValue.toUpperCase() === 'LIVANOVA' || pacerValue.toUpperCase() === '103' || pacerValue.toUpperCase() === '105' || pacerValue.toUpperCase() === '106' || pacerValue.toUpperCase() === '1000'){
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

}else if(pacerValue.toUpperCase() === 'EMBLEM' ){
   window.open('https://www.bostonscientific.com/content/dam/elabeling/crm/92346926-001_IMAGEREADY_MRITG_en-USA_S.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'PRECISION MONTAGE MRI' || pacerValue.toUpperCase() === 'SC-1200' ){
   window.open('https://www.bostonscientific.com/content/dam/elabeling/nm/91035972-02_RevA_ImageReady_MRI_Full_Body_Guidelines_for_Precision_Montage_MRI_Spinal_Cord_Stimulator_System_MRI_en-US_S.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'MONTAGE' || pacerValue.toUpperCase() === 'SC-1200' ){
   window.open('https://www.bostonscientific.com/content/dam/elabeling/nm/91035972-02_RevA_ImageReady_MRI_Full_Body_Guidelines_for_Precision_Montage_MRI_Spinal_Cord_Stimulator_System_MRI_en-US_S.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'PRECISION SPECTRA' || pacerValue.toUpperCase() === 'SC-1132' ){
   window.open('https://www.bostonscientific.com/content/dam/elabeling/nm/91057049-04_ImageReady%E2%84%A2_MRI_Head_Only_Guidelines_for_Precision_Spectra%E2%84%A2_Spinal_Cord_Stimulator_System_s.pdf', '_blank');

}else if(pacerValue.toUpperCase() === 'SPECTRA WAVEWRITER' || pacerValue.toUpperCase() === 'SC-1160' ){
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

}else if(pacerValue.toUpperCase() === 'CODMAN MICROSENSOR'){
   window.open('https://www.integralife.com/file/general/1571417954.pdf', '_blank');  

}else if(pacerValue.toUpperCase() === 'UROLIFT'){
   window.open('https://cdn2.hubspot.net/hubfs/2618738/L00135-01_RevA%20Patient%20Implant%20Card.pdf', '_blank');  


}else if(pacerValue.toUpperCase() === 'PIPELINE'){
   alert('MRI information page 5');
   window.open('https://manuals.medtronic.com/content/dam/emanuals/neurovascular/M002318CDOC2_B.pdf', '_blank');  

}else if(pacerValue.toUpperCase() === 'WAVECREST'){
   window.open('http://www.mrisafety.com/OBJ_STATUS_view.php?editid1=11', '_blank');  

}else if(pacerValue.toUpperCase() === 'VILIGANT'|| pacerValue.toUpperCase() === 'D220' || pacerValue.toUpperCase() === 'D221' || pacerValue.toUpperCase() === 'D232' || pacerValue.toUpperCase() === 'D233' || pacerValue.toUpperCase() === 'G248' || pacerValue.toUpperCase() === 'G247'){
   window.open('https://www.bostonscientific.com/content/dam/elabeling/crm/359450-007_Tachy_MRI_TG_us_s.pdf', '_blank');  

}else if(pacerValue.toUpperCase() === 'LUX-DX' || pacerValue.toUpperCase() === 'M301'){
   window.open('https://www.bostonscientific.com/content/dam/elabeling/crm/92216906-001_IMAGEREADY_MRITG_en_S.pdf', '_blank');  

   



}else{
      alert("Something went wrong please try again.  Check spelling and model number. If that doesn't work use slideout menu for manufactures website search."
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






