class cornerBox {

    static get inputProperties () {
      return [
        `--cornerbox-width`,
        `--cornerbox-length`,
        `--cornerbox-color`,
        
      ];
    } 

    paint(ctx, size, props) {
      const lineBox = parseInt(props.get(`--cornerbox-length`)); 
      const lineBoxwidth = parseInt(props.get(`--cornerbox-width`));
      const colorBox = props.get(`--cornerbox-color`).toString().trim(); 
      
      ctx.lineWidth = lineBox;
      ctx.beginPath();

      /* UP Left */ 
      ctx.moveTo(0, 0);
      ctx.lineTo(0, lineBoxwidth);
      ctx.moveTo(0, 0);
      ctx.lineTo(lineBoxwidth, 0);

      /* Up Right */
      ctx.moveTo(size.width-lineBoxwidth, 0);
      ctx.lineTo(size.width, 0);
      ctx.moveTo(size.width, 0);
      ctx.lineTo(size.width, lineBoxwidth);

      /* Down Left */
      ctx.moveTo(0, size.height-lineBoxwidth);
      ctx.lineTo(0, size.height);
      ctx.moveTo(0, size.height);
      ctx.lineTo(lineBoxwidth, size.height); 

      /* Down Right */
      ctx.moveTo(size.width, size.height-lineBoxwidth);
      ctx.lineTo(size.width, size.height);
      ctx.moveTo(size.width, size.height);
      ctx.lineTo(size.width-lineBoxwidth, size.height);

      ctx.strokeStyle = colorBox;
      ctx.stroke();
      
    }
  }
  
  registerPaint('cornerbox', cornerBox);