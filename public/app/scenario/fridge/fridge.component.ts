import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ScenarioService } from '../scenario.service';
import { AuthenticationService } from '../../authentication/authentication.service';
import { ScenarioGlobals } from '../scenario.globals';

@Component({
    selector: 'fridge',
    templateUrl: './app/scenario/fridge/fridge.template.html',
  styleUrls: ['./app/scenario/fridge/fridge.style.css']
})
export class FridgeComponent {

  user: any;
  fridge: any;
  strains: any[]; // have strainNum, phageType
  currStrains: any[];
  shelf: number = 0;
  maxShelf: number;
  spots: number;
  errorMessage: string;
  private subscription: any;

  constructor(private _router: Router,
               private _route: ActivatedRoute,
               private _authenticationService: AuthenticationService,
               private _scenarioService: ScenarioService) {
    this.maxShelf = ScenarioGlobals.nFridgeShelf;
    this.spots = ScenarioGlobals.nFridgeSpots;
  }

  /**
   * Initailize the fridge when creating component
   */
  ngOnInit(){
     this.user = this._authenticationService.user;
    let userId = this.user.userId || this.user.id;
    let scenId = this._route.snapshot.paramMap.get('scenId');
    this.subscription = this._scenarioService.getFridge(userId, scenId)
    .subscribe(
      (fridge) => {this._initFridge(fridge)},
      (err) => {
        if(err.status === 307){
        this._createFridge(userId, scenId);
      } else {
        this.errorMessage = err.message;
      } }
    );
  }

  _createFridge(userId: number, scenId: string){
    this.subscription = this._scenarioService.createFridge(userId, scenId)
    .subscribe((fridge)=>{
      this._initFridge(fridge);
    }, (err)=>{
      this.errorMessage = err.message;
    });
  }

  _initFridge(newFridge: any){
    this.fridge = newFridge;
    this.strains = this._fillStrains(newFridge.strains);
    this._currStrains();
    this._scenarioService.setScenario(newFridge.scenarioDetails, newFridge.guesses);
  }

  ngOnDestory(){
    this.subscription.unsubscribe();
  }

  /**
   * @param {any[]} fridgeStrains - array for created strains in the fridge
   * @returns {any[]} - array of all slots in fridge, including empty
   */
  _fillStrains(fridgeStrains: any[]): any[]{
    var out = [];
    for(let i = 0; i < this.maxShelf*this.spots; i++){
      out.push({strainNum: i, phageType: 'empty'});
    }
    // add original strains
    for(let i=0; i < fridgeStrains.length; i++){
      let n = fridgeStrains[i].strainNum;
      out[n] = fridgeStrains[i];
    }
    return out;
  }

  /**
   * Sets strains for visible shelf
   */
  _currStrains(){
    let start = this.shelf*this.spots;
    let end = start+this.spots;
    this.currStrains = this.strains.slice(start,end);
  }

  /**
   * Increase or decrease visible shelf
   * @param {number} inc - amout to change shelf by
   */
  changeShelf(inc: number){
    if(this.shelf <= this.maxShelf-1 && inc === 1){
      this.shelf++;
      this._currStrains();
    } else if(this.shelf > 0 && inc === -1){
      this.shelf--;
      this._currStrains();
    }
  }

  /**
   * Set visible shelf to a specific number;
   * used to jump to the beginning and end
   * @param {number} nShelf - shelf to go to
   */
  setShelf(nShelf: number){
    this.shelf = nShelf;
    this._currStrains();
  }

  /**
   * Determine if strain can be dropped in a slot
   * can be dropped if slot is empty and src is small or large
   *
   * Called by allowDrop
   *
   * @param {number} spot - spot to test to see if can drop
   *
   * @returns {any} - function which returns true or false if
   * strain can be dropped in slot
   */
  canDrop(spot: number): any {
  return (dragData: any) => {
    let out = false;
    if(dragData && dragData.hasOwnProperty('src')){
      if(dragData.src === 'small' || dragData.src=== 'large'){
        let trySpot = this.strains[spot];
        if(trySpot.phageType === 'empty'){
          out = true;
        }
      }
    }
    return out;
  };
}


  /**
   * Adds a new strain to a fridge
   *
   * Called by onDropSucess of slot
   *
   * @param {any} $event - drag event, incuding data for strain to add;
   * has: strainNum, mutationList, deletion
   * @param {number} spot - slot to drop new strain
   */
  dropStrain($event: any, spot: number){
    // onDropSuccess
    let strain = $event.dragData;
    // need strainNum, mutationList, deletion
    let newStrain = {
      strainNum: spot,
      mutationList: strain.shifts,
      deletion: strain.deletion
    }
    // add to fridge
    let userId = this.user.userId || this.user.id;
    let scenCode = this.fridge.scenario.scenCode;
    this._scenarioService.addStrain(newStrain, userId, scenCode)
    .subscribe((res)=>{
      console.log(res);
      this.strains[spot] = {
        // strainNum comment phageType id
        strainNum: res.strainNum,
        comment: res.comment,
        phageType: res.phageType,
        id: res.id
      }
      this._currStrains();
    },
              (err)=>{
      this.errorMessage = err;
    })
  }

  editPhage(src: number) {
    console.log(src, this.strains[src]);
  }
}
