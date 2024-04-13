setInterval(()=>{
   d =new Date();
   htime=d.getHours();
   mtime=d.getMinutes();
   stime=d.getSeconds();

   hrotation = 10*htime + mtime/2 + stime/120;
   mrotation = mtime*6 + stime/5;
   srotation = stime*6;

   hr.style.transform = `rotate(${hrotation}deg)`;
   min.style.transform = `rotate(${mrotation}deg)`;
   sec.style.transform = `rotate(${srotation}deg)`;
},1000)