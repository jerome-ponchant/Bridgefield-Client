import { firstValueFrom } from 'rxjs';



import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RuntimeConfigService {
  static COUNT=0;

  private  config: any;
  private  env: any;
  private id=0;

  constructor(private http: HttpClient) {
    this.load = this.load.bind(this);
    this.getConfig = this.getConfig.bind(this);
    this.getEnv = this.getEnv.bind(this);
    this.id = RuntimeConfigService.COUNT++;
    console.log('Configuration constructed');
    console.log('Env : '+this.env);
    console.log(' Id:'+this.id);
  }



  /**
   * Use to get the data found in the second file (config file)
   * Lazy initialization to use in constructors ( deferred asyn calls )
  */
  public async  getConfig(key: string){
    console.log('getConfig started');
    console.log('Env : '+this.env);
    console.log(' Id:'+this.id);
    await this.load();
    return this.config[key];
  }

  /**
   * Use to get the data found in the first file (env file)
   * Lazy initialization to use in constructors ( deferred asyn calls )
   */
  public async  getEnv(key: any) {
    console.log('getEnv started');
    console.log('Env : '+this.env);
    console.log(' Id:'+this.id);
    await this.load();
    return this.env[key];
  }

  /**
   * This method:
   *   a) Loads "env.json" to get the current working environment (e.g.: 'production', 'development')
   *   b) Loads "config.[env].json" to get all env's variables (e.g.: 'config.development.json')
   */
  async load() {
    try{
      if(this.env == null)
      this.env = await firstValueFrom(this.http.get('./assets/env/env.json'));
      if(this.config == null)
      this.config = await firstValueFrom(this.http.get('./assets/env/'+'env.'+this.env.env+'.json'));
    }
    catch (e){
      console.log(e);
    }
    console.log('Load finished');
    console.log('Env : '+this.env);
    console.log(' Id:'+this.id);
  }
  }

