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


    }else if(pacerValue.toUpperCase() === 'YASARGIL' || pacerValue.toUpperCase() === 'SENZA'){

   window.open('Docs/MRI-Safety-Information-Yasargil-Titanium-and-Phynox-Aneurysm-Clips.pdf', '_blank' );

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

}else if(pacerValue.toUpperCase() === 'MICRA VR' || pacerValue.toUpperCase() === 'MC1VR01'){

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


 }else if(pacerValue.toUpperCase() === 'INTELLIS' || pacerValue.toUpperCase() === '97715'){
   window.open('https://manuals.medtronic.com/content/dam/emanuals/neuro/M939858A_b_027_view.pdf', '_blank'); 

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

}else if(pacerValue.toUpperCase() === 'SYNCHROMED II' || pacerValue.toUpperCase() === '8637'){
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

      }else if(pacerValue.toUpperCase() === 'ASSURITY' || pacerValue.toUpperCase() === 'PM1272' ){
   window.open('abbottImplants/assurity.pdf', '_blank');

     }else if(pacerValue.toUpperCase() === 'ASSURITY' || pacerValue.toUpperCase() === 'PM2272' ){
   window.open('abbottImplants/assurity.pdf', '_blank');

     }else if(pacerValue.toUpperCase() === 'ENDURITY' || pacerValue.toUpperCase() === 'PM1172' ){
   window.open('abbottImplants/assurity.pdf', '_blank');

     }else if(pacerValue.toUpperCase() === 'ENDURITY' || pacerValue.toUpperCase() === 'PM2172' ){
   window.open('abbottImplants/assurity.pdf', '_blank');

    }else if(pacerValue.toUpperCase() === 'ACCENT' || pacerValue.toUpperCase() === 'PM1224' ){
   window.open('abbottImplants/assurity.pdf', '_blank');

    }else if(pacerValue.toUpperCase() === 'ACCENT' || pacerValue.toUpperCase() === 'PM2218' ){
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

    }else if(pacerValue.toUpperCase() === 'PROCLAIM' || pacerValue.toUpperCase() === '3662' ){
   window.open('abbottImplants/neurostimulation.pdf', '_blank');

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

       }else if(pacerValue.toUpperCase() === 'SPECTRA WAVEWRITER' || pacerValue.toUpperCase() === 'SC-1160' ){
     window.open('https://www.bostonscientific.com/content/dam/elabeling/nm/91171762-02_ImageReady%E2%84%A2_MRI_Head_Only_Guidelines_for_Spectra_WaveWriter%E2%84%A2_Spinal_Cord_Stimulator_System_s.pdf', '_blank');

     }else{
        alert("Something went wrong please try again.  Check spelling and model number.");
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

