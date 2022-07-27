 
 
      let Connectted = false;
      let port;
      let writer;
      var target_id;
      const enc = new TextEncoder();

      async function onChangespeech() {
        if (!Connectted) {
          alert("you must connect to the usb in order to use this.");
          return;
        }
       
        try {
          const commandlist = content;
          const commandSplit = commandlist.split(" ")
          const command = commandSplit.slice(-1);
          const computerText = `${command}@`;
          await writer.write(enc.encode(computerText));
        } catch (e) {
          console.log(e);
        }
      }
    
      

    async function onConnectUsb() {
      try {
      //  const requestOptions = {
          // Filter on devices with the Arduino USB vendor ID.
          //filters: [{ usbVendorId: 0x2341 }],
      //  };

        // Prompt user to select any serial port.
        port = await navigator.serial.requestPort();
		// Wait for the serial port to open.
        await port.open({ baudRate: 9600 });
        writer = port.writable.getWriter();
		// Allow the serial port to be closed later.
        //writer.releaseLock();
        Connectted = true;
      } catch (e) {
        console.log("err", e);
      }
    }
 
  