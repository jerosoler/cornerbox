class cornerBox {

    static get inputProperties () {
      return [
        `--cornerbox-lenght`,
        `--cornerbox-line`,
        `--cornerbox-color`,
        
      ];
    }

    paint(ctx, size, props) {
      const lineBox = parseInt(props.get(`--cornerbox-line`)); 
      const lineBoxLenght = parseInt(props.get(`--cornerbox-lenght`));
      const colorBox = props.get(`--cornerbox-color`).toString().trim(); 
      
      ctx.lineWidth = lineBox;
      ctx.beginPath();

      /* UP Left */ 
      ctx.moveTo(0, 0);
      ctx.lineTo(0, lineBoxLenght);
      ctx.moveTo(0, 0);
      ctx.lineTo(lineBoxLenght, 0);

      /* Up Right */
      ctx.moveTo(size.width-lineBoxLenght, 0);
      ctx.lineTo(size.width, 0);
      ctx.moveTo(size.width, 0);
      ctx.lineTo(size.width, lineBoxLenght);

      /* Down Left */
      ctx.moveTo(0, size.height-lineBoxLenght);
      ctx.lineTo(0, size.height);
      ctx.moveTo(0, size.height);
      ctx.lineTo(lineBoxLenght, size.height); 

      /* Down Right */
      ctx.moveTo(size.width, size.height-lineBoxLenght);
      ctx.lineTo(size.width, size.height);
      ctx.moveTo(size.width, size.height);
      ctx.lineTo(size.width-lineBoxLenght, size.height);

      ctx.strokeStyle = colorBox;
      ctx.stroke();
      
    }
  }
  
  registerPaint('cornerbox', cornerBox);