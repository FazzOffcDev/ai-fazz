import aw from 'gradient-string';
const log = console.log;
import adel from 'child_process';

export async function logo(){
await clear();
await start();
} function clear(){
	adel.spawn('clear',{stdio:'inherit'});
} async function start(){
const teks =`
     WWWWWWWWWWWWWWWW.  ,xkl.  lWWWWWWWWWWWWWWWWWW
     WWMWWWMWWWMWWWMd           XWWMWWWMWWMWWWMWWW
     MMWWMMWWMWWWMWW            lMWWMMWWMMWWMMWWMW
     WWMMWWMWWWMWWWk             WMMWWMMWWMMWWMWWW
     MMWWMMWWMMWWMW:             OWWMMWWMMWWMMWWMM
     WWMMWWMMWWMWWWMWXK0Okkkkk0XNWMMWWMMWWMMWWMMWW              MMWWMMWWMXOxo:cdO0KXNNXNX0Oxo:cdO0NMMWWMMWWMM
     WWMM0o;.                           .'ckNWMMWW
     MMWNc.                               .;KMWWMM
     WWMMWWWXOdoc:;'.....   .....',;cldxKNMMWWMMWW
     MMWWMMNd.  .,W:,::ccokdccc:;'NW.   .l0WMMWWMW
     WWMMKc       '0;...:XWWo...,kMk       .lKMWWW
     MMWXdl:,.     .KMWWWMWWWMWWWx'     ..,:coXWMW
     WWWWWWWWWWN0:   cNWWWWWWWWd.   'x0NWWWWWWWWWW
     WWWWWWWWWWd.     .dWWWWWO.      .c0WWWWWWWWWW
     WWWWWWWWWWNOo;.     cKWc    .:xKWWWWWWWWWWWWW
     WWWWWWWWWWWWWWWXx:.  o:  .lKWWWWWWWWWWWWWWWWW
     WWWWWWWWWWWWWWWWWWWXxk .xWWWWWWWWWWWWWWWWWWWW
     WWWWWWWWWWWWWWWWWWWWW:cNWWWWWWWWWWWWWWWWWWWWW
  
    ██   ██▒ ███▄    █ ▓█████▄▄▄█████▓ ▄▄▄       ██▓
   ▒▒ █ █ ▒░ ██ ▀█   █ ▓█   ▀▓  ██▒ ▓▒▒████▄    ▓██▒
   ░░  █   ░▓██  ▀█ ██▒▒███  ▒ ▓██░ ▒░▒██  ▀█▄  ▒██▒
    ░ █ █ ▒ ▓██▒  ▐▌██▒▒▓█  ▄░ ▓██▓ ░ ░██▄▄▄▄██ ░██░
   ▒██▒ ▒██▒▒██░   ▓██░░▒████▒ ▒██▒ ░  ▓█   ▓██▒░██░
   ▒▒ ░ ░▓ ░░ ▒░   ▒ ▒ ░░ ▒░ ░ ▒ ░░    ▒▒   ▓▒█░░▓
   ░░   ░▒ ░░ ░░   ░ ▒░ ░ ░  ░   ░      ▒   ▒▒ ░ ▒ ░
    ░    ░     ░   ░ ░    ░    ░        ░   ▒    ▒ ░
    ░    ░           ░    ░  ░              ░  ░ ░
            WELCOME TO XNETGPT x WORMGPT
`;
    log(aw(['red','red'])(teks));
}
