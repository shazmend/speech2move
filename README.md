# speech2move
The goal of this project is to recognize the speaker's voice and turn it into a written text that is sent as a command to the serial port connected to the Arduino and the motor to move the arm based on this command
This project contains:
1- An HTML file that converts audio to text using the google cloud speech API
2- A javascript file that performs the recognation process and sends the typed text to the serial port
3- Arduino file that controls the movement of the arm based on the command sent
