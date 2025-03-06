import {exec} from "child_process";


export class VpnController {
    constructor() {}
 
    async runVPN(command: string): Promise<string> {
       return new Promise((resolve, reject) => {
            exec(command, { cwd: 'C:/Program Files (x86)/ExpressVPN/services/' }, (error: any, stdout: string, stderr: string) => {
                if (error) {
                    console.error(`Error executing command: ${error.message}`);
                    reject(error.message);
                    return;
                }

                if (stderr) {
                    console.error(`Error: ${stderr}`);
                    reject(stderr);
                    return;
                }

                console.log(`Output: ${stdout}`);
                resolve(stdout.trim());
            });
        });
    }

    async vpnConnnect(location: string){
        this.runVPN(`ExpressVPN.CLI connect "${location}"`);
        }
    
    async vpnDisconnect(){
        this.runVPN('ExpressVPN.CLI disconnect');
        }
    
    async vpnCheckStatus(): Promise<string> {
        return await this.runVPN('ExpressVPN.CLI status')
    }

    async sleepVPN(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
    
    }

export default VpnController